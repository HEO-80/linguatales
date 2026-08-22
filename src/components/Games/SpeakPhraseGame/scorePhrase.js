/**
 * src/components/Games/SpeakPhraseGame/scorePhrase.js
 * Puntuación determinista del Juego 08 (§3 linguatales-conectores-spec.md)
 * — sin Math.random, para que servidor y cliente calculen siempre la misma
 * nota ante el mismo (bloque, índice de frase).
 */
export function scorePhrase(text, { sphIndex, phrBlock }) {
  const rawWords = text.split(/\s+/).filter(Boolean);
  const seed = (sphIndex + 1) * 41 + phrBlock * 17;
  const words = rawWords.map((w, i) => ({
    w,
    score: 62 + ((seed + i * 29 + w.length * 13) % 39)
  }));
  const overall = Math.round(words.reduce((sum, x) => sum + x.score, 0) / words.length);
  return { overall, words };
}
