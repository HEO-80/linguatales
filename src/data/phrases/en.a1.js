/**
 * LinguaTales — Frases hechas · Inglés A1
 * src/data/phrases/en.a1.js
 *
 * Frases hechas por nivel, en bloques de 10. Cada frase lleva su
 * contestación natural (re): de ahí salen los juegos 06 y 07.
 * `ej` y `tip` van verbatim del material del curso cuando el curso los
 * trae; donde el curso no daba `tip`, se ha escrito uno corto en la misma
 * voz. `re` (la contestación) no viene del curso — el curso solo da
 * frase+traducción+ejemplo+tip — así que es invención propia en todos los
 * bloques, coherente con el registro de cada frase.
 *
 * Las 300+ frases del curso se reparten ahora a lo largo de los seis
 * niveles de la app (A1→C2), no solo en los tres primeros: cada nivel del
 * curso ("NIVEL 1/2/3") se divide en dos mitades de ~50 frases cada una.
 * Este archivo es la primera mitad de NIVEL 1 (Frases Esenciales) — bloques
 * 01-05, incluidas las 20 frases esenciales originales (01-02). La segunda
 * mitad de NIVEL 1 vive en en.a2.js.
 */
export const EN_A1_PHRASES = [
  {
    num: '01',
    title: 'Saludos y despedidas',
    items: [
      { en: 'Hello.', es: 'Hola.', ej: 'Hello. Nice to meet you.', tip: 'No lo digas como un robot, hazlo con energía y con una sonrisa.', re: ['Hi! How are you?', '¡Hola! ¿Qué tal?'] },
      { en: 'Goodbye.', es: 'Adiós.', ej: 'Goodbye. See you tomorrow.', tip: 'Los americanos casi nunca dicen goodbye formal, prefieren bye o see ya.', re: ['Bye! See you.', '¡Adiós! Nos vemos.'] },
      { en: 'Nice to meet you.', es: 'Mucho gusto.', ej: 'Hi Sarah, nice to meet you.', tip: 'Solo se dice la primera vez. Después usa nice to see you again.', re: ['Nice to meet you too.', 'Mucho gusto igualmente.'] },
      { en: "It's a pleasure to meet you.", es: 'Es un placer conocerte.', ej: "Mr. Johnson. It's a pleasure to meet you.", tip: 'Más formal, para contextos profesionales o con gente mayor.', re: ['The pleasure is mine.', 'El placer es mío.'] },
      { en: 'See you later.', es: 'Hasta luego.', ej: 'I got to go. See you later.', tip: 'Contrae la frase a see ya later para sonar más natural.', re: ['See you later!', '¡Hasta luego!'] },
      { en: 'Take care.', es: 'Cuídate.', ej: 'Take care. Drive safely.', tip: 'Es más cálido que decir goodbye, muestra que te importa la persona.', re: ['You too, take care.', 'Tú también, cuídate.'] },
      { en: 'Good night.', es: 'Buenas noches.', ej: 'Good night, sleep well.', tip: 'Solo para despedirse; para saludar en la noche dices Good evening.', re: ['Good night, sleep well.', 'Buenas noches, que duermas bien.'] },
      { en: 'Have a nice day.', es: 'Que tengas un buen día.', ej: 'Thanks for your help. Have a nice day.', tip: 'Perfecta para cajeros, meseros o servicios.', re: ['You too, thanks!', 'Igualmente, ¡gracias!'] },
      { en: 'Have a good trip.', es: 'Buen viaje.', ej: 'Have a good trip. Text me when you arrive.', tip: 'También puedes decir have a safe trip.', re: ["Thanks, I'll text you.", 'Gracias, te escribo.'] },
      { en: 'See you soon.', es: 'Nos vemos pronto.', ej: "See you soon, can't wait.", tip: 'Muestra expectativa positiva de volver a ver a la persona.', re: ['See you soon!', '¡Nos vemos pronto!'] }
    ],
    test: {
      label: 'Test 1',
      q: '¿Qué dirías si quieres despedirte de alguien de manera cálida?',
      a: 'Take care.',
      note: 'Muestra que te importa la persona.'
    }
  },
  {
    num: '02',
    title: 'Cortesía y pedir ayuda',
    items: [
      { en: 'Thank you.', es: 'Gracias.', ej: 'Thank you so much for your help.', tip: 'Varía tu agradecimiento: thanks, thank you, thank you so much.', re: ["You're welcome.", 'De nada.'] },
      { en: "You're welcome.", es: 'De nada.', ej: "Thank you, you're welcome.", tip: 'También puedes decir no problem o my pleasure.', re: ['Thanks again.', 'Gracias otra vez.'] },
      { en: 'Please.', es: 'Por favor.', ej: 'Could you help me please?', tip: 'En inglés va al final, no al inicio como en español.', re: ['Sure, no problem.', 'Claro, sin problema.'] },
      { en: 'Excuse me.', es: 'Perdón o disculpe.', ej: 'Excuse me, where is the bathroom?', tip: 'Úsala para pedir atención o pasar entre personas.', re: ["It's right over there.", 'Está justo ahí.'] },
      { en: "I'm sorry.", es: 'Lo siento.', ej: "I'm sorry, I didn't hear you.", tip: 'Sorry a secas es más casual.', re: ["It's okay, no worries.", 'Está bien, no pasa nada.'] },
      { en: "It's okay.", es: 'Está bien.', ej: "I'm sorry, I'm late. → It's okay, no worries.", tip: "También puedes decir It's fine o No problem.", re: ['Thanks for understanding.', 'Gracias por entender.'] },
      { en: "I don't understand.", es: 'No entiendo.', ej: "I don't understand. Can you repeat?", tip: 'Súper útil cuando aprendes, no tengas miedo de usarlo.', re: ['Let me say it again.', 'Te lo repito.'] },
      { en: 'Can you help me?', es: '¿Puedes ayudarme?', ej: 'Can you help me with this?', tip: 'Más educado que decir help me. Si quieres ser más amable, di could you help me?', re: ['Of course, what do you need?', 'Claro, ¿qué necesitas?'] },
      { en: 'I need help.', es: 'Necesito ayuda.', ej: 'I need help with my computer.', tip: 'Directo y claro, perfecto para emergencias.', re: ["I'm on my way.", 'Voy para allá.'] },
      { en: "Don't worry.", es: 'No te preocupes.', ej: "Don't worry, everything will be fine.", tip: 'Muy buena porque tranquiliza y muestra apoyo.', re: ['Thanks, I feel better.', 'Gracias, me siento mejor.'] }
    ],
    test: {
      label: 'Pausa mental',
      q: 'Si estás en el supermercado y necesitas que alguien se quite para pasar, ¿qué dices?',
      a: 'Excuse me.',
      note: 'Si lo recordaste sin pensar, tu cerebro está absorbiendo el idioma hacia la memoria a largo plazo.'
    }
  },
  {
    num: '03',
    title: 'Sensaciones y estados',
    items: [
      { en: "I'm hungry.", es: 'Tengo hambre.', ej: "I'm hungry. Let's grab something to eat.", tip: 'Los americanos no dicen I have hunger; para sensaciones físicas usan I am (yo soy/estoy).', re: ["Let's grab something to eat.", 'Vamos a comer algo.'] },
      { en: "I'm thirsty.", es: 'Tengo sed.', ej: "I'm thirsty. Do you have water?", tip: 'Igual que con el hambre, no se dice I have thirst.', re: ["Sure, here's some water.", 'Claro, aquí tienes agua.'] },
      { en: "I'm tired.", es: 'Estoy cansado/a.', ej: "I'm tired. Let's go home.", tip: 'Pronunciación: alarga la vocal (taaird), no digas tired tal como se lee.', re: ["Let's rest for a bit.", 'Descansemos un rato.'] },
      { en: "I'm not feeling well.", es: 'No me encuentro bien.', ej: "I'm not feeling well. I might go home early.", tip: 'Más educado que decir sick, sobre todo en el trabajo.', re: ['Do you need anything?', '¿Necesitas algo?'] },
      { en: "I'm excited.", es: 'Estoy emocionado/a.', ej: "I'm excited about the trip.", tip: 'Es una emoción positiva, no significa "excitado". Para nervios usa nervous.', re: ["Me too! It's going to be great.", '¡Yo también! Va a ser genial.'] },
      { en: "I'm just kidding.", es: 'Solo estoy bromeando.', ej: "You're the worst. Ah, just kidding, you're great.", tip: 'Esencial para el humor americano para aclarar bromas.', re: ['Ha, you got me!', '¡Ja, me la creí!'] },
      { en: "I'm so proud of you.", es: 'Estoy muy orgulloso/a de ti.', ej: 'You got the job. I\'m so proud of you.', tip: 'También puedes decir I\'m proud of you, sin el so, si quieres sonar menos intenso.', re: ['Thank you, that means a lot.', 'Gracias, significa mucho.'] },
      { en: "I'm on a diet.", es: 'Estoy a dieta.', ej: 'No cake for me. I\'m on a diet.', tip: 'Buena excusa para rechazar comida sin ser grosero.', re: ['No worries, more for me!', 'No pasa nada, ¡más para mí!'] },
      { en: 'I have a cold.', es: 'Tengo un resfriado.', ej: "I have a cold. So I'll work from home.", tip: "No digas I'm cold (tengo frío).", re: ['Get well soon.', 'Que te mejores pronto.'] },
      { en: 'I feel a bit dizzy.', es: 'Me siento un poco mareado.', ej: 'I feel a bit dizzy. I need to sit down.', tip: 'A bit (un poco) suaviza la intensidad.', re: ["Sit down, I'll get you some water.", 'Siéntate, te traigo agua.'] }
    ],
    tests: [
      {
        q: 'Llevas horas sin comer y te suena el estómago, ¿qué dices?',
        a: "I'm hungry.",
        note: 'La estructura I\'m + adjetivo es la más natural para sensaciones físicas.'
      }
    ]
  },
  {
    num: '04',
    title: 'Tengo algo que decir',
    items: [
      { en: 'I have a reservation.', es: 'Tengo una reserva.', ej: 'Hi, I have a reservation under Smith.', tip: "Under + nombre es como se dice 'a nombre de' en reservas.", re: ['Let me check that for you.', 'Déjame revisarlo.'] },
      { en: 'I have a question.', es: 'Tengo una pregunta.', ej: 'Excuse me. I have a question about this.', tip: 'Manera educada de interrumpir para preguntar.', re: ['Sure, go ahead.', 'Claro, adelante.'] },
      { en: 'I have a suggestion.', es: 'Tengo una sugerencia.', ej: 'I have a suggestion for improving this.', tip: 'Profesional y constructiva.', re: ["I'm listening.", 'Te escucho.'] },
      { en: 'I have a meeting.', es: 'Tengo una reunión.', ej: 'I have a meeting at 3 pm.', tip: 'Excusa perfecta para salir de una conversación.', re: ['No problem, talk later.', 'No hay problema, hablamos luego.'] },
      { en: 'I have a deadline.', es: 'Tengo una fecha límite.', ej: 'I have a deadline tomorrow. I need to focus.', tip: 'Deadline se pronuncia como una sola palabra, sin pausa.', re: ["Good luck, you've got this.", 'Suerte, tú puedes.'] },
      { en: 'How are you?', es: '¿Cómo estás?', ej: "Hey, John. How are you? → I'm good. How are you?", tip: 'Devuelve siempre la pregunta, es de mala educación no hacerlo.', re: ["I'm good, thanks!", 'Bien, ¡gracias!'] },
      { en: "What's your name?", es: '¿Cuál es tu nombre?', ej: "I'm Sarah. What's your name?", tip: 'Si lo olvidaste, di "What\'s your name again?" (Súper educado).', re: ["I'm Alex, nice to meet you.", 'Soy Alex, mucho gusto.'] },
      { en: 'Where are you from?', es: '¿De dónde eres?', ej: 'Where are you from originally?', tip: 'Útil para gente que se ha mudado.', re: ["I'm from Spain.", 'Soy de España.'] },
      { en: "What's your favorite food?", es: '¿Cuál es tu comida favorita?', ej: "What's your favorite food from your country?", tip: 'Buena pregunta para romper el hielo en una comida.', re: ['I love pasta.', 'Me encanta la pasta.'] },
      { en: "What's your favorite color?", es: '¿Cuál es tu color favorito?', ej: "What's your favorite color for decorating?", tip: 'Pregunta clásica, fácil de contestar en cualquier nivel.', re: ['Blue, definitely.', 'Azul, sin duda.'] }
    ],
    tests: [
      {
        q: 'Quieres saber de dónde es alguien que acabas de conocer, ¿qué preguntas?',
        a: 'Where are you from?',
        note: 'Útil para gente que se ha mudado.'
      }
    ]
  },
  {
    num: '05',
    title: 'Preguntas de cada día',
    items: [
      { en: "What's your favorite movie?", es: '¿Cuál es tu película favorita?', ej: "What's your favorite movie of all time?", tip: "Of all time añade énfasis: 'de todos los tiempos'.", re: ['It\'s hard to choose, but Titanic.', 'Es difícil elegir, pero Titanic.'] },
      { en: "What's your favorite book?", es: '¿Cuál es tu libro favorito?', ej: "What's your favorite book you've read recently?", tip: "Recently (recientemente) invita a hablar de algo actual.", re: ['I just finished a great mystery novel.', 'Acabo de terminar una gran novela de misterio.'] },
      { en: 'What time is it?', es: '¿Qué hora es?', ej: 'Excuse me. What time is it?', tip: 'Buena frase para conversación casual aunque tengas móvil.', re: ["It's almost three.", 'Son casi las tres.'] },
      { en: 'How much does it cost?', es: '¿Cuánto cuesta?', ej: 'How much does this shirt cost?', tip: 'También puedes decir "How much is this?" (Más directo).', re: ["It's twenty dollars.", 'Son veinte dólares.'] },
      { en: 'How long will it take?', es: '¿Cuánto tiempo llevará?', ej: 'How long will it take to get there?', tip: "Take aquí significa 'tardar', no 'tomar'.", re: ['About twenty minutes.', 'Unos veinte minutos.'] },
      { en: 'What do you do for a living?', es: '¿A qué te dedicas?', ej: "What do you do for a living? I'm curious.", tip: 'También puedes decir simplemente What do you do?', re: ["I'm a teacher.", 'Soy profesor.'] },
      { en: 'What are you doing?', es: '¿Qué estás haciendo?', ej: 'What are you doing this weekend?', tip: 'Present continuous: -ing describe una acción en curso o un plan cercano.', re: ['Just relaxing at home.', 'Solo relajándome en casa.'] },
      { en: 'What day is it today?', es: '¿Qué día es hoy?', ej: "I'm so tired. What day is it today?", tip: 'Frase típica cuando pierdes la noción de los días.', re: ["It's Tuesday.", 'Es martes.'] },
      { en: 'What do you like to do?', es: '¿Qué te gusta hacer?', ej: 'What do you like to do for fun?', tip: 'Añade for fun para preguntar por pasatiempos concretos.', re: ['I like to read and travel.', 'Me gusta leer y viajar.'] },
      { en: 'What are your plans for the weekend?', es: '¿Qué planes tienes para el fin de semana?', ej: 'What are your plans for the weekend? Anything fun?', tip: 'Pregunta perfecta para el viernes en la oficina.', re: ['Nothing special, just resting.', 'Nada especial, solo descansar.'] }
    ],
    tests: [
      {
        q: '¿Cómo preguntas el precio de algo?',
        a: 'How much does it cost?',
        note: 'También puedes decir How much is this? — la primera es más formal, la segunda más casual.'
      }
    ]
  }
];
