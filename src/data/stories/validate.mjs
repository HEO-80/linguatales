/**
 * LinguaTales — validador de integridad del catálogo de relatos
 * src/data/stories/validate.mjs
 *
 * Regla (pedida explícitamente tras encontrar el fallo en "The Little
 * Bakery"): todo lo que aparece en grammar[].ex y phrasals[].quote tiene que
 * salir literalmente del texto de paras. Si no, la ficha de la palabra y el
 * juego 03 (emparejar phrasal verbs) están mintiendo sobre el propio relato.
 *
 * Se ejecuta en tiempo de build (`npm run prebuild` → `npm run build`) y a
 * mano con `npm run validate:stories`. Falla (exit 1) con un listado
 * concreto de qué frase, en qué historia, no aparece en el texto — nunca en
 * silencio.
 *
 * Node puro, sin dependencias: se ejecuta con `node`, no con Next.
 */

import { STORIES } from './index.js';
import { GRAMMAR_DETAIL } from '../grammar/index.js';
import { PHRASAL_DETAIL } from '../idioms/index.js';

function normalizeWord(w) {
  return w
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[‘’ʼ]/g, "'") // comillas tipográficas (’) → apóstrofo recto (')
    .replace(/[^a-z0-9'à-ÿ]/gi, '');
}

/** Aplana los tokens de una historia a una lista de palabras, en orden de
 * lectura. Un token de varias palabras ("gets up") se separa aquí en
 * palabras sueltas — la búsqueda de subcadena es por palabra, no por token. */
function flattenWords(story) {
  const words = [];
  for (const para of story.paras) {
    for (const token of para.t) {
      const text = token[0];
      for (const w of text.split(/\s+/)) {
        const n = normalizeWord(w);
        if (n) words.push(n);
      }
    }
  }
  return words;
}

function tokenizeFragment(fragment) {
  return fragment
    .split(/\s+/)
    .map(normalizeWord)
    .filter(Boolean);
}

/** ¿`needle` aparece como subcadena contigua (en orden) dentro de `haystack`? */
function containsSubsequence(haystack, needle) {
  if (needle.length === 0) return true;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) return true;
  }
  return false;
}

function validateStory(catalogueKey, story) {
  const errors = [];
  const words = flattenWords(story);
  const label = `${catalogueKey} · "${story.title}"`;

  (story.grammar || []).forEach((g) => {
    g.ex.split('·').forEach((rawFragment) => {
      const fragment = rawFragment.trim();
      if (!fragment) return;
      const needle = tokenizeFragment(fragment);
      if (!containsSubsequence(words, needle)) {
        errors.push(
          `${label} → grammar["${g.name}"].ex contiene "${fragment}", que no aparece en el texto de paras.`
        );
      }
    });
  });

  (story.phrasals || []).forEach((p) => {
    const needle = tokenizeFragment(p.quote);
    if (!containsSubsequence(words, needle)) {
      errors.push(
        `${label} → phrasals["${p.verb}"].quote ("${p.quote}") no aparece en el texto de paras.`
      );
    }
  });

  return errors;
}

export function validateCatalogue() {
  const errors = [];
  for (const [key, stories] of Object.entries(STORIES)) {
    for (const story of stories) {
      errors.push(...validateStory(key, story));
    }
  }
  return errors;
}

/**
 * Toda regla de gramática o phrasal verb que un relato dice practicar tiene
 * que tener ficha en GRAMMAR_DETAIL / PHRASAL_DETAIL (src/data/grammar,
 * src/data/idioms) — si no, el panel de detalle de StoryFacts no tiene qué
 * mostrar. En dev, los componentes ya avisan por consola al renderizar; esta
 * comprobación es la que falla el build si alguien lo pasa por alto.
 */
export function checkDetailCoverage() {
  const errors = [];
  for (const [key, stories] of Object.entries(STORIES)) {
    for (const story of stories) {
      const label = `${key} · "${story.title}"`;
      (story.grammar || []).forEach((g) => {
        if (!GRAMMAR_DETAIL[g.name]) {
          errors.push(`${label} → la regla "${g.name}" no tiene ficha en GRAMMAR_DETAIL (src/data/grammar/index.js).`);
        }
      });
      (story.phrasals || []).forEach((p) => {
        if (!PHRASAL_DETAIL[p.verb]) {
          errors.push(`${label} → el phrasal verb "${p.verb}" no tiene ficha en PHRASAL_DETAIL (src/data/idioms/index.js).`);
        }
      });
    }
  }
  return errors;
}

function main() {
  const errors = [...validateCatalogue(), ...checkDetailCoverage()];
  if (errors.length > 0) {
    console.error(`✗ Validación de relatos: ${errors.length} fallo(s).\n`);
    errors.forEach((e) => console.error(`  - ${e}`));
    console.error('\nCorrige grammar[].ex / phrasals[].quote, el texto de paras, o añade la ficha que falte.');
    process.exit(1);
  }
  console.log('✓ Validación de relatos: citas, textos y fichas de gramática/phrasal verbs coinciden en todas las historias del catálogo.');
}

main();
