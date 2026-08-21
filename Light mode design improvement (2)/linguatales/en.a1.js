/**
 * LinguaTales — Inglés A1
 * src/data/stories/en.a1.js
 *
 * Plantilla de contenido. Cada palabra lleva su función gramatical, y de ahí
 * sale todo: el color en el texto, la ficha al tocarla, y las preguntas de los
 * juegos. Un phrasal verb es UN token ('wakes up'), nunca dos.
 *
 * Token: [ texto, función, traducción, explicación ]
 * Funciones: art verb noun adj adv prep pron phr
 */

export const EN_A1 = [
  {
    num: '01',
    title: 'A New Morning',
    sub: 'Present simple · rutinas',
    tag: 'En curso',                       // 'Leído' | 'En curso' | 'Nuevo'
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
      { name: 'Present Simple',    hits: '9 usos', ex: 'opens · makes · eats · leaves', c: '#0e9f6e' },
      { name: 'Artículos a / the', hits: '5 usos', ex: 'the window · a piece of toast',  c: '#2563eb' },
      { name: 'Adverbios de modo', hits: '2 usos', ex: 'slowly · quietly',               c: '#7c3aed' }
    ],

    /* phrasal verbs con la frase donde aparecen */
    phrasals: [
      { verb: 'wake up',  mean: 'despertarse',      quote: 'Anna wakes up at seven o’clock.' },
      { verb: 'look at',  mean: 'mirar',            quote: 'She looks at the quiet street.' },
      { verb: 'put on',   mean: 'ponerse (ropa)',   quote: 'She puts on her blue coat.' }
    ],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      { s: ['She', '___', 'the', 'window', 'every', 'morning.'],
        answer: 'opens', opts: ['opens', 'open', 'opening'],
        why: 'Present simple, 3ª persona: opens.' },
      { s: ['Anna', 'eats', '___', 'piece', 'of', 'toast.'],
        answer: 'a', opts: ['a', 'the', 'an'],
        why: 'Indefinido y consonante: a piece.' },
      { s: ['She', 'walks', '___', 'work', 'slowly.'],
        answer: 'to', opts: ['to', 'at', 'in'],
        why: 'Dirección: walk to work.' }
    ]
  },

  {
    num: '02',
    title: 'The Little Bakery',
    sub: 'Present simple · adjetivos',
    tag: 'Nuevo',
    meta: '3 min · 58 palabras · 11 nuevas',

    paras: [
      {
        tr: 'La panadería de la esquina abre muy temprano.',
        t: [
          ['The', 'art', 'la', 'Artículo definido.'],
          ['bakery', 'noun', 'panadería', 'Sustantivo contable.'],
          ['on', 'prep', 'en', 'Preposición de lugar.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['corner', 'noun', 'esquina', 'Sustantivo contable.'],
          ['opens', 'verb', 'abre', 'Present simple, 3ª persona.'],
          ['very', 'adv', 'muy', 'Intensificador.'],
          ['early', 'adv', 'temprano', 'Adverbio de tiempo.']
        ]
      },
      {
        tr: 'El pan huele cálido y dulce.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['bread', 'noun', 'pan', 'Incontable.'],
          ['smells', 'verb', 'huele', 'Verbo de percepción + adjetivo.'],
          ['warm', 'adj', 'cálido', 'Adjetivo tras verbo de percepción.'],
          ['and', 'prep', 'y', 'Conjunción.'],
          ['sweet', 'adj', 'dulce', 'Adjetivo.']
        ]
      },
      {
        tr: 'El panadero saluda a todos por su nombre.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['baker', 'noun', 'panadero', 'Sustantivo contable.'],
          ['greets', 'verb', 'saluda', 'Present simple, 3ª persona.'],
          ['everyone', 'pron', 'todos', 'Pronombre indefinido, singular.'],
          ['by', 'prep', 'por', 'Preposición de medio.'],
          ['name', 'noun', 'nombre', 'Sin artículo en esta expresión.']
        ]
      }
    ],

    grammar: [
      { name: 'Adjetivos',                hits: '4 usos', ex: 'warm · sweet · little',      c: '#e11d48' },
      { name: 'Present Simple',           hits: '6 usos', ex: 'opens · smells · greets',    c: '#0e9f6e' },
      { name: 'Preposiciones de lugar',   hits: '3 usos', ex: 'on the corner',              c: '#0891b2' }
    ],

    phrasals: [
      { verb: 'get up',      mean: 'levantarse',     quote: 'The baker gets up at four.' },
      { verb: 'run out of',  mean: 'quedarse sin',   quote: 'They run out of bread by noon.' },
      { verb: 'come back',   mean: 'volver',         quote: 'People come back every day.' }
    ],

    gaps: [
      { s: ['The', 'bread', '___', 'warm.'],
        answer: 'smells', opts: ['smells', 'smell', 'smelling'],
        why: 'Present simple, 3ª persona: smells.' },
      { s: ['The', 'bakery', 'is', '___', 'the', 'corner.'],
        answer: 'on', opts: ['on', 'in', 'at'],
        why: 'Esquina lleva on.' },
      { s: ['She', 'greets', '___', 'by', 'name.'],
        answer: 'everyone', opts: ['everyone', 'everybodies', 'all'],
        why: 'Pronombre indefinido singular.' }
    ]
  }
];
