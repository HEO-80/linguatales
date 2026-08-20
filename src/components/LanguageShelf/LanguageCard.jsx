'use client';

import { pastel, fg, hue, NEUTRAL } from '@/theme/color';
import { LANGUAGES, LEVELS } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { getLanguageData } from '@/data';
import Motif from './motifs';

/**
 * Cada tarjeta calcula su PROPIO tinte a partir de su propio idioma
 * (no del tema global, que solo refleja el idioma activo).
 */
export default function LanguageCard({ code, active, currentLevel, onSelect }) {
  const { font, shadow } = useTheme();
  const L = LANGUAGES[code];
  const h = hue(L);

  const bg = pastel(h, active ? 0.76 : 0.84);
  const border = pastel(h, 0.54);
  const nameColor = fg(L.p1, bg, 5);
  const softColor = fg(NEUTRAL.grey, bg, 4.6);

  const { storyList } = getLanguageData(code);
  const done = storyList.filter((s) => s.status === 'Leído').length;
  const total = storyList.length;
  const levelInfo = LEVELS.find((lv) => lv.code === currentLevel) || LEVELS[0];

  const stripeHeight = active ? 9 : 6;

  return (
    <button
      onClick={() => onSelect(code)}
      style={{
        position: 'relative',
        flex: active ? 1.5 : 1,
        transition: 'flex .22s',
        textAlign: 'left',
        background: bg,
        borderRadius: 5,
        overflow: 'hidden',
        boxShadow: active ? `0 3px 0 ${L.p1}, ${shadow.base}` : shadow.sm,
        minHeight: active ? 148 : 128,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ display: 'flex', height: stripeHeight, flexShrink: 0 }}>
        <div style={{ flex: 1, background: L.p1 }} />
        <div style={{ flex: 1, background: L.p2 }} />
        <div
          style={{
            flex: 1,
            background: L.p3,
            boxShadow: L.p3 === '#ffffff' ? `inset 0 -1px 0 ${border}` : 'none'
          }}
        />
      </div>

      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: -14,
          top: 6,
          width: 96,
          height: 96,
          color: L.p1,
          opacity: active ? 0.2 : 0.13,
          pointerEvents: 'none'
        }}
      >
        <Motif name={L.motif} />
      </div>

      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <div>
          <div style={{ fontFamily: font.display, fontSize: active ? 26 : 20, fontWeight: 600, color: nameColor }}>
            {L.native}
          </div>
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              fontWeight: 700,
              color: softColor
            }}
          >
            {L.name}
          </div>
        </div>

        {active ? (
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div
              style={{
                height: 5,
                borderRadius: 3,
                background: 'rgba(25,23,19,.1)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${levelInfo.pct}%`,
                  background: `linear-gradient(90deg, ${L.p1}, ${L.p2})`
                }}
              />
            </div>
            <span style={{ fontFamily: font.mono, fontSize: 10.5, color: softColor }}>
              {currentLevel} · {done}/{total} relatos leídos
            </span>
          </div>
        ) : (
          <span style={{ marginTop: 'auto', fontFamily: font.mono, fontSize: 10.5, color: softColor }}>
            {L.stories} relatos
          </span>
        )}
      </div>
    </button>
  );
}
