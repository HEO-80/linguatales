'use client';

import { useState, useMemo } from 'react';
import { useLangCode, useLevelCode } from '@/lib/routes/useRouteCodes';
import { getLevelContent } from '@/data';
import { SECTION } from '@/theme/languages';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import GameShell from '../GameShell';
import { seededShuffle } from '../seededShuffle';

function stripPunctuation(word) {
  return word.replace(/[.,!?¿¡"'“”]/g, '');
}

/** Palabra más larga de la frase (evitando la primera, que suele ser el
 * sujeto en mayúscula) — heurística simple sin depender de un POS tagger. */
function pickBlankIndex(words) {
  let bestIdx = words.length > 1 ? 1 : 0;
  let bestLen = 0;
  words.forEach((w, i) => {
    if (i === 0 && words.length > 1) return;
    const len = stripPunctuation(w).length;
    if (len > bestLen) {
      bestLen = len;
      bestIdx = i;
    }
  });
  return bestIdx;
}

/** Distractores: palabras de otras frases del mismo relato, para que las
 * opciones sigan siendo del vocabulario que se acaba de leer. */
function buildOptions(answer, story, seed) {
  const answerClean = stripPunctuation(answer);
  const pool = new Set();
  story.sentences.forEach((s) => {
    s.text.split(' ').forEach((w) => {
      const clean = stripPunctuation(w);
      if (clean.length >= 3 && clean.toLowerCase() !== answerClean.toLowerCase()) {
        pool.add(clean);
      }
    });
  });
  const distractors = seededShuffle([...pool], seed).slice(0, 2);
  return seededShuffle([answerClean, ...distractors], `${seed}-order`);
}

/** Juego 02 — frase con un hueco, elige la palabra correcta entre varias. */
export default function GapFillGame() {
  const lang = useLangCode();
  const level = useLevelCode();
  const { featuredStory: story } = getLevelContent(lang, level);
  const { surface, text, font } = useTheme();

  const targetSentence = story.sentences[1] || story.sentences[0];
  const words = useMemo(() => targetSentence.text.split(' '), [targetSentence]);
  const blankIndex = useMemo(() => pickBlankIndex(words), [words]);
  const answer = stripPunctuation(words[blankIndex]);
  const options = useMemo(
    () => buildOptions(words[blankIndex], story, targetSentence.text),
    [words, blankIndex, story, targetSentence]
  );

  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (!selected) return;
    setChecked(true);
  };

  const handleReset = () => {
    setSelected(null);
    setChecked(false);
  };

  const isCorrect = checked && selected?.toLowerCase() === answer.toLowerCase();

  let feedback;
  if (checked) {
    feedback = isCorrect
      ? { text: `✓ Correcto — ${story.subtitle ?? story.grammarNote}.`, tone: 'ok' }
      : { text: `Casi. La palabra correcta era "${answer}".`, tone: 'error' };
  } else if (selected) {
    feedback = { text: 'Frase completa. Comprueba.', tone: 'ready' };
  } else {
    feedback = { text: 'Elige la palabra que falta.', tone: 'idle' };
  }

  const sentenceWithBlank = words.map((w, i) => (i === blankIndex ? '_____' : w)).join(' ');

  return (
    <GameShell
      index="02"
      title="Elige el hueco"
      blurb={
        <>
          Completa el hueco con la palabra correcta. Del relato <em>{story.title}</em>.
        </>
      }
      level={story.level}
      progress={`${selected ? 1 : 0} / 1`}
      accent={SECTION.gapFill.color}
      canCheck={!!selected && !checked}
      onCheck={handleCheck}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p
          style={{
            fontFamily: font.display,
            fontSize: 19,
            color: text.ink,
            background: surface.cream,
            borderRadius: 5,
            padding: '14px 16px',
            margin: 0
          }}
        >
          {sentenceWithBlank}
        </p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {options.map((opt) => {
            const isSelected = selected === opt;
            const isAnswer = opt.toLowerCase() === answer.toLowerCase();
            let bg = surface.cream;
            let borderColor = pastel(SECTION.gapFill.color, 0.6);
            if (checked && isAnswer) {
              bg = pastel('#0e9f6e', 0.74);
              borderColor = '#0e9f6e';
            } else if (checked && isSelected && !isAnswer) {
              bg = pastel('#e11d48', 0.78);
              borderColor = '#e11d48';
            } else if (isSelected) {
              borderColor = SECTION.gapFill.color;
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
