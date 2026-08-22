/**
 * LinguaTales — diccionario de phrasal verbs
 * src/data/idioms/index.js
 *
 * Un relato solo dice QUÉ phrasal verbs practica (`story.phrasals[].verb`);
 * este diccionario dice QUÉ ES cada uno. El mismo phrasal puede aparecer en
 * varias historias — vive aquí una sola vez, no dentro de cada relato.
 *
 * `examples` incluye siempre al menos una frase que NO sale del relato, para
 * ver el verbo en otro contexto — la cita literal de la historia ya se lee
 * en la tarjeta índice (IdiomCard), no hace falta repetirla aquí.
 *
 * Añade aquí cualquier verbo nuevo que uses en `story.phrasals[].verb`: si
 * falta, el validador de desarrollo avisa (ver checkDetailCoverage en
 * src/data/stories/validate.mjs) y en producción esa fila no se despliega.
 */
export const PHRASAL_DETAIL = {
  'wake up': {
    literal: 'wake (despertar) + up',
    register: 'neutro, de uso diario',
    pattern: 'wake up (intransitivo — no lleva objeto)',
    separableNote:
      "Intransitivo: no lleva objeto, así que la duda de 'separable o no' no aplica aquí (sí en su versión transitiva, wake someone up).",
    related: [
      { verb: 'get up', mean: 'levantarse (salir de la cama)' },
      { verb: 'wake someone up', mean: 'despertar a alguien (transitivo)' },
      { verb: 'stay up', mean: 'quedarse despierto' }
    ],
    examples: [
      { en: 'Anna wakes up at seven o’clock.', es: 'Anna se despierta a las siete.' },
      { en: 'I woke up late this morning.', es: 'Me desperté tarde esta mañana.' },
      { en: "Please don't wake up the baby.", es: 'Por favor no despiertes al bebé.' }
    ]
  },

  'look at': {
    literal: 'look (mirar) + at',
    register: 'neutro',
    pattern: 'look at something/someone (transitivo, con preposición)',
    separableNote: 'No separable: el objeto va siempre después de at — look at it, nunca look it at.',
    related: [
      { verb: 'look for', mean: 'buscar' },
      { verb: 'look after', mean: 'cuidar de' },
      { verb: 'look up', mean: 'buscar información / mejorar' }
    ],
    examples: [
      { en: 'She opens the window and looks at the quiet street.', es: 'Abre la ventana y mira la calle tranquila.' },
      { en: "I'm looking at your photos.", es: 'Estoy mirando tus fotos.' },
      { en: 'Look at that!', es: '¡Mira eso!' }
    ]
  },

  'put on': {
    literal: 'put (poner) + on',
    register: 'neutro',
    pattern: 'put something on / put on something (transitivo, separable)',
    separableNote:
      'Separable, y con pronombres SIEMPRE separado: put your coat on o put on your coat valen los dos, pero put it on sí, put on it no.',
    related: [
      { verb: 'take off', mean: 'quitarse (ropa)' },
      { verb: 'try on', mean: 'probarse (ropa)' },
      { verb: 'get dressed', mean: 'vestirse' }
    ],
    examples: [
      { en: 'She puts on her blue coat.', es: 'Se pone el abrigo azul.' },
      { en: 'Put your shoes on before we leave.', es: 'Ponte los zapatos antes de que salgamos.' },
      { en: "It's cold — put on a jacket.", es: 'Hace frío — ponte una chaqueta.' }
    ]
  },

  'get up': {
    literal: 'get (ponerse en) + up',
    register: 'neutro, de uso diario',
    pattern: 'get up (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'wake up', mean: 'despertarse (sin salir de la cama todavía)' },
      { verb: 'stand up', mean: 'ponerse de pie' },
      { verb: 'get out of bed', mean: 'salir de la cama' }
    ],
    examples: [
      { en: 'The baker gets up at four every morning.', es: 'El panadero se levanta a las cuatro cada mañana.' },
      { en: 'I usually get up early on weekdays.', es: 'Normalmente me levanto temprano entre semana.' },
      { en: 'Get up! We are late.', es: '¡Levántate! Vamos tarde.' }
    ]
  },

  'run out of': {
    literal: 'run (agotarse) + out + of',
    register: 'neutro',
    pattern: 'run out of something (transitivo, tres partes)',
    separableNote:
      'Inseparable — es un phrasal verb de tres partes (verbo + adverbio + preposición) y esas nunca se separan: run out of bread, nunca run bread out of.',
    related: [
      { verb: 'run out', mean: 'acabarse (sin objeto: the bread ran out)' },
      { verb: 'sell out', mean: 'agotarse las existencias' },
      { verb: 'use up', mean: 'gastar del todo' }
    ],
    examples: [
      { en: 'They run out of bread by noon.', es: 'Se quedan sin pan a mediodía.' },
      { en: 'We ran out of milk this morning.', es: 'Nos quedamos sin leche esta mañana.' },
      { en: "Don't run out of patience with them.", es: 'No te quedes sin paciencia con ellos.' }
    ]
  },

  'come back': {
    literal: 'come (venir) + back',
    register: 'neutro',
    pattern: 'come back (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'go back', mean: 'volver (alejándose de quien habla)' },
      { verb: 'get back', mean: 'volver / recuperar' },
      { verb: 'come back to', mean: 'volver a un tema o lugar concreto' }
    ],
    examples: [
      { en: 'They come back every day.', es: 'Vuelven cada día.' },
      { en: "I'll come back later.", es: 'Volveré más tarde.' },
      { en: 'She came back from the trip yesterday.', es: 'Volvió del viaje ayer.' }
    ]
  },

  'come out': {
    literal: 'come (venir) + out',
    register: 'neutro',
    pattern: 'come out (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'go out', mean: 'salir (alejándose de quien habla)' },
      { verb: 'come in', mean: 'entrar' },
      { verb: 'get out', mean: 'salir de un sitio, a veces con urgencia' }
    ],
    examples: [
      { en: 'A genie comes out.', es: 'Un genio sale.' },
      { en: 'The sun came out after the rain.', es: 'El sol salió después de la lluvia.' },
      { en: 'Nothing came out when I pressed the button.', es: 'No salió nada cuando pulsé el botón.' }
    ]
  },

  'walk into': {
    literal: 'walk (caminar) + into',
    register: 'neutro',
    pattern: 'walk into something (transitivo)',
    separableNote: 'No separable: el lugar va siempre después de into — walked into the office, nunca walked the office into.',
    related: [
      { verb: 'go into', mean: 'entrar en (más general, sin caminar necesariamente)' },
      { verb: 'walk in', mean: 'entrar (sin decir a dónde)' },
      { verb: 'run into', mean: 'encontrarse con alguien por casualidad' }
    ],
    examples: [
      { en: 'He felt nervous when he walked into the office.', es: 'Se sintió nervioso cuando entró en la oficina.' },
      { en: 'She walked into the room and smiled.', es: 'Entró en la habitación y sonrió.' },
      { en: 'Be careful, you almost walked into the door.', es: 'Cuidado, casi te das contra la puerta.' }
    ]
  }
};
