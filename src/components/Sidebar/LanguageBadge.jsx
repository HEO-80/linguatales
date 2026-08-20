'use client';

import { pastel, fg, hue, whiteReadable, NEUTRAL } from '@/theme/color';
import { LANGUAGES } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';

/**
 * src/components/Sidebar/LanguageBadge.jsx
 * Círculo puro (sin <Link>): iniciales del idioma sobre su color pleno.
 * A tamaños de badge (26–44px) un Motif SVG deja de ser legible, por eso
 * se usan las 2 letras del código en vez del motivo geométrico.
 */
export default function LanguageBadge({ code, size = 44 }) {
  const { font } = useTheme();
  const L = LANGUAGES[code];
  const bg = L.p1;
  const color = whiteReadable(bg) ? '#ffffff' : fg(NEUTRAL.ink, bg, 5);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        boxShadow: `0 0 0 2px ${pastel(hue(L), 0.7)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}
    >
      <span style={{ fontFamily: font.mono, fontWeight: 700, fontSize: size * 0.3, color }}>{code}</span>
    </div>
  );
}
