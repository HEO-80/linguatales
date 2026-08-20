/**
 * src/data/realEnglish.en.js
 *
 * Contenido semilla de "Inglés real" — diálogos auténticos con argot y
 * lenguaje coloquial británico, C1-C2. Independiente de las historias
 * graduadas (stories.<lang>.js): no entra en la escalera A1-C2 ni en su
 * listado. Ver linguatales-spec.md / plan de arquitectura para el porqué.
 *
 * Texto y traducción reproducidos tal como los proporcionó el usuario,
 * incluida su propia autocensura (F*, b*llsh*t, etc.) — no se ha censurado
 * más ni destapado nada.
 */

const DIALOGUE_ID = 're-en-01';

/** Parte 1 — glosario. `kind` clasifica cada entrada para que la sección
 * "Phrasal Verbs" del lector pueda filtrar solo los phrasal verbs de aquí,
 * sin mantener una segunda lista separada. */
const GLOSSARY = [
  { term: 'Never have I ever...', translation: 'Yo nunca, nunca... (el famoso juego de beber)', kind: 'idiom' },
  { term: 'To own up', translation: 'Confesar / asumir la culpa', kind: 'phrasal_verb' },
  { term: 'To check out (of a relationship)', translation: 'Desconectar emocionalmente', kind: 'phrasal_verb' },
  { term: 'To go out on a mad one', translation: 'Salir de fiesta loca / desmadrarse', kind: 'idiom' },
  { term: 'Bird', translation: 'Chica / piba / tía', kind: 'slang' },
  { term: 'On the slide', translation: 'Yendo a pique / en declive', kind: 'idiom' },
  { term: 'Two-faced', translation: 'Falso / hipócrita', kind: 'idiom' },
  { term: 'To suck a fat one', translation: 'Que te den / vete a la mierda', kind: 'idiom' },
  { term: 'Second choice', translation: 'Segundo plato / segunda opción', kind: 'slang' },
  { term: 'Tit for tat', translation: 'Ojo por ojo / el que la hace la paga', kind: 'idiom' },
  { term: "I'm not being funny", translation: 'Sin ánimo de ofender / hablando en serio', kind: 'idiom' }
];

/** Parte 3+4 — transcript alineado inglés/español, un turno de habla por fila. */
const TRANSCRIPT = [
  { speaker: 'Speaker 1', text: 'Never have I ever cheated on a partner.', es: 'Yo nunca, nunca he engañado a una pareja.' },
  {
    speaker: 'Speaker 2',
    text: "It's going to be the worst one for me. Own up right now. Not new, she says yeah, cheating on is pretty brutal.",
    es: 'Esta va a ser la peor para mí. Confiésalo ahora mismo. Nada nuevo, ella dice que sí, poner los cuernos es bastante brutal.'
  },
  {
    speaker: 'Sean',
    text: "So, it was my ex, and it was about two years into the relationship. I sort of checked out, and then yeah, just went out on a mad one on a night out and fed another bird. Well yeah, you learn from your mistakes and haven't done it since.",
    es: 'Bueno, fue con mi ex, llevábamos unos dos años de relación. Como que me desconecté emocionalmente y luego, sí, simplemente me desmadré una noche de fiesta y me tiré a otra tía. Pero bueno, aprendes de tus errores y no lo he vuelto a hacer desde entonces.'
  },
  { speaker: 'Speaker 3', text: 'Well done, Sean. Well done, mate.', es: 'Bien hecho, Sean. Bien hecho, tío.' },
  {
    speaker: 'Speaker 4 (Sarcastic)',
    text: 'Cheated and got a fing reward. Brilliant. Boy cheated and got a round of applause.',
    es: 'Puso los cuernos y recibió una p*ta recompensa. Brillante. El chico engañó y se llevó un aplauso.'
  },
  {
    speaker: 'Speaker 5',
    text: 'Yeah, so mine... when I was a lot younger, when I was 18 and I went to University, and it was on the slide anyway, and I cheated.',
    es: 'Sí, bueno, la mía... cuando era mucho más joven, cuando tenía 18 y fui a la universidad, la cosa (la relación) ya iba a pique de todos modos, y la engañé.'
  },
  {
    speaker: 'Speaker 6 (Joking)',
    text: "Did you do it in a slide? Like, 'Wait, come here, slide down a bit...'",
    es: "¿Lo hiciste en un tobogán? En plan: 'Espera, ven aquí, deslízate un poco...'."
  },
  {
    speaker: 'Speaker 7',
    text: 'Never have I ever slept with someone 20 years older than myself. Kieran, did you?',
    es: 'Yo nunca, nunca me he acostado con alguien 20 años mayor que yo. Kieran, ¿lo hiciste?'
  },
  { speaker: 'Kieran', text: 'Weekend away with the boys. I was 18, she was 48.', es: 'Fin de semana fuera con los chicos. Yo tenía 18, ella 48.' },
  {
    speaker: 'Crowd',
    text: 'Wow! Are you okay? What do you even have to talk about? That\'s crazy!',
    es: '¡Guau! ¿Estás bien? ¿De qué demonios hablabais siquiera? ¡Qué locura!'
  },
  {
    speaker: 'Kieran',
    text: "I think it was funny. It's all a laugh, it's all a game. If something funny has happened, yeah, laugh. But grow up and don't make it into a bigger deal than it already is. Respect, it's that simple.",
    es: 'Creo que fue divertido. Es todo unas risas, es un juego. Si ha pasado algo divertido, sí, ríete. Pero madurad y no hagáis de esto un problema más grande de lo que es. Respeto, es así de simple.'
  },
  {
    speaker: 'Speaker 8',
    text: 'Never have I ever been two-faced about someone in this Villa.',
    es: 'Yo nunca, nunca he sido falso (hipócrita) con nadie en esta Villa.'
  },
  {
    speaker: 'Ronnie',
    text: "Has everyone been honest? I'll say it to everyone's face. You can see where I stand, you know exactly who I am. I've not said anything bad to the face and it's always been honest advice. If you don't like it, go suck a fat one, you know what I mean?",
    es: '¿Ha sido todo el mundo honesto? Yo se lo diré a todo el mundo a la cara. Podéis ver de qué lado estoy, sabéis exactamente quién soy. No he dicho nada malo a la cara y siempre han sido consejos sinceros. Si no te gusta, que te den, ¿sabes lo que quiero decir?'
  },
  {
    speaker: 'Harriett',
    text: "I have come out of the triangle and now I'm with Harriett, so what exactly Ronnie? No comment, thank you.",
    es: 'He salido del triángulo amoroso y ahora estoy con Harriett, así que ¿qué exactamente, Ronnie? Sin comentarios, gracias.'
  },
  { speaker: 'Speaker 9', text: 'Okay, explain it, babes.', es: 'Vale, explícalo, nena.' },
  {
    speaker: 'Harriett',
    text: "I've been two-faced because I had an opportunity really to say it. For instance, people will make comments and then straight after be all nice to me. Like, 'Oh, you need to be careful with him,' and then, 'Oh, but you're actually really good, Kieran, you treat her so well.' So cut the bullsh*t.",
    es: "He sido falsa porque tuve la oportunidad de decirlo en realidad. Por ejemplo, la gente hace comentarios y justo después son súper amables conmigo. En plan: 'Oh, tienes que tener cuidado con él', y luego, 'Oh, pero en realidad eres muy bueno, Kieran, la tratas súper bien'. Así que déjate de estupideces."
  },
  {
    speaker: 'Kieran',
    text: "Elaborate. I just explained it. Wait, what have I said? You made the comment that apparently Nicole needs to be careful with me, and then the day after going, 'Oh, you're so good.'",
    es: "Elabora. Lo acabo de explicar. Espera, ¿qué he dicho yo? Hiciste el comentario de que aparentemente Nicole tiene que tener cuidado conmigo, y al día siguiente vas y dices: 'Oh, eres tan bueno'."
  },
  {
    speaker: 'Speaker 10',
    text: "When you're making comments about other Islanders and I'm having a conversation with my friend, I'm going to say that. Honestly, you're so mature, it's actually embarrassing. All right, cool. Next song.",
    es: 'Cuando haces comentarios sobre otros isleños y yo estoy teniendo una conversación con mi amiga, voy a decir eso. Sinceramente, eres tan maduro... es en realidad vergonzoso. Vale, genial. Siguiente canción.'
  },
  {
    speaker: 'Kieran',
    text: "Hey, come on man, I haven't been second choice like three times, innit? So that is...",
    es: 'Oye, venga ya, tío, yo no he sido el segundo plato como tres veces, ¿sabes? Así que eso es...'
  },
  {
    speaker: 'Speaker 11',
    text: 'Did you hear what you just said? Say that again. What did he say? Go on, say it.',
    es: '¿Has oído lo que acabas de decir? Dilo otra vez. ¿Qué ha dicho? Venga, dilo.'
  },
  {
    speaker: 'Kieran',
    text: "I said, you're the one that's been second choice like three times, innit? So she's first choice now, brother. Yeah, she is.",
    es: 'He dicho que tú eres el que ha sido el segundo plato como tres veces, ¿verdad? Así que ella es tu primera opción ahora, hermano. Sí que lo es.'
  },
  {
    speaker: 'Speaker 11',
    text: 'Honestly, f*** you, Kieran. Generally, you wish.',
    es: 'Sinceramente, que te j*dan, Kieran. Ya quisieras.'
  },
  {
    speaker: 'Speaker 12',
    text: "The thing is, it's tit for tat. People give it and people take it. So it is what it is. You give it, you got to be able to take it.",
    es: 'El caso es que es ojo por ojo. La gente ataca y la gente recibe. Así que es lo que hay. Si atacas, tienes que ser capaz de aguantar el golpe.'
  },
  {
    speaker: 'Speaker 13',
    text: "People say things that aren't very nice, babe. No, 'cause I'm not being funny, she's crying. Let's go inside.",
    es: 'La gente dice cosas que no son muy agradables, nena. No, hablando en serio, está llorando. Vamos adentro.'
  }
];

/** Parte 2 — expresiones explicadas. `lineIndex` apunta a la fila del
 * transcript de la que viene la cita, para poder resaltarla al leer la
 * explicación (mismo mecanismo de "frase activa" que StoryReader). */
const EXPRESSIONS = [
  {
    quote: 'Never have I ever cheated on a partner.',
    translation: 'Yo nunca, nunca he engañado a una pareja.',
    explanation: '"Cheat on someone" es la forma estándar de decir "poner los cuernos".',
    lineIndex: 0
  },
  {
    quote: 'I sort of checked out and then yeah, just went out on a mad one and a night out and F* another bird.',
    translation: 'Como que me desconecté emocionalmente y luego, sí, simplemente me desmadré una noche de fiesta y me tiré a otra chica.',
    explanation:
      'Puro slang británico. "Checked out" es cuando tu cuerpo está en la relación pero tu mente ya se ha ido. "Went out on a mad one" es salir a darlo todo en la fiesta. "Bird" en UK es una forma (a veces despectiva) de llamar a una mujer.',
    lineIndex: 2
  },
  {
    quote: 'Cheated and got a fing reward, brilliant. Boy cheated and got a round of applause.',
    translation: 'Puso los cuernos y recibió una p*ta recompensa, brillante. El chico engañó y recibió un aplauso.',
    explanation:
      'Aquí alguien se está burlando de que el chico que confesó haber sido infiel está siendo felicitado ("Well done, Sean") en lugar de criticado.',
    lineIndex: 4
  },
  {
    quote: 'It were on like the slide anyway...',
    translation: 'De todos modos, la cosa (la relación) ya iba a pique...',
    explanation:
      'En algunos dialectos del norte de Inglaterra usan "were" en lugar de "was" para "It". "On the slide" es una metáfora visual: ir cuesta abajo, deteriorarse. Luego hacen una broma literal con un tobogán (slide).',
    lineIndex: 5
  },
  {
    quote: 'Never have I ever been Two-Faced about someone in this Villa.',
    translation: 'Yo nunca nunca he sido hipócrita (falso) con alguien en esta Villa.',
    explanation: '"Two-faced" es decirle a alguien que tiene dos caras; amable por delante y criticando por la espalda.',
    lineIndex: 11
  },
  {
    quote: "I'll say it to everyone's face... you can see where I stand, you know exactly who I am.",
    translation: 'Se lo diré a la cara a todos... podéis ver cuál es mi postura, sabéis exactamente quién soy.',
    explanation: '"Where I stand" (dónde estoy parado) significa "cuál es mi posición/opinión" sobre algo.',
    lineIndex: 12
  },
  {
    quote: "If you don't like it, go suck a fat one, you know what I mean?",
    translation: 'Si no te gusta, que te den (vete a la mierda), ¿sabes lo que quiero decir?',
    explanation: 'Expresión vulgar y muy agresiva para descartar la opinión de los demás.',
    lineIndex: 12
  },
  {
    quote: "Cut the bullsh*t, elaborate. I just explained it.",
    translation: 'Déjate de estupideces (corta el rollo), elabora. Lo acabo de explicar.',
    explanation: '"Cut the bullsh*t" o "Cut the crap" se usa para pedirle a alguien que deje de mentir o de dar rodeos y vaya al grano.',
    lineIndex: 15
  },
  {
    quote: "I haven't been second choice like three times, innit? So that is...",
    translation: 'Yo no he sido el segundo plato como tres veces, ¿sabes? Así que eso es...',
    explanation:
      '"Second choice" duele en el ego (ser la segunda opción). "Innit" es la contracción hiperbritánica de "isn\'t it?", usada como muletilla (¿verdad? / ¿sabes?).',
    lineIndex: 18
  },
  {
    quote: "It's tit for tat. People give it and people take it. So it is what it is.",
    translation: 'Es ojo por ojo (toma y daca). La gente lo da (ataca) y la gente lo recibe. Así que es lo que es.',
    explanation:
      '"Tit for tat" es un equivalente a pagar con la misma moneda. "It is what it is" es la frase reina para decir "las cosas son como son y no se pueden cambiar".',
    lineIndex: 22
  },
  {
    quote: "I'm not being funny, she's crying. Let's go inside.",
    translation: 'Hablando en serio (sin ánimo de ofender), ella está llorando. Vamos adentro.',
    explanation:
      'A pesar de que dice "no estoy siendo divertido", "I\'m not being funny" en Reino Unido significa "voy a decir algo muy en serio" o "no quiero sonar borde, pero...".',
    lineIndex: 23
  }
];

const DIALOGUE = {
  id: DIALOGUE_ID,
  lang: 'EN',
  title: 'The Villa Drama',
  levelRange: 'C1-C2',
  mature: true,
  contentWarning:
    'Diálogo real con argot británico, tacos y lenguaje coloquial adulto (parcialmente autocensurado: F*, b*llsh*t...). Pensado para C1-C2.',
  source: 'Reality show británico (subtítulos), transcripción y explicación propias',
  glossary: GLOSSARY,
  expressions: EXPRESSIONS,
  transcript: TRANSCRIPT
};

export const DIALOGUES = [DIALOGUE];
