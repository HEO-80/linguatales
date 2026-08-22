'use client';

import { useMemo, useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { evaluate } from '@/lib/backtrans';
import { buildExamBank, selectExamQuestions } from './buildExamBank';
import GameShell from '../GameShell';

export const GOLD = '#a16207';
const MINT = '#0e9f6e';
const CRIMSON = '#e11d48';
const AMBER = '#e0a80c';
const SRS_DUE_COLOR = '#b45309'; // mismo ámbar que la card de Repaso

const BADGES = [
  { min: 95, name: 'Élite' },
  { min: 80, name: 'Avanzado' },
  { min: 60, name: 'Explorador' }
];

function badgeFor(pct) {
  return BADGES.find((b) => pct >= b.min) ?? null;
}

/**
 * Juego "Examen final" (§2, quinta entrega) — culminación de todo lo
 * anterior: 8 preguntas mezclando los tipos de los demás juegos, elegidas
 * por lo que el SRS ve flojo. Cada respuesta realimenta la MISMA clave SRS
 * que su juego de origen, con `kind: 'Examen · …'`.
 */
export default function ExamGame() {
  const { surface, text, font } = useTheme();
  const { story, lang, level, phrBlock, srsCards, srsDay, gradeSrs, goToSrs } = useReader();

  const [attempt, setAttempt] = useState(0);
  // Se elige UNA vez por intento: si se reordenara con cada respuesta (el
  // SRS cambia según se gradúa), el examen mutaría bajo los pies del
  // usuario a mitad de partida.
  const questions = useMemo(
    () => selectExamQuestions(buildExamBank({ story, lang, level, phrBlock }), srsCards, srsDay, 8),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [attempt, phrBlock, story.num]
  );

  const [idx, setIdx] = useState(0);
  const [pick, setPick] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null); // solo para type 'write'
  const [correctCount, setCorrectCount] = useState(0);
  const [phase, setPhase] = useState('quiz'); // 'quiz' | 'result'

  const total = questions.length;
  const q = questions[idx];
  const isLast = idx === total - 1;

  if (total === 0) {
    return (
      <div style={{ background: surface.cream, borderRadius: 6, padding: '24px 26px', fontFamily: font.body, color: text.onCream }}>
        Todavía no hay suficiente contenido en este relato/nivel para armar un examen.
      </div>
    );
  }

  const gradeThis = (correct) => {
    gradeSrs(q.srsKey, { kind: `Examen · ${q.srsKind}`, q: q.prompt, a: q.answer, hint: q.hint }, correct ? 4 : 0);
    if (correct) setCorrectCount((c) => c + 1);
  };

  const handlePick = (opt) => {
    if (checked) return;
    const correct = opt === q.answer;
    setPick(opt);
    setChecked(true);
    gradeThis(correct);
  };

  const handleCheckWrite = () => {
    if (!inputValue.trim()) return;
    const evalResult = evaluate(inputValue, q);
    setResult(evalResult);
    setChecked(true);
    gradeThis(evalResult.exact);
  };

  const handleAdvance = () => {
    if (isLast) {
      setPhase('result');
      return;
    }
    setIdx((i) => i + 1);
    setPick(null);
    setInputValue('');
    setChecked(false);
    setResult(null);
  };

  const handleRepeat = () => {
    setAttempt((a) => a + 1);
    setIdx(0);
    setPick(null);
    setInputValue('');
    setChecked(false);
    setResult(null);
    setCorrectCount(0);
    setPhase('quiz');
  };

  if (phase === 'result') {
    const pct = Math.round((correctCount / total) * 100);
    const badge = badgeFor(pct);
    const resultBg = badge ? pastel(MINT, 0.82) : pastel(CRIMSON, 0.82);
    const resultColor = badge ? MINT : CRIMSON;

    return (
      <div
        style={{
          background: surface.cream,
          borderTop: `4px solid ${GOLD}`,
          borderRadius: 6,
          padding: '24px 26px 26px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}
      >
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            color: fg(GOLD, surface.cream, 4.6)
          }}
        >
          Resultado del examen
        </span>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
          <span style={{ fontFamily: font.display, fontSize: 56, fontWeight: 600, color: text.ink }}>{pct}%</span>
          <span style={{ fontFamily: font.body, fontSize: 14, color: text.onCream }}>
            {correctCount} de {total} aciertos
          </span>
        </div>

        <div style={{ background: resultBg, borderRadius: 6, padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {badge ? (
            <>
              <span style={{ fontFamily: font.display, fontSize: 19, fontWeight: 600, color: fg(resultColor, resultBg, 4.6) }}>
                Insignia {badge.name} · Nivel {level} superado
              </span>
              <span style={{ fontFamily: font.body, fontSize: 13, color: text.ink }}>
                Lo fallado durante el examen sigue en el repaso — repásalo antes de subir de nivel.
              </span>
            </>
          ) : (
            <>
              <span style={{ fontFamily: font.display, fontSize: 19, fontWeight: 600, color: fg(resultColor, resultBg, 4.6) }}>
                Todavía no
              </span>
              <span style={{ fontFamily: font.body, fontSize: 13, color: text.ink }}>
                Por debajo del 60%. Repasa lo fallado y vuelve a intentarlo.
              </span>
            </>
          )}
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <button
            onClick={goToSrs}
            style={{
              background: SRS_DUE_COLOR,
              color: '#fffdf7',
              fontFamily: font.body,
              fontSize: 12.5,
              fontWeight: 700,
              border: 'none',
              borderRadius: 4,
              padding: '10px 18px',
              cursor: 'pointer'
            }}
          >
            Ir al repaso
          </button>
          <button
            onClick={handleRepeat}
            style={{
              background: 'transparent',
              border: `1px solid ${GOLD}`,
              color: fg(GOLD, surface.cream, 4.6),
              fontFamily: font.body,
              fontSize: 12.5,
              fontWeight: 700,
              borderRadius: 4,
              padding: '10px 18px',
              cursor: 'pointer'
            }}
          >
            Repetir examen
          </button>
        </div>
      </div>
    );
  }

  let feedback;
  if (!checked) {
    feedback = { text: q.type === 'write' ? 'Escríbelo en inglés y pulsa Comprobar (o Enter).' : 'Elige la respuesta correcta.', tone: 'idle' };
  } else if (q.type === 'write') {
    feedback = result.exact ? { text: '✓ Exacta.', tone: 'ok' } : { text: '✕ Incorrecto.', tone: 'error' };
  } else {
    feedback = pick === q.answer ? { text: '✓ Correcto.', tone: 'ok' } : { text: '✕ Incorrecto.', tone: 'error' };
  }

  const isCorrectNow = q.type === 'write' ? !!result?.exact : pick === q.answer;
  const why = checked && !isCorrectNow ? q.why : null;
  const composedBg = pastel(GOLD, 0.94);
  const inputBorder = !checked ? pastel(GOLD, 0.6) : result?.exact ? MINT : CRIMSON;

  return (
    <GameShell
      index="Examen"
      title="Examen final"
      prompt="Mezcla de todos los juegos, ordenada por lo que más te cuesta."
      level={level}
      progress={
        <span>
          Pregunta {idx + 1} de {total} · {q.promptLabel} — {correctCount} acierto{correctCount === 1 ? '' : 's'}
        </span>
      }
      accent={GOLD}
      canCheck={checked ? true : q.type === 'write' ? inputValue.trim().length > 0 : pick != null}
      checkLabel={checked ? (isLast ? 'Ver resultado' : 'Siguiente pregunta') : 'Comprobar'}
      onCheck={checked ? handleAdvance : q.type === 'write' ? handleCheckWrite : undefined}
      onReset={() => {}}
      hideReset
      feedback={feedback}
      why={why}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ background: 'rgba(255,255,255,.7)', borderLeft: `5px solid ${GOLD}`, borderRadius: 5, padding: '16px 18px' }}>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: fg(GOLD, composedBg, 4.6)
            }}
          >
            {q.promptLabel}
          </span>
          <p style={{ fontFamily: font.display, fontSize: 24, color: text.ink, margin: '8px 0 0' }}>{q.prompt}</p>
          {q.sub && (
            <p style={{ fontFamily: font.body, fontSize: 13.5, fontStyle: 'italic', color: text.onCream, margin: '4px 0 0' }}>
              {q.sub}
            </p>
          )}
        </div>

        {q.type === 'pick' ? (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {q.options.map((opt) => {
              const isAnswer = opt === q.answer;
              const isPicked = pick === opt;
              let bg = surface.cream;
              let borderColor = pastel(GOLD, 0.6);
              if (checked && isAnswer) {
                bg = pastel(MINT, 0.74);
                borderColor = MINT;
              } else if (checked && isPicked && !isAnswer) {
                bg = pastel(CRIMSON, 0.78);
                borderColor = CRIMSON;
              }
              return (
                <button
                  key={opt}
                  disabled={checked}
                  onClick={() => handlePick(opt)}
                  style={{
                    fontFamily: font.display,
                    fontSize: 17,
                    color: text.ink,
                    background: bg,
                    border: `2px solid ${borderColor}`,
                    borderRadius: 5,
                    padding: '9px 18px',
                    cursor: checked ? 'default' : 'pointer'
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <input
              value={inputValue}
              disabled={checked}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCheckWrite()}
              placeholder="Type it in English…"
              style={{
                fontFamily: font.display,
                fontSize: 18,
                color: text.ink,
                background: surface.cream,
                border: `2px solid ${inputBorder}`,
                borderRadius: 5,
                padding: '10px 14px',
                width: '100%'
              }}
            />
            {checked && result && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {result.marks.map((m, i) => (
                    <span
                      key={`m${i}`}
                      style={{
                        fontFamily: font.display,
                        fontSize: 15,
                        color: '#191713',
                        background: pastel(m.ok ? MINT : CRIMSON, 0.62),
                        borderRadius: 4,
                        padding: '3px 7px'
                      }}
                    >
                      {m.w}
                    </span>
                  ))}
                  {result.missing.map((w, i) => (
                    <span
                      key={`x${i}`}
                      style={{
                        fontFamily: font.display,
                        fontSize: 15,
                        color: fg(AMBER, surface.cream, 4.6),
                        background: 'transparent',
                        border: `1.5px dotted ${AMBER}`,
                        borderRadius: 4,
                        padding: '3px 7px'
                      }}
                    >
                      {w}
                    </span>
                  ))}
                </div>
                <span style={{ fontFamily: font.display, fontSize: 18, color: text.ink }}>{result.model}</span>
              </div>
            )}
          </>
        )}
      </div>
    </GameShell>
  );
}
