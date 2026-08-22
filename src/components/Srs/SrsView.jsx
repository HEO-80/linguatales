'use client';

import { useMemo, useState } from 'react';
import { pastel, fg, NEUTRAL } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { deriveSrsQueue, SRS_STATUS_COLOR, SRS_STATUS_LABEL } from '@/lib/srs';
import { seededShuffle } from '@/components/Games/seededShuffle';

const AMBER = '#b45309';
const CYAN = SRS_STATUS_COLOR.learning; // '#0e7490' — también el botón "Bien"/"La sabía"
const GREEN = SRS_STATUS_COLOR.mastered; // '#0f766e' — también el botón "Fácil"
const CRIMSON = '#e11d48'; // solo el botón "Fallé"/"No la sabía" — no es un color de estado

const IS_DEV = process.env.NODE_ENV !== 'production';

function relDue(due, day) {
  const rel = due - day;
  return rel <= 0 ? 'hoy' : `en ${rel}d`;
}

/**
 * src/components/Srs/SrsView.jsx
 * "Repaso de hoy" (§4 linguatales-srs-spec.md; §3 flashcards, quinta
 * entrega) — flashcards son el MOTOR del repaso, no un juego suelto: las
 * cartas son las que el SRS marca flojas. Dos modos sobre el mismo
 * material — Tarjeta (autoevaluación) y Test (elige entre 3) — ambos
 * gradúan con SM-2 sobre la misma tarjeta.
 *
 * Bug de reindexado (§3): al graduar, `due` se recalcula y puede cambiar de
 * tamaño/orden en el mismo render. Si el modo Test leyera `due[idx]` a pelo,
 * tras responder mostraría otra tarjeta con la respuesta ya revelada.
 * Arreglo: `currentKey` congela qué tarjeta se enseña desde que se revela
 * (Tarjeta) o se elige una opción (Test) hasta que el usuario pulsa
 * Siguiente — la cola solo se vuelve a consultar en ese momento.
 */
export default function SrsView() {
  const { surface, text, font, shadow } = useTheme();
  const {
    srsCards, srsDay, gradeSrsRaw, advanceSrsDay,
    srsIdx, setSrsIdx, srsShown, setSrsShown
  } = useReader();

  const [mode, setMode] = useState('card'); // 'card' | 'test'
  const [currentKey, setCurrentKey] = useState(null); // congelada mientras hay respuesta pendiente
  const [testPick, setTestPick] = useState(null);

  const { due, all, dueCount, inProgressCount, consolidatedCount, seenCount } = useMemo(
    () => deriveSrsQueue(srsCards, srsDay),
    [srsCards, srsDay]
  );

  const idx = due.length ? Math.min(srsIdx, due.length - 1) : 0;
  const naturalKey = due[idx]?.key ?? null;
  const displayKey = currentKey ?? naturalKey;
  const card = displayKey ? srsCards[displayKey] : null;

  const testOptions = useMemo(() => {
    if (mode !== 'test' || !card || !displayKey) return [];
    const pool = Object.entries(srsCards)
      .filter(([k, c]) => k !== displayKey && c.a !== card.a)
      .map(([, c]) => c.a);
    const distractors = seededShuffle(pool, `srs-test-${displayKey}`).slice(0, 2);
    return seededShuffle([card.a, ...distractors], `srs-test-order-${displayKey}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, displayKey]);

  const switchMode = (next) => {
    if (next === mode) return;
    setMode(next);
    setCurrentKey(null);
    setSrsShown(false);
    setTestPick(null);
  };

  const handleReveal = () => {
    setCurrentKey(displayKey);
    setSrsShown(true);
  };

  const handleGradeCard = (q) => {
    if (!displayKey || !card) return;
    gradeSrsRaw(displayKey, { kind: card.kind, q: card.q, a: card.a, hint: card.hint }, q);
    setCurrentKey(null);
    setSrsShown(false);
  };

  const handleSkip = () => {
    setCurrentKey(null);
    setSrsShown(false);
    setTestPick(null);
    if (due.length > 1) setSrsIdx((idx + 1) % due.length);
  };

  const handlePickTest = (opt) => {
    if (testPick != null || !displayKey || !card) return;
    setCurrentKey(displayKey); // congela ANTES de graduar — es lo que evita el reindexado
    setTestPick(opt);
    const correct = opt === card.a;
    gradeSrsRaw(displayKey, { kind: card.kind, q: card.q, a: card.a, hint: card.hint }, correct ? 4 : 0);
  };

  const handleNextTest = () => {
    setCurrentKey(null);
    setTestPick(null);
  };

  const stats = [
    { label: 'Toca hoy', value: dueCount, color: AMBER },
    { label: 'En progreso', value: inProgressCount, color: CYAN },
    { label: 'Consolidadas', value: consolidatedCount, color: GREEN },
    { label: 'Vistas', value: seenCount, color: NEUTRAL.grey }
  ];

  const modeChip = (key, chipLabel) => {
    const active = mode === key;
    const bg = active ? pastel(AMBER, 0.62) : surface.cream;
    return (
      <button
        key={key}
        onClick={() => switchMode(key)}
        style={{
          fontFamily: font.mono,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: '0.6px',
          textTransform: 'uppercase',
          color: fg(AMBER, bg, 4.6),
          background: bg,
          border: `1px solid ${pastel(AMBER, active ? 0.4 : 0.55)}`,
          borderRadius: 4,
          padding: '6px 14px',
          cursor: 'pointer'
        }}
      >
        {chipLabel}
      </button>
    );
  };

  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        style={{
          background: surface.cream,
          borderTop: `4px solid ${AMBER}`,
          borderRadius: 6,
          boxShadow: shadow.base,
          padding: '20px 22px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: font.display, fontSize: 20, fontWeight: 600, color: text.ink }}>
            Repaso de hoy
          </span>
          {IS_DEV && (
            <button
              onClick={advanceSrsDay}
              style={{
                fontFamily: font.mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                color: fg(AMBER, surface.cream, 4.6),
                background: surface.cream,
                border: `1px solid ${pastel(AMBER, 0.5)}`,
                borderRadius: 4,
                padding: '6px 12px',
                cursor: 'pointer'
              }}
            >
              ▸ Avanzar un día (dev)
            </button>
          )}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {stats.map((s) => {
            const bg = pastel(s.color, 0.85);
            return (
              <div key={s.label} style={{ background: bg, borderRadius: 5, padding: '12px 14px' }}>
                <div
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9.5,
                    fontWeight: 700,
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    color: fg(s.color, bg, 4.6)
                  }}
                >
                  {s.label}
                </div>
                <div style={{ fontFamily: font.display, fontSize: 26, fontWeight: 600, color: text.ink, marginTop: 2 }}>
                  {s.value}
                </div>
              </div>
            );
          })}
        </div>

        {seenCount === 0 ? (
          <div
            style={{
              background: pastel('#0e9f6e', 0.82),
              borderRadius: 5,
              padding: '16px 18px',
              fontFamily: font.body,
              fontSize: 14,
              color: text.ink
            }}
          >
            <strong>Aún no hay nada que repasar.</strong> Jugar a cualquiera de los diez juegos del relato o de las
            frases va creando tarjetas de repaso automáticamente — vuelve por aquí después.
          </div>
        ) : dueCount === 0 ? (
          <div
            style={{
              background: pastel('#0e9f6e', 0.82),
              borderRadius: 5,
              padding: '16px 18px',
              fontFamily: font.body,
              fontSize: 14,
              color: text.ink
            }}
          >
            Nada que repasar hoy.
          </div>
        ) : (
          card && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 8 }}>
                {modeChip('card', 'Tarjeta')}
                {modeChip('test', 'Test')}
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,.7)',
                  borderLeft: `5px solid ${AMBER}`,
                  borderRadius: 5,
                  padding: '16px 18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10
                }}
              >
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: fg(AMBER, pastel(AMBER, 0.94), 4.6)
                  }}
                >
                  {card.kind} · {idx + 1} / {due.length}
                </span>

                <p style={{ fontFamily: font.display, fontSize: 26, color: text.ink, margin: 0 }}>{card.q}</p>

                {mode === 'card' ? (
                  !srsShown ? (
                    <>
                      <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onCream }}>
                        Piensa la respuesta antes de girar
                      </span>
                      <button
                        onClick={handleReveal}
                        style={{
                          alignSelf: 'flex-start',
                          fontFamily: font.mono,
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.6px',
                          textTransform: 'uppercase',
                          color: '#fffdf7',
                          background: AMBER,
                          border: 'none',
                          borderRadius: 4,
                          padding: '9px 16px',
                          cursor: 'pointer'
                        }}
                      >
                        Girar la tarjeta
                      </button>
                    </>
                  ) : (
                    <>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <span style={{ fontFamily: font.display, fontSize: 22, color: text.ink }}>{card.a}</span>
                        {card.hint && (
                          <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{card.hint}</span>
                        )}
                      </div>

                      <span style={{ fontFamily: font.mono, fontSize: 11, color: text.onCream }}>
                        Vista {card.seen} · intervalo {card.interval} día{card.interval === 1 ? '' : 's'} ·
                        facilidad {card.ease.toFixed(2)} · {card.lapses} fallo{card.lapses === 1 ? '' : 's'}
                      </span>

                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleGradeCard(0)}
                          style={{
                            fontFamily: font.body, fontSize: 13, fontWeight: 700, color: '#fffdf7',
                            background: CRIMSON, border: 'none', borderRadius: 4, padding: '9px 16px', cursor: 'pointer'
                          }}
                        >
                          Fallé
                        </button>
                        <button
                          onClick={() => handleGradeCard(3)}
                          style={{
                            fontFamily: font.body, fontSize: 13, fontWeight: 700, color: '#fffdf7',
                            background: CYAN, border: 'none', borderRadius: 4, padding: '9px 16px', cursor: 'pointer'
                          }}
                        >
                          Bien
                        </button>
                        <button
                          onClick={() => handleGradeCard(5)}
                          style={{
                            fontFamily: font.body, fontSize: 13, fontWeight: 700, color: '#fffdf7',
                            background: GREEN, border: 'none', borderRadius: 4, padding: '9px 16px', cursor: 'pointer'
                          }}
                        >
                          Fácil
                        </button>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                      {testOptions.map((opt) => {
                        const isAnswer = opt === card.a;
                        const isPicked = testPick === opt;
                        let bg = surface.cream;
                        let borderColor = pastel(AMBER, 0.6);
                        if (testPick != null && isAnswer) {
                          bg = pastel(GREEN, 0.74);
                          borderColor = GREEN;
                        } else if (testPick != null && isPicked && !isAnswer) {
                          bg = pastel(CRIMSON, 0.78);
                          borderColor = CRIMSON;
                        }
                        return (
                          <button
                            key={opt}
                            disabled={testPick != null}
                            onClick={() => handlePickTest(opt)}
                            style={{
                              fontFamily: font.display, fontSize: 17, color: text.ink, background: bg,
                              border: `2px solid ${borderColor}`, borderRadius: 5, padding: '9px 18px',
                              cursor: testPick != null ? 'default' : 'pointer'
                            }}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {testPick != null && (
                      <>
                        <span
                          style={{
                            fontFamily: font.body, fontSize: 13, fontWeight: 600,
                            color: testPick === card.a ? fg(GREEN, pastel(GREEN, 0.82), 5) : fg(CRIMSON, pastel(CRIMSON, 0.82), 5),
                            background: testPick === card.a ? pastel(GREEN, 0.82) : pastel(CRIMSON, 0.82),
                            borderRadius: 4, padding: '7px 11px', alignSelf: 'flex-start'
                          }}
                        >
                          {testPick === card.a ? '✓ Correcto' : `✕ Era: ${card.a}`}
                        </span>
                        <button
                          onClick={handleNextTest}
                          style={{
                            alignSelf: 'flex-start', fontFamily: font.body, fontSize: 12.5, fontWeight: 700,
                            color: '#fffdf7', background: AMBER, border: 'none', borderRadius: 4,
                            padding: '9px 16px', cursor: 'pointer'
                          }}
                        >
                          Siguiente tarjeta
                        </button>
                      </>
                    )}
                  </>
                )}

                {mode === 'card' && (
                  <div>
                    <button
                      onClick={handleSkip}
                      disabled={due.length <= 1}
                      style={{
                        fontFamily: font.body,
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: text.ink,
                        background: 'transparent',
                        border: `1px solid ${pastel(AMBER, 0.6)}`,
                        borderRadius: 4,
                        padding: '7px 14px',
                        cursor: due.length <= 1 ? 'default' : 'pointer',
                        opacity: due.length <= 1 ? 0.5 : 1
                      }}
                    >
                      Saltar
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        )}

        {all.length > 0 && (
          <div>
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 9.5,
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: text.onTint
              }}
            >
              Toda la cola · {all.length}
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
              {all.map(({ key, card: c, status }) => {
                const color = SRS_STATUS_COLOR[status];
                const bg = pastel(color, 0.85);
                return (
                  <span
                    key={key}
                    title={SRS_STATUS_LABEL[status]}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      background: bg,
                      borderRadius: 4,
                      padding: '5px 10px',
                      fontFamily: font.body,
                      fontSize: 12,
                      color: fg(color, bg, 4.6)
                    }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, flexShrink: 0 }} />
                    {c.a}
                    <span style={{ fontFamily: font.mono, fontSize: 10, opacity: 0.8 }}>{relDue(c.due, srsDay)}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
