'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';

const AMBER = '#e0a80c';

/**
 * src/components/ui/WhyBox.jsx
 * Caja "Por qué" (§1, quinta entrega — feedback-y-examen-final spec) — el
 * mismo componente detrás de dos sitios: el feedback al fallar en los
 * juegos 04/06/07/09/10/examen, y "Cuidado con esto" en la ficha de
 * gramática. Nunca es contenido nuevo: `text` sale de datos que ya existen
 * (regla de gramática, tip de frase, ficha de conector, contestación).
 */
export default function WhyBox({ label, text: bodyText }) {
  const { font, text } = useTheme();
  if (!bodyText) return null;

  const bg = pastel(AMBER, 0.82);
  const border = pastel(AMBER, 0.55);

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderLeft: `4px solid ${AMBER}`,
        borderRadius: 5,
        padding: '12px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.8px',
          textTransform: 'uppercase',
          color: fg(AMBER, bg, 5)
        }}
      >
        {label}
      </span>
      <span style={{ fontFamily: font.body, fontSize: 13.5, lineHeight: 1.6, color: text.ink }}>{bodyText}</span>
    </div>
  );
}
