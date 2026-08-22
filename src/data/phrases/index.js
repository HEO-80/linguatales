/**
 * LinguaTales — catálogo de frases hechas
 * src/data/phrases/index.js
 *
 * Misma forma de clave que las historias: IDIOMA/NIVEL. Las frases son de
 * NIVEL, no de relato — no cambian al cambiar de historia, solo al cambiar
 * de nivel o de idioma.
 */

import { EN_A1_PHRASES } from './en.a1.js';
import { EN_A2_PHRASES } from './en.a2.js';
import { EN_B1_PHRASES } from './en.b1.js';
import { EN_B2_PHRASES } from './en.b2.js';
import { EN_C1_PHRASES } from './en.c1.js';
import { EN_C2_PHRASES } from './en.c2.js';

export const PHRASES = {
  'EN/A1': EN_A1_PHRASES,
  'EN/A2': EN_A2_PHRASES,
  'EN/B1': EN_B1_PHRASES,
  'EN/B2': EN_B2_PHRASES,
  'EN/C1': EN_C1_PHRASES,
  'EN/C2': EN_C2_PHRASES
  // al añadir más idiomas, se habilitan solos
};

const key = (lang, level) => `${lang}/${level}`;

/** bloques de frases de este idioma y nivel (array vacío si no existe) */
export const phrasesOf = (lang, level) => PHRASES[key(lang, level)] || [];
