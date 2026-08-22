'use client';

import { useState, useRef, useMemo } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { shuffleSeed } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import GameShell from '../GameShell';
import RoundNav from '../RoundNav';

const ROUNDS = [
  { label: 'Expresiones', prompt: 'Une cada phrasal verb con su significado.' },
  { label: 'Gramática', prompt: 'Une cada regla gramatical con su ejemplo del relato.' }
];

/**
 * Juego 03 — Empareja la expresión. Dos rondas navegables (expresiones y
 * gramática), cada una con sus propias parejas — solo se monta la pestaña
 * cuando story.phrasals tiene 3 o más entradas (GameTabs la oculta si no).
 * No hay paso de "comprobar" separado: cada click en la pareja derecha ya
 * resuelve el par.
 */
export default function MatchIdiomGame() {
  const { surface, text, font } = useTheme();
  const { level, story, storyProgress, recordResult } = useReader();

  const [roundIndex, setRoundIndex] = useState(0);

  const pairs = useMemo(
    () =>
      roundIndex === 0
        ? story.phrasals.map((p) => ({ left: p.verb, right: p.mean }))
        : story.grammar.map((g) => ({ left: g.name, right: g.ex })),
    [roundIndex, story]
  );
  const rightItems = useMemo(
    () => shuffleSeed(pairs.map((p) => p.right), `${story.title}-${roundIndex}`),
    [pairs, story.title, roundIndex]
  );

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [matched, setMatched] = useState(() => new Set());
  const [wrongFlash, setWrongFlash] = useState(null); // { left, right } | null
  const [resultMsg, setResultMsg] = useState(null);
  const flashTimer = useRef(null);

  const handlePickLeft = (left) => {
    if (matched.has(left)) return;
    setSelectedLeft(left);
    setResultMsg(null);
  };

  const handlePickRight = (right) => {
    if (!selectedLeft) return;
    const pair = pairs.find((p) => p.left === selectedLeft);

    if (pair.right === right) {
      const nextMatched = new Set(matched);
      nextMatched.add(selectedLeft);
      setMatched(nextMatched);
      const roundDone = nextMatched.size === pairs.length;
      recordResult('match', { index: roundIndex, solved: roundDone });
      setResultMsg(
        roundDone
          ? { text: `✓ Los ${pairs.length} pares de esta ronda, emparejados.`, tone: 'ok' }
          : { text: '✓ Correcto.', tone: 'ok' }
      );
    } else {
      setWrongFlash({ left: selectedLeft, right });
      setResultMsg({ text: 'Ese no. Vuelve a mirar la frase del relato.', tone: 'error' });
      if (flashTimer.current) clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => setWrongFlash(null), 650);
    }
    setSelectedLeft(null);
  };

  const resetRound = () => {
    setSelectedLeft(null);
    setMatched(new Set());
    setResultMsg(null);
    setWrongFlash(null);
  };

  const handleReset = () => resetRound();
  const handleNavigate = (i) => {
    setRoundIndex(i);
    resetRound();
  };

  const feedback =
    resultMsg ??
    (selectedLeft
      ? { text: 'Ahora elige su pareja.', tone: 'ready' }
      : { text: 'Toca un elemento de la izquierda.', tone: 'idle' });

  return (
    <GameShell
      index="03"
      title="Empareja la expresión"
      prompt={
        <>
          {ROUNDS[roundIndex].prompt} Del relato <em>{story.title}</em>.
        </>
      }
      level={level}
      progress={
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <RoundNav
            index={roundIndex}
            total={ROUNDS.length}
            onNavigate={handleNavigate}
            resolved={storyProgress.match.solved.includes(roundIndex)}
            accent="#7c3aed"
          />
          <span>{storyProgress.match.solved.length} / {ROUNDS.length}</span>
        </div>
      }
      accent="#7c3aed"
      canCheck={false}
      onCheck={() => {}}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {pairs.map((p) => {
            const isMatched = matched.has(p.left);
            const isSelected = selectedLeft === p.left;
            const isWrong = wrongFlash?.left === p.left;
            let bg = surface.cream;
            if (isMatched) bg = pastel('#0e9f6e', 0.72);
            else if (isWrong) bg = pastel('#e11d48', 0.78);
            else if (isSelected) bg = pastel('#7c3aed', 0.68);
            return (
              <button
                key={p.left}
                disabled={isMatched}
                onClick={() => handlePickLeft(p.left)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                  fontFamily: font.display,
                  fontSize: 17,
                  fontWeight: 600,
                  color: text.ink,
                  background: bg,
                  border: `2px solid ${isSelected ? '#7c3aed' : 'transparent'}`,
                  borderRadius: 5,
                  padding: '10px 14px',
                  cursor: isMatched ? 'default' : 'pointer',
                  textAlign: 'left'
                }}
              >
                <span>{p.left}</span>
                {isMatched && <span style={{ color: '#0e9f6e', fontWeight: 700 }}>✓</span>}
              </button>
            );
          })}
        </div>

        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rightItems.map((r) => {
            const matchedPair = pairs.find((p) => p.right === r && matched.has(p.left));
            const isMatched = !!matchedPair;
            const isWrong = wrongFlash?.right === r;
            let bg = surface.cream;
            if (isMatched) bg = pastel('#0e9f6e', 0.72);
            else if (isWrong) bg = pastel('#e11d48', 0.78);
            return (
              <button
                key={r}
                disabled={isMatched || !selectedLeft}
                onClick={() => handlePickRight(r)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 8,
                  fontFamily: font.body,
                  fontSize: 15,
                  color: text.ink,
                  background: bg,
                  border: '2px solid transparent',
                  borderRadius: 5,
                  padding: '10px 14px',
                  cursor: isMatched || !selectedLeft ? 'default' : 'pointer',
                  textAlign: 'left',
                  opacity: !isMatched && !selectedLeft ? 0.6 : 1
                }}
              >
                <span>{r}</span>
                {isMatched && <span style={{ color: '#0e9f6e', fontWeight: 700 }}>✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </GameShell>
  );
}
