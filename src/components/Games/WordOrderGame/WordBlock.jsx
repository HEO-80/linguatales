'use client';

import { useState } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';

/** Bloque táctil con relieve. `tone`: undefined | 'ok' | 'error' (tras comprobar). */
export default function WordBlock({ word, draggableIndex, onClick, tone }) {
  const { surface, accent, text, font } = useTheme();
  const [hover, setHover] = useState(false);

  let bg = surface.cream;
  if (tone === 'ok') bg = pastel('#0e9f6e', 0.74);
  if (tone === 'error') bg = pastel('#e11d48', 0.78);

  const restBorder = pastel(accent.primary, 0.6);

  return (
    <div
      role="button"
      tabIndex={0}
      draggable
      onDragStart={(e) => e.dataTransfer.setData('text/plain', String(draggableIndex))}
      onClick={onClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: font.display,
        fontSize: 19,
        color: text.ink,
        background: bg,
        borderRadius: 5,
        padding: '9px 14px',
        cursor: 'pointer',
        userSelect: 'none',
        transform: hover && !tone ? 'translateY(-3px)' : 'none',
        boxShadow:
          hover && !tone
            ? `0 5px 0 ${accent.primary}, 0 6px 12px rgba(25,23,19,.14)`
            : `0 3px 0 ${restBorder}, 0 4px 10px rgba(25,23,19,.12)`,
        transition: 'transform .12s, box-shadow .12s'
      }}
    >
      {word}
    </div>
  );
}
