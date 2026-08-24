'use client';

import { useMemo } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { srsStatus, SRS_STATUS, SRS_STATUS_COLOR, SRS_STATUS_LABEL } from '@/lib/srs';
import { seededShuffle } from '@/components/Games/seededShuffle';
import PlayButton from './PlayButton';
import { AMBER, INDIGO } from './PhrasesSection';

const MINT = '#0e9f6e';
const CARMIN = '#e11d48';

/**
 * src/components/Phrases/PhraseBlockPanel.jsx
 * Panel del bloque abierto (§1-3 linguatales-frases-de-uno-en-uno-spec.md):
 * una frase a la vez con flechas + contador; el test del bloque solo se
 * monta cuando se han visto las diez, y responde con tres opciones en vez
 * de "ver respuesta".
 */

/** Dos distractores de otras frases del mismo bloque, rotados por índice —
 * la fuente es block.items (siempre las 10 frases), no testList (que puede
 * traer menos de 10 preguntas todavía). Se deduplica frente a la correcta y
 * entre sí. */
function pickDistractors(pool, correctIdx, i) {
  const others = pool.filter((_, idx) => idx !== correctIdx);
  const n = others.length;
  const d1 = others[(i * 3 + 1) % n];
  let d2 = others[(i * 3 + 2) % n];
  if (d2 === d1) d2 = others[(i * 3 + 3) % n];
  return [d1, d2];
}

function arrowStyle(accentColor, cream) {
  return {
    width: 30,
    height: 30,
    borderRadius: 4,
    background: cream,
    border: `1px solid ${pastel(accentColor, 0.5)}`,
    color: fg(accentColor, cream, 4.6),
    fontFamily: 'inherit',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    flexShrink: 0
  };
}

export default function PhraseBlockPanel({ block }) {
  const { surface, text, font, shadow } = useTheme();
  const {
    phrRow, goPhraseRow,
    phrSeen,
    phrTIndex, phrTPick, setPhrTPick, goPhraseTest,
    srsCards, srsDay
  } = useReader();

  const cream = surface.cream;
  const items = block.items;
  const total = items.length;
  const current = items[phrRow];

  // §1 linguatales-conectores-spec.md: el modelo pasa de `test` (una sola
  // pregunta) a `tests` (varias). Si un bloque solo trae el `test` viejo, se
  // envuelve en un array de una entrada — la UI siempre lee `tests`.
  const testList = block.tests ?? (block.test ? [block.test] : []);
  const totalTests = testList.length;
  const testI = Math.min(phrTIndex, Math.max(totalTests - 1, 0));
  const currentTest = testList[testI];

  // El desbloqueo cuenta índices DISTINTOS visitados (phrSeen), no el índice
  // más alto — si mirara el máximo, un solo "‹" desde la frase 0 daría la
  // vuelta a la última y desbloquearía el test al instante.
  const unlocked = phrSeen.size >= total;

  const options = useMemo(() => {
    if (!currentTest) return [];
    const pool = items.map((it) => it.en);
    const correctIdx = pool.indexOf(currentTest.a);
    const [d1, d2] = pickDistractors(pool, correctIdx, testI);
    return seededShuffle([currentTest.a, d1, d2], String(101 + testI));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.num, testI]);

  const isCorrectPick = phrTPick != null && phrTPick === currentTest?.a;

  const handlePick = (opt) => {
    if (phrTPick != null) return;
    setPhrTPick(opt);
  };

  const kickerStyle = {
    fontFamily: font.mono,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: fg(AMBER, cream, 4.6)
  };

  const counterPill = (color, bg) => ({
    fontFamily: font.mono,
    fontSize: 11,
    fontWeight: 700,
    color: fg(color, bg, 5),
    background: bg,
    borderRadius: 4,
    padding: '4px 10px'
  });

  return (
    <div
      style={{
        background: cream,
        borderTop: `4px solid ${AMBER}`,
        borderRadius: 6,
        boxShadow: shadow.base,
        padding: '20px 22px 22px',
        marginTop: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        <span style={kickerStyle}>Bloque {block.num} · {block.title}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button aria-label="Frase anterior" onClick={() => goPhraseRow(-1, total)} style={arrowStyle(AMBER, cream)}>
            ‹
          </button>
          <span style={counterPill(AMBER, pastel(AMBER, 0.8))}>{phrRow + 1} / {total}</span>
          <button aria-label="Frase siguiente" onClick={() => goPhraseRow(1, total)} style={arrowStyle(AMBER, cream)}>
            ›
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <PlayButton id={`ph${phrRow}`} text={current.en} color={AMBER} />
            <span style={{ fontFamily: font.display, fontSize: 24, color: text.ink }}>{current.en}</span>
          </div>
          <span style={{ fontFamily: font.body, fontSize: 14, fontStyle: 'italic', color: text.onCream, marginLeft: 40 }}>
            {current.es}
          </span>
          <div
            style={{
              borderTop: `1px dashed ${INDIGO}`,
              marginTop: 8,
              paddingTop: 8,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <PlayButton id={`re${phrRow}`} text={current.re[0]} color={INDIGO} />
              <span style={{ fontFamily: font.body, fontSize: 16, color: fg(INDIGO, cream, 4.6) }}>
                <span style={{ fontFamily: font.mono }}>↳</span> {current.re[0]}
              </span>
            </div>
            <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: text.onCream, marginLeft: 32 }}>
              {current.re[1]}
            </span>
          </div>
        </div>

        <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0 }}>
          <span style={{ fontFamily: font.body, fontSize: 13.5, lineHeight: 1.5, color: text.ink }}>{current.ej}</span>
          {(() => {
            const status = srsStatus(srsCards[`ph:${block.num}:${phrRow}`], srsDay);
            if (status === SRS_STATUS.UNSEEN) return null;
            const color = SRS_STATUS_COLOR[status];
            return (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.6px',
                    textTransform: 'uppercase',
                    color: fg(color, cream, 4.6)
                  }}
                >
                  {SRS_STATUS_LABEL[status].toUpperCase()}
                </span>
              </span>
            );
          })()}
          <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{current.tip}</span>
        </div>
      </div>

      {!unlocked && (
        <div
          style={{
            background: pastel(AMBER, 0.85),
            borderLeft: `4px solid ${pastel(AMBER, 0.4)}`,
            borderRadius: 5,
            padding: '12px 16px'
          }}
        >
          <span style={{ fontFamily: font.mono, fontSize: 11, color: fg(AMBER, pastel(AMBER, 0.85), 5) }}>
            Pasa las {total} frases y aparece el test del bloque · {phrSeen.size} de {total} vistas
          </span>
        </div>
      )}

      {unlocked && currentTest && (
        <div
          style={{
            background: pastel(MINT, 0.82),
            borderLeft: `4px solid ${MINT}`,
            borderRadius: 5,
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: fg(MINT, pastel(MINT, 0.82), 5)
              }}
            >
              Test del bloque
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                aria-label="Pregunta anterior"
                onClick={() => goPhraseTest(-1, totalTests)}
                disabled={totalTests <= 1}
                style={{ ...arrowStyle(MINT, cream), opacity: totalTests <= 1 ? 0.5 : 1, cursor: totalTests <= 1 ? 'default' : 'pointer' }}
              >
                ‹
              </button>
              <span style={counterPill(MINT, cream)}>{testI + 1} / {totalTests}</span>
              <button
                aria-label="Pregunta siguiente"
                onClick={() => goPhraseTest(1, totalTests)}
                disabled={totalTests <= 1}
                style={{ ...arrowStyle(MINT, cream), opacity: totalTests <= 1 ? 0.5 : 1, cursor: totalTests <= 1 ? 'default' : 'pointer' }}
              >
                ›
              </button>
            </div>
          </div>

          <span style={{ fontFamily: font.display, fontSize: 19, color: text.ink }}>{currentTest.q}</span>

          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {options.map((opt) => {
              const isAnswer = opt === currentTest.a;
              const isPicked = phrTPick === opt;
              let bg = cream;
              let borderColor = pastel(MINT, 0.6);
              if (phrTPick != null && isAnswer) {
                bg = pastel(MINT, 0.74);
                borderColor = MINT;
              } else if (phrTPick != null && isPicked && !isAnswer) {
                bg = pastel(CARMIN, 0.78);
                borderColor = CARMIN;
              }
              return (
                <button
                  key={opt}
                  disabled={phrTPick != null}
                  onClick={() => handlePick(opt)}
                  style={{
                    fontFamily: font.display,
                    fontSize: 16,
                    color: text.ink,
                    background: bg,
                    border: `2px solid ${borderColor}`,
                    borderRadius: 5,
                    padding: '9px 16px',
                    cursor: phrTPick != null ? 'default' : 'pointer'
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {phrTPick != null && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span
                style={{
                  fontFamily: font.display,
                  fontSize: 15,
                  fontWeight: 600,
                  color: isCorrectPick ? fg(MINT, cream, 4.6) : fg(CARMIN, cream, 4.6)
                }}
              >
                {isCorrectPick ? `✓ ${currentTest.a}` : `✕ Era: ${currentTest.a}`}
              </span>
              <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{currentTest.note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
