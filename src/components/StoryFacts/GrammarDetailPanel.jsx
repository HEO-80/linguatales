'use client';

import { useState } from 'react';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { GRAMMAR_DETAIL } from '@/data/grammar';
import { TOKEN } from '@/data/stories';
import { verbBase, isConjugatable } from '@/lib/en-conj';
import { extractComplement, buildPracticeSentence, PRONOUNS } from '@/lib/practiceSentence';
import WhyBox from '@/components/ui/WhyBox';
import SentenceChunks from './SentenceChunks';

/**
 * Panel a todo el ancho de una regla de gramática. Las fichas de "En este
 * relato" se derivan filtrando los tokens del relato abierto por el `role`
 * que el diccionario asocia a esta regla — nunca se escriben a mano.
 *
 * Ficha manipulable (§1-4 linguatales-ficha-manipulable-spec.md): los
 * Ejemplos viven en la columna izquierda (con Cómo se forma y En este
 * relato, para que esa columna nunca quede corta); la columna derecha es
 * solo "Pruébalo" — pronombres + la frase viva — y SOLO se monta cuando la
 * ficha trae `conj: 'present-simple'`. El interruptor es ese campo de
 * datos, no un `if (detail.key === 'Present Simple')`.
 */
export default function GrammarDetailPanel() {
  const { surface, text, font, shadow } = useTheme();
  const { story, detail, setDetail } = useReader();

  const storyEntry = story.grammar.find((g) => g.name === detail.key);
  const dict = GRAMMAR_DETAIL[detail.key];

  // Sin efecto de reseteo: StoryFacts monta este componente con
  // `key={detail.key}`, así que cambiar de regla ya lo remonta entero y
  // estos useState vuelven solos a su valor por defecto.
  const [gPron, setGPron] = useState('she');
  const [gVerb, setGVerb] = useState(null);

  if (!storyEntry || !dict) return null;

  const color = storyEntry.c;
  const bg = pastel(color, 0.9);
  const kickerStyle = {
    fontFamily: font.mono,
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: '1.2px',
    textTransform: 'uppercase',
    color: fg(color, bg, 5)
  };

  // Cada entrada guarda también dónde vive el token (paraTokens + índice) —
  // hace falta para extractComplement, no solo el texto para el chip.
  const tokensInRole = [];
  const seenText = new Set();
  story.paras.forEach((para) => {
    para.t.forEach((token, tokenIndex) => {
      if (token[TOKEN.ROLE] !== dict.role) return;
      const key = token[TOKEN.TEXT].toLowerCase();
      if (seenText.has(key)) return;
      seenText.add(key);
      tokensInRole.push({ token, paraTokens: para.t, tokenIndex });
    });
  });

  const isPracticeEnabled = dict.conj === 'present-simple';
  const candidates = isPracticeEnabled ? tokensInRole.filter((e) => isConjugatable(e.token[TOKEN.TEXT])) : [];
  const selected = candidates.find((e) => e.token[TOKEN.TEXT] === gVerb) ?? candidates[0] ?? null;

  let practice = null;
  if (selected) {
    const verbText = selected.token[TOKEN.TEXT];
    const base = verbBase(verbText);
    const complementTokens = extractComplement(selected.paraTokens, selected.tokenIndex);
    practice = buildPracticeSentence({
      pron: gPron,
      verbBaseForm: base,
      esThirdPerson: selected.token[TOKEN.TRANSLATION],
      complementTokens
    });
  }

  const cream = surface.cream;

  return (
    <div
      style={{
        background: bg,
        borderTop: `4px solid ${color}`,
        borderRadius: 6,
        boxShadow: shadow.base,
        padding: '24px 26px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span style={kickerStyle}>{storyEntry.hits}</span>
          <h3 style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink, margin: 0 }}>
            {detail.key}
          </h3>
          <p style={{ fontFamily: font.body, fontSize: 14, color: text.ink, margin: 0, maxWidth: 720 }}>{dict.intro}</p>
        </div>
        <button
          onClick={() => setDetail(null)}
          aria-label="Cerrar"
          style={{ background: 'transparent', border: 'none', fontSize: 20, color: text.ink, cursor: 'pointer', padding: 0, flexShrink: 0 }}
        >
          ✕
        </button>
      </div>

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <span style={kickerStyle}>Cómo se forma</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {dict.forms.map((f) => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    background: cream,
                    borderRadius: 5,
                    padding: '8px 12px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: font.mono,
                      fontSize: 9.5,
                      fontWeight: 700,
                      letterSpacing: '0.6px',
                      textTransform: 'uppercase',
                      color: text.onCream
                    }}
                  >
                    {f.label}
                  </span>
                  <span style={{ fontFamily: font.body, fontSize: 14, color: text.ink }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>

          {tokensInRole.length > 0 && (
            <div>
              <span style={kickerStyle}>En este relato</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                {tokensInRole.map(({ token }) => {
                  const tokText = token[TOKEN.TEXT];
                  const clickable = candidates.some((e) => e.token[TOKEN.TEXT] === tokText);
                  const isSelected = clickable && selected?.token[TOKEN.TEXT] === tokText;
                  const chipBg = isSelected ? pastel(color, 0.55) : pastel(color, 0.78);
                  const Tag = clickable ? 'button' : 'span';
                  return (
                    <Tag
                      key={tokText}
                      onClick={clickable ? () => setGVerb(tokText) : undefined}
                      style={{
                        display: 'inline-flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        lineHeight: 1.3,
                        background: chipBg,
                        border: isSelected ? `2px solid ${color}` : '2px solid transparent',
                        borderRadius: 4,
                        padding: isSelected ? '3px 8px 4px' : '4px 9px 5px',
                        cursor: clickable ? 'pointer' : 'default',
                        boxShadow: isSelected ? `0 0 0 1px ${color}55, 0 4px 10px ${color}33` : 'none'
                      }}
                    >
                      <span style={{ fontFamily: font.display, fontSize: 15, color: text.ink, whiteSpace: 'nowrap' }}>
                        {tokText}
                      </span>
                      <span
                        style={{
                          fontFamily: font.body,
                          fontSize: 10.5,
                          fontStyle: 'italic',
                          whiteSpace: 'nowrap',
                          color: fg(color, chipBg, 4.6)
                        }}
                      >
                        {token[TOKEN.TRANSLATION]}
                      </span>
                    </Tag>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <span style={kickerStyle}>Ejemplos</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {dict.examples.map((ex) => (
                <div
                  key={ex.en}
                  style={{ background: cream, borderRadius: 5, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 3 }}
                >
                  <span style={{ fontFamily: font.display, fontSize: 16, color: text.ink }}>{ex.en}</span>
                  <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: text.onCream }}>{ex.es}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {isPracticeEnabled && practice && (
          <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={kickerStyle}>Pruébalo</span>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {PRONOUNS.map((p) => {
                const active = p === gPron;
                const pillBg = active ? pastel(color, 0.5) : pastel(color, 0.85);
                return (
                  <button
                    key={p}
                    onClick={() => setGPron(p)}
                    style={{
                      fontFamily: font.mono,
                      fontSize: 12.5,
                      fontWeight: 700,
                      color: fg(color, pillBg, 4.6),
                      background: pillBg,
                      border: 'none',
                      borderRadius: 4,
                      padding: '6px 13px',
                      cursor: 'pointer',
                      boxShadow: active ? `0 0 0 1px ${color}55, 0 4px 10px ${color}33` : 'none'
                    }}
                  >
                    {p}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Afirmativa', en: practice.en.affirmative, es: practice.es?.affirmative },
                { label: 'Negativa', en: practice.en.negative, es: practice.es?.negative },
                { label: 'Pregunta', en: practice.en.question, es: practice.es?.question }
              ].map((row) => (
                <div key={row.label} style={{ background: cream, borderRadius: 5, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <span
                    style={{
                      fontFamily: font.mono,
                      fontSize: 9.5,
                      fontWeight: 700,
                      letterSpacing: '0.6px',
                      textTransform: 'uppercase',
                      color: text.onCream
                    }}
                  >
                    {row.label}
                  </span>
                  <SentenceChunks chunks={row.en} />
                  {row.es && (
                    <span style={{ fontFamily: font.body, fontSize: 13, fontStyle: 'italic', color: text.onCream }}>
                      {row.es}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onCream }}>
              Con {gPron} + {practice.displayedEn}
              {practice.esGloss ? ` (${practice.esGloss})` : ''}
            </span>
          </div>
        )}
      </div>

      <WhyBox label="Cuidado con esto" text={dict.caution} />
    </div>
  );
}
