'use client';

import { pastel, fg } from '@/theme/color';
import { SECTION } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';

const GAMES_COLOR = SECTION.games.color;

const ENTRIES = [
  { title: 'Ordena la frase', status: 'Listo', color: SECTION.games.color },
  { title: 'Elige el hueco', status: 'Pronto', color: SECTION.gapFill.color },
  { title: 'Dictado', status: 'Pronto', color: SECTION.dictation.color }
];

export default function GamesCard() {
  const { font, shadow } = useTheme();
  const bg = pastel(GAMES_COLOR, SECTION.games.tint);
  const ink = fg('#191713', bg, 6);

  return (
    <div
      id="games"
      style={{
        gridColumn: '2 / span 2',
        gridRow: 2,
        background: bg,
        borderTop: `4px solid ${GAMES_COLOR}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '18px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }}
    >
      <div>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            color: fg(GAMES_COLOR, bg, 4.6)
          }}
        >
          Juegos
        </span>
        <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: ink, margin: '4px 0 0' }}>
          Practica lo que acabas de leer
        </h3>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        {ENTRIES.map((e) => {
          const chipBg = pastel(e.color, 0.72);
          const chipFg = fg(e.color, chipBg, 5.5);
          return (
            <div
              key={e.title}
              style={{
                flex: 1,
                background: chipBg,
                borderLeft: `4px solid ${e.color}`,
                borderRadius: 4,
                padding: '10px 12px'
              }}
            >
              <div style={{ fontFamily: font.body, fontSize: 13, fontWeight: 700, color: chipFg }}>{e.title}</div>
              <div style={{ fontFamily: font.mono, fontSize: 9.5, letterSpacing: '1.2px', textTransform: 'uppercase', color: chipFg, marginTop: 4 }}>
                {e.status}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
