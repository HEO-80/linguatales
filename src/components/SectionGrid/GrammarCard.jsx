'use client';

import { pastel, fg } from '@/theme/color';
import { SECTION } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { useLangCode, useLevelCode } from '@/lib/routes/useRouteCodes';
import { getLevelContent } from '@/data';

const GRAMMAR_COLOR = SECTION.grammar.color;

export default function GrammarCard() {
  const { font, shadow } = useTheme();
  const lang = useLangCode();
  const level = useLevelCode();
  const { grammar } = getLevelContent(lang, level);

  const bg = pastel(GRAMMAR_COLOR, SECTION.grammar.tint);
  const ink = fg('#191713', bg, 6);
  const soft = fg('#4a443a', bg, 4.6);
  const chipBg = pastel(GRAMMAR_COLOR, 0.7);
  const chipFg = fg(GRAMMAR_COLOR, chipBg, 5);

  return (
    <div
      id="grammar"
      style={{
        background: bg,
        borderTop: `4px solid ${GRAMMAR_COLOR}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '18px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }}
    >
      <div>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            color: fg(GRAMMAR_COLOR, bg, 4.6)
          }}
        >
          Gramática
        </span>
        <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: ink, margin: '4px 0 0' }}>
          En este nivel
        </h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {grammar.map((g) => (
          <div key={g.id ?? g.label} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <span
              style={{
                alignSelf: 'flex-start',
                fontFamily: font.body,
                fontSize: 12.5,
                fontWeight: 600,
                color: chipFg,
                background: chipBg,
                borderRadius: 4,
                padding: '4px 9px'
              }}
            >
              {g.label}
            </span>
            <span style={{ fontFamily: font.body, fontSize: 12, color: soft, paddingLeft: 2 }}>{g.note}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
