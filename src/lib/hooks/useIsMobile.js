'use client';

/**
 * src/lib/hooks/useIsMobile.js
 *
 * Mismo patrón que useIsSpeechSupported() en src/lib/azure/tts.ts:
 * useSyncExternalStore evita el desajuste de hidratación entre el snapshot
 * de servidor (siempre 'false', asume escritorio) y el valor real del
 * navegador tras hidratar.
 */

import { useSyncExternalStore } from 'react';

const QUERY = '(max-width: 767px)';

function subscribe(listener) {
  if (typeof window === 'undefined') return () => {};
  const mql = window.matchMedia(QUERY);
  mql.addEventListener('change', listener);
  return () => mql.removeEventListener('change', listener);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function useIsMobile() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
