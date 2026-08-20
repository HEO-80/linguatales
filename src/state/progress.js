'use client';

/**
 * src/state/progress.js
 *
 * Progreso local del lector interactivo (5 juegos + lectura), por relato.
 * Vive en localStorage, independiente del progreso de Supabase/streak que
 * gestiona src/lib/storage/progressStore.ts — son capas distintas, no se
 * fusionan.
 *
 * Clave de localStorage: 'linguatales.progress.v1'.
 * Envelope guardado: { v: 1, data: { [storyKey]: storyObj } }.
 */

import { storyKey as buildStoryKey } from '@/lib/routes/storyKey';
import { storiesOf } from '@/data/stories';
import { LEVELS } from '@/theme/languages';
import { buildWordBank } from '@/components/Games/SelectWordGame/buildWordBank';

const STORAGE_KEY = 'linguatales.progress.v1';
const CURRENT_VERSION = 1;
const SAVE_DEBOUNCE_MS = 500;

export const EMPTY_STORY = Object.freeze({
  order: { done: false, best: 0, attempts: 0 },
  gap: { done: false, solved: [], attempts: 0 },
  match: { done: false, pairs: 0, attempts: 0 },
  word: { done: false, correct: 0, total: 0, seen: [], correctIdx: [] },
  speak: { best: {} },
  read: { seen: false, translationUsed: false },
  updatedAt: null
});

function cloneEmptyStory() {
  return {
    order: { done: false, best: 0, attempts: 0 },
    gap: { done: false, solved: [], attempts: 0 },
    match: { done: false, pairs: 0, attempts: 0 },
    word: { done: false, correct: 0, total: 0, seen: [], correctIdx: [] },
    speak: { best: {} },
    read: { seen: false, translationUsed: false },
    updatedAt: null
  };
}

function union(a, b) {
  return [...new Set([...(a || []), ...(b || [])])].sort((x, y) => x - y);
}

/* ── estado en memoria + pub/sub para useSyncExternalStore ──────────── */

let cache = null; // { [storyKey]: storyObj } | null hasta el primer load
let listeners = new Set();
let saveTimer = null;

function notify() {
  listeners.forEach((l) => l());
}

export function subscribeToProgress(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getProgressSnapshot() {
  if (cache === null) cache = readFromStorage();
  return cache;
}

export function getProgressServerSnapshot() {
  return {};
}

/* ── lectura/escritura de localStorage ───────────────────────────────── */

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

  if (parsed.v === undefined) {
    // v0 legado sin versión: se ignora en memoria, no se borra la clave.
    console.warn('[progress] versión de progreso desconocida (legado sin v) — ignorada.');
    return {};
  }
  if (parsed.v > CURRENT_VERSION) {
    // Versión futura desconocida: se ignora en memoria, no se borra la clave.
    console.warn(`[progress] versión de progreso futura (v${parsed.v}) — ignorada.`);
    return {};
  }
  if (parsed.v === CURRENT_VERSION) {
    return parsed.data || {};
  }

  // parsed.v < CURRENT_VERSION: hueco para futuras migraciones.
  // switch (parsed.v) { case 0: /* migrar a v1 */ break; }
  // Hoy solo existe v1, así que no hay nada que migrar todavía.
  return {};
}

export function loadProgress() {
  cache = readFromStorage();
  return cache;
}

function writeToStorage(data) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ v: CURRENT_VERSION, data }));
  } catch {
    // localStorage lleno o inaccesible (modo privado, etc): se ignora.
  }
}

export function saveProgress(progress) {
  cache = progress;
  notify();
  if (saveTimer) clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    writeToStorage(cache);
    saveTimer = null;
  }, SAVE_DEBOUNCE_MS);
}

/* ── API por relato ──────────────────────────────────────────────────── */

export function getStoryProgress(lang, level, num) {
  const all = getProgressSnapshot();
  const key = buildStoryKey(lang, level, num);
  return all[key] || cloneEmptyStory();
}

function mergeGame(prev, game, result) {
  switch (game) {
    case 'order': {
      return {
        done: prev.done || !!result.done,
        best: Math.max(prev.best, result.best ?? 0),
        attempts: prev.attempts + 1
      };
    }
    case 'gap': {
      const solved = result.solvedIndex != null ? union(prev.solved, [result.solvedIndex]) : prev.solved;
      return {
        done: prev.done || !!result.done,
        solved,
        attempts: prev.attempts + 1
      };
    }
    case 'match': {
      return {
        done: prev.done || !!result.done,
        pairs: Math.max(prev.pairs, result.pairs ?? 0),
        attempts: prev.attempts + 1
      };
    }
    case 'word': {
      const correctIdx = result.correct ? union(prev.correctIdx, [result.index]) : prev.correctIdx;
      const seen = union(prev.seen, [result.index]);
      const correct = correctIdx.length;
      const total = result.total ?? prev.total;
      return {
        seen,
        correctIdx,
        correct,
        total,
        done: total > 0 && correct === total
      };
    }
    case 'speak': {
      const prevBest = prev.best[result.paraIndex] ?? 0;
      return {
        best: { ...prev.best, [result.paraIndex]: Math.max(prevBest, result.score ?? 0) }
      };
    }
    case 'read': {
      return {
        seen: prev.seen || !!result.seen,
        translationUsed: prev.translationUsed || !!result.translationUsed
      };
    }
    default:
      return prev;
  }
}

/** `key` YA compuesta ('EN/A1/01'). */
export function recordGameResult(key, game, result) {
  const all = getProgressSnapshot();
  const prevStory = all[key] || cloneEmptyStory();
  const prevGame = prevStory[game];

  const nextGame = mergeGame(prevGame, game, result || {});
  const nextStory = { ...prevStory, [game]: nextGame, updatedAt: new Date().toISOString() };
  const nextAll = { ...all, [key]: nextStory };

  saveProgress(nextAll);
  return nextStory;
}

/** `key` YA compuesta. */
export function resetStory(key) {
  const all = getProgressSnapshot();
  const nextAll = { ...all, [key]: cloneEmptyStory() };
  saveProgress(nextAll);
}

/* ── derivados ────────────────────────────────────────────────────────── */

export function storyComplete(sp, story, { matchApplicable, wordApplicable } = {}) {
  const orderOk = sp.order.done;
  const matchOk = !matchApplicable || sp.match.done;
  const gapOk = sp.gap.solved.length === story.gaps.length;
  const wordOk = !wordApplicable || (sp.word.total > 0 && sp.word.correct === sp.word.total);
  return orderOk && matchOk && gapOk && wordOk;
}

export function levelProgress(lang, level) {
  const stories = storiesOf(lang, level);
  if (stories.length === 0) return 0;

  const done = stories.filter((s) => {
    const sp = getStoryProgress(lang, level, s.num);
    const matchApplicable = s.phrasals.length >= 3;
    const wordApplicable = buildWordBank(s).length >= 4;
    return storyComplete(sp, s, { matchApplicable, wordApplicable });
  }).length;

  return Math.round((done / stories.length) * 100);
}

export function languageProgress(lang) {
  if (LEVELS.length === 0) return 0;
  const total = LEVELS.reduce((sum, l) => sum + levelProgress(lang, l.code), 0);
  return Math.round(total / LEVELS.length);
}
