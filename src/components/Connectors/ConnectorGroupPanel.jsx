'use client';

import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useReader } from '@/state/ReaderContext';
import { srsStatus, SRS_STATUS, SRS_STATUS_COLOR, SRS_STATUS_LABEL } from '@/lib/srs';
import { SECTION_COLOR, REGISTER_COLOR } from './ConnectorsSection';

/** Tres puntos de 7px: `g` en color de la sección, el resto en pastel — la
 * complejidad gramatical se lee de un vistazo, sin números. */
function ComplexityDots({ g }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: n <= g ? SECTION_COLOR : pastel(SECTION_COLOR, 0.78)
          }}
        />
      ))}
    </div>
  );
}

function arrowStyle(cream) {
  return {
    width: 30,
    height: 30,
    borderRadius: 4,
    background: cream,
    border: `1px solid ${pastel(SECTION_COLOR, 0.5)}`,
    color: fg(SECTION_COLOR, cream, 4.6),
    fontFamily: 'inherit',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    flexShrink: 0
  };
}

/**
 * Panel del grupo de conectores abierto (§4
 * linguatales-frases-de-uno-en-uno-spec.md) — un conector a la vez, con
 * flechas y contador en la cabecera del grupo. `cxRow` se resetea al
 * cambiar de grupo o al entrar desde el nav (ReaderContext.jsx).
 */
export default function ConnectorGroupPanel({ note, group }) {
  const { surface, text, font, shadow, accent } = useTheme();
  const { srsCards, srsDay, cxRow, setCxRow } = useReader();

  const cream = surface.cream;
  const noteColor = fg(SECTION_COLOR, cream, 4.6);
  const total = group.items.length;
  const row = Math.min(cxRow, total - 1);
  const item = group.items[row];
  const registerColor = REGISTER_COLOR[item.r] || REGISTER_COLOR.neutro;

  const goRow = (delta) => setCxRow(((row + delta) % total + total) % total);

  return (
    <div
      style={{
        background: cream,
        borderTop: `4px solid ${SECTION_COLOR}`,
        borderRadius: 6,
        boxShadow: shadow.base,
        padding: '20px 22px 22px',
        marginTop: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}
    >
      {note && (
        <p style={{ fontFamily: font.body, fontSize: 13.5, color: noteColor, margin: 0, maxWidth: '62ch' }}>
          {note}
        </p>
      )}

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <div
          style={{
            flex: '1 1 260px',
            background: pastel(SECTION_COLOR, 0.85),
            borderRadius: 5,
            padding: '10px 14px'
          }}
        >
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: fg(SECTION_COLOR, pastel(SECTION_COLOR, 0.85), 4.6)
            }}
          >
            Eje 1 · complejidad gramatical
          </div>
          <div style={{ fontFamily: font.body, fontSize: 12.5, color: text.ink, marginTop: 3 }}>
            Cuánto inglés necesitas para usarlo bien.
          </div>
        </div>
        <div
          style={{
            flex: '1 1 260px',
            background: pastel(SECTION_COLOR, 0.85),
            borderRadius: 5,
            padding: '10px 14px'
          }}
        >
          <div
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.8px',
              textTransform: 'uppercase',
              color: fg(SECTION_COLOR, pastel(SECTION_COLOR, 0.85), 4.6)
            }}
          >
            Eje 2 · registro
          </div>
          <div style={{ fontFamily: font.body, fontSize: 12.5, color: text.ink, marginTop: 3 }}>
            Casual en conversación, neutro, o formal y escrito.
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ fontFamily: font.display, fontSize: 21, fontWeight: 600, color: text.ink, margin: 0 }}>
            {group.title}
          </h3>
          {group.sub && (
            <span
              style={{
                fontFamily: font.mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: fg(SECTION_COLOR, cream, 4.6)
              }}
            >
              {group.sub}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button aria-label="Conector anterior" onClick={() => goRow(-1)} style={arrowStyle(cream)}>‹</button>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 11,
              fontWeight: 700,
              color: fg(SECTION_COLOR, pastel(SECTION_COLOR, 0.8), 5),
              background: pastel(SECTION_COLOR, 0.8),
              borderRadius: 4,
              padding: '4px 10px'
            }}
          >
            {row + 1} / {total}
          </span>
          <button aria-label="Conector siguiente" onClick={() => goRow(1)} style={arrowStyle(cream)}>›</button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: '1 1 280px', display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
          <span style={{ fontFamily: font.display, fontSize: 23, color: text.ink }}>{item.en}</span>
          <span style={{ fontFamily: font.body, fontSize: 13.5, fontStyle: 'italic', color: text.onCream }}>
            {item.es}
          </span>
        </div>

        <span style={{ flex: '1 1 280px', fontFamily: font.body, fontSize: 14.5, color: text.ink, lineHeight: 1.5, minWidth: 0 }}>
          {item.ej}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div
            style={{
              background: pastel(SECTION_COLOR, 0.85),
              borderRadius: 4,
              padding: '5px 8px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ComplexityDots g={item.g} />
          </div>
          {(() => {
            const status = srsStatus(srsCards[`cx:${item.en}`], srsDay);
            if (status === SRS_STATUS.UNSEEN) return null;
            return (
              <span
                title={SRS_STATUS_LABEL[status]}
                style={{ width: 7, height: 7, borderRadius: '50%', background: SRS_STATUS_COLOR[status], flexShrink: 0 }}
              />
            );
          })()}
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 9.5,
              fontWeight: 700,
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
              color: fg(registerColor, pastel(registerColor, 0.8), 4.6),
              background: pastel(registerColor, 0.8),
              borderRadius: 4,
              padding: '4px 8px'
            }}
          >
            {item.r}
          </span>
        </div>
      </div>

      <div
        style={{
          background: pastel(accent.secondary, 0.82),
          borderRadius: 5,
          padding: '10px 14px',
          fontFamily: font.body,
          fontSize: 12.5,
          color: fg(accent.secondary, pastel(accent.secondary, 0.82), 4.6)
        }}
      >
        Los conectores de A1 son transversales: siguen apareciendo en todos los niveles.
      </div>
    </div>
  );
}
