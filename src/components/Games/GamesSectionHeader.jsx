'use client';

import { fg } from '@/theme/color';
import { SECTION } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';

const GAMES_COLOR = SECTION.games.color;

/**
 * src/components/Games/GamesSectionHeader.jsx
 * Encabezado del bloque de juegos, extraído del antiguo GamesCard.jsx
 * (decorativo, sin datos reales) para no duplicar la sección "Juegos".
 */
export default function GamesSectionHeader() {
  const { surface, text, font } = useTheme();

  return (
    <div>
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: fg(GAMES_COLOR, surface.page, 4.6)
        }}
      >
        Juegos
      </span>
      <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: text.ink, margin: '4px 0 0' }}>
        Practica lo que acabas de leer
      </h3>
    </div>
  );
}
