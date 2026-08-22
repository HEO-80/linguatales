'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { srsStatus, SRS_STATUS, SRS_STATUS_COLOR, SRS_STATUS_LABEL } from '@/lib/srs';
import PlayButton from './PlayButton';
import { AMBER, INDIGO } from './PhrasesSection';

const MINT = '#0e9f6e';

/** Panel del bloque abierto — acordeón, solo se monta con el bloque activo. */
export default function PhraseBlockPanel({ block, blockIndex }) {
  const { surface, text, font, shadow } = useTheme();
  const { phrTIndex, setPhrTIndex, phrTests, setPhrTests, srsCards, srsDay } = useReader();

  const pillBg = pastel(AMBER, 0.8);
  const testBg = pastel(MINT, 0.82);
  const arrowBorder = pastel(MINT, 0.5);

  // §1 linguatales-conectores-spec.md: el modelo pasa de `test` (una sola
  // pregunta) a `tests` (10). Si un bloque solo trae el `test` viejo, se
  // envuelve en un array de una entrada — la UI siempre lee `tests`.
  const testList = block.tests ?? (block.test ? [block.test] : []);
  const totalTests = testList.length;
  const testI = Math.min(phrTIndex, Math.max(totalTests - 1, 0));
  const currentTest = testList[testI];
  const isRevealed = !!phrTests[testI];

  const goTest = (delta) => setPhrTIndex(((testI + delta) % totalTests + totalTests) % totalTests);
  const toggleReveal = () => setPhrTests((prev) => ({ ...prev, [testI]: !prev[testI] }));

  return (
    <div
      style={{
        background: surface.cream,
        borderTop: `4px solid ${AMBER}`,
        borderRadius: 6,
        boxShadow: shadow.base,
        padding: '20px 22px 22px',
        marginTop: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 12
        }}
      >
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: fg(AMBER, surface.cream, 4.6)
          }}
        >
          Bloque {block.num} · {block.title}
        </span>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.6px',
            textTransform: 'uppercase',
            color: fg(AMBER, pillBg, 4.6),
            background: pillBg,
            borderRadius: 4,
            padding: '4px 10px'
          }}
        >
          {block.items.length} frases · con audio y contestación
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {block.items.map((item, i) => {
          const num = String(blockIndex * 10 + i + 1).padStart(2, '0');
          const isLast = i === block.items.length - 1;
          return (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '30px 1.1fr 1fr',
                gap: 18,
                alignItems: 'start',
                padding: '14px 0',
                borderBottom: isLast ? 'none' : `1px solid ${pastel(AMBER, 0.6)}`
              }}
            >
              <span style={{ fontFamily: font.mono, fontSize: 10.5, color: fg(AMBER, surface.cream, 4.6) }}>{num}</span>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <PlayButton id={`ph${i}`} text={item.en} color={AMBER} />
                  <span style={{ fontFamily: font.display, fontSize: 20, color: text.ink }}>{item.en}</span>
                </div>
                <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: text.onCream }}>
                  {item.es}
                </span>
                <div
                  style={{
                    borderTop: `1px dashed ${INDIGO}`,
                    marginTop: 6,
                    paddingTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <PlayButton id={`re${i}`} text={item.re[0]} color={INDIGO} />
                    <span style={{ fontFamily: font.body, fontSize: 16, color: fg(INDIGO, surface.cream, 4.6) }}>
                      <span style={{ fontFamily: font.mono }}>↳</span> {item.re[0]}
                    </span>
                  </div>
                  <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: text.onCream, marginLeft: 32 }}>
                    {item.re[1]}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                <span style={{ fontFamily: font.body, fontSize: 13.5, lineHeight: 1.5, color: text.ink }}>
                  {item.ej}
                </span>
                {(() => {
                  const status = srsStatus(srsCards[`ph:${block.num}:${i}`], srsDay);
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
                          color: fg(color, surface.cream, 4.6)
                        }}
                      >
                        {SRS_STATUS_LABEL[status].toUpperCase()}
                      </span>
                    </span>
                  );
                })()}
                <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{item.tip}</span>
              </div>
            </div>
          );
        })}
      </div>

      {currentTest && (
        <div
          style={{
            background: testBg,
            borderLeft: `4px solid ${MINT}`,
            borderRadius: 5,
            padding: '14px 16px',
            marginTop: 14,
            display: 'flex',
            flexDirection: 'column',
            gap: 8
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
                color: fg(MINT, testBg, 5)
              }}
            >
              Test del bloque
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                aria-label="Pregunta anterior"
                onClick={() => goTest(-1)}
                disabled={totalTests <= 1}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 4,
                  background: surface.cream,
                  border: `1px solid ${arrowBorder}`,
                  color: fg(MINT, surface.cream, 4.6),
                  fontFamily: font.body,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: totalTests <= 1 ? 'default' : 'pointer',
                  opacity: totalTests <= 1 ? 0.5 : 1
                }}
              >
                ‹
              </button>
              <span style={{ fontFamily: font.mono, fontSize: 11, fontWeight: 700, color: fg(MINT, testBg, 5) }}>
                {testI + 1} / {totalTests}
              </span>
              <button
                aria-label="Pregunta siguiente"
                onClick={() => goTest(1)}
                disabled={totalTests <= 1}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 4,
                  background: surface.cream,
                  border: `1px solid ${arrowBorder}`,
                  color: fg(MINT, surface.cream, 4.6),
                  fontFamily: font.body,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: totalTests <= 1 ? 'default' : 'pointer',
                  opacity: totalTests <= 1 ? 0.5 : 1
                }}
              >
                ›
              </button>
            </div>
          </div>

          <span style={{ fontFamily: font.mono, fontSize: 10.5, color: fg(MINT, testBg, 5) }}>
            Pregunta {String(testI + 1).padStart(2, '0')}
          </span>
          <span style={{ fontFamily: font.display, fontSize: 19, color: text.ink }}>{currentTest.q}</span>
          <button
            onClick={toggleReveal}
            style={{
              alignSelf: 'flex-start',
              fontFamily: font.mono,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: fg(MINT, surface.cream, 4.6),
              background: surface.cream,
              border: `1px solid ${pastel(MINT, 0.5)}`,
              borderRadius: 4,
              padding: '6px 12px',
              cursor: 'pointer'
            }}
          >
            {isRevealed ? 'Ocultar respuesta' : 'Ver respuesta'}
          </button>
          {isRevealed && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ fontFamily: font.display, fontSize: 22, color: text.ink }}>{currentTest.a}</span>
              <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{currentTest.note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
