/**
 * LinguaTales — Inglés A1
 * src/data/stories/en.a1.js
 *
 * Cada palabra lleva su función gramatical, y de ahí sale todo: el color en
 * el texto, la ficha al tocarla, y las preguntas de los juegos. Un phrasal
 * verb es UN token ('wakes up'), nunca dos.
 *
 * Token: [ texto, función, traducción, explicación ]
 * Funciones: art verb noun adj adv prep pron phr
 *
 * Regla de integridad (ver src/data/stories/validate.mjs): todo lo que
 * aparece en grammar[].ex y phrasals[].quote tiene que salir literalmente
 * del texto de paras — si no, la ficha y el juego 03 mienten.
 *
 * Historia 02 ("The Little Bakery"): sustituida por la corrección del
 * usuario (en.a1.little-bakery.fix.js) — la plantilla original citaba en
 * `phrasals` frases (get up / run out of / come back) que no estaban en
 * `paras`. El arreglo añade dos frases al relato en vez de quitar los
 * phrasal verbs, así el juego 03 conserva sus tres pares y las citas son
 * reales.
 *
 * Historia 01 ("A New Morning"): se corrigieron además dos fallos del mismo
 * tipo, encontrados al ejecutar el validador (src/data/stories/validate.mjs)
 * contra el archivo tal como venía:
 *   1. El grammar original citaba 'quietly' en "Adverbios de modo", pero ese
 *      adverbio no existe en el texto (solo está 'quiet', el adjetivo de la
 *      frase 2, no un adverbio). El único adverbio de modo real es 'slowly'.
 *   2. El phrasal 'look at' citaba "She looks at the quiet street." como si
 *      fuera literal, pero la frase real es "She opens the window and looks
 *      at the quiet street." — 'she' y 'looks' no son contiguas en el texto.
 *      Se corrigió la cita a la frase completa real.
 */

export const EN_A1 = [
  {
    num: '01',
    title: 'A New Morning',
    sub: 'Present simple · rutinas',
    tag: 'En curso', // 'Leído' | 'En curso' | 'Nuevo'
    meta: '3 min · 62 palabras · 14 nuevas',

    paras: [
      {
        tr: 'Anna se despierta a las siete todos los días.',
        t: [
          ['Anna', 'noun', 'Anna', 'Nombre propio: sujeto de la frase.'],
          ['wakes up', 'phr', 'se despierta', 'Phrasal verb: wake + up. Inseparable en este uso.'],
          ['at', 'prep', 'a', 'Preposición de hora puntual: at seven.'],
          ['seven', 'noun', 'las siete', 'La hora va sin artículo en inglés.'],
          ["o'clock", 'noun', 'en punto', 'Solo con horas exactas.'],
          ['every', 'adj', 'cada', 'Determinante de frecuencia.'],
          ['day', 'noun', 'día', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Abre la ventana y mira la calle tranquila.',
        t: [
          ['She', 'pron', 'ella', 'Pronombre sujeto, 3ª persona.'],
          ['opens', 'verb', 'abre', 'Present simple, 3ª persona: se añade -s.'],
          ['the', 'art', 'la', 'Artículo definido: algo ya conocido.'],
          ['window', 'noun', 'ventana', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['looks at', 'phr', 'mira', 'Phrasal verb: look + at, dirigir la mirada.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['quiet', 'adj', 'tranquila', 'Adjetivo delante del sustantivo.'],
          ['street', 'noun', 'calle', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Luego prepara café y come una tostada despacio.',
        t: [
          ['Then', 'adv', 'luego', 'Adverbio de secuencia, abre la frase.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['makes', 'verb', 'prepara', 'Present simple: make → makes.'],
          ['coffee', 'noun', 'café', 'Incontable: sin artículo.'],
          ['and', 'prep', 'y', 'Conjunción.'],
          ['eats', 'verb', 'come', 'Present simple, 3ª persona.'],
          ['a', 'art', 'una', 'Artículo indefinido: algo no mencionado antes.'],
          ['piece', 'noun', 'trozo', 'Cuantificador de incontables.'],
          ['of', 'prep', 'de', 'Preposición de pertenencia.'],
          ['toast', 'noun', 'tostada', 'Incontable en inglés.'],
          ['slowly', 'adv', 'despacio', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: 'Antes de salir de casa, se pone el abrigo azul.',
        t: [
          ['Before', 'prep', 'antes de', 'Preposición de tiempo.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['leaves', 'verb', 'sale de', 'Present simple: leave → leaves.'],
          ['home', 'noun', 'casa', 'Sin artículo en esta expresión fija.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['puts on', 'phr', 'se pone', 'Phrasal verb: put + on, vestirse con algo.'],
          ['her', 'adj', 'su', 'Posesivo, concuerda con el poseedor.'],
          ['blue', 'adj', 'azul', 'Adjetivo de color, antes del sustantivo.'],
          ['coat', 'noun', 'abrigo', 'Sustantivo contable.']
        ]
      }
    ],

    /* reglas que practica este relato · los ejemplos salen del propio texto */
    grammar: [
      { name: 'Present Simple', hits: '9 usos', ex: 'opens · makes · eats · leaves', c: '#0e9f6e' },
      { name: 'Artículos a / the', hits: '5 usos', ex: 'the window · a piece of toast', c: '#2563eb' },
      { name: 'Adverbios de modo', hits: '1 uso', ex: 'slowly', c: '#7c3aed' }
    ],

    /* phrasal verbs con la frase donde aparecen */
    phrasals: [
      { verb: 'wake up', mean: 'despertarse', quote: 'Anna wakes up at seven o’clock.' },
      { verb: 'look at', mean: 'mirar', quote: 'She opens the window and looks at the quiet street.' },
      { verb: 'put on', mean: 'ponerse (ropa)', quote: 'She puts on her blue coat.' }
    ],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      {
        s: ['She', '___', 'the', 'window', 'every', 'morning.'],
        answer: 'opens',
        opts: ['opens', 'open', 'opening'],
        why: 'Present simple, 3ª persona: opens.'
      },
      {
        s: ['Anna', 'eats', '___', 'piece', 'of', 'toast.'],
        answer: 'a',
        opts: ['a', 'the', 'an'],
        why: 'Indefinido y consonante: a piece.'
      },
      {
        s: ['She', 'walks', '___', 'work', 'slowly.'],
        answer: 'to',
        opts: ['to', 'at', 'in'],
        why: 'Dirección: walk to work.'
      }
    ]
  },

  {
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
      { name: 'Adjetivos', hits: '3 usos', ex: 'warm · sweet · every', c: '#e11d48' },
      { name: 'Present Simple', hits: '4 usos', ex: 'opens · smells · greets', c: '#0e9f6e' },
      { name: 'Preposiciones de lugar', hits: '3 usos', ex: 'on the corner · by noon', c: '#0891b2' }
    ],

    /* las tres citas aparecen literalmente en paras */
    phrasals: [
      { verb: 'get up', mean: 'levantarse', quote: 'The baker gets up at four every morning.' },
      { verb: 'run out of', mean: 'quedarse sin', quote: 'They run out of bread by noon.' },
      { verb: 'come back', mean: 'volver', quote: 'They come back every day.' }
    ],

    gaps: [
      {
        s: ['The', 'bread', '___', 'warm', 'and', 'sweet.'],
        answer: 'smells',
        opts: ['smells', 'smell', 'smelling'],
        why: 'Present simple, 3ª persona: smells. Y va con adjetivo, no adverbio.'
      },
      {
        s: ['The', 'bakery', 'is', '___', 'the', 'corner.'],
        answer: 'on',
        opts: ['on', 'in', 'at'],
        why: 'Las esquinas llevan on: on the corner.'
      },
      {
        s: ['They', 'run', 'out', 'of', 'bread', '___', 'noon.'],
        answer: 'by',
        opts: ['by', 'at', 'until'],
        why: 'by marca el límite: para cuando llega el mediodía, ya no hay.'
      }
    ]
  }
];
