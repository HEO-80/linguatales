'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { LANGUAGES, LEVELS } from '@/theme/languages';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import { storiesOf } from '@/data/stories';
import { levelProgress, storyExerciseProgress, useProgressSnapshot } from '@/state/progress';
import Motif from '@/components/LanguageShelf/motifs';
import FlagMark from './FlagMark';
import LevelPopover from '@/components/Rail/LevelPopover';

/**
 * src/components/LanguageBar/LanguageBar.jsx
 * Franja bajo AppHeader: identidad del idioma activo, chip de nivel
 * pulsable, progreso real (levelProgress) y contexto del relato actual.
 */
export default function LanguageBar() {
  const { surface, accent, text, font } = useTheme();
  const langCode = useLangCode();
  const levelCode = useLevelCode() ?? DEFAULT_LEVEL;
  const params = useParams();
  const num = params?.num;
  const L = LANGUAGES[langCode];
  const lv = LEVELS.find((l) => l.code === levelCode);
  const [levelOpen, setLevelOpen] = useState(false);

  const stories = storiesOf(langCode, levelCode);
  const snapshot = useProgressSnapshot();
  const pct = levelProgress(langCode, levelCode, snapshot);

  const activeStory = num ? stories.find((s) => s.num === num) : null;
  const exercise = activeStory ? storyExerciseProgress(langCode, levelCode, activeStory, snapshot) : null;
  const exercisePct = exercise && exercise.total > 0 ? Math.round((exercise.done / exercise.total) * 100) : 0;

  return (
    <div
      style={{
        background: surface.cream,
        borderBottom: `1px solid ${surface.border}`
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          padding: '10px 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}
      >
        <FlagMark lang={L} />

        <span style={{ width: 30, height: 30, color: L.p1, opacity: 0.85, flexShrink: 0 }}>
          <Motif name={L.motif} />
        </span>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontFamily: font.display, fontSize: 19, fontWeight: 600, color: text.ink }}>
            {L.native}
          </span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              color: text.onTint
            }}
          >
            Estás aprendiendo
          </span>
        </div>

        <div style={{ width: 1, height: 32, background: surface.border, flexShrink: 0 }} />

        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setLevelOpen((o) => !o)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: pastel(lv.color, 0.82),
              border: 'none',
              borderRadius: 4,
              padding: '6px 12px',
              cursor: 'pointer'
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: lv.color, flexShrink: 0 }} />
            <span style={{ fontFamily: font.body, fontSize: 13, fontWeight: 700, color: text.ink }}>{lv.title}</span>
            <span style={{ fontFamily: font.mono, fontSize: 10, color: text.onTint }}>▾</span>
          </button>
          {levelOpen && <LevelPopover onClose={() => setLevelOpen(false)} langCode={langCode} activeLevel={levelCode} />}
        </div>

        {exercise ? (
          <div
            style={{
              width: 120,
              height: 6,
              borderRadius: 3,
              background: 'rgba(25,23,19,.08)',
              overflow: 'hidden',
              flexShrink: 0
            }}
          >
            <div
              style={{
                width: `${exercisePct}%`,
                height: '100%',
                background: accent.progress,
                transition: 'width .3s'
              }}
            />
          </div>
        ) : (
          <div style={{ width: 84, height: 5, borderRadius: 3, background: 'rgba(25,23,19,.08)', overflow: 'hidden', flexShrink: 0 }}>
            <div style={{ width: `${pct}%`, height: '100%', background: accent.progress }} />
          </div>
        )}

        <div style={{ flex: 1 }} />

        <span style={{ fontFamily: font.mono, fontSize: 11.5, color: text.onTint }}>
          {exercise
            ? `${exercise.done} de ${exercise.total} ejercicios`
            : `${stories.length} relatos en ${levelCode}`}
        </span>
      </div>
    </div>
  );
}
