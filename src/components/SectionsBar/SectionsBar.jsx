'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTheme } from '@/theme/ThemeContext';
import { useLangCode, useLevelCode, DEFAULT_LEVEL } from '@/lib/routes/useRouteCodes';
import { toLangSlug, toLevelSlug } from '@/lib/routes/langLevel';
import { emitReaderNav, subscribeReaderView } from '@/state/readerNavBus';
import { subscribeToSrs, getSrsSnapshot, getSrsServerSnapshot, cardsOf } from '@/state/srs';
import { deriveSrsQueue } from '@/lib/srs';

const SECTIONS = [
  { key: 'stories', label: 'Historias', anchor: '#reader', nav: 'story' },
  { key: 'phrases', label: 'Frases', anchor: '#reader', nav: 'phrases' },
  { key: 'grammar', label: 'Gramática', anchor: '#grammar', nav: 'grammar' },
  { key: 'idiom', label: null /* dinámico: lang.navIdiom */, anchor: '#idiom', nav: 'idiom' },
  { key: 'linkers', label: 'Conectores', anchor: '#reader', nav: 'linkers' },
  { key: 'games', label: 'Juegos', anchor: '#games', nav: 'games' },
  { key: 'srs', label: null /* dinámico: Repaso · N */, anchor: '#reader', nav: 'srs' }
];

/** `view` + `detail` → sección que debe marcarse (§4 tres-barras-spec).
 * Gramática y Phrasal Verbs no tienen `view` propio — viven dentro de
 * view === 'story', pero se iluminan cuando SU ficha está abierta
 * (detail.kind), no solo con el relato en pantalla; si no hay detail
 * abierto, view === 'story' cae en Historias como antes. */
function sectionForView(view, detail) {
  if (detail?.kind === 'g') return 'grammar';
  if (detail?.kind === 'p') return 'idiom';
  if (view === 'phrases') return 'phrases';
  if (view === 'linkers') return 'linkers';
  if (view === 'game') return 'games';
  if (view === 'srs') return 'srs';
  return 'stories';
}

/**
 * src/components/SectionsBar/SectionsBar.jsx
 * Barra de secciones del nivel (§1-2 tres-barras-spec): baja de AppHeader a
 * su propia barra de 50px bajo LanguageBar, con el mismo fondo que el
 * header (surface.tint). Las siete pastillas navegan de verdad — incluidas
 * Gramática y Phrasal Verbs, que antes no llevaban a ningún sitio.
 */
export default function SectionsBar() {
  const theme = useTheme();
  const { lang, surface, accent, text, font } = theme;
  const langCode = useLangCode();
  const levelCode = useLevelCode();
  const [active, setActive] = useState('stories');
  useEffect(() => subscribeReaderView((view, detail) => setActive(sectionForView(view, detail))), []);

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
    <div style={{ background: surface.tint, borderBottom: `1px solid ${surface.border}` }}>
      <div
        style={{
          height: 50,
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          gap: 20
        }}
      >
        <span
          style={{
            fontFamily: font.mono,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            color: text.onTint,
            flexShrink: 0
          }}
        >
          Nivel {levelCode ?? DEFAULT_LEVEL}
        </span>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
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
                  fontSize: 13,
                  color: isActive ? text.ink : text.onTint,
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  background: isActive ? surface.cream : 'transparent',
                  borderRadius: 4,
                  padding: '6px 12px',
                  borderBottom: isActive ? `2px solid ${accent.secondary}` : '2px solid transparent'
                }}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
