'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES, TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { srsStatus, SRS_STATUS, SRS_STATUS_COLOR } from '@/lib/srs';

/** Padding horizontal de cada palabra — la línea de traducción completa
 * (bajo el párrafo) se alinea a partir de este mismo número, no de uno
 * escrito a mano aparte. */
export const WORD_PADDING_X = 7;

/** Una palabra (o phrasal verb, un solo token) del texto del relato. */
export default function WordToken({ token, paraIndex, tokenIndex }) {
  const { font } = useTheme();
  const { roleFilter, word, setWord, showTr, srsCards, srsDay, srsMarksOff, gramOn, setDragWord } = useReader();

  const role = token[TOKEN.ROLE];
  const color = ROLES[role].color;
  const isSelected = word?.paraIndex === paraIndex && word?.tokenIndex === tokenIndex;
  const isDimmed = roleFilter.length > 0 && !roleFilter.includes(role);

  // Cuatro ramas EXCLUYENTES (linguatales-lectura-color-spec §2): un cambio
  // de estado que deba alterar el aspecto de un token tiene que cambiar de
  // rama aquí, nunca colar un valor distinto dentro de la misma rama — de lo
  // contrario el color queda un render por detrás al alternar `gramOn`.
  let background;
  let borderBottom;
  let boxShadow = 'none';
  let textColor;

  if (isSelected) {
    // isLit — la palabra tocada se enciende sola, en modo lectura o no.
    background = pastel(color, 0.38);
    borderBottom = `2.5px solid ${pastel(color, 0.42)}`;
    boxShadow = `0 2px 8px ${color}4d`;
    textColor = '#191713';
  } else if (gramOn && isDimmed) {
    // isDim — atenuada por el filtro de función, solo tiene sentido con la
    // leyenda desplegada.
    background = 'rgba(255,255,255,.35)';
    borderBottom = '2.5px solid rgba(255,255,255,.4)';
    textColor = '#8d8674';
  } else if (gramOn) {
    // isNormal — coloreada por función, con su marcado SRS de siempre.
    background = pastel(color, 0.82);
    borderBottom = `2.5px solid ${pastel(color, 0.42)}`;
    textColor = '#191713';
    if (!srsMarksOff) {
      // Marcado SRS (§5 linguatales-srs-spec.md): solo el filete inferior,
      // sin tocar fondo ni color de rol. "Sin ver" no cambia nada (deja el
      // filete pastel del rol tal cual). Herramientas puede apagar este
      // marcado del todo (§4 tres-barras-spec: srsMarksOff).
      const status = srsStatus(srsCards[`w:${token[TOKEN.TEXT].toLowerCase()}`], srsDay);
      if (status === SRS_STATUS.DUE) borderBottom = `2.5px solid ${SRS_STATUS_COLOR.due}`;
      else if (status === SRS_STATUS.LEARNING) borderBottom = `2.5px solid ${SRS_STATUS_COLOR.learning}`;
      else if (status === SRS_STATUS.MASTERED) borderBottom = `2.5px dotted ${pastel(SRS_STATUS_COLOR.mastered, 0.45)}`;
    }
  } else {
    // isPlain — modo lectura: negro sobre el papel, sin fondo ni filete.
    background = 'transparent';
    borderBottom = '2.5px solid transparent';
    textColor = '#191713';
  }

  // La traducción bajo la palabra sigue el mismo color de rol que su fondo
  // salvo en isPlain, donde no hay fondo de rol que la sostenga — un gris
  // tinta neutro, coherente con el negro sobre papel del modo lectura.
  const trColor = isSelected || gramOn ? fg(color, background, 4.6) : '#5b5648';

  // Cesta de repaso (§2 linguatales-cesta-spec): draggable en las cuatro
  // ramas de arriba, no solo en una — como las cuatro comparten este único
  // <span> (solo cambian fondo/filete/color, nunca de elemento), basta con
  // ponerlo aquí una vez para que valga en isPlain/isNormal/isLit/isDim por
  // igual. dataTransfer solo lleva el texto plano; el detalle completo
  // (palabra, función, traducción) va en el estado del reader, que es lo que
  // lee la cesta al soltar.
  const handleDragStart = (e) => {
    setDragWord({ w: token[TOKEN.TEXT], role, tr: token[TOKEN.TRANSLATION] });
    e.dataTransfer.setData('text/plain', token[TOKEN.TEXT]);
    e.dataTransfer.effectAllowed = 'copy';
  };
  const handleDragEnd = () => setDragWord(null);

  return (
    <span
      role="button"
      tabIndex={0}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
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
            fontSize: 12.5,
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
