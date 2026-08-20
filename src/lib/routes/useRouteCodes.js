'use client';

/**
 * src/lib/routes/useRouteCodes.js
 * Hooks para Client Components que antes leían `lang`/`level` de
 * useAppState(). Ahora la URL es la fuente de verdad.
 */

import { useParams } from 'next/navigation';
import { parseLangSlug, parseLevelSlug, DEFAULT_LEVEL } from './langLevel';

/** Nunca debería fallar (el layout de [lang] ya validó), pero cae a 'EN' por seguridad. */
export function useLangCode() {
  const params = useParams();
  return parseLangSlug(params?.lang) ?? 'EN';
}

/** undefined si la ruta actual no tiene segmento [level] (p. ej. /en/real-english). */
export function useLevelCode() {
  const params = useParams();
  return parseLevelSlug(params?.level) ?? undefined;
}

export { DEFAULT_LEVEL };
