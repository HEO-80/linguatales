/**
 * LinguaTales — motivos por idioma
 * src/components/LanguageShelf/motifs/index.jsx
 *
 * Marca de agua geométrica en la esquina de cada tarjeta de idioma.
 * Reglas: viewBox 0 0 24 24 · sin relleno · stroke="currentColor" 1.4px ·
 * mínimos y reconocibles, NO ilustraciones detalladas.
 *
 * El color y la opacidad los pone el contenedor:
 *   { position:'absolute', right:-14, top:6, width:96, height:96,
 *     color: lang.p1, opacity: active ? .2 : .13, pointerEvents:'none' }
 */

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  viewBox: '0 0 24 24',
  width: '100%',
  height: '100%'
};

/** Inglés — torre del reloj (Big Ben) */
export const BigBen = () => (
  <svg {...base}>
    <path d="M9 22V9h6v13" />
    <path d="M12 3l3 3.2H9L12 3z" />
    <circle cx="12" cy="13" r="3.1" />
    <path d="M12 13v-1.9M12 13l1.5 1" />
  </svg>
);

/** Español — sol */
export const Sun = () => (
  <svg {...base}>
    <circle cx="12" cy="12" r="4.4" />
    <path d="M12 2.4v2.6M12 19v2.6M2.4 12h2.6M19 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
  </svg>
);

/** Francés — torre Eiffel */
export const EiffelTower = () => (
  <svg {...base}>
    <path d="M12 2.6L5.4 21.4M12 2.6l6.6 18.8" />
    <path d="M8.6 12h6.8M7.1 16.6h9.8M10.6 7.4h2.8" />
  </svg>
);

/** Alemán — puerta de Brandeburgo */
export const BrandenburgGate = () => (
  <svg {...base}>
    <path d="M3.4 8.4h17.2M4.6 8.4V21M9.4 8.4V21M14.6 8.4V21M19.4 8.4V21" />
    <path d="M3.4 8.4L12 4l8.6 4.4" />
  </svg>
);

/** Italiano — Coliseo */
export const Colosseum = () => (
  <svg {...base}>
    <path d="M3 20.6V9.4a9 9 0 0118 0v11.2" />
    <path d="M7.4 20.6v-4.2a2.2 2.2 0 014.4 0v4.2M12.4 20.6v-4.2a2.2 2.2 0 014.4 0v4.2" />
    <path d="M3 13.6h18" />
  </svg>
);

/** Portugués — Cristo Redentor */
export const Cristo = () => (
  <svg {...base}>
    <circle cx="12" cy="4.6" r="2" />
    <path d="M12 6.8v11.4M4 10.2h16M9.4 21.4h5.2" />
  </svg>
);

export const MOTIFS = { BigBen, Sun, EiffelTower, BrandenburgGate, Colosseum, Cristo };

/** <Motif name={lang.motif} /> */
export default function Motif({ name }) {
  const Cmp = MOTIFS[name];
  return Cmp ? <Cmp /> : null;
}
