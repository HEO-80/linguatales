/**
 * LinguaTales — Inglés A2
 * src/data/stories/en.a2.js
 *
 * Etiquetado a mano (no POS tagger) sobre las tres historias A2 que ya
 * existían en el proyecto — mismo texto en inglés/español, ahora con función
 * gramatical por palabra. Ver src/data/stories/en.a1.js para la convención.
 *
 * Nota honesta: ninguna de las tres historias contiene un phrasal verb
 * real salvo "walked into" en The New Job. No se ha forzado ni inventado
 * ninguno para llegar a tres — el propio modelo (§9.3 de la spec) prevé
 * justo este caso: con menos de tres `phrasals`, el juego de emparejar se
 * oculta para esa historia en vez de mostrarse vacío. La ficha de
 * "Phrasal verbs de este relato" (StoryFacts) sí puede mostrar el que haya.
 */

export const EN_A2 = [
  {
    num: '01',
    title: 'A Trip to the Beach',
    sub: 'Past simple · aventura',
    tag: 'Nuevo',
    meta: '4 min · 55 palabras · 13 nuevas',

    paras: [
      {
        tr: 'El verano pasado, Marco y su familia fueron a la playa.',
        t: [
          ['Last', 'adj', 'pasado', 'Adjetivo temporal: se refiere al periodo inmediatamente anterior.'],
          ['summer', 'noun', 'verano', 'Sustantivo de estación.'],
          ['Marco', 'noun', 'Marco', 'Nombre propio: sujeto de la frase.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['his', 'adj', 'su', 'Posesivo, concuerda con el poseedor.'],
          ['family', 'noun', 'familia', 'Sustantivo contable.'],
          ['went', 'verb', 'fueron', 'Pasado irregular de go: iban hacia un lugar.'],
          ['to', 'prep', 'a', 'Preposición de dirección: movimiento hacia un lugar.'],
          ['the', 'art', 'la', 'Artículo definido: lugar concreto.'],
          ['beach', 'noun', 'playa', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Condujeron durante tres horas para llegar.',
        t: [
          ['They', 'pron', 'ellos', 'Pronombre sujeto, plural: el verbo no lleva -s.'],
          ['drove', 'verb', 'condujeron', 'Pasado irregular de drive.'],
          ['for', 'prep', 'durante', 'Preposición de duración: for three hours.'],
          ['three', 'adj', 'tres', 'Numeral: cuantifica el sustantivo que sigue.'],
          ['hours', 'noun', 'horas', 'Sustantivo contable, plural.'],
          ['to', 'prep', 'para', 'Marca el infinitivo de propósito: to arrive.'],
          ['arrive', 'verb', 'llegar', 'Infinitivo: propósito de la acción.'],
          ['there', 'adv', 'allí', 'Adverbio de lugar.']
        ]
      },
      {
        tr: 'Cuando llegaron, el mar estaba tranquilo y azul.',
        t: [
          ['When', 'adv', 'cuando', 'Adverbio conector de tiempo, abre la frase.'],
          ['they', 'pron', 'ellos', 'Pronombre sujeto.'],
          ['arrived', 'verb', 'llegaron', 'Pasado regular: arrive + -d.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['sea', 'noun', 'mar', 'Sustantivo contable.'],
          ['was', 'verb', 'estaba', 'Pasado de be, 3ª persona singular.'],
          ['calm', 'adj', 'tranquilo', 'Adjetivo tras el verbo be.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['blue', 'adj', 'azul', 'Adjetivo de color.']
        ]
      },
      {
        tr: 'Marco construyó un gran castillo de arena con su hermana.',
        t: [
          ['Marco', 'noun', 'Marco', 'Nombre propio: sujeto de la frase.'],
          ['built', 'verb', 'construyó', 'Pasado irregular de build.'],
          ['a', 'art', 'un', 'Artículo indefinido: algo no mencionado antes.'],
          ['big', 'adj', 'grande', 'Adjetivo de tamaño, antes del sustantivo.'],
          ['sandcastle', 'noun', 'castillo de arena', 'Sustantivo compuesto, contable.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['sister', 'noun', 'hermana', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Por la tarde, comieron pescado en un pequeño restaurante.',
        t: [
          ['In', 'prep', 'por', 'Preposición de tiempo: in the evening.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['evening', 'noun', 'tarde', 'Sustantivo contable.'],
          ['they', 'pron', 'ellos', 'Pronombre sujeto.'],
          ['ate', 'verb', 'comieron', 'Pasado irregular de eat.'],
          ['fish', 'noun', 'pescado', 'Incontable en este uso.'],
          ['at', 'prep', 'en', 'Preposición de lugar puntual.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['small', 'adj', 'pequeño', 'Adjetivo de tamaño.'],
          ['restaurant', 'noun', 'restaurante', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Fue uno de los mejores días del verano.',
        t: [
          ['It', 'pron', 'eso', 'Pronombre sujeto neutro.'],
          ['was', 'verb', 'fue', 'Pasado de be.'],
          ['one', 'noun', 'uno', 'Pronombre numeral usado como sustantivo.'],
          ['of', 'prep', 'de', 'Preposición partitiva: one of the best days.'],
          ['the', 'art', 'los', 'Artículo definido.'],
          ['best', 'adj', 'mejores', 'Superlativo irregular de good.'],
          ['days', 'noun', 'días', 'Sustantivo contable, plural.'],
          ['of', 'prep', 'de', 'Preposición de pertenencia.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['summer', 'noun', 'verano', 'Sustantivo de estación.']
        ]
      }
    ],

    grammar: [
      { name: 'Past Simple', hits: '7 usos', ex: 'went · drove · built', c: '#0e9f6e' },
      { name: 'Adjetivos', hits: '5 usos', ex: 'big · small · best', c: '#e11d48' },
      { name: 'Preposiciones', hits: '8 usos', ex: 'at a small restaurant · in the evening', c: '#0891b2' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['When', 'they', 'arrived,', 'the', 'sea', 'was', '___', 'and', 'blue.'],
        answer: 'calm',
        opts: ['calm', 'calmly', 'calming'],
        why: 'Adjetivo tras be: calm, no el adverbio calmly.'
      },
      {
        s: ['Marco', 'and', 'his', 'family', 'went', '___', 'the', 'beach.'],
        answer: 'to',
        opts: ['to', 'at', 'in'],
        why: 'Dirección hacia un lugar: go to the beach.'
      },
      {
        s: ['It', 'was', 'one', '___', 'the', 'best', 'days', 'of', 'the', 'summer.'],
        answer: 'of',
        opts: ['of', 'from', 'in'],
        why: 'Partitivo: one of + superlativo.'
      }
    ]
  },

  {
    num: '02',
    title: 'Learning to Cook',
    sub: 'Past simple · secuencia',
    tag: 'Nuevo',
    meta: '4 min · 52 palabras · 12 nuevas',

    paras: [
      {
        tr: 'La semana pasada, Sofía decidió aprender a cocinar.',
        t: [
          ['Last', 'adj', 'pasada', 'Adjetivo temporal: periodo inmediatamente anterior.'],
          ['week', 'noun', 'semana', 'Sustantivo contable.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio: sujeto de la frase.'],
          ['decided', 'verb', 'decidió', 'Pasado regular: decide + -d.'],
          ['to', 'prep', '(infinitivo)', 'Marca el infinitivo: decided to learn.'],
          ['learn', 'verb', 'aprender', 'Infinitivo tras decided to.'],
          ['how', 'adv', 'cómo', 'Adverbio interrogativo indirecto.'],
          ['to', 'prep', '(infinitivo)', 'Marca el infinitivo: how to cook.'],
          ['cook', 'verb', 'cocinar', 'Infinitivo.']
        ]
      },
      {
        tr: 'Primero, vio un video sobre una receta sencilla de pasta.',
        t: [
          ['First', 'adv', 'primero', 'Adverbio de secuencia, abre la frase.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['watched', 'verb', 'vio', 'Pasado regular: watch + -ed.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['video', 'noun', 'video', 'Sustantivo contable.'],
          ['about', 'prep', 'sobre', 'Preposición de tema.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['simple', 'adj', 'sencilla', 'Adjetivo, antes del sustantivo.'],
          ['pasta', 'noun', 'pasta', 'Sustantivo usado como modificador de recipe.'],
          ['recipe', 'noun', 'receta', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Luego, compró tomates, ajo y albahaca fresca.',
        t: [
          ['Then', 'adv', 'luego', 'Adverbio de secuencia.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['bought', 'verb', 'compró', 'Pasado irregular de buy.'],
          ['tomatoes', 'noun', 'tomates', 'Sustantivo contable, plural.'],
          ['garlic', 'noun', 'ajo', 'Incontable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['fresh', 'adj', 'fresca', 'Adjetivo, antes del sustantivo.'],
          ['basil', 'noun', 'albahaca', 'Incontable.']
        ]
      },
      {
        tr: 'Después de eso, cortó las verduras con cuidado.',
        t: [
          ['After', 'prep', 'después de', 'Preposición de tiempo.'],
          ['that', 'pron', 'eso', 'Pronombre demostrativo.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['chopped', 'verb', 'cortó', 'Pasado regular: chop + -ped.'],
          ['the', 'art', 'las', 'Artículo definido.'],
          ['vegetables', 'noun', 'verduras', 'Sustantivo contable, plural.'],
          ['carefully', 'adv', 'con cuidado', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: 'Finalmente, cocinó la pasta y añadió la salsa.',
        t: [
          ['Finally', 'adv', 'finalmente', 'Adverbio de secuencia.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['cooked', 'verb', 'cocinó', 'Pasado regular: cook + -ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['pasta', 'noun', 'pasta', 'Sustantivo incontable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['added', 'verb', 'añadió', 'Pasado regular: add + -ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['sauce', 'noun', 'salsa', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'La cena sabía increíble, y Sofía se sintió muy orgullosa.',
        t: [
          ['The', 'art', 'la', 'Artículo definido.'],
          ['dinner', 'noun', 'cena', 'Sustantivo contable.'],
          ['tasted', 'verb', 'sabía', 'Pasado regular: taste + -d, verbo de percepción.'],
          ['amazing', 'adj', 'increíble', 'Adjetivo tras verbo de percepción.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio: sujeto de la frase.'],
          ['felt', 'verb', 'se sintió', 'Pasado irregular de feel.'],
          ['very', 'adv', 'muy', 'Intensificador.'],
          ['proud', 'adj', 'orgullosa', 'Adjetivo tras el verbo feel.']
        ]
      }
    ],

    grammar: [
      { name: 'Past Simple', hits: '8 usos', ex: 'bought · chopped · cooked', c: '#0e9f6e' },
      { name: 'Palabras de secuencia', hits: '4 usos', ex: 'First · Then · Finally', c: '#7c3aed' },
      { name: 'Adjetivos', hits: '4 usos', ex: 'simple · fresh · proud', c: '#e11d48' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['Sofia', 'decided', '___', 'learn', 'how', 'to', 'cook.'],
        answer: 'to',
        opts: ['to', 'for', 'at'],
        why: 'decide + to + infinitivo.'
      },
      {
        s: ['She', 'bought', 'tomatoes,', 'garlic,', '___', 'fresh', 'basil.'],
        answer: 'and',
        opts: ['and', 'with', 'or'],
        why: 'Conjunción de suma en una lista.'
      },
      {
        s: ['The', 'dinner', '___', 'amazing.'],
        answer: 'tasted',
        opts: ['tasted', 'tastes', 'tasting'],
        why: 'Pasado simple, verbo de percepción: tasted.'
      }
    ]
  },

  {
    num: '03',
    title: 'The New Job',
    sub: 'Past simple · sentimientos',
    tag: 'Nuevo',
    meta: '4 min · 59 palabras · 14 nuevas',

    paras: [
      {
        tr: 'El lunes pasado, Daniel empezó su primer día en un nuevo trabajo.',
        t: [
          ['Last', 'adj', 'pasado', 'Adjetivo temporal.'],
          ['Monday', 'noun', 'lunes', 'Día de la semana, sustantivo propio.'],
          ['Daniel', 'noun', 'Daniel', 'Nombre propio: sujeto de la frase.'],
          ['started', 'verb', 'empezó', 'Pasado regular: start + -ed.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['first', 'adj', 'primer', 'Adjetivo ordinal.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['at', 'prep', 'en', 'Preposición de lugar.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['new', 'adj', 'nuevo', 'Adjetivo, antes del sustantivo.'],
          ['job', 'noun', 'trabajo', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Se sintió nervioso cuando entró en la oficina.',
        t: [
          ['He', 'pron', 'él', 'Pronombre sujeto.'],
          ['felt', 'verb', 'se sintió', 'Pasado irregular de feel.'],
          ['nervous', 'adj', 'nervioso', 'Adjetivo tras el verbo feel.'],
          ['when', 'adv', 'cuando', 'Adverbio conector de tiempo.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['walked into', 'phr', 'entró en', 'Phrasal verb: walk + into, entrar caminando en un sitio.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['office', 'noun', 'oficina', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Su nuevo jefe sonrió y lo presentó al equipo.',
        t: [
          ['His', 'adj', 'su', 'Posesivo.'],
          ['new', 'adj', 'nuevo', 'Adjetivo.'],
          ['manager', 'noun', 'jefe', 'Sustantivo contable.'],
          ['smiled', 'verb', 'sonrió', 'Pasado regular: smile + -d.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['introduced', 'verb', 'presentó', 'Pasado regular: introduce + -d.'],
          ['him', 'pron', 'lo', 'Pronombre objeto.'],
          ['to', 'prep', 'a', 'Preposición de dirección: introduce someone to.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['team', 'noun', 'equipo', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Todos fueron amables, y Daniel se sintió más relajado.',
        t: [
          ['Everyone', 'pron', 'todos', 'Pronombre indefinido, singular.'],
          ['was', 'verb', 'fueron', 'Pasado de be, concuerda con everyone (singular).'],
          ['kind', 'adj', 'amables', 'Adjetivo tras el verbo be.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['Daniel', 'noun', 'Daniel', 'Nombre propio: sujeto de la frase.'],
          ['felt', 'verb', 'se sintió', 'Pasado irregular de feel.'],
          ['more', 'adv', 'más', 'Comparativo de superioridad.'],
          ['relaxed', 'adj', 'relajado', 'Adjetivo tras el verbo feel.']
        ]
      },
      {
        tr: 'Al final del día, estaba cansado pero feliz.',
        t: [
          ['By', 'prep', 'al', 'Preposición de tiempo: by the end of.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['end', 'noun', 'final', 'Sustantivo contable.'],
          ['of', 'prep', 'de', 'Preposición de pertenencia.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['was', 'verb', 'estaba', 'Pasado de be.'],
          ['tired', 'adj', 'cansado', 'Adjetivo tras el verbo be.'],
          ['but', 'prep', 'pero', 'Conjunción adversativa.'],
          ['happy', 'adj', 'feliz', 'Adjetivo.']
        ]
      },
      {
        tr: 'Daniel llamó a su familia y les contó las buenas noticias.',
        t: [
          ['Daniel', 'noun', 'Daniel', 'Nombre propio: sujeto de la frase.'],
          ['called', 'verb', 'llamó', 'Pasado regular: call + -ed.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['family', 'noun', 'familia', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['told', 'verb', 'contó', 'Pasado irregular de tell.'],
          ['them', 'pron', 'les', 'Pronombre objeto, plural.'],
          ['the', 'art', 'las', 'Artículo definido.'],
          ['good', 'adj', 'buenas', 'Adjetivo, antes del sustantivo.'],
          ['news', 'noun', 'noticias', 'Incontable en inglés, aunque se traduzca en plural.']
        ]
      }
    ],

    grammar: [
      { name: 'Past Simple', hits: '9 usos', ex: 'started · smiled · called', c: '#0e9f6e' },
      { name: 'Adjetivos de sentimiento', hits: '5 usos', ex: 'nervous · relaxed · happy', c: '#e11d48' },
      { name: 'Preposiciones', hits: '5 usos', ex: 'at a new job · by the end', c: '#0891b2' }
    ],

    /* solo una — honesto, no forzado a tres. El juego 03 se oculta para esta
       historia (ver GameTabs), pero la ficha de StoryFacts sí la muestra. */
    phrasals: [{ verb: 'walk into', mean: 'entrar en', quote: 'He walked into the office.' }],

    gaps: [
      {
        s: ['He', 'felt', '___', 'when', 'he', 'walked', 'into', 'the', 'office.'],
        answer: 'nervous',
        opts: ['nervous', 'nervously', 'nerve'],
        why: 'Adjetivo tras felt, no el adverbio.'
      },
      {
        s: ['Everyone', 'was', 'kind,', 'and', 'Daniel', 'felt', '___', 'relaxed.'],
        answer: 'more',
        opts: ['more', 'most', 'very'],
        why: 'Comparativo de superioridad: more + adjetivo.'
      },
      {
        s: ['___', 'the', 'end', 'of', 'the', 'day,', 'he', 'was', 'tired', 'but', 'happy.'],
        answer: 'By',
        opts: ['By', 'At', 'On'],
        why: 'By marca el límite temporal: by the end of.'
      }
    ]
  }
];
