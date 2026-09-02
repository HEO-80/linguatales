'use client';

import { useGameTabs } from './useGameTabs';
import TabCard from './TabCard';

/**
 * src/components/Games/GameTabs/StoryPracticeTabs.jsx
 * Bloque "Practica este relato" (§1 linguatales-dos-bloques-spec.md): los
 * cinco juegos que salen del texto que se acaba de leer, justo debajo del
 * índice de gramática/phrasal verbs — su panel se despliega aquí mismo, no
 * al final de la página. Las cards siguen saliendo de mkTab/TabCard, la
 * vista exclusiva y el progreso los calcula useGameTabs sin cambios.
 */
export default function StoryPracticeTabs() {
  const { surface, font, accent, text, game, view, STORY_TABS, markers, isTabActive, handleTabClick, ActiveComp } = useGameTabs();

  if (STORY_TABS.length === 0) return null;

  const activeIsStory = STORY_TABS.some((t) => isTabActive(t));

  return (
    <>
      <div
        style={{
          maxWidth: 1440,
          margin: '20px auto 0',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }}
      >
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: text.onTint,
            flexShrink: 0
          }}
        >
          Practica este relato
        </span>
        <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: text.onTint, flexShrink: 0 }}>
          Los cinco salen del texto de arriba
        </span>
        <div
          style={{
            flex: 1,
            height: 2,
            borderRadius: 2,
            background: `linear-gradient(90deg, ${accent.secondary}66, rgba(25,23,19,.08))`
          }}
        />
      </div>

      <section style={{ maxWidth: 1440, margin: '10px auto 0', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
          {STORY_TABS.map((t) => (
            <TabCard
              key={t.key}
              tab={{ ...t, marker: markers[t.key] }}
              isActive={isTabActive(t)}
              onClick={() => handleTabClick(t)}
              surface={surface}
              font={font}
            />
          ))}
        </div>
      </section>

      {view === 'game' && activeIsStory && ActiveComp && (
        <section id="games" style={{ maxWidth: 1440, margin: '16px auto 0', padding: '0 32px 32px' }}>
          <ActiveComp key={game} />
        </section>
      )}
    </>
  );
}
