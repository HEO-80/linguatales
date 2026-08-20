'use client';

import { useState } from 'react';
import { buildTheme } from '@/theme/tokens';
import { useLangCode } from '@/lib/routes/useRouteCodes';
import { getRealEnglishDialogues } from '@/data';
import SentencePair from '../StoryReader/SentencePair';
import PronunciationBar from '../StoryReader/PronunciationBar';
import ContentWarningGate from './ContentWarningGate';
import GlossaryList from './GlossaryList';
import ExpressionsList from './ExpressionsList';

const WARNING = '#dc2626';

function DialogueContent({ dialogue }) {
  // Tema propio del idioma del diálogo, NO el idioma activo en la
  // estantería — el argot es del inglés independientemente de qué tarjeta
  // esté seleccionada arriba.
  const theme = buildTheme(dialogue.lang);
  const { surface, text, font, shadow } = theme;
  const [activeLine, setActiveLine] = useState(0);

  const phrasalVerbs = dialogue.glossary.filter((g) => g.kind === 'phrasal_verb');
  const activeSentenceId = `${dialogue.id}-${activeLine}`;

  return (
    <div
      style={{
        background: surface.tint,
        border: `1px solid ${surface.border}`,
        borderTop: `4px solid ${WARNING}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '26px 28px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 26
      }}
    >
      <div>
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '1.6px',
            textTransform: 'uppercase',
            color: WARNING
          }}
        >
          ⚠ Inglés real · {dialogue.levelRange} · Contenido adulto
        </span>
        <h2 style={{ fontFamily: font.display, fontSize: 38, fontWeight: 600, color: text.ink, margin: '4px 0 0' }}>
          {dialogue.title}
        </h2>
        {dialogue.source && (
          <p style={{ fontFamily: font.body, fontSize: 12.5, color: text.onTint, margin: '4px 0 0' }}>{dialogue.source}</p>
        )}
      </div>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: text.ink, margin: 0 }}>
          Vocabulario clave
        </h3>
        <div style={{ background: surface.cream, borderRadius: 5, padding: '16px 18px' }}>
          <GlossaryList entries={dialogue.glossary} theme={theme} variant="light" showKind />
        </div>
      </section>

      {phrasalVerbs.length > 0 && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: text.ink, margin: 0 }}>
            Phrasal Verbs de este diálogo
          </h3>
          <div style={{ background: surface.idiomFlat, borderRadius: 5, padding: '16px 18px' }}>
            <GlossaryList entries={phrasalVerbs} theme={theme} variant="dark" showKind={false} />
          </div>
        </section>
      )}

      <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: text.ink, margin: 0 }}>
          Expresiones explicadas
        </h3>
        <ExpressionsList
          expressions={dialogue.expressions}
          theme={theme}
          activeLine={activeLine}
          onJump={setActiveLine}
        />
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <h3 style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: text.ink, margin: 0 }}>
          Transcript completo
        </h3>
        <div
          style={{
            background: surface.cream,
            borderRadius: 5,
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}
        >
          {dialogue.transcript.map((line, i) => (
            <SentencePair
              key={i}
              theme={theme}
              speaker={line.speaker}
              original={line.text}
              translation={line.es}
              active={i === activeLine}
              read={i < activeLine}
              onClick={() => setActiveLine(i)}
            />
          ))}
        </div>

        <PronunciationBar
          theme={theme}
          lang={dialogue.lang}
          activeText={dialogue.transcript[activeLine].text}
          sentenceId={activeSentenceId}
        />
      </section>
    </div>
  );
}

export default function RealEnglishReader() {
  const lang = useLangCode();
  const dialogues = getRealEnglishDialogues(lang);
  const dialogue = dialogues[0];

  // Nada seedeado todavía para este idioma — la tarjeta-teaser ya muestra
  // "Pronto"; la sección simplemente no se monta.
  if (!dialogue) return null;

  return (
    <section id="real-english" style={{ maxWidth: 1440, margin: '24px auto 0', padding: '0 32px' }}>
      <ContentWarningGate dialogue={dialogue}>
        <DialogueContent dialogue={dialogue} />
      </ContentWarningGate>
    </section>
  );
}
