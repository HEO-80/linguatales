'use client';

import { useState } from 'react';
import { useTheme } from '@/theme/ThemeContext';
import { useIsMobile } from '@/lib/hooks/useIsMobile';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import LanguageBadge from './LanguageBadge';
import LevelBadge from './LevelBadge';
import LanguageRail from './LanguageRail';
import LevelRail from './LevelRail';

/**
 * src/components/Sidebar/Sidebar.jsx
 * Sidebar izquierdo colapsable (icono compacto, expande al hover/click en
 * escritorio) + drawer con hamburguesa en móvil.
 */
export default function Sidebar({ mobileOpen, onCloseMobile }) {
  const { surface, shadow } = useTheme();
  const isMobile = useIsMobile();
  const langCode = useLangCode();
  const level = useLevelCode() ?? DEFAULT_LEVEL;
  const [expanded, setExpanded] = useState(false);

  if (isMobile) {
    if (!mobileOpen) return null;

    return (
      <>
        <div
          onClick={onCloseMobile}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 90 }}
        />
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            width: 'min(85vw, 320px)',
            zIndex: 91,
            background: surface.cream,
            boxShadow: shadow.dark,
            overflowY: 'auto',
            padding: 20
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
            <span style={{ fontWeight: 700 }}>Idioma y nivel</span>
            <button
              onClick={onCloseMobile}
              aria-label="Cerrar menú"
              style={{ background: 'transparent', border: 'none', fontSize: 20, cursor: 'pointer', padding: 0 }}
            >
              ✕
            </button>
          </div>
          <LanguageRail activeCode={langCode} currentLevel={level} onNavigate={onCloseMobile} />
          <div style={{ height: 1, background: surface.border, margin: '16px 0' }} />
          <LevelRail langCode={langCode} activeLevel={level} onNavigate={onCloseMobile} />
        </div>
      </>
    );
  }

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((e) => !e)}
      style={{
        width: expanded ? 232 : 64,
        transition: 'width .18s',
        flexShrink: 0,
        alignSelf: 'stretch',
        background: surface.tint,
        borderRight: `1px solid ${surface.border}`,
        padding: expanded ? 16 : 12,
        cursor: 'pointer',
        overflow: 'hidden'
      }}
    >
      {expanded ? (
        <div style={{ cursor: 'default' }}>
          <LanguageRail activeCode={langCode} currentLevel={level} onNavigate={() => setExpanded(false)} />
          <div style={{ height: 1, background: surface.border, margin: '12px 0' }} />
          <LevelRail langCode={langCode} activeLevel={level} onNavigate={() => setExpanded(false)} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
          <LanguageBadge code={langCode} size={44} />
          <LevelBadge levelCode={level} size={36} />
        </div>
      )}
    </aside>
  );
}
