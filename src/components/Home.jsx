'use client';

import AppHeader from './AppHeader/AppHeader';
import LanguageShelf from './LanguageShelf/LanguageShelf';
import SectionGrid from './SectionGrid/SectionGrid';
import StoryReader from './StoryReader/StoryReader';
import WordOrderGame from './Games/WordOrderGame/WordOrderGame';
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

        <section style={{ maxWidth: 1440, margin: '24px auto 0', padding: '0 32px' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            <WordOrderGame key={lang} />
            <GameCatalogue />
          </div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
