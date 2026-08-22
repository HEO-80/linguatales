'use client';

import { useState } from 'react';
import { pastel, fg, NEUTRAL } from '@/theme/color';

/**
 * src/components/Games/GameTabs/TabCard.jsx
 *
 * `mkTab` es EL builder (§1 linguatales-traduccion-inversa-spec.md): todas
 * las cards de la rejilla — los 10 juegos, Repaso y Examen final — salen de
 * aquí, nunca de un objeto escrito a mano en GameTabs.jsx. `view` (opcional)
 * hace que la card abra una vista (`view: 'srs'`) en vez de un juego: quien
 * la usa calcula "activa" contra `view` en vez de contra `game`.
 */
export function mkTab({ key, label, subtitle, icon, color, Comp, view, marker, hidden = false, disabled = false }) {
  return { key, label, subtitle, icon, color, Comp, view, marker, hidden, disabled };
}

const DISABLED_BORDER = 'rgba(25,23,19,.2)';
const DISABLED_TOP = 'rgba(25,23,19,.16)';
const DISABLED_BG = 'rgba(25,23,19,.045)';

/**
 * Único componente de render para toda card de la rejilla — geometría fija
 * (icono 34×34, título serif 17px, subtítulo 11px, contador mono 10.5px);
 * `tab.disabled` (Examen final) solo cambia colores/borde/cursor, nunca la
 * geometría (§4: "misma geometría que el resto de cards").
 */
export default function TabCard({ tab, isActive, onClick, surface, font }) {
  const [hover, setHover] = useState(false);
  const disabled = !!tab.disabled;
  const saturated = !disabled && (isActive || hover);

  const bg = disabled ? DISABLED_BG : pastel(tab.color, saturated ? 0.62 : 0.85);
  const borderColor = disabled ? DISABLED_BORDER : pastel(tab.color, 0.5);
  const borderTopColor = disabled ? DISABLED_TOP : tab.color;
  const borderStyle = disabled ? 'dashed' : 'solid';
  const titleColor = disabled ? '#4a443a' : fg(tab.color, bg, 5);
  const subtitleColor = disabled ? NEUTRAL.grey : fg(tab.color, bg, 4.6);
  const markerColor = disabled ? NEUTRAL.grey : fg(tab.color, bg, 4.6);
  const iconColor = disabled ? NEUTRAL.grey : tab.color;
  const shadow = !disabled && isActive ? `0 0 0 1px ${tab.color}55, 0 8px 20px ${tab.color}33` : 'none';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => !disabled && setHover(true)}
      onMouseLeave={() => setHover(false)}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        background: bg,
        border: `1px ${borderStyle} ${borderColor}`,
        borderTop: `4px ${borderStyle} ${borderTopColor}`,
        borderRadius: 6,
        padding: '14px 16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        boxShadow: shadow,
        opacity: disabled ? 0.85 : 1,
        textAlign: 'left',
        transition: 'background .12s, box-shadow .12s'
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          borderRadius: 6,
          background: surface.cream,
          border: `1px solid ${borderColor}`,
          color: iconColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 16
        }}
      >
        {tab.icon ?? '●'}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
        <span style={{ fontFamily: font.display, fontSize: 17, fontWeight: 600, color: titleColor }}>
          {tab.label}
        </span>
        {tab.subtitle && (
          <span style={{ fontFamily: font.body, fontSize: 11, color: subtitleColor }}>{tab.subtitle}</span>
        )}
      </div>
      <span style={{ flexShrink: 0, fontFamily: font.mono, fontSize: 10.5, fontWeight: 700, color: markerColor }}>
        {tab.marker}
      </span>
    </button>
  );
}
