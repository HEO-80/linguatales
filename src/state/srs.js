'use client';

/**
 * src/state/srs.js
 *
 * Almacén persistido del repaso espaciado (§2 linguatales-srs-spec.md).
 * Mismo patrón que src/state/progress.js (cache en memoria + pub/sub +
 * useSyncExternalStore + debounce a localStorage), pero indexado por
 * IDIOMA/NIVEL en vez de por relato: las tarjetas son de nivel, no cambian
 * al cambiar de historia. Por eso vive fuera de ReaderContext (que se
 * remonta en cada navegación a un relato distinto) — el repaso tiene que
 * seguir funcionando aunque el usuario esté leyendo otro relato.
 *
 * Clave de localStorage: 'linguatales.srs.v1'.
 * Envelope guardado: { v: 1, data: { [IDIOMA/NIVEL]: { [cardKey]: card } } }.
 */

import { useSyncExternalStore } from 'react';
import { sm2, todayInt } from '@/lib/srs';

const STORAGE_KEY = 'linguatales.srs.v1';
const CURRENT_VERSION = 1;
const SAVE_DEBOUNCE_MS = 500;

const levelKey = (lang, level) => `${lang}/${level}`;

let cardsData = null; // { [levelKey]: { [cardKey]: card } } | null hasta el primer load
let devDayOffset = 0; // solo desarrollo — "Avanzar un día" (§4), nunca en producción
let cache = null; // snapshot { cards, day } que ve useSyncExternalStore
let listeners = new Set();
let saveTimer = null;

function readFromStorage() {
  if (typeof window === 'undefined') return {};
  let raw;
  try {
    raw = window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return {};
  }
  if (!raw) return {};

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return {};
  }
  if (parsed.v !== CURRENT_VERSION) return {};
  return parsed.data || {};
}

function writeToStorage(data) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: CURRENT_VERSION, data }));
  } catch {
    // localStorage lleno o inaccesible (modo privado, etc): se ignora.
  }
}

function ensureLoaded() {
  if (cardsData === null) {
    cardsData = readFromStorage();
    cache = { cards: cardsData, day: todayInt(devDayOffset) };
  }
}

function notify() {
  cache = { cards: cardsData, day: todayInt(devDayOffset) };
  listeners.forEach((l) => l());
}

export function subscribeToSrs(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getSrsSnapshot() {
  ensureLoaded();
  return cache;
}

// Referencia estable entre llamadas — igual que progress.js, para no violar
// la exigencia de useSyncExternalStore de que el snapshot de servidor no
// cambie de identidad entre renders.
const EMPTY_SNAPSHOT = { cards: {}, day: 0 };
export function getSrsServerSnapshot() {
  return EMPTY_SNAPSHOT;
}

/** Hook hidratación-segura — úsalo en cualquier componente que lea el
 * almacén de repaso durante el render (ver useProgressSnapshot). */
export function useSrsSnapshot() {
  return useSyncExternalStore(subscribeToSrs, getSrsSnapshot, getSrsServerSnapshot);
}

function persist() {
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    writeToStorage(cardsData);
    saveTimer = null;
  }, SAVE_DEBOUNCE_MS);
}

/**
 * Engancha cualquier juego (§3): llamar EN EL MOMENTO de responder, antes de
 * pintar el feedback. `meta` = { kind, q, a, hint } — se guarda tal cual en
 * la tarjeta, así el repaso no depende de qué relato o bloque esté abierto.
 * `q` es la nota SM-2 (0 · 3 · 4 · 5 según quién llama, ver §3).
 */
export function grade(lang, level, key, meta, q) {
  ensureLoaded();
  const lvKey = levelKey(lang, level);
  const levelCards = cardsData[lvKey] || {};
  const prev = levelCards[key];
  const { ease, reps, interval, lapses } = sm2(prev, q);
  const day = todayInt(devDayOffset);

  const card = {
    ease,
    reps,
    interval,
    lapses,
    due: day + interval,
    last: day,
    seen: (prev?.seen ?? 0) + 1,
    kind: meta.kind,
    q: meta.q,
    a: meta.a,
    hint: meta.hint
  };

  cardsData = { ...cardsData, [lvKey]: { ...levelCards, [key]: card } };
  persist();
  notify();
  return card;
}

/**
 * Cesta de repaso (§3 linguatales-cesta-spec.md): mete una palabra en el SRS
 * vencida HOY sin pasar por SM-2 — pedir verla hoy no es graduar. Si ya
 * tenía tarjeta conserva su historial (ease/reps/interval/lapses/seen) y
 * solo adelanta due/last; si no, arranca de una tarjeta nueva.
 */
export function reviewNow(lang, level, key, meta) {
  ensureLoaded();
  const lvKey = levelKey(lang, level);
  const levelCards = cardsData[lvKey] || {};
  const prev = levelCards[key];
  const day = todayInt(devDayOffset);

  const card = {
    ease: prev?.ease ?? 2.5,
    reps: prev?.reps ?? 0,
    interval: prev?.interval ?? 0,
    lapses: prev?.lapses ?? 0,
    seen: prev?.seen ?? 0,
    due: day,
    last: day,
    kind: meta.kind,
    q: meta.q,
    a: meta.a,
    hint: meta.hint
  };

  cardsData = { ...cardsData, [lvKey]: { ...levelCards, [key]: card } };
  persist();
  notify();
  return card;
}

/** Solo desarrollo: adelanta el día virtual sin tocar el reloj real — el
 * componente que expone el botón se encarga de esconderlo en producción. */
export function advanceDay() {
  devDayOffset += 1;
  notify();
}

/** Tarjetas de este idioma y nivel (objeto vacío si no hay ninguna aún). */
export function cardsOf(lang, level, snapshot) {
  const s = snapshot ?? getSrsSnapshot();
  return s.cards[levelKey(lang, level)] || {};
}
