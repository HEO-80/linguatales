'use client';

import { useState, useMemo } from 'react';
import { useAppState } from '@/state/AppStateContext';
import { getLanguageData } from '@/data';
import GameShell from '../GameShell';
import WordBlock from './WordBlock';
import DropZone from './DropZone';
import { seededShuffle } from '../seededShuffle';

/**
 * Se monta con `key={lang}` desde Home — cambiar de idioma remonta el
 * componente entero, así que todo su estado (banco, huecos, comprobación)
 * arranca limpio sin necesidad de un efecto de sincronización.
 */
export default function WordOrderGame() {
  const { lang } = useAppState();
  const { story } = getLanguageData(lang);

  // Frase objetivo = la frase 3 del relato del idioma activo.
  const targetSentence = story.sentences[2] || story.sentences[0];
  const targetWords = useMemo(() => targetSentence.text.split(' '), [targetSentence]);

  const [available, setAvailable] = useState(() =>
    seededShuffle(targetWords.map((_, i) => i), targetSentence.text)
  );
  const [placed, setPlaced] = useState([]);
  const [checked, setChecked] = useState(false);
  const [correctness, setCorrectness] = useState([]);

  const placeWord = (idx) => {
    if (checked || !available.includes(idx)) return;
    setAvailable((a) => a.filter((x) => x !== idx));
    setPlaced((p) => [...p, idx]);
  };

  const unplaceWord = (idx) => {
    if (checked || !placed.includes(idx)) return;
    setPlaced((p) => p.filter((x) => x !== idx));
    setAvailable((a) => [...a, idx]);
  };

  const handleCheck = () => {
    if (placed.length !== targetWords.length) return;
    setCorrectness(placed.map((wordIdx, pos) => wordIdx === pos));
    setChecked(true);
  };

  const handleReset = () => {
    // Solo se llama desde un clic de usuario (nunca en SSR), así que aquí
    // sí es seguro variar la semilla para que el banco se vea distinto.
    setAvailable(seededShuffle(targetWords.map((_, i) => i), targetSentence.text + Date.now()));
    setPlaced([]);
    setChecked(false);
    setCorrectness([]);
  };

  const missing = targetWords.length - placed.length;
  const allCorrect = checked && correctness.every(Boolean);

  let feedback;
  if (checked) {
    feedback = allCorrect
      ? { text: `✓ Correcto — ${story.grammarNote}.`, tone: 'ok' }
      : { text: 'Casi. Revisa dónde va el adverbio.', tone: 'error' };
  } else if (missing === 0) {
    feedback = { text: 'Frase completa. Comprueba.', tone: 'ready' };
  } else {
    feedback = { text: `Faltan ${missing} palabra${missing === 1 ? '' : 's'}.`, tone: 'idle' };
  }

  return (
    <GameShell
      index="01"
      title="Ordena la frase"
      blurb={
        <>
          Arrastra cada palabra a su lugar para reconstruir la frase (o haz clic). Del relato <em>{story.title}</em>.
        </>
      }
      level={story.level}
      progress={`${placed.length} / ${targetWords.length}`}
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
