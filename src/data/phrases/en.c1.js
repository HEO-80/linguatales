/**
 * LinguaTales — Frases hechas · Inglés C1
 * src/data/phrases/en.c1.js
 *
 * Gramática avanzada catalogada por TIPO DE FRASE, tomada del concepto 1
 * ("Gramática avanzada") del curso de C1/C2 de Cale Anders: los cuatro
 * tiempos perfectos que un hablante debe dominar para sonar avanzado. La
 * segunda mitad del catálogo (inversión condicional, relativas avanzadas,
 * hendidas) vive en en.c2.js.
 *
 * Los ejemplos en inglés (`en`) y las explicaciones (`tip`) están tomados o
 * adaptados del material del curso. La traducción (`es`), el ejemplo en
 * contexto (`ej`) y la contestación (`re`) son redacción propia, coherente
 * con el registro de cada bloque.
 *
 * Nota: todavía no hay ningún relato C1 en el catálogo (src/data/stories),
 * así que este nivel no es alcanzable aún desde ninguna ruta de la app —
 * misma situación que B1/B2/C2. Los datos están listos para cuando exista
 * esa historia.
 */
export const EN_C1_PHRASES = [
  {
    num: '01',
    title: 'Presente perfecto',
    items: [
      { en: 'I have never eaten Chinese food.', es: 'Yo nunca he comido comida china.', ej: "I have never eaten Chinese food, but I'd like to try it.", tip: 'Presente perfecto: sujeto + have/has + participio pasado. Never refuerza que es una experiencia que nunca ha ocurrido.', re: ['You should try it, you might love it.', 'Deberías probarla, podría encantarte.'] },
      { en: 'They have already finished the work.', es: 'Ellos ya han terminado el trabajo.', ej: 'They have already finished the work, so we can move on.', tip: 'Already se coloca entre have/has y el participio para enfatizar que algo pasó antes de lo esperado.', re: ["That's great news, let's review it.", 'Qué buena noticia, revisémoslo.'] },
      { en: 'We have lived here since 2015.', es: 'Hemos vivido aquí desde 2015.', ej: 'We have lived here since 2015, and we love the neighborhood.', tip: 'Since + un punto en el tiempo (2015) marca cuándo empezó la acción que sigue hasta ahora.', re: ["That's a long time, you must know everyone.", 'Es mucho tiempo, debes conocer a todos.'] },
      { en: 'She has lived here for five years.', es: 'Ella ha vivido aquí durante cinco años.', ej: 'She has lived here for five years and speaks the language fluently now.', tip: 'For + duración (five years); since + punto de partida (2015). No los confundas.', re: ["No wonder she's so fluent.", 'Con razón habla tan fluido.'] },
      { en: 'I have just finished my homework.', es: 'Acabo de terminar mi tarea.', ej: 'I have just finished my homework, so now I can relax.', tip: 'Just entre have y el participio significa "acabar de".', re: ["Perfect timing, let's watch a movie.", 'Justo a tiempo, veamos una película.'] },
      { en: 'Have you ever tried sushi?', es: '¿Alguna vez has probado el sushi?', ej: 'Have you ever tried sushi, or would you rather try something else?', tip: 'Ever en preguntas se refiere a experiencias de vida, sin momento específico.', re: ['Yes, I had it for the first time last year.', 'Sí, lo probé por primera vez el año pasado.'] },
      { en: 'The train has already left.', es: 'El tren ya se ha ido.', ej: "The train has already left, so we'll have to wait for the next one.", tip: 'Already con hechos recientes que tienen relevancia ahora.', re: ["Ugh, when's the next one?", 'Uf, ¿cuándo sale el siguiente?'] },
      { en: "We haven't seen him today.", es: 'No lo hemos visto hoy.', ej: "We haven't seen him today, which is unusual for him.", tip: "Haven't es la contracción de have not. Today enmarca un periodo que aún no ha terminado.", re: ["That's strange, let's give him a call.", 'Qué raro, llamémoslo.'] },
      { en: 'She has read that book three times.', es: 'Ella ha leído ese libro tres veces.', ej: 'She has read that book three times and still loves it.', tip: 'Read (participio pasado) se escribe igual que el presente, pero se pronuncia distinto: "red".', re: ['It must be really good, then.', 'Debe ser realmente bueno, entonces.'] },
      { en: 'I have gone to the store.', es: 'He ido a la tienda.', ej: "I have gone to the store, but I'll be back soon.", tip: 'Gone es el participio de go; went es solo pasado simple y nunca se usa con have (I have went es incorrecto).', re: ["No rush, I'll wait for you.", 'Sin prisa, te espero.'] }
    ],
    tests: [
      {
        q: '¿Cómo dices que nunca has comido comida china?',
        a: 'I have never eaten Chinese food.',
        note: 'Never + participio para experiencias que nunca han ocurrido.'
      },
      {
        q: '¿Cómo preguntas si alguien alguna vez ha probado el sushi?',
        a: 'Have you ever tried sushi?',
        note: 'Ever se usa en preguntas sobre experiencias de vida, sin momento concreto.'
      },
      {
        q: '¿Cómo dices que el tren ya se ha ido?',
        a: 'The train has already left.',
        note: 'Already destaca que algo ocurrió antes de lo esperado, con relevancia en el presente.'
      },
      {
        q: '¿Cómo dices correctamente "he ido a la tienda" (no "I have went")?',
        a: 'I have gone to the store.',
        note: 'Gone es el participio de go; went es solo pasado simple y no se usa con have.'
      }
    ]
  },
  {
    num: '02',
    title: 'Pasado perfecto',
    items: [
      { en: 'They had left before we arrived.', es: 'Ellos ya se habían ido cuando llegamos.', ej: 'They had left before we arrived, so we missed them.', tip: 'Pasado perfecto: had + participio, para una acción anterior a otra en el pasado.', re: ["That's a shame, we wanted to see them.", 'Qué lástima, queríamos verlos.'] },
      { en: 'By the time I got home, she had already eaten.', es: 'Para cuando llegué a casa, ella ya había comido.', ej: 'By the time I got home, she had already eaten, so I ate alone.', tip: 'By the time + pasado simple marca el punto de referencia; had + participio marca lo que pasó antes.', re: ["Next time, save some for you.", 'La próxima, guárdate algo.'] },
      { en: 'He had just finished the report when the meeting started.', es: 'Él acababa de terminar el informe cuando empezó la reunión.', ej: 'He had just finished the report when the meeting started, right on time.', tip: 'Just enfatiza lo reciente de la primera acción.', re: ['Cutting it close, but he made it.', 'Fue por poco, pero lo logró.'] },
      { en: 'I had never seen such a beautiful sunset before.', es: 'Nunca había visto un atardecer tan hermoso antes.', ej: "I had never seen such a beautiful sunset before, so I took a photo.", tip: 'Never + had + participio para experiencias anteriores a un momento pasado.', re: ['I bet the photo is stunning.', 'Seguro la foto quedó preciosa.'] },
      { en: 'We had just finished dinner when they called.', es: 'Acabábamos de terminar de cenar cuando llamaron.', ej: 'We had just finished dinner when they called about the trip.', tip: 'Had just + participio + when + pasado simple: secuencia clara de dos acciones pasadas.', re: ['Good timing, what did they say?', 'Buen momento, ¿qué dijeron?'] },
      { en: 'By the time we got to the cinema, the movie had already started.', es: 'Para cuando llegamos al cine, la película ya había comenzado.', ej: 'By the time we got to the cinema, the movie had already started, so we missed the beginning.', tip: 'Get to describe llegar a un lugar.', re: ["That's frustrating, next time leave earlier.", 'Qué frustrante, la próxima salgan antes.'] },
      { en: 'Had you been to that restaurant before today?', es: '¿Habías estado en ese restaurante antes de hoy?', ej: 'Had you been to that restaurant before today, or was it your first time?', tip: 'Pregunta con had + sujeto + participio.', re: ['No, it was my very first time.', 'No, fue mi primera vez.'] },
      { en: 'They had eaten dinner before we arrived.', es: 'Ellos habían cenado antes de que llegáramos.', ej: 'They had eaten dinner before we arrived, so they just chatted with us.', tip: 'Eaten es el participio de eat; ate es solo pasado simple.', re: ["That's fine, we weren't that hungry anyway.", 'Está bien, tampoco teníamos tanta hambre.'] },
      { en: 'She had finished the book by the time I called her.', es: 'Ella había terminado el libro para cuando la llamé.', ej: 'She had finished the book by the time I called her, so we talked about the ending.', tip: 'By the time señala el límite temporal de la acción.', re: ['I love talking about endings with someone who just finished.', 'Me encanta hablar del final con alguien que acaba de terminarlo.'] },
      { en: 'I had just gone to bed when the phone rang.', es: 'Acababa de acostarme cuando sonó el teléfono.', ej: 'I had just gone to bed when the phone rang, and it startled me.', tip: 'Gone es el participio de go en todos los tiempos perfectos (had gone, have gone, will have gone).', re: ['Who was calling so late?', '¿Quién llamaba tan tarde?'] }
    ],
    tests: [
      {
        q: 'Cuando llegamos, ellos ya se habían ido, ¿cómo lo dices?',
        a: 'They had left before we arrived.',
        note: 'Pasado perfecto (had + participio) para la acción anterior a otra acción pasada.'
      },
      {
        q: 'Nunca habías visto un atardecer tan hermoso antes, ¿cómo lo dices?',
        a: 'I had never seen such a beautiful sunset before.',
        note: 'Never + had + participio para una experiencia anterior a otro momento del pasado.'
      },
      {
        q: '¿Cómo preguntas si alguien había estado en ese restaurante antes de hoy?',
        a: 'Had you been to that restaurant before today?',
        note: 'Pregunta con had + sujeto + participio, sin auxiliar adicional.'
      },
      {
        q: 'Ella había terminado el libro para cuando la llamé, ¿cómo lo dices?',
        a: 'She had finished the book by the time I called her.',
        note: 'By the time señala el límite temporal de la acción completada.'
      }
    ]
  },
  {
    num: '03',
    title: 'Futuro perfecto',
    items: [
      { en: 'I will have finished my homework by 10.', es: 'Para las diez ya habré terminado mi tarea.', ej: "I will have finished my homework by 10, so we can hang out after.", tip: 'Futuro perfecto: will + have + participio, para algo que estará completo antes de un momento futuro.', re: ["Sounds good, I'll come by then.", 'Suena bien, paso por ahí para entonces.'] },
      { en: 'They will have arrived at the station before noon.', es: 'Ellos habrán llegado a la estación antes del mediodía.', ej: "They will have arrived at the station before noon, so let's pick them up around then.", tip: 'Before + hora/momento marca el límite en el futuro.', re: ["I'll be there to pick them up.", 'Ahí estaré para recogerlos.'] },
      { en: 'By next year, we will have lived here for a decade.', es: 'Para el próximo año, habremos vivido aquí durante una década.', ej: 'By next year, we will have lived here for a decade, which feels unreal.', tip: 'By next year sitúa el punto de referencia futuro.', re: ["Time really flies, doesn't it?", 'El tiempo vuela, ¿verdad?'] },
      { en: 'By the time you arrive, I will have finished cooking.', es: 'Para cuando llegues, ya habré terminado de cocinar.', ej: "By the time you arrive, I will have finished cooking, so come hungry.", tip: 'By the time + presente simple (arrive) aunque hable de futuro.', re: ["I'm starving already.", 'Ya me muero de hambre.'] },
      { en: 'She will have read the whole book by the end of the week.', es: 'Ella habrá leído todo el libro para el final de la semana.', ej: "She will have read the whole book by the end of the week if she keeps this pace.", tip: 'By the end of + periodo marca el plazo.', re: ["She's a fast reader.", 'Ella lee muy rápido.'] },
      { en: 'They will have left by the time we arrive.', es: 'Ellos se habrán ido para cuando lleguemos.', ej: "They will have left by the time we arrive, so let's text them first.", tip: 'Left es el participio de leave.', re: ["Good call, I'll text them now.", 'Buena idea, les escribo ahora.'] },
      { en: 'I will have graduated by then.', es: 'Para entonces ya me habré graduado.', ej: 'I will have graduated by then, so I should be free to help.', tip: 'By then remite a un momento futuro ya mencionado.', re: ["Perfect, we'll count on you.", 'Perfecto, contamos contigo.'] },
      { en: 'By next month, I will have saved enough money to buy a car.', es: 'Para el próximo mes habré ahorrado suficiente dinero para comprar un coche.', ej: 'By next month, I will have saved enough money to buy a car, finally.', tip: 'Enough + sustantivo indica cantidad suficiente.', re: ["That's exciting, any car in mind?", 'Qué emoción, ¿ya tienes uno en mente?'] },
      { en: 'By the time the movie ends, they will have already left.', es: 'Para cuando termine la película, ellos ya se habrán ido.', ej: 'By the time the movie ends, they will have already left, since they have an early flight.', tip: 'Already refuerza que ocurrirá antes de lo esperado.', re: ['Makes sense, early flights are brutal.', 'Tiene sentido, los vuelos temprano son terribles.'] },
      { en: 'We will have completed the project by Friday.', es: 'Habremos completado el proyecto para el viernes.', ej: 'We will have completed the project by Friday if nothing changes.', tip: 'By + día de la semana marca un plazo concreto.', re: ["That's great, I'll let the client know.", 'Genial, le aviso al cliente.'] }
    ],
    tests: [
      {
        q: 'Para las diez ya habré terminado mi tarea, ¿cómo lo dices?',
        a: 'I will have finished my homework by 10.',
        note: 'Will have + participio para algo que estará completo antes de un momento futuro.'
      },
      {
        q: 'Ellos habrán llegado a la estación antes del mediodía, ¿cómo lo dices?',
        a: 'They will have arrived at the station before noon.',
        note: 'Before + momento futuro marca el límite.'
      },
      {
        q: 'Para el próximo mes habré ahorrado suficiente dinero para comprar un coche, ¿cómo lo dices?',
        a: 'By next month, I will have saved enough money to buy a car.',
        note: 'By + fecha futura marca el plazo del logro.'
      },
      {
        q: 'Habremos completado el proyecto para el viernes, ¿cómo lo dices?',
        a: 'We will have completed the project by Friday.',
        note: 'By + día de la semana fija un plazo concreto.'
      }
    ]
  },
  {
    num: '04',
    title: 'Futuro perfecto continuo',
    items: [
      { en: 'By 6, I will have been working for eight hours.', es: 'Para las seis habré estado trabajando durante ocho horas.', ej: "By 6, I will have been working for eight hours, so I'll be exhausted.", tip: 'Futuro perfecto continuo: will + have + been + verbo-ing, para la duración de una acción hasta un punto futuro.', re: ['You should take a break after that.', 'Deberías descansar después de eso.'] },
      { en: 'By next month, they will have been living here for five years.', es: 'Para el próximo mes, ellos habrán estado viviendo aquí durante cinco años.', ej: 'By next month, they will have been living here for five years, which is hard to believe.', tip: 'Been destaca la continuidad de la acción.', re: ["Time flies when you're settled.", 'El tiempo vuela cuando estás establecido.'] },
      { en: 'When she finishes, she will have been studying for four hours.', es: 'Cuando ella termine, habrá estado estudiando durante cuatro horas.', ej: 'When she finishes, she will have been studying for four hours straight.', tip: 'When + presente simple (finishes) introduce el punto de referencia futuro.', re: ['She deserves a long break after that.', 'Se merece un buen descanso después de eso.'] },
      { en: 'By the end of the year, I will have been working here for ten years.', es: 'Para el final del año, habré estado trabajando aquí durante diez años.', ej: 'By the end of the year, I will have been working here for ten years, so I might ask for a raise.', tip: 'By the end of + periodo marca el límite futuro.', re: ["You've earned it, ask away.", 'Te lo has ganado, pídelo.'] },
      { en: 'When you arrive, they will have been playing for two hours.', es: 'Cuando llegues, ellas habrán estado jugando durante dos horas.', ej: "When you arrive, they will have been playing for two hours, so they'll probably want a break.", tip: 'El foco está en la duración, no en si la acción terminó.', re: ["Then I'll bring snacks.", 'Entonces les llevo algo de comer.'] },
      { en: 'She will have been sleeping for eight hours by the time the alarm goes off.', es: 'Ella habrá estado durmiendo ocho horas para cuando suene la alarma.', ej: 'She will have been sleeping for eight hours by the time the alarm goes off, so she should feel rested.', tip: 'Go off (de una alarma) significa sonar o activarse.', re: ["That's a solid night's sleep.", 'Eso es una buena noche de sueño.'] },
      { en: 'By 2025, we will have been traveling for six months.', es: 'Para el 2025 habremos estado viajando durante seis meses.', ej: 'By 2025, we will have been traveling for six months straight.', tip: 'By + año marca un plazo lejano en el futuro.', re: ['What an adventure that must be.', 'Qué aventura debe ser eso.'] },
      { en: 'He will have been studying English for three years by next summer.', es: 'Él habrá estado estudiando inglés durante tres años para el próximo verano.', ej: 'He will have been studying English for three years by next summer, and it shows.', tip: 'By next summer combina "by" con una estación futura.', re: ['His progress has been impressive.', 'Su progreso ha sido impresionante.'] },
      { en: 'By this time tomorrow, I will have been working here for five years.', es: 'Para esta hora mañana, habré estado trabajando aquí durante cinco años.', ej: "By this time tomorrow, I will have been working here for five years, exactly.", tip: 'By this time tomorrow es una forma muy natural de fijar el plazo.', re: ['That calls for a small celebration.', 'Eso merece una pequeña celebración.'] },
      { en: 'When you return, I will have been waiting for half an hour.', es: 'Cuando regreses, habré estado esperando durante media hora.', ej: "When you return, I will have been waiting for half an hour, so don't take too long.", tip: 'Half an hour = media hora.', re: ["I'll hurry, I promise.", 'Me apuro, lo prometo.'] }
    ],
    tests: [
      {
        q: '¿Cómo dices que para el próximo mes ellos habrán estado viviendo aquí durante cinco años?',
        a: 'By next month, they will have been living here for five years.',
        note: 'Will have been + verbo-ing destaca la duración continua de la acción.'
      },
      {
        q: 'Cuando ella termine, habrá estado estudiando durante cuatro horas, ¿cómo lo dices?',
        a: 'When she finishes, she will have been studying for four hours.',
        note: 'When + presente simple introduce el punto de referencia futuro.'
      },
      {
        q: '¿Cómo dices que para el próximo verano él habrá estado estudiando inglés durante tres años?',
        a: 'He will have been studying English for three years by next summer.',
        note: 'By next summer combina "by" con una fecha futura.'
      },
      {
        q: 'Cuando regreses, habré estado esperando durante media hora, ¿cómo lo dices?',
        a: 'When you return, I will have been waiting for half an hour.',
        note: 'Half an hour = media hora; el foco está en la duración de la espera.'
      }
    ]
  }
];
