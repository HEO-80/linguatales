/**
 * LinguaTales — catálogo de frases hechas
 * src/data/phrases/index.js
 *
 * Misma forma de clave que las historias: IDIOMA/NIVEL. Las frases son de
 * NIVEL, no de relato — no cambian al cambiar de historia, solo al cambiar
 * de nivel o de idioma.
 */

import { EN_A1_PHRASES } from './en.a1.js';

export const PHRASES = {
  'EN/A1': EN_A1_PHRASES
  // 'EN/A2': …  ← al añadir más bloques o niveles, se habilitan solos
};

const key = (lang, level) => `${lang}/${level}`;

/** bloques de frases de este idioma y nivel (array vacío si no existe) */
export const phrasesOf = (lang, level) => PHRASES[key(lang, level)] || [];
