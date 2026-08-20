'use client';

import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';

export default function IdiomCard() {
  const { lang, surface, accent, text, font, shadow } = useTheme();
  const { story } = useReader();

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
          {story.phrasals.map((p) => (
            <div
              key={p.verb}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                background: 'rgba(255,255,255,.06)',
                borderRadius: 5,
                padding: '10px 12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                <span style={{ fontFamily: font.display, fontSize: 18, fontWeight: 600, color: '#fffdf7' }}>
                  {p.verb}
                </span>
                <span style={{ fontFamily: font.body, fontSize: 13, color: text.secondaryOnDark }}>{p.mean}</span>
                <span style={{ fontFamily: font.body, fontSize: 14, color: text.secondaryOnDark }}>→</span>
              </div>
              <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: 'rgba(255,253,247,.72)' }}>
                {p.quote}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
