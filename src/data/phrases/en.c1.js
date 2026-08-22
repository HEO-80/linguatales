/**
 * LinguaTales — Frases hechas · Inglés C1
 * src/data/phrases/en.c1.js
 *
 * Primera mitad de "NIVEL 3: Frases Avanzadas" del curso (bloques 01-05 del
 * antiguo en.b1.js) — la segunda mitad vive en en.c2.js. Mismo reparto de
 * las 300+ frases a lo largo de los seis niveles de la app.
 *
 * `ej` y `tip` van verbatim del material del curso cuando el curso los
 * trae; donde no daba `tip`, se ha escrito uno corto en la misma voz. `re`
 * (la contestación) no viene del curso — es invención propia en todos los
 * bloques, coherente con el registro de cada frase.
 *
 * Nota: todavía no hay ningún relato C1 en el catálogo (src/data/stories),
 * así que este nivel no es alcanzable aún desde ninguna ruta de la app —
 * misma situación que B1/B2 y los conectores de niveles altos añadidos en
 * sesiones anteriores. Los datos están listos para cuando exista esa historia.
 */
export const EN_C1_PHRASES = [
  {
    num: '01',
    title: 'De compras',
    items: [
      { en: 'I feel proud of myself.', es: 'Me siento orgulloso de mí mismo.', ej: 'I feel proud of myself for finishing the marathon.', tip: 'Proud of myself/yourself/himself: el reflexivo cambia según la persona.', re: ["You should be, that's a huge achievement.", 'Deberías estarlo, es un gran logro.'] },
      { en: "I'm in a good mood.", es: 'Estoy de buen humor.', ej: "I'm in a good mood. Let's do something fun.", tip: 'In a good/bad mood es la estructura fija para el estado de ánimo.', re: ["Let's take advantage of it.", 'Aprovechémoslo.'] },
      { en: "I'm overwhelmed.", es: 'Estoy abrumado.', ej: "I'm overwhelmed with work. I need help.", tip: 'Overwhelmed describe sentirte desbordado, más fuerte que busy.', re: ['Let me know how I can help.', 'Dime cómo puedo ayudar.'] },
      { en: "I'm beat.", es: 'Estoy agotado.', ej: "I worked 12 hours today. I'm beat.", tip: 'Es más coloquial que I\'m tired. Úsalo solo con amigos cercanos (nunca con tu jefe), suenas muy avanzado.', re: ['Go home and rest.', 'Vete a casa y descansa.'] },
      { en: 'How much is this?', es: '¿Cuánto cuesta esto?', ej: 'How much is this jacket? It doesn\'t have a price tag.', tip: 'Price tag es la etiqueta con el precio.', re: ['Let me check for you.', 'Déjame comprobarlo.'] },
      { en: "I'm just looking. Thanks.", es: 'Solo estoy mirando. Gracias.', ej: "I'm just looking. I'll let you know if I need help.", tip: 'Frase clave para no sentirte presionado a comprar.', re: ['Take your time.', 'Tómate tu tiempo.'] },
      { en: 'Do you have this in another size?', es: '¿Lo tienes en otra talla?', ej: 'Do you have this in a medium? This large is too big.', tip: 'Size en EE. UU. suele diferir de las tallas europeas.', re: ['Let me check in the back.', 'Déjame revisar en el almacén.'] },
      { en: 'Where is the fitting room?', es: '¿Dónde está el probador?', ej: "Where is the fitting room? I'd like to try this on.", tip: 'Fitting room también se dice changing room en inglés británico.', re: ["It's right over there.", 'Está justo allí.'] },
      { en: "I'd like to return this.", es: 'Quisiera devolver esto.', ej: "I'd like to return this. I have the receipt.", tip: 'Guarda siempre el receipt (recibo) por si necesitas devolver algo.', re: ['Do you have your receipt?', '¿Tienes tu recibo?'] },
      { en: "I'll take it.", es: 'Me lo llevo.', ej: "I'll take it. Can you wrap it as a gift?", tip: 'Frase corta para confirmar una compra.', re: ["Great choice, I'll wrap it up.", 'Buena elección, te lo envuelvo.'] }
    ],
    tests: [
      {
        q: 'Un vendedor se acerca a preguntarte si necesitas ayuda, pero solo quieres mirar, ¿qué dices?',
        a: "I'm just looking. Thanks.",
        note: 'Frase clave para no sentirte presionado a comprar.'
      },
      {
        q: '¿Qué dices cuando decides comprar algo?',
        a: "I'll take it.",
        note: 'Frase corta para confirmar una compra.'
      }
    ]
  },
  {
    num: '02',
    title: 'Comprando con cabeza',
    items: [
      { en: 'Can I pay in cash?', es: '¿Puedo pagar en efectivo?', ej: 'Can I pay in cash or do you prefer card?', tip: 'Cash es "efectivo"; no lo confundas con change (cambio/vuelta).', re: ['Cash is fine.', 'Efectivo está bien.'] },
      { en: 'Do you have any discounts?', es: '¿Tienen descuentos?', ej: 'Do you have any discounts for students?', tip: 'Vale la pena preguntar siempre, muchos sitios tienen descuentos que no anuncian.', re: ['Yes, ten percent off today.', 'Sí, hoy hay un diez por ciento de descuento.'] },
      { en: "It's too expensive.", es: 'Es demasiado caro.', ej: "It's too expensive for my budget. Do you have something cheaper?", tip: 'Too + adjetivo indica un exceso negativo, no solo "muy".', re: ['Let me show you a cheaper option.', 'Déjame mostrarte una opción más barata.'] },
      { en: "That's a good deal.", es: 'Es una buena oferta.', ej: "That's a good deal. I'll take two.", tip: 'Deal es cualquier trato u oferta ventajosa.', re: ['Glad you like it.', 'Me alegra que te guste.'] },
      { en: 'Where are the keys?', es: '¿Dónde están las llaves?', ej: "Where are the keys? I can't find them anywhere.", tip: 'Anywhere refuerza la frustración de no encontrar algo.', re: ['Check the kitchen table.', 'Revisa la mesa de la cocina.'] },
      { en: 'I need to clean the kitchen.', es: 'Necesito limpiar la cocina.', ej: 'I need to clean the kitchen before the guests arrive.', tip: 'Before + sujeto + verbo introduce el plazo de la tarea.', re: ["I'll help you with that.", 'Te ayudo con eso.'] },
      { en: 'The light is not working.', es: 'La luz no funciona.', ej: 'The light is not working. Do we have extra bulbs?', tip: 'Bulb es "bombilla".', re: ["I'll check the fuse box.", 'Reviso la caja de fusibles.'] },
      { en: 'Can you close the window?', es: '¿Puedes cerrar la ventana?', ej: "Can you close the window? It's getting cold.", tip: "Getting significa aquí 'poniendo' o 'volviéndose'.", re: ['Sure, one second.', 'Claro, un segundo.'] },
      { en: "I'm doing the laundry.", es: 'Estoy lavando la ropa.', ej: "I'm doing the laundry. Do you have anything to add?", tip: 'Do the laundry es la expresión fija, no wash the laundry.', re: ['Yes, my shirt is in the basket.', 'Sí, mi camisa está en la cesta.'] },
      { en: 'Set the table, please.', es: 'Pon la mesa, por favor.', ej: 'Set the table, please. Dinner is almost ready.', tip: 'Set the table es "poner la mesa"; clear the table es "recogerla".', re: ['On it!', '¡Voy!'] }
    ],
    tests: [
      {
        q: 'Antes de pagar, quieres saber si hay algún descuento disponible, ¿qué preguntas?',
        a: 'Do you have any discounts?',
        note: 'Vale la pena preguntar siempre, muchos sitios tienen descuentos que no anuncian.'
      }
    ]
  },
  {
    num: '03',
    title: 'En casa',
    items: [
      { en: "I'm cooking dinner.", es: 'Estoy cocinando la cena.', ej: "I'm cooking dinner. It will be ready in 20 minutes.", tip: 'Ready in + tiempo indica cuándo estará listo algo.', re: ["Can't wait, it smells great.", 'No puedo esperar, huele genial.'] },
      { en: 'Turn off the TV.', es: 'Apaga el televisor.', ej: "Turn off the TV. It's time for bed.", tip: 'Turn off apaga; turn on enciende.', re: ['Okay, turning it off now.', 'Vale, apagándolo ya.'] },
      { en: 'Take out the trash.', es: 'Saca la basura.', ej: 'Take out the trash. Pick up is tomorrow morning.', tip: 'Pick up aquí se refiere a la recogida de basura.', re: ["I'll do it right now.", 'Lo hago ahora mismo.'] },
      { en: 'The fridge is empty.', es: 'La nevera está vacía.', ej: 'The fridge is empty. We need to go grocery shopping.', tip: 'Grocery shopping es "hacer la compra".', re: ["Let's make a list.", 'Hagamos una lista.'] },
      { en: 'I wake up at 7.', es: 'Me despierto a las 7.', ej: 'I wake up at 7 every morning. Even on weekends.', tip: 'Añadir every morning aporta un contexto muy nativo.', re: ["That's an early start.", 'Eso es empezar temprano.'] },
      { en: 'I brush my teeth.', es: 'Me cepillo los dientes.', ej: 'I brush my teeth twice a day, morning and night.', tip: 'Twice a day es "dos veces al día".', re: ['Good habit to have.', 'Buen hábito.'] },
      { en: 'I take a shower.', es: 'Me ducho.', ej: 'I take a shower every morning to wake up.', tip: 'Take a shower, no have a shower, en inglés americano.', re: ['That helps me wake up too.', 'Eso también me ayuda a despertar.'] },
      { en: 'I go to work at 9.', es: 'Voy al trabajo a las 9.', ej: 'I go to work at 9. So I leave home at 8:30.', tip: 'So conecta causa y efecto en una rutina.', re: ["That's a nice, easy schedule.", 'Es un horario cómodo.'] },
      { en: 'I check my emails.', es: 'Reviso mis correos.', ej: 'I check my emails first thing in the morning.', tip: 'First thing in the morning significa "lo primero por la mañana".', re: ['Same here, every single day.', 'Igual aquí, todos los días.'] },
      { en: 'I cook lunch.', es: 'Cocino el almuerzo.', ej: 'I cook lunch at home to save money.', tip: 'To save money explica el motivo de una acción.', re: ["That's smart, and healthier too.", 'Es inteligente, y más sano también.'] }
    ],
    tests: [
      {
        q: 'Es hora de dormir y le pides a alguien que apague la televisión, ¿qué dices?',
        a: 'Turn off the TV.',
        note: 'Imperativo directo, normal entre familia o compañeros de piso.'
      },
      {
        q: '¿Cómo dices que te levantas a las 7 todos los días?',
        a: 'I wake up at 7.',
        note: 'Añadir every morning aporta un contexto muy nativo.'
      }
    ]
  },
  {
    num: '04',
    title: 'Mi rutina',
    items: [
      { en: 'I walk the dog.', es: 'Saco al perro a pasear.', ej: 'I walk the dog twice a day, morning and evening.', tip: 'Walk the dog, no take the dog to walk.', re: ['Dogs love their walks.', 'A los perros les encantan sus paseos.'] },
      { en: 'I read before bed.', es: 'Leo antes de dormir.', ej: 'I read before bed. It helps me relax.', tip: 'Before bed es "antes de acostarse".', re: ['That sounds so relaxing.', 'Suena muy relajante.'] },
      { en: 'I sleep at midnight.', es: 'Me duermo a medianoche.', ej: 'I sleep at midnight. I need eight hours of sleep.', tip: 'Sleep aquí describe el momento en que te duermes, no toda la noche.', re: ["That's pretty late.", 'Es bastante tarde.'] },
      { en: 'I meditate every morning.', es: 'Medito cada mañana.', ej: 'I meditate every morning for 10 minutes.', tip: 'For + duración indica cuánto tiempo dura la actividad.', re: ['I should try that too.', 'Debería probarlo también.'] },
      { en: "I'm going on vacation.", es: 'Me voy de vacaciones.', ej: "I'm going on vacation to Hawaii next month.", tip: 'Go on vacation es la expresión fija, no go to vacation.', re: ['Lucky you, have a great time!', '¡Qué suerte, pásatelo genial!'] },
      { en: 'I booked a flight.', es: 'Reservé un vuelo.', ej: "I booked a flight to Paris. I'm so excited.", tip: 'Book es "reservar", no confundir con read a book.', re: ["That's exciting, when do you leave?", 'Qué emoción, ¿cuándo te vas?'] },
      { en: "Where's the hotel?", es: '¿Dónde está el hotel?', ej: "Where's the hotel? I have a reservation.", tip: 'Combínala con I have a reservation al llegar.', re: ["It's just around the corner.", 'Está a la vuelta de la esquina.'] },
      { en: 'I need a map.', es: 'Necesito un mapa.', ej: 'I need a map. I keep getting lost.', tip: 'Keep + -ing indica que algo pasa repetidamente.', re: ['I can send you one on your phone.', 'Te puedo enviar uno al móvil.'] },
      { en: 'Can you take a photo of us?', es: '¿Puedes tomarnos una foto?', ej: 'Can you take a photo of us in front of this monument?', tip: 'Take a photo, no make a photo.', re: ['Of course, say cheese!', '¡Claro, digan whisky!'] },
      { en: "I'm visiting a museum.", es: 'Estoy visitando un museo.', ej: "I'm visiting a museum. Do you wanna come with me?", tip: 'Wanna es la forma hablada informal de want to.', re: ["Sure, I'd love to.", 'Claro, me encantaría.'] }
    ],
    tests: [
      {
        q: 'Sigues perdiéndote en la ciudad y necesitas orientarte, ¿qué dices?',
        a: 'I need a map.',
        note: 'Keep + -ing indica que algo pasa repetidamente (I keep getting lost).'
      }
    ]
  },
  {
    num: '05',
    title: 'De viaje',
    items: [
      { en: 'What time is checkin?', es: '¿A qué hora es el check-in?', ej: "What time is checkin? I'm arriving early.", tip: 'Muy útil para planear el resto del día de viaje.', re: ['Checkin is at 3 pm.', 'El check-in es a las 3 de la tarde.'] },
      { en: "I'm going sightseeing.", es: 'Voy a hacer turismo.', ej: "I'm going sightseeing downtown. Wanna join?", tip: 'Sightseeing combina sight (vista) y seeing (ver).', re: ["I'd love to join you.", 'Me encantaría acompañarte.'] },
      { en: "Let's go to the beach.", es: 'Vamos a la playa.', ej: "Let's go to the beach. Perfect weather for it.", tip: 'Perfect weather for it añade entusiasmo a la propuesta.', re: ["Yes! I'll grab my towel.", '¡Sí! Cojo mi toalla.'] },
      { en: 'This place is beautiful.', es: 'Este lugar es hermoso.', ej: 'This place is beautiful. I need to take more photos.', tip: 'Beautiful se usa tanto para lugares como para personas.', re: ['It really is stunning.', 'Es realmente precioso.'] },
      { en: "I'm all set.", es: 'Ya estoy listo.', ej: "Thanks for the help. I'm all set now.", tip: 'Es mucho mejor que I\'m ready. Es como decir "Ya tengo todo cubierto, estoy completo."', re: ["Great, let's head out.", 'Genial, vámonos.'] },
      { en: 'I love the mountains.', es: 'Me encantan las montañas.', ej: 'I love the mountains. The air feels so fresh.', tip: 'The air feels fresh describe la sensación del aire de montaña.', re: ['Me too, so peaceful up there.', 'A mí también, muy tranquilo allí arriba.'] },
      { en: 'The river is clean.', es: 'El río está limpio.', ej: 'The river is clean. We can swim safely.', tip: 'Safely (con seguridad) tranquiliza sobre el riesgo.', re: ["Perfect, let's go for a swim.", 'Perfecto, vamos a nadar.'] },
      { en: 'There are many trees here.', es: 'Hay muchos árboles aquí.', ej: 'There are many trees here. It\'s great for hiking.', tip: 'There are + plural para describir lo que hay en un lugar.', re: ["It's beautiful scenery.", 'Es un paisaje precioso.'] },
      { en: "Let's go hiking.", es: 'Vamos a hacer senderismo.', ej: "Let's go hiking this weekend. The weather is perfect.", tip: 'Go hiking sigue el patrón go + -ing para actividades.', re: ["Count me in, I love hiking.", 'Cuenta conmigo, me encanta el senderismo.'] },
      { en: 'I saw a deer.', es: 'Vi un ciervo.', ej: 'I saw a deer in the forest. It was amazing.', tip: 'Saw es el pasado irregular de see.', re: ["Wow, that's rare to see.", 'Vaya, es raro verlos.'] }
    ],
    tests: [
      {
        q: 'Llegas muy pronto a tu hotel y quieres saber si ya puedes entrar a tu habitación, ¿qué preguntas?',
        a: 'What time is checkin?',
        note: 'Muy útil para planear el resto del día de viaje.'
      },
      {
        q: '¿Cómo invitas a alguien a hacer senderismo?',
        a: "Let's go hiking.",
        note: 'Go hiking sigue el patrón go + -ing para actividades.'
      }
    ]
  }
];
