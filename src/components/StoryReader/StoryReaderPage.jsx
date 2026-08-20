'use client';

import { ReaderProvider } from '@/state/ReaderContext';
import StoryPicker from '@/components/StoryPicker/StoryPicker';
import StoryReader from './StoryReader';
import StoryFacts from '@/components/StoryFacts/StoryFacts';
import GameTabs from '@/components/Games/GameTabs/GameTabs';

export default function StoryReaderPage({ story, lang, level }) {
  return (
    <ReaderProvider story={story} lang={lang} level={level}>
      <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
        <StoryPicker />
      </section>
      <StoryReader />
      <StoryFacts />
      <GameTabs />
    </ReaderProvider>
  );
}
