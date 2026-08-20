'use client';

import { useState } from 'react';
import { TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { seededShuffle } from '../seededShuffle';
import GameShell from '../GameShell';
import WordBlock from './WordBlock';
import DropZone from './DropZone';

/**
 * Juego 01 — Ordena la frase. Objetivo: el 2º párrafo del relato (índice 1).
 * La mitad de las palabras arranca ya colocada (semilla estable derivada
 * del propio relato); el resto se ordena arrastrando/tocando.
 */
export default function WordOrderGame() {
  const { level, story, storyProgress, recordResult } = useReader();

  const targetWords = story.paras[1].t.map((t) => t[TOKEN.TEXT]);
  const half = Math.floor(targetWords.length / 2);

  const [placed, setPlaced] = useState(() => Array.from({ length: half }, (_, i) => i));
  const [available, setAvailable] = useState(() =>
    seededShuffle(targetWords.map((_, i) => i).filter((i) => i >= half), story.paras[1].tr)
  );
  const [checked, setChecked] = useState(false);
  const [correctness, setCorrectness] = useState([]);

  const placeWord = (idx) => {
    if (checked || !available.includes(idx)) return;
    setAvailable((a) => a.filter((x) => x !== idx));
    setPlaced((p) => [...p, idx]);
  };

  const unplaceWord = (idx) => {
    if (checked || !placed.includes(idx) || idx < half) return;
    setPlaced((p) => p.filter((x) => x !== idx));
    setAvailable((a) => [...a, idx]);
  };

  const handleCheck = () => {
    if (placed.length !== targetWords.length) return;
    const nextCorrectness = placed.map((wordIdx, pos) => wordIdx === pos);
    setCorrectness(nextCorrectness);
    setChecked(true);
    const correctCount = nextCorrectness.filter(Boolean).length;
    recordResult('order', { done: correctCount === targetWords.length, best: correctCount });
  };

  const handleReset = () => {
    setPlaced(Array.from({ length: half }, (_, i) => i));
    setAvailable(seededShuffle(targetWords.map((_, i) => i).filter((i) => i >= half), story.paras[1].tr + Date.now()));
    setChecked(false);
    setCorrectness([]);
  };

  const missing = targetWords.length - placed.length;
  const allCorrect = checked && correctness.every(Boolean);

  let feedback;
  if (checked) {
    feedback = allCorrect
      ? { text: '✓ Correcto — así aparece en el relato.', tone: 'ok' }
      : { text: 'Casi. Fíjate en el orden sujeto + verbo + objeto.', tone: 'error' };
  } else if (missing === 0) {
    feedback = { text: 'Frase completa. Comprueba.', tone: 'ready' };
  } else {
    feedback = { text: `Faltan ${missing} palabra${missing === 1 ? '' : 's'}.`, tone: 'idle' };
  }

  return (
    <GameShell
      index="01"
      title="Ordena la frase"
      prompt={
        <>
          Arrastra cada palabra a su lugar para reconstruir la frase (o haz clic). Del relato <em>{story.title}</em>.
        </>
      }
      level={level}
      progress={`${storyProgress.order.best} / ${targetWords.length}`}
      accent="#f97316"
      canCheck={missing === 0 && !checked}
      onCheck={handleCheck}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <DropZone
          placed={placed}
          words={targetWords}
          checked={checked}
          correctness={correctness}
          totalLength={targetWords.length}
          onWordClick={unplaceWord}
          onDropWord={placeWord}
        />

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            const idx = Number(e.dataTransfer.getData('text/plain'));
            if (!Number.isNaN(idx)) unplaceWord(idx);
          }}
          style={{
            border: '1px dashed rgba(25,23,19,.28)',
            borderRadius: 5,
            padding: 12,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            minHeight: 58
          }}
        >
          {available.map((idx) => (
            <WordBlock key={idx} word={targetWords[idx]} draggableIndex={idx} onClick={() => placeWord(idx)} />
          ))}
        </div>
      </div>
    </GameShell>
  );
}
