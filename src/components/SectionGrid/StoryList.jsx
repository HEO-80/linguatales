'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { pastel, fg } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useLangCode, useLevelCode } from '@/lib/routes/useRouteCodes';
import { toLangSlug, toLevelSlug, isPilotedLangLevel } from '@/lib/routes/langLevel';
import { useAuth } from '@/state/AuthContext';
import { getLevelContent } from '@/data';
import { subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot } from '@/lib/storage/progressStore';
import ComingSoonPanel from '../ComingSoon/ComingSoonPanel';

const STATUS_LABEL = { nuevo: 'Nuevo', en_curso: 'En curso', leido: 'Leído' };

function StatusTag({ status, langAccent }) {
  const { font } = useTheme();
  let color;
  if (status === 'Leído') color = '#0e9f6e';
  else if (status === 'En curso') color = langAccent;
  else color = '#8d8674';

  const bg = pastel(color, 0.78);
  const fgColor = fg(color, bg, 5);

  return (
    <span
      style={{
        fontFamily: font.mono,
        fontSize: 9.5,
        fontWeight: 700,
        letterSpacing: '1px',
        textTransform: 'uppercase',
        color: fgColor,
        background: bg,
        borderRadius: 4,
        padding: '3px 7px'
      }}
    >
      {status}
    </span>
  );
}

export default function StoryList() {
  const theme = useTheme();
  const { surface, accent, text, font } = theme;
  const langCode = useLangCode();
  const level = useLevelCode();
  const { user } = useAuth();
  const [hovered, setHovered] = useState(null);
  const { stories } = getLevelContent(langCode, level);

  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);
  const progressMap = progress.storyProgress;

  if (!isPilotedLangLevel(langCode, level)) {
    return (
      <div
        style={{
          background: surface.cream,
          borderRadius: 5,
          overflow: 'hidden',
          border: `1px solid ${surface.border}`
        }}
      >
        <ComingSoonPanel />
      </div>
    );
  }

  const langSlug = toLangSlug(langCode);
  const levelSlug = toLevelSlug(level);

  // El status de data/*.js es solo contenido semilla (relleno visual) — el
  // estado real de lectura sale siempre de Supabase. Sin una fila real ahí,
  // se muestra 'Nuevo', nunca el status inventado del seed.
  const rows = stories.map((s) => {
    const persisted = progressMap[s.id];
    return { ...s, status: persisted ? STATUS_LABEL[persisted.status] : 'Nuevo' };
  });

  return (
    <div
      style={{
        background: surface.cream,
        borderRadius: 5,
        overflow: 'hidden',
        border: `1px solid ${surface.border}`
      }}
    >
      {!user && rows.length > 0 && (
        <div
          style={{
            padding: '9px 16px',
            fontFamily: font.body,
            fontSize: 12,
            color: text.onCream,
            background: surface.tint,
            borderBottom: `1px solid ${surface.border}`
          }}
        >
          Regístrate para guardar qué relatos vas leyendo.
        </div>
      )}
      {rows.length === 0 ? (
        <div style={{ padding: '22px 16px', fontFamily: font.body, fontSize: 13, color: text.onCream }}>
          Todavía no hay relatos en este nivel para {langCode}.
        </div>
      ) : (
        rows.map((s, i) => (
          <Link
            key={s.id}
            href={`/${langSlug}/${levelSlug}/story/${s.id}`}
            onMouseEnter={() => setHovered(s.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '12px 16px',
              background: hovered === s.id ? surface.tintDeep : 'transparent',
              borderTop: i === 0 ? 'none' : `1px solid ${surface.border}`,
              textDecoration: 'none'
            }}
          >
            <span style={{ fontFamily: font.mono, fontSize: 12, color: text.onCream, width: 18 }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: font.display,
                  fontSize: 17,
                  color: text.ink,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {s.title}
              </div>
              <div style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream }}>{s.subtitle}</div>
            </div>
            <StatusTag status={s.status} langAccent={accent.secondary} />
            <span style={{ fontFamily: font.mono, fontSize: 11.5, color: text.onCream, width: 40, textAlign: 'right' }}>
              {s.duration}
            </span>
          </Link>
        ))
      )}
    </div>
  );
}
