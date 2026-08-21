'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES, TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';

/** Padding horizontal de cada palabra — la línea de traducción completa
 * (bajo el párrafo) se alinea a partir de este mismo número, no de uno
 * escrito a mano aparte. */
export const WORD_PADDING_X = 7;

/** Una palabra (o phrasal verb, un solo token) del texto del relato. */
export default function WordToken({ token, paraIndex, tokenIndex }) {
  const { font } = useTheme();
  const { roleFilter, word, setWord, showTr } = useReader();

  const role = token[TOKEN.ROLE];
  const color = ROLES[role].color;
  const isSelected = word?.paraIndex === paraIndex && word?.tokenIndex === tokenIndex;
  const isDimmed = roleFilter.length > 0 && !roleFilter.includes(role);

  let background = pastel(color, 0.82);
  let borderBottom = `2.5px solid ${pastel(color, 0.42)}`;
  let boxShadow = 'none';
  let textColor = '#191713';

  if (isSelected) {
    background = pastel(color, 0.38);
    boxShadow = `0 2px 8px ${color}4d`;
  }
  if (isDimmed) {
    background = 'rgba(255,255,255,.35)';
    borderBottom = '2.5px solid rgba(255,255,255,.4)';
    textColor = '#8d8674';
  }

  const trColor = fg(color, background, 4.6);

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => setWord(isSelected ? null : { paraIndex, tokenIndex, token })}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setWord(isSelected ? null : { paraIndex, tokenIndex, token })}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: 1.35,
        background,
        borderBottom,
        boxShadow,
        padding: `3px ${WORD_PADDING_X}px 4px`,
        borderRadius: 4,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background .12s, box-shadow .12s'
      }}
    >
      <span style={{ fontFamily: font.display, fontSize: 21, color: textColor, whiteSpace: 'nowrap' }}>
        {token[TOKEN.TEXT]}
      </span>
      {showTr && (
        <span
          style={{
            fontFamily: font.body,
            fontSize: 11.5,
            fontStyle: 'italic',
            marginTop: 3,
            whiteSpace: 'nowrap',
            color: trColor
          }}
        >
          {token[TOKEN.TRANSLATION]}
        </span>
      )}
    </span>
  );
}
