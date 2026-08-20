'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { pastel, whiteReadable, NEUTRAL } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { LEVELS } from '@/theme/languages';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import { storiesOf } from '@/data/stories';
import { languageProgress, useProgressSnapshot } from '@/state/progress';
import LanguagePopover from './LanguagePopover';
import LevelPopover from './LevelPopover';

/**
 * src/components/Rail/Rail.jsx
 * Riel vertical fijo de 76px: pastillas de idioma/nivel + accesos rápidos.
 * Reemplaza al viejo Sidebar colapsable — no hay drawer móvil.
 */
export default function Rail() {
  const { surface, accent, text, font } = useTheme();
  const langCode = useLangCode();
  const levelCode = useLevelCode() ?? DEFAULT_LEVEL;
  const params = useParams();
  const num = params?.num;
  const lv = LEVELS.find((l) => l.code === levelCode);

  const [langOpen, setLangOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);

  const solidFg = whiteReadable(surface.solid) ? '#ffffff' : NEUTRAL.ink;
  const stories = storiesOf(langCode, levelCode);
  const snapshot = useProgressSnapshot();

  const goToStoryPicker = () => {
    document.getElementById('story-picker-trigger')?.click();
  };

  return (
    <aside
      style={{
        width: 76,
        flexShrink: 0,
        alignSelf: 'stretch',
        background: surface.tintDeep,
        borderRight: `1px solid ${surface.border}`
      }}
    >
      {/* Envoltorio sticky: el <aside> de fuera da el fondo/borde a todo lo
          alto de la página (alignSelf:stretch); si el centrado fuera aquí
          mismo, en una página larga (relato + juegos) el contenido quedaría
          centrado a mitad del scroll total, invisible la mayor parte del
          tiempo. Este div interior es el que de verdad hay que ver siempre,
          así que se pega bajo AppHeader (76px) en vez de centrarse en todo
          el alto. */}
      <div
        style={{
          position: 'sticky',
          top: 76,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          padding: '20px 0',
          maxHeight: 'calc(100vh - 76px)',
          overflowY: 'auto'
        }}
      >
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setLangOpen((o) => !o)}
          aria-label="Cambiar idioma"
          style={{
            width: 46,
            height: 46,
            borderRadius: 13,
            background: surface.solid,
            border: langOpen ? `2px solid ${accent.primary}` : '2px solid transparent',
            color: solidFg,
            fontFamily: font.mono,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          {langCode}
        </button>
        {langOpen && <LanguagePopover levelCode={levelCode} onClose={() => setLangOpen(false)} />}
      </div>

      <span
        title="Progreso del idioma"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: accent.secondary,
          opacity: 0.15 + (languageProgress(langCode, snapshot) / 100) * 0.85
        }}
      />

      <div style={{ position: 'relative' }}>
        <button
          onClick={() => setLevelOpen((o) => !o)}
          aria-label="Cambiar nivel"
          style={{
            width: 46,
            height: 46,
            borderRadius: 13,
            background: pastel(lv.color, 0.3),
            border: levelOpen ? `2px solid ${lv.color}` : '2px solid transparent',
            color: text.ink,
            fontFamily: font.mono,
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          {levelCode}
        </button>
        {levelOpen && <LevelPopover langCode={langCode} activeLevel={levelCode} onClose={() => setLevelOpen(false)} />}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          background: surface.cream,
          borderRadius: 10,
          padding: 6
        }}
      >
        <button
          onClick={goToStoryPicker}
          title="Cambiar relato"
          aria-label="Cambiar relato"
          style={{ width: 34, height: 34, border: 'none', background: 'transparent', fontSize: 16, cursor: 'pointer', color: text.ink }}
        >
          ◫
        </button>
        <a
          href="#games"
          title="Juegos"
          aria-label="Ir a juegos"
          style={{
            width: 34,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            color: text.ink,
            textDecoration: 'none'
          }}
        >
          ✎
        </a>
        <span
          title="Tu progreso"
          style={{ width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: text.ink }}
        >
          ◔
        </span>
      </div>

      <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onTintDeep }}>
        {num ?? '–'} / {stories.length}
      </span>
      </div>
    </aside>
  );
}
