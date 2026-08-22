'use client';

import Link from 'next/link';
import { useTheme } from '@/theme/ThemeContext';
import { LANGUAGES, LANGUAGE_ORDER, LEVELS } from '@/theme/languages';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { languageReady, resolveLevel } from '@/data/stories';
import FlagMark from '@/components/LanguageBar/FlagMark';
import Popover from '@/components/Popover/Popover';

/**
 * src/components/Rail/LanguagePopover.jsx
 * Selector de idioma. Conserva el nivel actual si el idioma destino lo
 * tiene, y si no, cae al primero disponible (resolveLevel).
 */
export default function LanguagePopover({ levelCode, anchorRef, onClose }) {
  const { text, font } = useTheme();

  return (
    <Popover anchorRef={anchorRef} onClose={onClose} fallbackTop={96}>
      {LANGUAGE_ORDER.map((code) => {
        const L = LANGUAGES[code];
        const ready = languageReady(code, LEVELS);
        const rowStyle = {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minWidth: 0,
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
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: text.onCream,
                  flexShrink: 0
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
    </Popover>
  );
}
