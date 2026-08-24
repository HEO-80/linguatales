'use client';

import { useState, useRef, useSyncExternalStore } from 'react';
import { pastel } from '@/theme/color';
import { useTheme } from '@/theme/ThemeContext';
import { useAuth } from '@/state/AuthContext';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import { subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot } from '@/lib/storage/progressStore';
import LanguagePopover from '@/components/Rail/LanguagePopover';
import LevelPopover from '@/components/Rail/LevelPopover';
import ToolsPopover from './ToolsPopover';
import AuthModal from '../Auth/AuthModal';
import UserMenu from '../Auth/UserMenu';

/** Pastilla del header: altura fija (36px, box-sizing: border-box) para las
 * tres por igual — antes, sin altura fija, la de Herramientas quedaba 4px
 * más baja que las otras dos por no llevar chip de valor (§1
 * tres-barras-spec). Activa (su popover abierto): fondo crema y borde;
 * inactiva: transparente; hover: fondo crema en los dos casos. */
function HeaderPill({ innerRef, active, onClick, chip, label, ariaLabel }) {
  const { surface, text, font } = useTheme();
  const [hover, setHover] = useState(false);
  const filled = active || hover;

  return (
    <button
      ref={innerRef}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={ariaLabel}
      style={{
        height: 36,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 12px',
        background: filled ? surface.cream : 'transparent',
        border: filled ? `1px solid ${surface.border}` : '1px solid transparent',
        borderRadius: 6,
        cursor: 'pointer'
      }}
    >
      <span style={{ fontFamily: font.body, fontSize: 13, fontWeight: 600, color: text.ink }}>{label}</span>
      {chip && (
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10.5,
            fontWeight: 700,
            color: text.onCream,
            background: pastel(text.ink, 0.9),
            borderRadius: 3,
            padding: '2px 6px'
          }}
        >
          {chip}
        </span>
      )}
      <span style={{ fontFamily: font.mono, fontSize: 9, color: text.onTint }}>▾</span>
    </button>
  );
}

/** Días consecutivos con actividad real (hoy o ayer hacia atrás), a partir
 * de las fechas de intentos de pronunciación y progreso de historias — no
 * un contador aparte que se pueda desincronizar de lo que de verdad pasó. */
function computeStreakDays(progress) {
  const dates = [
    ...progress.pronunciationAttempts.map((a) => a.created_at),
    ...Object.values(progress.storyProgress).map((p) => p.updated_at)
  ];
  if (dates.length === 0) return 0;

  const days = new Set(dates.map((d) => new Date(d).toDateString()));
  const cursor = new Date();
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);

  let streak = 0;
  while (days.has(cursor.toDateString())) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

/**
 * src/components/AppHeader/AppHeader.jsx
 * Barra superior: solo ajustes globales (§1 tres-barras-spec) — Idioma,
 * Nivel y Herramientas. Las siete secciones del nivel (Historias, Frases,
 * Gramática...) bajaron a SectionsBar, justo debajo de LanguageBar: son
 * sitios de esta página, no ajustes globales, y no comparten pastilla con
 * ellos.
 */
export default function AppHeader() {
  const theme = useTheme();
  const { surface, accent, text, font, shadow } = theme;
  const [authOpen, setAuthOpen] = useState(false);
  const { user, loading } = useAuth();
  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);
  const streak = user ? computeStreakDays(progress) : 0;
  const langCode = useLangCode();
  const levelCode = useLevelCode();

  const [langOpen, setLangOpen] = useState(false);
  const [levelOpen, setLevelOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const langBtnRef = useRef(null);
  const levelBtnRef = useRef(null);
  const toolsBtnRef = useRef(null);

  // Un popover a la vez: abrir uno cierra los otros dos.
  const openLang = () => { setLangOpen((o) => !o); setLevelOpen(false); setToolsOpen(false); };
  const openLevel = () => { setLevelOpen((o) => !o); setLangOpen(false); setToolsOpen(false); };
  const openTools = () => { setToolsOpen((o) => !o); setLangOpen(false); setLevelOpen(false); };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: surface.tint,
        borderBottom: `1px solid ${surface.border}`,
        boxShadow: '0 2px 12px rgba(25,23,19,.06)'
      }}
    >
      <div style={{ height: 4, background: accent.flagRule }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '14px 32px',
          maxWidth: 1440,
          margin: '0 auto'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
          <span style={{ fontFamily: font.display, fontSize: 29, fontWeight: 600, color: text.ink }}>
            LinguaTales
          </span>
          <span
            style={{
              fontFamily: font.mono,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              color: text.onTint
            }}
          >
            Historias · Pronunciación
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div>
              <HeaderPill
                innerRef={langBtnRef}
                active={langOpen}
                onClick={openLang}
                label="Idioma"
                chip={langCode}
                ariaLabel="Cambiar idioma"
              />
              {langOpen && (
                <LanguagePopover levelCode={levelCode} anchorRef={langBtnRef} onClose={() => setLangOpen(false)} />
              )}
            </div>

            <div>
              <HeaderPill
                innerRef={levelBtnRef}
                active={levelOpen}
                onClick={openLevel}
                label="Nivel"
                chip={levelCode ?? DEFAULT_LEVEL}
                ariaLabel="Cambiar nivel"
              />
              {levelOpen && (
                <LevelPopover
                  langCode={langCode}
                  activeLevel={levelCode ?? DEFAULT_LEVEL}
                  anchorRef={levelBtnRef}
                  onClose={() => setLevelOpen(false)}
                />
              )}
            </div>

            <div>
              <HeaderPill
                innerRef={toolsBtnRef}
                active={toolsOpen}
                onClick={openTools}
                label="Herramientas"
                chip={null}
                ariaLabel="Ajustes de herramientas"
              />
              {toolsOpen && <ToolsPopover anchorRef={toolsBtnRef} onClose={() => setToolsOpen(false)} />}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {user && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '6px 12px',
                  borderRadius: 4,
                  background: surface.cream,
                  border: `1px solid ${surface.border}`,
                  boxShadow: shadow.sm
                }}
              >
                <span style={{ fontFamily: font.mono, fontSize: 13, fontWeight: 700, color: text.primaryOnTint }}>
                  🔥 {streak}
                </span>
                <span
                  style={{
                    fontFamily: font.mono,
                    fontSize: 9.5,
                    letterSpacing: '1.4px',
                    textTransform: 'uppercase',
                    color: text.onCream
                  }}
                >
                  días
                </span>
              </div>
            )}

            {!loading && (user ? (
              <UserMenu />
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                style={{
                  background: surface.solid,
                  color: '#fffdf7',
                  fontFamily: font.body,
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 5,
                  padding: '8px 14px',
                  boxShadow: shadow.sm
                }}
              >
                Iniciar sesión
              </button>
            ))}
          </div>
        </div>
      </div>

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </header>
  );
}
