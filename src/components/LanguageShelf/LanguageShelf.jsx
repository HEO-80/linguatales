'use client';

import { LANGUAGE_ORDER } from '@/theme/languages';
import { useAppState } from '@/state/AppStateContext';
import LanguageCard from './LanguageCard';

export default function LanguageShelf() {
  const { lang, level, setLang } = useAppState();

  return (
    <section style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 32px 0' }}>
      <div style={{ display: 'flex', gap: 12 }}>
        {LANGUAGE_ORDER.map((code) => (
          <LanguageCard
            key={code}
            code={code}
            active={code === lang}
            currentLevel={level}
            onSelect={setLang}
          />
        ))}
      </div>
    </section>
  );
}
