'use client';

import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES, TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';

/** Una palabra (o phrasal verb, un solo token) del texto del relato. */
export default function WordToken({ token, paraIndex, tokenIndex }) {
  const { font } = useTheme();
  const { roleFilter, word, setWord } = useReader();

  const role = token[TOKEN.ROLE];
  const color = ROLES[role].color;
  const isSelected = word?.paraIndex === paraIndex && word?.tokenIndex === tokenIndex;
  const isDimmed = roleFilter && role !== roleFilter;

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

  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => setWord(isSelected ? null : { paraIndex, tokenIndex, token })}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setWord(isSelected ? null : { paraIndex, tokenIndex, token })}
      style={{
        fontFamily: font.display,
        fontSize: 21,
        color: textColor,
        background,
        borderBottom,
        boxShadow,
        padding: '3px 7px',
        borderRadius: 4,
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background .12s, box-shadow .12s'
      }}
    >
      {token[TOKEN.TEXT]}
    </span>
  );
}
