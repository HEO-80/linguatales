'use client';

import Link from 'next/link';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { LEVELS } from '@/theme/languages';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { has, storiesOf } from '@/data/stories';
import { levelProgress, useProgressSnapshot } from '@/state/progress';

/**
 * src/components/Rail/LevelPopover.jsx
 * Selector de nivel del idioma activo. Instanciado localmente por
 * LanguageBar y Rail (cada uno con su propio useState de apertura) — no
 * comparten un estado global de popover.
 */
export default function LevelPopover({ langCode, activeLevel, onClose }) {
  const { surface, text, font, shadow } = useTheme();
  const snapshot = useProgressSnapshot();

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
          top: 150,
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
        {LEVELS.map((lv) => {
          const available = has(langCode, lv.code);
          const active = lv.code === activeLevel;
          const rowStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '9px 10px',
            borderRadius: 5,
            textDecoration: 'none',
            background: active ? pastel(lv.color, 0.78) : 'transparent',
            opacity: available ? 1 : 0.52,
            cursor: available ? 'pointer' : 'not-allowed'
          };

          const content = (
            <>
              <span style={{ width: 9, height: 9, borderRadius: '50%', background: lv.color, flexShrink: 0 }} />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: font.body, fontSize: 13.5, fontWeight: 600, color: text.ink }}>
                  {lv.title}
                </span>
                <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onCream }}>
                  {available ? `${storiesOf(langCode, lv.code).length} relatos` : 'Pronto'}
                </span>
              </div>
              {available && (
                <div style={{ width: 44, height: 4, borderRadius: 2, background: 'rgba(25,23,19,.1)', overflow: 'hidden' }}>
                  <div style={{ width: `${levelProgress(langCode, lv.code, snapshot)}%`, height: '100%', background: lv.color }} />
                </div>
              )}
            </>
          );

          return available ? (
            <Link
              key={lv.code}
              href={`/${toLangSlug(langCode)}/${toLevelSlug(lv.code)}`}
              onClick={onClose}
              style={rowStyle}
            >
              {content}
            </Link>
          ) : (
            <div key={lv.code} style={rowStyle}>
              {content}
            </div>
          );
        })}
      </div>
    </>
  );
}
