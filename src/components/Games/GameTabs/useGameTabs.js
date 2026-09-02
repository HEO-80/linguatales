'use client';

import { useMemo } from 'react';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import { connectorsOf } from '@/data/connectors';
import { deriveSrsQueue } from '@/lib/srs';
import { buildLinkerQuestions } from '../LinkerGame/buildLinkerQuestions';
import { buildWordBank } from '../SelectWordGame/buildWordBank';
import WordOrderGame from '../WordOrderGame/WordOrderGame';
import GapFillGame from '../GapFillGame/GapFillGame';
import MatchIdiomGame from '../MatchIdiomGame/MatchIdiomGame';
import SelectWordGame from '../SelectWordGame/SelectWordGame';
import SpeakSentenceGame from '../SpeakSentenceGame/SpeakSentenceGame';
import PhraseGame from '../PhraseGame/PhraseGame';
import ConvoGame from '../ConvoGame/ConvoGame';
import SpeakPhraseGame, { VIOLET } from '../SpeakPhraseGame/SpeakPhraseGame';
import LinkerGame, { LINKER_COLOR } from '../LinkerGame/LinkerGame';
import BackTranslateGame, { ROSE } from '../BackTranslateGame/BackTranslateGame';
import ExamGame, { GOLD } from '../ExamGame/ExamGame';
import { mkTab } from './TabCard';

const MATCH_ROUNDS = 2;
const SPEAK_THRESHOLD = 70;
const SRS_DUE_COLOR = '#b45309'; // "toca repasar" — mismo color que la card de Repaso

/**
 * src/components/Games/GameTabs/useGameTabs.js
 * Toda la lógica compartida de la rejilla de juegos (§ linguatales-dos-bloques-
 * spec.md, antes vivía entera en GameTabs.jsx): las tres filas de cards, sus
 * marcadores, el desbloqueo del examen y qué panel toca mostrar. Se pinta en
 * DOS sitios de la página ahora (StoryPracticeTabs junto al relato,
 * LevelPracticeTabs al final) — nada de esto cambia, solo dónde se consume.
 */
export function useGameTabs() {
  const { surface, font, accent, text } = useTheme();
  const {
    lang, level, story, game, view, setView, openGame, goToSrs, storyProgress,
    phrBlock, phDoneByBlock, coDoneByBlock, sphBest, cxDone, btDoneByBlock,
    srsCards, srsDay
  } = useReader();

  const bank = useMemo(() => buildWordBank(story), [story]);
  const matchApplicable = story.phrasals.length >= 3;
  const wordApplicable = bank.length >= 4;
  const phraseBlocks = phrasesOf(lang, level);
  const hasPhrases = phraseBlocks.length > 0;
  const connectors = connectorsOf(lang, level);
  const linkerQuestions = useMemo(() => buildLinkerQuestions(connectors), [connectors]);
  const hasLinkers = linkerQuestions.length > 0;
  const srsQueue = useMemo(() => deriveSrsQueue(srsCards, srsDay), [srsCards, srsDay]);

  const activeBlockNum = phrBlock != null ? phraseBlocks[phrBlock]?.num : null;
  const activeBlockTotal = phrBlock != null ? phraseBlocks[phrBlock]?.items.length ?? 10 : 10;
  const backtransTotal = activeBlockTotal * 2; // dos ítems por frase (§2)
  const phraseMarker = activeBlockNum ? `${Object.keys(phDoneByBlock[activeBlockNum] || {}).length} / ${activeBlockTotal}` : `0 / ${activeBlockTotal}`;
  const convoMarker = activeBlockNum ? `${Object.keys(coDoneByBlock[activeBlockNum] || {}).length} / ${activeBlockTotal}` : `0 / ${activeBlockTotal}`;
  const speakphDoneCount = activeBlockNum
    ? Object.values(sphBest[activeBlockNum] || {}).filter((s) => s >= SPEAK_THRESHOLD).length
    : 0;
  const speakphMarker = `${speakphDoneCount} / ${activeBlockTotal}`;
  const linkerMarker = `${Object.keys(cxDone).length} / ${linkerQuestions.length}`;
  const backtransDoneCount = activeBlockNum ? Object.keys(btDoneByBlock[activeBlockNum] || {}).length : 0;
  const backtransMarker = `${backtransDoneCount} / ${backtransTotal}`;

  const STORY_TABS = useMemo(
    () =>
      [
        mkTab({ key: 'order', label: 'Ordena la frase', color: '#f97316', Comp: WordOrderGame, hidden: story.paras.length < 2 }),
        mkTab({ key: 'gap', label: 'Elige el hueco', color: '#0891b2', Comp: GapFillGame, hidden: story.gaps.length === 0 }),
        mkTab({ key: 'match', label: 'Empareja la expresión', color: '#7c3aed', Comp: MatchIdiomGame, hidden: !matchApplicable }),
        mkTab({ key: 'word', label: 'Selecciona la palabra', color: '#be185d', Comp: SelectWordGame, hidden: !wordApplicable }),
        mkTab({ key: 'speak', label: 'Habla la frase', color: '#0f766e', Comp: SpeakSentenceGame, hidden: story.paras.length === 0 })
      ].filter((t) => !t.hidden),
    [story, matchApplicable, wordApplicable]
  );

  const PHRASE_TABS = useMemo(
    () =>
      [
        mkTab({
          key: 'phrase', label: 'Elige la frase', subtitle: 'Cómo se dice en inglés',
          icon: '✦', color: '#b45309', Comp: PhraseGame, hidden: !hasPhrases
        }),
        mkTab({
          key: 'convo', label: 'Sigue la conversación', subtitle: 'Contesta con la frase justa',
          icon: '❝', color: '#4338ca', Comp: ConvoGame, hidden: !hasPhrases
        }),
        mkTab({
          key: 'speakph', label: 'Di la frase en voz alta', subtitle: 'Pronuncia las frases hechas',
          icon: '●', color: VIOLET, Comp: SpeakPhraseGame, hidden: !hasPhrases
        }),
        mkTab({
          key: 'linker', label: 'Elige el conector', subtitle: 'Completa con el conector justo',
          icon: '↔', color: LINKER_COLOR, Comp: LinkerGame, hidden: !hasLinkers
        }),
        mkTab({
          key: 'backtrans', label: 'Traducción inversa', subtitle: 'Escríbelo en inglés desde cero',
          icon: '⇄', color: ROSE, Comp: BackTranslateGame, hidden: !hasPhrases
        })
      ].filter((t) => !t.hidden),
    [hasPhrases, hasLinkers]
  );

  // ── Juego 11 (fuera de numeración) · Examen final (§4): cuenta juegos
  // completados al 100%, no intentados. Un juego "no aplicable" a este
  // relato/nivel (match, word, phrase/convo/speakph/backtrans sin bloque de
  // frases, linker sin conectores) cuenta como resuelto — mismo criterio que
  // storyComplete() en state/progress.js.
  const orderOk = storyProgress.order.solved.length === story.paras.length;
  const gapOk = storyProgress.gap.solved.length === story.gaps.length;
  const matchOk = !matchApplicable || storyProgress.match.solved.length === MATCH_ROUNDS;
  const wordOk = !wordApplicable || (storyProgress.word.total > 0 && storyProgress.word.correct === storyProgress.word.total);
  const speakOk =
    story.paras.length === 0 ||
    story.paras.every((_, i) => (storyProgress.speak.best[i] ?? 0) >= SPEAK_THRESHOLD);
  const phraseOk = !hasPhrases || (!!activeBlockNum && Object.keys(phDoneByBlock[activeBlockNum] || {}).length === activeBlockTotal);
  const convoOk = !hasPhrases || (!!activeBlockNum && Object.keys(coDoneByBlock[activeBlockNum] || {}).length === activeBlockTotal);
  const speakphOk = !hasPhrases || (!!activeBlockNum && speakphDoneCount === activeBlockTotal);
  const linkerOk = !hasLinkers || Object.keys(cxDone).length === linkerQuestions.length;
  const backtransOk = !hasPhrases || (!!activeBlockNum && backtransDoneCount === backtransTotal);
  const examCount = [orderOk, gapOk, matchOk, wordOk, speakOk, phraseOk, convoOk, speakphOk, linkerOk, backtransOk].filter(Boolean).length;

  const FINAL_TABS = useMemo(
    () => [
      mkTab({
        key: 'srs', label: 'Repaso', subtitle: 'Lo fallado, antes del examen',
        icon: '↻', color: SRS_DUE_COLOR, view: 'srs', marker: `${srsQueue.dueCount} hoy`
      }),
      mkTab({
        key: 'exam', label: 'Examen final', subtitle: 'Acaba los 10 juegos',
        icon: '★', color: GOLD, Comp: ExamGame, marker: `${examCount}/10`, disabled: examCount < 10
      })
    ],
    [srsQueue.dueCount, examCount]
  );

  const ALL_TABS = useMemo(() => [...STORY_TABS, ...PHRASE_TABS, ...FINAL_TABS], [STORY_TABS, PHRASE_TABS, FINAL_TABS]);

  const markers = {
    order: `${storyProgress.order.solved.length} / ${story.paras.length}`,
    gap: `${storyProgress.gap.solved.length} / ${story.gaps.length}`,
    match: `${storyProgress.match.solved.length} / 2`,
    word: `${storyProgress.word.correct} / ${bank.length}`,
    speak: `${Object.keys(storyProgress.speak.best).length} / ${story.paras.length}`,
    phrase: phraseMarker,
    convo: convoMarker,
    speakph: speakphMarker,
    linker: linkerMarker,
    backtrans: backtransMarker
  };

  const isTabActive = (tab) => (tab.view ? view === tab.view : view === 'game' && game === tab.key);
  // Card de Repaso (§3): alterna igual que las demás — si ya está abierta,
  // vuelve a view: 'story'; si no, abre la vista (goToSrs ya resetea su
  // estado efímero, igual que openPhraseBlock/openLinkerGroup).
  const handleTabClick = (tab) => {
    if (tab.view) {
      if (view === tab.view) setView('story');
      else goToSrs();
      return;
    }
    openGame(tab.key);
  };

  const ActiveComp = ALL_TABS.find((t) => isTabActive(t))?.Comp;

  return {
    surface, font, accent, text,
    game, view,
    STORY_TABS, PHRASE_TABS, FINAL_TABS,
    markers, isTabActive, handleTabClick, ActiveComp
  };
}
