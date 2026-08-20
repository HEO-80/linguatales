import { TOKEN } from '@/data/stories';

/**
 * Banco de palabras del relato para el Juego 04 (Selecciona la palabra).
 * Orden = primera aparición en el texto, determinista, sin Math.random.
 * `full = true` devuelve el banco completo (sin recortar a 6) — lo usa
 * buildDistractors para tener más candidatos de la misma función gramatical.
 */
export function buildWordBank(story, { full = false } = {}) {
  const seenText = new Set();
  const bank = [];
  story.paras.forEach((para, paraIndex) => {
    para.t.forEach((token, tokenIndex) => {
      const text = token[TOKEN.TEXT];
      const letters = text.replace(/[^a-zà-ÿ]/gi, '');
      if (letters.length <= 2) return;
      const key = text.toLowerCase();
      if (seenText.has(key)) return;
      seenText.add(key);
      bank.push({ token, paraIndex, tokenIndex });
    });
  });
  return full ? bank : bank.slice(0, 6);
}

export function buildAllEntries(story) {
  return buildWordBank(story, { full: true });
}
