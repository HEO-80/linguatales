'use client';

import { useState } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import GameShell from '../GameShell';

/**
 * Juego 02 — Elige el hueco. Una ronda por frase de story.gaps; el hueco y
 * las opciones son literales del dato, sin heurística de blank-picking.
 */
export default function GapFillGame() {
  const { surface, text, font } = useTheme();
  const { level, story, storyProgress, recordResult } = useReader();

  const [roundIndex, setRoundIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const gap = story.gaps[roundIndex];
  const isCorrect = checked && selected?.toLowerCase() === gap.answer.toLowerCase();
  const isLastRound = roundIndex === story.gaps.length - 1;

  const handleCheck = () => {
    if (!checked) {
      if (!selected) return;
      const correct = selected.toLowerCase() === gap.answer.toLowerCase();
      const solvedCount = new Set([...storyProgress.gap.solved, ...(correct ? [roundIndex] : [])]).size;
      recordResult('gap', {
        solvedIndex: correct ? roundIndex : undefined,
        done: correct && solvedCount === story.gaps.length
      });
      setChecked(true);
      return;
    }
    if (isCorrect && !isLastRound) {
      setRoundIndex((i) => Math.min(i + 1, story.gaps.length - 1));
      setSelected(null);
      setChecked(false);
    }
  };

  const handleReset = () => {
    setSelected(null);
    setChecked(false);
  };

  let feedback;
  if (checked) {
    feedback = { text: gap.why, tone: isCorrect ? 'ok' : 'error' };
  } else if (selected) {
    feedback = { text: 'Frase completa. Comprueba.', tone: 'ready' };
  } else {
    feedback = { text: 'Elige la palabra que falta.', tone: 'idle' };
  }

  return (
    <GameShell
      index="02"
      title="Elige el hueco"
      prompt={
        <>
          Completa el hueco con la palabra correcta. Del relato <em>{story.title}</em>.
        </>
      }
      level={level}
      progress={`${storyProgress.gap.solved.length} / ${story.gaps.length}`}
      accent="#0891b2"
      canCheck={checked ? isCorrect && !isLastRound : !!selected}
      checkLabel={checked ? 'Siguiente frase' : 'Comprobar'}
      onCheck={handleCheck}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p
          style={{
            fontFamily: font.display,
            fontSize: 22,
            color: text.ink,
            background: surface.cream,
            borderRadius: 5,
            padding: '14px 16px',
            margin: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            alignItems: 'center'
          }}
        >
          {gap.s.map((w, i) =>
            w === '___' ? (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  minWidth: 84,
                  borderBottom: '2px dashed rgba(25,23,19,.4)',
                  textAlign: 'center'
                }}
              >
                {selected || ' '}
              </span>
            ) : (
              <span key={i}>{w}</span>
            )
          )}
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {gap.opts.map((opt) => {
            const isSelected = selected === opt;
            const isAnswer = opt.toLowerCase() === gap.answer.toLowerCase();
            let bg = surface.cream;
            let borderColor = pastel('#0891b2', 0.6);
            if (checked && isAnswer) {
              bg = pastel('#0e9f6e', 0.74);
              borderColor = '#0e9f6e';
            } else if (checked && isSelected && !isAnswer) {
              bg = pastel('#e11d48', 0.78);
              borderColor = '#e11d48';
            } else if (isSelected) {
              borderColor = '#0891b2';
            }
            return (
              <button
                key={opt}
                disabled={checked}
                onClick={() => setSelected(opt)}
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
      </div>
    </GameShell>
  );
}
