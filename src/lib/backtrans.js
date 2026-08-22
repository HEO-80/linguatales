/**
 * src/lib/backtrans.js
 * Evaluación de traducción inversa (§2 linguatales-traduccion-inversa-spec.md)
 * — dos funciones puras, sin dependencias de React ni de la UI. La respuesta
 * del usuario y la modelo se juntan en `evaluate`, el único punto por el que
 * pasaría una corrección por IA el día que se añada (ver spec, "la puerta a
 * la IA queda abierta").
 */

/** Contracciones que expande `norm`, en el orden exacto que importa: las
 * fijas de una palabra (can't, won't) antes que la regla genérica `n't`, o
 * "can't" saldría "can not" en vez de "cannot". */
const FIXED_CONTRACTIONS = [
  [/\bcan't\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bit's\b/g, 'it is'],
  [/\bthat's\b/g, 'that is'],
  [/\blet's\b/g, 'let us']
];

const SUFFIX_CONTRACTIONS = [
  [/'re\b/g, ' are'],
  [/'m\b/g, ' am'],
  [/'ll\b/g, ' will'],
  [/'ve\b/g, ' have'],
  [/'d\b/g, ' would'],
  [/n't\b/g, ' not']
];

/** minúsculas · comillas curvas a rectas · contracciones expandidas · sin
 * puntuación · espacios colapsados. Así "Can you cook?", "can you cook" y
 * "Can you cook." normalizan a la misma cadena. */
export function norm(s) {
  let t = (s || '').toLowerCase().replace(/[’]/g, "'");
  for (const [re, rep] of FIXED_CONTRACTIONS) t = t.replace(re, rep);
  for (const [re, rep] of SUFFIX_CONTRACTIONS) t = t.replace(re, rep);
  t = t.replace(/[.,!?;:¡¿"“”]/g, '');
  return t.replace(/\s+/g, ' ').trim();
}

/**
 * Compara palabra a palabra contra la modelo consumiendo un pool — una
 * palabra de la modelo solo puede casar una vez, así que repetir una palabra
 * del usuario nunca la marca en verde dos veces. `missing` es lo que quedó
 * sin casar en el pool: lo que le faltó decir al usuario.
 */
export function diff(user, model) {
  const userWords = norm(user).split(' ').filter(Boolean);
  const pool = norm(model).split(' ').filter(Boolean);

  const marks = userWords.map((w) => {
    const idx = pool.indexOf(w);
    if (idx === -1) return { w, ok: false };
    pool.splice(idx, 1);
    return { w, ok: true };
  });

  return { marks, missing: pool, exact: norm(user) === norm(model) };
}

/**
 * Prueba la respuesta modelo y sus variantes (`item.alt`, § "pendiente de
 * datos" — vacío hasta que el material del curso las traiga) y se queda con
 * la exacta si hay alguna, o si no, con la que menos palabras deja sin casar
 * — el desglose más útil posible. Reunir aquí user/model es justo lo que dice
 * la spec: el único punto que necesitaría tocar una corrección por IA futura.
 */
export function evaluate(userText, item) {
  const candidates = [item.a, ...(item.alt || [])];
  let best = null;
  for (const model of candidates) {
    const result = diff(userText, model);
    if (result.exact) return { ...result, model };
    if (!best || result.missing.length < best.missing.length) best = { ...result, model };
  }
  return best;
}
