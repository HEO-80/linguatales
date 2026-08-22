/* Frases hechas por nivel, en bloques de 10.
   Cada frase lleva su contestación natural (re): de ahí salen los juegos 06 y 07.
   `ej` y `tip` van verbatim del material del curso: no reescribir. */

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
  }
];

export const PHRASES = { 'EN/A1': EN_A1_PHRASES };
