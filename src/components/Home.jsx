'use client';

import AppHeader from './AppHeader/AppHeader';
import LanguageShelf from './LanguageShelf/LanguageShelf';
import SectionGrid from './SectionGrid/SectionGrid';
import StoryReader from './StoryReader/StoryReader';
import RealEnglishTeaser from './RealEnglish/RealEnglishTeaser';
import RealEnglishReader from './RealEnglish/RealEnglishReader';
import WordOrderGame from './Games/WordOrderGame/WordOrderGame';
import GapFillGame from './Games/GapFillGame/GapFillGame';
import DictationGame from './Games/DictationGame/DictationGame';
import GameCatalogue from './Games/GameCatalogue';
import AppFooter from './AppFooter/AppFooter';
import { useAppState } from '@/state/AppStateContext';

export default function Home() {
  const { lang } = useAppState();

  return (
    <>
      <AppHeader />
      <main>
        <LanguageShelf />
        <SectionGrid />
        <StoryReader />
        <RealEnglishTeaser />
        <RealEnglishReader key={lang} />

        <section style={{ maxWidth: 1440, margin: '24px auto 0', padding: '0 32px' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <WordOrderGame key={`word-${lang}`} />
              <GapFillGame key={`gap-${lang}`} />
              <DictationGame key={`dictation-${lang}`} />
            </div>
            <GameCatalogue />
          </div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
