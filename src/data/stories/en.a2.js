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
  },

  {
    num: '04',
    title: 'The Slow Bus',
    sub: 'Past simple · take (tiempo y transporte)',
    tag: 'Nuevo',
    meta: '4 min · 58 palabras · 12 nuevas',

    paras: [
      {
        tr: 'El lunes pasado, Leo quiso coger el autobús para ir al trabajo.',
        t: [
          ['Last', 'adj', 'pasado', 'Adjetivo temporal: periodo inmediatamente anterior.'],
          ['Monday', 'noun', 'lunes', 'Día de la semana, sustantivo propio.'],
          ['Leo', 'noun', 'Leo', 'Nombre propio: sujeto de la frase.'],
          ['wanted', 'verb', 'quiso', 'Pasado regular: want + -ed.'],
          ['to', 'prep', '(infinitivo)', 'Marca el infinitivo: wanted to take.'],
          ['take', 'verb', 'coger', 'Infinitivo tras wanted to.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['bus', 'noun', 'autobús', 'Sustantivo contable.'],
          ['to', 'prep', 'a', 'Preposición de dirección: to work.'],
          ['work', 'noun', 'trabajo', 'Aquí como destino, sin artículo.']
        ]
      },
      {
        tr: 'El autobús tardó cuarenta minutos en llegar.',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['bus', 'noun', 'autobús', 'Sustantivo contable.'],
          ['took', 'verb', 'tardó', 'Pasado irregular de take: take + tiempo = cuánto tarda algo.'],
          ['forty', 'adj', 'cuarenta', 'Numeral.'],
          ['minutes', 'noun', 'minutos', 'Sustantivo contable, plural.'],
          ['to', 'prep', 'en', 'Marca el infinitivo de propósito: to arrive.'],
          ['arrive', 'verb', 'llegar', 'Infinitivo.']
        ]
      },
      {
        tr: 'Luego tardó otra hora en cruzar la ciudad.',
        t: [
          ['Then', 'adv', 'luego', 'Adverbio de secuencia.'],
          ['it', 'pron', 'eso', 'Pronombre sujeto neutro: se refiere al bus.'],
          ['took', 'verb', 'tardó', 'Pasado irregular de take: take + tiempo.'],
          ['another', 'adj', 'otra', 'Determinante: una más.'],
          ['hour', 'noun', 'hora', 'Sustantivo contable.'],
          ['to', 'prep', 'en', 'Marca el infinitivo de propósito.'],
          ['cross', 'verb', 'cruzar', 'Infinitivo.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['city', 'noun', 'ciudad', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"¡Esto tarda una eternidad!" pensó Leo. Así que al día siguiente, cogió su bicicleta.',
        t: [
          ['This', 'pron', 'esto', 'Pronombre demostrativo.'],
          ['takes', 'verb', 'tarda', 'Present simple, 3ª persona: take + tiempo, ahora en presente.'],
          ['forever', 'adv', 'una eternidad', 'Adverbio de duración: mucho, mucho tiempo.'],
          ['thought', 'verb', 'pensó', 'Pasado irregular de think.'],
          ['Leo', 'noun', 'Leo', 'Nombre propio.'],
          ['So', 'adv', 'así que', 'Adverbio de consecuencia: introduce el resultado.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['next', 'adj', 'siguiente', 'Adjetivo, antes del sustantivo.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['took', 'verb', 'cogió', 'Pasado irregular de take: aquí, coger un medio de transporte.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['bike', 'noun', 'bicicleta', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'La bicicleta tardó solo quince minutos.',
        t: [
          ['The', 'art', 'la', 'Artículo definido.'],
          ['bike', 'noun', 'bicicleta', 'Sustantivo contable.'],
          ['took', 'verb', 'tardó', 'Pasado irregular de take: take + tiempo.'],
          ['only', 'adv', 'solo', 'Adverbio de restricción.'],
          ['fifteen', 'adj', 'quince', 'Numeral.'],
          ['minutes', 'noun', 'minutos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Ahora Leo coge la bicicleta cada día, y se toma un café de camino.',
        t: [
          ['Now', 'adv', 'ahora', 'Adverbio de tiempo.'],
          ['Leo', 'noun', 'Leo', 'Nombre propio.'],
          ['takes', 'verb', 'coge', 'Present simple, 3ª persona: take + transporte.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['bike', 'noun', 'bicicleta', 'Sustantivo contable.'],
          ['every', 'adj', 'cada', 'Determinante de frecuencia.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['takes', 'verb', 'toma', 'Present simple, 3ª persona: take + algo que se consume.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['coffee', 'noun', 'café', 'Aquí como sustantivo contable: una taza de café.'],
          ['on', 'prep', 'de', 'Preposición de la expresión fija on the way.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['way', 'noun', 'camino', 'Sustantivo contable, en la expresión on the way.']
        ]
      }
    ],

    grammar: [
      { name: 'Past Simple', hits: '6 usos', ex: 'took forty minutes · took his bike · wanted to take', c: '#0e9f6e' },
      { name: 'Present Simple', hits: '3 usos', ex: 'takes forever · takes the bike · takes a coffee', c: '#0e9f6e' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['The', 'bus', '___', 'forty', 'minutes', 'to', 'arrive.'],
        answer: 'took',
        opts: ['took', 'takes', 'take'],
        why: 'Pasado irregular: take → took.'
      },
      {
        s: ['Leo', 'wanted', '___', 'take', 'the', 'bus.'],
        answer: 'to',
        opts: ['to', 'for', 'at'],
        why: 'want + to + infinitivo: wanted to take.'
      },
      {
        s: ['Now', 'Leo', '___', 'the', 'bike', 'every', 'day.'],
        answer: 'takes',
        opts: ['takes', 'took', 'take'],
        why: 'Present simple, 3ª persona: takes, ya en el presente de la rutina nueva.'
      }
    ]
  },

  {
    num: '05',
    title: 'The Empty Fridge',
    sub: 'Past simple · have / had',
    tag: 'Nuevo',
    meta: '4 min · 64 palabras · 13 nuevas',

    paras: [
      {
        tr: 'Ayer, Sofía tuvo un problema: tenía diez invitados para cenar.',
        t: [
          ['Yesterday', 'adv', 'ayer', 'Adverbio de tiempo.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio: sujeto de la frase.'],
          ['had', 'verb', 'tuvo', 'Pasado irregular de have.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['problem', 'noun', 'problema', 'Sustantivo contable.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['had', 'verb', 'tenía', 'Pasado irregular de have.'],
          ['ten', 'adj', 'diez', 'Numeral.'],
          ['guests', 'noun', 'invitados', 'Sustantivo contable, plural.'],
          ['for', 'prep', 'para', 'Preposición de propósito.'],
          ['dinner', 'noun', 'cena', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Pero abrió la nevera... y estaba casi vacía.',
        t: [
          ['But', 'prep', 'pero', 'Conjunción de contraste, abre la frase.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['opened', 'verb', 'abrió', 'Pasado regular: open + -ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['fridge', 'noun', 'nevera', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['it', 'pron', 'eso', 'Pronombre sujeto neutro: se refiere a la nevera.'],
          ['was', 'verb', 'estaba', 'Pasado de be.'],
          ['almost', 'adv', 'casi', 'Adverbio de grado.'],
          ['empty', 'adj', 'vacía', 'Adjetivo tras el verbo be.']
        ]
      },
      {
        tr: 'Tenía unos huevos, un poco de queso, y pan duro. Nada más.',
        t: [
          ['She', 'pron', 'ella', 'Pronombre sujeto.'],
          ['had', 'verb', 'tenía', 'Pasado irregular de have.'],
          ['some', 'adj', 'unos', 'Determinante de cantidad indefinida.'],
          ['eggs', 'noun', 'huevos', 'Sustantivo contable, plural.'],
          ['a', 'art', 'un', 'Artículo indefinido, en la expresión a bit of.'],
          ['bit', 'noun', 'poco', 'Cuantificador: a bit of + incontable.'],
          ['of', 'prep', 'de', 'Preposición partitiva.'],
          ['cheese', 'noun', 'queso', 'Incontable: sin artículo.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['old', 'adj', 'duro', 'Adjetivo, antes del sustantivo: literalmente "viejo".'],
          ['bread', 'noun', 'pan', 'Incontable.'],
          ['Nothing', 'pron', 'nada', 'Pronombre indefinido negativo.'],
          ['else', 'adv', 'más', 'Adverbio: nada además de eso.']
        ]
      },
      {
        tr: '"¡No tengo tiempo para ir de compras!" pensó.',
        t: [
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ["don't", 'verb', 'no', 'Negación en present simple, 1ª persona: do + not.'],
          ['have', 'verb', 'tengo', 'Tras don\'t, el verbo vuelve al infinitivo: have, no has ni had.'],
          ['time', 'noun', 'tiempo', 'Sustantivo incontable en esta expresión.'],
          ['to', 'prep', 'para', 'Marca el infinitivo de propósito: time to go.'],
          ['go', 'verb', 'ir', 'Infinitivo.'],
          ['shopping', 'noun', 'de compras', 'Sustantivo en la expresión fija go shopping.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['thought', 'verb', 'pensó', 'Pasado irregular de think.']
        ]
      },
      {
        tr: 'Así que hizo una gran tortilla de queso y tostadas para todos.',
        t: [
          ['So', 'adv', 'así que', 'Adverbio de consecuencia.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['made', 'verb', 'hizo', 'Pasado irregular de make.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['big', 'adj', 'gran', 'Adjetivo de tamaño, antes del sustantivo.'],
          ['cheese', 'noun', 'queso', 'Sustantivo, aquí como modificador de omelette.'],
          ['omelette', 'noun', 'tortilla', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['toast', 'noun', 'tostadas', 'Incontable en inglés.'],
          ['for', 'prep', 'para', 'Preposición de destinatario.'],
          ['everyone', 'pron', 'todos', 'Pronombre indefinido, singular.']
        ]
      },
      {
        tr: 'A los invitados les encantó. A veces no tienes mucho, pero tienes suficiente.',
        t: [
          ['The', 'art', 'el/los', 'Artículo definido.'],
          ['guests', 'noun', 'invitados', 'Sustantivo contable, plural.'],
          ['loved', 'verb', 'encantó', 'Pasado regular: love + -d.'],
          ['it', 'pron', 'eso', 'Pronombre objeto neutro.'],
          ['Sometimes', 'adv', 'a veces', 'Adverbio de frecuencia.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto genérico.'],
          ["don't", 'verb', 'no', 'Negación en present simple: do + not.'],
          ['have', 'verb', 'tienes', 'Infinitivo tras don\'t.'],
          ['much', 'adj', 'mucho', 'Determinante de cantidad, con incontables.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto genérico.'],
          ['have', 'verb', 'tienes', 'Present simple, 2ª persona: sin -s.'],
          ['enough', 'adj', 'suficiente', 'Determinante de cantidad.']
        ]
      }
    ],

    grammar: [
      { name: 'Past Simple', hits: '8 usos', ex: 'had a problem · had ten guests · had some eggs', c: '#0e9f6e' },
      { name: 'Present Simple', hits: '5 usos', ex: "don't have time · don't have much · have enough", c: '#0e9f6e' },
      { name: 'Adjetivos', hits: '6 usos', ex: 'almost empty · old bread · big cheese omelette', c: '#e11d48' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['Yesterday,', 'Sofia', '___', 'a', 'problem.'],
        answer: 'had',
        opts: ['had', 'has', 'have'],
        why: 'Pasado irregular: have → had.'
      },
      {
        s: ['I', "don't", '___', 'time', 'to', 'go', 'shopping!'],
        answer: 'have',
        opts: ['have', 'has', 'had'],
        why: 'Tras don\'t, el verbo vuelve al infinitivo: have, no has ni had.'
      },
      {
        s: ['You', "don't", 'have', 'much,', 'but', 'you', '___', 'enough.'],
        answer: 'have',
        opts: ['have', 'has', 'had'],
        why: 'Present simple, 2ª persona: have, sin -s.'
      }
    ]
  },

  {
    num: '06',
    title: 'The Little Prince and the Fox',
    sub: 'Modales · can / could',
    tag: 'Nuevo',
    meta: '4 min · 72 palabras · 14 nuevas',

    paras: [
      {
        tr: 'En el desierto, el principito conoció a un zorro.',
        t: [
          ['In', 'prep', 'en', 'Preposición de lugar.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['desert', 'noun', 'desierto', 'Sustantivo contable.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['little', 'adj', 'pequeño', 'Adjetivo, antes del sustantivo: aquí, "el principito".'],
          ['prince', 'noun', 'príncipe', 'Sustantivo contable.'],
          ['met', 'verb', 'conoció', 'Pasado irregular de meet.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['fox', 'noun', 'zorro', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"No puedo jugar contigo," dijo el zorro. "No estoy domesticado."',
        t: [
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ["can't", 'verb', 'no puedo', 'Negación del modal can: can + not.'],
          ['play', 'verb', 'jugar', 'Verbo base tras can\'t, sin to.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['you', 'pron', 'ti', 'Pronombre objeto.'],
          ['said', 'verb', 'dijo', 'Pasado irregular de say.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['fox', 'noun', 'zorro', 'Sustantivo contable.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['am', 'verb', 'estoy', 'Present simple de be, 1ª persona.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['tamed', 'adj', 'domesticado', 'Adjetivo (participio con valor adjetivo) tras el verbo be.']
        ]
      },
      {
        tr: '"¿Qué puedo hacer?" preguntó el principito.',
        t: [
          ['What', 'pron', 'qué', 'Pronombre interrogativo, abre la pregunta.'],
          ['can', 'verb', 'auxiliar modal', 'Pregunta con can: What can + sujeto + verbo base.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['do', 'verb', 'hacer', 'Verbo base tras can, sin to.'],
          ['asked', 'verb', 'preguntó', 'Pasado regular: ask + -ed.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['little', 'adj', 'pequeño', 'Adjetivo: "el principito".'],
          ['prince', 'noun', 'príncipe', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Puedes sentarte. Cada día, un poco más cerca. Entonces podríamos ser amigos."',
        t: [
          ['You', 'pron', 'tú', 'Pronombre sujeto.'],
          ['can', 'verb', 'puedes', 'Modal can: capacidad/permiso.'],
          ['sit', 'verb', 'sentarte', 'Verbo base tras can, sin to.'],
          ['Every', 'adj', 'cada', 'Determinante de frecuencia.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['a', 'art', 'un', 'Artículo indefinido, en la expresión a little.'],
          ['little', 'adv', 'un poco', 'Aquí es adverbio, no adjetivo: modifica a closer.'],
          ['closer', 'adv', 'más cerca', 'Comparativo de close, usado como adverbio.'],
          ['Then', 'adv', 'entonces', 'Adverbio de secuencia.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto, plural.'],
          ['could', 'verb', 'podríamos', 'Pasado/condicional del modal can: could.'],
          ['be', 'verb', 'ser', 'Verbo base tras could, sin to.'],
          ['friends', 'noun', 'amigos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Así que cada día, el principito volvía. Despacio, el zorro llegó a confiar en él.',
        t: [
          ['So', 'adv', 'así que', 'Adverbio de consecuencia.'],
          ['every', 'adj', 'cada', 'Determinante de frecuencia.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['prince', 'noun', 'príncipe', 'Sustantivo contable.'],
          ['came back', 'phr', 'volvía', 'Phrasal verb: come + back, regresar.'],
          ['Slowly', 'adv', 'despacio', 'Adverbio de modo: adjetivo + -ly.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['fox', 'noun', 'zorro', 'Sustantivo contable.'],
          ['could', 'verb', 'llegó a', 'Pasado/condicional del modal can: could.'],
          ['trust', 'verb', 'confiar', 'Verbo base tras could, sin to.'],
          ['him', 'pron', 'él', 'Pronombre objeto.']
        ]
      },
      {
        tr: 'El zorro dijo: "Ahora puedo ver con el corazón. Y eso... no puedes ver con los ojos."',
        t: [
          ['The', 'art', 'el', 'Artículo definido.'],
          ['fox', 'noun', 'zorro', 'Sustantivo contable.'],
          ['said', 'verb', 'dijo', 'Pasado irregular de say.'],
          ['Now', 'adv', 'ahora', 'Adverbio de tiempo.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['can', 'verb', 'puedo', 'Modal can: capacidad.'],
          ['see', 'verb', 'ver', 'Verbo base tras can, sin to.'],
          ['with', 'prep', 'con', 'Preposición de instrumento.'],
          ['my', 'adj', 'mi', 'Posesivo.'],
          ['heart', 'noun', 'corazón', 'Sustantivo contable.'],
          ['And', 'prep', 'y', 'Conjunción de suma, abre la frase.'],
          ['that', 'pron', 'eso', 'Pronombre demostrativo.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ["can't", 'verb', 'no puedes', 'Negación del modal can.'],
          ['see', 'verb', 'ver', 'Verbo base tras can\'t, sin to.'],
          ['with', 'prep', 'con', 'Preposición de instrumento.'],
          ['your', 'adj', 'tus', 'Posesivo.'],
          ['eyes', 'noun', 'ojos', 'Sustantivo contable, plural.']
        ]
      }
    ],

    grammar: [
      { name: 'Verbo modal CAN', hits: '7 usos', ex: "can't play · what can I do · could be friends", c: '#f97316' },
      { name: 'Past Simple', hits: '4 usos', ex: 'met a fox · said the fox · asked the little prince', c: '#0e9f6e' }
    ],

    /* solo una — honesto, no forzado a tres. El juego 03 se oculta para esta
       historia (ver GameTabs), pero la ficha de StoryFacts sí la muestra. */
    phrasals: [{ verb: 'come back', mean: 'volver', quote: 'The prince came back.' }],

    gaps: [
      {
        s: ['I', '___', 'play', 'with', 'you.'],
        answer: "can't",
        opts: ["can't", "don't", "wasn't"],
        why: 'Negación del modal can: can + not.'
      },
      {
        s: ['What', '___', 'I', 'do?'],
        answer: 'can',
        opts: ['can', 'do', 'am'],
        why: 'Pregunta con el modal can: What can + sujeto + verbo base.'
      },
      {
        s: ['Slowly,', 'the', 'fox', '___', 'trust', 'him.'],
        answer: 'could',
        opts: ['could', 'can', 'cans'],
        why: 'Pasado del modal can: could, una palabra distinta, no "canned".'
      }
    ]
  }
];
