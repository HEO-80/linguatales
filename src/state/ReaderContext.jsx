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
 * Vista exclusiva (§4 linguatales-frases-spec.md, ampliada en
 * linguatales-conectores-spec.md y linguatales-srs-spec.md): `view` decide
 * qué zona se ve — relato, frases, conectores, juego o repaso, nunca dos a
 * la vez. Los chips de bloque, los chips de conectores y las pestañas de
 * juego siempre están visibles; son la navegación.
 *
 * SRS (§2-3 linguatales-srs-spec.md): el almacén de tarjetas (`srsCards`,
 * `srsDay`) vive en state/srs.js, NO en este useState — está indexado por
 * IDIOMA/NIVEL y tiene que sobrevivir a que este Provider se remonte al
 * cambiar de relato. Este contexto solo expone un acceso conveniente
 * (`gradeSrs`, ya con lang/level aplicados) y el estado efímero de la vista
 * "Repaso de hoy" (`srsIdx`, `srsShown`).
 */

import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { storyKey as buildStoryKey } from '@/lib/routes/storyKey';
import { useProgressSnapshot, recordGameResult, EMPTY_STORY } from '@/state/progress';
import { useSrsSnapshot, grade as srsGrade, advanceDay as srsAdvanceDay, cardsOf as srsCardsOf, getSrsSnapshot } from '@/state/srs';
import { rankByWeight } from '@/lib/srs';
import { subscribeReaderNav, emitReaderView } from '@/state/readerNavBus';

const ReaderContext = createContext(null);

export function ReaderProvider({ story, lang, level, children }) {
  const [word, setWord] = useState(null);
  const [showTr, setShowTr] = useState(false);
  const [roleFilter, setRoleFilter] = useState([]);
  const [game, setGame] = useState(null);
  const [detail, setDetail] = useState(null); // { kind: 'g' | 'p', key } | null

  // ── vista exclusiva ────────────────────────────────────────────────
  const [view, setView] = useState('story'); // 'story' | 'phrases' | 'linkers' | 'game' | 'srs'

  // ── audio: qué frase suena ahora mismo, en toda la página ──────────
  // índice numérico de párrafo del relato | 'ph'+i | 're'+i | 'sph' | null
  const [playing, setPlaying] = useState(null);

  // ── frases hechas: bloque activo + estado de los juegos 06/07/08 ────
  const [phrBlock, setPhrBlock] = useState(null); // índice en phrasesOf(lang, level)
  const [phIndex, setPhIndex] = useState(0);
  const [phPick, setPhPick] = useState(null);
  const [coIndex, setCoIndex] = useState(0);
  const [coPick, setCoPick] = useState(null);
  // Panel del bloque (§1 linguatales-frases-de-uno-en-uno-spec.md): una
  // frase a la vez, cíclica con las flechas. `phrSeen` es el CONJUNTO de
  // índices distintos visitados, no el índice más alto — si se mirara el
  // máximo, un solo clic en "‹" desde la frase 0 daría la vuelta a la 9 y
  // desbloquearía el test al instante. Arranca con el 0 ya visto porque esa
  // es la frase que se ve al abrir el bloque.
  const [phrRow, setPhrRow] = useState(0);
  const [phrSeen, setPhrSeen] = useState(() => new Set([0]));
  // Test del bloque (§2-3): pregunta actual + elección de la pregunta activa
  // (tres opciones, ya no "revelar") — ambos se resetean al cambiar de
  // bloque, y la elección también al cambiar de pregunta.
  const [phrTIndex, setPhrTIndex] = useState(0);
  const [phrTPick, setPhrTPick] = useState(null);
  // Juego 08 — Di la frase en voz alta: ronda actual + estado de grabación.
  const [sphIndex, setSphIndex] = useState(0);
  const [sphState, setSphState] = useState({ recording: false, scores: null });
  // Juego 10 — Traducción inversa: índice en el banco de 20 ítems (2 por frase).
  const [btIndex, setBtIndex] = useState(0);
  // Progreso por bloque — clave IDIOMA/NIVEL/BLOQUE en espíritu (aquí, por
  // block.num dentro del nivel activo); { [blockNum]: { [itemIndex]: true } }.
  const [phDoneByBlock, setPhDoneByBlock] = useState({});
  const [coDoneByBlock, setCoDoneByBlock] = useState({});
  const [btDoneByBlock, setBtDoneByBlock] = useState({});
  // { [blockNum]: { [itemIndex]: mejorNota } }
  const [sphBest, setSphBest] = useState({});

  // ── conectores: grupo abierto + estado del juego 09 ─────────────────
  const [cxGroup, setCxGroup] = useState(null); // índice de grupo abierto en connectorsOf(lang, level).groups
  // Panel del grupo (§4 linguatales-frases-de-uno-en-uno-spec.md): un
  // conector a la vez — se resetea al cambiar de grupo o al entrar desde el
  // nav, nunca acumula estado de un grupo anterior.
  const [cxRow, setCxRow] = useState(0);
  const [cxIndex, setCxIndex] = useState(0);
  const [cxPick, setCxPick] = useState(null);
  const [cxDone, setCxDone] = useState({}); // { [huecoIndex]: true }, sobre el total de huecos del nivel

  // ── repaso espaciado (SRS): vista "Repaso de hoy" + tarjeta actual ──
  // El almacén en sí (srs/day) vive en state/srs.js, fuera de este árbol:
  // las tarjetas son de IDIOMA/NIVEL, no de relato, y tienen que seguir
  // funcionando aunque este ReaderProvider se remonte al cambiar de historia.
  const [srsIdx, setSrsIdx] = useState(0);
  const [srsShown, setSrsShown] = useState(false);

  // ── micro-repaso entre juegos (§4, quinta entrega) ──────────────────
  // Cuenta SOLO las gradSrs "de juego" (04/06/07/08/09/10/examen) — el
  // propio Repaso y el micro-repaso gradúan con gradeSrsRaw, para no
  // disparar el micro-repaso sobre sí mismo.
  const [, setMicroCount] = useState(0);
  const [microActive, setMicroActive] = useState(false);
  const [microCards, setMicroCards] = useState([]); // claves congeladas para esta tanda

  const key = useMemo(() => buildStoryKey(lang, level, story.num), [lang, level, story.num]);

  const allProgress = useProgressSnapshot();
  const storyProgress = allProgress[key] || EMPTY_STORY;

  const recordResult = (g, result) => recordGameResult(key, g, result);

  const srsSnapshot = useSrsSnapshot();
  const srsDay = srsSnapshot.day;
  const srsCards = srsCardsOf(lang, level, srsSnapshot);
  /** Graduación "cruda", sin contar hacia el micro-repaso — la usan el
   * propio Repaso (flashcards) y el micro-repaso mismo. */
  const gradeSrsRaw = (cardKey, meta, q) => srsGrade(lang, level, cardKey, meta, q);
  /** Enganche de los juegos (§3 srs-spec, §4 traduccion-inversa-spec): llamar
   * en el momento de responder, antes de pintar el feedback. meta = { kind,
   * q, a, hint }; q es la nota SM-2. Cada 6 respuestas graduadas por aquí
   * (§4, quinta entrega) dispara una tanda de micro-repaso de 3 tarjetas —
   * las más flojas del almacén, nunca al azar. */
  const gradeSrs = (cardKey, meta, q) => {
    const card = gradeSrsRaw(cardKey, meta, q);
    setMicroCount((prev) => {
      const next = prev + 1;
      if (next < 6) return next;
      const freshSnapshot = getSrsSnapshot();
      const freshCards = srsCardsOf(lang, level, freshSnapshot);
      const candidates = Object.keys(freshCards)
        .filter((k) => k !== cardKey)
        .map((k) => ({ srsKey: k }));
      const picked = rankByWeight(candidates, freshCards, freshSnapshot.day)
        .slice(0, 3)
        .map((c) => c.srsKey);
      if (picked.length > 0) {
        setMicroCards(picked);
        setMicroActive(true);
      }
      return 0;
    });
    return card;
  };
  const dismissMicro = () => setMicroActive(false);
  const advanceSrsDay = () => srsAdvanceDay();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { recordResult('read', { seen: true }); }, [key]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { if (showTr) recordResult('read', { translationUsed: true }); }, [showTr, key]);

  // El nav secundario (AppHeader) vive fuera de este árbol y marca en
  // negrita la sección abierta a partir de `view` — se lo emitimos por el
  // bus cada vez que cambia, y 'story' al desmontar para no dejarlo
  // marcando una sección de un relato que ya no está en pantalla.
  useEffect(() => {
    emitReaderView(view);
  }, [view]);
  useEffect(() => {
    return () => emitReaderView('story');
  }, []);

  /** Reinicia solo el estado EN CURSO de los juegos de frases (índices,
   * elección, test, ronda de hablar) — nunca el registro de aciertos
   * (phDoneByBlock/coDoneByBlock/sphBest). */
  const resetPhraseRoundState = () => {
    setPhIndex(0);
    setPhPick(null);
    setCoIndex(0);
    setCoPick(null);
    setPhrRow(0);
    setPhrSeen(new Set([0]));
    setPhrTIndex(0);
    setPhrTPick(null);
    setSphIndex(0);
    setSphState({ recording: false, scores: null });
    setBtIndex(0);
  };

  /** Flechas del panel de frases: navega cíclicamente y añade el índice
   * destino a `phrSeen` — nunca lo sustituye por "el más alto". */
  const goPhraseRow = (delta, total) => {
    setPhrRow((prev) => {
      const next = ((prev + delta) % total + total) % total;
      setPhrSeen((seen) => (seen.has(next) ? seen : new Set(seen).add(next)));
      return next;
    });
  };

  /** Flechas del test del bloque: navega cíclicamente y limpia la elección
   * de la pregunta anterior. */
  const goPhraseTest = (delta, totalTests) => {
    setPhrTIndex((prev) => ((prev + delta) % totalTests + totalTests) % totalTests);
    setPhrTPick(null);
  };

  /** Pestaña de juego: alterna si ya era la activa; si no, la abre y cierra
   * la ficha de palabra. Si es phrase/convo/speakph/backtrans y no hay
   * bloque activo aún, abre el primero. */
  const openGame = (id) => {
    if (view === 'game' && game === id) {
      setView('story');
      return;
    }
    setWord(null);
    setGame(id);
    setView('game');
    if ((id === 'phrase' || id === 'convo' || id === 'speakph' || id === 'backtrans' || id === 'exam') && phrBlock === null) {
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

  /** Chip de grupo de conectores: alterna si ya era el abierto; si no, lo
   * abre — cierra la ficha de palabra. El juego 09 no depende de qué grupo
   * esté abierto (trabaja sobre todo el nivel), así que no reinicia cxIndex. */
  const openLinkerGroup = (i) => {
    if (view === 'linkers' && cxGroup === i) {
      setView('story');
      return;
    }
    setWord(null);
    setCxGroup(i);
    setCxRow(0);
    setView('linkers');
  };

  /** Nav secundario / rail: "Historias", "Frases", "Conectores" y "Juegos".
   * AppHeader y Rail viven fuera del árbol de este Provider (§
   * readerNavBus.js) — escuchan aquí en vez de llamar a estas funciones
   * directamente. */
  const goToStory = () => setView('story');
  const goToPhrases = () => {
    setWord(null);
    setView('phrases');
  };
  const goToLinkers = () => {
    setWord(null);
    setCxGroup(0);
    setCxRow(0);
    setView('linkers');
  };
  const goToGames = () => {
    setWord(null);
    setGame('order');
    setView('game');
  };
  const goToSrs = () => {
    setWord(null);
    setSrsIdx(0);
    setSrsShown(false);
    setView('srs');
  };

  useEffect(() => {
    return subscribeReaderNav((action) => {
      if (action === 'story') goToStory();
      if (action === 'phrases') goToPhrases();
      if (action === 'linkers') goToLinkers();
      if (action === 'games') goToGames();
      if (action === 'srs') goToSrs();
    });
  }, []);

  const markPhraseDone = (blockNum, index) => {
    setPhDoneByBlock((prev) => ({ ...prev, [blockNum]: { ...prev[blockNum], [index]: true } }));
  };
  const markConvoDone = (blockNum, index) => {
    setCoDoneByBlock((prev) => ({ ...prev, [blockNum]: { ...prev[blockNum], [index]: true } }));
  };
  const markSpeakphBest = (blockNum, index, score) => {
    setSphBest((prev) => {
      const prevBest = prev[blockNum]?.[index] ?? 0;
      return { ...prev, [blockNum]: { ...prev[blockNum], [index]: Math.max(prevBest, score) } };
    });
  };
  const markLinkerDone = (qIndex) => {
    setCxDone((prev) => ({ ...prev, [qIndex]: true }));
  };
  const markBacktransDone = (blockNum, index) => {
    setBtDoneByBlock((prev) => ({ ...prev, [blockNum]: { ...prev[blockNum], [index]: true } }));
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
    openGame, goToStory, goToPhrases, goToLinkers, goToGames, goToSrs,

    playing, setPlaying,

    phrBlock, setPhrBlock,
    openPhraseBlock,
    phIndex, setPhIndex,
    phPick, setPhPick,
    coIndex, setCoIndex,
    coPick, setCoPick,
    phrRow, goPhraseRow,
    phrSeen,
    phrTIndex, phrTPick, setPhrTPick, goPhraseTest,
    sphIndex, setSphIndex,
    sphState, setSphState,
    btIndex, setBtIndex,
    phDoneByBlock, markPhraseDone,
    coDoneByBlock, markConvoDone,
    sphBest, markSpeakphBest,
    btDoneByBlock, markBacktransDone,

    cxGroup, setCxGroup,
    openLinkerGroup,
    cxRow, setCxRow,
    cxIndex, setCxIndex,
    cxPick, setCxPick,
    cxDone, markLinkerDone,

    srsCards, srsDay, gradeSrs, gradeSrsRaw, advanceSrsDay,
    srsIdx, setSrsIdx,
    srsShown, setSrsShown,

    microActive, microCards, dismissMicro
  };

  return <ReaderContext.Provider value={value}>{children}</ReaderContext.Provider>;
}

export function useReader() {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader debe usarse dentro de <ReaderProvider>');
  return ctx;
}
