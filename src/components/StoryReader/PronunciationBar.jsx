'use client';

import { pastel, fg } from '@/theme/color';
import { PRONUNCIATION_METRICS } from '@/theme/languages';
import { useTheme } from '@/theme/ThemeContext';
import { useAppState } from '@/state/AppStateContext';
import { getLanguageData } from '@/data';
import Waveform from './Waveform';

const SAMPLE_SCORES = { Fluidez: 92, Ritmo: 87, Fonemas: 90 };
const ACCURACY = 91;

function HighlightedExample({ example, phoneme, color }) {
  const idx = example.toLowerCase().indexOf(phoneme.toLowerCase());
  if (idx === -1) return <>{example}</>;
  const before = example.slice(0, idx);
  const match = example.slice(idx, idx + phoneme.length);
  const after = example.slice(idx + phoneme.length);
  return (
    <>
      {before}
      <span style={{ color, fontWeight: 700 }}>{match}</span>
      {after}
    </>
  );
}

export default function PronunciationBar() {
  const theme = useTheme();
  const { surface, accent, text, font, shadow } = theme;
  const { lang, sentenceIndex } = useAppState();
  const { story } = getLanguageData(lang);

  const activeSentence = story.sentences[sentenceIndex] || story.sentences[0];
  const accuracyBg = pastel('#0e9f6e', 0.82);
  const accuracyFg = fg('#0e9f6e', accuracyBg, 5.5);

  return (
    <div
      style={{
        background: surface.cream,
        borderLeft: `5px solid ${accent.secondary}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '20px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }}
    >
      <p style={{ fontFamily: font.display, fontSize: 20, color: text.ink, margin: 0 }}>“{activeSentence.text}”</p>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <button
          aria-label="Grabar pronunciación"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: accent.secondary,
            boxShadow: `0 0 0 6px ${accent.secondary}2b`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 20,
            color: text.micGlyph,
            flexShrink: 0
          }}
        >
          ●
        </button>
        <Waveform />
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        {PRONUNCIATION_METRICS.map((m) => {
          const bg = pastel(m.color, 0.84);
          const fgColor = fg(m.color, bg, 5.5);
          return (
            <div key={m.key} style={{ flex: 1, background: bg, borderRadius: 5, padding: '10px 12px' }}>
              <div
                style={{
                  fontFamily: font.mono,
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: fgColor
                }}
              >
                {m.key}
              </div>
              <div style={{ fontFamily: font.display, fontSize: 28, fontWeight: 600, color: fgColor }}>
                {SAMPLE_SCORES[m.key]}%
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ background: accuracyBg, borderRadius: 5, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              color: accuracyFg
            }}
          >
            Precisión
          </span>
          <span style={{ fontFamily: font.display, fontSize: 22, fontWeight: 600, color: accuracyFg }}>{ACCURACY}%</span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: 'rgba(25,23,19,.08)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${ACCURACY}%`, background: '#0e9f6e' }} />
        </div>
        <span style={{ fontFamily: font.body, fontSize: 12.5, color: accuracyFg }}>
          Sonido a practicar:{' '}
          <HighlightedExample example={story.pronunciation.example} phoneme={story.pronunciation.phoneme} color="#0e9f6e" />
          {' — '}
          {story.pronunciation.description}
        </span>
      </div>
    </div>
  );
}
