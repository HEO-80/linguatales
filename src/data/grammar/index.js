/**
 * LinguaTales — diccionario de reglas gramaticales
 * src/data/grammar/index.js
 *
 * Un relato solo dice QUÉ reglas practica (`story.grammar[].name`); este
 * diccionario dice QUÉ ES cada regla. La misma regla aparece en varias
 * historias — vive aquí una sola vez, no dentro de cada relato, o se
 * duplicaría y acabaría desincronizada.
 *
 * `role` es la función gramatical (TOKEN.ROLE) que corresponde a esta regla:
 * el panel filtra los tokens del relato abierto por ese `role` para construir
 * "En este relato" — nunca se escriben esas fichas a mano.
 *
 * Añade aquí cualquier nombre nuevo que uses en `story.grammar[].name`: si
 * falta, el validador de desarrollo avisa (ver checkDetailCoverage en
 * src/data/stories/validate.mjs) y en producción esa fila no se despliega.
 */
export const GRAMMAR_DETAIL = {
  'Present Simple': {
    role: 'verb',
    // Activa la ficha manipulable (§2 linguatales-ficha-manipulable-spec.md).
    // El interruptor viene de aquí, no de un `if (detail.key === 'Present Simple')`
    // — cuando otra regla lo necesite, solo hace falta añadirle este campo.
    conj: 'present-simple',
    intro:
      'Se usa para rutinas, hábitos y hechos generales — la acción no ocurre en este momento, se repite o es siempre así.',
    forms: [
      { label: 'Afirmativa (I / you / we / they)', value: 'I open the window.' },
      { label: 'Afirmativa (he / she / it)', value: 'She opens the window. (+ -s)' },
      { label: 'Negativa', value: "She doesn't open the window." },
      { label: 'Pregunta', value: 'Does she open the window?' }
    ],
    caution:
      'El fallo típico: olvidar la -s de la tercera persona (she opens, no she open) — y, al revés, añadirla también en negativa o pregunta, donde el verbo vuelve al infinitivo: does she open, nunca does she opens.',
    examples: [
      { en: 'She opens the window every morning.', es: 'Ella abre la ventana cada mañana.' },
      { en: 'The bakery opens very early.', es: 'La panadería abre muy temprano.' },
      { en: 'He works in an office.', es: 'Él trabaja en una oficina.' }
    ]
  },

  'Past Simple': {
    role: 'verb',
    intro:
      'Se usa para una acción terminada en un momento concreto del pasado — ya sabemos cuándo ocurrió y ya no está pasando.',
    forms: [
      { label: 'Afirmativa (regular)', value: 'She cooked dinner. (+ -ed)' },
      { label: 'Afirmativa (irregular)', value: 'She went / built / bought…' },
      { label: 'Negativa', value: "She didn't cook dinner." },
      { label: 'Pregunta', value: 'Did she cook dinner?' }
    ],
    caution:
      "El fallo típico: usar la forma irregular también en negativa o pregunta (she didn't went ✗) — con did/didn't el verbo principal siempre vuelve al infinitivo: she didn't go.",
    examples: [
      { en: 'Marco built a big sandcastle.', es: 'Marco construyó un gran castillo de arena.' },
      { en: 'Sofia decided to learn how to cook.', es: 'Sofía decidió aprender a cocinar.' },
      { en: 'Daniel started his first day at a new job.', es: 'Daniel empezó su primer día en un nuevo trabajo.' }
    ]
  },

  'Past Continuous': {
    role: 'verb',
    intro:
      'Describe una acción que estaba en progreso en un momento del pasado — el "fondo" de la escena, frente a la acción puntual del pasado simple que la interrumpe o le sigue.',
    forms: [
      { label: 'Afirmativa (I / he / she / it)', value: 'He was speaking fast. (was + verbo-ing)' },
      { label: 'Afirmativa (you / we / they)', value: 'They were nodding. (were + verbo-ing)' },
      { label: 'Negativa', value: "Marco wasn't nodding." },
      { label: 'Pregunta', value: 'Was he speaking?' }
    ],
    caution:
      'El fallo típico: usar was con you/we/they o were con I/he/she/it — was y were se reparten igual que en el verbo be normal, nunca al revés.',
    examples: [
      { en: 'His manager was speaking fast.', es: 'Su jefe hablaba rápido.' },
      { en: 'Everyone around the table kept nodding.', es: 'Todos alrededor de la mesa seguían asintiendo.' },
      { en: "Marco wasn't nodding. He was lost.", es: 'Marco no estaba asintiendo. Estaba perdido.' }
    ]
  },

  'Past Perfect Continuous': {
    role: 'verb',
    intro:
      'Describe una acción que ya llevaba tiempo ocurriendo antes de otro momento del pasado — pone el foco en la duración, no solo en el hecho de que ya había pasado (eso es el past perfect simple).',
    forms: [
      { label: 'Afirmativa', value: 'He had been studying for three years. (had been + verbo-ing)' },
      { label: 'Negativa', value: "He hadn't been sleeping well." },
      { label: 'Pregunta', value: 'Had he been studying alone?' },
      { label: 'No cambia con la persona', value: 'had been, siempre had (nunca has been ni have been en pasado)' }
    ],
    caution:
      'El fallo típico: confundirlo con el past perfect simple (had studied) — had been studying insiste en cuánto tiempo llevaba pasando, no solo en que ya había pasado.',
    examples: [
      { en: 'He had been studying like this for three years.', es: 'Había estado estudiando así durante tres años.' },
      { en: 'She had been waiting for an hour when the bus arrived.', es: 'Había estado esperando durante una hora cuando llegó el autobús.' },
      { en: 'They had been working on the project for weeks.', es: 'Habían estado trabajando en el proyecto durante semanas.' }
    ]
  },

  'Artículos a / the': {
    role: 'art',
    intro:
      "'a/an' presenta algo nuevo o no identificado; 'the' señala algo que quien escucha ya puede identificar, porque se mencionó antes o porque solo hay uno.",
    forms: [
      { label: 'a / an — algo nuevo', value: 'a piece of toast (no se ha mencionado antes)' },
      { label: 'the — algo ya conocido', value: 'the window (ya sabemos cuál)' },
      { label: 'incontables sin a/an', value: 'coffee, bread, toast — nunca "a coffee" como sustancia' },
      { label: 'plural genérico sin artículo', value: 'Cats are animals. (sin "the")' }
    ],
    caution:
      'El fallo típico: poner a/an delante de un incontable (a bread ✗, some bread / bread ✓) — y olvidar the la segunda vez que se nombra algo ya conocido.',
    examples: [
      { en: 'She opens the window every morning.', es: 'Ella abre la ventana cada mañana.' },
      { en: 'Anna eats a piece of toast.', es: 'Anna come una tostada.' },
      { en: 'The bakery on the corner opens very early.', es: 'La panadería de la esquina abre muy temprano.' }
    ]
  },

  'Adverbios de modo': {
    role: 'adv',
    intro: 'Dicen CÓMO se hace algo, y casi siempre se forman añadiendo -ly al adjetivo.',
    forms: [
      { label: 'Formación', value: 'adjetivo + -ly → slow → slowly' },
      { label: 'Posición habitual', value: 'después del verbo (o del objeto): eats slowly' },
      { label: 'Adjetivo irregular', value: 'good → well (no "goodly")' },
      { label: 'No confundir con', value: 'el adjetivo sin -ly: quiet (adj) ≠ quietly (adv)' }
    ],
    caution:
      'El fallo típico: usar el adjetivo en vez del adverbio (she eats slow ✗, she eats slowly ✓) — y, al revés, poner el adverbio donde toca un adjetivo tras un verbo de percepción (ver "Adjetivos").',
    examples: [
      { en: 'She eats a piece of toast slowly.', es: 'Ella come una tostada despacio.' },
      { en: 'He speaks English fluently.', es: 'Él habla inglés con fluidez.' },
      { en: 'They walked home quietly.', es: 'Caminaron a casa en silencio.' }
    ]
  },

  Adjetivos: {
    role: 'adj',
    intro: 'Describen al sustantivo. En inglés no cambian de forma nunca — ni por número ni por género.',
    forms: [
      { label: 'Posición', value: 'siempre delante del sustantivo: a big sandcastle' },
      { label: 'Sin plural', value: 'big cats, nunca bigs cats' },
      { label: 'Tras verbo de percepción', value: 'smells warm, tastes amazing (adjetivo, no adverbio)' },
      { label: 'Tras be', value: 'the sea was calm' }
    ],
    caution:
      'El fallo típico: darle plural al adjetivo (bigs days ✗) — nunca concuerda en número con el sustantivo — y tras verbos de percepción (smell, taste, look, feel) va adjetivo, no adverbio: smells warm, no smells warmly.',
    examples: [
      { en: 'Marco built a big sandcastle.', es: 'Marco construyó un gran castillo de arena.' },
      { en: 'The bread smells warm and sweet.', es: 'El pan huele cálido y dulce.' },
      { en: 'It was one of the best days of the summer.', es: 'Fue uno de los mejores días del verano.' }
    ]
  },

  'Adjetivos de sentimiento': {
    role: 'adj',
    intro: 'Describen cómo se siente el sujeto, casi siempre después de feel o be.',
    forms: [
      { label: 'Tras feel', value: 'He felt nervous. (adjetivo, no el sustantivo "nerve")' },
      { label: 'Tras be', value: 'Everyone was kind.' },
      { label: 'Comparativo', value: 'more + adjetivo: felt more relaxed' },
      { label: 'Sin plural ni -ly', value: 'nervous, no nervously, cuando va tras feel/be' }
    ],
    caution:
      'El fallo típico: usar el adverbio en -ly en vez del adjetivo tras feel/be (felt nervously ✗, felt nervous ✓) — el sentimiento describe al sujeto, no la acción de sentir.',
    examples: [
      { en: 'He felt nervous when he walked into the office.', es: 'Se sintió nervioso cuando entró en la oficina.' },
      { en: 'Daniel felt more relaxed.', es: 'Daniel se sintió más relajado.' },
      { en: 'He was tired but happy.', es: 'Estaba cansado pero feliz.' }
    ]
  },

  'Preposiciones de lugar': {
    role: 'prep',
    intro: 'Dicen DÓNDE está algo — y cada una tiene su propia lógica espacial, no son intercambiables.',
    forms: [
      { label: 'on', value: 'superficie o esquina: on the corner, on the table' },
      { label: 'in', value: 'espacio cerrado o zona: in the office, in the evening' },
      { label: 'at', value: 'punto concreto: at the door, at four o’clock' },
      { label: 'by', value: 'límite o proximidad: by noon, by the window' }
    ],
    caution:
      'El fallo típico: mezclar on e in — las esquinas van con on (on the corner, no in the corner), y los espacios cerrados con in.',
    examples: [
      { en: 'The bakery on the corner opens very early.', es: 'La panadería de la esquina abre muy temprano.' },
      { en: 'They run out of bread by noon.', es: 'Se quedan sin pan a mediodía.' },
      { en: 'He walked into the office.', es: 'Entró en la oficina caminando.' }
    ]
  },

  Preposiciones: {
    role: 'prep',
    intro: 'Marcan tiempo, lugar o dirección — la elección depende de qué relación exacta describen, no del español.',
    forms: [
      { label: 'to — dirección', value: 'went to the beach' },
      { label: 'in — periodo', value: 'in the evening' },
      { label: 'at — lugar/hora puntual', value: 'at a small restaurant / at four' },
      { label: 'by — límite temporal', value: 'by the end of the day' }
    ],
    caution:
      'El fallo típico: usar to para ubicación en vez de dirección — to marca movimiento hacia (go to the beach), at marca el punto donde ya estás (at the beach).',
    examples: [
      { en: 'They went to the beach.', es: 'Fueron a la playa.' },
      { en: 'They ate fish at a small restaurant.', es: 'Comieron pescado en un pequeño restaurante.' },
      { en: 'By the end of the day, he was tired but happy.', es: 'Al final del día, estaba cansado pero feliz.' }
    ]
  },

  'Verbo modal CAN': {
    role: 'verb',
    intro:
      'Expresa capacidad o posibilidad — qué es capaz de hacer alguien. A diferencia de los demás verbos, can no cambia nunca de forma y va siempre seguido del verbo en infinitivo sin to. Su pasado es una palabra distinta: could.',
    forms: [
      { label: 'Afirmativa (presente)', value: 'The robot can cook.' },
      { label: 'Negativa (presente)', value: "The robot can't taste. (can + not, casi siempre contraído)" },
      { label: 'Pregunta (presente)', value: 'Can you make a pizza?' },
      { label: 'Pasado: could', value: 'The fox could trust him. (can → could, no "canned")' },
      { label: 'Respuesta corta', value: "Yes, I can! / No, I can't." }
    ],
    caution:
      "El fallo típico: añadir -s en 3ª persona (he cans ✗, he can ✓), meter to delante del verbo (can to cook ✗, can cook ✓), o usar can también para el pasado — el pasado de can es could, una palabra distinta, no \"canned\".",
    examples: [
      { en: "The robot can cook, but it can't taste.", es: 'El robot sabe cocinar, pero no puede saborear.' },
      { en: 'Can you make a pizza?', es: '¿Puedes hacer una pizza?' },
      { en: 'Slowly, the fox could trust him.', es: 'Despacio, el zorro llegó a confiar en él.' }
    ]
  },

  'Used to': {
    role: 'verb',
    intro:
      'Habla de un hábito o estado del pasado que ya no es cierto — used to + verbo base, sin importar la persona. Para el presente simplemente se deja de usar.',
    forms: [
      { label: 'Afirmativa', value: 'Mine used to be curly. (used to + verbo base)' },
      { label: 'Negativa', value: "I didn't use to like coffee. (sin la d en use)" },
      { label: 'Pregunta', value: 'Did you use to live here?' },
      { label: 'No confundir con', value: 'be used to + -ing (estar acostumbrado a algo), estructura distinta' }
    ],
    caution:
      'El fallo típico: mantener la d en negativas y preguntas (didn\'t used to ✗, didn\'t use to ✓) — el did ya carga el pasado, así que use vuelve a su forma base.',
    examples: [
      { en: 'Mine used to be curly like that.', es: 'El mío solía ser rizado así.' },
      { en: 'We used to live in a small town.', es: 'Solíamos vivir en un pueblo pequeño.' },
      { en: "She didn't use to like spicy food.", es: 'Antes no le gustaba la comida picante.' }
    ]
  },

  'Wish + pasado simple': {
    role: 'verb',
    intro:
      'Expresa un deseo sobre algo que no es cierto ahora mismo — wish + pasado simple, aunque hable del presente, no del pasado.',
    forms: [
      { label: 'Afirmativa', value: 'I wish I had more space. (no I have)' },
      { label: 'Con were (todas las personas)', value: 'I wish I were taller. (were, no was, igual que en el condicional)' },
      { label: 'Sobre el pasado: wish + had + participio', value: 'I wish I had studied more. (arrepentimiento por algo pasado)' }
    ],
    caution:
      'El fallo típico: usar el presente después de wish (I wish I have ✗) — wish siempre retrocede un tiempo, igual que en el segundo condicional.',
    examples: [
      { en: 'I wish I had more space.', es: 'Desearía tener más espacio.' },
      { en: 'She wishes she spoke French.', es: 'Ella desearía hablar francés.' },
      { en: 'I wish I were on vacation right now.', es: 'Desearía estar de vacaciones ahora mismo.' }
    ]
  },

  'Condicionales': {
    role: 'verb',
    intro:
      'Los condicionales conectan una condición con su resultado. Los tres tipos clásicos varían según qué tan real o probable es la condición, y hay formas más formales o alternativas a if para expresar lo mismo.',
    forms: [
      { label: 'Tipo 1 — futuro real', value: 'if + presente simple, will/can + verbo base' },
      { label: 'Tipo 2 — irreal en presente', value: 'if + pasado simple, would + verbo base' },
      { label: 'Tipo 3 — irreal en pasado', value: 'if + had + participio, would have + participio' },
      { label: 'unless', value: 'unless + presente simple = if... not (a menos que)' },
      { label: 'provided that', value: 'provided that + presente simple (siempre que, con la condición de que)' },
      { label: 'should you (formal)', value: 'should + sujeto + verbo base = if + sujeto + has/have (registro formal, con inversión)' }
    ],
    caution:
      'El fallo típico: mezclar los tiempos de cada tipo (if we will finish ✗, if we finish ✓ en el tipo 1) — la cláusula con if nunca lleva will, would ni el condicional; ese va solo en la cláusula de resultado.',
    examples: [
      { en: 'If we finish today, we can start tomorrow.', es: 'Si terminamos hoy, podemos empezar mañana.' },
      { en: 'We would travel more if we had more time.', es: 'Viajaríamos más si tuviéramos más tiempo.' },
      { en: 'If I had known earlier, I would have helped.', es: 'Si lo hubiera sabido antes, habría ayudado.' },
      { en: "Unless we hurry, we'll miss the train.", es: 'A menos que nos apuremos, perderemos el tren.' },
      { en: "Provided that everyone agrees, we'll go ahead.", es: 'Siempre que todos estén de acuerdo, seguiremos adelante.' },
      { en: 'Should you have any questions, please contact us.', es: 'Si tuviera alguna pregunta, por favor contáctenos.' }
    ]
  },

  'Estilo indirecto (reported speech)': {
    role: 'verb',
    intro:
      'Cuenta lo que alguien dijo sin repetir sus palabras exactas. El verbo que reporta (told, said) suele ir en pasado, y tell siempre necesita a quién se le dijo algo — say puede ir sin persona.',
    forms: [
      { label: 'Directo', value: '"You had the best sales numbers."' },
      { label: 'Indirecto con tell + persona', value: 'The manager told HR that you had the best sales numbers.' },
      { label: 'Indirecto con say (sin persona)', value: 'He said that it was a good presentation.' },
      { label: 'that es opcional', value: 'The manager told HR (that) you had the best numbers.' }
    ],
    caution:
      'El fallo típico: usar tell sin decir a quién (tell that... ✗) — tell siempre lleva a la persona (tell HR that…), mientras que say puede ir sin ella (say that…).',
    examples: [
      { en: 'The manager told HR that you had the best sales numbers.', es: 'El gerente le dijo a Recursos Humanos que tenías los mejores números de ventas.' },
      { en: 'She said that she was tired.', es: 'Dijo que estaba cansada.' },
      { en: 'He told me he would call later.', es: 'Me dijo que llamaría más tarde.' }
    ]
  },

  'Palabras de secuencia': {
    role: 'adv',
    intro: 'Ordenan los pasos de una narración — cada una marca su lugar en la secuencia, para no repetir "then" todo el rato.',
    forms: [
      { label: 'First', value: 'abre la secuencia: First, she watched a video.' },
      { label: 'Then', value: 'paso siguiente: Then, she bought tomatoes.' },
      { label: 'After that', value: 'paso siguiente, más explícito: After that, she chopped the vegetables.' },
      { label: 'Finally', value: 'cierra la secuencia: Finally, she cooked the pasta.' }
    ],
    caution:
      'El fallo típico: repetir then para todos los pasos — usar First / Then / After that / Finally marca el orden con claridad.',
    examples: [
      { en: 'First, she watched a video about a simple pasta recipe.', es: 'Primero, vio un video sobre una receta sencilla de pasta.' },
      { en: 'Then, she bought tomatoes, garlic, and fresh basil.', es: 'Luego, compró tomates, ajo y albahaca fresca.' },
      { en: 'Finally, she cooked the pasta and added the sauce.', es: 'Finalmente, cocinó la pasta y añadió la salsa.' }
    ]
  }
};

/**
 * Fichas de gramática de NIVEL, no de relato — material de referencia suelto
 * (p. ej. "Condicionales" en B2) que no viene narrado dentro de una historia.
 * Misma forma de clave que phrases/connectors: IDIOMA/NIVEL. Cada nombre
 * tiene que existir en GRAMMAR_DETAIL de arriba.
 */
const LEVEL_GRAMMAR = {
  'EN/B2': ['Condicionales']
};

const levelKey = (lang, level) => `${lang}/${level}`;

/** nombres de reglas de gramática de este idioma y nivel (array vacío si no existe) */
export const grammarOf = (lang, level) => LEVEL_GRAMMAR[levelKey(lang, level)] || [];
