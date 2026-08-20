'use client';

import { useSyncExternalStore } from 'react';
import {
  subscribeToProgress,
  getProgressSnapshot,
  getProgressServerSnapshot,
  acknowledgeWarning
} from '@/lib/storage/localProgress';

const DARK_BG = '#1c1210';
const WARNING = '#dc2626';

/**
 * Interstitial de aviso de contenido adulto. Estilo fijo (no deriva del
 * tema del idioma activo): es una señal de "esto es distinto", no parte
 * del sistema de color por idioma. Se recuerda por diálogo en localStorage
 * — no vuelve a pedirlo cada visita, pero sí una vez por dispositivo.
 */
export default function ContentWarningGate({ dialogue, children }) {
  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);
  const acknowledged = progress.acknowledgedWarnings.includes(dialogue.id);

  if (acknowledged) return children;

  return (
    <div
      style={{
        background: DARK_BG,
        borderTop: `4px solid ${WARNING}`,
        borderRadius: 5,
        padding: '32px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 14,
        boxShadow: '0 2px 4px rgba(25,23,19,.1), 0 10px 26px rgba(25,23,19,.18)'
      }}
    >
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: '#f59e0b'
        }}
      >
        ⚠ Aviso de contenido · {dialogue.levelRange}
      </span>
      <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 26, fontWeight: 600, color: '#fffdf7', margin: 0 }}>
        {dialogue.title}
      </h3>
      <p style={{ fontFamily: "'Karla', sans-serif", fontSize: 14, color: '#c9c3b7', margin: 0, maxWidth: 560 }}>
        {dialogue.contentWarning}
      </p>
      <button
        onClick={() => acknowledgeWarning(dialogue.id)}
        style={{
          marginTop: 6,
          background: '#fffdf7',
          color: DARK_BG,
          fontFamily: "'Karla', sans-serif",
          fontWeight: 600,
          fontSize: 13.5,
          borderRadius: 5,
          padding: '10px 18px'
        }}
      >
        Entiendo, continuar
      </button>
    </div>
  );
}
