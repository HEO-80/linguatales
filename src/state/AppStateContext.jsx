'use client';

/**
 * src/state/AppStateContext.jsx
 * Estado global mínimo: { lang, level, sentenceIndex }.
 * `level` no es un useState propio: se lee en vivo del store de progreso
 * (localStorage) vía useSyncExternalStore, así que arranca igual en
 * servidor y cliente y se actualiza solo cuando cambia de verdad.
 * Cambiar de idioma reinicia sentenceIndex; los componentes que deben
 * reiniciar su propio estado interno al cambiar de idioma (p. ej. los
 * juegos) se montan con `key={lang}` en vez de observar un flag aparte.
 */

import { createContext, useContext, useState, useCallback, useMemo, useSyncExternalStore } from 'react';
import {
  subscribeToProgress,
  getProgressSnapshot,
  getProgressServerSnapshot,
  setCurrentLevel
} from '@/lib/storage/localProgress';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [lang, setLangRaw] = useState('EN');
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);
  const level = progress.profile.current_level;

  const setLang = useCallback((nextLang) => {
    setLangRaw(nextLang);
    setSentenceIndex(0);
  }, []);

  const setLevel = useCallback((nextLevel) => {
    setCurrentLevel(nextLevel);
  }, []);

  const value = useMemo(
    () => ({ lang, level, sentenceIndex, setLang, setLevel, setSentenceIndex }),
    [lang, level, sentenceIndex, setLang, setLevel]
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState debe usarse dentro de <AppStateProvider>');
  return ctx;
}
