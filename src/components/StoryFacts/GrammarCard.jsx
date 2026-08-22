'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { GRAMMAR_DETAIL } from '@/data/grammar';

export default function GrammarCard() {
  const { text, font, shadow } = useTheme();
  const { story, detail, setDetail } = useReader();
  const bg = pastel('#0e9f6e', 0.82);

  return (
    <div
      id="grammar"
      style={{
        background: bg,
        borderRadius: 6,
        boxShadow: shadow.base,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        height: '100%'
      }}
    >
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '1.4px',
          textTransform: 'uppercase',
          color: fg('#0e9f6e', bg, 5)
        }}
      >
        Gramática de este relato
      </span>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {story.grammar.map((g) => {
          const hasDetail = !!GRAMMAR_DETAIL[g.name];
          if (!hasDetail && process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn(
              `[GrammarCard] "${g.name}" (relato ${story.num}) no tiene ficha en GRAMMAR_DETAIL — añádela en src/data/grammar/index.js.`
            );
          }
          const isOpen = hasDetail && detail?.kind === 'g' && detail.key === g.name;

          return (
            <div
              key={g.name}
              role={hasDetail ? 'button' : undefined}
              tabIndex={hasDetail ? 0 : undefined}
              onClick={hasDetail ? () => setDetail(isOpen ? null : { kind: 'g', key: g.name }) : undefined}
              onKeyDown={
                hasDetail
                  ? (e) => (e.key === 'Enter' || e.key === ' ') && setDetail(isOpen ? null : { kind: 'g', key: g.name })
                  : undefined
              }
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                background: isOpen ? pastel(g.c, 0.68) : 'rgba(255,255,255,.5)',
                borderLeft: isOpen ? `3px solid ${g.c}` : '3px solid transparent',
                borderRadius: 5,
                padding: isOpen ? '10px 12px 10px 9px' : '10px 12px',
                cursor: hasDetail ? 'pointer' : 'default',
                transition: 'background .12s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span
                  style={{
                    fontFamily: font.body,
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: fg(g.c, 'rgba(255,255,255,.9)', 4.6),
                    background: pastel(g.c, 0.78),
                    borderRadius: 4,
                    padding: '3px 9px'
                  }}
                >
                  {g.name}
                </span>
                <span style={{ fontFamily: font.mono, fontSize: 11, color: text.onTintDeep }}>{g.hits}</span>
                {hasDetail && (
                  <span style={{ fontFamily: font.body, fontSize: 14, color: text.onTintDeep }}>
                    {isOpen ? '▾' : '→'}
                  </span>
                )}
              </div>
              <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: text.ink }}>{g.ex}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
