'use client';

/**
 * src/state/ReaderContext.jsx
 * Estado del lector interactivo para UN relato. `story`, `lang`, `level`
 * llegan ya resueltos y validados desde el Server Component
 * app/[lang]/[level]/story/[num]/page.tsx — este contexto no re-deriva nada
 * de useParams().
 *
 * Reset al cambiar de relato: story/[num]/page.tsx es una Page (no Layout),
 * así que Next remonta ReaderProvider entero en cada navegación a un
 * num/level/lang distinto. No hace falta lógica de reseteo aquí.
 */

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { storyKey as buildStoryKey } from '@/lib/routes/storyKey';
import { useProgressSnapshot, recordGameResult, EMPTY_STORY } from '@/state/progress';

const ReaderContext = createContext(null);

export function ReaderProvider({ story, lang, level, children }) {
  const [word, setWord] = useState(null);
  const [showTr, setShowTr] = useState(false);
  const [roleFilter, setRoleFilter] = useState(null);
  const [game, setGame] = useState(null);

  const key = useMemo(() => buildStoryKey(lang, level, story.num), [lang, level, story.num]);

  const allProgress = useProgressSnapshot();
  const storyProgress = allProgress[key] || EMPTY_STORY;

  const recordResult = (g, result) => recordGameResult(key, g, result);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { recordResult('read', { seen: true }); }, [key]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (showTr) recordResult('read', { translationUsed: true }); }, [showTr, key]);

  const value = {
    lang, level, story,
    storyKey: key,
    storyProgress,
    recordResult,
    word, setWord,
    showTr, setShowTr,
    roleFilter, setRoleFilter,
    game, setGame
  };

  return <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>;
}

export function useReader() {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader debe usarse dentro de <ReaderProvider>');
  return ctx;
}
