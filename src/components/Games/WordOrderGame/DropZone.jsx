'use client';

import { pastel } from '@/theme/color';
import WordBlock from './WordBlock';

/** "Tu frase": zona de destino + huecos punteados por palabra que falta. */
export default function DropZone({ placed, words, checked, correctness, totalLength, onWordClick, onDropWord }) {
  const missing = totalLength - placed.length;

  let bg = 'rgba(255,255,255,.62)';
  let borderColor = '#f97316';
  if (checked) {
    const allCorrect = correctness.every(Boolean);
    bg = pastel(allCorrect ? '#0e9f6e' : '#e11d48', 0.8);
    borderColor = allCorrect ? '#0e9f6e' : '#e11d48';
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const idx = Number(e.dataTransfer.getData('text/plain'));
        if (!Number.isNaN(idx)) onDropWord(idx);
      }}
      style={{
        minHeight: 78,
        background: bg,
        borderLeft: `5px solid ${borderColor}`,
        borderRadius: 5,
        boxShadow: 'inset 0 1px 3px rgba(25,23,19,.08)',
        padding: 12,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        alignItems: 'center'
      }}
    >
      {placed.map((idx, pos) => (
        <WordBlock
          key={idx}
          word={words[idx]}
          draggableIndex={idx}
          onClick={() => onWordClick(idx)}
          tone={checked ? (correctness[pos] ? 'ok' : 'error') : undefined}
        />
      ))}
      {Array.from({ length: missing }).map((_, i) => (
        <div
          key={`gap-${i}`}
          style={{ width: 58, height: 42, border: '2px dashed rgba(25,23,19,.25)', borderRadius: 5 }}
        />
      ))}
    </div>
  );
}
