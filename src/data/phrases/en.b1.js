/**
 * LinguaTales — Frases hechas · Inglés B1
 * src/data/phrases/en.b1.js
 *
 * Primera mitad de "NIVEL 2: Frases Situacionales" del curso (bloques 01-05
 * del antiguo en.a2.js) — la segunda mitad vive en en.b2.js. Mismo reparto
 * de las 300+ frases a lo largo de los seis niveles de la app.
 *
 * `ej` y `tip` van verbatim del material del curso cuando el curso los
 * trae; donde no daba `tip`, se ha escrito uno corto en la misma voz. `re`
 * (la contestación) no viene del curso — es invención propia en todos los
 * bloques, coherente con el registro de cada frase.
 *
 * Nota: todavía no hay ningún relato B1 en el catálogo (src/data/stories),
 * así que este nivel no es alcanzable aún desde ninguna ruta de la app —
 * misma situación que los conectores de B1/B2/C1 añadidos en una sesión
 * anterior. Los datos están listos para cuando exista esa historia.
 */
export const EN_B1_PHRASES = [
  {
    num: '01',
    title: 'De viaje en taxi',
    items: [
      { en: 'I need medicine.', es: 'Necesito medicina.', ej: 'I need medicine for my headache.', tip: 'Headache (dolor de cabeza) es de las molestias más comunes al viajar.', re: ["Let's find a pharmacy.", 'Busquemos una farmacia.'] },
      { en: "I'm swamped.", es: 'Estoy súper ocupado.', ej: "Can't talk now. I'm swamped with work.", tip: 'Es como decir "estoy a tope" o "me estoy ahogando en trabajo". Suena mucho más nativo que busy.', re: ['No worries, talk later.', 'No pasa nada, hablamos luego.'] },
      { en: 'Where are the taxis?', es: '¿Dónde están los taxis?', ej: 'Where are the taxis? I need to get to the airport.', tip: 'En aeropuertos suele haber una zona señalizada como taxi stand.', re: ['Right outside the entrance.', 'Justo fuera de la entrada.'] },
      { en: 'A taxi, please.', es: 'Un taxi, por favor.', ej: 'A taxi, please, to downtown.', tip: 'Frase corta y directa, perfecta al subir al taxi.', re: ['Sure, hop in.', 'Claro, sube.'] },
      { en: 'How much to downtown?', es: '¿Cuánto cuesta al centro?', ej: 'How much to downtown? Is there a flat rate?', tip: 'Flat rate = tarifa fija.', re: ['It\'s a flat rate of twenty dollars.', 'Es una tarifa fija de veinte dólares.'] },
      { en: 'Do taxis accept cards?', es: '¿Los taxis aceptan tarjeta?', ej: 'Do taxis accept cards or do I need cash?', tip: 'Pregúntalo antes de subir, no todos los taxis aceptan tarjeta.', re: ['Yes, we accept cards.', 'Sí, aceptamos tarjetas.'] },
      { en: 'How long is the trip?', es: '¿Cuánto dura el viaje?', ej: 'How long is the trip to the airport?', tip: 'Útil para calcular si vas a llegar a tiempo.', re: ['About thirty minutes.', 'Unos treinta minutos.'] },
      { en: 'Faster, please.', es: 'Más rápido, por favor.', ej: "Faster, please. I'm late for my flight.", tip: 'Usa un tono amable, aunque tengas prisa.', re: ["I'll do my best.", 'Haré lo posible.'] },
      { en: 'Slower, please.', es: 'Más despacio, por favor.', ej: "Slower, please. I'm getting car sick.", tip: "Car sick significa 'mareado en el coche'.", re: ['Sure, no problem.', 'Claro, sin problema.'] },
      { en: 'Stop here.', es: 'Pare aquí.', ej: 'Stop here. This is perfect.', tip: 'Corto y directo, así se habla con los taxistas.', re: ["Okay, that'll be fifteen dollars.", 'Vale, son quince dólares.'] }
    ],
    tests: [
      {
        q: 'Estás en el taxi y ya llegaste a tu destino, ¿qué le dices al conductor?',
        a: 'Stop here.',
        note: 'Corto y directo, así se habla con los taxistas.'
      }
    ]
  },
  {
    num: '02',
    title: 'Transporte y clima',
    items: [
      { en: 'A ticket to Madrid, please.', es: 'Un boleto a Madrid, por favor.', ej: 'A ticket to Madrid, please. One way.', tip: "One way significa 'solo ida'; round trip es 'ida y vuelta'.", re: ['One way or round trip?', '¿Solo ida o ida y vuelta?'] },
      { en: 'When does the bus leave?', es: '¿Cuándo sale el autobús?', ej: 'When does the bus leave for downtown?', tip: "Leave aquí es 'salir', no lo confundas con leave = dejar.", re: ['It leaves in ten minutes.', 'Sale en diez minutos.'] },
      { en: 'Where can I rent a car?', es: '¿Dónde puedo alquilar un coche?', ej: 'Where can I rent a car for the weekend?', tip: 'Rent a car es la expresión estándar para alquilar un coche.', re: ['There\'s a rental office at the airport.', 'Hay una oficina de alquiler en el aeropuerto.'] },
      { en: "What's the weather like today?", es: '¿Cómo está el clima hoy?', ej: "What's the weather like today? Should I bring a jacket?", tip: 'What\'s it like es la estructura clave para pedir una descripción.', re: ["It's sunny, no jacket needed.", 'Está soleado, no hace falta chaqueta.'] },
      { en: "It's hot.", es: 'Hace calor.', ej: "It's hot today. Let's stay inside.", tip: 'Para el clima siempre se usa It\'s, no I\'m.', re: ["Let's turn on the AC.", 'Pongamos el aire acondicionado.'] },
      { en: "It's cold.", es: 'Hace frío.', ej: "It's cold outside. Wear a coat.", tip: "No confundas It's cold (clima) con I'm cold (tengo frío).", re: ["Good idea, I'll grab my coat.", 'Buena idea, cojo mi abrigo.'] },
      { en: "It's raining.", es: 'Está lloviendo.', ej: "It's raining. Do you have an umbrella?", tip: 'Present continuous para algo que está pasando ahora mismo.', re: ['Yes, I have an extra one.', 'Sí, tengo uno extra.'] },
      { en: "It's windy.", es: 'Hace viento.', ej: "It's windy. My hair is a mess.", tip: "A mess significa 'un desastre'.", re: ["Same here, let's go inside.", 'Igual aquí, entremos.'] },
      { en: "It's sunny.", es: 'Está soleado.', ej: "It's sunny. Perfect for a picnic.", tip: 'Perfecta para proponer planes al aire libre.', re: ["Great idea, let's pack some food.", 'Buena idea, preparemos comida.'] },
      { en: 'What time does it get dark?', es: '¿A qué hora oscurece?', ej: 'What time does it get dark? I want to see the sunset.', tip: "Get dark literalmente es 'volverse oscuro'.", re: ['Around seven this time of year.', 'Sobre las siete en esta época.'] }
    ],
    tests: [
      {
        q: 'Vas a comprar un billete de tren solo de ida, ¿qué dices?',
        a: 'A ticket to Madrid, please.',
        note: "One way significa 'solo ida'; round trip es 'ida y vuelta'."
      }
    ]
  },
  {
    num: '03',
    title: 'Aficiones',
    items: [
      { en: "What's the temperature?", es: '¿Cuál es la temperatura?', ej: "What's the temperature? It feels like 90°.", tip: 'En EE. UU. usan grados Fahrenheit, no Celsius.', re: ["It's around 75 degrees.", 'Está sobre los 75 grados.'] },
      { en: 'Will the weather be good tomorrow?', es: '¿Hará buen clima mañana?', ej: 'Will the weather be good tomorrow? We\'re planning a barbecue.', tip: 'Will para hacer predicciones sobre el futuro.', re: ['Yes, sunny all day.', 'Sí, soleado todo el día.'] },
      { en: 'I love reading.', es: 'Me encanta leer.', ej: 'I love reading. Especially mystery novels.', tip: 'Añade especially + tipo para dar más detalle.', re: ['Me too, what are you reading now?', 'Yo también, ¿qué estás leyendo ahora?'] },
      { en: 'I enjoy hiking.', es: 'Disfruto hacer senderismo.', ej: 'I enjoy hiking. Especially in the mountains.', tip: 'Enjoy siempre va seguido de -ing, no de infinitivo.', re: ['Same, there are great trails nearby.', 'Igual, hay buenas rutas cerca.'] },
      { en: 'I play the guitar.', es: 'Toco la guitarra.', ej: 'I play the guitar. Mostly rock songs.', tip: 'Con instrumentos musicales siempre se usa el artículo the.', re: ['That\'s awesome, play something for me.', 'Qué genial, tócame algo.'] },
      { en: 'I like painting.', es: 'Me gusta pintar.', ej: 'I like painting landscapes in watercolor.', tip: 'Like también puede ir seguido de -ing.', re: ["I'd love to see your work.", 'Me encantaría ver tu trabajo.'] },
      { en: 'Do you like dancing?', es: '¿Te gusta bailar?', ej: "Do you like dancing? There's a salsa class tonight.", tip: 'Buena pregunta para proponer un plan.', re: ['I love it, count me in.', 'Me encanta, cuenta conmigo.'] },
      { en: 'I collect stamps.', es: 'Colecciono estampillas.', ej: 'I collect stamps from different countries.', tip: 'Collect es "coleccionar", no confundir con recollect (recordar).', re: ['That\'s a unique hobby.', 'Es un pasatiempo original.'] },
      { en: 'I go swimming every weekend.', es: 'Nado cada fin de semana.', ej: 'I go swimming every weekend at the local pool.', tip: 'Go + -ing es el patrón típico para deportes (go swimming, go running).', re: ['That\'s a great habit.', 'Es un gran hábito.'] },
      { en: "Let's watch a movie.", es: 'Veamos una película.', ej: "Let's watch a movie. What genre do you like?", tip: "Let's + verbo es la forma más natural de proponer un plan.", re: ['Sounds good, how about a comedy?', 'Suena bien, ¿qué tal una comedia?'] }
    ],
    tests: [
      {
        q: 'Quieres proponerle un plan de noche tranquila a un amigo, ¿qué dices?',
        a: "Let's watch a movie.",
        note: "Let's + verbo es la forma más natural de proponer un plan."
      },
      {
        q: 'Imagina que quieres decir que te fascinan los libros, ¿cómo lo dices?',
        a: 'I love reading.',
        note: 'Añade siempre un detalle (ej: I love reading mystery novels) para que la conversación fluya.'
      }
    ]
  },
  {
    num: '04',
    title: 'Hablando de trabajo',
    items: [
      { en: 'I love playing chess.', es: 'Me encanta jugar ajedrez.', ej: 'I love playing chess. Want to play a game?', tip: 'Play + the + deporte de mesa (play chess, play cards).', re: ["Sure, I haven't played in years.", 'Claro, hace años que no juego.'] },
      { en: "What's your favorite hobby?", es: '¿Cuál es tu pasatiempo favorito?', ej: "What's your favorite hobby? I'm looking for new activities.", tip: 'Añade siempre un detalle (ej: I love reading mystery novels) para que la conversación fluya.', re: ['Probably photography.', 'Probablemente la fotografía.'] },
      { en: 'I work in marketing.', es: 'Trabajo en mercadeo.', ej: 'I work in marketing for a tech company.', tip: 'Referirse a tu industria es muy natural.', re: ['That sounds interesting.', 'Suena interesante.'] },
      { en: "I'm a graphic designer.", es: 'Soy diseñador gráfico.', ej: "I'm a graphic designer. I create logos and websites.", tip: 'Para tu profesión siempre usa I\'m a/an + trabajo.', re: ["I'd love to see your portfolio.", 'Me encantaría ver tu portafolio.'] },
      { en: 'We have a deadline tomorrow.', es: 'Tenemos una fecha límite mañana.', ej: 'We have a deadline tomorrow. I need to work late.', tip: 'Deadline es la fecha tope de entrega.', re: ['Let me know if you need help.', 'Avísame si necesitas ayuda.'] },
      { en: "Let's schedule a meeting.", es: 'Programemos una reunión.', ej: "Let's schedule a meeting to discuss the project.", tip: 'Schedule se pronuncia distinto en inglés americano y británico.', re: ['Sure, how about Thursday?', 'Claro, ¿qué tal el jueves?'] },
      { en: "What's your job title?", es: '¿Cuál es tu puesto de trabajo?', ej: "What's your job title? I'm trying to understand your role.", tip: 'Job title es el nombre oficial de tu puesto.', re: ["I'm a senior developer.", 'Soy desarrollador senior.'] },
      { en: 'I work remotely.', es: 'Trabajo de forma remota.', ej: 'I work remotely. So I can live anywhere.', tip: 'Remotely viene de remote (remoto/a distancia).', re: ['That must be nice, more freedom.', 'Debe ser bueno, más libertad.'] },
      { en: "Let's review the report.", es: 'Revisemos el informe.', ej: "Let's review the report before the presentation.", tip: 'Review es "revisar" en el sentido de repasar.', re: ["Good idea, I'll pull it up.", 'Buena idea, lo abro.'] },
      { en: 'The meeting was productive.', es: 'La reunión fue productiva.', ej: 'The meeting was productive. We made good decisions.', tip: 'Productive describe un uso eficiente del tiempo.', re: ['Glad to hear that.', 'Me alegra saberlo.'] }
    ],
    tests: [
      {
        q: '¿Cómo dices que trabajas desde casa?',
        a: 'I work remotely.',
        note: 'Remotely viene de remote (remoto/a distancia).'
      }
    ]
  },
  {
    num: '05',
    title: 'Buscando trabajo y opinando',
    items: [
      { en: "I'm applying for a job.", es: 'Estoy solicitando un empleo.', ej: "I'm applying for a job at Google.", tip: 'Apply for + puesto/empresa es la estructura fija.', re: ['Good luck, I hope you get it.', 'Suerte, espero que lo consigas.'] },
      { en: "I'm looking for opportunities.", es: 'Estoy buscando oportunidades.', ej: "I'm looking for opportunities in the tech industry.", tip: 'Look for significa "buscar" algo que aún no tienes.', re: ["I'll keep an eye out for you.", 'Estaré atento por ti.'] },
      { en: "I think it's a great idea.", es: 'Creo que es una gran idea.', ej: "I think it's a great idea to start early.", tip: 'I think suaviza la opinión, la hace menos tajante.', re: ["I agree, let's do it.", 'Estoy de acuerdo, hagámoslo.'] },
      { en: "In my opinion, it's too expensive.", es: 'En mi opinión, es demasiado caro.', ej: "In my opinion, it's too expensive for what we get.", tip: 'In my opinion se usa para introducir una opinión personal con claridad.', re: ['I see your point.', 'Entiendo tu punto.'] },
      { en: 'I prefer tea over coffee.', es: 'Prefiero el té al café.', ej: "I prefer tea over coffee. It's more relaxing.", tip: 'Prefer X over Y es la estructura para comparar preferencias.', re: ["Really? I can't live without coffee.", 'Yo no puedo vivir sin café.'] },
      { en: 'I believe in second chances.', es: 'Creo en las segundas oportunidades.', ej: 'I believe in second chances. Everyone makes mistakes.', tip: 'Believe in (creer en) es distinto de believe (creer que algo es cierto).', re: ["That's a kind way to see it.", 'Es una forma amable de verlo.'] },
      { en: 'I wish I had more time.', es: 'Ojalá tuviera más tiempo.', ej: 'I wish I had more time to travel.', tip: 'I wish + pasado expresa un deseo poco probable ahora mismo.', re: ['I know the feeling.', 'Sé cómo te sientes.'] },
      { en: "That's not what I expected.", es: 'Eso no es lo que esperaba.', ej: "That's not what I expected from this restaurant.", tip: 'Frase útil para expresar sorpresa sin quejarte directamente.', re: ['I\'m sorry to hear that.', 'Siento escuchar eso.'] },
      { en: "I don't agree with you.", es: 'No estoy de acuerdo contigo.', ej: "I don't agree with you, but I respect your opinion.", tip: 'Añadir but I respect your opinion suaviza el desacuerdo.', re: ["That's fair, let's discuss it.", 'Es justo, hablémoslo.'] },
      { en: "I'd rather stay home.", es: 'Prefiero quedarme en casa.', ej: "I'd rather stay home tonight. I'm tired.", tip: 'I\'d rather + verbo base, sin to.', re: ["That's okay, some other time.", 'Está bien, otro día será.'] }
    ],
    tests: [
      {
        q: 'Un amigo te propone salir, pero prefieres quedarte tranquilo en casa, ¿qué dices?',
        a: "I'd rather stay home.",
        note: "I'd rather + verbo base, sin to."
      }
    ]
  }
];
