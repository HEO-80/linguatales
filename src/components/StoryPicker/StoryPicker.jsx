'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { LANGUAGES, LEVELS } from '@/theme/languages';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { storiesOf } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { getStoryProgress, storyComplete } from '@/state/progress';
import { buildWordBank } from '@/components/Games/SelectWordGame/buildWordBank';

/**
 * src/components/StoryPicker/StoryPicker.jsx
 * Fila de migas con el botón "Cambiar relato" — abre un cajón con todos los
 * relatos del idioma/nivel activo. Elegir otro navega; el reseteo del
 * estado del lector ya lo garantiza el remount de la Page (ReaderContext).
 */
export default function StoryPicker() {
  const { surface, accent, text, font, shadow } = useTheme();
  const { lang, level, story } = useReader();
  const [open, setOpen] = useState(false);

  const L = LANGUAGES[lang];
  const lv = LEVELS.find((l) => l.code === level);
  const stories = storiesOf(lang, level);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: text.onTint
          }}
        >
          {L.name.toUpperCase()} · {level} · {lv.title.toUpperCase()}
        </span>

        <button
          id="story-picker-trigger"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: surface.cream,
            border: `1px solid ${surface.border}`,
            color: text.ink,
            fontFamily: font.body,
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 5,
            padding: '8px 14px',
            cursor: 'pointer'
          }}
        >
          ◫ Cambiar relato ({stories.length})
        </button>
      </div>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(25,23,19,.28)', zIndex: 95 }}
          />
          <div
            style={{
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: 8,
              width: 620,
              maxWidth: '90vw',
              zIndex: 96,
              background: surface.cream,
              borderRadius: 6,
              boxShadow: shadow.dark,
              padding: 10,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 6,
              maxHeight: '70vh',
              overflowY: 'auto'
            }}
          >
            {stories.map((s) => {
              const sp = getStoryProgress(lang, level, s.num);
              const bank = buildWordBank(s);
              const matchApplicable = s.phrasals.length >= 3;
              const wordApplicable = bank.length >= 4;
              const status = storyComplete(sp, s, { matchApplicable, wordApplicable })
                ? 'Leído'
                : sp.read.seen
                ? 'En curso'
                : 'Nuevo';
              const isActive = s.num === story.num;

              return (
                <Link
                  key={s.num}
                  href={`/${toLangSlug(lang)}/${toLevelSlug(level)}/story/${s.num}`}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    padding: '10px 12px',
                    borderRadius: 5,
                    textDecoration: 'none',
                    background: isActive ? surface.cream : 'transparent',
                    borderLeft: isActive ? `4px solid ${accent.primary}` : '4px solid transparent'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontFamily: font.mono, fontSize: 11, color: text.onCream }}>{s.num}</span>
                    <span style={{ fontFamily: font.display, fontSize: 16, fontWeight: 600, color: text.ink }}>
                      {s.title}
                    </span>
                  </div>
                  <span style={{ fontFamily: font.body, fontSize: 12, color: text.onCream }}>{s.sub}</span>
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      fontFamily: font.mono,
                      fontSize: 9.5,
                      fontWeight: 700,
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      color: text.onCream,
                      background: pastel('#8d8674', 0.85),
                      borderRadius: 4,
                      padding: '2px 6px'
                    }}
                  >
                    {status}
                  </span>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
