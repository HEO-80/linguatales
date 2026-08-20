'use client';

import { useState, useRef } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import Waveform from '@/components/StoryReader/Waveform';
import { startSpeakRound } from './scoreBreakdown';
import GameShell from '../GameShell';

function scoreTone(score) {
  if (score >= 80) return '#0e9f6e';
  if (score >= 65) return '#e0a80c';
  return '#e11d48';
}

const METRIC_LABELS = { fluency: 'Fluidez', rhythm: 'Ritmo', phonemes: 'Fonemas' };

/** Juego 05 — Habla la frase. Una ronda por párrafo del relato. */
export default function SpeakSentenceGame() {
  const { text, font } = useTheme();
  const { lang, level, story, storyProgress, recordResult } = useReader();

  const [paraIndex, setParaIndex] = useState(0);
  const [recording, setRecording] = useState(false);
  const [scores, setScores] = useState(null);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  const para = story.paras[paraIndex];
  const referenceText = para.t.map((t) => t[TOKEN.TEXT]).join(' ');

  const startRound = () => {
    setError(null);
    setRecording(true);
    const controller = startSpeakRound({ referenceText, lang });
    controllerRef.current = controller;
    controller.result
      .then(({ overall, words, metrics }) => {
        setScores({ overall, words, metrics });
        recordResult('speak', { paraIndex, score: overall });
      })
      .catch(() => {
        setError('No se pudo grabar — revisa el permiso del micrófono.');
      })
      .finally(() => setRecording(false));
  };

  const handleMicClick = () => {
    if (recording) {
      controllerRef.current?.stop();
      return;
    }
    startRound();
  };

  const canCheck = !!scores;

  const handleCheck = () => {
    setParaIndex((i) => Math.min(i + 1, story.paras.length - 1));
    setScores(null);
    setError(null);
  };

  const handleReset = () => {
    setScores(null);
    setError(null);
  };

  let feedback;
  if (error) {
    feedback = { text: error, tone: 'error' };
  } else if (recording) {
    feedback = { text: 'Escuchando…', tone: 'idle' };
  } else if (scores) {
    feedback = { text: `Puntuación global: ${scores.overall}%`, tone: scores.overall >= 65 ? 'ok' : 'error' };
  } else {
    feedback = { text: 'Graba la frase leyendo en voz alta.', tone: 'idle' };
  }

  const worstWord = scores?.words?.length ? [...scores.words].sort((a, b) => a.score - b.score)[0] : null;

  return (
    <GameShell
      index="05"
      title="Habla la frase"
      prompt={
        <>
          Lee la frase en voz alta y comprueba tu pronunciación. Del relato <em>{story.title}</em>.
        </>
      }
      level={level}
      progress={`${Object.keys(storyProgress.speak.best).length} / ${story.paras.length}`}
      accent="#0f766e"
      canCheck={canCheck}
      checkLabel="Siguiente frase"
      onCheck={handleCheck}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontFamily: font.display, fontSize: 20, color: text.ink, margin: 0 }}>“{referenceText}”</p>
        <p style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: text.onCream, margin: 0 }}>
          {para.tr}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <button
            aria-label={recording ? 'Detener grabación' : 'Grabar pronunciación'}
            onClick={handleMicClick}
            style={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              background: '#0f766e',
              boxShadow: recording ? '0 0 0 6px #0f766e55' : '0 0 0 6px #0f766e2b',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
              color: '#fffdf7',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'box-shadow .2s'
            }}
          >
            {recording ? '■' : '●'}
          </button>
          <Waveform recording={recording} />
        </div>

        {scores && (
          <>
            <div
              style={{
                background: pastel(scoreTone(scores.overall), 0.8),
                borderRadius: 5,
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8
              }}
            >
              <span
                style={{
                  fontFamily: font.mono,
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '1.4px',
                  textTransform: 'uppercase',
                  color: fg(scoreTone(scores.overall), pastel(scoreTone(scores.overall), 0.8), 5)
                }}
              >
                Puntuación global
              </span>
              <span style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink }}>
                {scores.overall}%
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {scores.words.map((w, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: font.display,
                      fontSize: 15,
                      color: '#191713',
                      background: pastel(scoreTone(w.score), 0.62),
                      borderRadius: 4,
                      padding: '3px 7px'
                    }}
                  >
                    {w.w}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              {Object.entries(scores.metrics).map(([key, value]) => {
                const bg = pastel('#0f766e', 0.84);
                return (
                  <div key={key} style={{ flex: 1, background: bg, borderRadius: 5, padding: '10px 12px' }}>
                    <div
                      style={{
                        fontFamily: font.mono,
                        fontSize: 9.5,
                        fontWeight: 700,
                        letterSpacing: '1.2px',
                        textTransform: 'uppercase',
                        color: fg('#0f766e', bg, 5.5)
                      }}
                    >
                      {METRIC_LABELS[key]}
                    </div>
                    <div style={{ fontFamily: font.display, fontSize: 24, fontWeight: 600, color: fg('#0f766e', bg, 5.5) }}>
                      {value}%
                    </div>
                  </div>
                );
              })}
            </div>

            {worstWord && (
              <span style={{ fontFamily: font.body, fontSize: 13, color: text.onCream }}>
                Repasa: {worstWord.w}
              </span>
            )}
          </>
        )}
      </div>
    </GameShell>
  );
}
