'use client';

import { useState } from 'react';
import { useTheme } from '@/theme/ThemeContext';

/**
 * src/components/Popover/Popover.jsx
 * Envoltura común de los popovers de idioma y nivel: velo de fondo opaco al
 * clic, panel sólido siempre por encima del header, anclado a la pastilla
 * que lo abrió — no a una coordenada fija del documento. El mismo popover
 * (LevelPopover) se abre desde el rail vertical y desde la barra de idioma
 * horizontal, en posiciones muy distintas: por eso el `top` se calcula desde
 * `anchorRef.current.getBoundingClientRect()` en vez de escribirse a mano.
 * `left` sí es fijo — los dos paneles viven justo a la derecha del rail de
 * 76px, sea cual sea la pastilla que los abrió.
 */
export default function Popover({ anchorRef, onClose, fallbackTop = 96, children }) {
  const { surface } = useTheme();

  // Lazy init: el <button> ancla ya está montado cuando este popover
  // aparece (se renderiza al pulsarlo), así que su rect está disponible
  // desde el primer render — sin esto habría un salto de posición.
  const [rect] = useState(() => anchorRef?.current?.getBoundingClientRect() ?? null);
  const top = rect ? rect.top : fallbackTop;

  return (
    <>
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(25,23,19,.28)', zIndex: 60 }}
      />
      <div
        style={{
          position: 'fixed',
          left: 88,
          top,
          width: 318,
          zIndex: 61,
          background: '#fffdf7',
          border: `1px solid ${surface.border}`,
          borderRadius: 8,
          padding: 14,
          boxShadow: '0 8px 20px rgba(25,23,19,.14), 0 26px 60px rgba(25,23,19,.22)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {children}
      </div>
    </>
  );
}
