'use client';

import { useState, useRef, useEffect } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { speakSentence, cancelSpeech } from '@/lib/azure/tts';
import RoleLegend from './RoleLegend';
import WordToken from './WordToken';
import WordCard from './WordCard';

const paraText = (p) => p.t.map((t) => t[TOKEN.TEXT]).join(' ');

/**
 * src/components/StoryReader/StoryReader.jsx
 * Cuerpo del relato: cabecera con controles de lectura, párrafos con
 * tokens interactivos, y la ficha de la palabra seleccionada.
 * La pronunciación NO vive aquí — es el Juego 05 (SpeakSentenceGame).
 */
export default function StoryReader() {
  const { surface, accent, text, font, shadow } = useTheme();
  const { lang, level, story, showTr, setShowTr } = useReader();

  const [speaking, setSpeaking] = useState(false);
  const readingRef = useRef(false);

  useEffect(() => {
    return () => {
      readingRef.current = false;
      cancelSpeech();
    };
  }, [story.num]);

  const handleReadAloud = async () => {
    if (speaking) {
      readingRef.current = false;
      cancelSpeech();
      setSpeaking(false);
      return;
    }

    readingRef.current = true;
    setSpeaking(true);
    for (const para of story.paras) {
      if (!readingRef.current) break;
      try {
        await speakSentence(paraText(para), { lang });
      } catch {
        break;
      }
    }
    readingRef.current = false;
    setSpeaking(false);
  };

  return (
    <section id="reader" style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        style={{
          background: surface.tint,
          borderTop: `4px solid ${accent.primary}`,
          borderRadius: 6,
          boxShadow: shadow.base,
          padding: '24px 26px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
            Relato {story.num} · {level}
          </span>
          <h2 style={{ fontFamily: font.display, fontSize: 38, fontWeight: 600, color: text.ink, margin: 0 }}>
            {story.title}
          </h2>
          <span style={{ fontFamily: font.body, fontSize: 13.5, color: text.onTint }}>{story.meta}</span>

          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <button
              onClick={() => setShowTr((v) => !v)}
              style={{
                background: surface.cream,
                border: `1px solid ${surface.border}`,
                color: text.ink,
                fontFamily: font.body,
                fontSize: 13.5,
                fontWeight: 600,
                borderRadius: 5,
                padding: '10px 16px',
                cursor: 'pointer'
              }}
            >
              ◍ Ver traducción
            </button>
            <button
              onClick={handleReadAloud}
              style={{
                background: surface.solid,
                color: '#fffdf7',
                fontFamily: font.body,
                fontSize: 13.5,
                fontWeight: 600,
                borderRadius: 5,
                padding: '10px 16px',
                boxShadow: shadow.sm,
                cursor: 'pointer'
              }}
            >
              {speaking ? '■ Detener' : '▶ Escuchar'}
            </button>
          </div>
        </div>

        <RoleLegend />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {story.paras.map((para, paraIndex) => (
            <div key={paraIndex} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, alignItems: 'baseline' }}>
                {para.t.map((token, tokenIndex) => (
                  <WordToken key={tokenIndex} token={token} paraIndex={paraIndex} tokenIndex={tokenIndex} />
                ))}
              </div>
              {showTr && (
                <p
                  style={{
                    fontFamily: font.body,
                    fontSize: 13.5,
                    fontStyle: 'italic',
                    color: text.onTint,
                    borderLeft: `3px solid ${pastel(accent.secondary, 0.55)}`,
                    margin: 0,
                    padding: '2px 0 2px 10px'
                  }}
                >
                  {para.tr}
                </p>
              )}
            </div>
          ))}
        </div>

        <WordCard />
      </div>
    </section>
  );
}
