'use client';

import { useState } from 'react';
import { useAppState } from '@/state/AppStateContext';
import { getLanguageData } from '@/data';
import { SECTION } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { speakSentence, isSpeechSupported, useIsSpeechSupported } from '@/lib/azure/tts';
import GameShell from '../GameShell';

function normalize(sentence) {
  return sentence
    .toLowerCase()
    .replace(/[.,!?¿¡"'“”]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Juego 03 — escucha la frase (SpeechSynthesis) y escríbela tal cual. */
export default function DictationGame() {
  const { lang } = useAppState();
  const { story } = getLanguageData(lang);
  const { surface, text, font } = useTheme();
  const speechSupported = useIsSpeechSupported();

  const targetSentence = story.sentences[3] || story.sentences[0];

  const [input, setInput] = useState('');
  const [checked, setChecked] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlay = async () => {
    if (!isSpeechSupported() || playing) return;
    setPlaying(true);
    try {
      await speakSentence(targetSentence.text, { lang, rate: 0.85 });
    } catch {
      // Sin soporte o interrumpido — el botón se puede volver a pulsar.
    } finally {
      setPlaying(false);
    }
  };

  const handleCheck = () => {
    if (!input.trim()) return;
    setChecked(true);
  };

  const handleReset = () => {
    setInput('');
    setChecked(false);
  };

  const isCorrect = checked && normalize(input) === normalize(targetSentence.text);

  let feedback;
  if (checked) {
    feedback = isCorrect
      ? { text: `✓ Correcto — ${story.grammarNote}.`, tone: 'ok' }
      : { text: `Casi. La frase era: "${targetSentence.text}"`, tone: 'error' };
  } else if (input.trim()) {
    feedback = { text: 'Comprueba lo que has escrito.', tone: 'ready' };
  } else {
    feedback = { text: 'Escucha la frase y escribe lo que oigas.', tone: 'idle' };
  }

  return (
    <GameShell
      index="03"
      title="Dictado"
      blurb={
        <>
          Escucha la frase y escríbela tal cual. Del relato <em>{story.title}</em>.
        </>
      }
      level={story.level}
      progress={`${input.trim() ? 1 : 0} / 1`}
      accent={SECTION.dictation.color}
      canCheck={!!input.trim() && !checked}
      onCheck={handleCheck}
      onReset={handleReset}
      feedback={feedback}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={handlePlay}
            disabled={!speechSupported || playing}
            style={{
              background: SECTION.dictation.color,
              color: '#fffdf7',
              fontFamily: font.body,
              fontSize: 13.5,
              fontWeight: 600,
              borderRadius: 5,
              padding: '10px 18px',
              opacity: !speechSupported ? 0.5 : 1
            }}
          >
            {playing ? '■ Reproduciendo…' : '▶ Escuchar frase'}
          </button>
          {!speechSupported && (
            <span style={{ fontFamily: font.body, fontSize: 12, color: text.onCream }}>
              Tu navegador no soporta lectura en voz alta.
            </span>
          )}
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={checked}
          placeholder="Escribe aquí lo que oigas…"
          rows={2}
          style={{
            fontFamily: font.display,
            fontSize: 16,
            color: text.ink,
            background: surface.cream,
            border: `1px solid ${surface.border}`,
            borderRadius: 5,
            padding: '12px 14px',
            resize: 'none'
          }}
        />
      </div>
    </GameShell>
  );
}
