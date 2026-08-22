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
 *
 * Vista exclusiva (§4 linguatales-frases-spec.md): `view` decide qué zona
 * se ve — relato, frases o juego, nunca dos a la vez. Los chips de bloque y
 * las pestañas de juego siempre están visibles; son la navegación.
 */

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { storyKey as buildStoryKey } from '@/lib/routes/storyKey';
import { useProgressSnapshot, recordGameResult, EMPTY_STORY } from '@/state/progress';
import { subscribeReaderNav } from '@/state/readerNavBus';

const ReaderContext = createContext(null);

export function ReaderProvider({ story, lang, level, children }) {
  const [word, setWord] = useState(null);
  const [showTr, setShowTr] = useState(false);
  const [roleFilter, setRoleFilter] = useState([]);
  const [game, setGame] = useState(null);
  const [detail, setDetail] = useState(null); // { kind: 'g' | 'p', key } | null

  // ── vista exclusiva ────────────────────────────────────────────────
  const [view, setView] = useState('story'); // 'story' | 'phrases' | 'game'

  // ── frases hechas: bloque activo + estado de los juegos 06/07 ──────
  const [phrBlock, setPhrBlock] = useState(null); // índice en phrasesOf(lang, level)
  const [phIndex, setPhIndex] = useState(0);
  const [phPick, setPhPick] = useState(null);
  const [coIndex, setCoIndex] = useState(0);
  const [coPick, setCoPick] = useState(null);
  const [testRevealed, setTestRevealed] = useState(false);
  // Progreso por bloque — clave IDIOMA/NIVEL/BLOQUE en espíritu (aquí, por
  // block.num dentro del nivel activo); { [blockNum]: { [itemIndex]: true } }.
  const [phDoneByBlock, setPhDoneByBlock] = useState({});
  const [coDoneByBlock, setCoDoneByBlock] = useState({});

  const key = useMemo(() => buildStoryKey(lang, level, story.num), [lang, level, story.num]);

  const allProgress = useProgressSnapshot();
  const storyProgress = allProgress[key] || EMPTY_STORY;

  const recordResult = (g, result) => recordGameResult(key, g, result);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { recordResult('read', { seen: true }); }, [key]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (showTr) recordResult('read', { translationUsed: true }); }, [showTr, key]);

  /** Reinicia solo el estado EN CURSO de los dos juegos de frases (índices,
   * elección, test) — nunca el registro de aciertos (phDoneByBlock/coDoneByBlock). */
  const resetPhraseRoundState = () => {
    setPhIndex(0);
    setPhPick(null);
    setCoIndex(0);
    setCoPick(null);
    setTestRevealed(false);
  };

  /** Pestaña de juego: alterna si ya era la activa; si no, la abre y cierra
   * la ficha de palabra. Si es phrase/convo y no hay bloque activo aún,
   * abre el primero. */
  const openGame = (id) => {
    if (view === 'game' && game === id) {
      setView('story');
      return;
    }
    setWord(null);
    setGame(id);
    setView('game');
    if ((id === 'phrase' || id === 'convo') && phrBlock === null) {
      setPhrBlock(0);
      resetPhraseRoundState();
    }
  };

  /** Chip de bloque: alterna si ya era el abierto; si no, lo abre — cierra
   * la ficha de palabra y reinicia test + índices de los juegos de frases. */
  const openPhraseBlock = (i) => {
    if (view === 'phrases' && phrBlock === i) {
      setView('story');
      return;
    }
    setWord(null);
    setPhrBlock(i);
    resetPhraseRoundState();
    setView('phrases');
  };

  /** Nav secundario / rail: "Historias" y "Juegos". AppHeader y Rail viven
   * fuera del árbol de este Provider (§ readerNavBus.js) — escuchan aquí en
   * vez de llamar a estas funciones directamente. */
  const goToStory = () => setView('story');
  const goToGames = () => {
    setWord(null);
    setGame('order');
    setView('game');
  };

  useEffect(() => {
    return subscribeReaderNav((action) => {
      if (action === 'story') goToStory();
      if (action === 'games') goToGames();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const markPhraseDone = (blockNum, index) => {
    setPhDoneByBlock((prev) => ({ ...prev, [blockNum]: { ...prev[blockNum], [index]: true } }));
  };
  const markConvoDone = (blockNum, index) => {
    setCoDoneByBlock((prev) => ({ ...prev, [blockNum]: { ...prev[blockNum], [index]: true } }));
  };

  const value = {
    lang, level, story,
    storyKey: key,
    storyProgress,
    recordResult,
    word, setWord,
    showTr, setShowTr,
    roleFilter, setRoleFilter,
    game, setGame,
    detail, setDetail,

    view, setView,
    openGame, goToStory, goToGames,

    phrBlock, setPhrBlock,
    openPhraseBlock,
    phIndex, setPhIndex,
    phPick, setPhPick,
    coIndex, setCoIndex,
    coPick, setCoPick,
    testRevealed, setTestRevealed,
    phDoneByBlock, markPhraseDone,
    coDoneByBlock, markConvoDone
  };

  return <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>;
}

export function useReader() {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader debe usarse dentro de <ReaderProvider>');
  return ctx;
}
