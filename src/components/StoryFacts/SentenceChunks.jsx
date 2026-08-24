'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';

const GREEN = '#0e7a5f';

/**
 * src/components/StoryFacts/SentenceChunks.jsx
 * Pinta una frase montada en TROZOS (nunca un string) para poder resaltar
 * en verde solo la parte que cambia (§4 linguatales-ficha-manipulable-spec.md).
 *
 * Trampa de whitespace: los saltos de línea/indentación de la plantilla
 * entre hermanos JSX se renderizan como un espacio, y "open"+"s" saldría
 * "open s". El contenedor va a font-size: 0 y CADA trozo restaura
 * font-family/font-size — los nodos de espacio quedan sin ancho, y los
 * espacios de verdad viajan dentro de los propios trozos (`chunk.t`), nunca
 * como JSX entre spans.
 */
export default function SentenceChunks({ chunks, size = 21 }) {
  const { font, text } = useTheme();
  const greenBg = pastel(GREEN, 0.82);

  return (
    <span style={{ fontSize: 0 }}>
      {chunks.map((c, i) => (
        <span
          key={i}
          style={{
            fontFamily: font.display,
            fontSize: size,
            fontWeight: c.green ? 600 : 400,
            color: c.green ? fg(GREEN, greenBg, 4.6) : text.ink,
            background: c.green ? greenBg : 'transparent',
            borderRadius: c.green ? 3 : 0
          }}
        >
          {c.t}
        </span>
      ))}
    </span>
  );
}
