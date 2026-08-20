'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { pastel } from '@/theme/color';
import { LEVELS } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { getLanguageData } from '@/data';
import { subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot } from '@/lib/storage/progressStore';
import LevelBadge from './LevelBadge';

/**
 * src/components/Sidebar/LevelRail.jsx
 * Reimplementación vertical de la lógica de datos de LevelLadder.jsx
 * (borrado): % real de relatos leídos por nivel, idioma activo.
 */
export default function LevelRail({ langCode, activeLevel, onNavigate }) {
  const { font } = useTheme();
  const langSlug = toLangSlug(langCode);
  const { storyList } = getLanguageData(langCode);
  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {LEVELS.map((lv) => {
        const active = lv.code === activeLevel;
        const storiesAtLevel = storyList.filter((s) => s.level === lv.code);
        const doneAtLevel = storiesAtLevel.filter((s) => progress.storyProgress[s.id]?.status === 'leido').length;
        const pct = storiesAtLevel.length > 0 ? Math.round((doneAtLevel / storiesAtLevel.length) * 100) : 0;

        return (
          <Link
            key={lv.code}
            href={`/${langSlug}/${toLevelSlug(lv.code)}`}
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
              background: active ? pastel(lv.color, 0.72) : 'transparent',
              textDecoration: 'none'
            }}
          >
            <LevelBadge levelCode={lv.code} size={26} />
            <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0 }}>
              <span style={{ fontFamily: font.body, fontSize: 13, fontWeight: active ? 700 : 500, whiteSpace: 'nowrap' }}>
                {lv.title}
              </span>
              <span style={{ fontFamily: font.mono, fontSize: 10.5 }}>{pct}%</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
