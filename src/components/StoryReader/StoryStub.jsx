'use client';

import { useState } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';

/**
 * src/components/StoryReader/StoryStub.jsx
 * Cabecera-muñón: cuando view !== 'story' (un juego o un bloque de frases
 * está abierto), esta barra clicable ocupa el sitio del relato — es la
 * única forma de volver sin usar el nav (§4 linguatales-frases-spec.md).
 */
export default function StoryStub() {
  const { accent, text, font, shadow } = useTheme();
  const { story, level, goToStory } = useReader();
  const [hover, setHover] = useState(false);

  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        role="button"
        tabIndex={0}
        onClick={goToStory}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && goToStory()}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          background: hover ? pastel(accent.secondary, 0.88) : '#fffdf7',
          borderLeft: `5px solid ${accent.secondary}`,
          borderRadius: 6,
          boxShadow: shadow.sm,
          padding: '16px 22px',
          cursor: 'pointer',
          transition: 'background .12s'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              color: text.onCream
            }}
          >
            Relato {story.num} · {level}
          </span>
          <span style={{ fontFamily: font.display, fontSize: 26, fontWeight: 600, color: text.ink }}>
            {story.title}
          </span>
          <span style={{ fontFamily: font.mono, fontSize: 10, color: text.onCream }}>{story.meta}</span>
        </div>

        <span
          style={{
            flexShrink: 0,
            fontFamily: font.mono,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.4px',
            color: text.ink,
            background: pastel(accent.secondary, 0.78),
            borderRadius: 4,
            padding: '7px 14px'
          }}
        >
          ▸ Ver el relato
        </span>
      </div>
    </section>
  );
}
