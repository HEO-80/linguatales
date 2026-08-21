'use client';

import { useRef, useState, useEffect } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { speakSentence, cancelSpeech } from '@/lib/azure/tts';
import RoleLegend from './RoleLegend';
import WordToken, { WORD_PADDING_X } from './WordToken';
import WordCard from './WordCard';

const paraText = (p) => p.t.map((t) => t[TOKEN.TEXT]).join(' ');

/* La línea de traducción completa (bajo cada párrafo) arranca en la misma
 * vertical que la primera palabra: botón de escuchar + gap del párrafo.
 * Su propio padding-left, sumado al filete de 3px, iguala el padding
 * horizontal de una palabra — todo derivado, nada escrito a mano aparte. */
const PLAY_BUTTON_SIZE = 28;
const PARA_GAP = 5;
const TRANSLATION_BORDER_WIDTH = 3;
const TRANSLATION_INDENT = PLAY_BUTTON_SIZE + PARA_GAP;
const TRANSLATION_PADDING_LEFT = WORD_PADDING_X - TRANSLATION_BORDER_WIDTH;

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
  const [playing, setPlaying] = useState(null); // índice de la frase que suena, o null
  const sessionRef = useRef(0);

  useEffect(() => {
    return () => {
      sessionRef.current += 1;
      cancelSpeech();
    };
  }, [story.num]);

  const stopAll = () => {
    sessionRef.current += 1;
    cancelSpeech();
    setSpeaking(false);
    setPlaying(null);
  };

  const handleReadAloud = async () => {
    if (speaking) {
      stopAll();
      return;
    }

    stopAll();
    const mySession = sessionRef.current;
    setSpeaking(true);
    for (let i = 0; i < story.paras.length; i++) {
      if (sessionRef.current !== mySession) break;
      setPlaying(i);
      try {
        await speakSentence(paraText(story.paras[i]), { lang });
      } catch {
        break;
      }
    }
    if (sessionRef.current === mySession) {
      setSpeaking(false);
      setPlaying(null);
    }
  };

  const handlePlayPara = async (paraIndex) => {
    if (playing === paraIndex) {
      stopAll();
      return;
    }

    stopAll();
    const mySession = sessionRef.current;
    setPlaying(paraIndex);
    try {
      await speakSentence(paraText(story.paras[paraIndex]), { lang });
    } catch {
      // cancelada o sin soporte: no hay nada más que hacer
    }
    if (sessionRef.current === mySession) {
      setPlaying(null);
    }
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
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
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
          </div>

          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
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

        <div
          style={{
            background: surface.cream,
            borderRadius: 6,
            border: `1px solid ${surface.border}`,
            padding: '22px 26px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: 18
          }}
        >
          {story.paras.map((para, paraIndex) => {
            const isPlaying = playing === paraIndex;
            return (
            <div key={paraIndex} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: PARA_GAP, alignItems: 'flex-start' }}>
                <button
                  aria-label={isPlaying ? 'Detener' : 'Escuchar frase'}
                  onClick={() => handlePlayPara(paraIndex)}
                  style={{
                    width: PLAY_BUTTON_SIZE,
                    height: PLAY_BUTTON_SIZE,
                    borderRadius: '50%',
                    flexShrink: 0,
                    marginTop: 3,
                    border: isPlaying ? 'none' : `1px solid ${surface.border}`,
                    background: isPlaying ? accent.secondary : surface.cream,
                    boxShadow: isPlaying ? `0 0 0 4px ${accent.secondary}2b` : 'none',
                    color: isPlaying ? text.micGlyph : accent.secondary,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'box-shadow .2s, background .12s'
                  }}
                >
                  {isPlaying ? '■' : '▶'}
                </button>
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
                    borderLeft: `${TRANSLATION_BORDER_WIDTH}px solid ${pastel(accent.secondary, 0.55)}`,
                    margin: `0 0 0 ${TRANSLATION_INDENT}px`,
                    padding: `2px 0 2px ${TRANSLATION_PADDING_LEFT}px`
                  }}
                >
                  {para.tr}
                </p>
              )}
            </div>
            );
          })}
        </div>

        <WordCard />
      </div>
    </section>
  );
}
