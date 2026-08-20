'use client';

/**
 * Contrato común de juego (§5). Cada juego solo implementa su interior
 * (children); GameShell aporta cabecera, badges, pie con Comprobar/Reiniciar
 * y el mensaje de feedback coloreado por `tone`.
 */

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';

const TONE_COLOR = {
  idle: '#8d8674',
  ready: '#e0a80c',
  ok: '#0e9f6e',
  error: '#e11d48'
};

export default function GameShell({
  index,
  title,
  prompt,
  level,
  progress,
  accent,
  onCheck,
  onReset,
  canCheck,
  feedback,
  checkLabel = 'Comprobar',
  resetLabel = 'Reiniciar',
  children
}) {
  const { font, shadow } = useTheme();
  const bg = pastel(accent, 0.84);
  const ink = fg('#191713', bg, 6);
  const soft = fg('#4a443a', bg, 4.6);
  const kicker = fg(accent, bg, 4.6);

  const toneColor = TONE_COLOR[feedback?.tone || 'idle'];
  const toneBg = pastel(toneColor, 0.82);
  const toneFg = fg(toneColor, toneBg, 5);

  return (
    <div
      style={{
        background: bg,
        borderTop: `4px solid ${accent}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '20px 22px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        flex: 1
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              color: kicker
            }}
          >
            Juego {index}
          </span>
          <h3 style={{ fontFamily: font.display, fontSize: 29, fontWeight: 600, color: ink, margin: '4px 0 6px' }}>
            {title}
          </h3>
          <p style={{ fontFamily: font.body, fontSize: 13, color: soft, margin: 0, maxWidth: 540 }}>{prompt}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1.2px',
              color: ink,
              background: 'rgba(255,255,255,.55)',
              borderRadius: 4,
              padding: '3px 8px'
            }}
          >
            {level}
          </span>
          <span style={{ fontFamily: font.mono, fontSize: 11, color: soft }}>{progress}</span>
        </div>
      </div>

      {children}

      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <button
          disabled={!canCheck}
          onClick={onCheck}
          style={{
            background: canCheck ? accent : 'rgba(25,23,19,.18)',
            color: '#fffdf7',
            fontFamily: font.body,
            fontSize: 13.5,
            fontWeight: 600,
            borderRadius: 5,
            padding: '10px 18px',
            opacity: canCheck ? 1 : 0.6,
            cursor: canCheck ? 'pointer' : 'not-allowed'
          }}
        >
          {checkLabel}
        </button>
        <button
          onClick={onReset}
          style={{
            background: 'transparent',
            border: `1px solid ${accent}`,
            color: ink,
            fontFamily: font.body,
            fontSize: 13.5,
            fontWeight: 600,
            borderRadius: 5,
            padding: '10px 18px'
          }}
        >
          {resetLabel}
        </button>
        {feedback?.text && (
          <span
            style={{
              fontFamily: font.body,
              fontSize: 13,
              fontWeight: 600,
              color: toneFg,
              background: toneBg,
              borderRadius: 4,
              padding: '7px 11px'
            }}
          >
            {feedback.text}
          </span>
        )}
      </div>
    </div>
  );
}
