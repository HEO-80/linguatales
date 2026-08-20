/**
 * src/lib/routes/langLevel.js
 *
 * Puente isomórfico entre los slugs de URL (minúsculas: /en/a2/...) y las
 * claves internas del proyecto (mayúsculas: LANGUAGES.EN, LEVELS[].code).
 * Sin 'use client': se puede importar tanto desde Server Components
 * (app/[lang]/layout.tsx) como desde Client Components.
 */

import { LANGUAGE_ORDER, LEVELS } from '@/theme/languages';

const LEVEL_CODES = LEVELS.map((lv) => lv.code);

/** Mismo valor que hoy EMPTY_STATE.profile.current_level en progressStore.ts. */
export const DEFAULT_LEVEL = 'A2';

/** 'en' -> 'EN', o null si no está en LANGUAGE_ORDER. */
export function parseLangSlug(slug) {
  if (typeof slug !== 'string') return null;
  const code = slug.toUpperCase();
  return LANGUAGE_ORDER.includes(code) ? code : null;
}

/** 'a2' -> 'A2', o null si no está en LEVELS. */
export function parseLevelSlug(slug) {
  if (typeof slug !== 'string') return null;
  const code = slug.toUpperCase();
  return LEVEL_CODES.includes(code) ? code : null;
}

export function toLangSlug(code) {
  return code.toLowerCase();
}

export function toLevelSlug(code) {
  return code.toLowerCase();
}
