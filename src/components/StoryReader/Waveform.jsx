'use client';

import { useMemo } from 'react';
import { useTheme } from '@/theme/ThemeContext';

// Redondeado a enteros: Math.sin/cos no garantiza el mismo último bit entre
// el V8 del servidor y el del cliente, y eso bastaría para un mismatch de
// hidratación en un valor de altura con muchos decimales.
function buildBars(n) {
  return Array.from({ length: n }, (_, i) =>
    Math.round(4 + Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21)) * 34)
  );
}

/** `bars` y `color` son opcionales — por defecto, las 34 barras en el color
 * secundario del idioma que ya usaba el Juego 05. El Juego 08 (§3
 * linguatales-conectores-spec.md) la reutiliza con 40 barras en violeta. */
export default function Waveform({ recording = false, bars = 34, color }) {
  const { accent } = useTheme();
  const tint = color || accent.secondary;
  const heights = useMemo(() => buildBars(bars), [bars]);
  const litCount = Math.round(bars * (22 / 34));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2, height: 38 }}>
      {heights.map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: h,
            borderRadius: 1.5,
            background: recording || i < litCount ? tint : '#c9c3b7',
            // Propiedades sueltas, no el shorthand `animation`: mezclarlo
            // con animationDelay aparte hace que una pise a la otra.
            animationName: recording ? 'wavePulse' : 'none',
            animationDuration: `${0.5 + (i % 5) * 0.08}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: recording ? `${(i % 7) * 0.05}s` : '0s'
          }}
        />
      ))}
    </div>
  );
}
