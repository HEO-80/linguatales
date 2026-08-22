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
  },

  {
    num: '03',
    title: 'The Lazy Cat',
    sub: 'Present simple · preguntas y negaciones con do',
    tag: 'Nuevo',
    meta: '3 min · 60 palabras · 11 nuevas',

    paras: [
      {
        tr: 'Cada mañana, Anna le pregunta a su gato: "¿Qué haces todo el día?"',
        t: [
          ['Every', 'adj', 'cada', 'Determinante de frecuencia.'],
          ['morning', 'noun', 'mañana', 'Sustantivo contable.'],
          ['Anna', 'noun', 'Anna', 'Nombre propio: sujeto de la frase.'],
          ['asks', 'verb', 'pregunta', 'Present simple, 3ª persona: se añade -s.'],
          ['her', 'adj', 'su', 'Posesivo, concuerda con el poseedor.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ['What', 'pron', 'qué', 'Pronombre interrogativo, abre la pregunta.'],
          ['do', 'verb', 'auxiliar', 'Auxiliar do: forma la pregunta con you/they, sin traducción propia.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['do', 'verb', 'haces', 'Aquí do es el verbo principal: hacer.'],
          ['all', 'adj', 'todo', 'Determinante de cantidad total.'],
          ['day', 'noun', 'el día', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'El gato no contesta. El gato no trabaja. El gato no cocina.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ["doesn't", 'verb', 'no', 'Negación en 3ª persona: does + not, contraído.'],
          ['answer', 'verb', 'contesta', 'Tras doesn\'t, el verbo vuelve al infinitivo sin -s.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ["doesn't", 'verb', 'no', 'Negación en 3ª persona.'],
          ['work', 'verb', 'trabaja', 'Infinitivo tras doesn\'t.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ["doesn't", 'verb', 'no', 'Negación en 3ª persona.'],
          ['cook', 'verb', 'cocina', 'Infinitivo tras doesn\'t.']
        ]
      },
      {
        tr: '"¿Duermes todo el día?" pregunta Anna. El gato no abre los ojos.',
        t: [
          ['Do', 'verb', 'auxiliar', 'Auxiliar do para preguntar con you: no se traduce solo.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['sleep', 'verb', 'duermes', 'Infinitivo tras el auxiliar do.'],
          ['all', 'adj', 'todo', 'Determinante de cantidad total.'],
          ['day', 'noun', 'el día', 'Sustantivo contable.'],
          ['asks', 'verb', 'pregunta', 'Present simple, 3ª persona.'],
          ['Anna', 'noun', 'Anna', 'Nombre propio.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ["doesn't", 'verb', 'no', 'Negación en 3ª persona.'],
          ['open', 'verb', 'abre', 'Infinitivo tras doesn\'t.'],
          ['its', 'adj', 'sus', 'Posesivo neutro: de un animal o cosa.'],
          ['eyes', 'noun', 'ojos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"Yo trabajo, yo limpio, yo cocino... ¿y tú qué haces?" dice Anna.',
        t: [
          ['I', 'pron', 'yo', 'Pronombre sujeto, 1ª persona.'],
          ['work', 'verb', 'trabajo', 'Present simple, 1ª persona: sin -s.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['clean', 'verb', 'limpio', 'Present simple, 1ª persona.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['cook', 'verb', 'cocino', 'Present simple, 1ª persona.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['what', 'pron', 'qué', 'Pronombre interrogativo.'],
          ['do', 'verb', 'auxiliar', 'Auxiliar do: forma la pregunta con you.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['do', 'verb', 'haces', 'Verbo principal: hacer.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona: say → says.'],
          ['Anna', 'noun', 'Anna', 'Nombre propio.']
        ]
      },
      {
        tr: 'El gato no hace nada. Y el gato está muy feliz.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ['does', 'verb', 'hace', '3ª persona afirmativa: does, aquí como verbo principal (hacer).'],
          ['nothing', 'pron', 'nada', 'Pronombre indefinido negativo.'],
          ['And', 'prep', 'y', 'Conjunción de suma, abre la frase.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['cat', 'noun', 'gato', 'Sustantivo contable.'],
          ['is', 'verb', 'está', 'Present simple de be, 3ª persona.'],
          ['very', 'adv', 'muy', 'Intensificador.'],
          ['happy', 'adj', 'feliz', 'Adjetivo tras el verbo be.']
        ]
      }
    ],

    grammar: [
      { name: 'Present Simple', hits: '13 usos', ex: 'do you do · doesn\'t answer · does nothing', c: '#0e9f6e' },
      { name: 'Adjetivos', hits: '5 usos', ex: 'every morning · all day · very happy', c: '#e11d48' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['The', 'cat', '___', 'answer.'],
        answer: "doesn't",
        opts: ["doesn't", "don't", "isn't"],
        why: '3ª persona singular: doesn\'t (does + not), no don\'t.'
      },
      {
        s: ['___', 'you', 'sleep', 'all', 'day?'],
        answer: 'Do',
        opts: ['Do', 'Does', 'Are'],
        why: 'Pregunta con you: Do + sujeto + verbo. Does es solo para he/she/it.'
      },
      {
        s: ['The', 'cat', '___', 'nothing.'],
        answer: 'does',
        opts: ['does', 'do', 'doing'],
        why: 'Sin auxiliar, do es el verbo principal (hacer) y en 3ª persona lleva -s: does.'
      }
    ]
  },

  {
    num: '04',
    title: 'The Genie',
    sub: 'Present simple · want',
    tag: 'Nuevo',
    meta: '3 min · 65 palabras · 13 nuevas',

    paras: [
      {
        tr: 'Tom encuentra una lámpara vieja. Un genio sale.',
        t: [
          ['Tom', 'noun', 'Tom', 'Nombre propio: sujeto de la frase.'],
          ['finds', 'verb', 'encuentra', 'Present simple, 3ª persona.'],
          ['an', 'art', 'una', 'Artículo indefinido: delante de sonido vocálico.'],
          ['old', 'adj', 'vieja', 'Adjetivo, antes del sustantivo.'],
          ['lamp', 'noun', 'lámpara', 'Sustantivo contable.'],
          ['A', 'art', 'un', 'Artículo indefinido: algo no mencionado antes.'],
          ['genie', 'noun', 'genio', 'Sustantivo contable.'],
          ['comes out', 'phr', 'sale', 'Phrasal verb: come + out, salir de un sitio.']
        ]
      },
      {
        tr: '"¿Quieres tres deseos?" pregunta el genio.',
        t: [
          ['You', 'pron', 'tú', 'Pronombre sujeto.'],
          ['want', 'verb', 'quieres', 'Present simple, 2ª persona: sin -s.'],
          ['three', 'adj', 'tres', 'Numeral.'],
          ['wishes', 'noun', 'deseos', 'Sustantivo contable, plural.'],
          ['asks', 'verb', 'pregunta', 'Present simple, 3ª persona.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['genie', 'noun', 'genio', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"¡Quiero una casa grande! ¡Quiero un coche rápido! ¡Quiero mucho dinero!" dice Tom.',
        t: [
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['want', 'verb', 'quiero', 'Present simple, 1ª persona: sin -s.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['big', 'adj', 'grande', 'Adjetivo de tamaño.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['want', 'verb', 'quiero', 'Present simple, 1ª persona.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['fast', 'adj', 'rápido', 'Adjetivo.'],
          ['car', 'noun', 'coche', 'Sustantivo contable.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['want', 'verb', 'quiero', 'Present simple, 1ª persona.'],
          ['a', 'art', 'un', 'Artículo indefinido: en la expresión a lot of.'],
          ['lot', 'noun', 'mucho', 'Cuantificador: a lot of + sustantivo.'],
          ['of', 'prep', 'de', 'Preposición de cantidad: a lot of money.'],
          ['money', 'noun', 'dinero', 'Incontable: sin artículo indefinido.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona: say → says.'],
          ['Tom', 'noun', 'Tom', 'Nombre propio.']
        ]
      },
      {
        tr: '"Vale," dice el genio. "Pero primero, quiero un café."',
        t: [
          ['Okay', 'adv', 'vale', 'Interjección de acuerdo.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['genie', 'noun', 'genio', 'Sustantivo contable.'],
          ['But', 'prep', 'pero', 'Conjunción de contraste, abre la frase.'],
          ['first', 'adv', 'primero', 'Adverbio de secuencia.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['want', 'verb', 'quiero', 'Present simple, 1ª persona.'],
          ['a', 'art', 'un', 'Artículo indefinido: algo no mencionado antes.'],
          ['coffee', 'noun', 'café', 'Aquí como sustantivo contable: una taza de café.']
        ]
      },
      {
        tr: 'Tom espera. El genio bebe el café... muy, muy despacio.',
        t: [
          ['Tom', 'noun', 'Tom', 'Nombre propio.'],
          ['waits', 'verb', 'espera', 'Present simple, 3ª persona.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['genie', 'noun', 'genio', 'Sustantivo contable.'],
          ['drinks', 'verb', 'bebe', 'Present simple, 3ª persona.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['coffee', 'noun', 'café', 'Sustantivo, ya conocido: the coffee.'],
          ['very', 'adv', 'muy', 'Intensificador, repetido para dar énfasis.'],
          ['very', 'adv', 'muy', 'Intensificador.'],
          ['slowly', 'adv', 'despacio', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: '"¿Quieres tus deseos ahora?" pregunta el genio, y sonríe.',
        t: [
          ['Do', 'verb', 'auxiliar', 'Auxiliar do: forma la pregunta con you.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['want', 'verb', 'quieres', 'Infinitivo tras el auxiliar do.'],
          ['your', 'adj', 'tus', 'Posesivo, concuerda con el poseedor.'],
          ['wishes', 'noun', 'deseos', 'Sustantivo contable, plural.'],
          ['now', 'adv', 'ahora', 'Adverbio de tiempo.'],
          ['asks', 'verb', 'pregunta', 'Present simple, 3ª persona.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['genie', 'noun', 'genio', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['he', 'pron', 'él', 'Pronombre sujeto, 3ª persona.'],
          ['smiles', 'verb', 'sonríe', 'Present simple, 3ª persona.']
        ]
      }
    ],

    grammar: [
      { name: 'Present Simple', hits: '14 usos', ex: 'want a big house · want a fast car · do you want', c: '#0e9f6e' },
      { name: 'Artículos a / the', hits: '10 usos', ex: 'an old lamp · a big house · a lot of money', c: '#2563eb' }
    ],

    phrasals: [
      { verb: 'come out', mean: 'salir', quote: 'A genie comes out.' }
    ],

    gaps: [
      {
        s: ['I', '___', 'a', 'big', 'house!'],
        answer: 'want',
        opts: ['want', 'wants', 'wanting'],
        why: 'Present simple con I: sin -s. want, no wants.'
      },
      {
        s: ['___', 'you', 'want', 'your', 'wishes', 'now?'],
        answer: 'Do',
        opts: ['Do', 'Does', 'Are'],
        why: 'Pregunta con you: Do + sujeto + verbo base.'
      },
      {
        s: ['Tom', 'finds', '___', 'old', 'lamp.'],
        answer: 'an',
        opts: ['an', 'a', 'the'],
        why: 'Delante de sonido vocálico: an old lamp, no a old lamp.'
      }
    ]
  },

  {
    num: '05',
    title: 'The Three Little Pigs',
    sub: 'Present simple · have / has',
    tag: 'Nuevo',
    meta: '3 min · 68 palabras · 12 nuevas',

    paras: [
      {
        tr: 'Tres cerditos tienen un problema. Un lobo tiene mucha hambre.',
        t: [
          ['Three', 'adj', 'tres', 'Numeral.'],
          ['little', 'adj', 'pequeños', 'Adjetivo, antes del sustantivo.'],
          ['pigs', 'noun', 'cerditos', 'Sustantivo contable, plural.'],
          ['have', 'verb', 'tienen', 'Present simple, plural: sin -s.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['problem', 'noun', 'problema', 'Sustantivo contable.'],
          ['A', 'art', 'un', 'Artículo indefinido.'],
          ['wolf', 'noun', 'lobo', 'Sustantivo contable.'],
          ['is', 'verb', 'está', 'Present simple de be, 3ª persona.'],
          ['very', 'adv', 'muy', 'Intensificador.'],
          ['hungry', 'adj', 'hambriento', 'Adjetivo tras el verbo be.']
        ]
      },
      {
        tr: 'El primer cerdito tiene una casa de paja. El segundo cerdito tiene una casa de madera.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['first', 'adj', 'primer', 'Numeral ordinal.'],
          ['pig', 'noun', 'cerdito', 'Sustantivo contable.'],
          ['has', 'verb', 'tiene', 'Present simple, 3ª persona: have → has.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['of', 'prep', 'de', 'Preposición de material.'],
          ['straw', 'noun', 'paja', 'Incontable: sin artículo.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['second', 'adj', 'segundo', 'Numeral ordinal.'],
          ['pig', 'noun', 'cerdito', 'Sustantivo contable.'],
          ['has', 'verb', 'tiene', 'Present simple, 3ª persona.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['of', 'prep', 'de', 'Preposición de material.'],
          ['wood', 'noun', 'madera', 'Incontable: sin artículo.']
        ]
      },
      {
        tr: '"¡Yo tengo una casa de piedra!" dice el tercer cerdito.',
        t: [
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['have', 'verb', 'tengo', 'Present simple, 1ª persona: sin -s.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['of', 'prep', 'de', 'Preposición de material.'],
          ['stone', 'noun', 'piedra', 'Incontable: sin artículo.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona: say → says.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['third', 'adj', 'tercer', 'Numeral ordinal.'],
          ['pig', 'noun', 'cerdito', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'El lobo sopla la casa de paja. Sopla la casa de madera.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['wolf', 'noun', 'lobo', 'Sustantivo contable.'],
          ['blows', 'verb', 'sopla', 'Present simple, 3ª persona.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['straw', 'noun', 'paja', 'Sustantivo, aquí como modificador de house.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['He', 'pron', 'él', 'Pronombre sujeto, 3ª persona.'],
          ['blows', 'verb', 'sopla', 'Present simple, 3ª persona.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['wood', 'noun', 'madera', 'Sustantivo, aquí como modificador de house.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.']
        ]
      },
      {
        tr: '¿Pero la casa de piedra? El lobo no tiene suficiente aire.',
        t: [
          ['But', 'prep', 'pero', 'Conjunción de contraste, abre la frase.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['stone', 'noun', 'piedra', 'Sustantivo, aquí como modificador de house.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['wolf', 'noun', 'lobo', 'Sustantivo contable.'],
          ["doesn't", 'verb', 'no', 'Negación en 3ª persona: does + not.'],
          ['have', 'verb', 'tiene', 'Tras doesn\'t, el verbo vuelve al infinitivo: have, no has.'],
          ['enough', 'adj', 'suficiente', 'Determinante de cantidad.'],
          ['air', 'noun', 'aire', 'Incontable: sin artículo.']
        ]
      },
      {
        tr: 'El tercer cerdito tiene una idea inteligente... y una casa muy segura.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['third', 'adj', 'tercer', 'Numeral ordinal.'],
          ['pig', 'noun', 'cerdito', 'Sustantivo contable.'],
          ['has', 'verb', 'tiene', 'Present simple, 3ª persona.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['smart', 'adj', 'inteligente', 'Adjetivo.'],
          ['idea', 'noun', 'idea', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['very', 'adv', 'muy', 'Intensificador.'],
          ['safe', 'adj', 'segura', 'Adjetivo.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.']
        ]
      }
    ],

    grammar: [
      { name: 'Present Simple', hits: '11 usos', ex: 'has a house · doesn\'t have enough · has a smart idea', c: '#0e9f6e' },
      { name: 'Adjetivos', hits: '9 usos', ex: 'little pigs · very hungry · smart idea', c: '#e11d48' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['The', 'first', 'pig', '___', 'a', 'house', 'of', 'straw.'],
        answer: 'has',
        opts: ['has', 'have', 'having'],
        why: '3ª persona singular: has, no have.'
      },
      {
        s: ['The', 'wolf', '___', 'have', 'enough', 'air.'],
        answer: "doesn't",
        opts: ["doesn't", "don't", "isn't"],
        why: 'Negación en 3ª persona: doesn\'t have, y el verbo vuelve a su forma base.'
      },
      {
        s: ['A', 'wolf', 'is', 'very', '___.'],
        answer: 'hungry',
        opts: ['hungry', 'hungrily', 'hunger'],
        why: 'Adjetivo tras el verbo be: hungry, no el adverbio ni el sustantivo.'
      }
    ]
  },

  {
    num: '06',
    title: 'The Robot Chef',
    sub: 'Modales · can / can\'t',
    tag: 'Nuevo',
    meta: '3 min · 57 palabras · 10 nuevas',

    paras: [
      {
        tr: 'Max tiene un robot nuevo. El robot sabe cocinar, pero no sabe saborear.',
        t: [
          ['Max', 'noun', 'Max', 'Nombre propio: sujeto de la frase.'],
          ['has', 'verb', 'tiene', 'Present simple, 3ª persona: have → has.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['new', 'adj', 'nuevo', 'Adjetivo.'],
          ['robot', 'noun', 'robot', 'Sustantivo contable.'],
          ['The', 'art', 'el', 'Artículo definido.'],
          ['robot', 'noun', 'robot', 'Sustantivo contable.'],
          ['can', 'verb', 'sabe / puede', 'Modal can: capacidad. Nunca cambia, ni en 3ª persona.'],
          ['cook', 'verb', 'cocinar', 'Verbo base tras can, sin to.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['it', 'pron', 'eso', 'Pronombre sujeto neutro: se refiere al robot.'],
          ["can't", 'verb', 'no sabe / no puede', 'Negación del modal: can + not, contraído.'],
          ['taste', 'verb', 'saborear', 'Verbo base tras can\'t, sin to.']
        ]
      },
      {
        tr: '"¿Puedes hacer una pizza?" pregunta Max.',
        t: [
          ['Can', 'verb', 'auxiliar modal', 'Pregunta con can: Can + sujeto + verbo base.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['make', 'verb', 'hacer', 'Verbo base tras can, sin to.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['pizza', 'noun', 'pizza', 'Sustantivo contable.'],
          ['asks', 'verb', 'pregunta', 'Present simple, 3ª persona.'],
          ['Max', 'noun', 'Max', 'Nombre propio.']
        ]
      },
      {
        tr: '"¡Sí, puedo!" dice el robot.',
        t: [
          ['Yes', 'adv', 'sí', 'Adverbio de afirmación.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['can', 'verb', 'puedo', 'Respuesta corta con el modal can.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona: say → says.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['robot', 'noun', 'robot', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'El robot hace la pizza, pero no puede parar. ¡Una pizza, dos pizzas, diez pizzas!',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['robot', 'noun', 'robot', 'Sustantivo contable.'],
          ['makes', 'verb', 'hace', 'Present simple, 3ª persona.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['pizza', 'noun', 'pizza', 'Sustantivo contable.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['it', 'pron', 'eso', 'Pronombre sujeto neutro.'],
          ["can't", 'verb', 'no puede', 'Negación del modal can.'],
          ['stop', 'verb', 'parar', 'Verbo base tras can\'t, sin to.'],
          ['One', 'adj', 'una', 'Numeral.'],
          ['pizza', 'noun', 'pizza', 'Sustantivo contable.'],
          ['two', 'adj', 'dos', 'Numeral.'],
          ['pizzas', 'noun', 'pizzas', 'Sustantivo contable, plural.'],
          ['ten', 'adj', 'diez', 'Numeral.'],
          ['pizzas', 'noun', 'pizzas', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"¡Para! ¡No puedo comer diez pizzas!" dice Max.',
        t: [
          ['Stop', 'verb', 'para', 'Imperativo.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ["can't", 'verb', 'no puedo', 'Negación del modal can.'],
          ['eat', 'verb', 'comer', 'Verbo base tras can\'t, sin to.'],
          ['ten', 'adj', 'diez', 'Numeral.'],
          ['pizzas', 'noun', 'pizzas', 'Sustantivo contable, plural.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona.'],
          ['Max', 'noun', 'Max', 'Nombre propio.']
        ]
      },
      {
        tr: 'El robot sabe cocinar, pero no sabe escuchar.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['robot', 'noun', 'robot', 'Sustantivo contable.'],
          ['can', 'verb', 'sabe / puede', 'Modal can: capacidad.'],
          ['cook', 'verb', 'cocinar', 'Verbo base tras can, sin to.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['it', 'pron', 'eso', 'Pronombre sujeto neutro.'],
          ["can't", 'verb', 'no sabe', 'Negación del modal can.'],
          ['listen', 'verb', 'escuchar', 'Verbo base tras can\'t, sin to.']
        ]
      }
    ],

    grammar: [
      { name: 'Verbo modal CAN', hits: '8 usos', ex: 'can cook · can\'t taste · can you make', c: '#f97316' },
      { name: 'Present Simple', hits: '6 usos', ex: 'has a new robot · makes the pizza · asks Max', c: '#0e9f6e' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['The', 'robot', '___', 'cook,', 'but', 'it', "can't", 'taste.'],
        answer: 'can',
        opts: ['can', 'cans', 'could'],
        why: 'can no cambia nunca, ni en 3ª persona: the robot can, no cans.'
      },
      {
        s: ['___', 'you', 'make', 'a', 'pizza?'],
        answer: 'Can',
        opts: ['Can', 'Do', 'Does'],
        why: 'Pregunta con modal: Can + sujeto + verbo, sin do/does.'
      },
      {
        s: ['I', '___', 'eat', 'ten', 'pizzas!'],
        answer: "can't",
        opts: ["can't", "doesn't", "isn't"],
        why: 'Negación de capacidad: can + not = can\'t (no doesn\'t, que es para verbos normales).'
      }
    ]
  }
];
