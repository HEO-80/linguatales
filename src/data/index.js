/**
 * src/data/index.js
 *
 * El catálogo de relatos graduados vive en src/data/stories/index.js
 * (STORIES, has, storiesOf, resolveLevel, ROLES, TOKEN, shuffleSeed) desde
 * el rediseño del lector interactivo — este archivo ya no lo reexporta.
 *
 * Lo único que queda aquí es "Inglés real" (Fase 5, fuera de alcance de esa
 * reconstrucción): diálogos de argot, independientes del árbol de niveles.
 */

import { DIALOGUES as EN_REAL_ENGLISH } from './realEnglish.en';

/**
 * Diálogos "Inglés real" por idioma. Genérico desde ya: un idioma sin
 * archivo propio (todavía) simplemente no tiene entrada aquí y
 * getRealEnglishDialogues devuelve [] — añadir argot de otro idioma es
 * crear su realEnglish.<lang>.js y una línea aquí, nada más.
 */
const REAL_ENGLISH_BY_LANG = {
  EN: EN_REAL_ENGLISH
};

export function getRealEnglishDialogues(langCode) {
  return REAL_ENGLISH_BY_LANG[langCode] || [];
}
