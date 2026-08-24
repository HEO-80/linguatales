/**
 * src/lib/es-conj.js
 * Conjuga al vuelo la traducción en 3ª persona que ya traen los datos
 * («abre», «prepara») a la persona pedida, para la ficha manipulable
 * (§3 linguatales-ficha-manipulable-spec.md). Función pura, sin React.
 *
 * Principio rector: si no está seguro, `null` — antes sin traducción que
 * con castellano mal.
 */

/** Paradigma completo solo para los irregulares que salen en el material. */
const IRREGULAR = {
  huele: { yo: 'huelo', tu: 'hueles', el: 'huele', nosotros: 'olemos', ellos: 'huelen' },
  sale: { yo: 'salgo', tu: 'sales', el: 'sale', nosotros: 'salimos', ellos: 'salen' },
  viene: { yo: 'vengo', tu: 'vienes', el: 'viene', nosotros: 'venimos', ellos: 'vienen' },
  dice: { yo: 'digo', tu: 'dices', el: 'dice', nosotros: 'decimos', ellos: 'dicen' },
  tiene: { yo: 'tengo', tu: 'tienes', el: 'tiene', nosotros: 'tenemos', ellos: 'tienen' },
  hace: { yo: 'hago', tu: 'haces', el: 'hace', nosotros: 'hacemos', ellos: 'hacen' }
};

/** -ir en vez de -er para la forma "nosotros" (viven las mismas terminaciones
 * salvo esa). */
const IR_VERBS = new Set(['abre', 'vive', 'escribe', 'sube', 'recibe', 'parte']);

const PRONOUN_KEY = { I: 'yo', you: 'tu', he: 'el', she: 'el', it: 'el', we: 'nosotros', they: 'ellos' };

/**
 * `thirdPersonForm` es la traducción tal como viene en los datos (3ª
 * persona: «abre», «sale de»). Puede traer el resto de la frase pegado
 * («sale de») — se conjuga solo la primera palabra y se reengancha el resto.
 */
export function conjugateEs(thirdPersonForm, pron) {
  if (!thirdPersonForm) return null;
  const key = PRONOUN_KEY[pron];
  if (!key) return null;
  if (key === 'el') return thirdPersonForm; // ya viene en 3ª persona

  const spaceIdx = thirdPersonForm.indexOf(' ');
  const verb = (spaceIdx === -1 ? thirdPersonForm : thirdPersonForm.slice(0, spaceIdx)).toLowerCase();
  const rest = spaceIdx === -1 ? '' : thirdPersonForm.slice(spaceIdx); // incluye el espacio inicial

  const irregular = IRREGULAR[verb];
  if (irregular) return irregular[key] + rest;

  if (verb.endsWith('a')) {
    const stem = verb.slice(0, -1);
    const endings = { yo: 'o', tu: 'as', nosotros: 'amos', ellos: 'an' };
    return stem + endings[key] + rest;
  }
  if (verb.endsWith('e')) {
    const stem = verb.slice(0, -1);
    const endings = { yo: 'o', tu: 'es', nosotros: IR_VERBS.has(verb) ? 'imos' : 'emos', ellos: 'en' };
    return stem + endings[key] + rest;
  }

  return null; // no reconocido — mejor sin traducción que con una mala
}
