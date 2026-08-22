'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { phrasesOf } from '@/data/phrases';
import PhraseBlockPanel from './PhraseBlockPanel';

export const AMBER = '#b45309';
export const INDIGO = '#4338ca';

/**
 * src/components/Phrases/PhrasesSection.jsx
 * Frases hechas y su contestación — va debajo del índice de gramática /
 * phrasal verbs y encima de los juegos. Los chips son la cabecera del
 * acordeón: siempre visibles, cerrados por defecto. El panel del bloque
 * abierto solo se monta cuando view === 'phrases' (vista exclusiva, §4).
 */
export default function PhrasesSection() {
  const { surface, text, font } = useTheme();
  const { lang, level, view, phrBlock, openPhraseBlock } = useReader();

  const blocks = phrasesOf(lang, level);
  if (blocks.length === 0) return null;

  const totalPhrases = blocks.reduce((sum, b) => sum + b.items.length, 0);

  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 12
        }}
      >
        <span style={{ fontFamily: font.display, fontSize: 20, fontWeight: 600, color: text.ink }}>
          Frases hechas y su contestación
        </span>
        <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onTint }}>
          {totalPhrases} frases cargadas · bloques de 10 · nivel {level}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {blocks.map((b, i) => {
          const isOpen = view === 'phrases' && phrBlock === i;
          const chipBg = isOpen ? pastel(AMBER, 0.7) : surface.cream;
          return (
            <button
              key={b.num}
              onClick={() => openPhraseBlock(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                textAlign: 'left',
                cursor: 'pointer',
                minWidth: 210,
                background: chipBg,
                border: isOpen ? 'none' : `1px solid ${pastel(AMBER, 0.5)}`,
                borderLeft: `4px solid ${isOpen ? AMBER : pastel(AMBER, 0.55)}`,
                borderRadius: 5,
                padding: '10px 14px',
                boxShadow: isOpen ? `0 2px 8px ${AMBER}2b` : 'none'
              }}
            >
              <span
                style={{
                  fontFamily: font.mono,
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: fg(AMBER, chipBg, 4.6)
                }}
              >
                Bloque {b.num}
              </span>
              <span style={{ fontFamily: font.display, fontSize: 15, color: text.ink }}>{b.title}</span>
              <span style={{ fontFamily: font.mono, fontSize: 9, color: fg(AMBER, chipBg, 4.6) }}>
                {isOpen ? '▾ Abierto' : '▸ Ver las 10'}
              </span>
            </button>
          );
        })}
      </div>

      {view === 'phrases' && phrBlock != null && blocks[phrBlock] && (
        <PhraseBlockPanel block={blocks[phrBlock]} blockIndex={phrBlock} />
      )}
    </section>
  );
}
