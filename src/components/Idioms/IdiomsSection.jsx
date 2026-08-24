'use client';

import { useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { idiomsOf, PHRASAL_DETAIL } from '@/data/idioms';

const COLOR = '#be185d';

/**
 * src/components/Idioms/IdiomsSection.jsx
 * Phrasal verbs de NIVEL, no de relato — material de referencia suelto
 * (idiomsOf/PHRASAL_DETAIL, src/data/idioms). Mismo tratamiento visual que
 * PhrasesSection/ConnectorsSection: chips siempre visibles, panel de detalle
 * plegado, expandido con estado local (no hace falta la vista exclusiva de
 * ReaderContext porque esto no compite con el relato por espacio).
 */
export default function IdiomsSection() {
  const { surface, text, font, shadow } = useTheme();
  const { lang, level } = useReader();
  const [open, setOpen] = useState(null);

  const items = idiomsOf(lang, level);
  if (items.length === 0) return null;

  const active = items.find((it) => it.verb === open) ?? null;
  const dict = active ? PHRASAL_DETAIL[active.verb] : null;

  const kickerStyle = {
    fontFamily: font.mono,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: fg(COLOR, pastel(COLOR, 0.9), 5)
  };

  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 12
        }}
      >
        <span style={{ fontFamily: font.display, fontSize: 20, fontWeight: 600, color: text.ink }}>
          Phrasal verbs de trabajo
        </span>
        <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onTint }}>
          {items.length} phrasal verbs · nivel {level}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {items.map((it) => {
          const hasDetail = !!PHRASAL_DETAIL[it.verb];
          if (!hasDetail && process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn(
              `[IdiomsSection] "${it.verb}" (${lang}/${level}) no tiene ficha en PHRASAL_DETAIL — añádela en src/data/idioms/index.js.`
            );
          }
          const isOpen = open === it.verb;
          const chipBg = isOpen ? pastel(COLOR, 0.7) : surface.cream;
          return (
            <button
              key={it.verb}
              onClick={() => hasDetail && setOpen(isOpen ? null : it.verb)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                textAlign: 'left',
                cursor: hasDetail ? 'pointer' : 'default',
                minWidth: 190,
                background: chipBg,
                border: isOpen ? 'none' : `1px solid ${pastel(COLOR, 0.5)}`,
                borderLeft: `4px solid ${isOpen ? COLOR : pastel(COLOR, 0.55)}`,
                borderRadius: 5,
                padding: '10px 14px',
                boxShadow: isOpen ? `0 2px 8px ${COLOR}2b` : 'none'
              }}
            >
              <span style={{ fontFamily: font.display, fontSize: 16, fontWeight: 600, color: text.ink }}>{it.verb}</span>
              <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: fg(COLOR, chipBg, 4.6) }}>
                {it.mean}
              </span>
            </button>
          );
        })}
      </div>

      {active && dict && (
        <div
          style={{
            background: pastel(COLOR, 0.9),
            borderTop: `4px solid ${COLOR}`,
            borderRadius: 6,
            boxShadow: shadow.base,
            padding: '24px 26px 26px',
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={kickerStyle}>{dict.register}</span>
              <h3 style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink, margin: 0 }}>
                {active.verb}
                <span style={{ fontSize: 18, fontWeight: 400, fontStyle: 'italic', marginLeft: 12, color: text.onCream }}>
                  {active.mean}
                </span>
              </h3>
              <p style={{ fontFamily: font.body, fontSize: 14, color: text.ink, margin: 0, maxWidth: 720 }}>{dict.literal}</p>
            </div>
            <button
              onClick={() => setOpen(null)}
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
                          background: pastel(COLOR, 0.78),
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
                            color: fg(COLOR, pastel(COLOR, 0.78), 4.6)
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
      )}
    </section>
  );
}
