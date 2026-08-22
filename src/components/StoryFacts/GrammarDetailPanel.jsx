'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { GRAMMAR_DETAIL } from '@/data/grammar';
import { TOKEN } from '@/data/stories';
import WhyBox from '@/components/ui/WhyBox';

/**
 * Panel a todo el ancho de una regla de gramática. Las fichas de "En este
 * relato" se derivan filtrando los tokens del relato abierto por el `role`
 * que el diccionario asocia a esta regla — nunca se escriben a mano.
 */
export default function GrammarDetailPanel() {
  const { surface, text, font, shadow } = useTheme();
  const { story, detail, setDetail } = useReader();

  const storyEntry = story.grammar.find((g) => g.name === detail.key);
  const dict = GRAMMAR_DETAIL[detail.key];
  if (!storyEntry || !dict) return null;

  const color = storyEntry.c;
  const bg = pastel(color, 0.9);
  const kickerStyle = {
    fontFamily: font.mono,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: fg(color, bg, 5)
  };

  const tokensInRole = [];
  const seenText = new Set();
  story.paras.forEach((para) => {
    para.t.forEach((token) => {
      if (token[TOKEN.ROLE] !== dict.role) return;
      const key = token[TOKEN.TEXT].toLowerCase();
      if (seenText.has(key)) return;
      seenText.add(key);
      tokensInRole.push(token);
    });
  });

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
          <span style={kickerStyle}>{storyEntry.hits}</span>
          <h3 style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink, margin: 0 }}>
            {detail.key}
          </h3>
          <p style={{ fontFamily: font.body, fontSize: 14, color: text.ink, margin: 0, maxWidth: 720 }}>{dict.intro}</p>
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
            <span style={kickerStyle}>Cómo se forma</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {dict.forms.map((f) => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    background: surface.cream,
                    borderRadius: 5,
                    padding: '8px 12px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: font.mono,
                      fontSize: 9.5,
                      fontWeight: 700,
                      letterSpacing: '0.6px',
                      textTransform: 'uppercase',
                      color: text.onCream
                    }}
                  >
                    {f.label}
                  </span>
                  <span style={{ fontFamily: font.body, fontSize: 14, color: text.ink }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          {tokensInRole.length > 0 && (
            <div>
              <span style={kickerStyle}>En este relato</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                {tokensInRole.map((tok) => (
                  <span
                    key={tok[TOKEN.TEXT]}
                    style={{
                      display: 'inline-flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      lineHeight: 1.3,
                      background: pastel(color, 0.78),
                      borderRadius: 4,
                      padding: '4px 9px 5px'
                    }}
                  >
                    <span style={{ fontFamily: font.display, fontSize: 15, color: text.ink, whiteSpace: 'nowrap' }}>
                      {tok[TOKEN.TEXT]}
                    </span>
                    <span
                      style={{
                        fontFamily: font.body,
                        fontSize: 10.5,
                        fontStyle: 'italic',
                        whiteSpace: 'nowrap',
                        color: fg(color, pastel(color, 0.78), 4.6)
                      }}
                    >
                      {tok[TOKEN.TRANSLATION]}
                    </span>
                  </span>
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

      <WhyBox label="Cuidado con esto" text={dict.caution} />
    </div>
  );
}
