'use client';

import { useTheme } from '@/theme/ThemeContext';

// Redondeado a enteros: Math.sin/cos no garantiza el mismo último bit entre
// el V8 del servidor y el del cliente, y eso bastaría para un mismatch de
// hidratación en un valor de altura con muchos decimales.
const BARS = Array.from({ length: 34 }, (_, i) =>
  Math.round(4 + Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21)) * 34)
);

export default function Waveform() {
  const { accent } = useTheme();

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 38 }}>
      {BARS.map((h, i) => (
        <div
          key={i}
          style={{
            width: 3,
            height: h,
            borderRadius: 1.5,
            background: i < 22 ? accent.secondary : '#c9c3b7'
          }}
        />
      ))}
    </div>
  );
}
