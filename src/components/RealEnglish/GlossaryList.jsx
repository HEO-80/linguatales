'use client';

import { pastel, fg } from '@/theme/color';

const KIND_LABEL = { phrasal_verb: 'Phrasal verb', slang: 'Slang', idiom: 'Idiom' };
const KIND_COLOR = { phrasal_verb: '#0e9f6e', slang: '#e0a80c', idiom: '#7c3aed' };

/**
 * Lista de {term, translation, kind}. La reutilizan el glosario completo
 * (variant="light", con badge de kind) y la sección Phrasal Verbs
 * (variant="dark", ya pre-filtrada a kind==='phrasal_verb' por el llamador
 * — mismo componente, dos usos, sin duplicar la lista).
 */
export default function GlossaryList({ entries, theme, variant = 'light', showKind = true }) {
  const { font } = theme;
  const dark = variant === 'dark';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {entries.map((entry) => {
        const kindColor = KIND_COLOR[entry.kind];
        const kindBg = pastel(kindColor, dark ? 0.3 : 0.78);
        const kindFg = dark ? '#fffdf7' : fg(kindColor, kindBg, 5);

        return (
          <div
            key={entry.term}
            style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span
                style={{
                  fontFamily: font.display,
                  fontSize: 16,
                  fontStyle: 'italic',
                  color: dark ? '#fffdf7' : '#191713'
                }}
              >
                {entry.term}
              </span>
              <span style={{ fontFamily: font.body, fontSize: 12.5, color: dark ? '#c9c3b7' : '#4a443a' }}>
                {entry.translation}
              </span>
            </div>
            {showKind && (
              <span
                style={{
                  flexShrink: 0,
                  fontFamily: font.mono,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  color: kindFg,
                  background: kindBg,
                  borderRadius: 4,
                  padding: '3px 7px'
                }}
              >
                {KIND_LABEL[entry.kind]}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
