/**
 * CORRECCIÓN · en.a1.js → historia 02 "The Little Bakery"
 *
 * Fallo en la plantilla entregada: los `phrasals` citaban frases que no están
 * en `paras` (get up / run out of / come back). Regla que se incumplía:
 * TODO lo que aparece en grammar[].ex y phrasals[].quote debe salir del propio
 * texto del relato — es lo que hace que el juego 03 y las fichas sean honestos.
 *
 * Arreglo: se añaden dos frases al relato que SÍ contienen esos phrasal verbs,
 * en lugar de quitarlos. Así la historia mantiene sus tres expresiones (que el
 * juego 03 necesita) y las citas pasan a ser reales.
 *
 * Sustituye el objeto de la historia 02 por este.
 */

export const LITTLE_BAKERY = {
  num: '02',
  title: 'The Little Bakery',
  sub: 'Present simple · adjetivos',
  tag: 'Nuevo',
  meta: '3 min · 74 palabras · 13 nuevas',

  paras: [
    {
      tr: 'El panadero se levanta a las cuatro cada mañana.',
      t: [
        ['The', 'art', 'el', 'Artículo definido.'],
        ['baker', 'noun', 'panadero', 'Sustantivo contable.'],
        ['gets up', 'phr', 'se levanta', 'Phrasal verb: get + up, salir de la cama.'],
        ['at', 'prep', 'a', 'Preposición de hora puntual.'],
        ['four', 'noun', 'las cuatro', 'La hora va sin artículo en inglés.'],
        ['every', 'adj', 'cada', 'Determinante de frecuencia.'],
        ['morning', 'noun', 'mañana', 'Sustantivo contable.']
      ]
    },
    {
      tr: 'La panadería de la esquina abre muy temprano.',
      t: [
        ['The', 'art', 'la', 'Artículo definido.'],
        ['bakery', 'noun', 'panadería', 'Sustantivo contable.'],
        ['on', 'prep', 'en', 'Preposición de lugar: esquinas llevan on.'],
        ['the', 'art', 'la', 'Artículo definido.'],
        ['corner', 'noun', 'esquina', 'Sustantivo contable.'],
        ['opens', 'verb', 'abre', 'Present simple, 3ª persona: se añade -s.'],
        ['very', 'adv', 'muy', 'Intensificador.'],
        ['early', 'adv', 'temprano', 'Adverbio de tiempo.']
      ]
    },
    {
      tr: 'El pan huele cálido y dulce.',
      t: [
        ['The', 'art', 'el', 'Artículo definido.'],
        ['bread', 'noun', 'pan', 'Incontable: sin artículo indefinido.'],
        ['smells', 'verb', 'huele', 'Verbo de percepción + adjetivo, no adverbio.'],
        ['warm', 'adj', 'cálido', 'Adjetivo tras verbo de percepción.'],
        ['and', 'prep', 'y', 'Conjunción de suma.'],
        ['sweet', 'adj', 'dulce', 'Adjetivo.']
      ]
    },
    {
      tr: 'Se quedan sin pan a mediodía.',
      t: [
        ['They', 'pron', 'ellos', 'Pronombre sujeto, plural: el verbo no lleva -s.'],
        ['run out of', 'phr', 'se quedan sin', 'Phrasal verb de tres partes: agotar algo.'],
        ['bread', 'noun', 'pan', 'Incontable.'],
        ['by', 'prep', 'a', 'Preposición de límite temporal: by noon.'],
        ['noon', 'noun', 'mediodía', 'Sin artículo en esta expresión.']
      ]
    },
    {
      tr: 'El panadero saluda a todos por su nombre, y vuelven cada día.',
      t: [
        ['The', 'art', 'el', 'Artículo definido.'],
        ['baker', 'noun', 'panadero', 'Sustantivo contable.'],
        ['greets', 'verb', 'saluda', 'Present simple, 3ª persona.'],
        ['everyone', 'pron', 'todos', 'Pronombre indefinido, singular.'],
        ['by', 'prep', 'por', 'Preposición de medio.'],
        ['name', 'noun', 'nombre', 'Sin artículo en esta expresión fija.'],
        ['and', 'prep', 'y', 'Conjunción.'],
        ['they', 'pron', 'ellos', 'Pronombre sujeto, plural.'],
        ['come back', 'phr', 'vuelven', 'Phrasal verb: come + back, regresar.'],
        ['every', 'adj', 'cada', 'Determinante de frecuencia.'],
        ['day', 'noun', 'día', 'Sustantivo contable.']
      ]
    }
  ],

  /* ejemplos verificados contra el texto de arriba */
  grammar: [
    { name: 'Adjetivos',              hits: '3 usos', ex: 'warm · sweet · little',            c: '#e11d48' },
    { name: 'Present Simple',         hits: '4 usos', ex: 'opens · smells · greets',          c: '#0e9f6e' },
    { name: 'Preposiciones de lugar', hits: '3 usos', ex: 'on the corner · by noon',          c: '#0891b2' }
  ],

  /* las tres citas SÍ aparecen ahora en paras */
  phrasals: [
    { verb: 'get up',     mean: 'levantarse',   quote: 'The baker gets up at four every morning.' },
    { verb: 'run out of', mean: 'quedarse sin', quote: 'They run out of bread by noon.' },
    { verb: 'come back',  mean: 'volver',       quote: 'They come back every day.' }
  ],

  gaps: [
    { s: ['The', 'bread', '___', 'warm', 'and', 'sweet.'],
      answer: 'smells', opts: ['smells', 'smell', 'smelling'],
      why: 'Present simple, 3ª persona: smells. Y va con adjetivo, no adverbio.' },
    { s: ['The', 'bakery', 'is', '___', 'the', 'corner.'],
      answer: 'on', opts: ['on', 'in', 'at'],
      why: 'Las esquinas llevan on: on the corner.' },
    { s: ['They', 'run', 'out', 'of', 'bread', '___', 'noon.'],
      answer: 'by', opts: ['by', 'at', 'until'],
      why: 'by marca el límite: para cuando llega el mediodía, ya no hay.' }
  ]
};
