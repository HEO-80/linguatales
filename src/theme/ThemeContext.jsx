'use client';

/**
 * src/theme/ThemeContext.jsx
 * El tema se recalcula con useMemo(() => buildTheme(lang), [lang]) y viaja
 * por contexto. Ningún componente escribe hex a mano; todos leen de aquí.
 */

import { createContext, useContext, useMemo } from 'react';
import { buildTheme } from './tokens';
import { useAppState } from '@/state/AppStateContext';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const { lang } = useAppState();
  const theme = useMemo(() => buildTheme(lang), [lang]);

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de <ThemeProvider>');
  return ctx;
}
