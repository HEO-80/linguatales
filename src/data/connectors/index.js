/**
 * LinguaTales — catálogo de conectores
 * src/data/connectors/index.js
 *
 * Misma forma de clave que historias/frases: IDIOMA/NIVEL. Ver en.js para
 * el estado real de los datos (placeholder — ver el aviso al inicio de ese
 * archivo, pendiente de sustitución por el material verbatim del curso).
 */
import { CONNECTORS } from './en.js';

const key = (lang, level) => `${lang}/${level}`;

/** { note, groups: [...] } de este idioma y nivel, o null si no existe. */
export const connectorsOf = (lang, level) => CONNECTORS[key(lang, level)] || null;
