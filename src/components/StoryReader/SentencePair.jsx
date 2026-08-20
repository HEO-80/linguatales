'use client';

import { useTheme } from '@/theme/ThemeContext';

/**
 * `theme` es opcional: si no se pasa, usa el tema global activo (caso de
 * StoryReader). RealEnglishReader pasa su propio tema (el del idioma del
 * diálogo, que puede no coincidir con el idioma activo en la estantería).
 * `speaker` es opcional — solo lo usan los diálogos con varios hablantes.
 */
export default function SentencePair({ original, translation, active, read, onClick, theme, speaker }) {
  const globalTheme = useTheme();
  const { surface, accent, text, font } = theme || globalTheme;

  const cellStyle = {
    padding: '11px 18px',
    background: active ? surface.tintDeep : 'transparent',
    borderLeft: active ? `4px solid ${accent.secondary}` : '4px solid transparent',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'flex-start',
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
            marginTop: 3,
            color: active ? text.secondaryOnDeep : text.secondaryOnCream
          }}
        >
          {active ? '▶' : read ? '·' : ''}
        </span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {speaker && (
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: active ? text.secondaryOnDeep : text.secondaryOnCream
              }}
            >
              {speaker}
            </span>
          )}
          <span style={{ fontFamily: font.display, fontSize: 17.5, color: text.ink }}>{original}</span>
        </span>
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
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {speaker && (
            <span style={{ fontFamily: font.mono, fontSize: 9.5, opacity: 0 }} aria-hidden>
              {speaker}
            </span>
          )}
          <span style={{ fontFamily: font.body, fontSize: 14, color: active ? text.onTintDeep : text.onCream }}>
            {translation}
          </span>
        </span>
      </div>
    </>
  );
}
