/**
 * LinguaTales — Frases hechas · Inglés B2
 * src/data/phrases/en.b2.js
 *
 * Segunda mitad de "NIVEL 2: Frases Situacionales" del curso (bloques 06-10
 * del antiguo en.a2.js, renumerados 01-05 aquí) — la primera mitad vive en
 * en.b1.js. Mismo reparto de las 300+ frases a lo largo de los seis niveles
 * de la app.
 *
 * `ej` y `tip` van verbatim del material del curso cuando el curso los
 * trae; donde no daba `tip`, se ha escrito uno corto en la misma voz. `re`
 * (la contestación) no viene del curso — es invención propia en todos los
 * bloques, coherente con el registro de cada frase.
 *
 * Nota: todavía no hay ningún relato B2 en el catálogo (src/data/stories),
 * así que este nivel no es alcanzable aún desde ninguna ruta de la app —
 * misma situación que B1/C1 y los conectores de niveles altos añadidos en
 * sesiones anteriores. Los datos están listos para cuando exista esa historia.
 *
 * Bloques 06-10: gramática intermedia catalogada por TIPO DE FRASE, segunda
 * mitad del bloque de gramática (concepto 1) del tercer curso de Cale
 * Anders ("Inglés intermedio — B1/B2 en un solo video"). Cubre condicionales,
 * modales de obligación y posibilidad, voz pasiva y preposiciones de tiempo
 * y lugar. La otra mitad (los pares tiempo simple / continuo) vive en
 * en.b1.js, bloques 06-09.
 */
export const EN_B2_PHRASES = [
  {
    num: '01',
    title: 'Confianza y ánimo',
    items: [
      { en: "It's worth a try.", es: 'Vale la pena intentarlo.', ej: "I'm not sure it will work, but it's worth a try.", tip: 'Worth a try anima a intentar algo aunque no haya certeza.', re: ["You're right, let's try it.", 'Tienes razón, intentémoslo.'] },
      { en: 'What do you think about it?', es: '¿Qué opinas al respecto?', ej: 'What do you think about it? I value your opinion.', tip: 'I value your opinion muestra interés genuino.', re: ["Honestly, I think it's great.", 'Sinceramente, creo que es genial.'] },
      { en: "I'm on the fence.", es: 'Estoy indeciso.', ej: "I'm on the fence about moving to New York.", tip: 'Es una expresión visual súper nativa (como estar encima de una valla y poder caer a cualquier lado) en lugar de decir I can\'t decide.', re: ['Take your time deciding.', 'Tómate tu tiempo para decidir.'] },
      { en: "I'm confident.", es: 'Estoy seguro/a.', ej: "I'm confident we can finish this project on time.", tip: 'Confident describe seguridad en uno mismo.', re: ["That's great to hear.", 'Qué bueno escuchar eso.'] },
      { en: 'I feel lucky today.', es: 'Me siento afortunado hoy.', ej: "I feel lucky today. Let's buy a lottery ticket.", tip: 'Feel + adjetivo describe un estado de ánimo.', re: ["Let's hope it pays off!", '¡Esperemos que valga la pena!'] },
      { en: "I'm learning something new.", es: 'Estoy aprendiendo algo nuevo.', ej: "I'm learning something new every day at this job.", tip: 'Present continuous para un proceso que sigue en marcha.', re: ["That's the best part of a new job.", 'Esa es la mejor parte de un trabajo nuevo.'] },
      { en: 'Everything will be fine.', es: 'Todo estará bien.', ej: 'Don\'t worry. Everything will be fine.', tip: 'Frase de consuelo muy común entre amigos.', re: ['Thanks, I needed to hear that.', 'Gracias, necesitaba escuchar eso.'] },
      { en: 'I can do this.', es: 'Puedo hacerlo.', ej: 'I can do this. I just need to focus.', tip: 'Frase corta y directa para darte ánimo a ti mismo.', re: ['Yes, you absolutely can.', 'Sí, claro que puedes.'] },
      { en: 'I trust you.', es: 'Confío en ti.', ej: 'I trust you to make the right decision.', tip: 'Trust + persona, sin preposición.', re: ['Thank you, that means a lot.', 'Gracias, significa mucho.'] },
      { en: 'This is my choice.', es: 'Esta es mi decisión.', ej: "This is my choice and I'm comfortable with it.", tip: 'Choice es la decisión en sí; decision funciona igual de bien aquí.', re: ['I respect that.', 'Respeto eso.'] }
    ],
    tests: [
      {
        q: '¿Cómo expresas confianza en ti mismo?',
        a: "I'm confident.",
        note: 'Confident describe seguridad en uno mismo, no confundir con embarrassed.'
      }
    ]
  },
  {
    num: '02',
    title: 'Planes de ocio',
    items: [
      { en: "I'm improving every day.", es: 'Estoy mejorando cada día.', ej: "I'm improving every day at speaking English.", tip: 'Improve at + habilidad concreta.', re: ["Keep it up, you're doing great.", 'Sigue así, lo haces genial.'] },
      { en: "I'm grateful for today.", es: 'Estoy agradecido por hoy.', ej: "I'm grateful for today. It was perfect.", tip: 'Grateful for + lo que agradeces.', re: ['I\'m glad you had a good day.', 'Me alegra que hayas tenido un buen día.'] },
      { en: 'This is my passion.', es: 'Esta es mi pasión.', ej: 'This is my passion. I could do it all day.', tip: 'Passion transmite entusiasmo genuino por algo.', re: ['It really shows.', 'Se nota de verdad.'] },
      { en: "Let's go out tonight.", es: 'Salgamos esta noche.', ej: "Let's go out tonight. There's a new bar downtown.", tip: 'Go out significa "salir" (de fiesta, a cenar, etc.).', re: ["I'm in, what time?", 'Me apunto, ¿a qué hora?'] },
      { en: 'Is there a concert nearby?', es: '¿Hay un concierto cerca?', ej: 'Is there a concert nearby this weekend?', tip: 'Nearby (cerca) es más informal que near here.', re: ["Yes, there's one on Saturday.", 'Sí, hay uno el sábado.'] },
      { en: 'Do you like this song?', es: '¿Te gusta esta canción?', ej: "Do you like this song? It's my favorite.", tip: 'Pregunta ideal para hablar de música con alguien.', re: ["I love it, who's the artist?", 'Me encanta, ¿quién es el artista?'] },
      { en: 'Turn up the volume.', es: 'Sube el volumen.', ej: 'Turn up the volume. I love this part.', tip: 'Turn up sube algo; turn down lo baja.', re: ['Sure, here we go.', 'Claro, allá vamos.'] },
      { en: "Who's your favorite singer?", es: '¿Quién es tu cantante favorito?', ej: "Who's your favorite singer? I'm looking for new music.", tip: 'Buena pregunta para descubrir música nueva.', re: ['I really like Adele.', 'Me gusta mucho Adele.'] },
      { en: "Let's play a game.", es: 'Juguemos algo.', ej: "Let's play a game while we wait.", tip: 'Play a game es genérico; para deportes se dice play + deporte.', re: ['Sounds fun, what game?', 'Suena divertido, ¿qué juego?'] },
      { en: 'This show is amazing.', es: 'Este programa es increíble.', ej: 'This show is amazing. You have to watch it.', tip: 'You have to + verbo es una recomendación entusiasta.', re: ["I'll add it to my list.", 'Lo añado a mi lista.'] }
    ],
    tests: [
      {
        q: 'Quieres proponerle a un amigo salir de fiesta esta noche, ¿qué dices?',
        a: "Let's go out tonight.",
        note: 'Go out significa "salir" (de fiesta, a cenar, etc.).'
      }
    ]
  },
  {
    num: '03',
    title: 'Familia',
    items: [
      { en: 'Are you coming to the party?', es: '¿Vienes a la fiesta?', ej: 'Are you coming to the party on Saturday?', tip: 'Present continuous se usa mucho para planes futuros ya confirmados.', re: ["Yes, I wouldn't miss it.", 'Sí, no me lo perdería.'] },
      { en: 'I had a great time.', es: 'La pasé genial.', ej: 'I had a great time. Thanks for inviting me.', tip: 'Frase perfecta para despedirte después de un plan.', re: ["I'm so glad, let's do it again.", 'Me alegra mucho, repitamos.'] },
      { en: 'The movie was boring.', es: 'La película estuvo aburrida.', ej: 'The movie was boring. We left early.', tip: 'Boring describe algo que aburre; bored describe cómo te sientes tú.', re: ['That\'s a shame, I heard good things.', 'Qué pena, había oído cosas buenas.'] },
      { en: 'Do you have children?', es: '¿Tienes hijos?', ej: 'Do you have children? I have two daughters.', tip: 'Siempre comparte algo tuyo también (ej: I have two daughters, o No kids yet…) para que sea una conversación y no un interrogatorio.', re: ['Yes, a son and a daughter.', 'Sí, un hijo y una hija.'] },
      { en: 'I have two brothers.', es: 'Tengo dos hermanos.', ej: 'I have two brothers, both older than me.', tip: 'Older than me para describir orden de edad entre hermanos.', re: ["Big family, that's nice.", 'Familia grande, qué bonito.'] },
      { en: 'My parents live nearby.', es: 'Mis padres viven cerca.', ej: 'My parents live nearby. So I see them often.', tip: 'Nearby funciona como adverbio, sin preposición delante.', re: ['That must be convenient.', 'Debe ser cómodo.'] },
      { en: 'We are very close.', es: 'Somos muy unidos.', ej: 'We are very close. We talk every day.', tip: 'Close aquí describe una relación cercana, no distancia física.', re: ["That's a beautiful bond.", 'Es un vínculo precioso.'] },
      { en: 'She is my cousin.', es: 'Ella es mi prima.', ej: 'She is my cousin. We grew up together.', tip: 'Cousin sirve tanto para primo como para prima.', re: ['You two seem really close.', 'Se ven muy unidas.'] },
      { en: 'He is my best friend.', es: 'Él es mi mejor amigo.', ej: 'He is my best friend. We\'ve known each other for years.', tip: 'Best friend es universal, no cambia por género.', re: ['Friendships like that are rare.', 'Amistades así son raras.'] },
      { en: "We've been married for 10 years.", es: 'Llevamos 10 años casados.', ej: "We've been married for 10 years. It feels like yesterday.", tip: 'Present perfect (have been) para algo que empezó en el pasado y continúa.', re: ["Congratulations, that's wonderful.", 'Felicidades, es maravilloso.'] }
    ],
    tests: [
      {
        q: 'Acabas de salir de una cita y quieres decir que lo pasaste genial, ¿qué dices?',
        a: 'I had a great time.',
        note: 'Frase perfecta para despedirte después de quedar con alguien.'
      },
      {
        q: 'Conoces a un colega nuevo y quieres preguntarle educadamente si tiene familia. ¿Cómo lo haces?',
        a: 'Do you have children?',
        note: 'Siempre comparte algo tuyo también (ej: I have two daughters, o No kids yet…) para que sea una conversación y no un interrogatorio.'
      }
    ]
  },
  {
    num: '04',
    title: 'Tecnología',
    items: [
      { en: 'They just had a baby.', es: 'Acaban de tener un bebé.', ej: 'They just had a baby. A beautiful girl.', tip: 'Just + pasado indica que algo acaba de ocurrir.', re: ['Congratulations to them!', '¡Felicidades para ellos!'] },
      { en: 'Are you in a relationship?', es: '¿Tienes pareja?', ej: 'Are you in a relationship or are you single?', tip: 'Pregunta algo personal; úsala solo con gente de confianza.', re: ["I'm single right now.", 'Estoy soltero/a ahora mismo.'] },
      { en: 'I love spending time with my family.', es: 'Me encanta pasar tiempo con mi familia.', ej: 'I love spending time with my family, especially on weekends.', tip: 'Spend time + with es la estructura fija para "pasar tiempo con".', re: ['Family time is the best.', 'El tiempo en familia es lo mejor.'] },
      { en: 'I lost my phone.', es: 'Perdí mi teléfono.', ej: 'I lost my phone. Can I use yours to call it?', tip: 'Lost describe que no sabes dónde está, no que te lo robaron.', re: ["Sure, here's my phone.", 'Claro, aquí tienes mi teléfono.'] },
      { en: "The Wi-Fi isn't working.", es: 'El Wi-Fi no funciona.', ej: "The Wi-Fi isn't working. Do you have the password?", tip: 'Wi-Fi se pronuncia igual en inglés y español.', re: ['Let me restart the router.', 'Déjame reiniciar el router.'] },
      { en: 'Can I use your charger?', es: '¿Puedo usar tu cargador?', ej: 'Can I use your charger? My battery is dead.', tip: 'Battery is dead es la forma nativa de decir "sin batería".', re: ["Sure, it's right there.", 'Claro, está ahí mismo.'] },
      { en: "What's your email address?", es: '¿Cuál es tu correo electrónico?', ej: "What's your email address? I'll send you the documents.", tip: 'Email address, no solo email, cuando pides el dato completo.', re: ["It's on my business card.", 'Está en mi tarjeta de presentación.'] },
      { en: "I'm on a video call.", es: 'Estoy en videollamada.', ej: "I'm on a video call. Can we talk later?", tip: 'On a call es la preposición correcta, no in a call.', re: ["No problem, call me when you're free.", 'Sin problema, llámame cuando estés libre.'] },
      { en: 'Please mute your microphone.', es: 'Por favor, silencia tu micrófono.', ej: "Please mute your microphone. There's background noise.", tip: 'Mute/unmute son los verbos clave en videollamadas.', re: ['Sorry, muting now.', 'Perdón, silenciando ahora.'] },
      { en: 'Let me share my screen.', es: 'Déjame compartir mi pantalla.', ej: 'Let me share my screen so you can see the presentation.', tip: 'Share my screen es la frase estándar en cualquier videollamada.', re: ['Great, go ahead.', 'Genial, adelante.'] }
    ],
    tests: [
      {
        q: '¿Cómo pides prestado un cargador?',
        a: 'Can I use your charger?',
        note: 'My battery is dead es la excusa perfecta para pedirlo.'
      }
    ]
  },
  {
    num: '05',
    title: 'Cómo te sientes',
    items: [
      { en: 'Do you have social media?', es: '¿Tienes redes sociales?', ej: "Do you have social media? Let's connect on Instagram.", tip: 'Social media es incontable, no se dice a social media.', re: ["Yes, I'll send you my username.", 'Sí, te mando mi usuario.'] },
      { en: 'Send me a message later.', es: 'Envíame un mensaje más tarde.', ej: "Send me a message later. I can't talk now.", tip: 'Send a message es más común que write a message.', re: ['Will do, talk soon.', 'Lo haré, hablamos pronto.'] },
      { en: 'I need to charge my laptop.', es: 'Necesito cargar mi portátil.', ej: 'I need to charge my laptop. Where is an outlet?', tip: 'Outlet es "enchufe" en inglés americano; en británico se dice socket.', re: ["There's one over there.", 'Hay uno por allí.'] },
      { en: "I'm feeling nervous.", es: 'Me siento nervioso.', ej: "I'm feeling nervous about the presentation tomorrow.", tip: 'Feeling + adjetivo describe un estado temporal.', re: ["You'll do great, don't worry.", 'Lo harás genial, no te preocupes.'] },
      { en: "I'm really happy today.", es: 'Estoy muy feliz hoy.', ej: "I'm really happy today. I got good news.", tip: "Really intensifica el adjetivo, como 'muy' en español.", re: ['That\'s wonderful, tell me more.', 'Qué maravilla, cuéntame más.'] },
      { en: 'I feel anxious.', es: 'Me siento ansioso.', ej: 'I feel anxious when I have to speak in public.', tip: 'Anxious describe ansiedad, no confundir con excited (emocionado).', re: ["Take a deep breath, you've got this.", 'Respira hondo, tú puedes.'] },
      { en: "I'm heartbroken.", es: 'Tengo el corazón roto.', ej: "I'm heartbroken. My dog passed away.", tip: 'Pass away es una forma delicada de decir "morir".', re: ["I'm so sorry for your loss.", 'Lo siento mucho por tu pérdida.'] },
      { en: "I'm calm and relaxed.", es: 'Estoy tranquilo y relajado.', ej: "I'm calm and relaxed after my vacation.", tip: 'Calm and relaxed suelen ir juntas para describir bienestar.', re: ["That's exactly what you needed.", 'Es justo lo que necesitabas.'] },
      { en: "I'm frustrated.", es: 'Estoy frustrado.', ej: "I'm frustrated because nothing is working today.", tip: 'Frustrated describe fastidio por algo que no sale bien.', re: ["I understand, let's take a break.", 'Lo entiendo, tomemos un descanso.'] },
      { en: "I'm scared.", es: 'Tengo miedo.', ej: "I'm scared of flying, but I have to travel.", tip: 'Scared of + sustantivo/gerundio para especificar el miedo.', re: ["I'll be right here with you.", 'Estaré aquí contigo.'] }
    ],
    tests: [
      {
        q: 'Tienes una presentación mañana y te sientes un poco nervioso, ¿qué dices?',
        a: "I'm feeling nervous.",
        note: 'Feeling + adjetivo describe un estado temporal.'
      }
    ]
  },
  {
    num: '06',
    title: 'Condicional simple vs. continuo',
    items: [
      { en: 'If I had more time, I would travel more.', es: 'Si tuviera más tiempo, viajaría más.', ej: 'If I had more time, I would travel more often.', tip: 'Condicional simple: would + verbo base para lo que pasaría en un escenario hipotético.', re: ["Same, I'd love to see more places.", 'Igual, me encantaría ver más lugares.'] },
      { en: 'She would help if she knew how.', es: 'Ella ayudaría si supiera cómo.', ej: "She would help if she knew how, she just doesn't have the skills.", tip: 'Knew es el pasado de know, usado aquí para lo hipotético.', re: ["Maybe someone could teach her.", 'Tal vez alguien podría enseñarle.'] },
      { en: 'They would buy a bigger house if they earned more money.', es: 'Ellos comprarían una casa más grande si ganaran más dinero.', ej: 'They would buy a bigger house if they earned more money.', tip: 'Would + verbo base en la cláusula principal del condicional.', re: ["Don't we all.", 'No somos los únicos.'] },
      { en: "I would talk to him, but I don't have his number.", es: 'Hablaría con él, pero no tengo su número.', ej: "I would talk to him, but I don't have his number right now.", tip: 'Would se usa constantemente para hablar de algo condicional o hipotético.', re: ["I can give it to you.", 'Te lo puedo dar.'] },
      { en: "If I weren't so busy, I would be studying for the exam right now.", es: 'Si no estuviera tan ocupado, estaría estudiando para el examen ahora mismo.', ej: "If I weren't so busy, I would be studying for the exam right now.", tip: 'Con el condicional usamos were en vez de was con I, incluso siendo algo poco común en otros contextos.', re: ["You'll find the time.", 'Encontrarás el tiempo.'] },
      { en: "She would be working here if she hadn't found another job.", es: 'Ella estaría trabajando aquí si no hubiera encontrado otro trabajo.', ej: "She would be working here if she hadn't found another job.", tip: 'Condicional continuo (would be + verbo-ing) para lo que estaría ocurriendo en un escenario hipotético.', re: ["We really miss her here.", 'La extrañamos mucho aquí.'] },
      { en: "They would be living in Spain if they hadn't changed their plans.", es: 'Ellos estarían viviendo en España si no hubieran cambiado sus planes.', ej: "They would be living in Spain if they hadn't changed their plans.", tip: 'Hadn\'t es la contracción de had not.', re: ["What made them change their minds?", '¿Qué les hizo cambiar de opinión?'] },
      { en: 'If she were here, she would help us.', es: 'Si ella estuviera aquí, nos ayudaría.', ej: 'If she were here, she would help us right away.', tip: 'If she were here (no was) porque es una situación incierta o hipotética.', re: ["I wish she were here too.", 'Ojalá también estuviera aquí.'] },
      { en: 'If she were here, she would be helping us.', es: 'Si ella estuviera aquí, nos estaría ayudando.', ej: 'If she were here, she would be helping us with this right now.', tip: 'El condicional continuo pone el foco en la acción en progreso, no solo en el resultado.', re: ["We could really use her help.", 'Nos vendría muy bien su ayuda.'] },
      { en: "I would be preparing the presentation if I didn't have this meeting.", es: 'Estaría preparando la presentación si no tuviera esta reunión.', ej: "I would be preparing the presentation if I didn't have this meeting.", tip: 'Would be + verbo-ing describe qué estarías haciendo en este momento en un escenario distinto.', re: ["I can help you prepare it later.", 'Te ayudo a prepararla más tarde.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'si tuviera más tiempo, viajaría más'?",
        a: 'If I had more time, I would travel more.',
        note: 'Condicional simple: would + verbo base para lo que pasaría en un escenario hipotético.'
      },
      {
        q: "¿Cómo dices 'si ella estuviera aquí, nos ayudaría'?",
        a: 'If she were here, she would help us.',
        note: 'If she were here (no was), porque es una situación hipotética.'
      },
      {
        q: "¿Cómo dices 'ella estaría trabajando aquí si no hubiera encontrado otro trabajo'?",
        a: "She would be working here if she hadn't found another job.",
        note: 'Condicional continuo (would be + verbo-ing) para lo que estaría ocurriendo en un escenario hipotético.'
      },
      {
        q: "¿Cómo dices 'si no estuviera tan ocupado, estaría estudiando para el examen ahora mismo'?",
        a: "If I weren't so busy, I would be studying for the exam right now.",
        note: 'Con el condicional usamos were en vez de was con I.'
      }
    ]
  },
  {
    num: '07',
    title: 'Modales de obligación: must, have to, should',
    items: [
      { en: 'You must wear a helmet when riding a motorcycle.', es: 'Debes usar un casco cuando conduces una motocicleta.', ej: "You must wear a helmet when riding a motorcycle, it's the law.", tip: 'Must expresa una obligación fuerte o una regla.', re: ["Safety first, always.", 'Seguridad primero, siempre.'] },
      { en: 'She must be at home, her car is in the driveway.', es: 'Ella debe estar en casa, su coche está en la entrada.', ej: 'She must be at home, her car is in the driveway.', tip: 'Must también se usa para hacer una suposición lógica muy segura.', re: ["Let's knock and see.", 'Toquemos y veamos.'] },
      { en: 'We must finish this report by Friday.', es: 'Debemos terminar este informe para el viernes.', ej: 'We must finish this report by Friday, no exceptions.', tip: 'Must transmite una obligación más fuerte y personal que have to.', re: ["Then let's get started now.", 'Entonces empecemos ahora.'] },
      { en: 'I have to wake up early tomorrow for work.', es: 'Tengo que levantarme temprano mañana para trabajar.', ej: 'I have to wake up early tomorrow for work, so I should sleep now.', tip: 'Have to se usa para obligaciones externas o responsabilidades diarias, algo más suave que must.', re: ["You should go to bed soon, then.", 'Deberías irte a dormir pronto, entonces.'] },
      { en: 'They have to submit the assignment by Monday.', es: 'Ellos tienen que entregar la tarea antes del lunes.', ej: 'They have to submit the assignment by Monday at the latest.', tip: 'Have to + verbo base, igual que must.', re: ["I hope they're almost done.", 'Espero que estén casi terminando.'] },
      { en: "We have to leave now or we'll miss the train.", es: 'Tenemos que irnos ahora o perderemos el tren.', ej: "We have to leave now or we'll miss the train.", tip: 'Have to describe una necesidad práctica, no una regla impuesta.', re: ["Let's go, grab your bag.", 'Vamos, coge tu bolso.'] },
      { en: 'You should eat more vegetables to stay healthy.', es: 'Deberías comer más verduras para mantenerte saludable.', ej: 'You should eat more vegetables to stay healthy.', tip: 'Should se usa para dar consejos o recomendaciones, no para obligar.', re: ["I know, I'll try to eat better.", 'Lo sé, intentaré comer mejor.'] },
      { en: 'He should apologize for being rude.', es: 'Él debería disculparse por ser grosero.', ej: 'He should apologize for being rude to the waiter.', tip: 'Should + verbo base expresa lo que sería correcto o recomendable hacer.', re: ["I agree, that was uncalled for.", 'Estoy de acuerdo, eso no venía al caso.'] },
      { en: 'They should study harder if they want to pass the exam.', es: 'Ellos deberían estudiar más si quieren aprobar el examen.', ej: 'They should study harder if they want to pass the exam.', tip: 'Should no implica una obligación estricta, solo una recomendación.', re: ["I'll remind them.", 'Se lo recuerdo.'] },
      { en: 'We should leave early to avoid the traffic.', es: 'Deberíamos irnos temprano para evitar el tráfico.', ej: 'We should leave early to avoid the traffic this afternoon.', tip: 'Should es el más suave de los tres: must, have to, should, en ese orden de intensidad.', re: ["Good idea, let's head out now.", 'Buena idea, salgamos ya.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'debes usar un casco cuando conduces una motocicleta', como una regla obligatoria?",
        a: 'You must wear a helmet when riding a motorcycle.',
        note: 'Must expresa una obligación fuerte o una regla.'
      },
      {
        q: "¿Cómo dices 'tengo que levantarme temprano mañana para trabajar'?",
        a: 'I have to wake up early tomorrow for work.',
        note: 'Have to se usa para obligaciones externas o responsabilidades diarias, más suave que must.'
      },
      {
        q: "¿Cómo dices 'deberías comer más verduras para mantenerte saludable', como un consejo?",
        a: 'You should eat more vegetables to stay healthy.',
        note: 'Should se usa para dar consejos o recomendaciones, no para obligar.'
      },
      {
        q: "¿Cómo dices 'deberíamos irnos temprano para evitar el tráfico'?",
        a: 'We should leave early to avoid the traffic.',
        note: 'Should es el más suave de los tres modales de obligación.'
      }
    ]
  },
  {
    num: '08',
    title: 'Modales de posibilidad: can, could, might, may',
    items: [
      { en: 'I can speak four languages.', es: 'Puedo hablar cuatro idiomas.', ej: 'I can speak four languages fluently.', tip: 'Can expresa habilidad o capacidad.', re: ["That's really impressive.", 'Eso es muy impresionante.'] },
      { en: 'She can swim very well.', es: 'Ella puede nadar muy bien.', ej: 'She can swim very well, she trains every day.', tip: 'Can también se usa para hablar de permiso, además de habilidad.', re: ["No wonder, she trains a lot.", 'No es de extrañar, entrena mucho.'] },
      { en: 'I could swim when I was five years old.', es: 'Yo podía nadar cuando tenía cinco años.', ej: 'I could swim when I was five years old.', tip: 'Could es el pasado de can, usado para habilidades que ya no tienes o tuviste antes.', re: ["That's early to learn.", 'Es temprano para aprender.'] },
      { en: 'Could you help me with this report?', es: '¿Podrías ayudarme con este informe?', ej: "Could you help me with this report? I'm a bit stuck.", tip: 'Could you...? es una forma muy educada de pedir algo.', re: ["Sure, let's take a look.", 'Claro, echemos un vistazo.'] },
      { en: 'We could go to the beach this weekend.', es: 'Podríamos ir a la playa este fin de semana.', ej: 'We could go to the beach this weekend if the weather is nice.', tip: 'Could aquí expresa una posibilidad o sugerencia, no el pasado de can.', re: ["I'd love that.", 'Me encantaría.'] },
      { en: "I might go to the party later, but I'm not sure.", es: 'Podría ir a la fiesta más tarde, pero no estoy seguro.', ej: "I might go to the party later, but I'm not sure yet.", tip: 'Might expresa una posibilidad más incierta que could o may.', re: ["Let me know if you decide.", 'Avísame si decides.'] },
      { en: "They might win the game, but it's going to be tough.", es: 'Ellos podrían ganar el partido, pero va a ser difícil.', ej: "They might win the game, but it's going to be tough.", tip: 'Might sugiere que algo es poco probable, aunque posible.', re: ["I'll be rooting for them.", 'Estaré animándolos.'] },
      { en: 'You may leave early today if you finish your tasks.', es: 'Puedes salir temprano hoy si terminas tus tareas.', ej: 'You may leave early today if you finish your tasks.', tip: 'May se usa en contextos más formales, tanto para posibilidad como para dar permiso.', re: ["Thank you, I'll try to finish soon.", 'Gracias, intentaré terminar pronto.'] },
      { en: 'It may rain later, so take an umbrella.', es: 'Puede que llueva más tarde, así que lleva un paraguas.', ej: 'It may rain later, so take an umbrella just in case.', tip: 'May indica una posibilidad más probable y formal que might.', re: ["Good call, I'll grab one.", 'Buena idea, cojo uno.'] },
      { en: 'He may ask for permission to leave the meeting.', es: 'Él podría pedir permiso para salir de la reunión.', ej: 'He may ask for permission to leave the meeting early.', tip: 'May + ask for permission es una estructura formal típica de ambientes profesionales.', re: ["That should be fine.", 'Eso debería estar bien.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'puedo hablar cuatro idiomas', hablando de una habilidad?",
        a: 'I can speak four languages.',
        note: 'Can expresa habilidad o capacidad.'
      },
      {
        q: "¿Cómo dices 'podríamos ir a la playa este fin de semana', como sugerencia?",
        a: 'We could go to the beach this weekend.',
        note: 'Could aquí expresa una posibilidad o sugerencia, no el pasado de can.'
      },
      {
        q: "¿Cómo dices 'podría ir a la fiesta más tarde, pero no estoy seguro', con mucha incertidumbre?",
        a: "I might go to the party later, but I'm not sure.",
        note: 'Might expresa una posibilidad más incierta que could o may.'
      },
      {
        q: "¿Cómo dices, en un contexto formal, 'puedes salir temprano hoy si terminas tus tareas'?",
        a: 'You may leave early today if you finish your tasks.',
        note: 'May se usa en contextos más formales, tanto para posibilidad como para dar permiso.'
      }
    ]
  },
  {
    num: '09',
    title: 'Voz pasiva',
    items: [
      { en: 'The meal was prepared by the chef.', es: 'La comida fue preparada por el chef.', ej: 'The meal was prepared by the chef himself.', tip: 'Voz pasiva: objeto + was/were + participio + by + el sujeto que realizó la acción.', re: ["It looked delicious.", 'Se veía delicioso.'] },
      { en: 'The book was written by the author.', es: 'El libro fue escrito por el autor.', ej: 'The book was written by the author over ten years.', tip: 'Written es el participio irregular de write.', re: ["Ten years is a long time.", 'Diez años es mucho tiempo.'] },
      { en: 'The car was repaired by the mechanic.', es: 'El coche fue reparado por el mecánico.', ej: 'The car was repaired by the mechanic in one afternoon.', tip: 'Was + participio para un sujeto singular en pasado.', re: ["That was fast.", 'Eso fue rápido.'] },
      { en: 'The cake was baked by Mary.', es: 'El pastel fue horneado por Mari.', ej: 'The cake was baked by Mary for the party.', tip: 'El foco está en el pastel (el objeto), no en quién lo horneó.', re: ["It looked amazing.", 'Se veía increíble.'] },
      { en: 'The letter was sent yesterday.', es: 'La carta fue enviada ayer.', ej: 'The letter was sent yesterday, it should arrive soon.', tip: 'El sujeto que realizó la acción puede omitirse si no es importante.', re: ["Good, I'll watch for it.", 'Bien, estaré pendiente.'] },
      { en: 'The problem was solved.', es: 'El problema fue resuelto.', ej: 'The problem was solved before anyone even noticed it.', tip: 'En muchos casos, quién resolvió el problema no se menciona porque no es relevante.', re: ["That's a relief.", 'Qué alivio.'] },
      { en: 'The lesson was explained by the teacher.', es: 'La lección fue explicada por el profesor.', ej: 'The lesson was explained by the teacher very clearly.', tip: 'Convertir "the teacher explained the lesson" a pasiva suena más formal y profesional.', re: ["Good, everyone understood it.", 'Bien, todos la entendieron.'] },
      { en: 'A new product was released by the company.', es: 'Un nuevo producto fue lanzado por la compañía.', ej: 'A new product was released by the company last month.', tip: 'Released es el participio de release, se usa igual en activa y pasiva.', re: ["Have you tried it yet?", '¿Ya lo probaste?'] },
      { en: 'The windows were cleaned yesterday.', es: 'Las ventanas fueron limpiadas ayer.', ej: 'The windows were cleaned yesterday, they look great now.', tip: 'Were + participio porque the windows es plural.', re: ["They really do look great.", 'Realmente se ven geniales.'] },
      { en: 'The emails were sent this morning.', es: 'Los correos electrónicos fueron enviados esta mañana.', ej: 'The emails were sent this morning to all the clients.', tip: 'Were, no was, porque emails es plural.', re: ["Good, let's wait for replies.", 'Bien, esperemos respuestas.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices en voz pasiva 'la comida fue preparada por el chef'?",
        a: 'The meal was prepared by the chef.',
        note: 'Voz pasiva: objeto + was/were + participio + by + quien realizó la acción.'
      },
      {
        q: "¿Cómo dices en voz pasiva 'el libro fue escrito por el autor'?",
        a: 'The book was written by the author.',
        note: 'Written es el participio irregular de write.'
      },
      {
        q: "¿Cómo dices en voz pasiva 'el problema fue resuelto', sin mencionar quién lo resolvió?",
        a: 'The problem was solved.',
        note: 'El sujeto que realizó la acción puede omitirse si no es importante.'
      },
      {
        q: "¿Cómo dices en voz pasiva 'las ventanas fueron limpiadas ayer'?",
        a: 'The windows were cleaned yesterday.',
        note: 'Were + participio porque the windows es plural.'
      }
    ]
  },
  {
    num: '10',
    title: 'Preposiciones de tiempo y lugar: in, on, at',
    items: [
      { en: 'I was born in 1994.', es: 'Nací en 1994.', ej: 'I was born in 1994, in the summer.', tip: 'In se usa para años y periodos largos.', re: ["That makes us close in age.", 'Eso nos hace cercanos en edad.'] },
      { en: 'She lives in New York.', es: 'Ella vive en Nueva York.', ej: 'She lives in New York, near Central Park.', tip: 'In se usa para ciudades, países y espacios cerrados.', re: ["I'd love to visit her there.", 'Me encantaría visitarla ahí.'] },
      { en: 'He was born in April.', es: 'Él nació en abril.', ej: 'He was born in April, right after winter ended.', tip: 'In también se usa con meses.', re: ["April is a lovely month.", 'Abril es un mes hermoso.'] },
      { en: 'The meeting is on Friday.', es: 'La reunión es el viernes.', ej: 'The meeting is on Friday morning.', tip: 'On se usa para días específicos de la semana.', re: ["I'll add it to my calendar.", 'Lo añado a mi calendario.'] },
      { en: 'They arrive on Friday.', es: 'Ellos llegan el viernes.', ej: "They arrive on Friday, so let's plan the pickup.", tip: 'On + día es la estructura fija para fechas concretas.', re: ["I'll pick them up.", 'Los recojo yo.'] },
      { en: 'I left my phone on the table.', es: 'Dejé mi teléfono en la mesa.', ej: 'I left my phone on the table by mistake.', tip: 'On se usa para superficies, como en el vocabulario básico.', re: ["It's still there.", 'Sigue ahí.'] },
      { en: 'He arrived at the station.', es: 'Él llegó a la estación.', ej: 'He arrived at the station five minutes early.', tip: 'At se usa para ubicaciones específicas y puntuales.', re: ["Good, he won't miss the train.", 'Bien, no perderá el tren.'] },
      { en: 'We will meet at 3 pm.', es: 'Nos reuniremos a las 3 pm.', ej: 'We will meet at 3 pm in the lobby.', tip: 'At se usa para horas exactas.', re: ["I'll be there on time.", 'Estaré ahí a tiempo.'] },
      { en: "I'll wait for you at the entrance.", es: 'Te esperaré en la entrada.', ej: "I'll wait for you at the entrance of the building.", tip: 'At the entrance es una ubicación puntual, no un área grande.', re: ["I'll find you there.", 'Te encuentro ahí.'] },
      { en: 'She works at a bank.', es: 'Ella trabaja en un banco.', ej: 'She works at a bank downtown.', tip: 'At + lugar de trabajo específico, aunque también se podría decir in a bank según el énfasis.', re: ["That sounds like a stable job.", 'Suena a un trabajo estable.'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'nací en 1994'?",
        a: 'I was born in 1994.',
        note: 'In se usa para años y periodos largos.'
      },
      {
        q: "¿Cómo dices 'la reunión es el viernes'?",
        a: 'The meeting is on Friday.',
        note: 'On se usa para días específicos de la semana.'
      },
      {
        q: "¿Cómo dices 'él llegó a la estación'?",
        a: 'He arrived at the station.',
        note: 'At se usa para ubicaciones específicas y puntuales.'
      },
      {
        q: "¿Cómo dices 'nos reuniremos a las 3 pm'?",
        a: 'We will meet at 3 pm.',
        note: 'At se usa para horas exactas.'
      }
    ]
  }
];
