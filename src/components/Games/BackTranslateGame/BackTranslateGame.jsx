'use client';

import { useMemo, useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import { evaluate } from '@/lib/backtrans';
import { grammarWhy } from '@/lib/whyFeedback';
import { buildBacktransBank } from './buildBacktransBank';
import GameShell from '../GameShell';

export const ROSE = '#be185d';
const MINT = '#0e9f6e';
const CRIMSON = '#e11d48';
const AMBER = '#e0a80c';

/**
 * Juego 10 — Traducción inversa. Escribe la frase en inglés desde cero (sin
 * opciones) a partir del español; se corrige por reglas (src/lib/backtrans.js),
 * no por IA (§2 linguatales-traduccion-inversa-spec.md).
 */
export default function BackTranslateGame() {
  const { surface, text, font } = useTheme();
  const {
    lang, level, story,
    phrBlock, btIndex, setBtIndex,
    btDoneByBlock, markBacktransDone, gradeSrs
  } = useReader();

  const blocks = phrasesOf(lang, level);
  const block = blocks[phrBlock];
  const bank = useMemo(() => buildBacktransBank(block), [block]);
  const total = bank.length;
  const current = bank[btIndex];
  const done = btDoneByBlock[block.num] || {};
  const isDone = !!done[btIndex];

  const [inputValue, setInputValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!checked) {
      if (!inputValue.trim()) return;
      const evalResult = evaluate(inputValue, current);
      setResult(evalResult);
      setChecked(true);
      gradeSrs(
        `ti:${block.num}:${current.id}`,
        { kind: 'Traducción inversa', q: current.q, a: current.a, hint: current.hint },
        evalResult.exact ? 4 : 0
      );
      if (evalResult.exact) markBacktransDone(block.num, btIndex);
      return;
    }
    setBtIndex((btIndex + 1) % total);
    setInputValue('');
    setChecked(false);
    setResult(null);
  };

  const handleClear = () => {
    setInputValue('');
    setChecked(false);
    setResult(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  let feedback;
  if (!checked) {
    feedback = { text: 'Escríbelo en inglés y pulsa Comprobar (o Enter).', tone: 'idle' };
  } else if (result.exact) {
    feedback = { text: '✓ Exacta.', tone: 'ok' };
  } else {
    feedback = { text: '✕ Incorrecto.', tone: 'error' };
  }
  // Feedback del "por qué" (§1, quinta entrega): regla de gramática del
  // relato, elegida por la que más comparte con la respuesta modelo.
  const why = checked && !result.exact ? grammarWhy(story, current.a, current.rule) : null;

  const inputBorder = !checked ? pastel(ROSE, 0.6) : result.exact ? MINT : CRIMSON;
  const composedBg = pastel(ROSE, 0.94);

  return (
    <GameShell
      index="10"
      title="Traducción inversa"
      prompt="Escribe la frase en inglés desde cero, sin opciones. Sale de las frases hechas de este nivel."
      level={level}
      progress={
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {isDone && (
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                color: '#fffdf7',
                background: MINT,
                borderRadius: 4,
                padding: '3px 7px'
              }}
            >
              ✓ Hecho
            </span>
          )}
          <span>{Object.keys(done).length} / {total}</span>
        </div>
      }
      accent={ROSE}
      canCheck={checked || inputValue.trim().length > 0}
      checkLabel={checked ? 'Siguiente' : 'Comprobar'}
      onCheck={handleCheck}
      onReset={handleClear}
      resetLabel="Borrar"
      feedback={feedback}
      why={why}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div
          style={{
            background: 'rgba(255,255,255,.7)',
            borderLeft: `5px solid ${ROSE}`,
            borderRadius: 5,
            padding: '16px 18px'
          }}
        >
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              color: fg(ROSE, composedBg, 4.6)
            }}
          >
            Escríbelo en inglés
          </span>
          <p style={{ fontFamily: font.display, fontSize: 25, color: text.ink, margin: '8px 0 0' }}>{current.q}</p>
        </div>

        <input
          value={inputValue}
          disabled={checked}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type it in English…"
          style={{
            fontFamily: font.display,
            fontSize: 18,
            color: text.ink,
            background: surface.cream,
            border: `2px solid ${inputBorder}`,
            borderRadius: 5,
            padding: '10px 14px',
            width: '100%'
          }}
        />

        {checked && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {result.marks.map((m, i) => (
                <span
                  key={`m${i}`}
                  style={{
                    fontFamily: font.display,
                    fontSize: 15,
                    color: '#191713',
                    background: pastel(m.ok ? MINT : CRIMSON, 0.62),
                    borderRadius: 4,
                    padding: '3px 7px'
                  }}
                >
                  {m.w}
                </span>
              ))}
              {result.missing.map((w, i) => (
                <span
                  key={`x${i}`}
                  style={{
                    fontFamily: font.display,
                    fontSize: 15,
                    color: fg(AMBER, surface.cream, 4.6),
                    background: 'transparent',
                    border: `1.5px dotted ${AMBER}`,
                    borderRadius: 4,
                    padding: '3px 7px'
                  }}
                >
                  {w}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ fontFamily: font.display, fontSize: 18, color: text.ink }}>{result.model}</span>
              <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{current.hint}</span>
            </div>
          </div>
        )}
      </div>
    </GameShell>
  );
}
