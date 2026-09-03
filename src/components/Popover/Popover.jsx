'use client';

import { useLayoutEffect, useState } from 'react';
import { useTheme } from '@/theme/ThemeContext';

/**
 * src/components/Popover/Popover.jsx
 * Envoltura común de todos los popovers (idioma, nivel, Herramientas): velo
 * de fondo fijo para cubrir toda la ventana, panel `position: absolute`
 * anclado a la pastilla que lo abrió — nunca a una coordenada compartida
 * (§3 tres-barras-spec: un `right` común alinea los popovers con el borde
 * del lienzo, no con su botón).
 *
 * `position: absolute` en vez de `fixed`: sus coordenadas son las del
 * lienzo (el wrapper `position: relative` de AppShell), válidas a cualquier
 * ancho de ventana — con `fixed` medido contra el viewport, cualquier ancho
 * distinto del de referencia despega el popover de su pastilla.
 *
 * El ancla real es el trigger (`ref` + `getBoundingClientRect`), medido
 * contra su propio `offsetParent` — el ancestro que de verdad actúa de
 * contenedor para este `position: absolute` — nunca contra coordenadas de
 * documento. `position: sticky` cuenta como "posicionado" igual que
 * `relative` a efectos de contenedor (lo es para el Rail, cuyo riel interior
 * es sticky), así que sumar el scroll de la página a mano descuadraba el
 * popover del Rail: el contenedor real ya se mueve con el sticky, sumar
 * scroll otra vez lo desplazaba de más. Restar los rects del trigger y de su
 * offsetParent da la posición correcta sea cual sea el tipo de contenedor
 * (root relative, sticky, o el propio documento si no hay ninguno).
 */
export default function Popover({ anchorRef, onClose, fallbackTop = 96, align = 'left', width = 318, children }) {
  const { surface } = useTheme();

  // El <button> ancla ya está montado cuando este popover aparece (se
  // renderiza al pulsarlo), así que su rect está disponible desde el primer
  // layout — se lee en un efecto, nunca durante el render (refs no son
  // datos de render), y con useLayoutEffect el cálculo se aplica antes de
  // pintar, así que no hay salto de posición visible.
  const [pos, setPos] = useState({ top: fallbackTop, left: 24 });
  useLayoutEffect(() => {
    const anchor = anchorRef?.current;
    const rect = anchor?.getBoundingClientRect();
    if (!rect) return;
    const parentRect = (anchor.offsetParent ?? document.documentElement).getBoundingClientRect();
    const top = rect.bottom - parentRect.top + 6;
    setPos(
      align === 'right'
        ? { top, right: parentRect.right - rect.right }
        : { top, left: rect.left - parentRect.left }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(25,23,19,.28)', zIndex: 60 }}
      />
      <div
        style={{
          position: 'absolute',
          top: pos.top,
          left: pos.left,
          right: pos.right,
          width,
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
