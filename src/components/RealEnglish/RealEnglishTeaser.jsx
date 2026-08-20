'use client';

import { useAppState } from '@/state/AppStateContext';
import { getRealEnglishDialogues } from '@/data';

const DARK_BG = '#1c1210';
const WARNING = '#dc2626';

/**
 * Estilo fijo, independiente del idioma activo en la estantería — es una
 * señal de "contenido distinto", no parte del sistema de color por idioma.
 * No añade un 5º ítem al nav: se llega aquí con este teaser + ancla.
 */
export default function RealEnglishTeaser() {
  const { lang } = useAppState();
  const dialogues = getRealEnglishDialogues(lang);
  const available = dialogues.length > 0;

  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        style={{
          background: DARK_BG,
          borderTop: `4px solid ${WARNING}`,
          borderRadius: 5,
          padding: '18px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          boxShadow: '0 2px 4px rgba(25,23,19,.1), 0 10px 26px rgba(25,23,19,.18)'
        }}
      >
        <div>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              color: '#f59e0b'
            }}
          >
            ⚠ Inglés real · C1-C2 · Contenido adulto
          </span>
          <h3 style={{ fontFamily: "'Newsreader', serif", fontSize: 24, fontWeight: 600, color: '#fffdf7', margin: '4px 0 0' }}>
            {available ? dialogues[0].title : 'Argot y diálogos reales'}
          </h3>
          <p style={{ fontFamily: "'Karla', sans-serif", fontSize: 13, color: '#c9c3b7', margin: '4px 0 0' }}>
            {available
              ? 'Diálogos auténticos, con jerga y lenguaje coloquial real.'
              : 'Todavía no hay contenido de argot para este idioma.'}
          </p>
        </div>
        {available ? (
          <a
            href="#real-english"
            style={{
              background: '#fffdf7',
              color: DARK_BG,
              fontFamily: "'Karla', sans-serif",
              fontWeight: 600,
              fontSize: 13.5,
              borderRadius: 5,
              padding: '10px 18px',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            Ver diálogo →
          </a>
        ) : (
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1.2px',
              color: '#8d8674',
              textTransform: 'uppercase',
              flexShrink: 0
            }}
          >
            Pronto
          </span>
        )}
      </div>
    </section>
  );
}
