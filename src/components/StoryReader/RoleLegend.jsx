'use client';

import { pastel, fg, NEUTRAL } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';

// Encendido: gris claro fijo — el botón indica un modo activo, no es un
// acento del idioma (§4 linguatales-lectura-color-spec).
const ON_BG = '#e6e1d6';
const ON_BORDER = '#cdc6b6';
const ON_SHADOW = 'inset 0 1px 3px rgba(25,23,19,.22)';

/**
 * src/components/StoryReader/RoleLegend.jsx
 * Botón "Gramática" en acordeón (§1 linguatales-lectura-color-spec): apagado
 * es el modo lectura por defecto, solo un botón hueso + nota; encendido
 * despliega la leyenda de funciones con sus filtros, tal como estaba antes.
 */
export default function RoleLegend() {
  const { surface, text, font, shadow, accent } = useTheme();
  const { roleFilter, setRoleFilter, gramOn, toggleGramOn } = useReader();

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

  const offBg = pastel(accent.primary, 0.88);
  const offBorder = pastel(accent.primary, 0.6);
  const btnBg = gramOn ? ON_BG : offBg;
  const btnBorder = gramOn ? ON_BORDER : offBorder;
  const btnColor = gramOn ? fg(NEUTRAL.ink, ON_BG, 4.6) : fg(accent.primary, offBg, 5);
  const noteColor = fg(NEUTRAL.grey, surface.tint, 5.5);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: gramOn ? 10 : 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          onClick={toggleGramOn}
          aria-expanded={gramOn}
          style={{
            height: 32,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: font.mono,
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: '0.8px',
            color: btnColor,
            background: btnBg,
            border: `1px solid ${btnBorder}`,
            borderRadius: 5,
            padding: '0 14px',
            boxShadow: gramOn ? ON_SHADOW : shadow.sm,
            cursor: 'pointer',
            flexShrink: 0
          }}
        >
          {gramOn ? '▾' : '▸'} Gramática
        </button>
        {!gramOn && (
          <span style={{ fontFamily: font.body, fontSize: 10.5, color: noteColor }}>
            Lectura limpia · toca una palabra para verla en color
          </span>
        )}
      </div>

      {gramOn && (
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
      )}
    </div>
  );
}
