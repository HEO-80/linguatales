'use client';

import { useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { SECTION } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';

const ITEMS = [
  { title: 'Elige el hueco', icon: '▤', status: 'Pronto', color: SECTION.gapFill.color, tint: SECTION.gapFill.tint },
  { title: 'Dictado', icon: '✎', status: 'Pronto', color: SECTION.dictation.color, tint: SECTION.dictation.tint }
];

function CatalogueTile({ item }) {
  const { surface, font, shadow } = useTheme();
  const [hover, setHover] = useState(false);
  const bg = pastel(item.color, item.tint);
  const fgColor = fg(item.color, bg, 5);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: bg,
        borderLeft: `5px solid ${item.color}`,
        borderRadius: 5,
        padding: '14px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        transform: hover ? 'translateY(-2px)' : 'none',
        boxShadow: hover ? `0 0 0 1px ${item.color}55, 0 8px 20px ${item.color}33` : shadow.sm,
        transition: 'transform .15s, box-shadow .15s'
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 6,
          background: surface.cream,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16,
          color: fgColor,
          flexShrink: 0
        }}
      >
        {item.icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: font.body, fontSize: 13.5, fontWeight: 700, color: fgColor }}>{item.title}</div>
        <div
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: fgColor,
            marginTop: 2
          }}
        >
          {item.status}
        </div>
      </div>
    </div>
  );
}

/** Columna derecha (316px): juegos siguientes + hueco explícito para añadir más. */
export default function GameCatalogue() {
  const { font } = useTheme();
  const pendingBg = pastel(SECTION.pending.color, SECTION.pending.tint);
  const pendingFg = fg(SECTION.pending.color, pendingBg, 4.5);

  return (
    <div style={{ width: 316, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: '#6d6658'
        }}
      >
        Próximos juegos
      </span>

      {ITEMS.map((item) => (
        <CatalogueTile key={item.title} item={item} />
      ))}

      <div
        style={{
          border: `2px dashed ${pastel(SECTION.pending.color, 0.6)}`,
          borderRadius: 5,
          background: pendingBg,
          minHeight: 68,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: font.display,
          fontSize: 22,
          color: pendingFg
        }}
      >
        +
      </div>
    </div>
  );
}
