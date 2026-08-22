'use client';

import { useEffect, useRef } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import PlayButton from '@/components/Phrases/PlayButton';
import Waveform from '@/components/StoryReader/Waveform';
import { scorePhrase } from './scorePhrase';
import GameShell from '../GameShell';

export const VIOLET = '#6d28d9';
const RECORD_MS = 1200;

function wordTone(score) {
  if (score >= 85) return '#0e9f6e';
  if (score >= 70) return '#e0a80c';
  return '#e11d48';
}

/**
 * Juego 08 — Di la frase en voz alta. Misma mecánica y layout que el
 * Juego 05, sobre las frases hechas del bloque activo. Puntuación
 * determinista (scorePhrase), no una grabación real evaluada.
 */
export default function SpeakPhraseGame() {
  const { surface, text, font } = useTheme();
  const {
    lang, level,
    phrBlock, sphIndex, setSphIndex, sphState, setSphState,
    sphBest, markSpeakphBest, gradeSrs
  } = useReader();

  const timerRef = useRef(null);

  const blocks = phrasesOf(lang, level);
  const block = blocks[phrBlock];
  const items = block.items;
  const total = items.length;
  const current = items[sphIndex];
  const best = sphBest[block.num] || {};
  const isDone = (best[sphIndex] ?? 0) >= 70;

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const { recording, scores } = sphState;

  const startRecording = () => {
    clearTimeout(timerRef.current);
    setSphState({ recording: true, scores: null });
    timerRef.current = setTimeout(() => {
      const result = scorePhrase(current.en, { sphIndex, phrBlock });
      // SRS (§3 linguatales-srs-spec.md): la nota sale del porcentaje —
      // ≥85 → 5, ≥70 → 3, resto → 0. En el momento de responder, antes de
      // pintar el feedback.
      const q = result.overall >= 85 ? 5 : result.overall >= 70 ? 3 : 0;
      gradeSrs(`sp:${block.num}:${sphIndex}`, { kind: 'Pronunciación', q: current.es, a: current.en, hint: current.tip }, q);
      setSphState({ recording: false, scores: result });
      markSpeakphBest(block.num, sphIndex, result.overall);
    }, RECORD_MS);
  };

  const handleMicClick = () => {
    if (recording) {
      clearTimeout(timerRef.current);
      setSphState({ recording: false, scores: null });
      return;
    }
    startRecording();
  };

  const handleNext = () => {
    clearTimeout(timerRef.current);
    setSphIndex((sphIndex + 1) % total);
    setSphState({ recording: false, scores: null });
  };

  const handleRepeat = () => {
    clearTimeout(timerRef.current);
    setSphState({ recording: false, scores: null });
  };

  let feedback;
  if (recording) {
    feedback = { text: 'Escuchando…', tone: 'idle' };
  } else if (scores) {
    feedback = { text: `Puntuación global: ${scores.overall}%`, tone: scores.overall >= 70 ? 'ok' : 'error' };
  } else {
    feedback = { text: 'Graba la frase leyendo en voz alta.', tone: 'idle' };
  }

  const worstWord = scores?.words?.length ? [...scores.words].sort((a, b) => a.score - b.score)[0] : null;
  const composedBg = pastel(VIOLET, 0.94);
  const micColor = recording ? '#e11d48' : VIOLET;

  return (
    <GameShell
      index="08"
      title="Di la frase en voz alta"
      prompt="Misma mecánica que el Juego 05, ahora sobre las frases hechas del bloque activo."
      level={level}
      progress={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {isDone && (
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                color: '#fffdf7',
                background: '#0e9f6e',
                borderRadius: 4,
                padding: '3px 7px'
              }}
            >
              ✓ Hecho
            </span>
          )}
          <span>{Object.values(best).filter((s) => s >= 70).length} / {total}</span>
        </div>
      }
      accent={VIOLET}
      canCheck={!!scores}
      checkLabel="Siguiente frase"
      onCheck={handleNext}
      onReset={handleRepeat}
      resetLabel="Repetir"
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: 'rgba(255,255,255,.7)',
            borderLeft: `5px solid ${VIOLET}`,
            borderRadius: 5,
            padding: '16px 18px'
          }}
        >
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: fg(VIOLET, composedBg, 4.6)
            }}
          >
            Dila en voz alta
          </span>
          <p style={{ fontFamily: font.display, fontSize: 25, color: text.ink, margin: '8px 0 0' }}>{current.es}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 6 }}>
            <PlayButton id="sph" text={current.en} color={VIOLET} />
            <span style={{ fontFamily: font.display, fontSize: 17, color: fg(VIOLET, surface.cream, 4.6) }}>
              {current.en}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <button
            aria-label={recording ? 'Detener grabación' : 'Grabar pronunciación'}
            onClick={handleMicClick}
            style={{
              width: 58,
              height: 58,
              borderRadius: '50%',
              background: micColor,
              boxShadow: recording ? '0 0 0 6px #e11d4855' : `0 0 0 6px ${VIOLET}2b`,
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 21,
              color: '#fffdf7',
              flexShrink: 0,
              cursor: 'pointer',
              transition: 'box-shadow .2s, background .2s'
            }}
          >
            {recording ? '■' : '●'}
          </button>
          <Waveform recording={recording} bars={40} color={VIOLET} />

          <div
            style={{
              marginLeft: 'auto',
              background: pastel(scores ? wordTone(scores.overall) : VIOLET, 0.8),
              borderRadius: 5,
              padding: '8px 14px',
              textAlign: 'center',
              minWidth: 76
            }}
          >
            <div
              style={{
                fontFamily: font.mono,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: fg(scores ? wordTone(scores.overall) : VIOLET, pastel(scores ? wordTone(scores.overall) : VIOLET, 0.8), 5)
              }}
            >
              Nota
            </div>
            <div style={{ fontFamily: font.display, fontSize: 20, fontWeight: 600, color: text.ink }}>
              {scores ? `${scores.overall}%` : '—'}
            </div>
          </div>
        </div>

        {scores && (
          <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {scores.words.map((w, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: font.display,
                    fontSize: 15,
                    color: '#191713',
                    background: pastel(wordTone(w.score), 0.62),
                    borderRadius: 4,
                    padding: '3px 7px'
                  }}
                >
                  {w.w}
                </span>
              ))}
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
