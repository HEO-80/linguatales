'use client';

import Link from 'next/link';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { LEVELS } from '@/theme/languages';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { has, storiesOf } from '@/data/stories';
import { levelProgress, useProgressSnapshot } from '@/state/progress';
import Popover from '@/components/Popover/Popover';

/**
 * src/components/Rail/LevelPopover.jsx
 * Selector de nivel del idioma activo. Instanciado por LanguageBar y Rail
 * (cada uno con su propio useState de apertura y su propio anchorRef) — no
 * comparten un estado global de popover.
 *
 * Todas las filas navegan, tenga relatos o no (§ desbloqueo de niveles sin
 * historia): un nivel sin relatos todavía cae en LevelPreviewPage, que
 * muestra lo que ya existe para ese nivel (frases, conectores) en vez de
 * dejarlo completamente inaccesible.
 */
export default function LevelPopover({ langCode, activeLevel, anchorRef, onClose }) {
  const { text, font } = useTheme();
  const snapshot = useProgressSnapshot();

  return (
    <Popover anchorRef={anchorRef} onClose={onClose} fallbackTop={150}>
      {LEVELS.map((lv) => {
        const available = has(langCode, lv.code);
        const active = lv.code === activeLevel;
        const rowStyle = {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          minWidth: 0,
          padding: '9px 10px',
          borderRadius: 5,
          textDecoration: 'none',
          background: active ? pastel(lv.color, 0.78) : 'transparent',
          opacity: available ? 1 : 0.72,
          cursor: 'pointer'
        };

        const content = (
          <>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: lv.color, flexShrink: 0 }} />
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.6px',
                    color: text.ink
                  }}
                >
                  {lv.code}
                </span>
                <span style={{ fontFamily: font.body, fontSize: 13.5, fontWeight: 600, color: text.ink }}>
                  {lv.title}
                </span>
              </span>
              {available ? (
                <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onCream }}>
                  {storiesOf(langCode, lv.code).length} relatos
                </span>
              ) : (
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: text.onCream
                  }}
                >
                  SIN RELATOS AÚN
                </span>
              )}
            </div>
            {available && (
              <div style={{ width: 46, height: 4, borderRadius: 2, background: 'rgba(25,23,19,.1)', overflow: 'hidden', flexShrink: 0 }}>
                <div style={{ width: `${levelProgress(langCode, lv.code, snapshot)}%`, height: '100%', background: lv.color }} />
              </div>
            )}
          </>
        );

        return (
          <Link
            key={lv.code}
            href={`/${toLangSlug(langCode)}/${toLevelSlug(lv.code)}`}
            onClick={onClose}
            style={rowStyle}
          >
            {content}
          </Link>
        );
      })}
    </Popover>
  );
}
