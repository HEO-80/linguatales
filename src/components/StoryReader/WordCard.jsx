'use client';

import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { ROLES, TOKEN } from '@/data/stories';
import { useReader } from '@/state/ReaderContext';
import { speakSentence } from '@/lib/azure/tts';

/** Ficha de la palabra seleccionada — se renderiza bajo el texto del relato. */
export default function WordCard() {
  const { lang: L, surface, text, font, shadow } = useTheme();
  const { lang: langCode, word, setWord, setRoleFilter } = useReader();

  if (!word) return null;

  const { token } = word;
  const role = token[TOKEN.ROLE];
  const roleDef = ROLES[role];
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
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
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
        </div>
        <button
          onClick={() => setWord(null)}
          aria-label="Cerrar"
          style={{ background: 'transparent', border: 'none', fontSize: 18, color: text.onCream, cursor: 'pointer', padding: 0 }}
        >
          ✕
        </button>
      </div>

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
            onClick={() => setRoleFilter(role)}
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
  );
}
