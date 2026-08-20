'use client';

import Link from 'next/link';
import { useTheme } from '@/theme/ThemeContext';
import { useLangCode, useLevelCode } from '@/lib/routes/useRouteCodes';
import { toLangSlug, toLevelSlug, isPilotedLangLevel } from '@/lib/routes/langLevel';
import { getLevelContent } from '@/data';

/**
 * src/components/LevelOverview/FeaturedStoryCard.jsx
 * Historia destacada del nivel activo. Solo se muestra para combos
 * idioma/nivel ya pilotados (mismo criterio que StoryList para decidir si
 * enseña ComingSoonPanel), porque getLevelContent devuelve para el resto
 * un featuredStory de relleno legado que no debe promocionarse.
 */
export default function FeaturedStoryCard() {
  const { surface, accent, text, font, shadow } = useTheme();
  const langCode = useLangCode();
  const level = useLevelCode();

  if (!level || !isPilotedLangLevel(langCode, level)) return null;

  const { featuredStory } = getLevelContent(langCode, level);
  const langSlug = toLangSlug(langCode);
  const levelSlug = toLevelSlug(level);
  const teaser = featuredStory.sentences?.[0]?.text;

  return (
    <div
      style={{
        background: surface.tint,
        borderTop: `4px solid ${accent.secondary}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '20px 22px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <span
        style={{
          fontFamily: font.mono,
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: '1.6px',
          textTransform: 'uppercase',
          color: text.primaryOnTint
        }}
      >
        Historia destacada
      </span>
      <h3 style={{ fontFamily: font.display, fontSize: 24, fontWeight: 600, color: text.ink, margin: 0 }}>
        {featuredStory.title}
      </h3>
      <span style={{ fontFamily: font.body, fontSize: 13, color: text.onTint }}>
        {featuredStory.subtitle} · {featuredStory.duration}
      </span>
      {teaser && (
        <p style={{ fontFamily: font.display, fontSize: 15, fontStyle: 'italic', color: text.onTint, margin: 0 }}>
          {teaser}
        </p>
      )}
      <Link
        href={`/${langSlug}/${levelSlug}/story/${featuredStory.id}`}
        style={{
          alignSelf: 'flex-start',
          marginTop: 4,
          background: surface.solid,
          color: '#fffdf7',
          fontFamily: font.body,
          fontSize: 13,
          fontWeight: 600,
          borderRadius: 5,
          padding: '8px 14px',
          boxShadow: shadow.sm,
          textDecoration: 'none'
        }}
      >
        Leer relato →
      </Link>
    </div>
  );
}
