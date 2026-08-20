/**
 * src/state/__tests__/progress.migration.test.mjs
 *
 * Test de migración/versionado de src/state/progress.js (§1.4/§1.6 del
 * plan). No hay jest/vitest en el proyecto (ver package.json), así que es
 * un script Node standalone, en el mismo espíritu que
 * src/data/stories/validate.mjs: sale con exit 1 y un listado de fallos si
 * algo no cuadra, exit 0 con un mensaje ✓ si todo pasa.
 *
 * Cómo ejecutarlo:
 *   node src/state/__tests__/progress.migration.test.mjs
 *
 * No está conectado a `prebuild` (sería redundante con el build/dev
 * normal) — es responsabilidad de quien toque progress.js ejecutarlo a
 * mano tras cualquier cambio en la lógica de versionado.
 *
 * progress.js es 'use client' y depende de `window.localStorage` — antes
 * de importarlo se stubea un `window` mínimo en el proceso de Node.
 * Sus imports internos usan el alias '@/' que solo Next/webpack resuelven
 * de forma nativa; aliasLoader.mjs (registrado más abajo) le enseña a este
 * proceso de Node a resolverlo también, para poder importar el módulo real
 * en vez de una reimplementación paralela de su lógica.
 */

import { register } from 'node:module';

register('./aliasLoader.mjs', import.meta.url);

const STORAGE_KEY = 'linguatales.progress.v1';

function makeFakeLocalStorage() {
  const store = new Map();
  return {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    _raw: store
  };
}

let fakeStorage = makeFakeLocalStorage();
globalThis.window = { localStorage: fakeStorage };

const { loadProgress } = await import('../progress.js');

const failures = [];

function check(label, condition) {
  if (!condition) failures.push(label);
}

function resetStorage() {
  fakeStorage = makeFakeLocalStorage();
  globalThis.window = { localStorage: fakeStorage };
}

/* (a) localStorage vacío → {} */
resetStorage();
check('(a) vacío → {}', Object.keys(loadProgress()).length === 0);

/* (b) JSON corrupto → {} sin lanzar */
resetStorage();
fakeStorage.setItem(STORAGE_KEY, '{not valid json');
let threw = false;
let resultB = null;
try {
  resultB = loadProgress();
} catch {
  threw = true;
}
check('(b) JSON corrupto no lanza', !threw);
check('(b) JSON corrupto → {}', resultB && Object.keys(resultB).length === 0);

/* (c) v0 legado (sin v) → {} sin borrar la clave subyacente */
resetStorage();
const legacyRaw = JSON.stringify({ data: { 'EN/A1/01': { foo: 1 } } });
fakeStorage.setItem(STORAGE_KEY, legacyRaw);
const resultC = loadProgress();
check('(c) v0 legado → {}', Object.keys(resultC).length === 0);
check('(c) v0 legado no borra la clave', fakeStorage.getItem(STORAGE_KEY) === legacyRaw);

/* (d) versión futura (v99) → {} sin borrar la clave subyacente */
resetStorage();
const futureRaw = JSON.stringify({ v: 99, data: { 'EN/A1/01': { foo: 1 } } });
fakeStorage.setItem(STORAGE_KEY, futureRaw);
const resultD = loadProgress();
check('(d) v99 futuro → {}', Object.keys(resultD).length === 0);
check('(d) v99 futuro no borra la clave', fakeStorage.getItem(STORAGE_KEY) === futureRaw);

/* (e) v1 válido → devuelve data tal cual */
resetStorage();
const validData = { 'EN/A1/01': { order: { done: true, best: 4, attempts: 1 } } };
fakeStorage.setItem(STORAGE_KEY, JSON.stringify({ v: 1, data: validData }));
const resultE = loadProgress();
check('(e) v1 válido → data', JSON.stringify(resultE) === JSON.stringify(validData));

if (failures.length > 0) {
  console.error(`✗ Test de migración de progreso: ${failures.length} fallo(s).\n`);
  failures.forEach((f) => console.error(`  - ${f}`));
  process.exit(1);
}
console.log('✓ Test de migración de progreso: los 5 escenarios de versionado pasan.');
