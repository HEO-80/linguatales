'use client';

import { ReaderProvider, useReader } from '@/state/ReaderContext';
import StoryPicker from '@/components/StoryPicker/StoryPicker';
import StoryReader from './StoryReader';
import StoryStub from './StoryStub';
import StoryFacts from '@/components/StoryFacts/StoryFacts';
import PhrasesSection from '@/components/Phrases/PhrasesSection';
import ConnectorsSection from '@/components/Connectors/ConnectorsSection';
import GrammarSection from '@/components/Grammar/GrammarSection';
import IdiomsSection from '@/components/Idioms/IdiomsSection';
import GameTabs from '@/components/Games/GameTabs/GameTabs';
import SrsView from '@/components/Srs/SrsView';

/**
 * Vista exclusiva (§4 linguatales-frases-spec.md, ampliada en
 * linguatales-conectores-spec.md y linguatales-srs-spec.md): relato, frases,
 * conectores, juego y repaso no se ven nunca a la vez. `view === 'story'`
 * muestra el relato completo + gramática/phrasal verbs; cualquier otro valor
 * deja en su lugar el muñón clicable (StoryStub). Los chips de
 * PhrasesSection/ConnectorsSection y las pestañas de GameTabs siempre están
 * visibles — son la navegación — pero su contenido (panel de bloque / grupo /
 * cuerpo del juego) solo se monta con la vista activa. SrsView no tiene chip
 * propio: se abre solo desde el nav ("Repaso"). GrammarSection/IdiomsSection
 * son material de NIVEL, no de relato (grammarOf/idiomsOf en src/data) — van
 * siempre visibles, con su propio estado local de apertura, sin competir por
 * la vista exclusiva.
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
      <ConnectorsSection />
      <GrammarSection />
      <IdiomsSection />
      {view === 'srs' && <SrsView />}
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
