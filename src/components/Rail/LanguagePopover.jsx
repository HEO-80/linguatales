'use client';

import Link from 'next/link';
import { useTheme } from '@/theme/ThemeContext';
import { LANGUAGES, LANGUAGE_ORDER, LEVELS } from '@/theme/languages';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { languageReady, resolveLevel } from '@/data/stories';
import FlagMark from '@/components/LanguageBar/FlagMark';

/**
 * src/components/Rail/LanguagePopover.jsx
 * Selector de idioma. Conserva el nivel actual si el idioma destino lo
 * tiene, y si no, cae al primero disponible (resolveLevel).
 */
export default function LanguagePopover({ levelCode, onClose }) {
  const { surface, text, font, shadow } = useTheme();

  return (
    <>
      <div
        onClick={onClose}
        style={{ position: 'fixed', inset: 0, background: 'rgba(25,23,19,.28)', zIndex: 95 }}
      />
      <div
        style={{
          position: 'fixed',
          left: 88,
          top: 96,
          width: 318,
          zIndex: 96,
          background: surface.cream,
          borderRadius: 6,
          boxShadow: shadow.dark,
          padding: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        {LANGUAGE_ORDER.map((code) => {
          const L = LANGUAGES[code];
          const ready = languageReady(code, LEVELS);
          const rowStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '9px 10px',
            borderRadius: 5,
            textDecoration: 'none',
            opacity: ready ? 1 : 0.52,
            cursor: ready ? 'pointer' : 'not-allowed'
          };

          const content = (
            <>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: L.p1, flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: font.body, fontSize: 13.5, fontWeight: 600, color: text.ink }}>
                  {L.native}
                </span>
                {L.hint && (
                  <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onCream }}>{L.hint}</span>
                )}
              </div>
              {ready ? (
                <FlagMark lang={L} />
              ) : (
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: text.onCream
                  }}
                >
                  PRONTO
                </span>
              )}
            </>
          );

          return ready ? (
            <Link
              key={code}
              href={`/${toLangSlug(code)}/${toLevelSlug(resolveLevel(code, levelCode, LEVELS))}`}
              onClick={onClose}
              style={rowStyle}
            >
              {content}
            </Link>
          ) : (
            <div key={code} style={rowStyle}>
              {content}
            </div>
          );
        })}
      </div>
    </>
  );
}
