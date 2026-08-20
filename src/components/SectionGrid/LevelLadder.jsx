'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { pastel, fg } from '@/theme/color';
import { LEVELS } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { useLangCode, useLevelCode } from '@/lib/routes/useRouteCodes';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { getLanguageData } from '@/data';
import { subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot } from '@/lib/storage/progressStore';

export default function LevelLadder() {
  const { font } = useTheme();
  const langCode = useLangCode();
  const level = useLevelCode();
  const langSlug = toLangSlug(langCode);
  const { storyList } = getLanguageData(langCode);
  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 7 }}>
      {LEVELS.map((lv) => {
        const active = lv.code === level;
        const bg = pastel(lv.color, active ? 0.74 : 0.86);
        const onBg = fg(lv.color, bg, 6.5);

        // % real de relatos leídos en ESTE nivel (idioma activo), no el
        // valor de relleno de theme/languages.js — sin sesión da 0%.
        const storiesAtLevel = storyList.filter((s) => s.level === lv.code);
        const doneAtLevel = storiesAtLevel.filter((s) => progress.storyProgress[s.id]?.status === 'leido').length;
        const pct = storiesAtLevel.length > 0 ? Math.round((doneAtLevel / storiesAtLevel.length) * 100) : 0;

        return (
          <Link
            key={lv.code}
            href={`/${langSlug}/${toLevelSlug(lv.code)}`}
            title={lv.title}
            style={{
              position: 'relative',
              width: 40,
              height: lv.height,
              background: bg,
              borderBottom: `4px solid ${lv.color}`,
              borderRadius: '4px 4px 0 0',
              overflow: 'hidden',
              boxShadow: active ? `0 -2px 14px ${lv.color}3d, 0 1px 2px rgba(25,23,19,.05)` : 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '6px 0 8px',
              textDecoration: 'none'
            }}
          >
            <span
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                height: `${pct}%`,
                background: lv.color,
                opacity: active ? 0.22 : 0.16
              }}
            />
            <span style={{ position: 'relative', fontFamily: font.mono, fontSize: 9.5, fontWeight: 700, color: onBg }}>
              {pct}%
            </span>
            <span style={{ position: 'relative', fontFamily: font.display, fontSize: 13, fontWeight: 600, color: onBg }}>
              {lv.code}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
