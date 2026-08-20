'use client';

import { fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useLangCode, useLevelCode } from '@/lib/routes/useRouteCodes';
import { getLevelContent } from '@/data';

export default function IdiomCard() {
  const { lang: langInfo, surface, accent, font, shadow } = useTheme();
  const lang = useLangCode();
  const level = useLevelCode();
  const { idioms } = getLevelContent(lang, level);

  const idiomBg = surface.idiomFlat;
  const levelColor = fg(accent.secondary, idiomBg, 4.6);

  return (
    <div
      id="idiom"
      style={{
        gridColumn: 3,
        gridRow: 1,
        background: surface.idiom,
        borderTop: `4px solid ${accent.secondary}`,
        borderRadius: 5,
        boxShadow: shadow.dark,
        padding: '18px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        color: '#ffffff'
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
            color: levelColor
          }}
        >
          {langInfo.navIdiom}
        </span>
        <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: '#ffffff', margin: '4px 0 0' }}>
          Vistos en este nivel
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {idioms.map((entry) => (
          <div key={entry.term} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontFamily: font.display, fontSize: 16, fontStyle: 'italic', color: '#ffffff' }}>
              {entry.term}
            </span>
            <span style={{ fontFamily: font.body, fontSize: 12.5, color: '#c9c3b7' }}>{entry.meaning}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
