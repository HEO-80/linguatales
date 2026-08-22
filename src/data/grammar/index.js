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
