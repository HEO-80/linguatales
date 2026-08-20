'use client';

import { useTheme } from '@/theme/ThemeContext';

/**
 * src/components/ComingSoon/ComingSoonPanel.jsx
 * Aviso "Próximamente" para pares idioma/nivel todavía no pilotados.
 * Reusa tokens de tema existentes, sin estilo nuevo.
 */
export default function ComingSoonPanel({ message = 'Todavía no hay contenido para este idioma y nivel.' }) {
  const { surface, text, font } = useTheme();

  return (
    <div
      style={{
        background: surface.cream,
        borderRadius: 5,
        border: `1px solid ${surface.border}`,
        padding: '22px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        alignItems: 'center',
        textAlign: 'center'
      }}
    >
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '1.4px',
          textTransform: 'uppercase',
          color: text.onCream
        }}
      >
        Próximamente
      </span>
      <span style={{ fontFamily: font.body, fontSize: 13, color: text.onCream }}>{message}</span>
    </div>
  );
}
