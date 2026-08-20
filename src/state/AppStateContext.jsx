'use client';

/**
 * src/state/AppStateContext.jsx
 * Estado global mínimo: { lang, level, sentenceIndex }.
 * Cambiar de idioma reinicia sentenceIndex; los componentes que deben
 * reiniciar su propio estado interno al cambiar de idioma (p. ej. los
 * juegos) se montan con `key={lang}` en vez de observar un flag aparte.
 */

import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [lang, setLangRaw] = useState('EN');
  const [level, setLevelRaw] = useState('A2');
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const setLang = useCallback((nextLang) => {
    setLangRaw(nextLang);
    setSentenceIndex(0);
  }, []);

  const setLevel = useCallback((nextLevel) => {
    setLevelRaw(nextLevel);
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
