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
      { en: 'I put on a song and finish before it ends.', es: 'Pongo una canción y termino antes de que acabe.' }
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
  },

  'step in': {
    literal: 'step (dar un paso) + in',
    register: 'neutro, algo formal',
    pattern: 'step in (intransitivo, a veces + and + verbo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'jump in', mean: 'intervenir de forma más brusca o repentina' },
      { verb: 'take over', mean: 'hacerse cargo de algo por completo' },
      { verb: 'help out', mean: 'echar una mano' }
    ],
    examples: [
      { en: 'The woman next to him stepped in and answered for him.', es: 'La mujer junto a él intervino y respondió por él.' },
      { en: 'When the manager left, her assistant stepped in.', es: 'Cuando el jefe se fue, su asistente asumió el cargo.' },
      { en: "Don't step in unless they ask for help.", es: 'No intervengas a menos que pidan ayuda.' }
    ]
  },

  'move on': {
    literal: 'move (moverse) + on',
    register: 'neutro',
    pattern: 'move on (intransitivo, a veces + to + algo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'go on', mean: 'continuar (más general)' },
      { verb: 'carry on', mean: 'seguir adelante con algo' },
      { verb: 'get over', mean: 'superar algo emocionalmente' }
    ],
    examples: [
      { en: 'The meeting moved on. Nobody said anything.', es: 'La reunión siguió adelante. Nadie dijo nada.' },
      { en: "Let's move on to the next topic.", es: 'Pasemos al siguiente tema.' },
      { en: 'It took her months to move on after the breakup.', es: 'Le tomó meses superarlo después de la ruptura.' }
    ]
  },

  'walk past': {
    literal: 'walk (caminar) + past',
    register: 'neutro',
    pattern: 'walk past someone/something (transitivo)',
    separableNote: 'No separable: el objeto va siempre después de past — walked past Marco, nunca walked Marco past.',
    related: [
      { verb: 'walk by', mean: 'pasar cerca (casi lo mismo que walk past)' },
      { verb: 'pass by', mean: 'pasar de largo' },
      { verb: 'walk away', mean: 'alejarse caminando' }
    ],
    examples: [
      { en: 'The manager walked past Marco without looking.', es: 'El jefe pasó de largo junto a Marco sin mirarlo.' },
      { en: 'She walked past me without saying hello.', es: 'Pasó por mi lado sin saludarme.' },
      { en: 'I walk past that café every morning.', es: 'Paso por delante de esa cafetería cada mañana.' }
    ]
  },

  'follow up': {
    literal:
      'follow (seguir) + up — en sentido figurado significa "contactar de nuevo"; tomado literalmente sería "seguir a alguien caminando", que es justo el malentendido que provoca la broma.',
    register: 'neutro, muy común en el trabajo y los negocios',
    pattern: 'follow up (with someone) / follow up on something (transitivo, con preposición)',
    separableNote: 'No separable: el objeto va siempre después de with/on — follow up with you, nunca follow you up.',
    related: [
      { verb: 'get back to', mean: 'responder o retomar el contacto con alguien' },
      { verb: 'check in', mean: 'hacer seguimiento breve, más informal' },
      { verb: 'reach out', mean: 'contactar a alguien por primera vez' }
    ],
    examples: [
      { en: "I'll follow up with the team after the meeting.", es: 'Haré seguimiento con el equipo después de la reunión.' },
      { en: "We'll follow up with you.", es: 'La contactaremos.' },
      { en: 'Can you follow up with the client tomorrow?', es: '¿Puedes hacer seguimiento con el cliente mañana?' }
    ]
  },

  'stand up': {
    literal: 'stand (estar de pie) + up',
    register: 'neutro',
    pattern: 'stand up (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'sit down', mean: 'sentarse' },
      { verb: 'get up', mean: 'levantarse (de la cama o de un sitio)' },
      { verb: 'stand out', mean: 'destacar' }
    ],
    examples: [
      { en: 'Sebastian stood up and walked toward her.', es: 'Sebastián se puso de pie y caminó hacia ella.' },
      { en: 'Everyone stood up when she walked in.', es: 'Todos se pusieron de pie cuando ella entró.' },
      { en: 'Please stand up for the national anthem.', es: 'Por favor, pónganse de pie para el himno nacional.' }
    ]
  },

  'walk through': {
    literal:
      'walk (caminar) + through — en sentido figurado significa "explicar paso a paso"; tomado literalmente sería "caminar atravesando algo", que es el malentendido que dispara la escena.',
    register: 'neutro, muy común en reuniones y presentaciones',
    pattern: 'walk someone through something (transitivo, con objeto de persona)',
    separableNote:
      'Separable con el objeto de persona en medio: walk us through it, walk me through this — casi siempre así, con el pronombre entre walk y through.',
    related: [
      { verb: 'talk through', mean: 'hablar paso a paso sobre algo, sin necesariamente mostrarlo' },
      { verb: 'go through', mean: 'repasar algo (documentos, una lista)' },
      { verb: 'run through', mean: 'repasar rápido, a menudo antes de una presentación' }
    ],
    examples: [
      { en: 'Can you walk us through your numbers?', es: '¿Puedes explicarnos tus números paso a paso?' },
      { en: "I'll walk you through the process.", es: 'Te explicaré el proceso paso a paso.' },
      { en: 'She walked the team through the new software.', es: 'Le explicó al equipo el nuevo software paso a paso.' }
    ]
  },

  'come out of': {
    literal: 'come (venir) + out + of',
    register: 'neutro',
    pattern: 'come out of something (transitivo, tres partes)',
    separableNote:
      'Inseparable — igual que run out of, las tres partes van siempre juntas: come out of the room, nunca come the room out of.',
    related: [
      { verb: 'come out', mean: 'salir / aparecer, sin decir de dónde' },
      { verb: 'get out of', mean: 'salir de un sitio, a veces con más urgencia' },
      { verb: 'walk out of', mean: 'salir caminando de un sitio' }
    ],
    examples: [
      { en: 'You just came out of the presentation.', es: 'Acabas de salir de la presentación.' },
      { en: 'She came out of the meeting looking happy.', es: 'Salió de la reunión con cara de felicidad.' },
      { en: 'He came out of surgery this morning.', es: 'Salió de cirugía esta mañana.' }
    ]
  },

  'sit down': {
    literal: 'sit (sentarse) + down',
    register: 'neutro, de uso diario',
    pattern: 'sit down (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'stand up', mean: 'ponerse de pie' },
      { verb: 'sit back', mean: 'recostarse, relajarse' },
      { verb: 'have a seat', mean: 'tomar asiento, más formal' }
    ],
    examples: [
      { en: 'I need to sit down, said Miguel.', es: 'Necesito sentarme, dijo Miguel.' },
      { en: 'Please sit down and relax.', es: 'Por favor, siéntate y relájate.' },
      { en: 'She sat down next to me.', es: 'Se sentó a mi lado.' }
    ]
  },

  'put up with': {
    literal: 'put (poner) + up + with',
    register: 'neutro, muy común en habla cotidiana',
    pattern: 'put up with something/someone (transitivo, tres partes)',
    separableNote: 'Inseparable — las tres partes van siempre juntas: put up with it, nunca put it up with.',
    related: [
      { verb: 'deal with', mean: 'ocuparse o lidiar con algo, sin la idea de tolerar' },
      { verb: 'get used to', mean: 'acostumbrarse a algo' },
      { verb: 'stand', mean: 'aguantar, más corto e informal (I can\'t stand it)' }
    ],
    examples: [
      { en: "I couldn't put up with it anymore.", es: 'Ya no podía aguantarlo más.' },
      { en: 'She won\'t put up with being ignored.', es: 'Ella no va a tolerar que la ignoren.' },
      { en: 'How do you put up with all that noise?', es: '¿Cómo aguantas todo ese ruido?' }
    ]
  },

  'give up on': {
    literal: 'give (dar) + up + on',
    register: 'neutro',
    pattern: 'give up on something/someone (transitivo)',
    separableNote: 'Inseparable: el objeto va siempre después de on — give up on it, nunca give it up on.',
    related: [
      { verb: 'give up', mean: 'rendirse, sin especificar en qué (más general)' },
      { verb: 'let go of', mean: 'soltar, dejar ir algo o a alguien' },
      { verb: 'move on from', mean: 'seguir adelante, dejar algo atrás' }
    ],
    examples: [
      { en: 'I gave up on it.', es: 'Me rendí con eso.' },
      { en: "Don't give up on your dreams.", es: 'No te rindas con tus sueños.' },
      { en: 'They gave up on finding the dog.', es: 'Se rindieron con encontrar al perro.' }
    ]
  },

  'show up': {
    literal: 'show (mostrar) + up',
    register: 'neutro',
    pattern: 'show up (intransitivo, a veces + at/for)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'turn up', mean: 'aparecer, casi lo mismo que show up' },
      { verb: 'pop up', mean: 'aparecer de repente' },
      { verb: 'appear', mean: 'aparecer, más formal' }
    ],
    examples: [
      { en: 'Every time I get a haircut, more grey shows up.', es: 'Cada vez que me corto el pelo, salen más canas.' },
      { en: 'He didn\'t show up to the meeting.', es: 'No apareció en la reunión.' },
      { en: 'She showed up an hour late.', es: 'Apareció una hora tarde.' }
    ]
  },

  'grow out': {
    literal: 'grow (crecer) + out',
    register: 'neutro',
    pattern: 'grow something out (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: grow it out, nunca grow out it.',
    related: [
      { verb: 'grow up', mean: 'crecer, hacerse mayor (personas)' },
      { verb: 'let grow', mean: 'dejar crecer, más general' },
      { verb: 'grow back', mean: 'volver a crecer' }
    ],
    examples: [
      { en: 'I should grow it out and go full silver.', es: 'Debería dejármelo largo y ponerme todo plateado.' },
      { en: "It's an awkward stage while you grow your hair out.", es: 'Es una etapa incómoda mientras te dejas crecer el pelo.' },
      { en: 'He grew out his beard for the winter.', es: 'Se dejó crecer la barba para el invierno.' }
    ]
  },

  'pull off': {
    literal: 'pull (tirar/jalar) + off',
    register: 'neutro, algo informal',
    pattern: 'pull something off (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: pull it off, nunca pull off it.',
    related: [
      { verb: 'manage', mean: 'lograr algo, más formal y general' },
      { verb: 'get away with', mean: 'salirse con la suya, sin consecuencias' },
      { verb: 'nail it', mean: 'clavarlo, hacerlo perfecto, muy informal' }
    ],
    examples: [
      { en: "You'd pull it off.", es: 'Te quedaría genial.' },
      { en: 'She pulled off a difficult presentation.', es: 'Bordó una presentación difícil.' },
      { en: "I don't think I can pull this off.", es: 'No creo que pueda lograr esto.' }
    ]
  },

  'walk in': {
    literal: 'walk (caminar) + in',
    register: 'neutro',
    pattern: 'walk in (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'come in', mean: 'entrar (más general, no necesariamente caminando)' },
      { verb: 'walk into', mean: 'entrar en un lugar concreto, con destino especificado' },
      { verb: 'barge in', mean: 'entrar de golpe, sin permiso' }
    ],
    examples: [
      { en: '"Your kitchen is a disaster," said Nora, walking in.', es: '"Tu cocina es un desastre", dijo Nora, entrando.' },
      { en: 'He walked in without knocking.', es: 'Entró sin tocar la puerta.' },
      { en: 'She walked in and sat down.', es: 'Entró y se sentó.' }
    ]
  },

  'sleep in': {
    literal: 'sleep (dormir) + in',
    register: 'neutro',
    pattern: 'sleep in (intransitivo)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'oversleep', mean: 'quedarse dormido por error, sin querer' },
      { verb: 'lie in', mean: 'quedarse en la cama despierto, sin dormir necesariamente (inglés británico)' },
      { verb: 'wake up', mean: 'despertarse, lo opuesto en cierto sentido' }
    ],
    examples: [
      { en: 'I slept in this morning and didn\'t clean up.', es: 'Me quedé dormido esta mañana y no limpié.' },
      { en: 'We slept in on Saturday.', es: 'Dormimos hasta tarde el sábado.' },
      { en: "Don't sleep in, we have plans early.", es: 'No te duermas hasta tarde, tenemos planes temprano.' }
    ]
  },

  'clean up': {
    literal: 'clean (limpiar) + up',
    register: 'neutro',
    pattern: 'clean up (something) (transitivo o intransitivo)',
    separableNote: 'Separable: clean up the kitchen o clean the kitchen up valen los dos; con pronombres siempre separado: clean it up.',
    related: [
      { verb: 'tidy up', mean: 'ordenar, más sobre organizar que sobre limpiar' },
      { verb: 'wash up', mean: 'lavar los platos (inglés británico)' },
      { verb: 'pick up', mean: 'recoger cosas del suelo' }
    ],
    examples: [
      { en: "I slept in and didn't clean up.", es: 'Me quedé dormido y no limpié.' },
      { en: "There's always something to fix or clean up.", es: 'Siempre hay algo que arreglar o limpiar.' },
      { en: 'Can you clean up your room before dinner?', es: '¿Puedes limpiar tu cuarto antes de cenar?' }
    ]
  },

  'deal with': {
    literal: 'deal (repartir/tratar) + with',
    register: 'neutro',
    pattern: 'deal with something/someone (transitivo, con preposición)',
    separableNote: 'No separable: el objeto va siempre después de with — deal with it, nunca deal it with.',
    related: [
      { verb: 'handle', mean: 'manejar o gestionar algo, más formal' },
      { verb: 'cope with', mean: 'sobrellevar algo difícil, con más carga emocional' },
      { verb: 'sort out', mean: 'resolver o organizar algo' }
    ],
    examples: [
      { en: 'Then I deal with the mess.', es: 'Luego me ocupo del desastre.' },
      { en: "I'll deal with it tomorrow.", es: 'Me ocuparé de eso mañana.' },
      { en: 'She deals with customer complaints all day.', es: 'Se ocupa de quejas de clientes todo el día.' }
    ]
  },

  'pile up': {
    literal: 'pile (apilar) + up',
    register: 'neutro',
    pattern: 'pile up (intransitivo) / pile something up (transitivo, separable)',
    separableNote: 'En su forma intransitiva no hay objeto que separar: the washing up piles up, no pila nada.',
    related: [
      { verb: 'build up', mean: 'acumularse, más general (no solo objetos físicos)' },
      { verb: 'stack up', mean: 'apilarse en columna' },
      { verb: 'add up', mean: 'sumar, acumularse en cantidad' }
    ],
    examples: [
      { en: 'The washing up piles up.', es: 'Los platos sucios se acumulan.' },
      { en: 'Emails pile up when I\'m on vacation.', es: 'Los correos se acumulan cuando estoy de vacaciones.' },
      { en: 'Don\'t let the laundry pile up.', es: 'No dejes que la ropa sucia se acumule.' }
    ]
  },

  'tidy up': {
    literal: 'tidy (ordenar) + up',
    register: 'neutro, inglés británico sobre todo',
    pattern: 'tidy up (something) (transitivo o intransitivo)',
    separableNote: 'Separable: tidy up the room o tidy the room up valen los dos; con pronombres siempre separado: tidy it up.',
    related: [
      { verb: 'clean up', mean: 'limpiar, más sobre suciedad que sobre orden' },
      { verb: 'put away', mean: 'guardar algo en su lugar' },
      { verb: 'sort out', mean: 'organizar u ordenar algo con más detalle' }
    ],
    examples: [
      { en: "I'll help you tidy up.", es: 'Te ayudo a ordenar.' },
      { en: 'Can you tidy up your desk?', es: '¿Puedes ordenar tu escritorio?' },
      { en: 'We tidied up the living room before guests arrived.', es: 'Ordenamos la sala antes de que llegaran los invitados.' }
    ]
  },

  'bring up': {
    literal: 'bring (traer) + up',
    register: 'neutro',
    pattern: 'bring something up (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: bring it up, nunca bring up it.',
    related: [
      { verb: 'mention', mean: 'mencionar, más neutro y formal' },
      { verb: 'raise', mean: 'plantear un tema, más formal (raise an issue)' },
      { verb: 'bring up', mean: 'también significa criar a un hijo, sentido distinto' }
    ],
    examples: [
      { en: 'A friend brought up an old trip.', es: 'Un amigo sacó el tema de un viaje antiguo.' },
      { en: 'Please don\'t bring that up again.', es: 'Por favor no vuelvas a sacar ese tema.' },
      { en: 'She brought up an interesting point.', es: 'Planteó un punto interesante.' }
    ]
  },

  'work out': {
    literal: 'work (trabajar) + out',
    register: 'neutro',
    pattern: 'work something out (transitivo, separable) / work out (intransitivo, hacer ejercicio)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: work it out, nunca work out it.',
    related: [
      { verb: 'figure out', mean: 'entender o resolver algo, casi sinónimo' },
      { verb: 'solve', mean: 'resolver, más formal, sobre todo problemas matemáticos' },
      { verb: 'work out', mean: 'también significa hacer ejercicio, sentido distinto' }
    ],
    examples: [
      { en: 'I work things out slowly.', es: 'Resuelvo las cosas despacio.' },
      { en: "I can't work out how this works.", es: 'No logro entender cómo funciona esto.' },
      { en: 'They worked out a solution together.', es: 'Resolvieron una solución juntos.' }
    ]
  },

  'get together': {
    literal: 'get (llegar a estar) + together',
    register: 'neutro',
    pattern: 'get together (intransitivo, a veces + with)',
    separableNote: 'Intransitivo: no lleva objeto, no hay nada que separar.',
    related: [
      { verb: 'meet up', mean: 'quedar con alguien, más informal' },
      { verb: 'catch up', mean: 'ponerse al día con alguien' },
      { verb: 'hang out', mean: 'pasar el rato juntos, muy informal' }
    ],
    examples: [
      { en: 'We only get together at Christmas.', es: 'Solo nos reunimos en Navidad.' },
      { en: 'Let\'s get together sometime soon.', es: 'Reunámonos pronto.' },
      { en: 'The whole family gets together every summer.', es: 'Toda la familia se reúne cada verano.' }
    ]
  },

  'look into': {
    literal: 'look (mirar) + into',
    register: 'neutro',
    pattern: 'look into something (transitivo, con preposición)',
    separableNote: 'No separable: el objeto va siempre después de into — look into it, nunca look it into.',
    related: [
      { verb: 'check out', mean: 'echar un vistazo, más informal' },
      { verb: 'investigate', mean: 'investigar, más formal' },
      { verb: 'find out about', mean: 'averiguar sobre algo' }
    ],
    examples: [
      { en: 'The team is looking into the issue.', es: 'El equipo está investigando el problema.' },
      { en: 'Have you ever looked into your family tree?', es: '¿Alguna vez has investigado tu árbol genealógico?' },
      { en: "I'll look into it and let you know.", es: 'Lo investigaré y te aviso.' }
    ]
  },

  'look up': {
    literal: 'look (mirar) + up',
    register: 'neutro',
    pattern: 'look something up (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: look it up, nunca look up it.',
    related: [
      { verb: 'look into', mean: 'investigar algo más a fondo' },
      { verb: 'search for', mean: 'buscar, más general' },
      { verb: 'check', mean: 'comprobar, más corto' }
    ],
    examples: [
      { en: "I'd love to look it up someday.", es: 'Me encantaría buscarlo algún día.' },
      { en: "I don't know that word, let me look it up.", es: 'No conozco esa palabra, déjame buscarla.' },
      { en: 'You can look up the address online.', es: 'Puedes buscar la dirección en línea.' }
    ]
  },

  'track down': {
    literal: 'track (rastrear) + down',
    register: 'neutro, algo formal',
    pattern: 'track someone/something down (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: track them down, nunca track down them.',
    related: [
      { verb: 'find', mean: 'encontrar, más simple y general' },
      { verb: 'hunt down', mean: 'perseguir hasta encontrar, más intenso' },
      { verb: 'locate', mean: 'localizar, más formal' }
    ],
    examples: [
      { en: "I'd like to track down some relatives over there.", es: 'Me gustaría localizar a algunos parientes allá.' },
      { en: 'It took years to track down the missing documents.', es: 'Tomó años localizar los documentos perdidos.' },
      { en: 'She tracked down an old friend on social media.', es: 'Localizó a un viejo amigo en redes sociales.' }
    ]
  },

  'sort out': {
    literal: 'sort (clasificar) + out',
    register: 'neutro, muy común en el trabajo',
    pattern: 'sort something out (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: sort it out, nunca sort out it.',
    related: [
      { verb: 'work out', mean: 'resolver o entender algo, con más proceso de pensar' },
      { verb: 'figure out', mean: 'entender o resolver algo, casi sinónimo' },
      { verb: 'straighten out', mean: 'aclarar un malentendido' }
    ],
    examples: [
      { en: 'We need to sort out this problem by Friday.', es: 'Necesitamos resolver este problema para el viernes.' },
      { en: "I'll sort it out this afternoon.", es: 'Lo resolveré esta tarde.' },
      { en: 'Can you help me sort out my schedule?', es: '¿Puedes ayudarme a organizar mi horario?' }
    ]
  },

  'take over': {
    literal: 'take (tomar) + over',
    register: 'neutro, muy común en el trabajo',
    pattern: 'take over (something) (transitivo o intransitivo)',
    separableNote: 'Separable: take over the task o take the task over valen los dos; con pronombres siempre separado: take it over.',
    related: [
      { verb: 'step in', mean: 'intervenir, más puntual, no necesariamente hacerse cargo del todo' },
      { verb: 'take charge', mean: 'asumir el control o la responsabilidad, más formal' },
      { verb: 'fill in for', mean: 'sustituir a alguien temporalmente' }
    ],
    examples: [
      { en: "Can you take over this task while I'm away?", es: '¿Puedes hacerte cargo de esta tarea mientras estoy fuera?' },
      { en: 'She took over the company after her father retired.', es: 'Se hizo cargo de la empresa cuando su padre se jubiló.' },
      { en: "I'll take over from here.", es: 'Yo me hago cargo desde aquí.' }
    ]
  },

  'run into': {
    literal: 'run (correr) + into',
    register: 'neutro',
    pattern: 'run into something/someone (transitivo, con preposición)',
    separableNote: 'No separable: el objeto va siempre después de into — run into a problem, nunca run a problem into.',
    related: [
      { verb: 'come across', mean: 'encontrarse con algo por casualidad, sin movimiento implícito' },
      { verb: 'bump into', mean: 'toparse con alguien por casualidad, más informal' },
      { verb: 'walk into', mean: 'entrar en un lugar caminando, sentido más literal' }
    ],
    examples: [
      { en: 'We ran into some unexpected problems.', es: 'Nos topamos con algunos problemas inesperados.' },
      { en: 'I ran into an old friend at the airport.', es: 'Me topé con un viejo amigo en el aeropuerto.' },
      { en: 'The project ran into delays last month.', es: 'El proyecto se topó con retrasos el mes pasado.' }
    ]
  },

  'go over': {
    literal: 'go (ir) + over',
    register: 'neutro',
    pattern: 'go over something (transitivo, con preposición)',
    separableNote: 'No separable: el objeto va siempre después de over — go over the plan, nunca go the plan over.',
    related: [
      { verb: 'run through', mean: 'repasar rápido, con más prisa' },
      { verb: 'review', mean: 'revisar, más formal' },
      { verb: 'look over', mean: 'echar un vistazo, más rápido y superficial' }
    ],
    examples: [
      { en: "Let's go over the plan one more time.", es: 'Repasemos el plan una vez más.' },
      { en: 'The teacher went over the answers with the class.', es: 'El profesor repasó las respuestas con la clase.' },
      { en: 'Can we go over the numbers before the meeting?', es: '¿Podemos repasar los números antes de la reunión?' }
    ]
  },

  'turn down': {
    literal: 'turn (girar/voltear) + down',
    register: 'neutro',
    pattern: 'turn something down (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: turn it down, nunca turn down it.',
    related: [
      { verb: 'reject', mean: 'rechazar, más formal' },
      { verb: 'decline', mean: 'declinar, muy formal, típico en invitaciones' },
      { verb: 'turn down', mean: 'también significa bajar el volumen, sentido distinto' }
    ],
    examples: [
      { en: 'The client turned down our proposal.', es: 'El cliente rechazó nuestra propuesta.' },
      { en: 'She turned down the job offer.', es: 'Ella rechazó la oferta de trabajo.' },
      { en: "I don't want to turn down this opportunity.", es: 'No quiero rechazar esta oportunidad.' }
    ]
  },

  'put off': {
    literal: 'put (poner) + off',
    register: 'neutro',
    pattern: 'put something off (transitivo, separable)',
    separableNote: 'Separable, y con pronombres SIEMPRE separado: put it off, nunca put off it.',
    related: [
      { verb: 'postpone', mean: 'posponer, más formal' },
      { verb: 'delay', mean: 'retrasar, más formal, con más carga de tardanza' },
      { verb: 'hold off on', mean: 'esperar antes de hacer algo' }
    ],
    examples: [
      { en: "We're putting off the launch until next month.", es: 'Estamos posponiendo el lanzamiento hasta el próximo mes.' },
      { en: "Don't put off until tomorrow what you can do today.", es: 'No dejes para mañana lo que puedas hacer hoy.' },
      { en: 'They put off the decision for another week.', es: 'Pospusieron la decisión otra semana.' }
    ]
  }
};

/**
 * Phrasal verbs de NIVEL, no de relato — material de referencia suelto (p.
 * ej. "Phrasal verbs de trabajo" en B2) que no viene narrado dentro de una
 * historia. Misma forma de clave que phrases/connectors: IDIOMA/NIVEL. Cada
 * `verb` tiene que existir en PHRASAL_DETAIL de arriba.
 */
const LEVEL_IDIOMS = {
  'EN/B2': [
    { verb: 'sort out', mean: 'resolver' },
    { verb: 'look into', mean: 'investigar' },
    { verb: 'take over', mean: 'hacerse cargo' },
    { verb: 'run into', mean: 'toparse con' },
    { verb: 'go over', mean: 'repasar' },
    { verb: 'turn down', mean: 'rechazar' },
    { verb: 'put off', mean: 'posponer' },
    { verb: 'follow up', mean: 'dar seguimiento' }
  ]
};

const levelKey = (lang, level) => `${lang}/${level}`;

/** phrasal verbs de este idioma y nivel (array vacío si no existe) */
export const idiomsOf = (lang, level) => LEVEL_IDIOMS[levelKey(lang, level)] || [];
