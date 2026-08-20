'use client';

import { LANGUAGES, LANGUAGE_ORDER } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { useAppState } from '@/state/AppStateContext';

const TOTAL_STORIES = LANGUAGE_ORDER.reduce((sum, code) => sum + LANGUAGES[code].stories, 0);

export default function AppFooter() {
  const { surface, accent, text, font } = useTheme();
  const { lang } = useAppState();

  return (
    <footer
      style={{
        marginTop: 32,
        background: surface.tintDeep,
        borderTop: `1px solid ${accent.primary}`
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '22px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24
        }}
      >
        <div>
          <div style={{ fontFamily: font.display, fontSize: 20, fontWeight: 600, color: text.ink }}>
            LinguaTales
          </div>
          <div style={{ fontFamily: font.body, fontSize: 12.5, color: text.onTintDeep }}>
            Seis idiomas · {TOTAL_STORIES} relatos · un camino propio por lengua
          </div>
        </div>

        <div style={{ display: 'flex', gap: 6 }}>
          {LANGUAGE_ORDER.map((code) => (
            <span
              key={code}
              title={LANGUAGES[code].name}
              style={{
                width: 20,
                height: 6,
                borderRadius: 3,
                background: LANGUAGES[code].p1,
                opacity: code === lang ? 1 : 0.32
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
