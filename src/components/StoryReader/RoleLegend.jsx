'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';

/**
 * src/components/StoryReader/RoleLegend.jsx
 * Leyenda de funciones gramaticales sobre el texto. Tocar una función la
 * fija como roleFilter — el resto de palabras del relato se atenúa.
 */
export default function RoleLegend() {
  const { surface, text, font } = useTheme();
  const { roleFilter, setRoleFilter } = useReader();

  const headerColor = roleFilter ? fg(ROLES[roleFilter].color, surface.cream, 5) : text.onCream;

  return (
    <div
      style={{
        border: `1px dashed ${surface.border}`,
        borderRadius: 5,
        padding: '10px 14px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}
    >
      <span style={{ fontFamily: font.mono, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.8px', color: headerColor }}>
        {roleFilter ? `Resaltando · ${ROLES[roleFilter].label}` : 'Toca cualquier palabra'}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {Object.entries(ROLES).map(([key, r]) => {
          const active = roleFilter === key;
          const bg = pastel(r.color, active ? 0.5 : 0.82);
          return (
            <button
              key={key}
              onClick={() => setRoleFilter((f) => (f === key ? null : key))}
              style={{
                fontFamily: font.body,
                fontSize: 12,
                fontWeight: 600,
                color: fg(r.color, bg, 4.6),
                background: bg,
                border: 'none',
                borderRadius: 4,
                padding: '5px 9px',
                cursor: 'pointer'
              }}
            >
              {r.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
