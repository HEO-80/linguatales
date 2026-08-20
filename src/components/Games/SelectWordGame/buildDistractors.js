import { TOKEN, shuffleSeed } from '@/data/stories';
import { buildAllEntries } from './buildWordBank';

/**
 * 4 opciones para el modo "choice" del Juego 04: la entrada correcta +
 * hasta 3 distractores, priorizando palabras de la misma función
 * gramatical (más difícil de adivinar por descarte) y completando con
 * otras funciones si el relato es corto.
 */
export function buildDistractors(entry, allEntries, seedBase) {
  const role = entry.token[TOKEN.ROLE];
  const others = allEntries.filter((e) => e !== entry && e.token[TOKEN.TEXT] !== entry.token[TOKEN.TEXT]);
  const sameRole = others.filter((e) => e.token[TOKEN.ROLE] === role);
  const otherRole = others.filter((e) => e.token[TOKEN.ROLE] !== role);
  const picked = shuffleSeed(sameRole, seedBase).concat(shuffleSeed(otherRole, seedBase + '-2')).slice(0, 3);
  return shuffleSeed([entry, ...picked], seedBase + '-order');
}

export { buildAllEntries };
