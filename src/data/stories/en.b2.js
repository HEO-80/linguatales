/**
 * LinguaTales — Inglés B2
 * src/data/stories/en.b2.js
 *
 * Primer relato de B2. Una entrevista de trabajo entera en diálogo, con
 * narración de tercera persona alrededor ("Sebastian paused", "Jennifer
 * laughed") para que se lea como historia y no como guion pelado. El chiste
 * final gira sobre el doble sentido literal/figurado de un phrasal verb
 * (follow up) — exactamente el tipo de matiz que marca la entrada a B2.
 *
 * Igual que en A1/A2/B1: un phrasal verb es UN token, y no se escribe
 * ninguna puntuación dentro de los tokens (el lector nunca la muestra) —
 * solo palabras. La traducción (`tr`) sí lleva su puntuación normal.
 *
 * Token: [ texto, función, traducción, explicación ]
 * Funciones: art verb noun adj adv prep pron phr
 *
 * Regla de integridad (ver src/data/stories/validate.mjs): todo lo que
 * aparece en grammar[].ex y phrasals[].quote tiene que salir literalmente
 * del texto de paras.
 */

export const EN_B2 = [
  {
    num: '01',
    title: 'The 40%',
    sub: 'Entrevista de trabajo · phrasal verbs con doble sentido',
    tag: 'Nuevo',
    meta: '6 min · 157 palabras · 20 nuevas',

    paras: [
      {
        tr: 'Sebastián tenía una entrevista para un trabajo de construcción.',
        t: [
          ['Sebastian', 'noun', 'Sebastián', 'Nombre propio: protagonista del relato.'],
          ['had', 'verb', 'tenía', 'Pasado simple irregular de have: had.'],
          ['an', 'art', 'una', 'Artículo indefinido: delante de sonido vocálico.'],
          ['interview', 'noun', 'entrevista', 'Sustantivo contable.'],
          ['for', 'prep', 'para', 'Preposición de propósito.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['construction', 'noun', 'de construcción', 'Sustantivo usado como modificador de otro sustantivo.'],
          ['job', 'noun', 'trabajo', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Buenos días. Tengo una cita con Jennifer", dijo él.',
        t: [
          ['Good', 'adj', 'Buenos', 'Adjetivo, parte del saludo fijo good morning.'],
          ['morning', 'noun', 'días', 'Sustantivo: segunda parte del saludo formal.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['have', 'verb', 'tengo', 'Present simple, 1ª persona: sin -s.'],
          ['an', 'art', 'una', 'Artículo indefinido: delante de sonido vocálico.'],
          ['appointment', 'noun', 'cita', 'Sustantivo contable.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['Jennifer', 'noun', 'Jennifer', 'Nombre propio.'],
          ['he', 'pron', 'él', 'Pronombre sujeto, 3ª persona.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say: said.']
        ]
      },
      {
        tr: '"Esa soy yo. Por favor, siéntese."',
        t: [
          ["That's", 'pron', 'Esa es', 'Contracción de that is: pronombre + verbo be juntos.'],
          ['me', 'pron', 'yo', 'Pronombre objeto usado como respuesta corta: that\'s me.'],
          ['Please', 'adv', 'Por favor', 'Adverbio de cortesía.'],
          ['have', 'verb', 'tenga', 'Imperativo: have a seat, expresión fija para invitar a sentarse.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['seat', 'noun', 'asiento', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Entonces, cuénteme sobre su trayectoria."',
        t: [
          ['So', 'prep', 'Entonces', 'Conjunción de consecuencia, abre la frase.'],
          ['tell', 'verb', 'cuente', 'Imperativo: tell me, forma habitual de pedir información.'],
          ['me', 'pron', 'me', 'Pronombre objeto, 1ª persona.'],
          ['about', 'prep', 'sobre', 'Preposición de tema.'],
          ['your', 'adj', 'su', 'Posesivo formal: de usted.'],
          ['background', 'noun', 'trayectoria', 'Sustantivo contable: experiencia previa, vocabulario de entrevista.']
        ]
      },
      {
        tr: '"¿Mi experiencia? Seis años en construcción. Casas, apartamentos, hasta un gran hotel."',
        t: [
          ['My', 'adj', 'Mi', 'Posesivo.'],
          ['experience', 'noun', 'experiencia', 'Sustantivo incontable.'],
          ['Six', 'adj', 'Seis', 'Numeral.'],
          ['years', 'noun', 'años', 'Sustantivo contable, plural.'],
          ['in', 'prep', 'en', 'Preposición de campo o área.'],
          ['construction', 'noun', 'construcción', 'Sustantivo incontable.'],
          ['Houses', 'noun', 'Casas', 'Sustantivo contable, plural.'],
          ['apartments', 'noun', 'apartamentos', 'Sustantivo contable, plural.'],
          ['even', 'adv', 'hasta', 'Adverbio de énfasis.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['big', 'adj', 'gran', 'Adjetivo de tamaño.'],
          ['hotel', 'noun', 'hotel', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Genial. ¿Y cuáles son sus fortalezas?"',
        t: [
          ['Great', 'adj', 'Genial', 'Adjetivo usado como interjección.'],
          ['And', 'prep', 'Y', 'Conjunción de suma, abre la pregunta.'],
          ['what', 'pron', 'cuáles', 'Pronombre interrogativo.'],
          ['are', 'verb', 'son', 'Present simple de be, plural: are.'],
          ['your', 'adj', 'sus', 'Posesivo formal.'],
          ['strengths', 'noun', 'fortalezas', 'Sustantivo contable, plural: vocabulario de entrevista.']
        ]
      },
      {
        tr: '"¿Mis... cuerdas?" Sebastián hizo una pausa. "¡Ah, fortalezas! Soy puntual, aprendo rápido y soy confiable." Sonrió. "Practiqué esa palabra cuatro veces en el estacionamiento."',
        t: [
          ['My', 'adj', 'Mis', 'Posesivo.'],
          ['strings', 'noun', 'cuerdas', 'Sustantivo contable: confunde strengths con strings, error de oído muy común.'],
          ['Sebastian', 'noun', 'Sebastián', 'Nombre propio.'],
          ['paused', 'verb', 'hizo una pausa', 'Pasado simple regular: pause + d.'],
          ['Oh', 'adv', 'Ah', 'Interjección de sorpresa o comprensión repentina.'],
          ['strengths', 'noun', 'fortalezas', 'Sustantivo contable, plural: la palabra correcta, no strings.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['am', 'verb', 'soy', 'Present simple de be, 1ª persona: am.'],
          ['punctual', 'adj', 'puntual', 'Adjetivo tras be: vocabulario de entrevista.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['learn', 'verb', 'aprendo', 'Present simple, 1ª persona: sin -s.'],
          ['fast', 'adv', 'rápido', 'Adverbio de modo, misma forma que el adjetivo.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['am', 'verb', 'soy', 'Present simple de be, 1ª persona.'],
          ['reliable', 'adj', 'confiable', 'Adjetivo tras be: vocabulario de entrevista.'],
          ['He', 'pron', 'Él', 'Pronombre sujeto.'],
          ['smiled', 'verb', 'sonrió', 'Pasado simple regular: smile + d.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['practiced', 'verb', 'practiqué', 'Pasado simple regular: practice + d.'],
          ['that', 'adj', 'esa', 'Determinante demostrativo.'],
          ['word', 'noun', 'palabra', 'Sustantivo contable.'],
          ['four', 'adj', 'cuatro', 'Numeral.'],
          ['times', 'noun', 'veces', 'Sustantivo contable, plural.'],
          ['in', 'prep', 'en', 'Preposición de lugar.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['parking', 'noun', 'de estacionamiento', 'Sustantivo usado como modificador.'],
          ['lot', 'noun', 'lote', 'Sustantivo contable: parking lot, estacionamiento.']
        ]
      },
      {
        tr: '"¿Y sus debilidades?"',
        t: [
          ['And', 'prep', 'Y', 'Conjunción de suma, abre la pregunta.'],
          ['your', 'adj', 'sus', 'Posesivo formal.'],
          ['weaknesses', 'noun', 'debilidades', 'Sustantivo contable, plural: opuesto de strengths.']
        ]
      },
      {
        tr: '"¿La verdad? Mi inglés. A veces entiendo el sesenta por ciento, y digo \'sí, sí\' por el otro cuarenta. Entonces tengo problemas."',
        t: [
          ['The', 'art', 'La', 'Artículo definido.'],
          ['truth', 'noun', 'verdad', 'Sustantivo incontable.'],
          ['My', 'adj', 'Mi', 'Posesivo.'],
          ['English', 'noun', 'inglés', 'Idioma, con mayúscula en inglés.'],
          ['Sometimes', 'adv', 'A veces', 'Adverbio de frecuencia, abre la frase.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['understand', 'verb', 'entiendo', 'Present simple, 1ª persona: sin -s.'],
          ['sixty', 'adj', 'sesenta', 'Numeral.'],
          ['percent', 'noun', 'por ciento', 'Sustantivo: unidad de porcentaje.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['say', 'verb', 'digo', 'Present simple, 1ª persona.'],
          ['yes', 'adv', 'sí', 'Adverbio de afirmación, repetido para dar énfasis.'],
          ['yes', 'adv', 'sí', 'Repetido.'],
          ['for', 'prep', 'por', 'Preposición de cantidad restante.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['other', 'adj', 'otro', 'Adjetivo de diferencia.'],
          ['forty', 'noun', 'cuarenta', 'Numeral usado como sustantivo: el otro cuarenta por ciento.'],
          ['Then', 'adv', 'Entonces', 'Adverbio de secuencia, abre la frase.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['am', 'verb', 'estoy', 'Present simple de be, 1ª persona.'],
          ['in', 'prep', 'en', 'Preposición: in trouble, expresión fija.'],
          ['trouble', 'noun', 'problemas', 'Sustantivo incontable: in trouble, en problemas.']
        ]
      },
      {
        tr: 'Jennifer se rió. "Esa es la respuesta más honesta que he escuchado en diez años."',
        t: [
          ['Jennifer', 'noun', 'Jennifer', 'Nombre propio.'],
          ['laughed', 'verb', 'se rió', 'Pasado simple regular: laugh + ed.'],
          ["That's", 'pron', 'Esa es', 'Contracción de that is.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['most', 'adv', 'más', 'Superlativo: most + adjetivo largo.'],
          ['honest', 'adj', 'honesta', 'Adjetivo.'],
          ['answer', 'noun', 'respuesta', 'Sustantivo contable.'],
          ["I've", 'verb', 'que he', 'Contracción de I have: presente perfecto, I\'ve heard.'],
          ['heard', 'verb', 'escuchado', 'Participio irregular de hear: heard.'],
          ['in', 'prep', 'en', 'Preposición de tiempo.'],
          ['ten', 'adj', 'diez', 'Numeral.'],
          ['years', 'noun', 'años', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: '"La contactaremos", dijo ella al final.',
        t: [
          ["We'll", 'verb', 'Nosotros', 'Contracción de we will: futuro simple.'],
          ['follow up', 'phr', 'contactaremos', 'Phrasal verb: follow + up, aquí en sentido figurado — ponerse en contacto después.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['you', 'pron', 'usted', 'Pronombre objeto, formal.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['at', 'prep', 'a', 'Preposición de tiempo puntual: at the end.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['end', 'noun', 'final', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Sebastián se puso de pie y caminó hacia ella. "Usted dijo follow up. Entonces... ¿yo la sigo?"',
        t: [
          ['Sebastian', 'noun', 'Sebastián', 'Nombre propio.'],
          ['stood up', 'phr', 'se puso de pie', 'Phrasal verb: stand + up, ponerse de pie.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['walked', 'verb', 'caminó', 'Pasado simple regular: walk + ed.'],
          ['toward', 'prep', 'hacia', 'Preposición de dirección.'],
          ['her', 'pron', 'ella', 'Pronombre objeto.'],
          ['You', 'pron', 'Usted', 'Pronombre sujeto, formal.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['follow up', 'phr', 'follow up', 'Repite la frase de Jennifer: Sebastián la toma en sentido literal, no figurado.'],
          ['So', 'prep', 'Entonces', 'Conjunción de consecuencia.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['follow', 'verb', 'sigo', 'Present simple, 1ª persona: aquí follow solo, en su sentido literal de seguir a alguien.'],
          ['you', 'pron', 'la', 'Pronombre objeto, formal.']
        ]
      },
      {
        tr: '"Significa que la llamaremos", sonrió ella. "No literalmente seguir."',
        t: [
          ['It', 'pron', 'Eso', 'Pronombre sujeto neutro.'],
          ['means', 'verb', 'significa', 'Present simple, 3ª persona: mean → means.'],
          ["we'll", 'verb', 'nosotros', 'Contracción de we will: futuro simple.'],
          ['call', 'verb', 'llamaremos', 'Verbo base tras will: futuro simple.'],
          ['you', 'pron', 'la', 'Pronombre objeto, formal.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['smiled', 'verb', 'sonrió', 'Pasado simple regular: smile + d.'],
          ['Not', 'adv', 'No', 'Adverbio de negación.'],
          ['literally', 'adv', 'literalmente', 'Adverbio de modo: adjetivo + -ly.'],
          ['follow', 'verb', 'seguir', 'Verbo base: aclara que follow up no significa perseguir a alguien.']
        ]
      },
      {
        tr: '"Ah", dijo Sebastián. "Este es el cuarenta por ciento."',
        t: [
          ['Ah', 'adv', 'Ah', 'Interjección.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Sebastian', 'noun', 'Sebastián', 'Nombre propio.'],
          ['This', 'pron', 'Esto', 'Pronombre demostrativo.'],
          ['is', 'verb', 'es', 'Present simple de be, 3ª persona.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['forty', 'adj', 'cuarenta', 'Numeral: remite al chiste del sesenta/cuarenta por ciento del inicio.'],
          ['percent', 'noun', 'por ciento', 'Sustantivo: unidad de porcentaje.']
        ]
      }
    ],

    /* reglas que practica este relato · los ejemplos salen del propio texto */
    grammar: [
      { name: 'Past Simple', hits: '10 usos', ex: 'said · laughed · smiled · walked', c: '#0e9f6e' },
      { name: 'Present Simple', hits: '6 usos', ex: 'I am punctual · I understand sixty percent · I say yes', c: '#0e9f6e' }
    ],

    /* phrasal verbs con la frase donde aparecen */
    phrasals: [
      { verb: 'follow up', mean: 'contactar (figurado) / seguir (literal, el chiste)', quote: "We'll follow up with you" },
      { verb: 'stand up', mean: 'ponerse de pie', quote: 'Sebastian stood up and walked toward her' }
    ],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      {
        s: ['And', 'what', 'are', 'your', '___?'],
        answer: 'strengths',
        opts: ['strengths', 'strings', 'strength'],
        why: 'Strengths (fortalezas) no strings (cuerdas) — el error de oído que hace la broma.'
      },
      {
        s: ["We'll", '___', 'up', 'with', 'you.'],
        answer: 'follow',
        opts: ['follow', 'go', 'come'],
        why: 'Follow up (con up) es el phrasal verb: contactar de nuevo, no perseguir a alguien.'
      },
      {
        s: ['I', '___', 'punctual', 'and', 'reliable.'],
        answer: 'am',
        opts: ['am', 'is', 'be'],
        why: 'Present simple de be con I: am, nunca is ni be sin conjugar.'
      }
    ]
  },

  {
    num: '02',
    title: 'The 18 and the 80',
    sub: 'Pasado continuo · estilo indirecto · false friends',
    tag: 'Nuevo',
    meta: '7 min · 211 palabras · 22 nuevas',

    paras: [
      {
        tr: '"Sofía, creo que acabo de destruir mi carrera."',
        t: [
          ['Sofia', 'noun', 'Sofía', 'Nombre propio.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['think', 'verb', 'creo', 'Present simple, 1ª persona: sin -s.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['just', 'adv', 'acabo de', 'Adverbio: en habla informal, just + pasado simple funciona como acabar de.'],
          ['destroyed', 'verb', 'destruí', 'Pasado simple regular: destroy + ed.'],
          ['my', 'adj', 'mi', 'Posesivo.'],
          ['career', 'noun', 'carrera', 'Sustantivo contable: vocabulario de oficina.']
        ]
      },
      {
        tr: '"¿Qué pasó? Acabas de salir de la presentación."',
        t: [
          ['What', 'pron', 'Qué', 'Pronombre interrogativo.'],
          ['happened', 'verb', 'pasó', 'Pasado simple regular: happen + ed.'],
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['just', 'adv', 'acabas de', 'Adverbio: just + pasado simple, algo muy reciente.'],
          ['came out of', 'phr', 'saliste de', 'Phrasal verb de tres partes: come + out + of, salir de un sitio.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['presentation', 'noun', 'presentación', 'Sustantivo contable: vocabulario de oficina.']
        ]
      },
      {
        tr: '"Veinte personas en esa sala. Me temblaban las manos."',
        t: [
          ['Twenty', 'adj', 'Veinte', 'Numeral.'],
          ['people', 'noun', 'personas', 'Sustantivo contable, plural irregular sin -s.'],
          ['in', 'prep', 'en', 'Preposición de lugar.'],
          ['that', 'adj', 'esa', 'Determinante demostrativo.'],
          ['room', 'noun', 'sala', 'Sustantivo contable.'],
          ['My', 'adj', 'Mis', 'Posesivo.'],
          ['hands', 'noun', 'manos', 'Sustantivo contable, plural.'],
          ['were', 'verb', 'estaban', 'Pasado continuo de be, plural: were + verbo-ing.'],
          ['shaking', 'verb', 'temblando', 'Gerundio tras were: pasado continuo completo.']
        ]
      },
      {
        tr: '"El gerente me detuvo y preguntó: \'¿Puedes explicarnos tus números paso a paso?\'"',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['manager', 'noun', 'gerente', 'Sustantivo contable.'],
          ['stopped', 'verb', 'detuvo', 'Pasado simple regular: stop + ped, consonante final doblada.'],
          ['me', 'pron', 'me', 'Pronombre objeto.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['asked', 'verb', 'preguntó', 'Pasado simple regular: ask + ed.'],
          ['Can', 'verb', 'auxiliar modal', 'Pregunta con el modal can: capacidad o petición educada.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['walk', 'phr', 'walk', 'Primera mitad del phrasal verb walk through, separado aquí por el pronombre us.'],
          ['us', 'pron', 'nos', 'Pronombre objeto: se cuela entre las dos mitades del phrasal verb.'],
          ['through', 'phr', 'a través de', 'Segunda mitad de walk through: juntas significan explicar paso a paso.'],
          ['your', 'adj', 'tus', 'Posesivo.'],
          ['numbers', 'noun', 'números', 'Sustantivo contable, plural: vocabulario de oficina.']
        ]
      },
      {
        tr: '"Eso significa explicar tus datos, paso a paso."',
        t: [
          ['That', 'pron', 'Eso', 'Pronombre demostrativo.'],
          ['means', 'verb', 'significa', 'Present simple, 3ª persona: mean → means.'],
          ['explain', 'verb', 'explicar', 'Verbo base, sin to, en función de definición.'],
          ['your', 'adj', 'tus', 'Posesivo.'],
          ['data', 'noun', 'datos', 'Sustantivo: vocabulario de oficina.'],
          ['step', 'noun', 'paso', 'Sustantivo contable: step by step, expresión fija.'],
          ['by', 'prep', 'a', 'Preposición: step by step, paso a paso.'],
          ['step', 'noun', 'paso', 'Repetido en la expresión step by step.']
        ]
      },
      {
        tr: '"Ya lo sé ahora. Pero en ese momento, escuché caminar."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['know', 'verb', 'sé', 'Present simple, 1ª persona.'],
          ['that', 'pron', 'eso', 'Pronombre demostrativo.'],
          ['now', 'adv', 'ahora', 'Adverbio de tiempo.'],
          ['But', 'prep', 'Pero', 'Conjunción de contraste, abre la frase.'],
          ['in', 'prep', 'en', 'Preposición de tiempo.'],
          ['that', 'adj', 'ese', 'Determinante demostrativo.'],
          ['moment', 'noun', 'momento', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['heard', 'verb', 'escuché', 'Pasado simple irregular de hear: heard.'],
          ['walk', 'verb', 'caminar', 'Miguel entiende walk aislado, sin el through que completa el phrasal verb.']
        ]
      },
      {
        tr: '"Así que me puse de pie... y caminé hasta la ventana y volví. Despacio. Nadie dijo una palabra."',
        t: [
          ['So', 'prep', 'Así que', 'Conjunción de consecuencia.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['stood up', 'phr', 'me puse de pie', 'Phrasal verb: stand + up, ponerse de pie.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['walked', 'verb', 'caminé', 'Pasado simple regular: walk + ed. Aquí walk es literal — el chiste completo.'],
          ['to', 'prep', 'hasta', 'Preposición de dirección.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['window', 'noun', 'ventana', 'Sustantivo contable.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['back', 'adv', 'de vuelta', 'Adverbio de dirección.'],
          ['Slowly', 'adv', 'Despacio', 'Adverbio de modo: adjetivo + -ly.'],
          ['Nobody', 'pron', 'Nadie', 'Pronombre indefinido negativo.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['word', 'noun', 'palabra', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Sofía se tapó la boca. "Ay, Miguel."',
        t: [
          ['Sofia', 'noun', 'Sofía', 'Nombre propio.'],
          ['covered', 'verb', 'se tapó', 'Pasado simple regular: cover + ed.'],
          ['her', 'adj', 'su', 'Posesivo.'],
          ['mouth', 'noun', 'boca', 'Sustantivo contable.'],
          ['Oh', 'adv', 'Ay', 'Interjección.'],
          ['Miguel', 'noun', 'Miguel', 'Nombre propio: protagonista del relato.']
        ]
      },
      {
        tr: '"Entonces dije dieciocho por ciento. Pero el número real era ochenta."',
        t: [
          ['Then', 'adv', 'Entonces', 'Adverbio de secuencia, abre la frase.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['said', 'verb', 'dije', 'Pasado simple irregular de say.'],
          ['eighteen', 'adj', 'dieciocho', 'Numeral.'],
          ['percent', 'noun', 'por ciento', 'Sustantivo: unidad de porcentaje.'],
          ['But', 'prep', 'Pero', 'Conjunción de contraste.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['real', 'adj', 'verdadero', 'Adjetivo.'],
          ['number', 'noun', 'número', 'Sustantivo contable.'],
          ['was', 'verb', 'era', 'Pasado simple de be, 3ª persona.'],
          ['eighty', 'noun', 'ochenta', 'Numeral usado como sustantivo aquí.']
        ]
      },
      {
        tr: '"El gerente dijo \'Eso no puede ser correcto\', delante de todos."',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['manager', 'noun', 'gerente', 'Sustantivo contable.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['That', 'pron', 'Eso', 'Pronombre demostrativo, sujeto de la cita.'],
          ["can't", 'verb', 'no puede', 'Negación del modal can: can + not.'],
          ['be', 'verb', 'ser', 'Verbo base tras can\'t, sin to.'],
          ['right', 'adj', 'correcto', 'Adjetivo tras be.'],
          ['in', 'prep', 'delante', 'Primera parte de la preposición compuesta in front of.'],
          ['front', 'noun', 'frente', 'Segunda parte de in front of.'],
          ['of', 'prep', 'de', 'Tercera parte de in front of.'],
          ['everyone', 'pron', 'todos', 'Pronombre indefinido.']
        ]
      },
      {
        tr: '"Dije \'perdón\' catorce veces. Las conté."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['said', 'verb', 'dije', 'Pasado simple irregular de say.'],
          ['sorry', 'adv', 'perdón', 'Interjección de disculpa.'],
          ['fourteen', 'adj', 'catorce', 'Numeral.'],
          ['times', 'noun', 'veces', 'Sustantivo contable, plural.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['counted', 'verb', 'las conté', 'Pasado simple regular: count + ed.']
        ]
      },
      {
        tr: '"Escúchame. Eso no es el final de tu carrera. Yo también cometí errores."',
        t: [
          ['Listen', 'verb', 'Escucha', 'Imperativo.'],
          ['to', 'prep', 'a', 'Preposición tras listen.'],
          ['me', 'pron', 'mí', 'Pronombre objeto.'],
          ['That', 'pron', 'Eso', 'Pronombre demostrativo.'],
          ['is', 'verb', 'es', 'Present simple de be, 3ª persona.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['end', 'noun', 'final', 'Sustantivo contable.'],
          ['of', 'prep', 'de', 'Preposición de pertenencia.'],
          ['your', 'adj', 'tu', 'Posesivo.'],
          ['career', 'noun', 'carrera', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['made', 'verb', 'cometí', 'Pasado simple irregular de make: made. Make mistakes, expresión fija.'],
          ['mistakes', 'noun', 'errores', 'Sustantivo contable, plural.'],
          ['too', 'adv', 'también', 'Adverbio.']
        ]
      },
      {
        tr: '"Mi primer año, quería decirle a mi jefe que estaba avergonzada... pero dije \'estoy embarazada\'."',
        t: [
          ['My', 'adj', 'Mi', 'Posesivo.'],
          ['first', 'adj', 'primer', 'Numeral ordinal.'],
          ['year', 'noun', 'año', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['wanted', 'verb', 'quería', 'Pasado simple regular: want + ed.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['tell', 'verb', 'decirle', 'Verbo base tras to: infinitivo.'],
          ['my', 'adj', 'mi', 'Posesivo.'],
          ['boss', 'noun', 'jefe', 'Sustantivo contable.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['was', 'verb', 'estaba', 'Pasado simple de be.'],
          ['embarrassed', 'adj', 'avergonzada', 'Adjetivo tras be: NO significa embarazada, ese es el false friend con pregnant.'],
          ['but', 'prep', 'pero', 'Conjunción de contraste.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['said', 'verb', 'dije', 'Pasado simple irregular de say.'],
          ["I'm", 'verb', 'Estoy', 'Contracción de I am.'],
          ['embarazada', 'adj', 'embarazada', 'Palabra española dicha por error: el famoso false friend embarrassed / embarazada.']
        ]
      },
      {
        tr: '"¿Le dijiste a tu jefe que estabas embarazada?"',
        t: [
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['told', 'verb', 'le dijiste', 'Pasado simple irregular de tell: told.'],
          ['your', 'adj', 'tu', 'Posesivo.'],
          ['boss', 'noun', 'jefe', 'Sustantivo contable.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['were', 'verb', 'estabas', 'Pasado simple de be, 2ª persona: were.'],
          ['pregnant', 'adj', 'embarazada', 'Adjetivo: la traducción real de pregnant, distinta de embarrassed.']
        ]
      },
      {
        tr: '"Delante del cliente. Él se puso de pie para felicitarme." Sofía sonrió.',
        t: [
          ['In', 'prep', 'Delante', 'Primera parte de la preposición compuesta in front of.'],
          ['front', 'noun', 'frente', 'Segunda parte: in front of, delante de.'],
          ['of', 'prep', 'de', 'Tercera parte de in front of.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['client', 'noun', 'cliente', 'Sustantivo contable: vocabulario de oficina.'],
          ['He', 'pron', 'Él', 'Pronombre sujeto.'],
          ['stood up', 'phr', 'se puso de pie', 'Phrasal verb: stand + up, ponerse de pie.'],
          ['to', 'prep', 'para', 'Partícula de infinitivo de propósito.'],
          ['congratulate', 'verb', 'felicitarme', 'Verbo base tras to: infinitivo.'],
          ['me', 'pron', 'me', 'Pronombre objeto.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio.'],
          ['smiled', 'verb', 'sonrió', 'Pasado simple regular: smile + d.']
        ]
      },
      {
        tr: '"El punto es: te quedaste en la sala. Terminaste."',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['point', 'noun', 'punto', 'Sustantivo contable: the point is, expresión fija.'],
          ['is', 'verb', 'es', 'Present simple de be, 3ª persona.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['stayed', 'verb', 'te quedaste', 'Pasado simple regular: stay + ed.'],
          ['in', 'prep', 'en', 'Preposición de lugar.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['room', 'noun', 'sala', 'Sustantivo contable.'],
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['finished', 'verb', 'terminaste', 'Pasado simple regular: finish + ed.']
        ]
      },
      {
        tr: 'Después de que te fuiste, el gerente le dijo a Recursos Humanos que tenías los mejores números de ventas de todo el departamento.',
        t: [
          ['After', 'prep', 'Después de', 'Preposición de tiempo, abre la frase.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['left', 'verb', 'te fuiste', 'Pasado simple irregular de leave: left.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['manager', 'noun', 'gerente', 'Sustantivo contable.'],
          ['told', 'verb', 'le dijo', 'Pasado simple irregular de tell: told. Estilo indirecto: tell + persona + that.'],
          ['HR', 'noun', 'Recursos Humanos', 'Sigla de Human Resources.'],
          ['that', 'prep', 'que', 'Introduce el estilo indirecto: told HR that…'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['had', 'verb', 'tenías', 'Pasado simple irregular de have: had.'],
          ['the', 'art', 'los', 'Artículo definido.'],
          ['best', 'adj', 'mejores', 'Superlativo irregular de good: best.'],
          ['sales', 'noun', 'de ventas', 'Sustantivo usado como modificador: vocabulario de oficina.'],
          ['numbers', 'noun', 'números', 'Sustantivo contable, plural.'],
          ['in', 'prep', 'en', 'Preposición de lugar.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['whole', 'adj', 'todo', 'Adjetivo de totalidad.'],
          ['department', 'noun', 'departamento', 'Sustantivo contable: vocabulario de oficina.']
        ]
      },
      {
        tr: '"¿En serio?"',
        t: [
          ['Are', 'verb', 'Estás', 'Present simple de be, 2ª persona.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto.'],
          ['serious', 'adj', 'en serio', 'Adjetivo tras be.']
        ]
      },
      {
        tr: '"Necesito sentarme", dijo Miguel.',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['need', 'verb', 'necesito', 'Present simple, 1ª persona: sin -s.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['sit down', 'phr', 'sentarme', 'Phrasal verb: sit + down, sentarse.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Miguel', 'noun', 'Miguel', 'Nombre propio.']
        ]
      },
      {
        tr: '"Necesitas aprender inglés", dijo Sofía. Y ambos se rieron.',
        t: [
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['need', 'verb', 'necesitas', 'Present simple, 2ª persona: sin -s.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['learn', 'verb', 'aprender', 'Verbo base tras to: infinitivo.'],
          ['English', 'noun', 'inglés', 'Idioma, con mayúscula en inglés.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['Sofia', 'noun', 'Sofía', 'Nombre propio.'],
          ['And', 'prep', 'Y', 'Conjunción de suma, abre la frase.'],
          ['they', 'pron', 'ellos', 'Pronombre sujeto.'],
          ['both', 'adj', 'ambos', 'Determinante: los dos.'],
          ['laughed', 'verb', 'se rieron', 'Pasado simple regular: laugh + ed.']
        ]
      }
    ],

    /* reglas que practica este relato · los ejemplos salen del propio texto */
    grammar: [
      { name: 'Past Continuous', hits: '1 uso', ex: 'were shaking', c: '#e0a80c' },
      { name: 'Estilo indirecto (reported speech)', hits: '1 uso', ex: 'told HR that you had', c: '#4338ca' },
      { name: 'Adjetivos de sentimiento', hits: '1 uso', ex: 'embarrassed', c: '#e11d48' }
    ],

    /* phrasal verbs con la frase donde aparecen */
    phrasals: [
      { verb: 'come out of', mean: 'salir de', quote: 'You just came out of the presentation' },
      { verb: 'walk through', mean: 'explicar paso a paso', quote: 'Can you walk us through your numbers' },
      { verb: 'stand up', mean: 'ponerse de pie', quote: 'He stood up to congratulate me' },
      { verb: 'sit down', mean: 'sentarse', quote: 'I need to sit down' }
    ],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      {
        s: ['My', 'hands', '___', 'shaking.'],
        answer: 'were',
        opts: ['were', 'was', 'are'],
        why: 'Pasado continuo con hands (plural): were, no was.'
      },
      {
        s: ['Can', 'you', 'walk', 'us', '___', 'your', 'numbers?'],
        answer: 'through',
        opts: ['through', 'to', 'in'],
        why: 'Walk someone through something: el phrasal verb completo necesita through, no basta con walk solo.'
      },
      {
        s: ['I', 'was', '___', 'to', 'tell', 'my', 'boss.'],
        answer: 'embarrassed',
        opts: ['embarrassed', 'embarazada', 'embarrassing'],
        why: 'Embarrassed es avergonzado/a; embarazada (pregnant) es un false friend clásico.'
      }
    ]
  }
];
