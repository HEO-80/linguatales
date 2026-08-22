/**
 * src/lib/whyFeedback.js
 * Heurístico de "qué regla explica este fallo" (§1, quinta entrega — feedback
 * y examen final) para los juegos 04 y 10, y para las preguntas de palabra/
 * traducción del examen. Función pura, sin dependencias de React.
 */
import { GRAMMAR_DETAIL } from '@/data/grammar';

function words(text) {
  return (text || '')
    .toLowerCase()
    .replace(/[^a-zà-ÿ'\s]/gi, '')
    .split(/\s+/)
    .filter(Boolean);
}

/**
 * Entre las reglas del relato que tengan `caution`, la que más palabras de
 * sus ejemplos comparte con `failedText`; si ninguna casa (score 0), la
 * primera regla del relato. `overrideName` (el `rule` de un ítem, si algún
 * día lo lleva) manda si nombra una regla real de este relato — salida
 * limpia para cuando el emparejamiento heurístico falle en algún caso.
 */
export function pickGrammarRuleName(story, failedText, overrideName) {
  const candidates = (story?.grammar || []).filter((g) => GRAMMAR_DETAIL[g.name]?.caution);
  if (candidates.length === 0) return null;
  if (overrideName && candidates.some((c) => c.name === overrideName)) return overrideName;

  const failedWords = new Set(words(failedText));
  let best = null;
  let bestScore = 0;

  candidates.forEach((c) => {
    const dict = GRAMMAR_DETAIL[c.name];
    const exampleWords = new Set();
    (dict.examples || []).forEach((ex) => words(ex.en).forEach((w) => exampleWords.add(w)));
    let score = 0;
    failedWords.forEach((w) => {
      if (exampleWords.has(w)) score += 1;
    });
    if (score > bestScore) {
      bestScore = score;
      best = c.name;
    }
  });

  return best ?? candidates[0].name;
}

/** `{ label, text }` listo para <WhyBox>, o null si el relato no tiene
 * ninguna regla con `caution` (no debería pasar, pero es defensivo). */
export function grammarWhy(story, failedText, overrideName) {
  const ruleName = pickGrammarRuleName(story, failedText, overrideName);
  if (!ruleName) return null;
  return { label: `POR QUÉ · ${ruleName.toUpperCase()}`, text: GRAMMAR_DETAIL[ruleName].caution };
}
