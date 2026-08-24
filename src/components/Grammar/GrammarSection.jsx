'use client';

import { useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { grammarOf, GRAMMAR_DETAIL } from '@/data/grammar';
import WhyBox from '@/components/ui/WhyBox';

const COLOR = '#0e9f6e';

/**
 * src/components/Grammar/GrammarSection.jsx
 * Fichas de gramática de NIVEL, no de relato — material de referencia suelto
 * (grammarOf/GRAMMAR_DETAIL, src/data/grammar), p. ej. "Condicionales" en
 * B2. Mismo tratamiento visual que IdiomsSection: chips siempre visibles,
 * panel de detalle plegado con estado local. A diferencia de la ficha
 * dentro de un relato (GrammarDetailPanel), no hay "En este relato" ni
 * "Pruébalo" — no hay tokens de ningún texto de los que derivarlos.
 */
export default function GrammarSection() {
  const { surface, text, font, shadow } = useTheme();
  const { lang, level } = useReader();
  const [open, setOpen] = useState(null);

  const names = grammarOf(lang, level);
  if (names.length === 0) return null;

  const dict = open ? GRAMMAR_DETAIL[open] : null;

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
          Gramática de nivel
        </span>
        <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onTint }}>
          {names.length} {names.length === 1 ? 'ficha' : 'fichas'} · nivel {level}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {names.map((name) => {
          const hasDetail = !!GRAMMAR_DETAIL[name];
          if (!hasDetail && process.env.NODE_ENV !== 'production') {
            // eslint-disable-next-line no-console
            console.warn(
              `[GrammarSection] "${name}" (${lang}/${level}) no tiene ficha en GRAMMAR_DETAIL — añádela en src/data/grammar/index.js.`
            );
          }
          const isOpen = open === name;
          const chipBg = isOpen ? pastel(COLOR, 0.7) : surface.cream;
          return (
            <button
              key={name}
              onClick={() => hasDetail && setOpen(isOpen ? null : name)}
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
              <span style={{ fontFamily: font.display, fontSize: 16, fontWeight: 600, color: text.ink }}>{name}</span>
              <span style={{ fontFamily: font.body, fontSize: 9, fontWeight: 700, letterSpacing: '0.6px', textTransform: 'uppercase', color: fg(COLOR, chipBg, 4.6) }}>
                {isOpen ? '▾ Abierto' : '▸ Ver ficha'}
              </span>
            </button>
          );
        })}
      </div>

      {open && dict && (
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
              <h3 style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink, margin: 0 }}>{open}</h3>
              <p style={{ fontFamily: font.body, fontSize: 14, color: text.ink, margin: 0, maxWidth: 720 }}>{dict.intro}</p>
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
            <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={kickerStyle}>Cómo se forma</span>
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
      )}
    </section>
  );
}
