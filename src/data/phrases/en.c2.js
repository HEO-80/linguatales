/**
 * LinguaTales — Frases hechas · Inglés C2
 * src/data/phrases/en.c2.js
 *
 * Gramática avanzada catalogada por TIPO DE FRASE, cierre del concepto 1
 * ("Gramática avanzada") del curso de C1/C2 de Cale Anders: las tres
 * estructuras más sofisticadas del temario — inversión en condicionales,
 * oraciones relativas en registro formal y oraciones hendidas (cleft
 * sentences) para dar énfasis. La primera mitad (los cuatro tiempos
 * perfectos) vive en en.c1.js.
 *
 * Los ejemplos en inglés (`en`) y las explicaciones (`tip`) están tomados o
 * adaptados del material del curso. La traducción (`es`), el ejemplo en
 * contexto (`ej`) y la contestación (`re`) son redacción propia, coherente
 * con el registro de cada bloque.
 *
 * Nota: todavía no hay ningún relato C2 en el catálogo (src/data/stories),
 * así que este nivel no es alcanzable aún desde ninguna ruta de la app —
 * misma situación que B1/B2/C1. Los datos están listos para cuando exista
 * esa historia.
 */
export const EN_C2_PHRASES = [
  {
    num: '01',
    title: 'Inversión en condicionales',
    items: [
      { en: 'Should you arrive early, call me.', es: 'Si llegas temprano, llámame.', ej: 'Should you arrive early, call me and I\'ll meet you outside.', tip: 'Inversión de primer condicional: should + sujeto + verbo, en vez de "if you arrive early". Suena más formal.', re: ['Will do, see you soon.', 'Hecho, nos vemos pronto.'] },
      { en: 'Were I you, I would take the job.', es: 'Si yo fuera tú, aceptaría el trabajo.', ej: "Were I you, I would take the job without hesitation.", tip: 'Inversión de segundo condicional: were + sujeto, sin "if", para situaciones hipotéticas en presente.', re: ["I think you're right.", 'Creo que tienes razón.'] },
      { en: 'Had I known the truth, I would have done something different.', es: 'Si hubiera sabido la verdad, habría hecho algo diferente.', ej: "Had I known the truth, I would have done something different from the start.", tip: 'Inversión de tercer condicional: had + sujeto + participio, para condiciones no cumplidas en el pasado.', re: ["It's understandable, no one blames you.", 'Es comprensible, nadie te culpa.'] },
      { en: 'Should she call, let me know.', es: 'Si ella llama, avísame.', ej: "Should she call, let me know right away.", tip: 'Should + sujeto en primer condicional invertido suena natural en contextos de trabajo.', re: ["Of course, I'll tell you immediately.", 'Claro, te aviso de inmediato.'] },
      { en: 'Were we younger, we would travel more.', es: 'Si fuéramos más jóvenes, viajaríamos más.', ej: 'Were we younger, we would travel more often.', tip: 'Were funciona para todas las personas en la inversión del segundo condicional (were I, were we, were they).', re: ["Age shouldn't stop you, though.", 'La edad no debería detenerte, de todos modos.'] },
      { en: 'Had you told me, I would have helped.', es: 'Si me lo hubieras dicho, habría ayudado.', ej: 'Had you told me, I would have helped you move.', tip: 'Had + sujeto + participio + would have + participio: estructura fija de la inversión del tercer condicional.', re: ["I know, I should have asked.", 'Lo sé, debí haber preguntado.'] },
      { en: 'Should it rain, we will cancel the trip.', es: 'Si llueve, cancelaremos el viaje.', ej: 'Should it rain, we will cancel the trip and reschedule.', tip: 'Después de should, el verbo va en infinitivo sin "to" (rain, no rains).', re: ["Let's hope for good weather, then.", 'Esperemos buen clima, entonces.'] },
      { en: 'Had they prepared better, they would have won the match.', es: 'Si se hubieran preparado mejor, habrían ganado el partido.', ej: 'Had they prepared better, they would have won the match easily.', tip: 'Muy común en textos académicos y literarios; en conversación normal se sigue prefiriendo "if".', re: ["That's a tough lesson to learn.", 'Es una lección difícil de aprender.'] },
      { en: "Were I in your place, I wouldn't do it.", es: 'Si yo estuviera en tu lugar, no lo haría.', ej: "Were I in your place, I wouldn't do it, honestly.", tip: 'In your place = "en tu lugar".', re: ["That's fair, I'll reconsider.", 'Tiene sentido, lo voy a reconsiderar.'] },
      { en: "Should you need anything, don't hesitate to call me.", es: 'Si necesitas algo, no dudes en llamarme.', ej: "Should you need anything, don't hesitate to call me anytime.", tip: 'Don\'t hesitate to + verbo es una expresión formal de cortesía.', re: ['Thank you, I really appreciate that.', 'Gracias, lo aprecio mucho.'] }
    ],
    tests: [
      {
        q: '¿Cómo dirías con inversión formal "si ella llama, avísame"?',
        a: 'Should she call, let me know.',
        note: 'Should + sujeto reemplaza a "if" en el primer condicional formal.'
      },
      {
        q: '¿Cómo dirías con inversión formal "si hubiera sabido la verdad, habría hecho algo diferente"?',
        a: 'Had I known the truth, I would have done something different.',
        note: 'Had + sujeto + participio es la inversión del tercer condicional.'
      },
      {
        q: '¿Cómo dirías con inversión formal "si yo estuviera en tu lugar, no lo haría"?',
        a: "Were I in your place, I wouldn't do it.",
        note: 'Were + sujeto reemplaza a "if" en el segundo condicional, sin importar la persona.'
      },
      {
        q: '¿Cómo dirías con inversión formal "si necesitas algo, no dudes en llamarme"?',
        a: "Should you need anything, don't hesitate to call me.",
        note: 'Después de should, el verbo va en infinitivo sin "to".'
      }
    ]
  },
  {
    num: '02',
    title: 'Oraciones relativas avanzadas',
    items: [
      { en: 'The book that you gave me is interesting.', es: 'El libro que me diste es interesante.', ej: "The book that you gave me is interesting. I can't put it down.", tip: 'Relativa restrictiva: sin comas, esencial para saber de qué libro hablamos.', re: ["I'm glad you like it.", 'Me alegra que te guste.'] },
      { en: 'My car, which I bought last year, is very fast.', es: 'Mi coche, que compré el año pasado, es muy rápido.', ej: 'My car, which I bought last year, is very fast on the highway.', tip: 'Relativa no restrictiva: lleva comas y añade información extra, no esencial. En inglés solo se usa which, nunca that.', re: ["I'd love to see it sometime.", 'Me encantaría verlo algún día.'] },
      { en: 'The man whose car is parked outside is my neighbor.', es: 'El hombre cuyo coche está aparcado afuera es mi vecino.', ej: 'The man whose car is parked outside is my neighbor, actually.', tip: 'Whose indica posesión y sirve tanto para personas como para cosas.', re: ["Small world, I know him too.", 'Qué casualidad, yo también lo conozco.'] },
      { en: 'The company for which I work is very successful.', es: 'La empresa para la que trabajo es muy exitosa.', ej: 'The company for which I work is very successful in this industry.', tip: 'Colocar la preposición antes del pronombre relativo (for which) es más formal que dejarla al final (which I work for).', re: ["That's impressive, congratulations.", 'Es impresionante, felicidades.'] },
      { en: 'The woman whom I met yesterday is very kind.', es: 'La mujer a quien conocí ayer es muy amable.', ej: 'The woman whom I met yesterday is very kind and generous.', tip: 'Whom se usa para personas como objeto de la oración; en inglés cotidiano se sustituye por who.', re: ['She sounds lovely.', 'Suena encantadora.'] },
      { en: 'The man with whom she was talking is my boss.', es: 'El hombre con quien ella estaba hablando es mi jefe.', ej: 'The man with whom she was talking is my boss, believe it or not.', tip: 'Preposición + whom es un registro formal típico de textos académicos.', re: ["I wouldn't have guessed that.", 'No lo hubiera imaginado.'] },
      { en: 'The city in which I grew up has changed a lot.', es: 'La ciudad en la que crecí ha cambiado mucho.', ej: 'The city in which I grew up has changed a lot over the years.', tip: 'In which equivale a "donde" cuando hablamos de lugares en registro formal.', re: ['Change can be bittersweet.', 'El cambio puede ser agridulce.'] },
      { en: 'The dog whose owner is away keeps barking.', es: 'El perro cuyo dueño está fuera sigue ladrando.', ej: 'The dog whose owner is away keeps barking all night.', tip: 'Whose + sustantivo funciona igual que "cuyo/cuya" en español.', re: ["Poor thing, it must be lonely.", 'Pobrecito, debe sentirse solo.'] },
      { en: 'The actor whom everyone admires is here.', es: 'El actor a quien todos admiran está aquí.', ej: 'The actor whom everyone admires is here for the premiere.', tip: 'En una conversación normal dirías simplemente "the actor who".', re: ["I can't wait to see him.", 'No puedo esperar a verlo.'] },
      { en: 'The restaurant we went to last night was fantastic.', es: 'El restaurante al que fuimos anoche fue fantástico.', ej: 'The restaurant we went to last night was fantastic, we should go back.', tip: 'En inglés hablado se puede omitir el pronombre relativo cuando es objeto: "the restaurant (that) we went to".', re: ["Definitely, let's book a table.", 'Claro, reservemos mesa.'] }
    ],
    tests: [
      {
        q: '¿Cómo dices "el hombre cuyo coche está aparcado afuera es mi vecino"?',
        a: 'The man whose car is parked outside is my neighbor.',
        note: 'Whose indica posesión, igual para personas que para cosas.'
      },
      {
        q: '¿Cómo dices, en registro formal, "la empresa para la que trabajo es muy exitosa"?',
        a: 'The company for which I work is very successful.',
        note: 'Colocar la preposición antes de which suena más formal que dejarla al final.'
      },
      {
        q: '¿Cómo dices, en registro formal, "la mujer a quien conocí ayer es muy amable"?',
        a: 'The woman whom I met yesterday is very kind.',
        note: 'Whom es el objeto de personas en registro formal; en conversación se sustituye por who.'
      },
      {
        q: '¿Cómo dices "la ciudad en la que crecí ha cambiado mucho", en registro formal?',
        a: 'The city in which I grew up has changed a lot.',
        note: 'In which equivale a "donde" en un registro formal.'
      }
    ]
  },
  {
    num: '03',
    title: 'Oraciones hendidas (cleft sentences)',
    items: [
      { en: 'It was Maria who gave me the book.', es: 'Fue María quien me dio el libro.', ej: 'It was Maria who gave me the book, not John.', tip: 'It was/is + elemento enfatizado + who/that: destaca quién hizo la acción.', re: ["I didn't know that.", 'No lo sabía.'] },
      { en: 'It was last week when we went to the movies.', es: 'Fue la semana pasada cuando fuimos al cine.', ej: 'It was last week when we went to the movies together.', tip: 'Enfatiza el momento, no el hecho en sí.', re: ["Time flies, it feels like yesterday.", 'El tiempo vuela, se siente como ayer.'] },
      { en: 'What I need is a break.', es: 'Lo que necesito es un descanso.', ej: 'What I need is a break from all this stress.', tip: 'What + sujeto + verbo + is + elemento enfatizado: pone el foco en la necesidad.', re: ["You've earned one.", 'Te lo has ganado.'] },
      { en: 'What bothers me is his attitude.', es: 'Lo que me molesta es su actitud.', ej: "What bothers me is his attitude, not what he actually said.", tip: 'What bothers me is... para señalar la causa de una molestia.', re: ['I noticed that too.', 'Yo también lo noté.'] },
      { en: 'All I want is some peace.', es: 'Todo lo que quiero es un poco de paz.', ej: 'All I want is some peace and quiet tonight.', tip: 'All + sujeto + verbo + is: da a entender que es la única cosa importante.', re: ["I'll leave you be, then.", 'Entonces te dejo tranquilo.'] },
      { en: 'All we need is time.', es: 'Todo lo que necesitamos es tiempo.', ej: 'All we need is time, and everything will work out.', tip: 'No repitas is dos veces: "all we need is time", no "all we need is is time".', re: ["I agree, let's be patient.", 'Estoy de acuerdo, seamos pacientes.'] },
      { en: 'The thing that surprised me was his reaction.', es: 'Lo que me sorprendió fue su reacción.', ej: 'The thing that surprised me was his reaction to the news.', tip: 'The thing that + verbo + was: otra forma muy natural de enfatizar.', re: ['Was it a good surprise?', '¿Fue una sorpresa buena?'] },
      { en: 'The thing that matters most is family.', es: 'Lo que más importa es la familia.', ej: 'At the end of the day, the thing that matters most is family.', tip: 'Matters most = "importa más".', re: ["Couldn't agree more.", 'No podría estar más de acuerdo.'] },
      { en: 'It was the weather that ruined our plans.', es: 'Fue el clima lo que arruinó nuestros planes.', ej: 'It was the weather that ruined our plans for the weekend.', tip: 'It was + causa + that + consecuencia: enfatiza la causa de algo.', re: ["That's so frustrating.", 'Eso es muy frustrante.'] },
      { en: 'What I love most is traveling.', es: 'Lo que más me gusta es viajar.', ej: 'What I love most is traveling to new places every year.', tip: 'What I love most is + gerundio para hablar de gustos con énfasis.', re: ["We should plan a trip together.", 'Deberíamos planear un viaje juntos.'] }
    ],
    tests: [
      {
        q: '¿Cómo dices con énfasis "fue María quien me dio el libro"?',
        a: 'It was Maria who gave me the book.',
        note: 'It was + persona + who destaca quién hizo la acción.'
      },
      {
        q: '¿Cómo dices con énfasis "lo que necesito es un descanso"?',
        a: 'What I need is a break.',
        note: 'What + sujeto + verbo + is enfatiza lo que se necesita.'
      },
      {
        q: '¿Cómo dices con énfasis "todo lo que necesitamos es tiempo"?',
        a: 'All we need is time.',
        note: 'All + sujeto + verbo + is: da a entender que es la única cosa importante, sin repetir is.'
      },
      {
        q: '¿Cómo dices con énfasis "lo que me molesta es su actitud"?',
        a: 'What bothers me is his attitude.',
        note: 'What bothers me is + causa de la molestia.'
      }
    ]
  }
];
