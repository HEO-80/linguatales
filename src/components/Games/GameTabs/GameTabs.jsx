'use client';

import { useGameTabs } from './useGameTabs';
import MicroRepaso from '../MicroRepaso';
import TabCard from './TabCard';

/**
 * src/components/Games/GameTabs/GameTabs.jsx
 * Bloque "Practica el nivel" (§2 linguatales-dos-bloques-spec.md): frases,
 * conectores, traducción inversa, Repaso y Examen final — el material que no
 * sale de este relato en concreto, se queda al final de la página con su
 * micro-repaso. El otro bloque, "Practica este relato", vive en
 * StoryPracticeTabs junto al índice de gramática/phrasal verbs. Toda card
 * sigue saliendo de `mkTab` + TabCard; la vista exclusiva y el progreso los
 * calcula useGameTabs sin cambios.
 */
export default function GameTabs() {
  const {
    surface, font, accent, text, game, view,
    PHRASE_TABS, FINAL_TABS, markers, isTabActive, handleTabClick, ActiveComp
  } = useGameTabs();

  const activeIsLevel = [...PHRASE_TABS, ...FINAL_TABS].some((t) => isTabActive(t));

  if (PHRASE_TABS.length === 0 && FINAL_TABS.length === 0) return null;

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
          Practica el nivel
        </span>
        <span style={{ fontFamily: font.body, fontSize: 12, fontStyle: 'italic', color: text.onTint, flexShrink: 0 }}>
          Frases, conectores, repaso y examen del nivel
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

      <MicroRepaso />

      <section style={{ maxWidth: 1440, margin: '10px auto 0', padding: '0 32px' }}>
        {PHRASE_TABS.length > 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10 }}>
            {PHRASE_TABS.map((t) => (
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
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginTop: 10 }}>
          {FINAL_TABS.map((t) => (
            <TabCard
              key={t.key}
              tab={t}
              isActive={isTabActive(t)}
              onClick={() => handleTabClick(t)}
              surface={surface}
              font={font}
            />
          ))}
        </div>
      </section>

      {view === 'game' && activeIsLevel && ActiveComp && (
        <section id="games" style={{ maxWidth: 1440, margin: '16px auto 0', padding: '0 32px 32px' }}>
          <ActiveComp key={game} />
        </section>
      )}
    </>
  );
}
