/**
 * src/components/Games/BackTranslateGame/buildBacktransBank.js
 * Banco del Juego 10 — cada frase del bloque activo da DOS ítems (§2
 * linguatales-traduccion-inversa-spec.md): la frase (es → en) y su
 * contestación (re[1] → re[0]). 10 frases = 20 ítems, sin escribir
 * contenido nuevo. `id` es el sufijo de la clave SRS: 'f<i>' / 'r<i>'.
 */
export function buildBacktransBank(block) {
  if (!block) return [];
  const items = [];
  block.items.forEach((item, i) => {
    items.push({
      id: `f${i}`,
      q: item.es,
      a: item.en,
      alt: item.alt || [], // pendiente de datos — ver backtrans.js
      hint: item.tip,
      rule: item.rule || null // salida limpia si el heurístico de "por qué" falla — ver lib/whyFeedback.js
    });
    items.push({
      id: `r${i}`,
      q: item.re[1],
      a: item.re[0],
      alt: item.reAlt || [],
      hint: `Es la contestación a "${item.en}"`,
      rule: item.reRule || null
    });
  });
  return items;
}
