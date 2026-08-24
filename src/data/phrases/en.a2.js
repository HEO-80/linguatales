/**
 * LinguaTales — Frases hechas · Inglés A2
 * src/data/phrases/en.a2.js
 *
 * Segunda mitad de "NIVEL 1: Frases Esenciales" del curso (bloques 06-10 del
 * antiguo en.a1.js, renumerados 01-05 aquí) — la primera mitad vive en
 * en.a1.js. Mismo reparto de las 300+ frases a lo largo de los seis niveles
 * de la app.
 *
 * `ej` y `tip` van verbatim del material del curso cuando el curso los
 * trae; donde no daba `tip`, se ha escrito uno corto en la misma voz. `re`
 * (la contestación) no viene del curso — es invención propia en todos los
 * bloques, coherente con el registro de cada frase.
 *
 * Bloques 06-08: gramática básica catalogada por TIPO DE FRASE, segunda
 * mitad del bloque de gramática del segundo curso de Cale Anders ("Inglés
 * básico — vocabulario, pronunciación y gramática en un solo video").
 * Cubre presente simple (afirmaciones, negaciones y preguntas) y los
 * pronombres sujeto/objeto — la mitad más avanzada del temario. La otra
 * mitad (to be, artículos, plurales, preposiciones) vive en en.a1.js,
 * bloques 06-09.
 */
export const EN_A2_PHRASES = [
  {
    num: '01',
    title: 'Pide lo que necesitas',
    items: [
      { en: "I'm gonna bounce.", es: 'Me voy a ir.', ej: "It's getting late, I'm gonna bounce.", tip: 'Muy casual, como decir "me piro". Úsala solo con amigos, no en el trabajo.', re: ['Okay, see you tomorrow!', 'Vale, ¡nos vemos mañana!'] },
      { en: 'Can I help you with anything?', es: '¿Puedo ayudarte con algo?', ej: 'Can I help you with anything else?', tip: 'Estándar en tiendas.', re: ["No, I'm just looking, thanks.", 'No, solo estoy mirando, gracias.'] },
      { en: 'Can you speak Spanish?', es: '¿Puedes hablar español?', ej: "Can you speak Spanish? I'm still learning English.", tip: 'Buena frase de emergencia si te trabas hablando inglés.', re: ['A little bit, yes.', 'Un poquito, sí.'] },
      { en: 'Can you speak more slowly, please?', es: '¿Puedes hablar más despacio, por favor?', ej: "Can you speak more slowly, please? I'm learning.", tip: 'Añadir please siempre suaviza la petición.', re: ['Of course, no problem.', 'Claro, sin problema.'] },
      { en: 'Can you repeat that, please?', es: '¿Puedes repetir eso, por favor?', ej: 'Sorry. Can you repeat that, please?', tip: 'Di sorry primero.', re: ['Sure, I said…', 'Claro, dije…'] },
      { en: 'Can I have a menu, please?', es: '¿Me puedes dar un menú, por favor?', ej: 'Can I have a menu, please?', tip: 'Frase básica al sentarte en un restaurante.', re: ['Of course, here you go.', 'Claro, aquí tienes.'] },
      { en: 'Can I have a moment?', es: '¿Puedo tener un momento?', ej: 'Can I have a moment to think about it?', tip: 'Perfecta para ganar tiempo antes de responder.', re: ['Take your time.', 'Tómate tu tiempo.'] },
      { en: 'Can I have a glass of water?', es: '¿Puedo tener un vaso de agua?', ej: 'Can I have a glass of water with ice?', tip: 'Especifica si lo quieres con hielo (ice).', re: ['Sure, coming right up.', 'Claro, enseguida.'] },
      { en: 'Can I have a receipt, please?', es: '¿Puedo tener un recibo, por favor?', ej: 'Can I have a receipt, please? I need it for taxes.', tip: 'Útil para gastos de trabajo o devoluciones.', re: ["Here's your receipt.", 'Aquí tienes tu recibo.'] },
      { en: 'Can I try it on?', es: '¿Puedo probármelo?', ej: 'This looks nice. Can I try it on?', tip: 'Frase esencial cuando compras ropa.', re: ['Sure, the fitting room is over there.', 'Claro, el probador está por allí.'] }
    ],
    tests: [
      {
        q: 'No entendiste lo que te dijeron y quieres que lo repitan con educación, ¿qué dices?',
        a: 'Can you repeat that, please?',
        note: 'Empieza con sorry para sonar aún más educado.'
      }
    ]
  },
  {
    num: '02',
    title: 'Pedir un favor',
    items: [
      { en: 'Can I borrow your pen?', es: '¿Puedo tomar prestado tu bolígrafo?', ej: 'Can I borrow your pen for a second?', tip: 'For a second suaviza la petición, muestra que será rápido.', re: ['Sure, here you go.', 'Claro, toma.'] },
      { en: 'Can I take a rain check?', es: '¿Puedo posponerlo para otra ocasión?', ej: "I can't tonight. Can I take a rain check?", tip: 'Expresión idiomática buenísima.', re: ['Of course, no worries.', 'Claro, no te preocupes.'] },
      { en: 'Can you pass me the salt, please?', es: '¿Me pasas la sal, por favor?', ej: 'Can you pass me the salt, please?', tip: 'Clásica frase de mesa, funciona igual con cualquier otro condimento.', re: ['Here you go.', 'Aquí tienes.'] },
      { en: 'Where is the bathroom?', es: '¿Dónde está el baño?', ej: 'Excuse me, where is the bathroom?', tip: 'Empieza con excuse me para llamar la atención con educación.', re: ["It's down the hall.", 'Está al fondo del pasillo.'] },
      { en: 'Where is the nearest bus stop?', es: '¿Dónde está la parada de autobús más cercana?', ej: 'Where is the nearest bus stop from here?', tip: 'Nearest (más cercano) es clave para preguntar direcciones.', re: ['Just around the corner.', 'Justo a la vuelta de la esquina.'] },
      { en: "Where's the nearest ATM?", es: '¿Dónde está el cajero automático más cercano?', ej: "Where is the nearest ATM that doesn't charge fees?", tip: 'ATM es la sigla que se usa siempre, no cash machine.', re: ["There's one at the bank.", 'Hay uno en el banco.'] },
      { en: 'Where is the nearest pharmacy?', es: '¿Dónde está la farmacia más cercana?', ej: 'Where is the nearest pharmacy? I need medicine.', tip: 'También se llama drugstore.', re: ["It's two blocks away.", 'Está a dos cuadras.'] },
      { en: 'Where is the nearest hospital?', es: '¿Dónde está el hospital más cercano?', ej: "Where is the nearest hospital? It's an emergency.", tip: 'Frase clave para memorizar antes de viajar.', re: ["I'll take you there.", 'Te llevo.'] },
      { en: 'Where can I buy tickets?', es: '¿Dónde puedo comprar boletos?', ej: 'Where can I buy tickets for the concert?', tip: 'Tickets también se puede decir passes según el contexto.', re: ['You can buy them online.', 'Puedes comprarlos en línea.'] },
      { en: 'Where is the train station?', es: '¿Dónde está la estación de tren?', ej: 'Where is the train station? I need to catch the 5 pm train.', tip: "Catch a train significa 'coger un tren' a tiempo.", re: ["It's straight ahead.", 'Está todo recto.'] }
    ],
    tests: [
      {
        q: 'Si no puedes ir a una cita hoy, ¿qué dices?',
        a: 'Can I take a rain check?',
        note: 'Expresión idiomática muy natural para posponer un plan sin cancelarlo del todo.'
      },
      {
        q: '¿Cómo preguntas por el baño de forma educada?',
        a: 'Where is the bathroom?',
        note: 'Empezar con excuse me siempre suaviza cualquier pregunta.'
      }
    ]
  },
  {
    num: '03',
    title: 'Moverte por la ciudad',
    items: [
      { en: 'Where is the exit?', es: '¿Dónde está la salida?', ej: 'Where is the exit? I need to leave.', tip: 'Útil en aeropuertos, centros comerciales o eventos grandes.', re: ['It\'s over there, by the sign.', 'Está allí, junto al cartel.'] },
      { en: 'Where is the beach?', es: '¿Dónde está la playa?', ej: 'Where is the beach? Is it walking distance?', tip: 'Prolonga la vocal en beach.', re: ["Yes, it's just ten minutes away.", 'Sí, está a solo diez minutos.'] },
      { en: 'Where is the bank?', es: '¿Dónde está el banco?', ej: 'Where is the bank? I need to withdraw money.', tip: "Withdraw significa 'retirar' dinero.", re: ['It\'s next to the pharmacy.', 'Está al lado de la farmacia.'] },
      { en: 'How do I get to downtown?', es: '¿Cómo llego al centro?', ej: 'How do I get to downtown from here?', tip: "Downtown ya incluye 'al centro', no hace falta decir to downtown.", re: ["Take the bus, it's easiest.", 'Coge el autobús, es lo más fácil.'] },
      { en: 'Where can I get a taxi?', es: '¿Dónde puedo conseguir un taxi?', ej: 'Where can I get a taxi at this hour?', tip: "At this hour (a esta hora) es útil de noche.", re: ["There's a taxi stand outside.", 'Hay una parada de taxis afuera.'] },
      { en: 'Where is a good viewpoint?', es: '¿Dónde hay un buen mirador?', ej: 'Where is a good viewpoint to see the city?', tip: 'Viewpoint también se dice lookout en algunos lugares.', re: ["There's a great one on the hill.", 'Hay uno genial en la colina.'] },
      { en: 'A table for two, please.', es: 'Una mesa para dos, por favor.', ej: 'Hi. A table for two, please.', tip: 'Frase de entrada perfecta al llegar a un restaurante.', re: ['Right this way, please.', 'Por aquí, por favor.'] },
      { en: 'Do you have a menu in English?', es: '¿Tienes menú en inglés?', ej: "Do you have a menu in English? My Spanish isn't great.", tip: 'Frase salvavidas si viajas y no dominas el idioma local.', re: ['Yes, here you go.', 'Sí, aquí tienes.'] },
      { en: "I'd like a beer.", es: 'Quisiera una cerveza.', ej: "I'd like a beer. What do you have on tap?", tip: "On tap significa 'de barril'.", re: ['We have two options on tap.', 'Tenemos dos opciones de barril.'] },
      { en: "I'd like a coffee.", es: 'Quisiera un café.', ej: "I'd like a coffee. Black, no sugar.", tip: "I'd like es más educado que I want.", re: ['Coming right up.', 'Enseguida.'] }
    ],
    tests: [
      {
        q: 'Llegas a un restaurante y quieres que te sienten, ¿qué dices?',
        a: 'A table for two, please.',
        note: 'Frase de entrada perfecta al llegar a un restaurante.'
      }
    ]
  },
  {
    num: '04',
    title: 'En el restaurante',
    items: [
      { en: "I'd like still water.", es: 'Quisiera agua sin gas.', ej: "I'd like still water. No ice, please.", tip: 'Still water es sin gas; sparkling water es con gas.', re: ['Still or sparkling?', '¿Sin gas o con gas?'] },
      { en: "I'm vegetarian.", es: 'Soy vegetariano/a.', ej: "I'm vegetarian. What do you recommend?", tip: "Para veganos se dice I'm vegan.", re: ['We have great veggie options.', 'Tenemos buenas opciones vegetarianas.'] },
      { en: "I'm allergic to seafood.", es: 'Soy alérgico/a a los mariscos.', ej: "I'm allergic to seafood. Is this dish safe?", tip: 'Siempre menciona tu alergia antes de pedir.', re: ['Let me check with the chef.', 'Déjame preguntarle al chef.'] },
      { en: 'No spice, please.', es: 'Sin picante, por favor.', ej: "No spice, please. I can't handle it.", tip: 'Corta y directa, perfecta para pedidos rápidos.', re: ['No problem, mild it is.', 'Sin problema, suave entonces.'] },
      { en: 'What do you recommend?', es: '¿Qué recomiendas?', ej: 'What do you recommend for someone who likes chicken?', tip: 'Muy buena para dejar la decisión en manos del camarero.', re: ['The grilled chicken is amazing.', 'El pollo a la parrilla es increíble.'] },
      { en: 'This is delicious.', es: 'Esto está delicioso.', ej: 'This is delicious. Compliments to the chef.', tip: 'Compliments to the chef es un cumplido clásico.', re: ["I'm so glad you like it!", '¡Me alegra que te guste!'] },
      { en: 'This is cold.', es: 'Esto está frío.', ej: 'Excuse me. This is cold. Can you warm it up?', tip: 'Sé educado al quejarte.', re: ["I'm sorry, I'll fix that right away.", 'Lo siento, lo arreglo enseguida.'] },
      { en: 'The bill, please.', es: 'La cuenta, por favor.', ej: "We're ready for the bill, please.", tip: 'También: The check, please.', re: ["Sure, I'll bring it right over.", 'Claro, la traigo enseguida.'] },
      { en: 'Do you accept credit cards?', es: '¿Aceptan tarjetas de crédito?', ej: 'Do you accept credit cards or cash only?', tip: 'Pregunta clave si no llevas efectivo.', re: ['Yes, we accept all major cards.', 'Sí, aceptamos todas las tarjetas principales.'] },
      { en: 'Help.', es: 'Ayuda.', ej: 'Help. Someone call 911.', tip: 'En una emergencia, una sola palabra puede bastar.', re: ["I'm calling for help now!", '¡Estoy pidiendo ayuda ahora mismo!'] }
    ],
    tests: [
      {
        q: '¿Cómo pides la cuenta en un restaurante?',
        a: 'The bill, please.',
        note: 'También puedes decir The check, please.'
      }
    ]
  },
  {
    num: '05',
    title: 'Emergencias',
    items: [
      { en: 'Call the police.', es: 'Llama a la policía.', ej: "Call the police, I've been robbed.", tip: 'Frase de emergencia esencial, memorízala bien.', re: ["I'm calling them right now.", 'Los estoy llamando ahora mismo.'] },
      { en: 'Call an ambulance.', es: 'Llama a una ambulancia.', ej: "Call an ambulance. Someone's hurt.", tip: 'En EE. UU. el número de emergencias es 911.', re: ['On it, stay calm.', 'Voy, mantén la calma.'] },
      { en: 'I lost my passport.', es: 'Perdí mi pasaporte.', ej: 'I lost my passport. What should I do?', tip: 'Contacta a tu embajada lo antes posible.', re: ["Let's go to the embassy.", 'Vayamos a la embajada.'] },
      { en: "I've been robbed.", es: 'Me han robado.', ej: "I've been robbed. They took my wallet.", tip: 'Robbed se usa cuando te roban a ti, no un objeto (stolen).', re: ["I'm so sorry, let's call the police.", 'Lo siento mucho, llamemos a la policía.'] },
      { en: 'I feel sick.', es: 'Me siento mal.', ej: 'I feel sick. I need to sit down.', tip: 'Frase general para malestar, sin especificar el síntoma.', re: ['Let me help you sit down.', 'Déjame ayudarte a sentarte.'] },
      { en: 'I need a doctor.', es: 'Necesito un médico.', ej: "I need a doctor. It's urgent.", tip: 'Corta y directa para situaciones urgentes.', re: ["There's a clinic nearby.", 'Hay una clínica cerca.'] },
      { en: 'I need to go to the hospital.', es: 'Necesito ir al hospital.', ej: 'I need to go to the hospital. This is serious.', tip: 'This is serious añade urgencia a la frase.', re: ["I'll drive you there now.", 'Te llevo ahora mismo.'] },
      { en: 'I have an allergy.', es: 'Tengo una alergia.', ej: 'I have an allergy to nuts. Do you have an epipen?', tip: 'Menciona siempre a qué eres alérgico.', re: ['Do you have your medication with you?', '¿Tienes tu medicación contigo?'] },
      { en: 'I have a stomach ache.', es: 'Tengo dolor de estómago.', ej: 'I have a stomach ache. Do you have antacids?', tip: 'Ache se usa para dolores sordos y continuos.', re: ['I have some antacids in my bag.', 'Tengo antiácidos en mi bolso.'] },
      { en: 'I need a pharmacy.', es: 'Necesito una farmacia.', ej: 'I need a pharmacy. Where is the nearest one?', tip: 'Combínala con where is the nearest one para preguntar dónde está.', re: ["There's one just around the corner.", 'Hay una justo a la vuelta de la esquina.'] }
    ],
    tests: [
      {
        q: 'Ves que alguien se ha hecho daño y necesita ayuda médica urgente, ¿qué dices?',
        a: 'Call an ambulance.',
        note: 'En una emergencia real en EE. UU., marca 911.'
      }
    ]
  },
  {
    num: '06',
    title: 'Presente simple: afirmaciones y negaciones',
    items: [
      { en: 'I like coffee.', es: 'Me gusta el café.', ej: 'I like coffee in the morning.', tip: 'Presente simple con I: usa el verbo base, sin -s.', re: ["Me too, every morning.", 'Yo también, todas las mañanas.'] },
      { en: 'She works every day.', es: 'Ella trabaja todos los días.', ej: 'She works every day except Sunday.', tip: 'Con he/she/it se agrega -s al verbo: work → works.', re: ["That's a busy schedule.", 'Es un horario ocupado.'] },
      { en: 'They play soccer on weekends.', es: 'Ellos juegan fútbol los fines de semana.', ej: 'They play soccer on weekends at the park.', tip: 'Con they no se agrega -s: play, no plays.', re: ["Can I join sometime?", '¿Puedo unirme algún día?'] },
      { en: 'He likes to read books.', es: 'A él le gusta leer libros.', ej: 'He likes to read books before bed.', tip: 'Like → likes con he/she/it.', re: ["What's his favorite genre?", '¿Cuál es su género favorito?'] },
      { en: "I don't like tea.", es: 'No me gusta el té.', ej: "I don't like tea, but I love coffee.", tip: 'Negativo con I/you/we/they: don\'t + verbo base.', re: ["I'll make you coffee, then.", 'Entonces te hago café.'] },
      { en: "She doesn't play tennis.", es: 'Ella no juega al tenis.', ej: "She doesn't play tennis, she prefers swimming.", tip: 'Negativo con he/she/it: doesn\'t + verbo base (la -s desaparece).', re: ["Swimming is great exercise too.", 'Nadar también es buen ejercicio.'] },
      { en: "They don't watch TV.", es: 'Ellos no ven la televisión.', ej: "They don't watch TV during the week.", tip: 'Don\'t + verbo base con they.', re: ["What do they do instead?", '¿Qué hacen en su lugar?'] },
      { en: "We don't have time.", es: 'No tenemos tiempo.', ej: "We don't have time to finish this today.", tip: 'Don\'t have es la forma negativa de have en presente simple.', re: ["Let's finish it tomorrow, then.", 'Entonces lo terminamos mañana.'] },
      { en: "He doesn't eat meat.", es: 'Él no come carne.', ej: "He doesn't eat meat, he's vegetarian.", tip: 'Doesn\'t quita la -s: eats → doesn\'t eat.', re: ["I'll cook something vegetarian.", 'Cocino algo vegetariano.'] },
      { en: 'We watch TV at night.', es: 'Vemos televisión en la noche.', ej: 'We watch TV at night before bed.', tip: 'Forma afirmativa simple con we: verbo base sin -s.', re: ["What do you usually watch?", '¿Qué suelen ver?'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'ella trabaja todos los días'?",
        a: 'She works every day.',
        note: 'Con he/she/it se agrega -s al verbo.'
      },
      {
        q: "¿Cómo dices 'no me gusta el té'?",
        a: "I don't like tea.",
        note: 'Negativo con I: don\'t + verbo base.'
      },
      {
        q: "¿Cómo dices 'ella no juega al tenis'?",
        a: "She doesn't play tennis.",
        note: 'Negativo con he/she/it: doesn\'t + verbo base, sin la -s.'
      }
    ]
  },
  {
    num: '07',
    title: 'Preguntas en presente simple',
    items: [
      { en: 'Do you like coffee?', es: '¿Te gusta el café?', ej: 'Do you like coffee or tea?', tip: 'Do se usa con I, you, we y they.', re: ["I prefer tea, actually.", 'Prefiero el té, la verdad.'] },
      { en: 'Do they play soccer?', es: '¿Ellos juegan al fútbol?', ej: 'Do they play soccer every weekend?', tip: 'Do + they + verbo base para preguntar.', re: ["Yes, every Saturday.", 'Sí, todos los sábados.'] },
      { en: 'Do you like tea?', es: '¿Te gusta el té?', ej: 'Do you like tea in the afternoon?', tip: 'Do you like...? es una de las preguntas más comunes en presente simple.', re: ["Yes, especially green tea.", 'Sí, sobre todo el té verde.'] },
      { en: 'Do they speak English?', es: '¿Ellos hablan inglés?', ej: 'Do they speak English at home?', tip: 'Do + they para preguntar sobre un grupo.', re: ["Yes, and Spanish too.", 'Sí, y también español.'] },
      { en: 'Do we need to study?', es: '¿Necesitamos estudiar?', ej: "Do we need to study for tomorrow's test?", tip: 'Do we...? pregunta por una acción que incluye al hablante.', re: ["Yes, we do.", 'Sí, necesitamos.'] },
      { en: 'Does he play the guitar?', es: '¿Él toca la guitarra?', ej: 'Does he play the guitar or the piano?', tip: 'Does se usa con he, she o it.', re: ["He plays both, actually.", 'Toca ambos, en realidad.'] },
      { en: 'Does she like pizza?', es: '¿A ella le gusta la pizza?', ej: 'Does she like pizza with extra cheese?', tip: 'Does she...? y el verbo se queda en su forma base: like, no likes.', re: ["She loves it.", 'Le encanta.'] },
      { en: 'Does she work here?', es: '¿Ella trabaja aquí?', ej: 'Does she work here on weekends too?', tip: 'Does + she + verbo base, la -s se va al does.', re: ["Yes, she's here every day.", 'Sí, está aquí todos los días.'] },
      { en: 'Does he play basketball?', es: '¿Él juega al baloncesto?', ej: 'Does he play basketball on Fridays?', tip: 'Does he...? sigue el mismo patrón que does she.', re: ["Every Friday afternoon.", 'Todos los viernes por la tarde.'] },
      { en: 'Do we have homework?', es: '¿Tenemos tarea?', ej: 'Do we have homework for Monday?', tip: 'Do we...? es la forma de preguntar por algo compartido.', re: ["Yes, a short essay.", 'Sí, un ensayo corto.'] }
    ],
    tests: [
      {
        q: '¿Cómo preguntas si a alguien le gusta el café?',
        a: 'Do you like coffee?',
        note: 'Do se usa con I, you, we y they.'
      },
      {
        q: '¿Cómo preguntas si él toca la guitarra?',
        a: 'Does he play the guitar?',
        note: 'Does se usa con he, she o it.'
      },
      {
        q: '¿Cómo preguntas si a ella le gusta la pizza?',
        a: 'Does she like pizza?',
        note: 'Con does, el verbo se queda en su forma base: like, no likes.'
      },
      {
        q: '¿Cómo preguntas si tenemos tarea?',
        a: 'Do we have homework?',
        note: 'Do we...? pregunta por algo que incluye al hablante.'
      }
    ]
  },
  {
    num: '08',
    title: 'Pronombres sujeto y objeto',
    items: [
      { en: 'I love him.', es: 'Yo lo amo.', ej: 'I love him more than anything.', tip: 'Him es el pronombre objeto para "él" (a él, lo, le).', re: ["That's beautiful.", 'Eso es hermoso.'] },
      { en: 'She gave me the book.', es: 'Ella me dio el libro.', ej: 'She gave me the book yesterday.', tip: 'Me es el pronombre objeto de I (me, a mí).', re: ["That was nice of her.", 'Qué amable de su parte.'] },
      { en: 'They invited us to the party.', es: 'Ellos nos invitaron a la fiesta.', ej: 'They invited us to the party on Saturday.', tip: 'Us es el pronombre objeto de we (nos, a nosotros).', re: ["Are you going?", '¿Van a ir?'] },
      { en: 'He loves her.', es: 'Él la ama.', ej: 'He loves her more every day.', tip: 'Her es el pronombre objeto para "ella" (la, le, a ella).', re: ["They make a great couple.", 'Hacen una gran pareja.'] },
      { en: 'We saw them yesterday.', es: 'Los vimos ayer.', ej: 'We saw them yesterday at the mall.', tip: 'Them es el pronombre objeto de they (los, las, les).', re: ["How were they doing?", '¿Cómo estaban?'] },
      { en: 'I like him.', es: 'Él me agrada.', ej: "I like him, he's a good friend.", tip: 'Him también se usa para expresar que alguien te agrada.', re: ["He's a great guy.", 'Es un buen tipo.'] },
      { en: 'I work with them.', es: 'Yo trabajo con ellos.', ej: 'I work with them every day.', tip: 'With them: preposición + pronombre objeto.', re: ["What's the team like?", '¿Cómo es el equipo?'] },
      { en: "I'm reading it.", es: 'Lo estoy leyendo.', ej: "This is my book. I'm reading it right now.", tip: 'It es el pronombre objeto para cosas u objetos.', re: ["Is it any good?", '¿Es bueno?'] },
      { en: 'Come with us.', es: 'Ven con nosotros.', ej: "We're going to the park. Come with us.", tip: 'With us: invitación usando el pronombre objeto de we.', re: ["I'd love to.", 'Me encantaría.'] },
      { en: 'I talked to her.', es: 'Hablé con ella.', ej: 'I saw her at the store and talked to her.', tip: 'Talk to her: her como objeto después de una preposición.', re: ["What did she say?", '¿Qué dijo?'] }
    ],
    tests: [
      {
        q: "¿Cómo dices 'ella me dio el libro'?",
        a: 'She gave me the book.',
        note: 'Me es el pronombre objeto de I.'
      },
      {
        q: "¿Cómo dices 'ellos nos invitaron a la fiesta'?",
        a: 'They invited us to the party.',
        note: 'Us es el pronombre objeto de we.'
      },
      {
        q: "¿Cómo dices 'los vimos ayer'?",
        a: 'We saw them yesterday.',
        note: 'Them es el pronombre objeto de they.'
      },
      {
        q: "¿Cómo dices 'lo estoy leyendo', hablando de un libro?",
        a: "I'm reading it.",
        note: 'It es el pronombre objeto para cosas u objetos.'
      }
    ]
  }
];
