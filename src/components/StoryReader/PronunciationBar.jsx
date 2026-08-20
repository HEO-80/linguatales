'use client';

import { useState, useRef, useSyncExternalStore } from 'react';
import { pastel, fg } from '@/theme/color';
import { PRONUNCIATION_METRICS } from '@/theme/languages';
import {
  startPronunciationAssessment,
  isPronunciationAssessmentSupported
} from '@/lib/azure/pronunciation';
import {
  recordPronunciationAttempt,
  subscribeToProgress,
  getProgressSnapshot,
  getProgressServerSnapshot
} from '@/lib/storage/localProgress';
import Waveform from './Waveform';

// Mapeo aproximado a las 3 sub-métricas que calcula el placeholder de
// pronunciation.ts — no hay datos reales de fonemas/ritmo desde el
// navegador, así que "Fonemas" usa el acierto de palabras (accuracyScore)
// y "Ritmo" usa cuánto se completó la frase (completenessScore).
const METRIC_KEY_TO_SCORE = {
  Fluidez: 'fluencyScore',
  Ritmo: 'completenessScore',
  Fonemas: 'accuracyScore'
};

function HighlightedExample({ example, phoneme, color }) {
  const idx = example.toLowerCase().indexOf(phoneme.toLowerCase());
  if (idx === -1) return <>{example}</>;
  const before = example.slice(0, idx);
  const match = example.slice(idx, idx + phoneme.length);
  const after = example.slice(idx + phoneme.length);
  return (
    <>
      {before}
      <span style={{ color, fontWeight: 700 }}>{match}</span>
      {after}
    </>
  );
}

/**
 * Genérico: no lee el contexto global. El llamador decide de qué frase se
 * practica pronunciación — StoryReader pasa la frase activa del relato
 * graduado; RealEnglishReader pasa la línea activa del transcript del
 * diálogo. `sentenceId` es lo único que hace falta para que el intento se
 * guarde y se recupere bien (mismo store para ambos casos).
 */
export default function PronunciationBar({ theme, lang, activeText, sentenceId, hint }) {
  const { surface, accent, text, font, shadow } = theme;

  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);
  const attemptsForSentence = progress.pronunciationAttempts.filter((a) => a.sentence_id === sentenceId);
  const lastAttempt = attemptsForSentence[attemptsForSentence.length - 1];
  const scores = lastAttempt
    ? {
        accuracyScore: lastAttempt.accuracy_score,
        fluencyScore: lastAttempt.fluency_score,
        completenessScore: lastAttempt.completeness_score,
        pronunciationScore: lastAttempt.pronunciation_score
      }
    : null;

  const [recording, setRecording] = useState(false);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);
  const supported = isPronunciationAssessmentSupported();

  const handleMicClick = () => {
    if (recording) {
      controllerRef.current?.stop();
      return;
    }
    if (!supported) {
      setError('Tu navegador no soporta reconocimiento de voz.');
      return;
    }

    setError(null);
    setRecording(true);
    const controller = startPronunciationAssessment({ referenceText: activeText, lang });
    controllerRef.current = controller;

    controller.result
      .then((result) => {
        recordPronunciationAttempt({
          sentence_id: sentenceId,
          accuracy_score: result.accuracyScore,
          fluency_score: result.fluencyScore,
          completeness_score: result.completenessScore,
          pronunciation_score: result.pronunciationScore
        });
      })
      .catch((err) => {
        setError(
          err?.message === 'no-speech'
            ? 'No te hemos oído bien. Prueba otra vez.'
            : 'No se pudo grabar — revisa el permiso del micrófono.'
        );
      })
      .finally(() => setRecording(false));
  };

  const accuracyBg = pastel('#0e9f6e', 0.82);
  const accuracyFg = fg('#0e9f6e', accuracyBg, 5.5);
  // "Precisión" muestra la media de las tres sub-métricas (pronunciationScore),
  // no accuracyScore otra vez — si no, duplicaría el número de "Fonemas".
  const accuracyPct = scores?.pronunciationScore ?? 0;

  return (
    <div
      style={{
        background: surface.cream,
        borderLeft: `5px solid ${accent.secondary}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }}
    >
      <p style={{ fontFamily: font.display, fontSize: 20, color: text.ink, margin: 0 }}>“{activeText}”</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <button
          aria-label={recording ? 'Detener grabación' : 'Grabar pronunciación'}
          onClick={handleMicClick}
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: accent.secondary,
            boxShadow: recording ? `0 0 0 6px ${accent.secondary}55` : `0 0 0 6px ${accent.secondary}2b`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            color: text.micGlyph,
            flexShrink: 0,
            transition: 'box-shadow .2s'
          }}
        >
          {recording ? '■' : '●'}
        </button>
        <Waveform recording={recording} />
      </div>

      {error && <span style={{ fontFamily: font.body, fontSize: 12.5, color: '#e11d48' }}>{error}</span>}
      {!error && recording && (
        <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>Escuchando…</span>
      )}
      {!error && !recording && !scores && (
        <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>
          Graba tu voz leyendo la frase de arriba para ver tu puntuación.
        </span>
      )}

      <div style={{ display: 'flex', gap: 12 }}>
        {PRONUNCIATION_METRICS.map((m) => {
          const bg = pastel(m.color, 0.84);
          const fgColor = fg(m.color, bg, 5.5);
          const value = scores ? scores[METRIC_KEY_TO_SCORE[m.key]] : null;
          return (
            <div key={m.key} style={{ flex: 1, background: bg, borderRadius: 5, padding: '10px 12px' }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: fgColor
                }}
              >
                {m.key}
              </div>
              <div style={{ fontFamily: font.display, fontSize: 28, fontWeight: 600, color: fgColor }}>
                {value === null ? '—' : `${value}%`}
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{ background: accuracyBg, borderRadius: 5, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              color: accuracyFg
            }}
          >
            Precisión
          </span>
          <span style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: accuracyFg }}>
            {scores ? `${accuracyPct}%` : '—'}
          </span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: 'rgba(25,23,19,.08)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${accuracyPct}%`, background: '#0e9f6e' }} />
        </div>
        {hint && (
          <span style={{ fontFamily: font.body, fontSize: 12.5, color: accuracyFg }}>
            Sonido a practicar: <HighlightedExample example={hint.example} phoneme={hint.phoneme} color="#0e9f6e" />
            {' — '}
            {hint.description}
          </span>
        )}
      </div>
    </div>
  );
}
