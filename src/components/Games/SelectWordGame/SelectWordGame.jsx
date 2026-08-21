'use client';

import { useMemo, useState } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES, TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { buildWordBank, buildAllEntries } from './buildWordBank';
import { buildDistractors } from './buildDistractors';
import GameShell from '../GameShell';
import RoundNav from '../RoundNav';

/**
 * Juego 04 — Selecciona la palabra. Alterna determinista entre modo
 * "choice" (4 opciones) y "write" (teclear la palabra) cada ronda.
 */
export default function SelectWordGame() {
  const { surface, text, font } = useTheme();
  const { level, story, storyProgress, recordResult } = useReader();

  const bank = useMemo(() => buildWordBank(story), [story]);
  const allEntries = useMemo(() => buildAllEntries(story), [story]);

  const [roundIndex, setRoundIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [writeAnswer, setWriteAnswer] = useState('');
  const [checked, setChecked] = useState(false);

  const entry = bank[roundIndex];
  const mode = roundIndex % 2 === 0 ? 'choice' : 'write';
  const text_ = entry.token[TOKEN.TEXT];
  const role = entry.token[TOKEN.ROLE];

  const options = useMemo(
    () => (mode === 'choice' ? buildDistractors(entry, allEntries, `${text_}-${roundIndex}`).map((e) => e.token[TOKEN.TEXT]) : []),
    [mode, entry, allEntries, text_, roundIndex]
  );

  const isCorrectChoice = mode === 'choice' && selected?.toLowerCase() === text_.toLowerCase();
  const isCorrectWrite = mode === 'write' && writeAnswer.trim().toLowerCase() === text_.toLowerCase();
  const isCorrect = checked && (mode === 'choice' ? isCorrectChoice : isCorrectWrite);

  const canCheck = checked
    ? true
    : mode === 'choice'
    ? !!selected
    : writeAnswer.trim().length > 0;

  const handleCheck = () => {
    if (!checked) {
      const correct = mode === 'choice' ? isCorrectChoice : isCorrectWrite;
      recordResult('word', { index: roundIndex, correct, total: bank.length });
      setChecked(true);
      return;
    }
    // "Siguiente palabra"
    setRoundIndex((i) => (i + 1) % bank.length);
    setSelected(null);
    setWriteAnswer('');
    setChecked(false);
  };

  const handleReset = () => {
    setSelected(null);
    setWriteAnswer('');
    setChecked(false);
  };

  const handleNavigate = (i) => {
    setRoundIndex(i);
    setSelected(null);
    setWriteAnswer('');
    setChecked(false);
  };

  let feedback;
  if (checked) {
    feedback = isCorrect
      ? { text: '✓ Correcto.', tone: 'ok' }
      : { text: `Casi. Era "${text_}".`, tone: 'error' };
  } else if (mode === 'choice' && selected) {
    feedback = { text: 'Confirma tu respuesta.', tone: 'ready' };
  } else if (mode === 'write' && writeAnswer) {
    feedback = { text: 'Confirma tu respuesta.', tone: 'ready' };
  } else {
    feedback = { text: 'Adivina la palabra a partir de la pista.', tone: 'idle' };
  }

  const hint = `${text_[0]}${'_'.repeat(Math.max(text_.length - 1, 0))} (${text_.length} letras)`;

  return (
    <GameShell
      index="04"
      title="Selecciona la palabra"
      prompt={
        <>
          Adivina la palabra a partir de su función y su significado. Del relato <em>{story.title}</em>.
        </>
      }
      level={level}
      progress={
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <RoundNav
            index={roundIndex}
            total={bank.length}
            onNavigate={handleNavigate}
            resolved={storyProgress.word.correctIdx.includes(roundIndex)}
            accent="#be185d"
          />
          <span>{storyProgress.word.correct} / {bank.length}</span>
        </div>
      }
      accent="#be185d"
      canCheck={canCheck}
      checkLabel={checked ? 'Siguiente palabra' : 'Comprobar'}
      onCheck={handleCheck}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div
          style={{
            background: surface.cream,
            borderRadius: 5,
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}
        >
          <span
            style={{
              alignSelf: 'flex-start',
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              color: '#fffdf7',
              background: ROLES[role].color,
              borderRadius: 4,
              padding: '3px 8px'
            }}
          >
            {ROLES[role].label}
          </span>
          <span style={{ fontFamily: font.body, fontSize: 14, color: text.ink }}>{entry.token[TOKEN.EXPLAIN]}</span>
          <span style={{ fontFamily: font.body, fontSize: 14, fontStyle: 'italic', color: text.onCream }}>
            {entry.token[TOKEN.TRANSLATION]}
          </span>
        </div>

        {mode === 'choice' ? (
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {options.map((opt) => {
              const isSelected = selected === opt;
              const isAnswer = opt.toLowerCase() === text_.toLowerCase();
              let bg = surface.cream;
              let borderColor = pastel('#be185d', 0.6);
              if (checked && isAnswer) {
                bg = pastel('#0e9f6e', 0.74);
                borderColor = '#0e9f6e';
              } else if (checked && isSelected && !isAnswer) {
                bg = pastel('#e11d48', 0.78);
                borderColor = '#e11d48';
              } else if (isSelected) {
                borderColor = '#be185d';
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
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {!checked && (
              <span style={{ fontFamily: font.mono, fontSize: 12, color: text.onCream }}>{hint}</span>
            )}
            <input
              value={writeAnswer}
              disabled={checked}
              onChange={(e) => setWriteAnswer(e.target.value)}
              placeholder="Escribe la palabra…"
              style={{
                fontFamily: font.display,
                fontSize: 18,
                color: text.ink,
                background: surface.cream,
                border: `2px solid ${checked ? (isCorrect ? '#0e9f6e' : '#e11d48') : pastel('#be185d', 0.6)}`,
                borderRadius: 5,
                padding: '10px 14px',
                maxWidth: 260
              }}
            />
          </div>
        )}
      </div>
    </GameShell>
  );
}
