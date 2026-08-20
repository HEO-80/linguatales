'use client';

import { useState, useEffect, useRef } from 'react';
import { whiteReadable, NEUTRAL } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useAppState } from '@/state/AppStateContext';
import { getLanguageData } from '@/data';
import { speakSentence, cancelSpeech, isSpeechSupported, useIsSpeechSupported } from '@/lib/azure/tts';
import { touchStoryProgress } from '@/lib/storage/localProgress';
import SentencePair from './SentencePair';
import PronunciationBar from './PronunciationBar';

export default function StoryReader() {
  const theme = useTheme();
  const { surface, accent, text, font, shadow } = theme;
  const { lang, sentenceIndex, setSentenceIndex } = useAppState();
  const { story } = getLanguageData(lang);
  const [showTranslation, setShowTranslation] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const speechSupported = useIsSpeechSupported();
  // Evita que un onend de una lectura ya cancelada (p. ej. por cambio de
  // idioma) siga encadenando frases de una historia que ya no está activa.
  const readingRef = useRef(false);

  const onSolid = whiteReadable(surface.solid) ? '#ffffff' : NEUTRAL.ink;

  // Persiste "por dónde va" en cuanto se activa una frase — la primera vez
  // marca la historia 'en_curso', y 'leido' al llegar a la última.
  useEffect(() => {
    touchStoryProgress(story.id, sentenceIndex, story.sentences.length);
  }, [story.id, sentenceIndex, story.sentences.length]);

  // Corta cualquier lectura en curso si se cambia de historia/idioma o al desmontar.
  useEffect(() => {
    return () => {
      readingRef.current = false;
      cancelSpeech();
    };
  }, [story.id]);

  const handleReadAloud = async () => {
    if (speaking) {
      readingRef.current = false;
      cancelSpeech();
      setSpeaking(false);
      return;
    }
    if (!isSpeechSupported()) {
      // Sin Web Speech API disponible: al menos avanza el marcador de lectura.
      setSentenceIndex((i) => (i + 1) % story.sentences.length);
      return;
    }

    readingRef.current = true;
    setSpeaking(true);
    let i = sentenceIndex;
    while (readingRef.current && i < story.sentences.length) {
      setSentenceIndex(i);
      try {
        await speakSentence(story.sentences[i].text, { lang });
      } catch {
        break;
      }
      i += 1;
    }
    readingRef.current = false;
    setSpeaking(false);
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

          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
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
              {speaking ? '■ Detener' : '▶ Leer en voz alta'}
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
            {!speechSupported && (
              <span style={{ fontFamily: font.body, fontSize: 12, color: text.onTint }}>
                Tu navegador no soporta lectura en voz alta.
              </span>
            )}
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

        <PronunciationBar
          theme={theme}
          lang={lang}
          activeText={story.sentences[sentenceIndex]?.text || story.sentences[0].text}
          sentenceId={`${story.id}-${sentenceIndex}`}
          hint={story.pronunciation}
        />
      </div>
    </section>
  );
}
