/**
 * src/lib/practiceSentence.js
 * Motor de la ficha manipulable (§3-4 linguatales-ficha-manipulable-spec.md)
 * — funciones puras, sin React. Junta la extracción del complemento (lista
 * blanca de roles, no lista negra de conjunciones — es lo que más veces se
 * rompió) con el montaje de la frase en TROZOS, no en un string, para poder
 * pintar en verde solo lo que cambia.
 */
import { TOKEN } from '../data/stories/index.js';
import { conjugate3rd } from './en-conj.js';
import { conjugateEs } from './es-conj.js';

const SUBJECT_EN = { I: 'I', you: 'You', he: 'He', she: 'She', it: 'It', we: 'We', they: 'They' };
const SUBJECT_EN_LOWER = { I: 'I', you: 'you', he: 'he', she: 'she', it: 'it', we: 'we', they: 'they' };
const SUBJECT_ES = { I: 'Yo', you: 'Tú', he: 'Él', she: 'Ella', it: 'Eso', we: 'Nosotros', they: 'Ellos' };
const IS_THIRD = { I: false, you: false, he: true, she: true, it: true, we: false, they: false };

export const PRONOUNS = ['I', 'you', 'he', 'she', 'it', 'we', 'they'];

/**
 * Complemento del verbo: desde `verbIndex`, avanza aceptando SOLO roles de
 * complemento (art/adj/noun/prep/adv) — un pron o un verb/phr ya es otra
 * oración («She leaves home she puts on…» tiene que cortar en «home»).
 * Luego recorta por el final hasta que el último token sea noun o adv, para
 * no dejar una preposición o un adjetivo colgando. Puede devolver [] — «She
 * leaves.» es un resultado válido, no un fallo.
 */
const COMPLEMENT_ROLES = new Set(['art', 'adj', 'noun', 'prep', 'adv']);

export function extractComplement(paraTokens, verbIndex) {
  let end = verbIndex + 1;
  while (end < paraTokens.length && COMPLEMENT_ROLES.has(paraTokens[end][TOKEN.ROLE])) {
    end += 1;
  }
  let slice = paraTokens.slice(verbIndex + 1, end);
  while (slice.length > 0) {
    const lastRole = slice[slice.length - 1][TOKEN.ROLE];
    if (lastRole === 'noun' || lastRole === 'adv') break;
    slice = slice.slice(0, -1);
  }
  return slice;
}

function commonPrefixLength(a, b) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i += 1;
  return i;
}

function buildAffirmative(pron, base, conjugated, isThird, complementEn) {
  const chunks = [{ t: `${SUBJECT_EN[pron]} ` }];
  if (isThird) {
    const p = commonPrefixLength(base, conjugated);
    chunks.push({ t: conjugated.slice(0, p) });
    chunks.push({ t: conjugated.slice(p), green: true });
  } else {
    chunks.push({ t: base });
  }
  chunks.push({ t: complementEn ? ` ${complementEn}.` : '.' });
  return chunks;
}

function buildNegative(pron, base, isThird, complementEn) {
  const aux = isThird ? "doesn't" : "don't";
  return [
    { t: `${SUBJECT_EN[pron]} ` },
    { t: aux, green: true },
    { t: ` ${base}${complementEn ? ` ${complementEn}` : ''}.` }
  ];
}

function buildQuestion(pron, base, isThird, complementEn) {
  const aux = isThird ? 'Does' : 'Do';
  return [
    { t: aux, green: true },
    { t: ` ${SUBJECT_EN_LOWER[pron]} ${base}${complementEn ? ` ${complementEn}` : ''}?` }
  ];
}

/**
 * `verbBaseForm`: infinitivo ya extraído (ver en-conj.js). `esThirdPerson`:
 * la traducción en 3ª persona tal como viene en los datos (puede llevar el
 * resto de la frase pegado, «sale de»). `complementTokens`: el array que
 * devuelve extractComplement — se reutiliza tal cual para el inglés (tk[0])
 * y para el español (tk[2]), así las dos frases están garantizadas a hablar
 * del mismo complemento.
 */
export function buildPracticeSentence({ pron, verbBaseForm, esThirdPerson, complementTokens }) {
  const isThird = IS_THIRD[pron];
  const conjugatedEn = isThird ? conjugate3rd(verbBaseForm) : verbBaseForm;
  const displayedEn = isThird ? conjugatedEn : verbBaseForm;
  const complementEn = complementTokens.map((tk) => tk[TOKEN.TEXT]).join(' ');
  const complementEs = complementTokens.map((tk) => tk[TOKEN.TRANSLATION]).join(' ');

  const en = {
    affirmative: buildAffirmative(pron, verbBaseForm, conjugatedEn, isThird, complementEn),
    negative: buildNegative(pron, verbBaseForm, isThird, complementEn),
    question: buildQuestion(pron, verbBaseForm, isThird, complementEn)
  };

  const esVerb = conjugateEs(esThirdPerson, pron);
  let es = null;
  let esGloss = null;
  if (esVerb) {
    const subj = SUBJECT_ES[pron];
    const tail = complementEs ? ` ${complementEs}` : '';
    es = {
      affirmative: `${subj} ${esVerb}${tail}.`,
      negative: `${subj} no ${esVerb}${tail}.`,
      question: `¿${subj} ${esVerb}${tail}?`
    };
    esGloss = esVerb.split(' ')[0];
  }

  return { en, es, displayedEn, esGloss };
}
