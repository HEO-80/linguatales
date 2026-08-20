'use client';

import Link from 'next/link';
import { pastel, hue } from '@/theme/color';
import { LANGUAGES, LANGUAGE_ORDER } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import Motif from '@/components/LanguageShelf/motifs';
import LanguageBadge from './LanguageBadge';

/**
 * src/components/Sidebar/LanguageRail.jsx
 * Columna vertical de 6 idiomas. Conserva el nivel actual al cambiar de
 * idioma (misma URL /[lang]/[level]).
 */
export default function LanguageRail({ activeCode, currentLevel, onNavigate }) {
  const { font } = useTheme();
  const levelSlug = toLevelSlug(currentLevel);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {LANGUAGE_ORDER.map((code) => {
        const L = LANGUAGES[code];
        const active = code === activeCode;

        return (
          <Link
            key={code}
            href={`/${toLangSlug(code)}/${levelSlug}`}
            onClick={(e) => {
              e.stopPropagation();
              onNavigate?.();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '6px 8px',
              borderRadius: 5,
              background: active ? pastel(hue(L), 0.7) : 'transparent',
              textDecoration: 'none'
            }}
          >
            <LanguageBadge code={code} size={26} />
            <span
              aria-hidden
              style={{ width: 16, height: 16, color: L.p1, opacity: 0.35, flexShrink: 0 }}
            >
              <Motif name={L.motif} />
            </span>
            <span style={{ fontFamily: font.body, fontSize: 13.5, fontWeight: active ? 700 : 500, whiteSpace: 'nowrap' }}>
              {L.native}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
