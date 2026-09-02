'use client';

import { useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES } from '@/data/stories';
import { SRS_STATUS_COLOR } from '@/lib/srs';
import { useReader } from '@/state/ReaderContext';

// Mismo ámbar que el filete/punto "toca repasar" en todo el reader (§1
// linguatales-cesta-spec) — no un color nuevo.
const AMBER = SRS_STATUS_COLOR.due;

/**
 * src/components/StoryReader/ReviewBasket.jsx
 * Cesta de repaso: columna sticky a la derecha del texto. Arrastra una
 * palabra hasta aquí y entra en el SRS vencida hoy, lista para "Repaso".
 */
export default function ReviewBasket() {
  const { surface, text, font, shadow } = useTheme();
  const { basket, addToBasket, removeFromBasket, dragWord, goToSrs } = useReader();
  const [dragOver, setDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault(); // sin esto el navegador nunca dispara onDrop
    e.dataTransfer.dropEffect = 'copy';
    setDragOver(true);
  };
  const handleDragLeave = () => setDragOver(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (dragWord) addToBasket(dragWord);
  };

  const count = basket.length;

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        width: 182,
        flexShrink: 0,
        position: 'sticky',
        top: 196,
        alignSelf: 'flex-start',
        background: dragOver ? pastel(AMBER, 0.68) : surface.cream,
        border: `2px dashed ${pastel(AMBER, dragOver ? 0.18 : 0.42)}`,
        borderRadius: 6,
        boxShadow: dragOver ? `0 4px 14px ${AMBER}40` : shadow.sm,
        padding: '14px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        transition: 'background .12s, box-shadow .12s, border-color .12s'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            color: fg(AMBER, surface.cream, 4.6)
          }}
        >
          Cesta de repaso
        </span>
        <span style={{ fontFamily: font.body, fontSize: 11.5, color: text.onCream }}>
          {count === 0
            ? 'Arrastra aquí las palabras que quieras practicar.'
            : `${count} palabra${count === 1 ? '' : 's'} · ya ${count === 1 ? 'está' : 'están'} en Repaso`}
        </span>
      </div>

      {count > 0 && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {basket.map((item) => {
              const color = ROLES[item.role]?.color ?? AMBER;
              const bg = pastel(color, 0.82);
              return (
                <button
                  key={item.key}
                  onClick={() => removeFromBasket(item.key)}
                  title="Quitar de la cesta"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 1,
                    background: bg,
                    border: 'none',
                    borderRadius: 4,
                    padding: '6px 9px',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ fontFamily: font.body, fontSize: 12.5, fontWeight: 600, color: fg(color, bg, 4.6) }}>
                    {item.w}
                  </span>
                  <span style={{ fontFamily: font.body, fontSize: 10.5, fontStyle: 'italic', color: fg(color, bg, 4.6) }}>
                    {item.tr}
                  </span>
                </button>
              );
            })}
          </div>

          <button
            onClick={goToSrs}
            style={{
              fontFamily: font.body,
              fontSize: 11.5,
              fontWeight: 700,
              color: '#fffdf7',
              background: AMBER,
              border: 'none',
              borderRadius: 4,
              padding: '8px 10px',
              cursor: 'pointer'
            }}
          >
            Practicar en repaso
          </button>
        </>
      )}
    </div>
  );
}
