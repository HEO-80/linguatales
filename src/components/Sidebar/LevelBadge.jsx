'use client';

import { fg, whiteReadable, NEUTRAL } from '@/theme/color';
import { LEVELS } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';

/**
 * src/components/Sidebar/LevelBadge.jsx
 * Cuadrado redondeado con el código de nivel, mismo esquema de contraste
 * que LanguageBadge.
 */
export default function LevelBadge({ levelCode, size = 36 }) {
  const { font } = useTheme();
  const lv = LEVELS.find((l) => l.code === levelCode);
  const bg = lv ? lv.color : NEUTRAL.grey;
  const color = whiteReadable(bg) ? '#ffffff' : fg(NEUTRAL.ink, bg, 5);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 8,
        background: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <span style={{ fontFamily: font.mono, fontWeight: 700, fontSize: size * 0.32, color }}>{levelCode}</span>
    </div>
  );
}
