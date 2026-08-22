/**
 * src/components/Games/LinkerGame/buildLinkerQuestions.js
 * Deriva las preguntas del Juego 09 de las propias fichas de conectores del
 * nivel (§6 linguatales-conectores-spec.md) — nunca se escriben a mano.
 */

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Para entradas con varias formas ('later / later on'), prueba de la más
 * larga a la más corta con \b…\b, sin distinguir mayúsculas — así 'later on'
 * se hueca entero y nunca queda un '_____ on' suelto. Devuelve la primera
 * forma que aparece, o null si ninguna aparece en el ejemplo.
 */
function findForm(en, ej) {
  const forms = en
    .split('/')
    .map((f) => f.trim())
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  for (const form of forms) {
    const re = new RegExp(`\\b${escapeRegex(form)}\\b`, 'i');
    if (re.test(ej)) return { form, re };
  }
  return null;
}

/**
 * Aplana los grupos de `data` (una entrada de connectorsOf) en preguntas de
 * hueco — una por conector cuya forma aparece de verdad en su propio
 * ejemplo. Las entradas que no la tienen se filtran, no se fuerzan.
 */
export function buildLinkerQuestions(data) {
  if (!data) return [];
  const questions = [];
  data.groups.forEach((group, groupIndex) => {
    group.items.forEach((item, itemIndex) => {
      const found = findForm(item.en, item.ej);
      if (!found) return;
      questions.push({
        groupIndex,
        itemIndex,
        en: item.en,
        answer: found.form,
        blanked: item.ej.replace(found.re, '_____'),
        ej: item.ej,
        es: item.es,
        r: item.r,
        g: item.g
      });
    });
  });
  return questions;
}

/** Dos distractores tomados de OTRAS preguntas del nivel, rotados por índice. */
export function pick2(arr, k) {
  const n = arr.length;
  return [arr[(k * 3 + 1) % n], arr[(k * 3 + 2) % n]];
}
