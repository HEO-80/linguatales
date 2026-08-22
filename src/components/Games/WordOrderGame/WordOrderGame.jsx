'use client';

import { useState } from 'react';
import { TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { seededShuffle } from '../seededShuffle';
import GameShell from '../GameShell';
import RoundNav from '../RoundNav';
import WordBlock from './WordBlock';
import DropZone from './DropZone';

const halfOf = (len) => Math.floor(len / 2);

const initialPlaced = (len) => Array.from({ length: halfOf(len) }, (_, i) => i);

const initialAvailable = (words, seed) => {
  const half = halfOf(words.length);
  return seededShuffle(words.map((_, i) => i).filter((i) => i >= half), seed);
};

/**
 * Juego 01 — Ordena la frase. Una ronda por párrafo del relato (`orderIndex`,
 * navegable libremente como en 02/04/05). La mitad de las palabras arranca
 * ya colocada (semilla estable derivada del propio párrafo); el resto se
 * ordena arrastrando/tocando.
 */
export default function WordOrderGame() {
  const { level, story, storyProgress, recordResult } = useReader();

  const paraCount = story.paras.length;
  const [orderIndex, setOrderIndex] = useState(0);

  const targetWords = story.paras[orderIndex].t.map((t) => t[TOKEN.TEXT]);
  const half = halfOf(targetWords.length);

  const [placed, setPlaced] = useState(() => initialPlaced(targetWords.length));
  const [available, setAvailable] = useState(() => initialAvailable(targetWords, story.paras[orderIndex].tr));
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
    recordResult('order', { index: orderIndex, solved: nextCorrectness.every(Boolean) });
  };

  const resetRound = (idx, reseed) => {
    const words = story.paras[idx].t.map((t) => t[TOKEN.TEXT]);
    setPlaced(initialPlaced(words.length));
    setAvailable(initialAvailable(words, story.paras[idx].tr + (reseed ? Date.now() : '')));
    setChecked(false);
    setCorrectness([]);
  };

  const handleReset = () => resetRound(orderIndex, true);
  const handleNavigate = (i) => {
    setOrderIndex(i);
    resetRound(i, false);
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
      progress={
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <RoundNav
            index={orderIndex}
            total={paraCount}
            onNavigate={handleNavigate}
            resolved={storyProgress.order.solved.includes(orderIndex)}
            accent="#f97316"
          />
          <span>{storyProgress.order.solved.length} / {paraCount}</span>
        </div>
      }
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
