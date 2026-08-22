/**
 * LinguaTales — Frases hechas · Inglés C2
 * src/data/phrases/en.c2.js
 *
 * Segunda mitad de "NIVEL 3: Frases Avanzadas" del curso (bloques 06-11 del
 * antiguo en.b1.js, renumerados 01-06 aquí; el último conserva sus 7 ítems)
 * — la primera mitad vive en en.c1.js. Cierra el reparto de las 300+ frases
 * a lo largo de los seis niveles de la app.
 *
 * `ej` y `tip` van verbatim del material del curso cuando el curso los
 * trae; donde no daba `tip`, se ha escrito uno corto en la misma voz. `re`
 * (la contestación) no viene del curso — es invención propia en todos los
 * bloques, coherente con el registro de cada frase.
 *
 * Nota: todavía no hay ningún relato C2 en el catálogo (src/data/stories),
 * así que este nivel no es alcanzable aún desde ninguna ruta de la app —
 * misma situación que B1/B2/C1 y los conectores de niveles altos añadidos
 * en sesiones anteriores. Los datos están listos para cuando exista esa
 * historia.
 */
export const EN_C2_PHRASES = [
  {
    num: '01',
    title: 'Naturaleza',
    items: [
      { en: 'The forest is quiet.', es: 'El bosque es tranquilo.', ej: "The forest is quiet. It's perfect for meditation.", tip: 'Quiet describe silencio y calma a la vez.', re: ['Sounds like the perfect getaway.', 'Suena a la escapada perfecta.'] },
      { en: "It's snowing.", es: 'Está nevando.', ej: "It's snowing heavily. Be careful driving.", tip: 'Heavily intensifica el verbo, "con fuerza".', re: ["I'll drive slowly.", 'Conduciré despacio.'] },
      { en: 'Look at the stars.', es: 'Mira las estrellas.', ej: 'Look at the stars. The Big Dipper.', tip: 'The Big Dipper es la constelación conocida como "la Osa Mayor".', re: ['Wow, so many tonight.', 'Vaya, cuántas esta noche.'] },
      { en: 'The sunset is amazing.', es: 'El atardecer es increíble.', ej: "The sunset is amazing tonight. Let's watch it together.", tip: 'Sunset (atardecer) y sunrise (amanecer) no se confunden entre sí.', re: ["I wouldn't miss it.", 'No me lo perdería.'] },
      { en: "Don't litter.", es: 'No tires basura.', ej: "Don't litter. Let's keep this place clean.", tip: 'Litter significa tirar basura al suelo.', re: ["You're right, let's clean up.", 'Tienes razón, limpiemos.'] },
      { en: 'I updated the app.', es: 'Actualicé la aplicación.', ej: 'I updated the app. Now it works much better.', tip: 'Update es "actualizar"; upgrade es "mejorar de versión".', re: ["Good, glad it's fixed.", 'Bien, me alegra que esté arreglado.'] },
      { en: 'The screen is frozen.', es: 'La pantalla está congelada.', ej: 'The screen is frozen. I need to restart my phone.', tip: 'Frozen aquí significa "bloqueada", no literalmente helada.', re: ['Try turning it off and on.', 'Intenta apagarlo y encenderlo.'] },
      { en: 'Restart your device.', es: 'Reinicia tu dispositivo.', ej: 'Restart your device. That usually fixes the problem.', tip: 'Usually fixes the problem es el consejo clásico de soporte técnico.', re: ['Okay, restarting now.', 'Vale, reiniciando ahora.'] },
      { en: "It's downloading.", es: 'Está descargando.', ej: "It's downloading. It will take about five minutes.", tip: 'Download (descargar) vs upload (subir).', re: ["I'll wait, no rush.", 'Espero, no hay prisa.'] },
      { en: 'The battery is low.', es: 'La batería está baja.', ej: 'The battery is low. I need to find a charger.', tip: 'Low battery es la expresión estándar, no small battery.', re: ["There's a charger in my bag.", 'Hay un cargador en mi bolso.'] }
    ],
    tests: [
      {
        q: 'Tu móvil no tiene batería y necesitas encontrar dónde cargarlo, ¿qué dices?',
        a: 'The battery is low.',
        note: 'Low battery es la expresión estándar, no small battery.'
      }
    ]
  },
  {
    num: '02',
    title: 'Tecnología y quedadas',
    items: [
      { en: 'The app keeps crashing.', es: 'La app se sigue cerrando.', ej: 'The app keeps crashing every time I open it.', tip: 'Keep + -ing describe algo que se repite, aquí de forma molesta.', re: ['Try reinstalling it.', 'Intenta reinstalarla.'] },
      { en: 'Turn on Bluetooth.', es: 'Enciende el Bluetooth.', ej: 'Turn on Bluetooth so we can connect.', tip: 'Turn on/off funciona igual para cualquier función del móvil.', re: ['Done, can you see my device?', 'Listo, ¿ves mi dispositivo?'] },
      { en: 'I forgot my password.', es: 'Olvidé mi contraseña.', ej: 'I forgot my password. How can I reset it?', tip: 'Reset a password es "restablecer una contraseña".', re: ["Click 'forgot password' below.", "Haz clic en 'olvidé mi contraseña' abajo."] },
      { en: "The file won't open.", es: 'El archivo no se abre.', ej: "The file won't open. Maybe it's corrupted.", tip: 'Won\'t es la contracción de will not, indica una negativa persistente.', re: ['Try a different program.', 'Prueba con otro programa.'] },
      { en: 'Check your internet connection.', es: 'Revisa tu conexión a internet.', ej: "Check your internet connection. It isn't loading.", tip: 'Isn\'t loading es "no está cargando".', re: ['Good idea, let me check.', 'Buena idea, déjame revisar.'] },
      { en: "Let's grab a coffee.", es: 'Tomemos un café.', ej: "Let's grab a coffee and catch up on everything.", tip: 'Los nativos usan "grab" (Let\'s grab lunch / a beer) todo el tiempo. Es pura magia social.', re: ["I'd love that, when works for you?", 'Me encantaría, ¿cuándo te viene bien?'] },
      { en: 'Want to hang out?', es: '¿Quieres salir?', ej: 'Want to hang out this weekend? We could go to the movies.', tip: 'Hang out es un plan informal, sin nada específico planeado.', re: ['Sure, sounds fun.', 'Claro, suena divertido.'] },
      { en: 'I had a great conversation.', es: 'Tuve una gran conversación.', ej: 'I had a great conversation with my neighbor today.', tip: 'Have a conversation, no make a conversation.', re: ["That's always a nice surprise.", 'Eso siempre es una bonita sorpresa.'] },
      { en: "I don't feel like going out.", es: 'No tengo ganas de salir.', ej: "I don't feel like going out tonight. Let's stay in.", tip: 'Feel like + -ing expresa ganas (o falta de ganas) de hacer algo.', re: ["That's fine, let's stay in then.", 'Está bien, quedémonos entonces.'] },
      { en: 'We should meet more often.', es: 'Deberíamos vernos más seguido.', ej: "We should meet more often, it's been too long.", tip: 'Should suaviza una sugerencia, no es una orden.', re: ['I completely agree.', 'Estoy totalmente de acuerdo.'] }
    ],
    tests: [
      {
        q: 'Quieres proponerle a un amigo un plan informal para verse pronto, ¿qué dices?',
        a: 'Want to hang out?',
        note: 'Súper casual, perfecta para amigos cercanos.'
      },
      {
        q: 'Quieres quedar con un amigo para charlar y ponerte al día, ¿qué le dices?',
        a: "Let's grab a coffee.",
        note: 'Los nativos usan "grab" (Let\'s grab lunch / a beer) todo el tiempo. Es pura magia social.'
      }
    ]
  },
  {
    num: '03',
    title: 'Metas y sueños',
    items: [
      { en: 'Do you want to come over?', es: '¿Quieres venir a mi casa?', ej: "Do you wanna come over? I'm making dinner.", tip: 'Come over significa "venir a casa de alguien".', re: ["I'd love to, what time?", 'Me encantaría, ¿a qué hora?'] },
      { en: 'It was nice seeing you.', es: 'Fue un gusto verte.', ej: "It was nice seeing you. Let's do this again soon.", tip: 'Frase de despedida cálida, típica al terminar un plan.', re: ['Likewise, take care.', 'Igualmente, cuídate.'] },
      { en: "Let's keep in touch.", es: 'Mantengámonos en contacto.', ej: "Let's keep in touch. Here's my number.", tip: 'Keep in touch es "mantener el contacto", no keep contact.', re: ["Definitely, I'll text you.", 'Por supuesto, te escribo.'] },
      { en: "That's hilarious.", es: 'Eso es divertidísimo.', ej: "That's hilarious. You always make me laugh.", tip: 'Hilarious es más fuerte que funny.', re: ['Glad I could make you laugh.', 'Me alegra haberte hecho reír.'] },
      { en: 'I totally agree.', es: 'Estoy totalmente de acuerdo.', ej: 'I totally agree. That movie was incredible.', tip: 'Totally intensifica el acuerdo, muy común en habla informal.', re: ["Great, glad we're on the same page.", 'Genial, me alegra que pensemos igual.'] },
      { en: 'I have big dreams.', es: 'Tengo sueños grandes.', ej: "I have big dreams and I'm working hard to achieve them.", tip: 'Big dreams transmite ambición genuina.', re: ["I believe you'll achieve them.", 'Creo que los lograrás.'] },
      { en: "I'm working hard.", es: 'Estoy trabajando duro.', ej: "I'm working hard to improve my English skills.", tip: 'Work hard, no work hardly (que significaría "apenas trabajar").', re: ["It's paying off, keep going.", 'Está dando frutos, sigue así.'] },
      { en: 'I want to succeed.', es: 'Quiero tener éxito.', ej: 'I want to succeed in my new business.', tip: 'Succeed es el verbo; success es el sustantivo.', re: ['You will, I have no doubt.', 'Lo lograrás, no tengo duda.'] },
      { en: 'I need to stay focused.', es: 'Necesito mantenerme enfocado.', ej: 'I need to stay focused on my goals.', tip: 'Stay + adjetivo describe mantener un estado.', re: ["You're doing a great job at that.", 'Lo estás haciendo genial en eso.'] },
      { en: "I'm not giving up.", es: 'No me voy a rendir.', ej: "I'm not giving up even though it's difficult.", tip: 'Give up es "rendirse"; nunca lo confundas con give in (ceder).', re: ["That's the spirit.", 'Ese es el espíritu.'] }
    ],
    tests: [
      {
        q: 'Un amigo se despide después de un buen rato juntos, ¿qué le dices?',
        a: 'It was nice seeing you.',
        note: 'Frase de despedida cálida, típica al terminar un plan.'
      }
    ]
  },
  {
    num: '04',
    title: 'Avanzando',
    items: [
      { en: 'One step at a time.', es: 'Un paso a la vez.', ej: "One step at a time. You'll get there eventually.", tip: 'Frase motivacional muy usada para bajar la presión de un objetivo grande.', re: ["You're right, no need to rush.", 'Tienes razón, no hay que apresurarse.'] },
      { en: 'I believe in myself.', es: 'Creo en mí mismo.', ej: 'I believe in myself, even when things get hard.', tip: 'Believe in myself/yourself/himself cambia según la persona.', re: ["That confidence will take you far.", 'Esa confianza te llevará lejos.'] },
      { en: "I'm setting new goals.", es: 'Estoy estableciendo nuevas metas.', ej: "I'm setting new goals for the next year.", tip: 'Set a goal es la colocación fija para "fijar una meta".', re: ["That's a great way to start the year.", 'Es una gran forma de empezar el año.'] },
      { en: 'Keep pushing forward.', es: 'Sigue avanzando.', ej: "Keep pushing forward. You're almost there.", tip: 'Push forward transmite esfuerzo constante hacia adelante.', re: ['Thanks, I needed that push.', 'Gracias, necesitaba ese empujón.'] },
      { en: "I'm proud of my progress.", es: 'Estoy orgulloso de mi progreso.', ej: "I'm proud of my progress in learning English.", tip: 'Progress es incontable, no se dice a progress.', re: ["You should be, you've come far.", 'Deberías estarlo, has avanzado mucho.'] },
      { en: "Let's circle back.", es: 'Volvamos a esto después.', ej: 'Let\'s circle back on this topic next week.', tip: 'Es súper elegante, como de CEO. En lugar del aburrido let\'s talk about this later.', re: ["Sounds good, I'll note it down.", 'Suena bien, lo anoto.'] },
      { en: "That's not allowed.", es: 'Eso no está permitido.', ej: "That's not allowed in this building. Sorry.", tip: 'Allowed es "permitido"; su opuesto es forbidden o prohibited.', re: ['Got it, sorry about that.', 'Entendido, perdón por eso.'] },
      { en: "It's up to you.", es: 'Depende de ti.', ej: "It's up to you. I'm fine with either option.", tip: 'Up to you deja la decisión completamente en manos del otro.', re: ['Okay, let me think about it.', 'Vale, déjame pensarlo.'] },
      { en: "Let's wait and see.", es: 'Esperemos a ver.', ej: "Let's wait and see how the weather turns out.", tip: 'Wait and see es una expresión fija para "ser paciente".', re: ['Good idea, no rush.', 'Buena idea, sin prisa.'] },
      { en: "Time's up.", es: 'Se acabó el tiempo.', ej: "Time's up. Please submit your answers.", tip: 'Time\'s up es la contracción de Time is up.', re: ['Already? That went fast.', '¿Ya? Qué rápido pasó.'] }
    ],
    tests: [
      {
        q: 'Estás animando a alguien que se siente abrumado por una meta grande, ¿qué le dices?',
        a: 'One step at a time.',
        note: 'Frase motivacional muy usada para bajar la presión de un objetivo grande.'
      },
      {
        q: '¿Cómo dices que algo no está permitido de manera educada?',
        a: "That's not allowed.",
        note: 'Allowed es "permitido"; su opuesto es forbidden o prohibited.'
      }
    ]
  },
  {
    num: '05',
    title: 'Últimos detalles',
    items: [
      { en: "That's enough.", es: 'Ya es suficiente.', ej: "That's enough. Let's stop arguing.", tip: 'Frase firme para poner fin a algo, sin sonar agresiva.', re: ["You're right, let's stop.", 'Tienes razón, paremos.'] },
      { en: 'Be careful.', es: 'Ten cuidado.', ej: "Be careful with that glass. It's fragile.", tip: 'Be careful with + objeto específico.', re: ['I will, thanks for the warning.', 'Lo tendré, gracias por avisar.'] },
      { en: 'Watch your step.', es: 'Mira por dónde caminas.', ej: 'Watch your step. The floor is wet.', tip: 'Watch your step es una advertencia común en lugares públicos.', re: ['Thanks for the heads up.', 'Gracias por el aviso.'] },
      { en: "I'm almost done.", es: 'Ya casi termino.', ej: "I'm almost done with this report. Five more minutes.", tip: 'Almost done indica que falta muy poco.', re: ['No rush, take your time.', 'Sin prisa, tómate tu tiempo.'] },
      { en: "I'm running late.", es: 'Estoy llegando tarde.', ej: "I'm running late. Can we reschedule?", tip: 'Running late es más natural que I\'m late a secas.', re: ["No worries, let's push it back.", 'No pasa nada, lo posponemos.'] },
      { en: "I'm ready.", es: 'Estoy listo o lista.', ej: "I'm ready. Let's go.", tip: 'Frase corta y directa antes de empezar algo.', re: ["Great, let's head out.", 'Genial, vámonos.'] },
      { en: "Let's get started.", es: 'Vamos a comenzar.', ej: "Let's get started. We have a lot to cover today.", tip: 'Get started es más dinámico que simplemente start.', re: ['Sounds good, where do we begin?', 'Suena bien, ¿por dónde empezamos?'] },
      { en: "That's interesting.", es: 'Eso es interesante.', ej: "That's interesting. Tell me more about it.", tip: 'Tell me more about it invita a seguir la conversación.', re: ['Sure, let me explain.', 'Claro, déjame explicarte.'] },
      { en: 'That makes sense.', es: 'Eso tiene sentido.', ej: 'That makes sense. Now I understand better.', tip: 'Make sense es "tener sentido", no make sentido.', re: ["Glad it's clearer now.", 'Me alegra que esté más claro ahora.'] },
      { en: 'Just a moment.', es: 'Solo un momento.', ej: 'Just a moment. Let me check my calendar.', tip: 'Just a moment es más formal que un segundo (one sec).', re: ['Take your time.', 'Tómate tu tiempo.'] }
    ],
    tests: [
      {
        q: 'Vas a llegar tarde a una cita y quieres avisar, ¿qué dices?',
        a: "I'm running late.",
        note: "Running late es más natural que I'm late a secas."
      }
    ]
  },
  {
    num: '06',
    title: 'Para cerrar',
    items: [
      { en: 'I changed my mind.', es: 'Cambié de opinión.', ej: "I changed my mind. Let's go to the other restaurant.", tip: 'Change my mind, no change my opinion, cuando hablas de decisiones.', re: ["No problem, let's go there instead.", 'Sin problema, vayamos allí entonces.'] },
      { en: 'Let me think.', es: 'Déjame pensar.', ej: "Let me think about it. I'll get back to you.", tip: 'I\'ll get back to you significa "te contesto luego".', re: ['Take all the time you need.', 'Tómate todo el tiempo que necesites.'] },
      { en: "It's not a big deal.", es: 'No es gran cosa.', ej: "It's not a big deal. We can fix it easily.", tip: 'Quita presión sin sonar cortante.', re: ['Okay, thanks for understanding.', 'Vale, gracias por entenderlo.'] },
      { en: "I'm in a hurry.", es: 'Tengo prisa.', ej: "I'm in a hurry. Can we talk later?", tip: 'In a hurry es "con prisa"; hurry up es "date prisa".', re: ['Sure, go ahead, we\'ll talk later.', 'Claro, ve, hablamos luego.'] },
      { en: "That's strange.", es: 'Eso es extraño.', ej: "That's strange. It was working fine yesterday.", tip: 'Strange y weird son casi intercambiables en este uso.', re: ['Yeah, that is odd.', 'Sí, es raro.'] },
      { en: "You're doing great.", es: 'Lo estás haciendo muy bien.', ej: "You're doing great. Keep up the good work.", tip: 'Keep up the good work anima a seguir con el mismo esfuerzo.', re: ['Thank you, that means a lot.', 'Gracias, significa mucho.'] },
      { en: "I'm all ears.", es: 'Te escucho completamente.', ej: "You want to talk? I'm all ears.", tip: 'Es visual y amigable. Siente la gente que realmente te importa lo que van a decir.', re: ["Okay, here's what happened.", 'Vale, esto es lo que pasó.'] }
    ],
    tests: [
      {
        q: 'Quieres tranquilizar a alguien que se disculpa demasiado por un error pequeño, ¿qué dices?',
        a: "It's not a big deal.",
        note: 'Quita presión sin sonar cortante.'
      }
    ]
  }
];
