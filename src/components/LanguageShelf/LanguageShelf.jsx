'use client';

import { LANGUAGE_ORDER } from '@/theme/languages';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import { toLevelSlug } from '@/lib/routes/langLevel';
import LanguageCard from './LanguageCard';

export default function LanguageShelf() {
  const lang = useLangCode();
  const level = useLevelCode();
  const levelSlug = toLevelSlug(level ?? DEFAULT_LEVEL);

  return (
    <section style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 32px 0' }}>
      <div style={{ display: 'flex', gap: 12 }}>
        {LANGUAGE_ORDER.map((code) => (
          <LanguageCard key={code} code={code} active={code === lang} currentLevel={level ?? DEFAULT_LEVEL} levelSlug={levelSlug} />
        ))}
      </div>
    </section>
  );
}
