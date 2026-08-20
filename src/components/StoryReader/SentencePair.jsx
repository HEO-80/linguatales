'use client';

import { useTheme } from '@/theme/ThemeContext';

export default function SentencePair({ original, translation, active, read, onClick }) {
  const { surface, accent, text, font } = useTheme();

  const cellStyle = {
    padding: '11px 18px',
    background: active ? surface.tintDeep : 'transparent',
    borderLeft: active ? `4px solid ${accent.secondary}` : '4px solid transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: 8
  };

  return (
    <>
      <div style={cellStyle} onClick={onClick}>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 12,
            width: 12,
            flexShrink: 0,
            color: active ? text.secondaryOnDeep : text.secondaryOnCream
          }}
        >
          {active ? '▶' : read ? '·' : ''}
        </span>
        <span style={{ fontFamily: font.display, fontSize: 17.5, color: text.ink }}>{original}</span>
      </div>
      <div
        style={{
          padding: '11px 18px',
          background: active ? surface.tintDeep : 'transparent',
          borderLeft: `1px solid ${surface.border}`,
          cursor: 'pointer'
        }}
        onClick={onClick}
      >
        <span style={{ fontFamily: font.body, fontSize: 14, color: active ? text.onTintDeep : text.onCream }}>
          {translation}
        </span>
      </div>
    </>
  );
}
