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
 *
 * Bloques 06-09: gramática intermedia catalogada por TIPO DE FRASE, tomada
 * del tercer curso de Cale Anders ("Inglés intermedio — B1/B2 en un solo
 * video"), su bloque de gramática (concepto 1). Cubre los cuatro pares
 * tiempo simple / tiempo continuo: pasado, futuro, presente perfecto y
 * pasado perfecto. El resto del bloque de gramática (condicionales,
 * modales, voz pasiva, preposiciones) vive en en.b2.js, bloques 06-10.
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
  },
  {
    num: '06',
    title: 'Pasado simple vs. pasado continuo',
    items: [
      { en: 'I visited my grandmother yesterday.', es: 'Visité a mi abuela ayer.', ej: 'I visited my grandmother yesterday and we had lunch together.', tip: 'Pasado simple: acción terminada en un momento concreto del pasado, sin importar cuánto duró.', re: ["That's so nice, how is she?", 'Qué bonito, ¿cómo está ella?'] },
      { en: 'She finished the report last night.', es: 'Ella terminó el informe anoche.', ej: 'She finished the report last night, right before midnight.', tip: 'Pasado simple para hechos completados, aunque no se diga la duración.', re: ["Good, right on time.", 'Bien, justo a tiempo.'] },
      { en: 'He bought a new car last week.', es: 'Él compró un coche nuevo la semana pasada.', ej: 'He bought a new car last week and he loves it.', tip: 'Bought es el pasado irregular de buy; no sigue la regla de agregar -ed.', re: ["What color did he get?", '¿De qué color lo consiguió?'] },
      { en: 'I was reading a book when the phone rang.', es: 'Estaba leyendo un libro cuando sonó el teléfono.', ej: 'I was reading a book when the phone rang and startled me.', tip: 'Pasado continuo (was/were + verbo-ing) para una acción en progreso interrumpida por otra.', re: ["What a bad time to call.", 'Qué mal momento para llamar.'] },
      { en: 'They were playing football when it started to rain.', es: 'Ellos estaban jugando al fútbol cuando empezó a llover.', ej: 'They were playing football when it started to rain, so they went home.', tip: 'Were se usa con they/we; was se usa con I/he/she/it.', re: ["Did they finish the game?", '¿Terminaron el partido?'] },
      { en: 'She was studying all afternoon yesterday.', es: 'Ella estuvo estudiando toda la tarde ayer.', ej: 'She was studying all afternoon yesterday for her exam.', tip: 'En inglés no existe la distinción entre pretérito e imperfecto; was studying cubre ambos matices.', re: ["I hope it pays off.", 'Espero que dé sus frutos.'] },
      { en: 'We were watching TV when the lights went out.', es: 'Estábamos viendo la televisión cuando se fue la luz.', ej: 'We were watching TV when the lights went out, right in the middle of the movie.', tip: 'Go out (irregular: went out) es un verbo frasal que significa apagarse.', re: ["That's the worst timing.", 'Es el peor momento.'] },
      { en: 'She was cooking dinner when the power went out.', es: 'Ella estaba cocinando la cena cuando se fue la luz.', ej: 'She was cooking dinner when the power went out, so we ordered pizza.', tip: "Power went out es otra forma común de decir 'se fue la luz'.", re: ["Pizza saves the day.", 'La pizza salva el día.'] },
      { en: 'I was walking home when I saw the accident.', es: 'Estaba caminando a casa cuando vi el accidente.', ej: 'I was walking home when I saw the accident on the corner.', tip: 'El pasado continuo describe el fondo de la escena; el pasado simple describe lo que la interrumpió.', re: ["Was anyone hurt?", '¿Alguien salió herido?'] },
      { en: 'He studied all night for the exam.', es: 'Él estudió toda la noche para el examen.', ej: 'He studied all night for the exam and passed with a good grade.', tip: 'Cuando un verbo termina en consonante + y, el pasado se forma con -ied: study → studied.', re: ["All that work paid off.", 'Todo ese trabajo dio frutos.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'estaba leyendo un libro cuando sonó el teléfono'?",
        a: 'I was reading a book when the phone rang.',
        note: 'Pasado continuo para una acción en progreso interrumpida por otra.'
      },
      {
        q: "¿Cómo dices 'ellos estaban jugando al fútbol cuando empezó a llover'?",
        a: 'They were playing football when it started to rain.',
        note: 'Were se usa con they/we; was con I/he/she/it.'
      },
      {
        q: "¿Cómo dices 'ella terminó el informe anoche', hablando de un hecho ya completado?",
        a: 'She finished the report last night.',
        note: 'Pasado simple para una acción terminada, sin importar cuánto duró.'
      },
      {
        q: "¿Cómo dices 'estábamos viendo la televisión cuando se fue la luz'?",
        a: 'We were watching TV when the lights went out.',
        note: 'Go out (went out) es un verbo frasal que significa apagarse.'
      }
    ]
  },
  {
    num: '07',
    title: 'Futuro simple vs. futuro continuo',
    items: [
      { en: 'I will call you tomorrow.', es: 'Te llamaré mañana.', ej: 'I will call you tomorrow to confirm the details.', tip: 'Futuro simple (will + verbo base) para decisiones espontáneas o promesas.', re: ["I'll be waiting for it.", 'Estaré esperándola.'] },
      { en: 'They will arrive at 8 pm.', es: 'Ellos llegarán a las 8 pm.', ej: "They will arrive at 8 pm, so let's have dinner ready.", tip: 'Will también se usa para predicciones sobre el futuro.', re: ["I'll set the table.", 'Pongo la mesa.'] },
      { en: 'It will rain later today.', es: 'Lloverá más tarde hoy.', ej: 'It will rain later today, according to the forecast.', tip: 'Will + verbo base, sin necesidad de un plan previo.', re: ["I'll bring an umbrella.", 'Llevo un paraguas.'] },
      { en: 'I will be working at 9 am tomorrow.', es: 'Estaré trabajando a las 9 am mañana.', ej: 'I will be working at 9 am tomorrow, so call me after that.', tip: 'Futuro continuo (will be + verbo-ing) describe algo en progreso en un momento futuro concreto.', re: ["Got it, I'll call at 10.", 'Entendido, llamo a las 10.'] },
      { en: 'They will be traveling to Spain next week.', es: 'Ellos estarán viajando a España la próxima semana.', ej: 'They will be traveling to Spain next week for a conference.', tip: 'El verbo be no se conjuga aquí porque will ya es el auxiliar de futuro.', re: ["Have a great trip, then.", 'Que tengan buen viaje, entonces.'] },
      { en: 'She will be studying when you arrive.', es: 'Ella estará estudiando cuando llegues.', ej: "She will be studying when you arrive, so keep it quiet.", tip: 'Futuro continuo para una acción que estará en curso en un momento futuro específico.', re: ["I'll try not to disturb her.", 'Trataré de no molestarla.'] },
      { en: 'We will be having dinner at 7 pm.', es: 'Estaremos cenando a las 7 pm.', ej: 'We will be having dinner at 7 pm, come join us.', tip: "Have dinner es la expresión fija para 'cenar'.", re: ["I'll be there.", 'Ahí estaré.'] },
      { en: 'I will eat dinner at 7 pm.', es: 'Cenaré a las 7 pm.', ej: 'I will eat dinner at 7 pm today.', tip: 'Futuro simple: solo indica que la acción ocurrirá, sin enfatizar el proceso.', re: ["Sounds like a plan.", 'Suena bien.'] },
      { en: 'They will finish the report tomorrow.', es: 'Ellos terminarán el informe mañana.', ej: 'They will finish the report tomorrow, before the deadline.', tip: 'Futuro simple para algo que se completará en un punto futuro.', re: ["Good, right on schedule.", 'Bien, según lo previsto.'] },
      { en: 'They will be finishing the report tomorrow.', es: 'Ellos estarán terminando el informe mañana.', ej: 'They will be finishing the report tomorrow afternoon.', tip: 'Futuro continuo enfatiza que la acción estará en proceso, no que estará completa.', re: ["I'll check in with them then.", 'Los contacto entonces.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'te llamaré mañana', como una promesa?",
        a: 'I will call you tomorrow.',
        note: 'Will + verbo base para decisiones espontáneas o promesas.'
      },
      {
        q: "¿Cómo dices 'estaré trabajando a las 9 am mañana'?",
        a: 'I will be working at 9 am tomorrow.',
        note: 'Futuro continuo (will be + verbo-ing) para algo en progreso en un momento futuro concreto.'
      },
      {
        q: "¿Cómo dices 'ella estará estudiando cuando llegues'?",
        a: 'She will be studying when you arrive.',
        note: 'Futuro continuo para una acción que estará en curso en un momento futuro específico.'
      },
      {
        q: "¿Cómo dices 'estaremos cenando a las 7 pm'?",
        a: 'We will be having dinner at 7 pm.',
        note: "Have dinner es la expresión fija para 'cenar'."
      }
    ]
  },
  {
    num: '08',
    title: 'Presente perfecto simple vs. continuo',
    items: [
      { en: 'I have finished my homework.', es: 'He terminado mi tarea.', ej: 'I have finished my homework, so I can relax now.', tip: "Have aquí significa 'haber', no 'tener'; have + participio es el presente perfecto simple.", re: ["Great, you deserve a break.", 'Genial, te mereces un descanso.'] },
      { en: 'She has traveled to Spain three times.', es: 'Ella ha viajado a España tres veces.', ej: 'She has traveled to Spain three times, and she loves it.', tip: "Has se usa con he/she/it, igual que cuando have significa 'tener'.", re: ["What's her favorite city there?", '¿Cuál es su ciudad favorita ahí?'] },
      { en: 'They have lived here for five years.', es: 'Ellos han vivido aquí durante cinco años.', ej: 'They have lived here for five years and know the area well.', tip: 'For + duración se usa con el presente perfecto para señalar cuánto tiempo lleva algo.', re: ["That explains it, they know it well.", 'Eso lo explica, la conocen bien.'] },
      { en: 'We have already eaten.', es: 'Ya hemos comido.', ej: "We have already eaten, so you don't need to cook for us.", tip: 'Already refuerza que la acción ya se completó.', re: ["Okay, I'll cook less then.", 'Vale, entonces cocino menos.'] },
      { en: 'I have been studying for hours.', es: 'He estado estudiando durante horas.', ej: 'I have been studying for hours and I need a break.', tip: 'Presente perfecto continuo (have been + verbo-ing) enfatiza la duración de una acción reciente.', re: ["Take a walk, it'll help.", 'Ve a caminar, te ayudará.'] },
      { en: 'She has been working on this project all day.', es: 'Ella ha estado trabajando en este proyecto todo el día.', ej: 'She has been working on this project all day without a break.', tip: 'Been describe la continuidad; en inglés hablado el sonido de la t entre vocales suena casi como una d.', re: ["She should rest soon.", 'Debería descansar pronto.'] },
      { en: 'They have been waiting for the bus since 8 am.', es: 'Ellos han estado esperando el autobús desde las 8 am.', ej: "They have been waiting for the bus since 8 am, but it hasn't come yet.", tip: 'Since + un punto en el tiempo indica cuándo empezó la acción continua.', re: ["That's a really long wait.", 'Es una espera muy larga.'] },
      { en: 'I have read that book.', es: 'He leído ese libro.', ej: "I have read that book, it's one of my favorites.", tip: "Read (participio) se escribe igual que el presente, pero se pronuncia como 'red'.", re: ["What did you think of the ending?", '¿Qué te pareció el final?'] },
      { en: 'I have been reading that book for hours.', es: 'He estado leyendo ese libro durante horas.', ej: "I have been reading that book for hours and I can't put it down.", tip: 'El continuo enfatiza que la actividad sigue en curso o acaba de parar.', re: ["It must be a good one.", 'Debe ser bueno.'] },
      { en: 'She has visited her grandmother.', es: 'Ella ha visitado a su abuela.', ej: "She has visited her grandmother, so she knows how she's doing.", tip: 'El simple enfatiza el hecho completado, no la duración.', re: ["How is she doing?", '¿Cómo está ella?'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'he terminado mi tarea'?",
        a: 'I have finished my homework.',
        note: "Have + participio es el presente perfecto simple; have significa 'haber' aquí, no 'tener'."
      },
      {
        q: "¿Cómo dices 'he estado estudiando durante horas', enfatizando la duración?",
        a: 'I have been studying for hours.',
        note: 'Presente perfecto continuo (have been + verbo-ing) enfatiza la duración de una acción reciente.'
      },
      {
        q: "¿Cómo dices 'ellos han estado esperando el autobús desde las 8 am'?",
        a: 'They have been waiting for the bus since 8 am.',
        note: 'Since + un punto en el tiempo indica cuándo empezó la acción continua.'
      },
      {
        q: "¿Cómo dices 'ellos han vivido aquí durante cinco años'?",
        a: 'They have lived here for five years.',
        note: 'For + duración se usa con el presente perfecto para señalar cuánto tiempo lleva algo.'
      }
    ]
  },
  {
    num: '09',
    title: 'Pasado perfecto simple vs. continuo',
    items: [
      { en: 'I had finished the report before the meeting started.', es: 'Había terminado el informe antes de que empezara la reunión.', ej: 'I had finished the report before the meeting started, so I was ready.', tip: 'Pasado perfecto (had + participio) para una acción anterior a otra en el pasado.', re: ["Good, you were prepared.", 'Bien, estabas preparado.'] },
      { en: 'She had left when I arrived.', es: 'Ella se había ido cuando llegué.', ej: 'She had left when I arrived, so I missed her.', tip: 'Left es el pasado y participio irregular de leave.', re: ["What a shame.", 'Qué lástima.'] },
      { en: 'They had visited that museum before.', es: 'Ellos ya habían visitado ese museo antes.', ej: 'They had visited that museum before, so they skipped it this time.', tip: 'Had + participio con verbos regulares sigue el mismo patrón.', re: ["Makes sense, they'd already seen it.", 'Tiene sentido, ya lo habían visto.'] },
      { en: 'We had eaten dinner when she called.', es: 'Habíamos cenado cuando ella llamó.', ej: 'We had eaten dinner when she called, so we chatted for a while.', tip: 'Pasado perfecto simple enfatiza que la acción ya estaba completa.', re: ["What did she want?", '¿Qué quería?'] },
      { en: 'I had been studying for two hours when the power went out.', es: 'Había estado estudiando durante dos horas cuando se fue la luz.', ej: 'I had been studying for two hours when the power went out.', tip: 'Pasado perfecto continuo (had been + verbo-ing) enfatiza la duración de una acción anterior a otra en el pasado.', re: ["That's terrible timing.", 'Qué mal momento.'] },
      { en: 'She had been working there for five years before she got promoted.', es: 'Ella había estado trabajando ahí durante cinco años antes de que la ascendieran.', ej: 'She had been working there for five years before she got promoted.', tip: "Get promoted significa 'ser ascendido'.", re: ["Well deserved.", 'Bien merecido.'] },
      { en: 'We had been waiting for an hour when the bus finally arrived.', es: 'Habíamos estado esperando durante una hora cuando el autobús finalmente llegó.', ej: 'We had been waiting for an hour when the bus finally arrived.', tip: 'El continuo pone el foco en cuánto tiempo duró la espera.', re: ["That's a long wait.", 'Es una larga espera.'] },
      { en: 'We had been discussing the problem for days before we found a solution.', es: 'Habíamos estado discutiendo el problema durante días antes de encontrar una solución.', ej: 'We had been discussing the problem for days before we found a solution.', tip: "Found es el pasado irregular de find, no 'finded'.", re: ["Glad you figured it out.", 'Qué bueno que lo resolvieron.'] },
      { en: 'They had finished the project before the deadline.', es: 'Ellos habían terminado el proyecto antes de la fecha límite.', ej: 'They had finished the project before the deadline, with time to spare.', tip: 'The deadline es la fecha límite.', re: ["Impressive planning.", 'Buena planificación.'] },
      { en: 'They had been working on the project for weeks before the deadline.', es: 'Ellos habían estado trabajando en el proyecto durante semanas antes de la fecha límite.', ej: 'They had been working on the project for weeks before the deadline.', tip: 'El continuo describe el proceso; el simple describe el resultado.', re: ["That effort really shows.", 'Ese esfuerzo se nota.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'había terminado el informe antes de que empezara la reunión'?",
        a: 'I had finished the report before the meeting started.',
        note: 'Pasado perfecto (had + participio) para una acción anterior a otra en el pasado.'
      },
      {
        q: "¿Cómo dices 'había estado estudiando durante dos horas cuando se fue la luz'?",
        a: 'I had been studying for two hours when the power went out.',
        note: 'Pasado perfecto continuo (had been + verbo-ing) enfatiza la duración de la acción anterior.'
      },
      {
        q: "¿Cómo dices 'ella se había ido cuando llegué'?",
        a: 'She had left when I arrived.',
        note: 'Left es el pasado y participio irregular de leave.'
      },
      {
        q: "¿Cómo dices 'ellos habían terminado el proyecto antes de la fecha límite'?",
        a: 'They had finished the project before the deadline.',
        note: 'The deadline es la fecha límite.'
      }
    ]
  }
];
