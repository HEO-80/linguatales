/**
 * LinguaTales — catálogo de relatos
 * src/data/stories/index.js
 *
 * REGLA DE ORO: indexado por `IDIOMA/NIVEL`. Lo que no está aquí NO existe
 * para la UI: los selectores lo muestran deshabilitado con etiqueta "Pronto".
 * Nunca se sirve el relato de un nivel con el rótulo de otro.
 *
 * Para habilitar un nivel o un idioma basta añadir su clave: la UI se adapta
 * sola, sin tocar componentes.
 */

import { EN_A1 } from './en.a1.js';
import { EN_A2 } from './en.a2.js';
import { EN_B1 } from './en.b1.js';
import { EN_B2 } from './en.b2.js';
import { EN_C2 } from './en.c2.js';

export const STORIES = {
  'EN/A1': EN_A1,
  'EN/A2': EN_A2,
  'EN/B1': EN_B1,
  'EN/B2': EN_B2,
  'EN/C2': EN_C2
  // 'PT/A1': …  ← al añadirlas, los selectores las habilitan
};

const key = (lang, level) => `${lang}/${level}`;

/** ¿hay relatos para este idioma y nivel? */
export const has = (lang, level) => !!STORIES[key(lang, level)];

/** relatos de este idioma y nivel (array vacío si no existe) */
export const storiesOf = (lang, level) => STORIES[key(lang, level)] || [];

/** ¿tiene este idioma contenido en ALGÚN nivel? */
export const languageReady = (lang, levels) =>
  levels.some((l) => has(lang, l.code));

/**
 * Al cambiar de idioma: conserva el nivel si existe, y si no, cae al primero
 * disponible. Evita dejar al usuario en una vista vacía.
 */
export function resolveLevel(lang, currentLevel, levels) {
  if (has(lang, currentLevel)) return currentLevel;
  const first = levels.find((l) => has(lang, l.code));
  return first ? first.code : currentLevel;
}

/** Funciones gramaticales → etiqueta y color. Un phrasal verb es UN token. */
export const ROLES = {
  art: { label: 'Artículo', color: '#0e9f6e' },
  verb: { label: 'Verbo', color: '#e0a80c' },
  noun: { label: 'Sustantivo', color: '#2563eb' },
  adj: { label: 'Adjetivo', color: '#e11d48' },
  adv: { label: 'Adverbio', color: '#7c3aed' },
  prep: { label: 'Preposición', color: '#0891b2' },
  pron: { label: 'Pronombre', color: '#f97316' },
  phr: { label: 'Phrasal verb', color: '#be185d' }
};

/** Patrón de uso por función gramatical, para la columna derecha de WordCard. */
export const ROLE_PATTERNS = {
  art:  { pattern: 'the + sustantivo conocido', note: 'a·an para algo nuevo, the para algo ya mencionado' },
  verb: { pattern: 'he / she / it + verbo + -s', note: null },
  noun: { pattern: 'a / the + sustantivo', note: 'si es incontable va sin a·an' },
  adj:  { pattern: 'adjetivo + sustantivo', note: 'siempre delante y sin plural' },
  adv:  { pattern: 'adjetivo + -ly', note: null },
  prep: { pattern: 'at hora · on día · in mes', note: null },
  pron: { pattern: 'I · you · he · she · it · we', note: 'en inglés nunca se omite el sujeto' },
  phr:  { pattern: 'verbo + partícula', note: 'el significado cambia por completo' }
};

/** Índices del token: [ texto, función, traducción, explicación ] */
export const TOKEN = { TEXT: 0, ROLE: 1, TRANSLATION: 2, EXPLAIN: 3 };

/**
 * Mezcla con semilla estable — NO usar Math.random en render:
 * los significados del juego 03 rebotarían en cada repintado.
 */
export const shuffleSeed = (arr, seed = 3) =>
  arr
    .map((w, i) => ({ w, k: (i * seed + 1) % arr.length }))
    .sort((a, b) => a.k - b.k)
    .map((o) => o.w);
