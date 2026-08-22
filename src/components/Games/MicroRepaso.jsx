'use client';

import { useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';

const AMBER = '#b45309';
const CYAN = '#0e7490';

/**
 * src/components/Games/MicroRepaso.jsx
 * Tanda corta de 3 tarjetas que salta cada 6 respuestas graduadas dentro de
 * un juego (§4, quinta entrega) — las más flojas del SRS, congeladas al
 * disparar el aviso (ReaderContext.microCards), nunca recalculadas a mitad
 * de tanda. Vive encima de la rejilla de juegos, no dentro de ninguno.
 */
export default function MicroRepaso() {
  const { text, font } = useTheme();
  const { microActive, microCards, srsCards, gradeSrsRaw, dismissMicro } = useReader();

  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState(false);

  if (!microActive || microCards.length === 0) return null;

  const key = microCards[Math.min(idx, microCards.length - 1)];
  const card = srsCards[key];
  if (!card) {
    dismissMicro();
    return null;
  }

  const handleGrade = (q) => {
    gradeSrsRaw(key, { kind: card.kind, q: card.q, a: card.a, hint: card.hint }, q);
    if (idx + 1 >= microCards.length) {
      dismissMicro();
      return;
    }
    setIdx((i) => i + 1);
    setShown(false);
  };

  const bg = pastel(AMBER, 0.82);

  return (
    <section style={{ maxWidth: 1440, margin: '14px auto 0', padding: '0 32px' }}>
      <div
        style={{
          background: bg,
          border: `1px solid ${pastel(AMBER, 0.55)}`,
          borderLeft: `5px solid ${AMBER}`,
          borderRadius: 6,
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: fg(AMBER, bg, 5)
            }}
          >
            Micro-repaso · {idx + 1} de {microCards.length}
          </span>
          <button
            onClick={dismissMicro}
            style={{
              fontFamily: font.body,
              fontSize: 12,
              fontWeight: 600,
              color: fg(AMBER, bg, 4.6),
              background: 'transparent',
              border: `1px solid ${pastel(AMBER, 0.4)}`,
              borderRadius: 4,
              padding: '5px 11px',
              cursor: 'pointer'
            }}
          >
            Ahora no
          </button>
        </div>

        <p style={{ fontFamily: font.display, fontSize: 20, color: text.ink, margin: 0 }}>{card.q}</p>

        {!shown ? (
          <button
            onClick={() => setShown(true)}
            style={{
              alignSelf: 'flex-start',
              fontFamily: font.mono,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: '#fffdf7',
              background: AMBER,
              border: 'none',
              borderRadius: 4,
              padding: '9px 16px',
              cursor: 'pointer'
            }}
          >
            Girar la tarjeta
          </button>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ fontFamily: font.display, fontSize: 18, color: text.ink }}>{card.a}</span>
              {card.hint && (
                <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{card.hint}</span>
              )}
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                onClick={() => handleGrade(0)}
                style={{
                  fontFamily: font.body,
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fffdf7',
                  background: '#e11d48',
                  border: 'none',
                  borderRadius: 4,
                  padding: '9px 16px',
                  cursor: 'pointer'
                }}
              >
                No la sabía
              </button>
              <button
                onClick={() => handleGrade(4)}
                style={{
                  fontFamily: font.body,
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fffdf7',
                  background: CYAN,
                  border: 'none',
                  borderRadius: 4,
                  padding: '9px 16px',
                  cursor: 'pointer'
                }}
              >
                La sabía
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
