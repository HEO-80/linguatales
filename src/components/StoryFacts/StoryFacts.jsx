'use client';

import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import GrammarCard from './GrammarCard';
import IdiomCard from './IdiomCard';
import GrammarDetailPanel from './GrammarDetailPanel';
import PhrasalDetailPanel from './PhrasalDetailPanel';

export default function StoryFacts() {
  const { accent, font, text } = useTheme();
  const { detail } = useReader();

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
          En este relato
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

      <section style={{ maxWidth: 1440, margin: '10px auto 0', padding: '0 32px', display: 'flex', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <GrammarCard />
        </div>
        <div style={{ flex: 1 }}>
          <IdiomCard />
        </div>
      </section>

      {detail && (
        <section style={{ maxWidth: 1440, margin: '16px auto 0', padding: '0 32px' }}>
          {detail.kind === 'g' ? <GrammarDetailPanel /> : <PhrasalDetailPanel />}
        </section>
      )}
    </>
  );
}
