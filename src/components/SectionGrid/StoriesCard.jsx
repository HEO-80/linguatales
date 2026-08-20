'use client';

import { useTheme } from '@/theme/ThemeContext';
import LevelLadder from './LevelLadder';
import StoryList from './StoryList';

export default function StoriesCard() {
  const { surface, accent, text, font, shadow } = useTheme();

  return (
    <div
      id="stories"
      style={{
        gridColumn: 1,
        gridRow: '1 / span 2',
        background: surface.tint,
        borderTop: `4px solid ${accent.primary}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '20px 22px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
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
            color: text.primaryOnTint
          }}
        >
          Historias
        </span>
        <h2 style={{ fontFamily: font.display, fontSize: 29, fontWeight: 600, color: text.ink, margin: '4px 0 0' }}>
          Escalera de niveles
        </h2>
      </div>

      <LevelLadder />
      <StoryList />
    </div>
  );
}
