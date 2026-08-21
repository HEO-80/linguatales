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
  const { surface, text, font, shadow } = useTheme();
  const { roleFilter, setRoleFilter } = useReader();

  const toggleRole = (key) => {
    setRoleFilter((f) => (f.includes(key) ? f.filter((k) => k !== key) : [...f, key]));
  };
  const clearRoles = () => setRoleFilter([]);

  let headerColor = text.onCream;
  let headerLabel = 'Toca cualquier palabra';
  if (roleFilter.length === 1) {
    headerColor = fg(ROLES[roleFilter[0]].color, surface.cream, 5);
    headerLabel = `Resaltando · ${ROLES[roleFilter[0]].label}`;
  } else if (roleFilter.length > 1) {
    headerLabel = `Resaltando · ${roleFilter.length} funciones`;
  }

  return (
    <div
      style={{
        background: surface.cream,
        border: `1px solid ${surface.border}`,
        boxShadow: shadow.sm,
        borderRadius: 5,
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }}
    >
      <span style={{ fontFamily: font.mono, fontSize: 10.5, fontWeight: 700, letterSpacing: '0.8px', color: headerColor, flexShrink: 0 }}>
        {headerLabel}
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
        {Object.entries(ROLES).map(([key, r]) => {
          const active = roleFilter.includes(key);
          const bg = pastel(r.color, active ? 0.5 : 0.82);
          return (
            <button
              key={key}
              onClick={() => toggleRole(key)}
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
        {roleFilter.length > 0 && (
          <button
            onClick={clearRoles}
            style={{
              fontFamily: font.body,
              fontSize: 12,
              fontWeight: 600,
              color: text.onCream,
              background: 'transparent',
              border: 'none',
              borderRadius: 4,
              padding: '5px 9px',
              cursor: 'pointer'
            }}
          >
            ✕ Quitar
          </button>
        )}
      </div>
    </div>
  );
}
