'use client';

import { useMemo } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { connectorsOf } from '@/data/connectors';
import { REGISTER_COLOR } from '@/components/Connectors/ConnectorsSection';
import { seededShuffle } from '../seededShuffle';
import { buildLinkerQuestions, pick2 } from './buildLinkerQuestions';
import GameShell from '../GameShell';

export const LINKER_COLOR = '#155e75';

/**
 * Juego 09 — Elige el conector. Cada pregunta huela el conector dentro de su
 * propia frase de ejemplo; las tres opciones salen del mismo nivel.
 */
export default function LinkerGame() {
  const { surface, text, font } = useTheme();
  const { lang, level, cxIndex, setCxIndex, cxPick, setCxPick, cxDone, markLinkerDone, gradeSrs } = useReader();

  const data = connectorsOf(lang, level);
  const questions = useMemo(() => buildLinkerQuestions(data), [data]);
  const total = questions.length;
  const index = total > 0 ? cxIndex % total : 0;
  const current = questions[index];

  const options = useMemo(() => {
    if (!current) return [];
    const others = questions.filter((_, i) => i !== index).map((q) => q.answer);
    const [d1, d2] = pick2(others, index);
    return seededShuffle([current.answer, d1, d2], String(23 + index));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, index]);

  if (total === 0) return null;

  const isCorrectPick = cxPick != null && cxPick === current.answer;
  const registerColor = REGISTER_COLOR[current.r] || REGISTER_COLOR.neutro;

  const handlePick = (opt) => {
    if (cxPick != null) return;
    const correct = opt === current.answer;
    // SRS (§3 linguatales-srs-spec.md): la clave usa el `en` COMPLETO de la
    // ficha (p. ej. "later / later on"), no la forma huecada — si no, la
    // misma entrada generaría dos tarjetas distintas.
    gradeSrs(
      `cx:${current.en}`,
      { kind: 'Conector', q: current.blanked, a: current.en, hint: `${current.es} · registro ${current.r}` },
      correct ? 4 : 0
    );
    setCxPick(opt);
    if (correct) markLinkerDone(index);
  };

  const handleNext = () => {
    setCxIndex((index + 1) % total);
    setCxPick(null);
  };

  let feedback;
  if (cxPick != null) {
    feedback = isCorrectPick
      ? { text: `✓ ${current.answer} — ${current.es} · registro ${current.r}`, tone: 'ok' }
      : { text: '✕ Incorrecto.', tone: 'error' };
  } else {
    feedback = { text: 'Elige el conector que falta.', tone: 'idle' };
  }
  // Feedback del "por qué" (§1, quinta entrega): significado, registro,
  // complejidad y ejemplo — todo ya en la ficha del conector.
  const why =
    cxPick != null && !isCorrectPick
      ? { label: 'POR QUÉ', text: `${current.es} · registro ${current.r} · complejidad ${current.g}/3. Ejemplo: ${current.ej}` }
      : null;

  const composedBg = pastel(LINKER_COLOR, 0.94);

  return (
    <GameShell
      index="09"
      title="Elige el conector"
      prompt="El hueco sale del ejemplo real de la ficha. Trabaja sobre los conectores de este nivel."
      level={level}
      progress={<span>{Object.keys(cxDone).length} / {total}</span>}
      accent={LINKER_COLOR}
      canCheck={cxPick != null}
      checkLabel="Siguiente hueco"
      onCheck={handleNext}
      onReset={() => {}}
      hideReset
      feedback={feedback}
      why={why}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: 'rgba(255,255,255,.7)',
            borderLeft: `5px solid ${LINKER_COLOR}`,
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
              color: fg(LINKER_COLOR, composedBg, 4.6)
            }}
          >
            Completa la frase
          </span>
          <p style={{ fontFamily: font.display, fontSize: 22, color: text.ink, margin: '8px 0 0' }}>
            {current.blanked}
          </p>
          <span
            style={{
              display: 'inline-block',
              marginTop: 8,
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: fg(registerColor, pastel(registerColor, 0.8), 4.6),
              background: pastel(registerColor, 0.8),
              borderRadius: 4,
              padding: '4px 8px'
            }}
          >
            registro {current.r}
          </span>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {options.map((opt) => {
            const isAnswer = opt === current.answer;
            const isPicked = cxPick === opt;
            let bg = surface.cream;
            let borderColor = pastel(LINKER_COLOR, 0.6);
            if (cxPick != null && isAnswer) {
              bg = pastel('#0e9f6e', 0.74);
              borderColor = '#0e9f6e';
            } else if (cxPick != null && isPicked && !isAnswer) {
              bg = pastel('#e11d48', 0.78);
              borderColor = '#e11d48';
            }
            return (
              <button
                key={opt}
                disabled={cxPick != null}
                onClick={() => handlePick(opt)}
                style={{
                  fontFamily: font.display,
                  fontSize: 17,
                  color: text.ink,
                  background: bg,
                  border: `2px solid ${borderColor}`,
                  borderRadius: 5,
                  padding: '9px 18px',
                  cursor: cxPick != null ? 'default' : 'pointer'
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </GameShell>
  );
}
