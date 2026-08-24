'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { emitReaderNav, subscribeReaderToggles } from '@/state/readerNavBus';
import { subscribeToSrs, getSrsSnapshot, getSrsServerSnapshot, advanceDay } from '@/state/srs';
import Popover from '@/components/Popover/Popover';

const IS_DEV = process.env.NODE_ENV !== 'production';

const SWITCHES = [
  { key: 'showTr', title: 'Traducción bajo el relato', body: 'Muestra la versión española de cada párrafo.', action: 'toggle-showTr' },
  { key: 'microOff', title: 'Micro-repaso entre juegos', body: 'Tanda de tres tarjetas cada seis respuestas graduadas.', action: 'toggle-micro', invert: true },
  { key: 'srsMarksOff', title: 'Marcar lo que toca repasar', body: 'Filete de color SRS en las palabras del relato.', action: 'toggle-srsMarks', invert: true }
];

function Switch({ on, color, cream }) {
  return (
    <span
      style={{
        flexShrink: 0,
        width: 34,
        height: 20,
        borderRadius: 10,
        background: on ? color : pastel(color, 0.85),
        border: `1px solid ${on ? color : pastel(color, 0.55)}`,
        position: 'relative',
        transition: 'background .12s'
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 1,
          left: on ? 15 : 1,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: cream,
          boxShadow: '0 1px 3px rgba(25,23,19,.35)',
          transition: 'left .12s'
        }}
      />
    </span>
  );
}

/**
 * src/components/AppHeader/ToolsPopover.jsx
 * Popover de la pastilla Herramientas (§4 tres-barras-spec): tres
 * interruptores que de verdad cambian comportamiento (no solo aspecto) —
 * showTr/microOff/srsMarksOff viven en ReaderProvider y se reflejan aquí
 * por readerNavBus (subscribeReaderToggles), porque este popover vive en
 * AppHeader, fuera de ese árbol. Cambiarlos emite una acción del nav
 * (toggle-showTr/toggle-micro/toggle-srsMarks); nunca se escribe el estado
 * directamente desde aquí. "Avanzar un día" se mueve aquí desde Repaso —
 * sigue siendo solo de desarrollo.
 */
export default function ToolsPopover({ anchorRef, onClose }) {
  const { surface, accent, text, font, shadow } = useTheme();
  const [toggles, setToggles] = useState({ showTr: false, microOff: false, srsMarksOff: false });
  useEffect(() => subscribeReaderToggles(setToggles), []);

  const srsSnapshot = useSyncExternalStore(subscribeToSrs, getSrsSnapshot, getSrsServerSnapshot);

  return (
    <Popover anchorRef={anchorRef} onClose={onClose} align="right" width={300}>
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '1.2px',
          textTransform: 'uppercase',
          color: text.onCream,
          padding: '2px 10px 8px'
        }}
      >
        Herramientas
      </span>

      {SWITCHES.map((s) => {
        // `invert`: el flag guardado es "apagar" (microOff/srsMarksOff),
        // pero la fila se lee como "encendido" — on = flag false.
        const flagValue = toggles[s.key];
        const on = s.invert ? !flagValue : !!flagValue;
        return (
          <div
            key={s.key}
            role="button"
            tabIndex={0}
            onClick={() => emitReaderNav(s.action)}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && emitReaderNav(s.action)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              background: on ? pastel(accent.secondary, 0.82) : 'transparent',
              border: `1px solid ${on ? pastel(accent.secondary, 0.5) : 'transparent'}`,
              borderRadius: 6,
              padding: '9px 10px',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
              <span style={{ fontFamily: font.body, fontSize: 13.5, fontWeight: 600, color: text.ink }}>{s.title}</span>
              <span style={{ fontFamily: font.body, fontSize: 11.5, color: text.onCream }}>{s.body}</span>
            </div>
            <Switch on={on} color={accent.secondary} cream={surface.cream} />
          </div>
        );
      })}

      {IS_DEV && (
        <>
          <div style={{ height: 1, background: surface.border, margin: '8px 4px' }} />
          <button
            onClick={() => advanceDay()}
            style={{
              fontFamily: font.mono,
              fontSize: 10.5,
              fontWeight: 700,
              letterSpacing: '0.4px',
              color: fg(accent.secondary, surface.cream, 4.6),
              background: surface.cream,
              border: `1px solid ${pastel(accent.secondary, 0.5)}`,
              borderRadius: 5,
              padding: '8px 12px',
              margin: '0 4px',
              cursor: 'pointer',
              boxShadow: shadow.sm
            }}
          >
            ▸ Avanzar un día · día {srsSnapshot.day}
          </button>
        </>
      )}
    </Popover>
  );
}
