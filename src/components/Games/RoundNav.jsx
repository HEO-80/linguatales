'use client';

import { useTheme } from '@/theme/ThemeContext';

/**
 * src/components/Games/RoundNav.jsx
 * Flechas de navegación libre y cíclica entre ejercicios de un juego con
 * varias rondas (02, 04, 05) — no exigen acertar antes de moverse. El badge
 * "✓ Hecho" refleja si la ronda actualmente mostrada ya está resuelta.
 */
export default function RoundNav({ index, total, onNavigate, resolved, accent }) {
  const { font } = useTheme();

  const go = (delta) => onNavigate(((index + delta) % total + total) % total);

  const btnStyle = {
    width: 28,
    height: 28,
    borderRadius: 4,
    background: '#fffdf7',
    border: `1px solid ${accent}`,
    color: accent,
    fontFamily: font.body,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 1,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    flexShrink: 0
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <button aria-label="Ejercicio anterior" onClick={() => go(-1)} style={btnStyle}>‹</button>
      <button aria-label="Ejercicio siguiente" onClick={() => go(1)} style={btnStyle}>›</button>
      {resolved && (
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            color: '#fffdf7',
            background: '#0e9f6e',
            borderRadius: 4,
            padding: '3px 7px',
            flexShrink: 0
          }}
        >
          ✓ Hecho
        </span>
      )}
    </div>
  );
}
