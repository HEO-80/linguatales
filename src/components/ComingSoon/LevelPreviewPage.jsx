'use client';

import { ReaderProvider } from '@/state/ReaderContext';
import PhrasesSection from '@/components/Phrases/PhrasesSection';
import ConnectorsSection from '@/components/Connectors/ConnectorsSection';
import ComingSoonPanel from './ComingSoonPanel';

/**
 * src/components/ComingSoon/LevelPreviewPage.jsx
 * Nivel sin relatos todavía (has(lang, level) === false): en vez de dejar
 * el nivel completamente bloqueado en el selector, se puede entrar a ver lo
 * que YA existe para ese nivel — frases hechas y conectores, que son datos
 * de IDIOMA/NIVEL, no de relato — mientras el relato en sí sigue pendiente.
 *
 * ReaderProvider exige un `story` con `.num` (lo usa para la clave de
 * progreso); como aquí no hay relato real, se le pasa un stub mínimo. Ningún
 * otro campo de `story` se lee nunca en este árbol porque StoryReader,
 * StoryFacts, StoryStub y GameTabs (los únicos que tocan más campos de
 * `story`) no se montan en esta página.
 */
const PREVIEW_STORY = { num: 'preview' };

export default function LevelPreviewPage({ lang, level }) {
  return (
    <ReaderProvider story={PREVIEW_STORY} lang={lang} level={level}>
      <section style={{ maxWidth: 1440, margin: '24px auto 0', padding: '0 32px' }}>
        <ComingSoonPanel
          message={`Todavía no hay relatos de ${lang} en ${level}, pero el vocabulario y la gramática de este nivel ya están cargados abajo.`}
        />
      </section>
      <PhrasesSection />
      <ConnectorsSection />
    </ReaderProvider>
  );
}
