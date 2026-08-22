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
  }
];
