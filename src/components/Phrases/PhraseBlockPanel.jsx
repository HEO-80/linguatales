'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { AMBER, INDIGO } from './PhrasesSection';

const MINT = '#0e9f6e';

/** Panel del bloque abierto — acordeón, solo se monta con el bloque activo. */
export default function PhraseBlockPanel({ block, blockIndex }) {
  const { surface, text, font, shadow } = useTheme();
  const { testRevealed, setTestRevealed } = useReader();

  const pillBg = pastel(AMBER, 0.8);
  const testBg = pastel(MINT, 0.82);

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
          {block.items.length} frases · con contestación
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
                <span style={{ fontFamily: font.display, fontSize: 20, color: text.ink }}>{item.en}</span>
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
                  <span style={{ fontFamily: font.body, fontSize: 16, color: fg(INDIGO, surface.cream, 4.6) }}>
                    <span style={{ fontFamily: font.mono }}>↳</span> {item.re[0]}
                  </span>
                  <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: text.onCream }}>
                    {item.re[1]}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0 }}>
                <span style={{ fontFamily: font.body, fontSize: 13.5, lineHeight: 1.5, color: text.ink }}>
                  {item.ej}
                </span>
                <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{item.tip}</span>
              </div>
            </div>
          );
        })}
      </div>

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
          {block.test.label}
        </span>
        <span style={{ fontFamily: font.display, fontSize: 18, color: text.ink }}>{block.test.q}</span>
        <button
          onClick={() => setTestRevealed((v) => !v)}
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
          {testRevealed ? 'Ocultar respuesta' : 'Ver respuesta'}
        </button>
        {testRevealed && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span style={{ fontFamily: font.display, fontSize: 20, color: text.ink }}>{block.test.a}</span>
            <span style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{block.test.note}</span>
          </div>
        )}
      </div>
    </div>
  );
}
