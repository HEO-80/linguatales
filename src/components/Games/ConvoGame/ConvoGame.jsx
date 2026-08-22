'use client';

import { useMemo } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import { seededShuffle } from '../seededShuffle';
import GameShell from '../GameShell';

const INDIGO = '#4338ca';

/** Dos distractores tomados de OTRAS contestaciones del bloque, rotados por índice. */
function pick2(arr, k) {
  const n = arr.length;
  return [arr[(k * 3 + 1) % n], arr[(k * 3 + 2) % n]];
}

/**
 * Juego 07 — Sigue la conversación. Te dicen item.en → elige la contestación
 * item.re[0] entre tres opciones. Trabaja sobre el bloque de frases activo.
 */
export default function ConvoGame() {
  const { surface, text, font } = useTheme();
  const {
    lang, level,
    phrBlock, coIndex, setCoIndex, coPick, setCoPick,
    coDoneByBlock, markConvoDone
  } = useReader();

  const blocks = phrasesOf(lang, level);
  const block = blocks[phrBlock];

  const items = block.items;
  const total = items.length;
  const current = items[coIndex];
  const done = coDoneByBlock[block.num] || {};
  const isDone = !!done[coIndex];

  const options = useMemo(() => {
    const others = items.filter((_, i) => i !== coIndex).map((it) => it.re[0]);
    const [d1, d2] = pick2(others, coIndex);
    return seededShuffle([current.re[0], d1, d2], String(11 + coIndex));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.num, coIndex]);

  const isCorrectPick = coPick != null && coPick === current.re[0];

  const handlePick = (opt) => {
    if (coPick != null) return;
    setCoPick(opt);
    if (opt === current.re[0]) markConvoDone(block.num, coIndex);
  };

  const handleNext = () => {
    setCoIndex((coIndex + 1) % total);
    setCoPick(null);
  };

  let feedback;
  if (coPick != null) {
    feedback = isCorrectPick
      ? { text: `✓ ${current.re[0]} — ${current.re[1]}`, tone: 'ok' }
      : { text: `✕ Se contesta: ${current.re[0]} — ${current.re[1]}`, tone: 'error' };
  } else {
    feedback = { text: 'Elige la contestación justa.', tone: 'idle' };
  }

  const enunciadoBg = 'rgba(255,255,255,.7)';
  const composedBg = pastel(INDIGO, 0.94);

  return (
    <GameShell
      index="07"
      title="Sigue la conversación"
      prompt="Contesta con la frase justa. Sale de las frases hechas de este nivel."
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
      accent={INDIGO}
      canCheck={coPick != null}
      checkLabel="Siguiente turno"
      onCheck={handleNext}
      onReset={() => {}}
      hideReset
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: enunciadoBg,
            borderLeft: `5px solid ${INDIGO}`,
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
              color: fg(INDIGO, composedBg, 4.6)
            }}
          >
            Te dicen
          </span>
          <p style={{ fontFamily: font.display, fontSize: 25, color: text.ink, margin: '8px 0 0' }}>{current.en}</p>
          <p style={{ fontFamily: font.body, fontSize: 13.5, fontStyle: 'italic', color: text.onCream, margin: '4px 0 0' }}>
            {current.es}
          </p>
        </div>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {options.map((opt) => {
            const isAnswer = opt === current.re[0];
            const isPicked = coPick === opt;
            let bg = surface.cream;
            let borderColor = pastel(INDIGO, 0.6);
            if (coPick != null && isAnswer) {
              bg = pastel('#0e9f6e', 0.74);
              borderColor = '#0e9f6e';
            } else if (coPick != null && isPicked && !isAnswer) {
              bg = pastel('#e11d48', 0.78);
              borderColor = '#e11d48';
            }
            return (
              <button
                key={opt}
                disabled={coPick != null}
                onClick={() => handlePick(opt)}
                style={{
                  fontFamily: font.display,
                  fontSize: 17,
                  color: text.ink,
                  background: bg,
                  border: `2px solid ${borderColor}`,
                  borderRadius: 5,
                  padding: '9px 18px',
                  cursor: coPick != null ? 'default' : 'pointer'
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
