'use client';

import { useState } from 'react';
import { whiteReadable, NEUTRAL } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useAppState } from '@/state/AppStateContext';
import { getLanguageData } from '@/data';
import SentencePair from './SentencePair';
import PronunciationBar from './PronunciationBar';

export default function StoryReader() {
  const theme = useTheme();
  const { surface, accent, text, font, shadow } = theme;
  const { lang, sentenceIndex, setSentenceIndex } = useAppState();
  const { story } = getLanguageData(lang);
  const [showTranslation, setShowTranslation] = useState(true);

  const onSolid = whiteReadable(surface.solid) ? '#ffffff' : NEUTRAL.ink;

  const handleReadAloud = () => {
    setSentenceIndex((i) => (i + 1) % story.sentences.length);
  };

  return (
    <section
      id="reader"
      style={{
        maxWidth: 1440,
        margin: '24px auto 0',
        padding: '0 32px'
      }}
    >
      <div
        style={{
          background: `linear-gradient(180deg, ${surface.tintDeep}, ${surface.tint})`,
          border: `1px solid ${surface.border}`,
          borderRadius: 5,
          boxShadow: shadow.base,
          padding: '24px 26px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: surface.solid,
                color: onSolid,
                fontFamily: font.mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1.4px',
                borderRadius: 4,
                padding: '4px 8px'
              }}
            >
              {story.level}
            </span>
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 10,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: text.onTint
              }}
            >
              {story.duration} · {story.grammarNote}
            </span>
          </div>

          <h2 style={{ fontFamily: font.display, fontSize: 42, fontWeight: 600, color: text.ink, margin: 0 }}>
            {story.title}
          </h2>

          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={handleReadAloud}
              style={{
                background: surface.solid,
                color: onSolid,
                fontFamily: font.body,
                fontSize: 13.5,
                fontWeight: 600,
                borderRadius: 5,
                padding: '10px 16px',
                boxShadow: shadow.sm
              }}
            >
              ▶ Leer en voz alta
            </button>
            <button
              onClick={() => setShowTranslation((v) => !v)}
              style={{
                background: surface.cream,
                color: text.ink,
                border: `1px solid ${surface.border}`,
                fontFamily: font.body,
                fontSize: 13.5,
                fontWeight: 600,
                borderRadius: 5,
                padding: '10px 16px'
              }}
            >
              ◍ Traducción
            </button>
          </div>
        </div>

        <div
          style={{
            background: surface.cream,
            borderRadius: 5,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: showTranslation ? '1fr 1fr' : '1fr'
          }}
        >
          {story.sentences.map((s, i) =>
            showTranslation ? (
              <SentencePair
                key={i}
                original={s.text}
                translation={s.es}
                active={i === sentenceIndex}
                read={i < sentenceIndex}
                onClick={() => setSentenceIndex(i)}
              />
            ) : (
              <div
                key={i}
                onClick={() => setSentenceIndex(i)}
                style={{
                  padding: '11px 18px',
                  background: i === sentenceIndex ? surface.tintDeep : 'transparent',
                  borderLeft: i === sentenceIndex ? `4px solid ${accent.secondary}` : '4px solid transparent',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 12,
                    width: 12,
                    color: i === sentenceIndex ? text.secondaryOnDeep : text.secondaryOnCream
                  }}
                >
                  {i === sentenceIndex ? '▶' : i < sentenceIndex ? '·' : ''}
                </span>
                <span style={{ fontFamily: font.display, fontSize: 17.5, color: text.ink }}>{s.text}</span>
              </div>
            )
          )}
        </div>

        <PronunciationBar />
      </div>
    </section>
  );
}
