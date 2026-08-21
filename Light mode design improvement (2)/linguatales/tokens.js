/**
 * LinguaTales — tema derivado del idioma activo
 * src/theme/tokens.js
 *
 * Uso:
 *   const theme = useMemo(() => buildTheme(lang), [lang]);
 *   <ThemeContext.Provider value={theme}>
 *
 * Ningún componente escribe hex a mano: todos leen de aquí.
 */

import {
  pastel, dark, fg, whiteReadable, hue,
  SHADOW, SHADOW_SM, SHADOW_DARK, NEUTRAL
} from './color';
import { LANGUAGES, SECTION } from './languages';

export function buildTheme(langCode) {
  const L = LANGUAGES[langCode] || LANGUAGES.EN;
  const h = hue(L);

  /* ── superficies ─────────────────────────────────────────── */
  const tint     = pastel(h, 0.84);   // cabecera, tarjeta Historias, banda de historia
  const tintDeep = pastel(h, 0.73);   // fila resaltada, pie, degradado
  const border   = pastel(h, 0.54);   // borde visible de tarjeta
  const solid    = dark(L.p1, 0.18);  // botones sólidos, avatar, badge de nivel
  const idiomBg  = dark(L.p1, 0.68);  // tarjeta idiomática (referencia de contraste)
  const idiomBg2 = dark(L.p1, 0.84);  // segundo stop de su degradado

  const grammarBg = pastel(SECTION.grammar.color, SECTION.grammar.tint);
  const gamesBg   = pastel(SECTION.games.color,   SECTION.games.tint);

  return {
    lang: L,
    hue: h,

    surface: {
      page: NEUTRAL.page,
      cream: NEUTRAL.cream,
      tint, tintDeep, border, solid,
      idiom: `linear-gradient(158deg, ${idiomBg} 0%, ${idiomBg2} 100%)`,
      idiomFlat: idiomBg,
      grammar: grammarBg,
      games: gamesBg
    },

    accent: {
      primary: L.p1,
      secondary: L.p2,
      third: L.p3,
      /** filete tricolor de la cabecera */
      flagRule: `linear-gradient(90deg, ${L.p1} 0%, ${L.p1} 33%, ${L.p2} 33%, ${L.p2} 66%, ${L.p3} 66%, ${L.p3} 100%)`,
      /** barra de progreso del idioma */
      progress: `linear-gradient(90deg, ${L.p1}, ${L.p2})`
    },

    /* ── texto: siempre derivado contra su superficie real ──── */
    text: {
      ink: NEUTRAL.ink,
      soft: NEUTRAL.soft,

      onTint:      fg(NEUTRAL.grey, tint, 4.6),
      onTintDeep:  fg(NEUTRAL.grey, tintDeep, 4.6),
      onCream:     fg(NEUTRAL.grey, NEUTRAL.cream, 4.6),
      onGames:     fg(NEUTRAL.grey, gamesBg, 4.6),
      onGrammar:   fg(NEUTRAL.grey, grammarBg, 4.6),

      primaryOnTint:   fg(L.p1, tint, 5),
      /** ⚠ el marcador ▶ vive sobre la FILA RESALTADA, no sobre la página */
      secondaryOnDeep: fg(L.p2, tintDeep, 4.6),
      secondaryOnCream: fg(L.p2, NEUTRAL.cream, 4.6),
      secondaryOnDark: fg(L.p2, idiomBg, 4.6),

      /** glifo del micrófono: se decide MIDIENDO el ratio, no comparando cadenas */
      micGlyph: whiteReadable(L.p2) ? '#ffffff' : NEUTRAL.ink
    },

    shadow: { base: SHADOW, sm: SHADOW_SM, dark: SHADOW_DARK },

    radius: { card: '5px', chip: '4px', pill: '3px' },

    font: {
      display: "'Newsreader', serif",
      body: "'Karla', sans-serif",
      mono: "'IBM Plex Mono', monospace"
    },

    /** micro-etiqueta: el patrón que se repite en toda la app */
    kicker(color, background, target = 4.6) {
      return {
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: '10px',
        letterSpacing: '1.8px',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: fg(color, background, target)
      };
    },

    /** tarjeta pastel genérica a partir de un color de acento */
    pastelCard(color, { tint: t = 0.82, borderTint = 0.56 } = {}) {
      const bg = pastel(color, t);
      return {
        background: bg,
        border: `1px solid ${pastel(color, borderTint)}`,
        borderTop: `4px solid ${color}`,
        borderRadius: '5px',
        boxShadow: SHADOW,
        textColor: fg(color, bg, 5)
      };
    }
  };
}

/**
 * Test de contraste — ejecútalo en CI.
 * Recorre los 6 idiomas y comprueba que ningún par texto/fondo baja de AA.
 */
export function auditContrast() {
  const { LANGUAGE_ORDER } = require('./languages');
  const { ratio } = require('./color');
  const failures = [];

  LANGUAGE_ORDER.forEach(code => {
    const t = buildTheme(code);
    const pairs = [
      ['onTint', t.text.onTint, t.surface.tint],
      ['onTintDeep', t.text.onTintDeep, t.surface.tintDeep],
      ['onCream', t.text.onCream, t.surface.cream],
      ['onGames', t.text.onGames, t.surface.games],
      ['primaryOnTint', t.text.primaryOnTint, t.surface.tint],
      ['secondaryOnDeep', t.text.secondaryOnDeep, t.surface.tintDeep],
      ['secondaryOnDark', t.text.secondaryOnDark, t.surface.idiomFlat],
      ['micGlyph', t.text.micGlyph, t.accent.secondary]
    ];
    pairs.forEach(([name, color, bg]) => {
      const r = ratio(color, bg);
      if (r < 4.5) failures.push(`${code}.${name} → ${r.toFixed(2)}:1`);
    });
  });

  return failures;   // [] = todo pasa
}
