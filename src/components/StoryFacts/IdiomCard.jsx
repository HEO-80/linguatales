'use client';

import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { PHRASAL_DETAIL } from '@/data/idioms';

export default function IdiomCard() {
  const { lang, surface, accent, text, font, shadow } = useTheme();
  const { story, detail, setDetail } = useReader();

  return (
    <div
      id="idiom"
      style={{
        background: surface.idiom,
        borderTop: `4px solid ${accent.secondary}`,
        borderRadius: 6,
        boxShadow: shadow.dark,
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
          color: text.secondaryOnDark
        }}
      >
        {lang.navIdiom} · {story.phrasals.length}
      </span>

      {story.phrasals.length === 0 ? (
        <span style={{ fontFamily: font.body, fontSize: 13.5, color: '#fffdf7' }}>
          Este relato no tiene phrasal verbs.
        </span>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {story.phrasals.map((p) => {
            const hasDetail = !!PHRASAL_DETAIL[p.verb];
            if (!hasDetail && process.env.NODE_ENV !== 'production') {
              // eslint-disable-next-line no-console
              console.warn(
                `[IdiomCard] "${p.verb}" (relato ${story.num}) no tiene ficha en PHRASAL_DETAIL — añádela en src/data/idioms/index.js.`
              );
            }
            const isOpen = hasDetail && detail?.kind === 'p' && detail.key === p.verb;

            return (
              <div
                key={p.verb}
                role={hasDetail ? 'button' : undefined}
                tabIndex={hasDetail ? 0 : undefined}
                onClick={hasDetail ? () => setDetail(isOpen ? null : { kind: 'p', key: p.verb }) : undefined}
                onKeyDown={
                  hasDetail
                    ? (e) => (e.key === 'Enter' || e.key === ' ') && setDetail(isOpen ? null : { kind: 'p', key: p.verb })
                    : undefined
                }
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  background: isOpen ? 'rgba(255,255,255,.16)' : 'rgba(255,255,255,.06)',
                  borderLeft: isOpen ? `3px solid ${accent.secondary}` : '3px solid transparent',
                  borderRadius: 5,
                  padding: isOpen ? '10px 12px 10px 9px' : '10px 12px',
                  cursor: hasDetail ? 'pointer' : 'default',
                  transition: 'background .12s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                  <span style={{ fontFamily: font.display, fontSize: 18, fontWeight: 600, color: '#fffdf7' }}>
                    {p.verb}
                  </span>
                  <span style={{ fontFamily: font.body, fontSize: 13, color: text.secondaryOnDark }}>{p.mean}</span>
                  {hasDetail && (
                    <span style={{ fontFamily: font.body, fontSize: 14, color: text.secondaryOnDark }}>
                      {isOpen ? '▾' : '→'}
                    </span>
                  )}
                </div>
                <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: 'rgba(255,253,247,.72)' }}>
                  {p.quote}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
