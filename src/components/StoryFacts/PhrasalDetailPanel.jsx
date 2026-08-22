'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { PHRASAL_DETAIL } from '@/data/idioms';

/** Panel a todo el ancho de un phrasal verb, con el color del idioma. */
export default function PhrasalDetailPanel() {
  const { surface, accent, text, font, shadow } = useTheme();
  const { story, detail, setDetail } = useReader();

  const storyEntry = story.phrasals.find((p) => p.verb === detail.key);
  const dict = PHRASAL_DETAIL[detail.key];
  if (!storyEntry || !dict) return null;

  const color = accent.secondary;
  const bg = pastel(color, 0.9);
  const kickerStyle = {
    fontFamily: font.mono,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: fg(color, bg, 5)
  };

  return (
    <div
      style={{
        background: bg,
        borderTop: `4px solid ${color}`,
        borderRadius: 6,
        boxShadow: shadow.base,
        padding: '24px 26px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={kickerStyle}>{dict.register}</span>
          <h3 style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink, margin: 0 }}>
            {detail.key}
            <span style={{ fontSize: 18, fontWeight: 400, fontStyle: 'italic', marginLeft: 12, color: text.onCream }}>
              {storyEntry.mean}
            </span>
          </h3>
          <p style={{ fontFamily: font.body, fontSize: 14, color: text.ink, margin: 0, maxWidth: 720 }}>{dict.literal}</p>
        </div>
        <button
          onClick={() => setDetail(null)}
          aria-label="Cerrar"
          style={{ background: 'transparent', border: 'none', fontSize: 20, color: text.ink, cursor: 'pointer', padding: 0, flexShrink: 0 }}
        >
          ✕
        </button>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <span style={kickerStyle}>Estructura</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              <div style={{ background: surface.cream, borderRadius: 5, padding: '8px 12px' }}>
                <span style={{ fontFamily: font.display, fontSize: 16, color: text.ink }}>{dict.pattern}</span>
              </div>
              <div style={{ background: surface.cream, borderRadius: 5, padding: '8px 12px' }}>
                <span style={{ fontFamily: font.body, fontSize: 13.5, color: text.ink }}>{dict.separableNote}</span>
              </div>
            </div>
          </div>

          {dict.related?.length > 0 && (
            <div>
              <span style={kickerStyle}>Se parecen a esta</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                {dict.related.map((r) => (
                  <div
                    key={r.verb}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 10,
                      background: pastel(color, 0.78),
                      borderRadius: 4,
                      padding: '6px 10px'
                    }}
                  >
                    <span style={{ fontFamily: font.display, fontSize: 14.5, fontWeight: 600, color: text.ink }}>{r.verb}</span>
                    <span
                      style={{
                        fontFamily: font.body,
                        fontSize: 12.5,
                        fontStyle: 'italic',
                        color: fg(color, pastel(color, 0.78), 4.6)
                      }}
                    >
                      {r.mean}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={kickerStyle}>Ejemplos</span>
          {dict.examples.map((ex) => (
            <div
              key={ex.en}
              style={{ background: surface.cream, borderRadius: 5, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 3 }}
            >
              <span style={{ fontFamily: font.display, fontSize: 16, color: text.ink }}>{ex.en}</span>
              <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: text.onCream }}>{ex.es}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
