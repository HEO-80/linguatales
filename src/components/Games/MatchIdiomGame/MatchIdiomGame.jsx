'use client';

import { useState, useRef, useMemo } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { shuffleSeed } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import GameShell from '../GameShell';

/**
 * Juego 03 — Empareja la expresión. Solo se monta cuando story.phrasals
 * tiene 3 o más entradas (GameTabs oculta la pestaña si no). No hay paso de
 * "comprobar" separado: cada click en un significado ya resuelve el par.
 */
export default function MatchIdiomGame() {
  const { surface, text, font } = useTheme();
  const { level, story, storyProgress, recordResult } = useReader();

  const pairs = story.phrasals;
  const meanings = useMemo(() => shuffleSeed(pairs.map((p) => p.mean), story.title), [pairs, story.title]);

  const [selectedVerb, setSelectedVerb] = useState(null);
  const [matched, setMatched] = useState(() => new Set());
  const [wrongFlash, setWrongFlash] = useState(null); // { verb, mean } | null
  const [resultMsg, setResultMsg] = useState(null);
  const flashTimer = useRef(null);

  const handlePickVerb = (verb) => {
    if (matched.has(verb)) return;
    setSelectedVerb(verb);
    setResultMsg(null);
  };

  const handlePickMeaning = (mean) => {
    if (!selectedVerb) return;
    const pair = pairs.find((p) => p.verb === selectedVerb);

    if (pair.mean === mean) {
      const nextMatched = new Set(matched);
      nextMatched.add(selectedVerb);
      setMatched(nextMatched);
      const done = nextMatched.size === pairs.length;
      recordResult('match', { pairs: nextMatched.size, done });
      setResultMsg(
        done
          ? { text: `✓ Los ${pairs.length} phrasal verbs del relato, emparejados.`, tone: 'ok' }
          : { text: '✓ Correcto.', tone: 'ok' }
      );
    } else {
      setWrongFlash({ verb: selectedVerb, mean });
      setResultMsg({ text: 'Ese no. Vuelve a mirar la frase del relato.', tone: 'error' });
      if (flashTimer.current) clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => setWrongFlash(null), 650);
    }
    setSelectedVerb(null);
  };

  const handleReset = () => {
    setSelectedVerb(null);
    setMatched(new Set());
    setResultMsg(null);
    setWrongFlash(null);
  };

  const feedback =
    resultMsg ??
    (selectedVerb
      ? { text: 'Ahora elige su significado.', tone: 'ready' }
      : { text: 'Toca una expresión de la izquierda.', tone: 'idle' });

  return (
    <GameShell
      index="03"
      title="Empareja la expresión"
      prompt={
        <>
          Une cada phrasal verb con su significado. Del relato <em>{story.title}</em>.
        </>
      }
      level={level}
      progress={`${storyProgress.match.pairs} / ${pairs.length}`}
      accent="#7c3aed"
      canCheck={false}
      onCheck={() => {}}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {pairs.map((p) => {
            const isMatched = matched.has(p.verb);
            const isSelected = selectedVerb === p.verb;
            const isWrong = wrongFlash?.verb === p.verb;
            let bg = surface.cream;
            if (isMatched) bg = pastel('#0e9f6e', 0.72);
            else if (isWrong) bg = pastel('#e11d48', 0.78);
            else if (isSelected) bg = pastel('#7c3aed', 0.68);
            return (
              <button
                key={p.verb}
                disabled={isMatched}
                onClick={() => handlePickVerb(p.verb)}
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
                <span>{p.verb}</span>
                {isMatched && <span style={{ color: '#0e9f6e', fontWeight: 700 }}>✓</span>}
              </button>
            );
          })}
        </div>

        <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {meanings.map((m) => {
            const matchedPair = pairs.find((p) => p.mean === m && matched.has(p.verb));
            const isMatched = !!matchedPair;
            const isWrong = wrongFlash?.mean === m;
            let bg = surface.cream;
            if (isMatched) bg = pastel('#0e9f6e', 0.72);
            else if (isWrong) bg = pastel('#e11d48', 0.78);
            return (
              <button
                key={m}
                disabled={isMatched || !selectedVerb}
                onClick={() => handlePickMeaning(m)}
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
                  cursor: isMatched || !selectedVerb ? 'default' : 'pointer',
                  textAlign: 'left',
                  opacity: !isMatched && !selectedVerb ? 0.6 : 1
                }}
              >
                <span>{m}</span>
                {isMatched && <span style={{ color: '#0e9f6e', fontWeight: 700 }}>✓</span>}
              </button>
            );
          })}
        </div>
      </div>
    </GameShell>
  );
}
