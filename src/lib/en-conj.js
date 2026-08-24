/**
 * src/lib/en-conj.js
 * Conjugación inglesa para la ficha manipulable (§3
 * linguatales-ficha-manipulable-spec.md) — funciones puras, sin React.
 *
 * `verbBase` reconstruye el infinitivo a partir de la forma en 3ª persona
 * que trae el chip del relato («opens», «leaves»); `conjugate3rd` hace el
 * camino de vuelta. Se separan porque `verbBase` tiene que aceptar CUALQUIER
 * forma que aparezca en un relato (a veces ya es la base, si el chip salió
 * de un contexto I/you/we/they) — de ahí el fallback identidad al final de
 * cada cascada.
 */

const IRREGULAR_3RD = { have: 'has' };
const IRREGULAR_BASE = { has: 'have' };

/** «opens» → «open», «watches» → «watch», «tries» → «try», «makes» → «make». */
export function verbBase(word) {
  const w = word.toLowerCase();
  if (IRREGULAR_BASE[w]) return IRREGULAR_BASE[w];
  if (/ies$/.test(w)) return w.slice(0, -3) + 'y';
  if (/(?:[sxzo]es|(?:sh|ch)es)$/.test(w)) return w.slice(0, -2);
  if (/es$/.test(w)) return w.slice(0, -1); // silent-e: makes→make, comes→come
  if (/ss$/.test(w)) return w; // 'kiss' no debería llegar aquí (ya lo coge la regla anterior)
  if (/s$/.test(w)) return w.slice(0, -1);
  return w;
}

/** «open» → «opens», «watch» → «watches», «try» → «tries», «have» → «has». */
export function conjugate3rd(base) {
  const b = base.toLowerCase();
  if (IRREGULAR_3RD[b]) return IRREGULAR_3RD[b];
  if (/[^aeiou]y$/.test(b)) return b.slice(0, -1) + 'ies';
  if (/(?:s|sh|ch|x|o)$/.test(b)) return b + 'es';
  return b + 's';
}

/**
 * Verbos que NO hay que dejar seleccionar en la ficha manipulable: cópulas
 * y negaciones ya conjugadas (is/doesn't — conjugarlas otra vez no tiene
 * sentido), modales (invariantes, no llevan -s de 3ª persona) y pasados —
 * regulares (sufijo -ed) e irregulares comunes que pueden colarse en un
 * relato que mezcla Present Simple con Past Simple. Es una lista con la que
 * defenderse del corpus real, no un diccionario exhaustivo de inglés.
 */
const SKIP_VERBS = new Set([
  'is', 'are', 'am', "isn't", "aren't",
  "doesn't", "don't", "didn't", "wasn't", "weren't",
  'was', 'were',
  'can', "can't", 'could', "couldn't",
  'will', "won't", 'would', "wouldn't",
  'shall', 'should', "shouldn't",
  'must', 'may', 'might',
  'took', 'made', 'had', 'said', 'went', 'came', 'ate', 'got', 'put',
  'told', 'felt', 'built', 'bought', 'knew', 'gave', 'found', 'left',
  'met', 'wrote', 'drove', 'spoke', 'broke', 'chose', 'spent', 'sent',
  'kept', 'held', 'wore', 'threw', 'saw', 'ran', 'drank', 'thought'
]);

/** ¿Es razonable dejar que el usuario elija este verbo para la ficha
 * manipulable? Descarta cópulas, modales, pasados y negaciones ya hechas —
 * conjugar cualquiera de esos por la vía de la -s de 3ª persona rompería la
 * frase (§ Definición de terminado: "ningún verbo del relato genera una
 * frase rota"). */
export function isConjugatable(word) {
  const w = word.toLowerCase();
  if (SKIP_VERBS.has(w)) return false;
  if (/ed$/.test(w)) return false; // pasado regular
  return true;
}
