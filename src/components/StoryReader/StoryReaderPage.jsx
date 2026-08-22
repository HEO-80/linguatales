'use client';

import { ReaderProvider, useReader } from '@/state/ReaderContext';
import StoryPicker from '@/components/StoryPicker/StoryPicker';
import StoryReader from './StoryReader';
import StoryStub from './StoryStub';
import StoryFacts from '@/components/StoryFacts/StoryFacts';
import PhrasesSection from '@/components/Phrases/PhrasesSection';
import GameTabs from '@/components/Games/GameTabs/GameTabs';

/**
 * Vista exclusiva (§4 linguatales-frases-spec.md): relato, frases y juego no
 * se ven nunca a la vez. `view === 'story'` muestra el relato completo +
 * gramática/phrasal verbs; cualquier otro valor deja en su lugar el
 * muñón clicable (StoryStub). Los chips de PhrasesSection y las pestañas de
 * GameTabs siempre están visibles — son la navegación — pero su contenido
 * (panel de bloque / cuerpo del juego) solo se monta con la vista activa.
 */
function StoryReaderBody() {
  const { view } = useReader();

  return (
    <>
      <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
        <StoryPicker />
      </section>

      {view === 'story' ? (
        <>
          <StoryReader />
          <StoryFacts />
        </>
      ) : (
        <StoryStub />
      )}

      <PhrasesSection />
      <GameTabs />
    </>
  );
}

export default function StoryReaderPage({ story, lang, level }) {
  return (
    <ReaderProvider story={story} lang={lang} level={level}>
      <StoryReaderBody />
    </ReaderProvider>
  );
}
