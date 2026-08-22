'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { connectorsOf } from '@/data/connectors';
import ConnectorGroupPanel from './ConnectorGroupPanel';

export const SECTION_COLOR = '#155e75';
export const REGISTER_COLOR = { casual: '#0e7490', neutro: '#57534e', formal: '#7c3aed' };

/**
 * src/components/Connectors/ConnectorsSection.jsx
 * Conectores — va debajo de las frases, encima de los juegos (§5
 * linguatales-conectores-spec.md). Cabecera + chips siempre visibles, panel
 * plegado: el mismo tratamiento que PhrasesSection, en el acento de esta
 * sección (#155e75) en vez de ámbar.
 */
export default function ConnectorsSection() {
  const { surface, text, font } = useTheme();
  const { lang, level, view, cxGroup, openLinkerGroup } = useReader();

  const data = connectorsOf(lang, level);
  if (!data || data.groups.length === 0) return null;

  const totalConnectors = data.groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section style={{ maxWidth: 1440, margin: '20px auto 0', padding: '0 32px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 12
        }}
      >
        <span style={{ fontFamily: font.display, fontSize: 20, fontWeight: 600, color: text.ink }}>
          Conectores
        </span>
        <span style={{ fontFamily: font.mono, fontSize: 10.5, color: text.onTint }}>
          {totalConnectors} conectores cargados · nivel {level}
        </span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {data.groups.map((g, i) => {
          const isOpen = view === 'linkers' && cxGroup === i;
          const chipBg = isOpen ? pastel(SECTION_COLOR, 0.7) : surface.cream;
          return (
            <button
              key={g.title}
              onClick={() => openLinkerGroup(i)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                textAlign: 'left',
                cursor: 'pointer',
                minWidth: 210,
                background: chipBg,
                border: isOpen ? 'none' : `1px solid ${pastel(SECTION_COLOR, 0.5)}`,
                borderLeft: `4px solid ${isOpen ? SECTION_COLOR : pastel(SECTION_COLOR, 0.55)}`,
                borderRadius: 5,
                padding: '10px 14px',
                boxShadow: isOpen ? `0 2px 8px ${SECTION_COLOR}2b` : 'none'
              }}
            >
              <span
                style={{
                  fontFamily: font.mono,
                  fontSize: 9.5,
                  fontWeight: 700,
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  color: fg(SECTION_COLOR, chipBg, 4.6)
                }}
              >
                Conectores · {g.items.length}
              </span>
              <span style={{ fontFamily: font.display, fontSize: 15, color: text.ink }}>{g.title}</span>
              <span style={{ fontFamily: font.mono, fontSize: 9, color: fg(SECTION_COLOR, chipBg, 4.6) }}>
                {isOpen ? '▾ Abierto' : `▸ Ver los ${g.items.length}`}
              </span>
            </button>
          );
        })}
      </div>

      {view === 'linkers' && cxGroup != null && data.groups[cxGroup] && (
        <ConnectorGroupPanel note={data.note} group={data.groups[cxGroup]} />
      )}
    </section>
  );
}
