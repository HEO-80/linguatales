/**
 * LinguaTales — Inglés B1
 * src/data/stories/en.b1.js
 *
 * Primer relato de B1. Marco (ya conocido de A2, "A Trip to the Beach")
 * vuelve como protagonista, ahora en una historia con voz interior —el
 * salto de "contar lo que pasa" a "contar lo que siente y piensa" que marca
 * la entrada a B1.
 *
 * Igual que en A1/A2: un phrasal verb es UN token, y no se escribe ninguna
 * puntuación dentro de los tokens (el lector nunca la muestra) — solo
 * palabras. La traducción (`tr`) sí lleva su puntuación normal.
 *
 * Token: [ texto, función, traducción, explicación ]
 * Funciones: art verb noun adj adv prep pron phr
 *
 * Regla de integridad (ver src/data/stories/validate.mjs): todo lo que
 * aparece en grammar[].ex y phrasals[].quote tiene que salir literalmente
 * del texto de paras.
 */

export const EN_B1 = [
  {
    num: '01',
    title: 'The Silent One',
    sub: 'Pasado continuo · pasado perfecto continuo',
    tag: 'Nuevo',
    meta: '6 min · 175 palabras · 22 nuevas',

    paras: [
      {
        tr: 'Marco se sentó en la reunión semanal, y tenía las manos frías.',
        t: [
          ['Marco', 'noun', 'Marco', 'Nombre propio: sujeto de la frase.'],
          ['sat', 'verb', 'se sentó', 'Pasado simple irregular de sit: sat, no sitted.'],
          ['in', 'prep', 'en', 'Preposición de lugar: dentro de la reunión.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['weekly', 'adj', 'semanal', 'Adjetivo: con qué frecuencia es la reunión.'],
          ['meeting', 'noun', 'reunión', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['his', 'adj', 'sus', 'Posesivo, concuerda con el poseedor (Marco).'],
          ['hands', 'noun', 'manos', 'Sustantivo contable, plural.'],
          ['were', 'verb', 'estaban', 'Pasado simple de be, plural: were, no was.'],
          ['cold', 'adj', 'frías', 'Adjetivo tras el verbo be.']
        ]
      },
      {
        tr: 'Su jefe hablaba rápido, demasiado rápido, y todos alrededor de la mesa seguían asintiendo.',
        t: [
          ['His', 'adj', 'Su', 'Posesivo, concuerda con el poseedor (Marco).'],
          ['manager', 'noun', 'jefe', 'Sustantivo contable.'],
          ['was', 'verb', 'estaba', 'Pasado continuo de be, 3ª persona: was + verbo-ing.'],
          ['speaking', 'verb', 'hablando', 'Pasado continuo: was + speaking, acción en progreso.'],
          ['fast', 'adv', 'rápido', 'Adverbio de modo, misma forma que el adjetivo.'],
          ['too', 'adv', 'demasiado', 'Intensificador negativo.'],
          ['fast', 'adv', 'rápido', 'Repetido para dar énfasis.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['everyone', 'pron', 'todos', 'Pronombre indefinido, singular en inglés.'],
          ['around', 'prep', 'alrededor de', 'Preposición de lugar.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['table', 'noun', 'mesa', 'Sustantivo contable.'],
          ['kept', 'verb', 'seguían', 'Pasado simple irregular de keep: kept + gerundio.'],
          ['nodding', 'verb', 'asintiendo', 'Gerundio tras kept: keep + -ing, algo que continúa.']
        ]
      },
      {
        tr: 'Marco no estaba asintiendo. Estaba perdido.',
        t: [
          ['Marco', 'noun', 'Marco', 'Nombre propio.'],
          ["wasn't", 'verb', 'no estaba', 'Negación del pasado continuo: was + not, contraído.'],
          ['nodding', 'verb', 'asintiendo', 'Gerundio tras wasn\'t.'],
          ['He', 'pron', 'Él', 'Pronombre sujeto, 3ª persona.'],
          ['was', 'verb', 'estaba', 'Pasado simple de be.'],
          ['lost', 'adj', 'perdido', 'Adjetivo tras el verbo be: aquí significa confundido, no perdido físicamente.']
        ]
      },
      {
        tr: 'Entonces el jefe levantó la mirada y le preguntó algo directamente.',
        t: [
          ['Then', 'adv', 'Entonces', 'Adverbio de secuencia, abre la frase.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['manager', 'noun', 'jefe', 'Sustantivo contable.'],
          ['looked', 'verb', 'miró', 'Pasado simple regular: look + ed.'],
          ['up', 'adv', 'hacia arriba', 'Adverbio de dirección: looked up, levantó la vista.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['asked', 'verb', 'preguntó', 'Pasado simple regular: ask + ed.'],
          ['him', 'pron', 'le', 'Pronombre objeto, 3ª persona masculino.'],
          ['something', 'pron', 'algo', 'Pronombre indefinido.'],
          ['directly', 'adv', 'directamente', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: 'Marco entendió cada palabra, pero no la pregunta. Su mente se quedó en blanco.',
        t: [
          ['Marco', 'noun', 'Marco', 'Nombre propio.'],
          ['understood', 'verb', 'entendió', 'Pasado simple irregular de understand: understood.'],
          ['every', 'adj', 'cada', 'Determinante de totalidad.'],
          ['word', 'noun', 'palabra', 'Sustantivo contable.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['question', 'noun', 'pregunta', 'Sustantivo contable.'],
          ['His', 'adj', 'Su', 'Posesivo, concuerda con el poseedor.'],
          ['mind', 'noun', 'mente', 'Sustantivo contable.'],
          ['went', 'verb', 'se quedó', 'Pasado simple irregular de go: went. Parte de la expresión go blank.'],
          ['blank', 'adj', 'en blanco', 'Adjetivo tras went: go blank, quedarse en blanco.']
        ]
      },
      {
        tr: 'Después de un largo segundo, la mujer junto a él intervino y respondió por él.',
        t: [
          ['After', 'prep', 'Después de', 'Preposición de tiempo, abre la frase.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['long', 'adj', 'largo', 'Adjetivo.'],
          ['second', 'noun', 'segundo', 'Sustantivo contable: unidad de tiempo.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['woman', 'noun', 'mujer', 'Sustantivo contable.'],
          ['next', 'prep', 'junto', 'Primera parte de la preposición compuesta next to.'],
          ['to', 'prep', 'a', 'Segunda parte de next to: junto a.'],
          ['him', 'pron', 'él', 'Pronombre objeto.'],
          ['stepped in', 'phr', 'intervino', 'Phrasal verb: step + in, intervenir en una situación.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['answered', 'verb', 'respondió', 'Pasado simple regular: answer + ed.'],
          ['for', 'prep', 'por', 'Preposición: en lugar de, a favor de.'],
          ['him', 'pron', 'él', 'Pronombre objeto.']
        ]
      },
      {
        tr: 'La reunión siguió adelante. Nadie dijo nada. Pero Marco lo sabía.',
        t: [
          ['The', 'art', 'La', 'Artículo definido.'],
          ['meeting', 'noun', 'reunión', 'Sustantivo contable.'],
          ['moved on', 'phr', 'siguió adelante', 'Phrasal verb: move + on, continuar o pasar a otra cosa.'],
          ['Nobody', 'pron', 'Nadie', 'Pronombre indefinido negativo.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say: said.'],
          ['anything', 'pron', 'nada', 'Pronombre indefinido, en frase negativa.'],
          ['But', 'prep', 'Pero', 'Conjunción de contraste, abre la frase.'],
          ['Marco', 'noun', 'Marco', 'Nombre propio.'],
          ['knew', 'verb', 'lo sabía', 'Pasado simple irregular de know: knew.']
        ]
      },
      {
        tr: '"Buen trabajo hoy a todos", dijo el jefe al final, y pasó de largo junto a Marco sin mirarlo.',
        t: [
          ['Good', 'adj', 'Buen', 'Adjetivo.'],
          ['work', 'noun', 'trabajo', 'Sustantivo incontable.'],
          ['today', 'adv', 'hoy', 'Adverbio de tiempo.'],
          ['everyone', 'pron', 'a todos', 'Pronombre indefinido.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['manager', 'noun', 'jefe', 'Sustantivo contable.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['at', 'prep', 'a', 'Preposición de tiempo puntual: at the end.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['end', 'noun', 'final', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['walked past', 'phr', 'pasó de largo junto a', 'Phrasal verb: walk + past, pasar cerca de alguien sin detenerse.'],
          ['Marco', 'noun', 'Marco', 'Nombre propio.'],
          ['without', 'prep', 'sin', 'Preposición seguida de gerundio.'],
          ['looking', 'verb', 'mirar', 'Gerundio tras without: without + -ing.']
        ]
      },
      {
        tr: 'De vuelta en su escritorio, Marco miró fijamente la pantalla y pensó: puedo leer inglés perfectamente. ¿Entonces por qué me congelo cuando la gente habla?',
        t: [
          ['Back', 'adv', 'De vuelta', 'Adverbio de lugar, abre la frase.'],
          ['at', 'prep', 'en', 'Preposición de lugar.'],
          ['his', 'adj', 'su', 'Posesivo, concuerda con el poseedor.'],
          ['desk', 'noun', 'escritorio', 'Sustantivo contable.'],
          ['Marco', 'noun', 'Marco', 'Nombre propio.'],
          ['stared', 'verb', 'miró fijamente', 'Pasado simple regular: stare + d.'],
          ['at', 'prep', 'a', 'Preposición: stare at, mirar fijamente algo.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['screen', 'noun', 'pantalla', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['thought', 'verb', 'pensó', 'Pasado simple irregular de think: thought.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto, 1ª persona.'],
          ['can', 'verb', 'puedo', 'Modal can: capacidad. Nunca cambia de forma.'],
          ['read', 'verb', 'leer', 'Verbo base tras can, sin to.'],
          ['English', 'noun', 'inglés', 'Idioma, con mayúscula en inglés.'],
          ['perfectly', 'adv', 'perfectamente', 'Adverbio de modo: adjetivo + -ly.'],
          ['So', 'prep', 'Entonces', 'Conjunción de consecuencia, abre la pregunta.'],
          ['why', 'pron', 'por qué', 'Pronombre interrogativo.'],
          ['do', 'verb', 'auxiliar', 'Auxiliar do: forma la pregunta con I.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['freeze', 'verb', 'me congelo', 'Verbo base tras el auxiliar do.'],
          ['when', 'prep', 'cuando', 'Conjunción de tiempo.'],
          ['people', 'noun', 'la gente', 'Sustantivo contable, plural irregular sin -s.'],
          ['talk', 'verb', 'habla', 'Present simple, plural: sin -s.']
        ]
      },
      {
        tr: 'Esa noche, abrió la misma vieja aplicación otra vez: listas interminables, tablas de gramática, palabras sin vida.',
        t: [
          ['That', 'adj', 'Esa', 'Determinante demostrativo.'],
          ['night', 'noun', 'noche', 'Sustantivo contable.'],
          ['he', 'pron', 'él', 'Pronombre sujeto, 3ª persona.'],
          ['opened', 'verb', 'abrió', 'Pasado simple regular: open + ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['same', 'adj', 'misma', 'Adjetivo de identidad.'],
          ['old', 'adj', 'vieja', 'Adjetivo.'],
          ['app', 'noun', 'aplicación', 'Sustantivo contable, forma corta de application.'],
          ['again', 'adv', 'otra vez', 'Adverbio de repetición.'],
          ['endless', 'adj', 'interminables', 'Adjetivo.'],
          ['lists', 'noun', 'listas', 'Sustantivo contable, plural.'],
          ['grammar', 'noun', 'de gramática', 'Sustantivo usado como modificador, sin apóstrofo posesivo.'],
          ['charts', 'noun', 'tablas', 'Sustantivo contable, plural.'],
          ['words', 'noun', 'palabras', 'Sustantivo contable, plural.'],
          ['with', 'prep', 'con', 'Preposición; junto con no life forma sin vida.'],
          ['no', 'adj', 'ninguna', 'Determinante negativo: with no life, sin vida.'],
          ['life', 'noun', 'vida', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'Había estado estudiando así durante tres años. Tres años. Y aún así, se había congelado.',
        t: [
          ['He', 'pron', 'Él', 'Pronombre sujeto.'],
          ['had', 'verb', 'había', 'Auxiliar had: inicia el pasado perfecto continuo.'],
          ['been', 'verb', 'estado', 'Participio de be: had been + gerundio.'],
          ['studying', 'verb', 'estudiando', 'Gerundio: pasado perfecto continuo completo, had been + -ing.'],
          ['like', 'prep', 'como', 'Preposición de comparación.'],
          ['this', 'pron', 'esto', 'Pronombre demostrativo.'],
          ['for', 'prep', 'durante', 'Preposición de duración.'],
          ['three', 'adj', 'tres', 'Numeral.'],
          ['years', 'noun', 'años', 'Sustantivo contable, plural.'],
          ['Three', 'adj', 'Tres', 'Repetido para dar énfasis.'],
          ['years', 'noun', 'años', 'Sustantivo contable, plural.'],
          ['And', 'prep', 'Y', 'Conjunción de suma, abre la frase.'],
          ['still', 'adv', 'aún así', 'Adverbio de contraste: a pesar de todo eso.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['had', 'verb', 'había', 'Auxiliar had: pasado perfecto simple.'],
          ['frozen', 'verb', 'congelado', 'Participio irregular de freeze: freeze → froze → frozen.']
        ]
      },
      {
        tr: 'Cerró la aplicación en silencio. "Esto no está funcionando", dijo. "Necesito escucharlo. Necesito hablarlo. Necesito historias reales."',
        t: [
          ['He', 'pron', 'Él', 'Pronombre sujeto.'],
          ['closed', 'verb', 'cerró', 'Pasado simple regular: close + d.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['app', 'noun', 'aplicación', 'Sustantivo contable.'],
          ['quietly', 'adv', 'en silencio', 'Adverbio de modo: adjetivo + -ly.'],
          ['This', 'pron', 'Esto', 'Pronombre demostrativo.'],
          ["isn't", 'verb', 'no está', 'Negación del presente de be: is + not, contraído.'],
          ['working', 'verb', 'funcionando', 'Gerundio tras isn\'t: presente continuo.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['need', 'verb', 'necesito', 'Present simple, 1ª persona: sin -s.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo: to + verbo base.'],
          ['hear', 'verb', 'escuchar', 'Verbo base tras to: infinitivo.'],
          ['it', 'pron', 'lo', 'Pronombre objeto neutro.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['need', 'verb', 'necesito', 'Present simple, 1ª persona.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['speak', 'verb', 'hablar', 'Verbo base tras to.'],
          ['it', 'pron', 'lo', 'Pronombre objeto neutro.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['need', 'verb', 'necesito', 'Present simple, 1ª persona.'],
          ['real', 'adj', 'reales', 'Adjetivo.'],
          ['stories', 'noun', 'historias', 'Sustantivo contable, plural.']
        ]
      }
    ],

    /* reglas que practica este relato · los ejemplos salen del propio texto */
    grammar: [
      { name: 'Past Perfect Continuous', hits: '1 uso', ex: 'had been studying', c: '#7c3aed' },
      { name: 'Past Continuous', hits: '3 usos', ex: "was speaking · wasn't nodding · kept nodding", c: '#e0a80c' },
      { name: 'Verbo modal CAN', hits: '1 uso', ex: 'can read', c: '#f97316' }
    ],

    /* phrasal verbs con la frase donde aparecen */
    phrasals: [
      { verb: 'step in', mean: 'intervenir', quote: 'the woman next to him stepped in and answered for him' },
      { verb: 'move on', mean: 'seguir adelante', quote: 'The meeting moved on.' },
      { verb: 'walk past', mean: 'pasar de largo', quote: 'walked past Marco without looking' }
    ],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      {
        s: ['His', 'manager', '___', 'speaking', 'fast.'],
        answer: 'was',
        opts: ['was', 'were', 'is'],
        why: 'Pasado continuo con he/she/it: was, no were.'
      },
      {
        s: ['He', '___', 'been', 'studying', 'for', 'three', 'years.'],
        answer: 'had',
        opts: ['had', 'has', 'have'],
        why: 'Pasado perfecto continuo: had been + gerundio, siempre had, sin importar la persona.'
      },
      {
        s: ['I', '___', 'read', 'English', 'perfectly.'],
        answer: 'can',
        opts: ['can', 'cans', 'could'],
        why: 'El modal can no cambia nunca de forma: I can, he can, they can.'
      }
    ]
  },

  {
    num: '02',
    title: 'Hair',
    sub: 'Used to · phrasal verbs de todos los días',
    tag: 'Nuevo',
    meta: '4 min · 112 palabras · 16 nuevas',

    paras: [
      {
        tr: '"¡Te cortaste el pelo!" dijo Elena.',
        t: [
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['cut', 'verb', 'cortaste', 'Pasado simple irregular de cut: cut, no cambia de forma.'],
          ['your', 'adj', 'tu', 'Posesivo.'],
          ['hair', 'noun', 'pelo', 'Sustantivo incontable.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Elena', 'noun', 'Elena', 'Nombre propio: ya conocida de B2.']
        ]
      },
      {
        tr: '"Sí. Por fin me lo corté ayer", dijo Tom.',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['did', 'verb', 'sí', 'Auxiliar do en pasado, usado como respuesta corta y énfasis: I did.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['finally', 'adv', 'por fin', 'Adverbio de tiempo.'],
          ['got', 'verb', 'me lo hice', 'Pasado simple irregular de get: got. Estructura causativa: get + objeto + participio.'],
          ['it', 'pron', 'lo', 'Pronombre objeto.'],
          ['cut', 'verb', 'cortar', 'Participio pasado: got it cut, alguien más lo cortó por él.'],
          ['yesterday', 'adv', 'ayer', 'Adverbio de tiempo.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Tom', 'noun', 'Tom', 'Nombre propio.']
        ]
      },
      {
        tr: '"Estaba quedando demasiado largo. No podía aguantarlo más."',
        t: [
          ['It', 'pron', 'Eso', 'Pronombre sujeto neutro.'],
          ['was', 'verb', 'estaba', 'Pasado continuo de be, 3ª persona.'],
          ['getting', 'verb', 'quedando', 'Gerundio tras was: pasado continuo, get + -ing.'],
          ['too', 'adv', 'demasiado', 'Intensificador negativo.'],
          ['long', 'adj', 'largo', 'Adjetivo tras getting.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["couldn't", 'verb', 'no podía', 'Negación del modal can en pasado: could + not.'],
          ['put up with', 'phr', 'aguantar', 'Phrasal verb de tres partes: put + up + with, tolerar algo molesto.'],
          ['it', 'pron', 'lo', 'Pronombre objeto.'],
          ['anymore', 'adv', 'más', 'Adverbio: ya no, en frases negativas.']
        ]
      },
      {
        tr: '"Se ve genial. El mío solía ser rizado así, pero lo alisé durante años."',
        t: [
          ['It', 'pron', 'Eso', 'Pronombre sujeto neutro.'],
          ['looks', 'verb', 'se ve', 'Present simple, 3ª persona: verbo de percepción + adjetivo.'],
          ['great', 'adj', 'genial', 'Adjetivo tras looks.'],
          ['Mine', 'pron', 'El mío', 'Pronombre posesivo.'],
          ['used', 'verb', 'solía', 'Used to + verbo base: hábito o estado pasado que ya no es cierto.'],
          ['to', 'prep', 'a', 'Partícula fija de la estructura used to.'],
          ['be', 'verb', 'ser', 'Verbo base tras used to, sin conjugar.'],
          ['curly', 'adj', 'rizado', 'Adjetivo.'],
          ['like', 'prep', 'como', 'Preposición de comparación.'],
          ['that', 'pron', 'eso', 'Pronombre demostrativo.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['straightened', 'verb', 'alisé', 'Pasado simple regular: straighten + ed.'],
          ['it', 'pron', 'lo', 'Pronombre objeto.'],
          ['for', 'prep', 'durante', 'Preposición de duración.'],
          ['years', 'noun', 'años', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"¿Por qué lo dejaste?"',
        t: [
          ['Why', 'pron', 'Por qué', 'Pronombre interrogativo.'],
          ['did', 'verb', 'auxiliar', 'Auxiliar do en pasado: forma la pregunta.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['stop', 'verb', 'dejaste', 'Verbo base tras el auxiliar did.']
        ]
      },
      {
        tr: '"Me rendí. ¡Demasiado trabajo cada mañana! Ahora simplemente lo dejo secar solo."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['gave up on', 'phr', 'me rendí con', 'Phrasal verb de tres partes: give + up + on, rendirse con algo.'],
          ['it', 'pron', 'ello', 'Pronombre objeto.'],
          ['Too', 'adv', 'Demasiado', 'Intensificador negativo.'],
          ['much', 'adj', 'mucho', 'Determinante de cantidad, con incontables.'],
          ['work', 'noun', 'trabajo', 'Sustantivo incontable.'],
          ['every', 'adj', 'cada', 'Determinante de frecuencia.'],
          ['morning', 'noun', 'mañana', 'Sustantivo contable.'],
          ['Now', 'adv', 'Ahora', 'Adverbio de tiempo.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['just', 'adv', 'simplemente', 'Adverbio de restricción.'],
          ['let', 'verb', 'dejo', 'Present simple, 1ª persona: let + objeto + verbo base.'],
          ['it', 'pron', 'lo', 'Pronombre objeto.'],
          ['dry', 'verb', 'secar', 'Verbo base tras let, sin to.'],
          ['on', 'prep', 'por', 'Preposición: on its own, expresión fija.'],
          ['its', 'adj', 'su', 'Posesivo neutro: de una cosa.'],
          ['own', 'adj', 'propia', 'Adjetivo: on its own, por sí solo.']
        ]
      },
      {
        tr: '"Inteligente. Por cierto, me estoy quedando canoso. Cada vez que me corto el pelo, salen más canas."',
        t: [
          ['Smart', 'adj', 'Inteligente', 'Adjetivo usado como interjección.'],
          ["I'm", 'verb', 'Estoy', 'Contracción de I am.'],
          ['going', 'verb', 'quedando', 'Presente continuo: be going + adjetivo, un cambio progresivo.'],
          ['grey', 'adj', 'canoso', 'Adjetivo tras going: ir poniéndose canoso.'],
          ['by', 'prep', 'por', 'Primera parte de by the way.'],
          ['the', 'art', 'el', 'Artículo definido, parte de by the way.'],
          ['way', 'noun', 'camino', 'Sustantivo: by the way, expresión fija para cambiar de tema.'],
          ['Every', 'adj', 'Cada', 'Determinante de frecuencia.'],
          ['time', 'noun', 'vez', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['get', 'verb', 'me corto', 'Present simple, 1ª persona: get a haircut, expresión fija.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['haircut', 'noun', 'corte de pelo', 'Sustantivo contable.'],
          ['more', 'adj', 'más', 'Comparativo de much/many.'],
          ['grey', 'noun', 'canas', 'Sustantivo usado aquí como nombre: el color gris del pelo.'],
          ['shows up', 'phr', 'aparecen', 'Phrasal verb: show + up, aparecer o hacerse visible.']
        ]
      },
      {
        tr: '"¿Has pensado en teñírtelo?"',
        t: [
          ['Have', 'verb', 'auxiliar', 'Auxiliar have: forma el presente perfecto en la pregunta.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['thought', 'verb', 'pensado', 'Participio irregular de think: thought.'],
          ['about', 'prep', 'en', 'Preposición: think about, pensar en/sobre.'],
          ['dyeing', 'verb', 'teñirlo', 'Gerundio tras about: dye + ing.'],
          ['it', 'pron', 'lo', 'Pronombre objeto.']
        ]
      },
      {
        tr: '"¿Yo? Para nada. Mi esposa dice que debería dejármelo largo y dejarlo todo plateado."',
        t: [
          ['Me', 'pron', 'Yo', 'Pronombre objeto usado como respuesta corta.'],
          ['No', 'adv', 'De ninguna', 'Adverbio de negación, parte de no way.'],
          ['way', 'noun', 'manera', 'Sustantivo: no way, expresión fija de rechazo.'],
          ['My', 'adj', 'Mi', 'Posesivo.'],
          ['wife', 'noun', 'esposa', 'Sustantivo contable.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona: say → says.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['should', 'verb', 'debería', 'Modal should: consejo o recomendación.'],
          ['grow', 'phr', 'dejarme', 'Primera mitad del phrasal verb grow out, separado aquí por it.'],
          ['it', 'pron', 'lo', 'Pronombre objeto: se cuela entre las dos mitades del phrasal verb.'],
          ['out', 'phr', 'largo', 'Segunda mitad de grow out: dejar crecer algo por completo.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['go', 'verb', 'ponerme', 'Verbo base tras should: go + adjetivo, volverse de cierta forma.'],
          ['full', 'adj', 'completamente', 'Adjetivo usado como intensificador.'],
          ['silver', 'adj', 'plateado', 'Adjetivo de color.']
        ]
      },
      {
        tr: '"¿Honestamente? Te quedaría genial", se rió Elena.',
        t: [
          ['Honestly', 'adv', 'Honestamente', 'Adverbio de modo: adjetivo + -ly.'],
          ["You'd", 'verb', 'Tú', 'Contracción de you would: condicional.'],
          ['pull', 'phr', 'quedarte', 'Primera mitad del phrasal verb pull off, separado aquí por it.'],
          ['it', 'pron', 'lo', 'Pronombre objeto: se cuela entre las dos mitades del phrasal verb.'],
          ['off', 'phr', 'bien', 'Segunda mitad de pull off: lograr algo con éxito, que te quede bien.'],
          ['Elena', 'noun', 'Elena', 'Nombre propio.'],
          ['laughed', 'verb', 'se rió', 'Pasado simple regular: laugh + ed.']
        ]
      }
    ],

    grammar: [
      { name: 'Used to', hits: '1 uso', ex: 'used to be', c: '#0891b2' },
      { name: 'Verbo modal CAN', hits: '1 uso', ex: "couldn't put up with", c: '#f97316' },
      { name: 'Preposiciones', hits: '3 usos', ex: 'by the way · for years', c: '#0891b2' }
    ],

    phrasals: [
      { verb: 'put up with', mean: 'aguantar', quote: "I couldn't put up with it anymore" },
      { verb: 'give up on', mean: 'rendirse con algo', quote: 'I gave up on it' },
      { verb: 'show up', mean: 'aparecer', quote: 'more grey shows up' },
      { verb: 'grow out', mean: 'dejar crecer del todo', quote: 'I should grow it out' },
      { verb: 'pull off', mean: 'lograr / quedar bien', quote: "You'd pull it off" }
    ],

    gaps: [
      {
        s: ['Mine', 'used', '___', 'be', 'curly.'],
        answer: 'to',
        opts: ['to', 'for', 'of'],
        why: 'La estructura fija es used to + verbo base, para hábitos pasados que ya no son ciertos.'
      },
      {
        s: ['I', "couldn't", 'put', 'up', '___', 'it', 'anymore.'],
        answer: 'with',
        opts: ['with', 'for', 'of'],
        why: 'Put up with es un phrasal verb de tres partes: put + up + with, aguantar algo.'
      },
      {
        s: ['I', 'should', 'grow', 'it', '___.'],
        answer: 'out',
        opts: ['out', 'up', 'on'],
        why: 'Grow out (dejar crecer del todo) es distinto de grow up (crecer/hacerse mayor).'
      }
    ]
  },

  {
    num: '03',
    title: 'Mess and Tidying',
    sub: 'Phrasal verbs domésticos',
    tag: 'Nuevo',
    meta: '4 min · 97 palabras · 15 nuevas',

    paras: [
      {
        tr: '"Tu cocina es un desastre", dijo Nora, entrando.',
        t: [
          ['Your', 'adj', 'Tu', 'Posesivo.'],
          ['kitchen', 'noun', 'cocina', 'Sustantivo contable.'],
          ['is', 'verb', 'es', 'Present simple de be, 3ª persona.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['disaster', 'noun', 'desastre', 'Sustantivo contable.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Nora', 'noun', 'Nora', 'Nombre propio.'],
          ['walking in', 'phr', 'entrando', 'Phrasal verb: walk + in, entrar caminando.']
        ]
      },
      {
        tr: '"Ya sé, ya sé. Me quedé dormido esta mañana y no limpié", dijo Leo.',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['know', 'verb', 'sé', 'Present simple, 1ª persona.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['know', 'verb', 'sé', 'Repetido para dar énfasis.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['slept in', 'phr', 'me quedé dormido', 'Phrasal verb: sleep + in, dormir hasta tarde.'],
          ['this', 'adj', 'esta', 'Determinante demostrativo.'],
          ['morning', 'noun', 'mañana', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ["didn't", 'verb', 'no', 'Negación del pasado simple: did + not, contraído.'],
          ['clean up', 'phr', 'limpié', 'Phrasal verb: clean + up, limpiar del todo.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Leo', 'noun', 'Leo', 'Nombre propio.']
        ]
      },
      {
        tr: '"¡Hay sartenes por todas partes!"',
        t: [
          ['There', 'pron', 'Hay', 'Pronombre expletivo: there is/are, expresión de existencia.'],
          ['are', 'verb', 'hay', 'Present simple de be, plural: there are.'],
          ['pans', 'noun', 'sartenes', 'Sustantivo contable, plural.'],
          ['everywhere', 'adv', 'por todas partes', 'Adverbio de lugar.']
        ]
      },
      {
        tr: '"Cocino, como mientras está caliente, y luego me ocupo del desastre. Ese es mi sistema."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['cook', 'verb', 'cocino', 'Present simple, 1ª persona.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['eat', 'verb', 'como', 'Present simple, 1ª persona.'],
          ['while', 'prep', 'mientras', 'Conjunción de simultaneidad.'],
          ["it's", 'verb', 'está', 'Contracción de it is.'],
          ['hot', 'adj', 'caliente', 'Adjetivo tras be.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['then', 'adv', 'luego', 'Adverbio de secuencia.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['deal with', 'phr', 'me ocupo de', 'Phrasal verb: deal + with, ocuparse o lidiar con algo.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['mess', 'noun', 'desastre', 'Sustantivo incontable.'],
          ["That's", 'pron', 'Ese es', 'Contracción de that is.'],
          ['my', 'adj', 'mi', 'Posesivo.'],
          ['system', 'noun', 'sistema', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"¿Y funciona el sistema?"',
        t: [
          ['And', 'prep', 'Y', 'Conjunción de suma, abre la pregunta.'],
          ['does', 'verb', 'auxiliar', 'Auxiliar do, 3ª persona: does. Forma la pregunta.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['system', 'noun', 'sistema', 'Sustantivo contable.'],
          ['work', 'verb', 'funciona', 'Verbo base tras el auxiliar does.']
        ]
      },
      {
        tr: '"La verdad, no", admitió Leo. "Los platos sucios se acumulan."',
        t: [
          ['Not', 'adv', 'No', 'Adverbio de negación.'],
          ['really', 'adv', 'realmente', 'Adverbio de modo.'],
          ['Leo', 'noun', 'Leo', 'Nombre propio.'],
          ['admitted', 'verb', 'admitió', 'Pasado simple regular: admit + ted, consonante final doblada.'],
          ['The', 'art', 'Los', 'Artículo definido.'],
          ['washing up', 'noun', 'platos sucios', 'Sustantivo compuesto (inglés británico): the washing up, los platos por lavar.'],
          ['piles up', 'phr', 'se acumulan', 'Phrasal verb: pile + up, acumularse.']
        ]
      },
      {
        tr: '"Pero tengo un truco: pongo una canción y termino antes de que acabe."',
        t: [
          ['But', 'prep', 'Pero', 'Conjunción de contraste.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['have', 'verb', 'tengo', 'Present simple, 1ª persona.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['trick', 'noun', 'truco', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['put on', 'phr', 'pongo', 'Phrasal verb: put + on, aquí en el sentido de reproducir música.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['song', 'noun', 'canción', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['finish', 'verb', 'termino', 'Present simple, 1ª persona.'],
          ['before', 'prep', 'antes de', 'Preposición de tiempo.'],
          ['it', 'pron', 'ella', 'Pronombre sujeto.'],
          ['ends', 'verb', 'acaba', 'Present simple, 3ª persona: end → ends.']
        ]
      },
      {
        tr: '"¿Eso funciona?"',
        t: [
          ['Does', 'verb', 'auxiliar', 'Auxiliar do, 3ª persona.'],
          ['that', 'pron', 'eso', 'Pronombre demostrativo.'],
          ['work', 'verb', 'funciona', 'Verbo base tras does.']
        ]
      },
      {
        tr: '"Solo si es una canción larga."',
        t: [
          ['Only', 'adv', 'Solo', 'Adverbio de restricción.'],
          ['if', 'prep', 'si', 'Conjunción condicional.'],
          ["it's", 'verb', 'es', 'Contracción de it is.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['long', 'adj', 'larga', 'Adjetivo.'],
          ['song', 'noun', 'canción', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Nora se rió. "Venga."',
        t: [
          ['Nora', 'noun', 'Nora', 'Nombre propio.'],
          ['laughed', 'verb', 'se rió', 'Pasado simple regular: laugh + ed.'],
          ['Come', 'verb', 'Venga', 'Imperativo: come on, expresión de ánimo.'],
          ['on', 'adv', 'vamos', 'Segunda parte de la interjección come on.']
        ]
      },
      {
        tr: '"Pon tu playlist más larga. Te ayudo a ordenar."',
        t: [
          ['Put on', 'phr', 'Pon', 'Phrasal verb: put + on, reproducir música. Imperativo.'],
          ['your', 'adj', 'tu', 'Posesivo.'],
          ['longest', 'adj', 'más larga', 'Superlativo de long.'],
          ['playlist', 'noun', 'playlist', 'Sustantivo contable.'],
          ["I'll", 'verb', 'Yo', 'Contracción de I will: futuro simple.'],
          ['help', 'verb', 'ayudo', 'Verbo base tras will: futuro simple.'],
          ['you', 'pron', 'te', 'Pronombre objeto.'],
          ['tidy up', 'phr', 'ordenar', 'Phrasal verb: tidy + up, ordenar u organizar.']
        ]
      }
    ],

    grammar: [
      { name: 'Present Simple', hits: '6 usos', ex: 'I cook · I eat · deal with the mess', c: '#0e9f6e' },
      { name: 'Past Simple', hits: '3 usos', ex: 'slept in · admitted', c: '#0e9f6e' },
      { name: 'Preposiciones', hits: '2 usos', ex: "while it's hot · before it ends", c: '#0891b2' }
    ],

    phrasals: [
      { verb: 'walk in', mean: 'entrar', quote: '"Your kitchen is a disaster," said Nora, walking in' },
      { verb: 'sleep in', mean: 'dormir hasta tarde', quote: 'I slept in this morning' },
      { verb: 'clean up', mean: 'limpiar del todo', quote: "didn't clean up" },
      { verb: 'deal with', mean: 'ocuparse de', quote: 'I deal with the mess' },
      { verb: 'pile up', mean: 'acumularse', quote: 'The washing up piles up' },
      { verb: 'put on', mean: 'poner (música)', quote: 'I put on a song' },
      { verb: 'tidy up', mean: 'ordenar', quote: "I'll help you tidy up" }
    ],

    gaps: [
      {
        s: ['I', '___', 'in', 'this', 'morning.'],
        answer: 'slept',
        opts: ['slept', 'sleep', 'sleeping'],
        why: 'Sleep in (pasado: slept in) es dormir hasta tarde.'
      },
      {
        s: ['I', '___', 'with', 'the', 'mess', 'after', 'I', 'eat.'],
        answer: 'deal',
        opts: ['deal', 'do', 'make'],
        why: 'Deal with es el phrasal verb para ocuparse de algo, no do with ni make with.'
      },
      {
        s: ["I'll", 'help', 'you', 'tidy', '___.'],
        answer: 'up',
        opts: ['up', 'on', 'in'],
        why: 'Tidy up (ordenar) necesita up, no on ni in.'
      }
    ]
  },

  {
    num: '04',
    title: 'Memory and the Brain',
    sub: 'Phrasal verbs · presente simple',
    tag: 'Nuevo',
    meta: '4 min · 106 palabras · 13 nuevas',

    paras: [
      {
        tr: '"Tengo una memoria terrible", dijo Marco.',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['have', 'verb', 'tengo', 'Present simple, 1ª persona.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['terrible', 'adj', 'terrible', 'Adjetivo.'],
          ['memory', 'noun', 'memoria', 'Sustantivo incontable.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Marco', 'noun', 'Marco', 'Nombre propio: protagonista ya conocido de A2 y B1.']
        ]
      },
      {
        tr: '"¿En serio? ¿Qué olvidaste esta vez?" preguntó Sofía.',
        t: [
          ['Really', 'adv', 'En serio', 'Adverbio de énfasis, usado como interjección.'],
          ['What', 'pron', 'Qué', 'Pronombre interrogativo.'],
          ['did', 'verb', 'auxiliar', 'Auxiliar do en pasado: forma la pregunta.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['forget', 'verb', 'olvidaste', 'Verbo base tras el auxiliar did.'],
          ['this', 'adj', 'esta', 'Determinante demostrativo.'],
          ['time', 'noun', 'vez', 'Sustantivo contable.'],
          ['asked', 'verb', 'preguntó', 'Pasado simple regular: ask + ed.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio.']
        ]
      },
      {
        tr: '"Esa es la parte extraña. Recuerdo cosas de hace diez años perfectamente."',
        t: [
          ["That's", 'pron', 'Esa es', 'Contracción de that is.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['strange', 'adj', 'extraña', 'Adjetivo.'],
          ['part', 'noun', 'parte', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['remember', 'verb', 'recuerdo', 'Present simple, 1ª persona.'],
          ['things', 'noun', 'cosas', 'Sustantivo contable, plural.'],
          ['from', 'prep', 'de', 'Preposición de origen temporal.'],
          ['ten', 'adj', 'diez', 'Numeral.'],
          ['years', 'noun', 'años', 'Sustantivo contable, plural.'],
          ['ago', 'adv', 'atrás', 'Adverbio: ten years ago, hace diez años.'],
          ['perfectly', 'adv', 'perfectamente', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: '"Pero no puedo recordar qué desayuné."',
        t: [
          ['But', 'prep', 'Pero', 'Conjunción de contraste.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["can't", 'verb', 'no puedo', 'Negación del modal can: can + not.'],
          ['remember', 'verb', 'recordar', 'Verbo base tras can\'t, sin to.'],
          ['what', 'pron', 'qué', 'Pronombre interrogativo.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['had', 'verb', 'tomé', 'Pasado simple irregular de have: had. Have breakfast, expresión fija.'],
          ['for', 'prep', 'de', 'Preposición: for breakfast, de desayuno.'],
          ['breakfast', 'noun', 'desayuno', 'Sustantivo incontable.']
        ]
      },
      {
        tr: '"¡Igual aquí! Memoria a largo plazo, genial. ¿A corto plazo? Desaparecida."',
        t: [
          ['Same', 'adj', 'Igual', 'Adjetivo usado en la expresión fija same here.'],
          ['here', 'adv', 'aquí', 'Adverbio de lugar: same here, expresión de acuerdo.'],
          ['Long', 'adj', 'Largo', 'Adjetivo, parte de long term.'],
          ['term', 'noun', 'plazo', 'Sustantivo: long term, largo plazo.'],
          ['memory', 'noun', 'memoria', 'Sustantivo incontable.'],
          ['great', 'adj', 'genial', 'Adjetivo.'],
          ['Short', 'adj', 'Corto', 'Adjetivo, parte de short term.'],
          ['term', 'noun', 'plazo', 'Sustantivo.'],
          ['Gone', 'adj', 'Desaparecida', 'Participio irregular de go usado como adjetivo: gone, ya no está.']
        ]
      },
      {
        tr: '"La semana pasada, un amigo sacó el tema de un viaje antiguo."',
        t: [
          ['Last', 'adj', 'pasada', 'Adjetivo: last week, la semana pasada.'],
          ['week', 'noun', 'semana', 'Sustantivo contable.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['friend', 'noun', 'amigo', 'Sustantivo contable.'],
          ['brought up', 'phr', 'sacó el tema de', 'Phrasal verb: bring + up, mencionar o sacar un tema.'],
          ['an', 'art', 'un', 'Artículo indefinido: delante de sonido vocálico.'],
          ['old', 'adj', 'antiguo', 'Adjetivo.'],
          ['trip', 'noun', 'viaje', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"No tenía ningún recuerdo de eso. Tuvo que mostrarme fotos para probar que estuve ahí."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['had', 'verb', 'tenía', 'Pasado simple irregular de have: had.'],
          ['no', 'adj', 'ningún', 'Determinante negativo.'],
          ['memory', 'noun', 'recuerdo', 'Sustantivo incontable.'],
          ['of', 'prep', 'de', 'Preposición de pertenencia.'],
          ['it', 'pron', 'eso', 'Pronombre objeto.'],
          ['She', 'pron', 'Ella', 'Pronombre sujeto.'],
          ['had', 'verb', 'tuvo', 'Pasado de have to: obligación en el pasado.'],
          ['to', 'prep', 'que', 'Partícula de infinitivo, parte de had to.'],
          ['show', 'verb', 'mostrarme', 'Verbo base tras to: infinitivo.'],
          ['me', 'pron', 'me', 'Pronombre objeto.'],
          ['photos', 'noun', 'fotos', 'Sustantivo contable, plural.'],
          ['to', 'prep', 'para', 'Partícula de infinitivo de propósito.'],
          ['prove', 'verb', 'probar', 'Verbo base tras to.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['was', 'verb', 'estuve', 'Pasado simple de be.'],
          ['there', 'adv', 'ahí', 'Adverbio de lugar.']
        ]
      },
      {
        tr: '"Eso da un poco de miedo."',
        t: [
          ["That's", 'pron', 'Eso es', 'Contracción de that is.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['bit', 'noun', 'poco', 'Sustantivo: a bit, un poco.'],
          ['scary', 'adj', 'que da miedo', 'Adjetivo.']
        ]
      },
      {
        tr: '"Así que ahora intento mantener mi cerebro activo."',
        t: [
          ['So', 'prep', 'Así que', 'Conjunción de consecuencia.'],
          ['now', 'adv', 'ahora', 'Adverbio de tiempo.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['try', 'verb', 'intento', 'Present simple, 1ª persona.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['keep', 'verb', 'mantener', 'Verbo base tras to.'],
          ['my', 'adj', 'mi', 'Posesivo.'],
          ['brain', 'noun', 'cerebro', 'Sustantivo contable.'],
          ['active', 'adj', 'activo', 'Adjetivo: keep + objeto + adjetivo.']
        ]
      },
      {
        tr: '"Leo, estudio idiomas, resuelvo cosas despacio."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['read', 'verb', 'leo', 'Present simple, 1ª persona: se escribe igual que el pasado, pero se pronuncia distinto.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['study', 'verb', 'estudio', 'Present simple, 1ª persona.'],
          ['languages', 'noun', 'idiomas', 'Sustantivo contable, plural.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['work', 'phr', 'resuelvo', 'Primera mitad del phrasal verb work out, separado aquí por things.'],
          ['things', 'noun', 'las cosas', 'Sustantivo, objeto del phrasal verb.'],
          ['out', 'phr', 'out', 'Segunda mitad de work out: juntas significan resolver o entender algo.'],
          ['slowly', 'adv', 'despacio', 'Adverbio de modo.']
        ]
      },
      {
        tr: '"¿Ayuda?"',
        t: [
          ['Does', 'verb', 'auxiliar', 'Auxiliar do, 3ª persona.'],
          ['it', 'pron', 'eso', 'Pronombre sujeto neutro.'],
          ['help', 'verb', 'ayuda', 'Verbo base tras does.']
        ]
      },
      {
        tr: '"No lo sé", dijo Marco. "Ya se me olvidó."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["don't", 'verb', 'no', 'Negación del presente simple: do + not, contraído.'],
          ['know', 'verb', 'sé', 'Verbo base tras don\'t.'],
          ['Marco', 'noun', 'Marco', 'Nombre propio.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['already', 'adv', 'ya', 'Adverbio: refuerza que algo ya pasó.'],
          ['forgot', 'verb', 'olvidé', 'Pasado simple irregular de forget: forgot.']
        ]
      }
    ],

    grammar: [
      { name: 'Present Simple', hits: '5 usos', ex: 'I remember · I read · I study languages', c: '#0e9f6e' },
      { name: 'Verbo modal CAN', hits: '1 uso', ex: "can't remember", c: '#f97316' },
      { name: 'Past Simple', hits: '2 usos', ex: 'brought up · forgot', c: '#0e9f6e' }
    ],

    phrasals: [
      { verb: 'bring up', mean: 'sacar un tema', quote: 'a friend brought up an old trip' },
      { verb: 'work out', mean: 'resolver / entender', quote: 'I work things out slowly' }
    ],

    gaps: [
      {
        s: ['I', "can't", '___', 'what', 'I', 'had', 'for', 'breakfast.'],
        answer: 'remember',
        opts: ['remember', 'remind', 'memory'],
        why: 'Remember es recordar (verbo); remind es recordarle algo a alguien; memory es el sustantivo.'
      },
      {
        s: ['A', 'friend', '___', 'up', 'an', 'old', 'trip.'],
        answer: 'brought',
        opts: ['brought', 'brings', 'bring'],
        why: 'Bring up en pasado es brought up, no bringed.'
      },
      {
        s: ['I', 'work', 'things', '___', 'slowly.'],
        answer: 'out',
        opts: ['out', 'up', 'on'],
        why: 'Work out (resolver o entender) necesita out.'
      }
    ]
  },

  {
    num: '05',
    title: 'Houses',
    sub: 'Preposiciones · wish + pasado simple',
    tag: 'Nuevo',
    meta: '4 min · 94 palabras · 13 nuevas',

    paras: [
      {
        tr: '"¿Vives en una casa o en un piso?" preguntó Elena.',
        t: [
          ['Do', 'verb', 'auxiliar', 'Auxiliar do: forma la pregunta.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['live', 'verb', 'vives', 'Verbo base tras el auxiliar do.'],
          ['in', 'prep', 'en', 'Preposición de lugar.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['or', 'prep', 'o', 'Conjunción de alternativa.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['flat', 'noun', 'piso', 'Sustantivo contable: apartamento, en inglés británico.'],
          ['asked', 'verb', 'preguntó', 'Pasado simple regular: ask + ed.'],
          ['Elena', 'noun', 'Elena', 'Nombre propio.']
        ]
      },
      {
        tr: '"Un piso pequeño, tercer piso. Por suerte hay ascensor."',
        t: [
          ['A', 'art', 'Un', 'Artículo indefinido.'],
          ['small', 'adj', 'pequeño', 'Adjetivo.'],
          ['flat', 'noun', 'piso', 'Sustantivo contable.'],
          ['third', 'adj', 'tercer', 'Numeral ordinal.'],
          ['floor', 'noun', 'piso', 'Sustantivo contable: planta de un edificio.'],
          ['Luckily', 'adv', 'Por suerte', 'Adverbio de modo: adjetivo + -ly.'],
          ["there's", 'pron', 'hay', 'Contracción de there is: expresión de existencia.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['lift', 'noun', 'ascensor', 'Sustantivo contable: inglés británico, elevator en americano.']
        ]
      },
      {
        tr: '"No querría cargar la compra por todas esas escaleras."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["wouldn't", 'verb', 'no querría', 'Negación del condicional: would + not, contraído.'],
          ['want', 'verb', 'querer', 'Verbo base tras wouldn\'t.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['carry', 'verb', 'cargar', 'Verbo base tras to.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['shopping', 'noun', 'compra', 'Sustantivo incontable.'],
          ['up', 'prep', 'por', 'Preposición de dirección: carry up, subir cargando.'],
          ['all', 'adj', 'todas', 'Determinante de totalidad.'],
          ['those', 'adj', 'esas', 'Determinante demostrativo.'],
          ['stairs', 'noun', 'escaleras', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"Te entiendo. Yo vivo en una casa, pero es más trabajo."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['hear', 'verb', 'entiendo', 'Present simple, 1ª persona: I hear you, expresión fija de empatía.'],
          ['you', 'pron', 'te', 'Pronombre objeto.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['live', 'verb', 'vivo', 'Present simple, 1ª persona.'],
          ['in', 'prep', 'en', 'Preposición de lugar.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['house', 'noun', 'casa', 'Sustantivo contable.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ["it's", 'verb', 'es', 'Contracción de it is.'],
          ['more', 'adj', 'más', 'Comparativo de much.'],
          ['work', 'noun', 'trabajo', 'Sustantivo incontable.']
        ]
      },
      {
        tr: '"Siempre hay algo que arreglar o limpiar."',
        t: [
          ["There's", 'pron', 'Hay', 'Contracción de there is.'],
          ['always', 'adv', 'siempre', 'Adverbio de frecuencia.'],
          ['something', 'pron', 'algo', 'Pronombre indefinido.'],
          ['to', 'prep', 'que', 'Partícula de infinitivo.'],
          ['fix', 'verb', 'arreglar', 'Verbo base tras to.'],
          ['or', 'prep', 'o', 'Conjunción de alternativa.'],
          ['clean up', 'phr', 'limpiar', 'Phrasal verb: clean + up, limpiar del todo.']
        ]
      },
      {
        tr: '"Por eso me gusta mi piso."',
        t: [
          ["That's", 'pron', 'Por eso', 'Contracción de that is: that\'s why, expresión fija de causa.'],
          ['why', 'pron', 'por qué', 'Segunda parte de that\'s why.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['like', 'verb', 'me gusta', 'Present simple, 1ª persona.'],
          ['my', 'adj', 'mi', 'Posesivo.'],
          ['flat', 'noun', 'piso', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"No tengo que preocuparme por un jardín ni por cortar el césped."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["don't", 'verb', 'no', 'Negación de have to: don\'t have to, no ser necesario.'],
          ['have', 'verb', 'tener', 'Verbo base tras don\'t: don\'t have to, no ser necesario.'],
          ['to', 'prep', 'que', 'Partícula, parte de have to.'],
          ['worry', 'verb', 'preocuparme', 'Verbo base tras to: infinitivo.'],
          ['about', 'prep', 'por', 'Preposición de tema.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['garden', 'noun', 'jardín', 'Sustantivo contable.'],
          ['or', 'prep', 'o', 'Conjunción de alternativa.'],
          ['mowing', 'verb', 'cortar', 'Gerundio: mow, cortar el césped.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['lawn', 'noun', 'césped', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Verdad. Pero a veces desearía tener más espacio."',
        t: [
          ['True', 'adj', 'Verdad', 'Adjetivo usado como interjección.'],
          ['But', 'prep', 'Pero', 'Conjunción de contraste.'],
          ['sometimes', 'adv', 'a veces', 'Adverbio de frecuencia.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['wish', 'verb', 'desearía', 'Present simple, 1ª persona: wish + pasado simple, deseo poco probable.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['had', 'verb', 'tener', 'Pasado simple tras wish: expresa un deseo, no el pasado real.'],
          ['more', 'adj', 'más', 'Determinante de cantidad.'],
          ['space', 'noun', 'espacio', 'Sustantivo incontable.']
        ]
      },
      {
        tr: '"La hierba siempre es más verde al otro lado, ¿verdad?" sonrió Elena.',
        t: [
          ['The', 'art', 'La', 'Artículo definido.'],
          ['grass', 'noun', 'hierba', 'Sustantivo incontable.'],
          ['is', 'verb', 'es', 'Present simple de be, 3ª persona.'],
          ['always', 'adv', 'siempre', 'Adverbio de frecuencia.'],
          ['greener', 'adj', 'más verde', 'Comparativo de green: green → greener.'],
          ['right', 'adv', 'verdad', 'Adverbio usado como coletilla interrogativa.'],
          ['Elena', 'noun', 'Elena', 'Nombre propio.'],
          ['smiled', 'verb', 'sonrió', 'Pasado simple regular: smile + d.']
        ]
      },
      {
        tr: '"Sobre todo cuando en realidad tienes hierba que cortar."',
        t: [
          ['Especially', 'adv', 'Sobre todo', 'Adverbio de énfasis.'],
          ['when', 'prep', 'cuando', 'Conjunción de tiempo.'],
          ["you've", 'verb', 'tienes', 'Contracción de you have.'],
          ['actually', 'adv', 'en realidad', 'Adverbio de modo: adjetivo + -ly.'],
          ['got', 'verb', 'tienes', 'Have got, expresión fija de posesión.'],
          ['grass', 'noun', 'hierba', 'Sustantivo incontable.'],
          ['to', 'prep', 'que', 'Partícula de infinitivo.'],
          ['mow', 'verb', 'cortar', 'Verbo base tras to.']
        ]
      }
    ],

    grammar: [
      { name: 'Preposiciones', hits: '4 usos', ex: 'in a house · about a garden', c: '#0891b2' },
      { name: 'Wish + pasado simple', hits: '1 uso', ex: 'wish I had', c: '#7c3aed' }
    ],

    phrasals: [
      { verb: 'clean up', mean: 'limpiar', quote: "There's always something to fix or clean up" }
    ],

    gaps: [
      {
        s: ['I', 'wish', 'I', '___', 'more', 'space.'],
        answer: 'had',
        opts: ['had', 'have', 'has'],
        why: 'Wish + pasado simple para un deseo sobre el presente: wish I had, no wish I have.'
      },
      {
        s: ["There's", 'always', 'something', 'to', 'fix', 'or', '___', 'up.'],
        answer: 'clean',
        opts: ['clean', 'cleaning', 'cleans'],
        why: 'Clean up (limpiar del todo) va en infinitivo tras to: to fix or clean up.'
      },
      {
        s: ['I', "don't", 'have', '___', 'worry', 'about', 'a', 'garden.'],
        answer: 'to',
        opts: ['to', 'for', 'of'],
        why: "Don't have to (no ser necesario) necesita to antes del verbo."
      }
    ]
  },

  {
    num: '06',
    title: 'Extended Families',
    sub: 'Phrasal verbs · presente y pasado simple',
    tag: 'Nuevo',
    meta: '4 min · 108 palabras · 15 nuevas',

    paras: [
      {
        tr: '"¿Tienes una familia grande?" preguntó Sofía.',
        t: [
          ['Do', 'verb', 'auxiliar', 'Auxiliar do: forma la pregunta.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['have', 'verb', 'tienes', 'Verbo base tras el auxiliar do.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['big', 'adj', 'grande', 'Adjetivo.'],
          ['family', 'noun', 'familia', 'Sustantivo contable.'],
          ['asked', 'verb', 'preguntó', 'Pasado simple regular: ask + ed.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio.']
        ]
      },
      {
        tr: '"La verdad, no. Dos padres, una hermana, un par de tíos."',
        t: [
          ['Not', 'adv', 'No', 'Adverbio de negación.'],
          ['really', 'adv', 'realmente', 'Adverbio de modo.'],
          ['Two', 'adj', 'Dos', 'Numeral.'],
          ['parents', 'noun', 'padres', 'Sustantivo contable, plural.'],
          ['one', 'adj', 'una', 'Numeral.'],
          ['sister', 'noun', 'hermana', 'Sustantivo contable.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['couple', 'noun', 'par', 'Sustantivo: a couple of, un par de.'],
          ['of', 'prep', 'de', 'Preposición de cantidad.'],
          ['uncles', 'noun', 'tíos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"Solo nos reunimos en Navidad", dijo Daniel.',
        t: [
          ['We', 'pron', 'Nosotros', 'Pronombre sujeto.'],
          ['only', 'adv', 'solo', 'Adverbio de restricción.'],
          ['get together', 'phr', 'nos reunimos', 'Phrasal verb: get + together, reunirse.'],
          ['at', 'prep', 'en', 'Preposición de tiempo puntual: at Christmas.'],
          ['Christmas', 'noun', 'Navidad', 'Sustantivo propio.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Daniel', 'noun', 'Daniel', 'Nombre propio.']
        ]
      },
      {
        tr: '"Igual. Casi no veo a mis primos."',
        t: [
          ['Same', 'adj', 'Igual', 'Adjetivo.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['barely', 'adv', 'casi no', 'Adverbio de frecuencia negativa.'],
          ['see', 'verb', 'veo', 'Present simple, 1ª persona.'],
          ['my', 'adj', 'mis', 'Posesivo.'],
          ['cousins', 'noun', 'primos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"Bodas y funerales. Eso es todo."',
        t: [
          ['Weddings', 'noun', 'Bodas', 'Sustantivo contable, plural.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['funerals', 'noun', 'funerales', 'Sustantivo contable, plural.'],
          ["That's", 'pron', 'Eso es', 'Contracción de that is.'],
          ['about', 'adv', 'aproximadamente', 'Adverbio: that\'s about it, expresión fija.'],
          ['it', 'pron', 'todo', 'Pronombre: that\'s about it, eso es todo.']
        ]
      },
      {
        tr: '"¿Alguna vez has investigado tu árbol genealógico?"',
        t: [
          ['Have', 'verb', 'auxiliar', 'Auxiliar have: forma el presente perfecto.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['ever', 'adv', 'alguna vez', 'Adverbio en preguntas sobre experiencias de vida.'],
          ['looked into', 'phr', 'investigado', 'Phrasal verb: look + into, investigar o examinar algo de cerca.'],
          ['your', 'adj', 'tu', 'Posesivo.'],
          ['family', 'noun', 'familia', 'Sustantivo usado como modificador.'],
          ['tree', 'noun', 'árbol', 'Sustantivo contable: family tree, árbol genealógico.']
        ]
      },
      {
        tr: '"Qué curioso que preguntes. Mi familia dice que uno de nuestros ancestros estuvo conectado con la realeza."',
        t: [
          ['Funny', 'adj', 'Curioso', 'Adjetivo usado como interjección.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['ask', 'verb', 'preguntas', 'Present simple, 2ª persona.'],
          ['My', 'adj', 'Mi', 'Posesivo.'],
          ['family', 'noun', 'familia', 'Sustantivo contable.'],
          ['says', 'verb', 'dice', 'Present simple, 3ª persona: say → says.'],
          ['one', 'pron', 'uno', 'Pronombre: one of, uno de.'],
          ['of', 'prep', 'de', 'Preposición de pertenencia.'],
          ['our', 'adj', 'nuestros', 'Posesivo.'],
          ['ancestors', 'noun', 'ancestros', 'Sustantivo contable, plural.'],
          ['was', 'verb', 'estuvo', 'Pasado simple de be.'],
          ['connected', 'adj', 'conectado', 'Adjetivo/participio tras be: connected to, relacionado con.'],
          ['to', 'prep', 'con', 'Preposición.'],
          ['royalty', 'noun', 'la realeza', 'Sustantivo incontable.']
        ]
      },
      {
        tr: '"¿En serio?"',
        t: [
          ['Seriously', 'adv', 'En serio', 'Adverbio de modo, usado como interjección.']
        ]
      },
      {
        tr: '"Nadie lo ha comprobado, si es verdad."',
        t: [
          ["Nobody's", 'pron', 'Nadie ha', 'Contracción de nobody has: presente perfecto.'],
          ['checked', 'verb', 'comprobado', 'Participio regular: check + ed.'],
          ['if', 'prep', 'si', 'Conjunción condicional.'],
          ["it's", 'verb', 'es', 'Contracción de it is.'],
          ['true', 'adj', 'verdad', 'Adjetivo.']
        ]
      },
      {
        tr: '"Pero me encantaría buscarlo algún día."',
        t: [
          ['But', 'prep', 'Pero', 'Conjunción de contraste.'],
          ["I'd", 'verb', 'Yo', 'Contracción de I would.'],
          ['love', 'verb', 'encantaría', 'Verbo base tras I\'d: would love, condicional.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['look', 'phr', 'buscar', 'Primera mitad del phrasal verb look up, separado aquí por it.'],
          ['it', 'pron', 'lo', 'Pronombre objeto: se cuela entre las dos mitades del phrasal verb.'],
          ['up', 'phr', 'up', 'Segunda mitad de look up: juntas significan buscar información.'],
          ['someday', 'adv', 'algún día', 'Adverbio de tiempo.']
        ]
      },
      {
        tr: '"Mi bisabuela era italiana. Me gustaría localizar a algunos parientes allá."',
        t: [
          ['My', 'adj', 'Mi', 'Posesivo.'],
          ['great', 'adj', 'bis', 'Prefijo: great-grandmother, bisabuela.'],
          ['grandmother', 'noun', 'abuela', 'Sustantivo contable.'],
          ['was', 'verb', 'era', 'Pasado simple de be.'],
          ['Italian', 'adj', 'italiana', 'Adjetivo de nacionalidad, con mayúscula en inglés.'],
          ["I'd", 'verb', 'Yo', 'Contracción de I would.'],
          ['like', 'verb', 'gustaría', 'Verbo base tras I\'d: would like, condicional educado.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['track down', 'phr', 'localizar', 'Phrasal verb: track + down, localizar algo o a alguien tras buscarlo.'],
          ['some', 'adj', 'algunos', 'Determinante de cantidad.'],
          ['relatives', 'noun', 'parientes', 'Sustantivo contable, plural.'],
          ['over', 'adv', 'por', 'Preposición/adverbio de lugar, parte de over there.'],
          ['there', 'adv', 'allá', 'Adverbio de lugar: over there, allá.']
        ]
      },
      {
        tr: '"Hazlo. Podrías encontrar a un primo perdido hace tiempo que sea dueño de un castillo."',
        t: [
          ['Do', 'verb', 'Haz', 'Imperativo.'],
          ['it', 'pron', 'lo', 'Pronombre objeto.'],
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['might', 'verb', 'podrías', 'Modal might: posibilidad incierta.'],
          ['find', 'verb', 'encontrar', 'Verbo base tras might, sin to.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['long', 'adj', 'largo', 'Adjetivo, parte de long-lost.'],
          ['lost', 'adj', 'perdido', 'Adjetivo, parte de long-lost: perdido hace tiempo.'],
          ['cousin', 'noun', 'primo', 'Sustantivo contable.'],
          ['who', 'pron', 'que', 'Pronombre relativo.'],
          ['owns', 'verb', 'es dueño de', 'Present simple, 3ª persona: own → owns.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['castle', 'noun', 'castillo', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Daniel se rió. "O que me deba dinero."',
        t: [
          ['Daniel', 'noun', 'Daniel', 'Nombre propio.'],
          ['laughed', 'verb', 'se rió', 'Pasado simple regular: laugh + ed.'],
          ['Or', 'prep', 'O', 'Conjunción de alternativa, abre la frase.'],
          ['who', 'pron', 'que', 'Pronombre relativo.'],
          ['owes', 'verb', 'debe', 'Present simple, 3ª persona: owe → owes.'],
          ['me', 'pron', 'me', 'Pronombre objeto.'],
          ['money', 'noun', 'dinero', 'Sustantivo incontable.']
        ]
      }
    ],

    grammar: [
      { name: 'Present Simple', hits: '5 usos', ex: 'I barely see · says · owns', c: '#0e9f6e' },
      { name: 'Past Simple', hits: '2 usos', ex: 'was Italian · laughed', c: '#0e9f6e' },
      { name: 'Preposiciones', hits: '2 usos', ex: 'at Christmas · of our ancestors', c: '#0891b2' }
    ],

    phrasals: [
      { verb: 'get together', mean: 'reunirse', quote: 'We only get together at Christmas' },
      { verb: 'look into', mean: 'investigar', quote: 'Have you ever looked into your family tree' },
      { verb: 'look up', mean: 'buscar información', quote: "I'd love to look it up someday" },
      { verb: 'track down', mean: 'localizar', quote: "I'd like to track down some relatives" }
    ],

    gaps: [
      {
        s: ['We', 'only', 'get', '___', 'at', 'Christmas.'],
        answer: 'together',
        opts: ['together', 'up', 'on'],
        why: 'Get together (reunirse) es la expresión fija, no get up ni get on.'
      },
      {
        s: ['Have', 'you', 'ever', 'looked', '___', 'your', 'family', 'tree?'],
        answer: 'into',
        opts: ['into', 'for', 'at'],
        why: 'Look into (investigar) necesita into, no for ni at.'
      },
      {
        s: ["I'd", 'like', 'to', '___', 'down', 'some', 'relatives.'],
        answer: 'track',
        opts: ['track', 'look', 'find'],
        why: 'Track down (localizar tras buscar) es el phrasal verb más preciso aquí.'
      }
    ]
  }
];
