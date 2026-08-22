'use client';

import { pastel, fg } from '@/theme/color';

/**
 * src/components/Games/GameTabs/TabCard.jsx
 * Builder de la tarjeta de pestaña de juego — icono en caja crema, título +
 * subtítulo opcional, contador a la derecha, border-top del color del juego.
 * La misma tarjeta para las 5 pestañas del relato y las 2 de frases.
 */
export default function TabCard({ tab, isActive, onClick, surface, font }) {
  const bg = pastel(tab.color, isActive ? 0.66 : 0.85);

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: bg,
        border: 'none',
        borderTop: `4px solid ${tab.color}`,
        borderRadius: 6,
        padding: '12px 14px',
        cursor: 'pointer',
        boxShadow: isActive ? `0 0 0 1px ${tab.color}55, 0 8px 20px ${tab.color}33` : 'none',
        textAlign: 'left'
      }}
    >
      <span
        style={{
          width: 30,
          height: 30,
          flexShrink: 0,
          borderRadius: 6,
          background: surface.cream,
          color: tab.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 15
        }}
      >
        {tab.icon ?? '●'}
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
        <span
          style={{
            fontFamily: font.body,
            fontSize: 13,
            fontWeight: isActive ? 700 : 600,
            color: fg(tab.color, bg, 5)
          }}
        >
          {tab.label}
        </span>
        {tab.subtitle && (
          <span style={{ fontFamily: font.body, fontSize: 10.5, color: fg(tab.color, bg, 4.6) }}>
            {tab.subtitle}
          </span>
        )}
      </div>
      <span
        style={{
          flexShrink: 0,
          fontFamily: font.mono,
          fontSize: 10.5,
          fontWeight: 700,
          color: fg(tab.color, bg, 4.6)
        }}
      >
        {tab.marker}
      </span>
    </button>
  );
}
