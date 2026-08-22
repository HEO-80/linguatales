'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTheme } from '@/theme/ThemeContext';
import { useAuth } from '@/state/AuthContext';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot } from '@/lib/storage/progressStore';
import { emitReaderNav, subscribeReaderView } from '@/state/readerNavBus';
import { subscribeToSrs, getSrsSnapshot, getSrsServerSnapshot, cardsOf } from '@/state/srs';
import { deriveSrsQueue } from '@/lib/srs';
import AuthModal from '../Auth/AuthModal';
import UserMenu from '../Auth/UserMenu';

const SECTIONS = [
  { key: 'stories', label: 'Historias', anchor: '#reader', nav: 'story' },
  { key: 'phrases', label: 'Frases', anchor: '#reader', nav: 'phrases' },
  { key: 'grammar', label: 'Gramática', anchor: '#grammar', nav: null },
  { key: 'idiom', label: null /* dinámico: lang.navIdiom */, anchor: '#idiom', nav: null },
  { key: 'linkers', label: 'Conectores', anchor: '#reader', nav: 'linkers' },
  { key: 'games', label: 'Juegos', anchor: '#games', nav: 'games' },
  { key: 'srs', label: null /* dinámico: Repaso · N */, anchor: '#reader', nav: 'srs' }
];

/** `view` del lector ('story'|'phrases'|'linkers'|'game'|'srs') → sección
 * del nav secundario que debe marcarse (§4 linguatales-conectores-spec.md,
 * ampliada en linguatales-srs-spec.md). Gramática y Phrasal Verbs/Expresiones
 * no tienen `view` propio — viven dentro de view === 'story', así que caen
 * en "Historias", igual que el resto. */
function sectionForView(view) {
  if (view === 'phrases') return 'phrases';
  if (view === 'linkers') return 'linkers';
  if (view === 'game') return 'games';
  if (view === 'srs') return 'srs';
  return 'stories';
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

export default function AppHeader() {
  const theme = useTheme();
  const { lang, surface, accent, text, font, shadow } = theme;
  // Se deriva de `view` (emitido por ReaderProvider vía readerNavBus, ver
  // §4 linguatales-conectores-spec.md) — no de qué se pulsó por última vez.
  // Fuera de la página de un relato nadie emite, y se queda en 'stories'.
  const [active, setActive] = useState('stories');
  useEffect(() => subscribeReaderView((view) => setActive(sectionForView(view))), []);
  const [authOpen, setAuthOpen] = useState(false);
  const { user, loading } = useAuth();
  const progress = useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot);
  const streak = user ? computeStreakDays(progress) : 0;
  const langCode = useLangCode();
  const levelCode = useLevelCode();
  const srsSnapshot = useSyncExternalStore(subscribeToSrs, getSrsSnapshot, getSrsServerSnapshot);
  const srsDueCount =
    langCode && levelCode
      ? deriveSrsQueue(cardsOf(langCode, levelCode, srsSnapshot), srsSnapshot.day).dueCount
      : 0;
  const srsLabel = srsDueCount > 0 ? `Repaso · ${srsDueCount}` : 'Repaso';
  const langSlug = toLangSlug(langCode);
  const levelSlug = toLevelSlug(levelCode ?? DEFAULT_LEVEL);
  const params = useParams();
  const num = params?.num;
  const base = num ? `/${langSlug}/${levelSlug}/story/${num}` : `/${langSlug}/${levelSlug}`;

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

        <nav style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {SECTIONS.map((s) => {
            const label = s.key === 'idiom' ? lang.navIdiom : s.key === 'srs' ? srsLabel : s.label;
            const isActive = active === s.key;
            return (
              <Link
                key={s.key}
                href={`${base}${s.anchor}`}
                onClick={() => {
                  if (s.nav) emitReaderNav(s.nav);
                }}
                style={{
                  fontFamily: font.body,
                  fontSize: 13.5,
                  color: isActive ? text.ink : text.onTint,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  paddingBottom: 4,
                  borderBottom: isActive ? `2px solid ${accent.secondary}` : '2px solid transparent'
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>

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

      {authOpen && <AuthModal onClose={() => setAuthOpen(false)} />}
    </header>
  );
}
