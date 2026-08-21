/**
 * LinguaTales — identidad por idioma, niveles y colores de sección
 * src/theme/languages.js
 */

/**
 * p1 / p2 / p3 = las tres franjas de bandera que se pintan en la cabecera
 * de cada tarjeta de idioma. p1 es también el color estructural (botones,
 * badges, avatar) y p2 el de resalte (marcador de frase activa, micrófono).
 *
 * warm:true → mezcla parte del secundario en el tinte. Solo en PT, para que
 * su verde lima se distinga del verde más frío del italiano.
 */
export const LANGUAGES = {
  EN: {
    code: 'EN', name: 'Inglés', native: 'English',
    p1: '#12275e', p2: '#cf142b', p3: '#ffffff',
    navIdiom: 'Phrasal Verbs',
    motif: 'BigBen',
    stories: 184, hint: ''
  },
  ES: {
    code: 'ES', name: 'Español', native: 'Español',
    p1: '#c8102e', p2: '#f4a900', p3: '#c8102e',
    navIdiom: 'Modismos',
    motif: 'Sun',
    stories: 32, hint: '32 relatos'
  },
  FR: {
    code: 'FR', name: 'Francés', native: 'Français',
    p1: '#17368f', p2: '#e1223b', p3: '#ffffff',
    navIdiom: 'Expressions',
    motif: 'EiffelTower',
    stories: 28, hint: '28 relatos'
  },
  DE: {
    code: 'DE', name: 'Alemán', native: 'Deutsch',
    p1: '#1d1d1d', p2: '#dd2b1c', p3: '#f5c518',
    navIdiom: 'Trennbare Verben',
    motif: 'BrandenburgGate',
    stories: 24, hint: '24 relatos'
  },
  IT: {
    code: 'IT', name: 'Italiano', native: 'Italiano',
    p1: '#0b8a4b', p2: '#ce2b37', p3: '#ffffff',
    navIdiom: 'Verbi pronominali',
    motif: 'Colosseum',
    stories: 21, hint: '21 relatos'
  },
  PT: {
    code: 'PT', name: 'Portugués', native: 'Português',
    p1: '#009a4e', p2: '#ffcb00', p3: '#2b3a8f',
    navIdiom: 'Expressões',
    motif: 'Cristo',
    stories: 19, hint: '19 relatos', warm: true
  }
};

/** Orden de la estantería. Inglés primero: es el idioma protagonista. */
export const LANGUAGE_ORDER = ['EN', 'ES', 'FR', 'DE', 'IT', 'PT'];

/**
 * Escalera de niveles. `height` da la progresión visual de escalón.
 * `pct` es de ejemplo: sustitúyelo por el progreso real del usuario.
 */
export const LEVELS = [
  { code: 'A1', color: '#0e9f6e', height: 48,  pct: 100, title: 'Primeros pasos' },
  { code: 'A2', color: '#3f9d2f', height: 60,  pct: 100, title: 'Vida cotidiana' },
  { code: 'B1', color: '#e0a80c', height: 72,  pct: 62,  title: 'Relatos intermedios' },
  { code: 'B2', color: '#f97316', height: 84,  pct: 0,   title: 'Narrativa larga' },
  { code: 'C1', color: '#e11d48', height: 96,  pct: 0,   title: 'Registro literario' },
  { code: 'C2', color: '#7c3aed', height: 108, pct: 0,   title: 'Matiz y estilo' }
];

/** Colores fijos de sección — no dependen del idioma. */
export const SECTION = {
  grammar:   { color: '#0e9f6e', tint: 0.82 },   // menta
  games:     { color: '#f97316', tint: 0.84 },   // melocotón
  gapFill:   { color: '#0891b2', tint: 0.80 },
  dictation: { color: '#7c3aed', tint: 0.80 },
  pending:   { color: '#8d8674', tint: 0.88 }
};

/** Métricas de pronunciación. */
export const PRONUNCIATION_METRICS = [
  { key: 'Fluidez', color: '#0e9f6e' },
  { key: 'Ritmo',   color: '#e0a80c' },
  { key: 'Fonemas', color: '#e11d48' }
];

/** Estados de relato → color de la etiqueta. `accent` usa el p2 del idioma. */
export const STORY_STATUS = {
  'Leído':    { color: '#0e9f6e' },
  'En curso': { accent: true },
  'Nuevo':    { neutral: true }
};
