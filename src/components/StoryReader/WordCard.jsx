'use client';

import { useMemo } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES, ROLE_PATTERNS, TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { speakSentence } from '@/lib/azure/tts';

/** Ficha de la palabra seleccionada — se renderiza bajo el texto del relato. */
export default function WordCard() {
  const { lang: L, surface, text, font, shadow } = useTheme();
  const { lang: langCode, story, word, setWord, setRoleFilter } = useReader();

  const role = word?.token[TOKEN.ROLE];

  const otherWords = useMemo(() => {
    if (!word) return [];
    const seen = new Set();
    const out = [];
    story.paras.forEach((para, pIdx) => {
      para.t.forEach((tok, tIdx) => {
        if (tok[TOKEN.ROLE] !== role) return;
        if (pIdx === word.paraIndex && tIdx === word.tokenIndex) return;
        const key = tok[TOKEN.TEXT].toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);
        out.push({ paraIndex: pIdx, tokenIndex: tIdx, token: tok });
      });
    });
    return out;
  }, [story, word, role]);

  if (!word) return null;

  const { token } = word;
  const roleDef = ROLES[role];
  const patternDef = ROLE_PATTERNS[role];
  const isPhrasal = role === 'phr';
  const bg = pastel(roleDef.color, 0.8);

  return (
    <div
      style={{
        background: bg,
        borderLeft: `5px solid ${roleDef.color}`,
        borderRadius: 5,
        boxShadow: shadow.base,
        padding: '18px 20px',
        marginTop: 16,
        display: 'grid',
        gridTemplateColumns: '1fr 300px 20px',
        gap: 20,
        alignItems: 'start'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span
          style={{
            alignSelf: 'flex-start',
            fontFamily: font.mono,
            fontSize: 9.5,
            fontWeight: 700,
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            color: '#fffdf7',
            background: roleDef.color,
            borderRadius: 4,
            padding: '3px 8px'
          }}
        >
          {roleDef.label}
        </span>
        <span style={{ fontFamily: font.display, fontSize: 30, fontWeight: 600, color: text.ink }}>
          {token[TOKEN.TEXT]}
        </span>
        <span style={{ fontFamily: font.body, fontSize: 14, fontStyle: 'italic', color: text.onCream }}>
          {token[TOKEN.TRANSLATION]}
        </span>
        <p style={{ fontFamily: font.body, fontSize: 13.5, color: text.ink, margin: 0, maxWidth: 560 }}>
          {token[TOKEN.EXPLAIN]}
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {isPhrasal ? (
            <a
              href="#idiom"
              style={{
                fontFamily: font.body,
                fontSize: 13,
                fontWeight: 600,
                color: text.ink,
                background: surface.cream,
                borderRadius: 5,
                padding: '8px 14px',
                textDecoration: 'none'
              }}
            >
              → Ver en {L.navIdiom}
            </a>
          ) : (
            <a
              href="#grammar"
              onClick={() => setRoleFilter([role])}
              style={{
                fontFamily: font.body,
                fontSize: 13,
                fontWeight: 600,
                color: text.ink,
                background: surface.cream,
                borderRadius: 5,
                padding: '8px 14px',
                textDecoration: 'none'
              }}
            >
              → Ver la regla de {roleDef.label}
            </a>
          )}
          <button
            onClick={() => speakSentence(token[TOKEN.TEXT], { lang: langCode }).catch(() => {})}
            style={{
              fontFamily: font.body,
              fontSize: 13,
              fontWeight: 600,
              color: text.ink,
              background: surface.cream,
              border: 'none',
              borderRadius: 5,
              padding: '8px 14px',
              cursor: 'pointer'
            }}
          >
            ◍ Escuchar
          </button>
        </div>
      </div>

      <div
        style={{
          background: surface.cream,
          border: `1px solid ${roleDef.color}`,
          borderRadius: 5,
          padding: '14px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }}
      >
        <span style={{ fontFamily: font.display, fontSize: 19, color: text.ink }}>{patternDef.pattern}</span>
        {patternDef.note && (
          <span style={{ fontFamily: font.body, fontSize: 12.5, fontStyle: 'italic', color: text.onCream }}>
            {patternDef.note}
          </span>
        )}

        {otherWords.length > 0 && (
          <>
            <div style={{ height: 1, background: surface.border }} />
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {otherWords.map((w) => (
                <button
                  key={`${w.paraIndex}-${w.tokenIndex}`}
                  onClick={() => setWord(w)}
                  style={{
                    fontFamily: font.body,
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: text.ink,
                    background: pastel(roleDef.color, 0.82),
                    border: 'none',
                    borderRadius: 4,
                    padding: '4px 9px',
                    cursor: 'pointer'
                  }}
                >
                  {w.token[TOKEN.TEXT]}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <button
        onClick={() => setWord(null)}
        aria-label="Cerrar"
        style={{
          justifySelf: 'end',
          background: 'transparent',
          border: 'none',
          fontSize: 18,
          color: text.onCream,
          cursor: 'pointer',
          padding: 0
        }}
      >
        ✕
      </button>
    </div>
  );
}
