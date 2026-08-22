'use client';

import { useMemo } from 'react';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import { buildWordBank } from '../SelectWordGame/buildWordBank';
import WordOrderGame from '../WordOrderGame/WordOrderGame';
import GapFillGame from '../GapFillGame/GapFillGame';
import MatchIdiomGame from '../MatchIdiomGame/MatchIdiomGame';
import SelectWordGame from '../SelectWordGame/SelectWordGame';
import SpeakSentenceGame from '../SpeakSentenceGame/SpeakSentenceGame';
import PhraseGame from '../PhraseGame/PhraseGame';
import ConvoGame from '../ConvoGame/ConvoGame';
import TabCard from './TabCard';

/**
 * src/components/Games/GameTabs/GameTabs.jsx
 * Dos filas de pestañas: los 5 juegos del relato, y los 2 juegos de frases
 * (ocupan 2 de las 5 columnas de su fila, alineados con la de arriba). Las
 * pestañas siempre están visibles — son la navegación de la vista exclusiva
 * (§4 linguatales-frases-spec.md); el cuerpo del juego activo solo se monta
 * con view === 'game'.
 */
export default function GameTabs() {
  const { surface, font, accent, text } = useTheme();
  const { lang, level, story, game, view, openGame, storyProgress, phrBlock, phDoneByBlock, coDoneByBlock } =
    useReader();

  const bank = useMemo(() => buildWordBank(story), [story]);
  const matchApplicable = story.phrasals.length >= 3;
  const wordApplicable = bank.length >= 4;
  const phraseBlocks = phrasesOf(lang, level);
  const hasPhrases = phraseBlocks.length > 0;

  const STORY_TABS = useMemo(
    () =>
      [
        { key: 'order', label: 'Ordena la frase', color: '#f97316', Comp: WordOrderGame, hidden: story.paras.length < 2 },
        { key: 'gap', label: 'Elige el hueco', color: '#0891b2', Comp: GapFillGame, hidden: story.gaps.length === 0 },
        { key: 'match', label: 'Empareja la expresión', color: '#7c3aed', Comp: MatchIdiomGame, hidden: !matchApplicable },
        { key: 'word', label: 'Selecciona la palabra', color: '#be185d', Comp: SelectWordGame, hidden: !wordApplicable },
        { key: 'speak', label: 'Habla la frase', color: '#0f766e', Comp: SpeakSentenceGame, hidden: story.paras.length === 0 }
      ].filter((t) => !t.hidden),
    [story, matchApplicable, wordApplicable]
  );

  const PHRASE_TABS = useMemo(
    () =>
      [
        {
          key: 'phrase',
          label: 'Elige la frase',
          subtitle: 'Cómo se dice en inglés',
          icon: '✦',
          color: '#b45309',
          Comp: PhraseGame,
          hidden: !hasPhrases
        },
        {
          key: 'convo',
          label: 'Sigue la conversación',
          subtitle: 'Contesta con la frase justa',
          icon: '❝',
          color: '#4338ca',
          Comp: ConvoGame,
          hidden: !hasPhrases
        }
      ].filter((t) => !t.hidden),
    [hasPhrases]
  );

  const ALL_TABS = useMemo(() => [...STORY_TABS, ...PHRASE_TABS], [STORY_TABS, PHRASE_TABS]);

  const activeBlockNum = phrBlock != null ? phraseBlocks[phrBlock]?.num : null;
  const phraseMarker = activeBlockNum ? `${Object.keys(phDoneByBlock[activeBlockNum] || {}).length} / 10` : '0 / 10';
  const convoMarker = activeBlockNum ? `${Object.keys(coDoneByBlock[activeBlockNum] || {}).length} / 10` : '0 / 10';

  const markers = {
    order: `${storyProgress.order.solved.length} / ${story.paras.length}`,
    gap: `${storyProgress.gap.solved.length} / ${story.gaps.length}`,
    match: `${storyProgress.match.solved.length} / 2`,
    word: `${storyProgress.word.correct} / ${bank.length}`,
    speak: `${Object.keys(storyProgress.speak.best).length} / ${story.paras.length}`,
    phrase: phraseMarker,
    convo: convoMarker
  };

  const activeKey = view === 'game' ? game : null;
  const ActiveComp = ALL_TABS.find((t) => t.key === activeKey)?.Comp;

  if (ALL_TABS.length === 0) return null;

  return (
    <>
      <div
        style={{
          maxWidth: 1440,
          margin: '20px auto 0',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }}
      >
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: text.onTint,
            flexShrink: 0
          }}
        >
          Practica este relato
        </span>
        <div
          style={{
            flex: 1,
            height: 2,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${accent.secondary}66, rgba(25,23,19,.08))`
          }}
        />
      </div>

      <section style={{ maxWidth: 1440, margin: '10px auto 0', padding: '0 32px' }}>
        <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: text.onTint }}>
          Al abrir un juego se esconden el relato y las frases.
        </span>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginTop: 10 }}>
          {STORY_TABS.map((t) => (
            <TabCard
              key={t.key}
              tab={{ ...t, marker: markers[t.key] }}
              isActive={activeKey === t.key}
              onClick={() => openGame(t.key)}
              surface={surface}
              font={font}
            />
          ))}
        </div>

        {PHRASE_TABS.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginTop: 10 }}>
            {PHRASE_TABS.map((t) => (
              <TabCard
                key={t.key}
                tab={{ ...t, marker: markers[t.key] }}
                isActive={activeKey === t.key}
                onClick={() => openGame(t.key)}
                surface={surface}
                font={font}
              />
            ))}
          </div>
        )}
      </section>

      {view === 'game' && ActiveComp && (
        <section id="games" style={{ maxWidth: 1440, margin: '16px auto 0', padding: '0 32px 32px' }}>
          <ActiveComp key={activeKey} />
        </section>
      )}
    </>
  );
}
