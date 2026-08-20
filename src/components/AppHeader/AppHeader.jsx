'use client';

import { useState } from 'react';
import { useTheme } from '@/theme/ThemeContext';

const SECTIONS = [
  { key: 'stories', label: 'Historias', anchor: '#stories' },
  { key: 'grammar', label: 'Gramática', anchor: '#grammar' },
  { key: 'idiom', label: null /* dinámico: lang.navIdiom */, anchor: '#idiom' },
  { key: 'games', label: 'Juegos', anchor: '#games' }
];

export default function AppHeader() {
  const theme = useTheme();
  const { lang, surface, accent, text, font, shadow } = theme;
  const [active, setActive] = useState('stories');

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: surface.tint,
        borderBottom: `1px solid ${surface.border}`,
        boxShadow: '0 2px 12px rgba(25,23,19,.06)'
      }}
    >
      <div style={{ height: 4, background: accent.flagRule }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '14px 32px',
          maxWidth: 1440,
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: font.display, fontSize: 29, fontWeight: 600, color: text.ink }}>
            LinguaTales
          </span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              color: text.onTint
            }}
          >
            Historias · Pronunciación
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {SECTIONS.map((s) => {
            const label = s.key === 'idiom' ? lang.navIdiom : s.label;
            const isActive = active === s.key;
            return (
              <a
                key={s.key}
                href={s.anchor}
                onClick={() => setActive(s.key)}
                style={{
                  fontFamily: font.body,
                  fontSize: 13.5,
                  color: isActive ? text.ink : text.onTint,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  paddingBottom: 4,
                  borderBottom: isActive ? `2px solid ${accent.secondary}` : '2px solid transparent'
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 12px',
              borderRadius: 999,
              background: surface.cream,
              border: `1px solid ${surface.border}`,
              boxShadow: shadow.sm
            }}
          >
            <span style={{ fontFamily: font.mono, fontSize: 13, fontWeight: 700, color: text.primaryOnTint }}>
              🔥 12
            </span>
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 9.5,
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
                color: text.onCream
              }}
            >
              días
            </span>
          </div>

          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              background: surface.solid,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: font.display,
              fontSize: 14,
              fontWeight: 600,
              color: '#fffdf7'
            }}
          >
            MV
          </div>
        </div>
      </div>
    </header>
  );
}
