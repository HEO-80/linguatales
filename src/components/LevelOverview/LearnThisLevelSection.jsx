'use client';

import { useTheme } from '@/theme/ThemeContext';
import GrammarCard from '@/components/SectionGrid/GrammarCard';
import IdiomCard from '@/components/SectionGrid/IdiomCard';

/**
 * src/components/LevelOverview/LearnThisLevelSection.jsx
 * Fila de 2 columnas (gramática + phrasal verbs/modismos) bajo un
 * encabezado propio, reemplazando la disposición en grid que tenían antes.
 */
export default function LearnThisLevelSection() {
  const { text, font } = useTheme();

  return (
    <section style={{ maxWidth: 1440, margin: '24px auto 0', padding: '0 32px' }}>
      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            color: text.onCream
          }}
        >
          En este tema
        </span>
        <h2 style={{ fontFamily: font.display, fontSize: 26, fontWeight: 600, color: text.ink, margin: '4px 0 0' }}>
          Lo que vas a aprender
        </h2>
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <GrammarCard />
        </div>
        <div style={{ flex: 1 }}>
          <IdiomCard />
        </div>
      </div>
    </section>
  );
}
