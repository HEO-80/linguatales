'use client';

import { pastel, fg } from '@/theme/color';

/**
 * Expresiones explicadas una a una. Cada una enlaza a su línea del
 * transcript (`lineIndex`) — clic la resalta ahí abajo, reusando el mismo
 * mecanismo de "frase activa" que ya tiene StoryReader/SentencePair.
 */
export default function ExpressionsList({ expressions, theme, activeLine, onJump }) {
  const { surface, font, text } = theme;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {expressions.map((expr, i) => {
        const isLinked = expr.lineIndex === activeLine;
        const bg = isLinked ? pastel('#dc2626', 0.86) : surface.cream;
        const numberFg = fg('#dc2626', bg, 4.6);

        return (
          <button
            key={i}
            onClick={() => onJump(expr.lineIndex)}
            style={{
              textAlign: 'left',
              background: bg,
              border: `1px solid ${surface.border}`,
              borderRadius: 5,
              padding: '12px 14px',
              display: 'flex',
              gap: 12
            }}
          >
            <span
              style={{
                flexShrink: 0,
                fontFamily: font.mono,
                fontSize: 11,
                fontWeight: 700,
                color: numberFg,
                width: 20
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontFamily: font.display, fontSize: 16, fontStyle: 'italic', color: text.ink }}>
                “{expr.quote}”
              </span>
              <span style={{ fontFamily: font.body, fontSize: 13, color: text.onCream }}>{expr.translation}</span>
              <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream, opacity: 0.9 }}>
                {expr.explanation}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
