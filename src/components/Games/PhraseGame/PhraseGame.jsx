'use client';

import { useMemo } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import { seededShuffle } from '../seededShuffle';
import GameShell from '../GameShell';

const AMBER = '#b45309';

/** Dos distractores tomados de OTRAS frases del bloque, rotados por índice. */
function pick2(arr, k) {
  const n = arr.length;
  return [arr[(k * 3 + 1) % n], arr[(k * 3 + 2) % n]];
}

/**
 * Juego 06 — Elige la frase correcta. Traduce item.es → elige item.en entre
 * tres opciones. Trabaja sobre el bloque de frases activo (phrBlock).
 */
export default function PhraseGame() {
  const { surface, text, font } = useTheme();
  const {
    lang, level,
    phrBlock, phIndex, setPhIndex, phPick, setPhPick,
    phDoneByBlock, markPhraseDone, gradeSrs
  } = useReader();

  const blocks = phrasesOf(lang, level);
  const block = blocks[phrBlock];

  const items = block.items;
  const total = items.length;
  const current = items[phIndex];
  const done = phDoneByBlock[block.num] || {};
  const isDone = !!done[phIndex];

  const options = useMemo(() => {
    const others = items.filter((_, i) => i !== phIndex).map((it) => it.en);
    const [d1, d2] = pick2(others, phIndex);
    return seededShuffle([current.en, d1, d2], String(3 + phIndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.num, phIndex]);

  const isCorrectPick = phPick != null && phPick === current.en;

  const handlePick = (opt) => {
    if (phPick != null) return;
    const correct = opt === current.en;
    // SRS (§3 linguatales-srs-spec.md): en el momento de responder, antes
    // del feedback. q=4 acierto, q=0 fallo.
    gradeSrs(
      `ph:${block.num}:${phIndex}`,
      { kind: 'Frase hecha', q: current.es, a: current.en, hint: current.tip },
      correct ? 4 : 0
    );
    setPhPick(opt);
    if (correct) markPhraseDone(block.num, phIndex);
  };

  const handleNext = () => {
    setPhIndex((phIndex + 1) % total);
    setPhPick(null);
  };

  let feedback;
  if (phPick != null) {
    feedback = isCorrectPick
      ? { text: `✓ Correcto · ${current.en} — ${current.tip}`, tone: 'ok' }
      : { text: '✕ Incorrecto.', tone: 'error' };
  } else {
    feedback = { text: 'Elige cómo se dice en inglés.', tone: 'idle' };
  }
  // Feedback del "por qué" (§1, quinta entrega): el tip de la frase.
  const why = phPick != null && !isCorrectPick ? { label: 'POR QUÉ', text: current.tip } : null;

  const enunciadoBg = 'rgba(255,255,255,.7)';
  // Sobre esta caja traslúcida el fondo real compuesto es más claro que el
  // pastel(AMBER,.84) de GameShell — se aproxima con pastel(AMBER,.94), no
  // con '#fff' (ver bug de _rgb en el spec: derivar contra blanco puro falsea
  // el contraste calculado).
  const composedBg = pastel(AMBER, 0.94);

  return (
    <GameShell
      index="06"
      title="Elige la frase correcta"
      prompt="¿Cómo lo dirías en inglés? Sale de las frases hechas de este nivel."
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
          <span>{Object.keys(done).length} / {total}</span>
        </div>
      }
      accent={AMBER}
      canCheck={phPick != null}
      checkLabel="Siguiente frase"
      onCheck={handleNext}
      onReset={() => {}}
      hideReset
      feedback={feedback}
      why={why}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: enunciadoBg,
            borderLeft: `5px solid ${AMBER}`,
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
              color: fg(AMBER, composedBg, 4.6)
            }}
          >
            ¿Cómo lo dirías en inglés?
          </span>
          <p style={{ fontFamily: font.display, fontSize: 25, color: text.ink, margin: '8px 0 0' }}>{current.es}</p>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {options.map((opt) => {
            const isAnswer = opt === current.en;
            const isPicked = phPick === opt;
            let bg = surface.cream;
            let borderColor = pastel(AMBER, 0.6);
            if (phPick != null && isAnswer) {
              bg = pastel('#0e9f6e', 0.74);
              borderColor = '#0e9f6e';
            } else if (phPick != null && isPicked && !isAnswer) {
              bg = pastel('#e11d48', 0.78);
              borderColor = '#e11d48';
            }
            return (
              <button
                key={opt}
                disabled={phPick != null}
                onClick={() => handlePick(opt)}
                style={{
                  fontFamily: font.display,
                  fontSize: 17,
                  color: text.ink,
                  background: bg,
                  border: `2px solid ${borderColor}`,
                  borderRadius: 5,
                  padding: '9px 18px',
                  cursor: phPick != null ? 'default' : 'pointer'
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
