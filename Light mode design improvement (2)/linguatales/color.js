/**
 * LinguaTales — sistema de color
 * src/theme/color.js
 *
 * TODO tono de la app se deriva por cálculo de dos colores base por idioma.
 * No hay paleta fija de pasteles y NINGÚN color de texto se escribe a mano
 * sobre una superficie con tinte: siempre pasa por fg().
 */

/* ── conversión ───────────────────────────────────────────── */

export function rgb(color) {
  if (typeof color !== 'string') return color;
  if (color.charAt(0) === '#') {
    const n = parseInt(color.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  return color.replace(/[^0-9,.]/g, '').split(',').map(Number).slice(0, 3);
}

export function str(c) {
  return `rgb(${Math.round(c[0])},${Math.round(c[1])},${Math.round(c[2])})`;
}

/* ── mezcla ───────────────────────────────────────────────── */

export function mix(a, b, t) {
  const x = rgb(a), y = rgb(b);
  return str([
    x[0] + (y[0] - x[0]) * t,
    x[1] + (y[1] - x[1]) * t,
    x[2] + (y[2] - x[2]) * t
  ]);
}

const CREAM = [252, 248, 238];
const INK   = [14, 13, 11];

/** pastel: color mezclado con crema. t alto = más claro. */
export const pastel = (color, t) => mix(color, CREAM, t);

/** dark: color mezclado con tinta. t=0.68 → fondo de tarjeta idiomática. */
export const dark = (color, t) => mix(color, INK, t);

/* ── contraste WCAG ───────────────────────────────────────── */

export function luminance(color) {
  const c = rgb(color);
  const f = v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(c[0]) + 0.7152 * f(c[1]) + 0.0722 * f(c[2]);
}

export function ratio(a, b) {
  const x = luminance(a), y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/**
 * fg — color de texto accesible.
 * Acerca `color` a negro o a blanco (según lo claro que sea el fondo)
 * hasta alcanzar `target`. Usar SIEMPRE para texto sobre un tinte.
 *
 * ⚠ El segundo argumento debe ser la superficie REAL donde se pinta el texto.
 *   Si el elemento vive en una fila resaltada, pasa tintDeep, no el fondo de página.
 */
export function fg(color, background, target = 4.5) {
  const bg = rgb(background);
  const bgIsLight = luminance(bg) > 0.45;
  const dest = bgIsLight ? [0, 0, 0] : [255, 255, 255];
  for (let i = 0; i <= 20; i++) {
    const candidate = mix(color, str(dest), i * 0.05);
    if (ratio(candidate, bg) >= target) return candidate;
  }
  return bgIsLight ? '#111111' : '#ffffff';
}

/** ¿es legible el texto blanco sobre este fondo? (para glifos sobre color pleno) */
export const whiteReadable = (background, target = 4.5) =>
  ratio('#ffffff', background) >= target;

/* ── tono base del idioma ─────────────────────────────────── */

/**
 * hue — decide con qué color se construye el tinte de un idioma.
 *
 * Un marino o un negro dan pastel gris, así que hay que tirar del color
 * secundario. Pero la puerta mide el CROMA DEL PASTEL RESULTANTE, no la
 * luminancia del original: el azul francés es oscuro pero saturado y su
 * pastel ya es azul — medir luminancia lo desviaría a rosa por error.
 *
 * Amplitudes medidas: EN 7 · DE 10 (desvían) — FR 18 · IT 28 · PT 33 · ES 48 (conservan)
 */
export function hue(lang) {
  const p = rgb(pastel(lang.p1, 0.76));
  const spread = Math.max(p[0], p[1], p[2]) - Math.min(p[0], p[1], p[2]);

  if (spread < 14) {
    const alt = lang.p3 !== '#ffffff' ? lang.p3 : lang.p2;
    return mix(lang.p1, alt, 0.68);        // EN → carmesí, DE → dorado
  }
  if (lang.warm) return mix(lang.p1, lang.p2, 0.34);  // PT → verde lima
  return lang.p1;                          // FR / ES / IT conservan su tono
}

/* ── sombras ──────────────────────────────────────────────── */

export const SHADOW =
  '0 1px 2px rgba(25,23,19,.05), 0 6px 14px rgba(25,23,19,.055), 0 16px 34px rgba(25,23,19,.05)';
export const SHADOW_SM =
  '0 1px 2px rgba(25,23,19,.05), 0 4px 10px rgba(25,23,19,.05)';
export const SHADOW_DARK =
  '0 2px 4px rgba(25,23,19,.1), 0 10px 26px rgba(25,23,19,.18)';

/* ── neutros ──────────────────────────────────────────────── */

export const NEUTRAL = {
  page:   '#f7f1e3',   // fondo de página (crema)
  cream:  '#fffdf7',   // caja interior sobre un tinte
  ink:    '#191713',
  soft:   '#4a443a',
  grey:   '#6d6658'    // pásalo por fg() antes de usarlo sobre un tinte
};
