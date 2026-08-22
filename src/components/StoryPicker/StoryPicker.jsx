'use client';

import { useState } from 'react';
import Link from 'next/link';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { LANGUAGES, LEVELS } from '@/theme/languages';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { storiesOf } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { getStoryProgress, storyComplete, useProgressSnapshot } from '@/state/progress';
import { buildWordBank } from '@/components/Games/SelectWordGame/buildWordBank';

function statusColor(status, accent) {
  if (status === 'Leído') return '#0e9f6e';
  if (status === 'En curso') return accent.secondary;
  return '#8d8674';
}

function StoryRow({ s, isActive, status, accent, surface, text, font, href, onClick }) {
  const [hover, setHover] = useState(false);
  const color = statusColor(status, accent);
  const badgeBg = pastel(color, 0.78);

  let background = 'rgba(255,255,255,.5)';
  let borderLeft = '4px solid transparent';
  let boxShadow = 'none';
  if (isActive) {
    background = '#fffdf7';
    borderLeft = `4px solid ${accent.primary}`;
    boxShadow = '0 2px 8px rgba(25,23,19,.1)';
  }
  if (hover) background = '#fffdf7';

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        padding: '13px 15px',
        borderRadius: 5,
        textDecoration: 'none',
        background,
        border: isActive ? `1px solid ${pastel(accent.primary, 0.42)}` : '1px solid transparent',
        borderLeft,
        boxShadow,
        transition: 'background .12s'
      }}
    >
      <span style={{ fontFamily: font.mono, fontSize: 11, color: text.onCream, flexShrink: 0 }}>{s.num}</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{ fontFamily: font.display, fontSize: 18, fontWeight: 600, color: text.ink }}>{s.title}</span>
        <span style={{ fontFamily: font.body, fontSize: 11.5, color: text.onCream }}>{s.sub}</span>
      </div>
      <span
        style={{
          flexShrink: 0,
          fontFamily: font.mono,
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.6px',
          textTransform: 'uppercase',
          color: fg(color, badgeBg, 4.6),
          background: badgeBg,
          border: `1px solid ${pastel(color, 0.5)}`,
          borderRadius: 3,
          padding: '2px 6px'
        }}
      >
        {status}
      </span>
    </Link>
  );
}

/**
 * src/components/StoryPicker/StoryPicker.jsx
 * Fila de migas con el botón "Cambiar relato" — abre un CAJÓN en el flujo
 * del documento (no un popover) con todos los relatos del idioma/nivel
 * activo, entre las migas y la tarjeta del relato. Elegir otro navega; el
 * reseteo del estado en curso de los 5 juegos, la palabra seleccionada y el
 * panel de gramática ya lo garantiza el remount de la Page (ReaderContext)
 * — el registro de aciertos vive fuera de ese árbol, indexado por
 * IDIOMA/NIVEL/RELATO, así que nunca se toca al cambiar de historia.
 */
export default function StoryPicker() {
  const { surface, accent, text, font, shadow } = useTheme();
  const { lang, level, story } = useReader();
  const [open, setOpen] = useState(false);
  const snapshot = useProgressSnapshot();

  const L = LANGUAGES[lang];
  const lv = LEVELS.find((l) => l.code === level);
  const stories = storiesOf(lang, level);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: text.onTint,
            flexShrink: 0
          }}
        >
          {L.name.toUpperCase()} · {level} · {lv.title.toUpperCase()}
        </span>

        <div
          style={{
            flex: 1,
            height: 2,
            minWidth: 40,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${accent.secondary}66, rgba(25,23,19,.08))`
          }}
        />

        <button
          id="story-picker-trigger"
          onClick={() => setOpen((o) => !o)}
          style={{
            background: open ? surface.solid : surface.cream,
            border: open ? 'none' : `1px solid ${surface.border}`,
            color: open ? '#fffdf7' : text.ink,
            fontFamily: font.body,
            fontSize: 13,
            fontWeight: 600,
            borderRadius: 5,
            padding: '8px 14px',
            cursor: 'pointer'
          }}
        >
          {open ? '✕ Cerrar relatos' : `◫ Cambiar relato (${stories.length})`}
        </button>
      </div>

      {open && (
        <div
          style={{
            background: surface.tint,
            border: `1px solid ${surface.border}`,
            borderTop: `4px solid ${accent.primary}`,
            borderRadius: 5,
            boxShadow: shadow.base,
            padding: '18px 20px 20px',
            marginTop: 14,
            marginBottom: 18,
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}
        >
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
            Relatos de {lv.title.toUpperCase()} · {level}
          </span>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 }}>
            {stories.map((s) => {
              const sp = getStoryProgress(lang, level, s.num, snapshot);
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
                <StoryRow
                  key={s.num}
                  s={s}
                  isActive={isActive}
                  status={status}
                  accent={accent}
                  surface={surface}
                  text={text}
                  font={font}
                  href={`/${toLangSlug(lang)}/${toLevelSlug(level)}/story/${s.num}`}
                  onClick={() => setOpen(false)}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
