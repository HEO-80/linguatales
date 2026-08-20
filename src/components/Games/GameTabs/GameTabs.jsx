'use client';

import { useEffect, useMemo } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { buildWordBank } from '../SelectWordGame/buildWordBank';
import WordOrderGame from '../WordOrderGame/WordOrderGame';
import GapFillGame from '../GapFillGame/GapFillGame';
import MatchIdiomGame from '../MatchIdiomGame/MatchIdiomGame';
import SelectWordGame from '../SelectWordGame/SelectWordGame';
import SpeakSentenceGame from '../SpeakSentenceGame/SpeakSentenceGame';

/**
 * src/components/Games/GameTabs/GameTabs.jsx
 * Barra de pestañas de los 5 juegos. Cada pestaña se oculta si no aplica a
 * este relato (menos de 2 párrafos, sin huecos, menos de 3 phrasal verbs,
 * banco de palabras insuficiente, o sin párrafos que pronunciar).
 */
export default function GameTabs() {
  const { surface, font } = useTheme();
  const { story, game, setGame, storyProgress } = useReader();

  const bank = useMemo(() => buildWordBank(story), [story]);
  const matchApplicable = story.phrasals.length >= 3;
  const wordApplicable = bank.length >= 4;

  const TABS = useMemo(
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

  const activeKey = game && TABS.some((t) => t.key === game) ? game : TABS[0]?.key;

  useEffect(() => {
    if (!game || !TABS.some((t) => t.key === game)) {
      setGame(TABS[0]?.key ?? null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story.num]);

  const markers = {
    order: `${storyProgress.order.best} / ${story.paras[1]?.t.length ?? 0}`,
    gap: `${storyProgress.gap.solved.length} / ${story.gaps.length}`,
    match: `${storyProgress.match.pairs} / ${story.phrasals.length}`,
    word: `${storyProgress.word.correct} / ${bank.length}`,
    speak: `${Object.keys(storyProgress.speak.best).length} / ${story.paras.length}`
  };

  const ActiveComp = TABS.find((t) => t.key === activeKey)?.Comp;

  if (TABS.length === 0) return null;

  return (
    <>
      <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {TABS.map((t) => {
            const isActive = t.key === activeKey;
            const bg = pastel(t.color, isActive ? 0.66 : 0.85);
            return (
              <button
                key={t.key}
                onClick={() => setGame(t.key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flex: '1 1 180px',
                  background: bg,
                  border: 'none',
                  borderRadius: 6,
                  padding: '12px 14px',
                  cursor: 'pointer',
                  boxShadow: isActive ? `0 0 0 1px ${t.color}55, 0 8px 20px ${t.color}33` : 'none',
                  textAlign: 'left'
                }}
              >
                <span
                  style={{
                    width: 30,
                    height: 30,
                    flexShrink: 0,
                    borderRadius: 6,
                    background: surface.cream,
                    color: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 15
                  }}
                >
                  ●
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  <span
                    style={{
                      fontFamily: font.body,
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 600,
                      color: fg(t.color, bg, 5)
                    }}
                  >
                    {t.label}
                  </span>
                  <span style={{ fontFamily: font.mono, fontSize: 10.5, color: fg(t.color, bg, 4.6) }}>
                    {markers[t.key]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section id="games" style={{ maxWidth: 1440, margin: '16px auto 0', padding: '0 32px 32px' }}>
        {ActiveComp && <ActiveComp key={activeKey} />}
      </section>
    </>
  );
}
