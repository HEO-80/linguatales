/**
 * src/data/stories.en.js — listado enriquecido de historias en inglés.
 * Cada fila trae ya sus `sentences` (id nuevo: `en-<slug-kebab-del-título>`,
 * ver plan de rediseño de navegación §3/§4).
 */

export const STORY_LIST = [
  {
    id: 'en-a-trip-to-the-beach',
    title: 'A Trip to the Beach',
    level: 'A2',
    subtitle: 'Past simple + adjectives',
    duration: '4 min',
    sentences: [
      { text: 'Last summer, Marco and his family went to the beach.', es: 'El verano pasado, Marco y su familia fueron a la playa.' },
      { text: 'They drove for three hours to arrive there.', es: 'Condujeron durante tres horas para llegar.' },
      { text: 'When they arrived, the sea was calm and blue.', es: 'Cuando llegaron, el mar estaba tranquilo y azul.' },
      { text: 'Marco built a big sandcastle with his sister.', es: 'Marco construyó un gran castillo de arena con su hermana.' },
      { text: 'In the evening, they ate fish at a small restaurant.', es: 'Por la tarde, comieron pescado en un pequeño restaurante.' },
      { text: 'It was one of the best days of the summer.', es: 'Fue uno de los mejores días del verano.' }
    ],
    pronunciation: {
      phoneme: 'th',
      example: 'think',
      description: 'Coloca la lengua entre los dientes y sopla, sin vibrar la voz.'
    }
  },
  {
    id: 'en-a-new-morning',
    title: 'A New Morning',
    level: 'A1',
    subtitle: 'Present simple, daily routine',
    duration: '3 min',
    sentences: [
      { text: 'Anna wakes up at seven o’clock every day.', es: 'Anna se despierta a las siete todos los días.' },
      { text: 'She brushes her teeth and gets dressed quickly.', es: 'Se cepilla los dientes y se viste rápido.' },
      { text: 'Anna drinks coffee and eats a piece of toast.', es: 'Anna bebe café y come una tostada.' },
      { text: 'She walks to the bus stop with her dog.', es: 'Camina hasta la parada de autobús con su perro.' },
      { text: 'The bus arrives, and Anna says goodbye to her dog.', es: 'El autobús llega, y Anna se despide de su perro.' },
      { text: 'She reads a book on her way to work.', es: 'Lee un libro de camino al trabajo.' }
    ],
    pronunciation: {
      phoneme: 'w',
      example: 'wakes',
      description: 'Redondea los labios como para silbar y suelta el sonido sin tocar los dientes con los labios.'
    }
  },
  {
    id: 'en-the-little-bakery',
    title: 'The Little Bakery',
    level: 'A1',
    subtitle: 'Present simple, adjectives',
    duration: '3 min',
    sentences: [
      { text: 'There is a small bakery on the corner of the street.', es: 'Hay una pequeña panadería en la esquina de la calle.' },
      { text: 'The baker is friendly and always smiles.', es: 'El panadero es amable y siempre sonríe.' },
      { text: 'Every morning, he makes fresh bread and sweet cakes.', es: 'Cada mañana, hace pan fresco y pasteles dulces.' },
      { text: 'The bread smells warm and delicious.', es: 'El pan huele cálido y delicioso.' },
      { text: 'Many people visit the bakery before work.', es: 'Mucha gente visita la panadería antes del trabajo.' },
      { text: 'The little bakery is a happy place in the town.', es: 'La pequeña panadería es un lugar feliz en el pueblo.' }
    ],
    pronunciation: {
      phoneme: 'sh',
      example: 'fresh',
      description: 'Redondea un poco los labios y deja salir el aire sin que la lengua toque el paladar.'
    }
  },
  {
    id: 'en-learning-to-cook',
    title: 'Learning to Cook',
    level: 'A2',
    subtitle: 'Past simple, sequencing words',
    duration: '4 min',
    sentences: [
      { text: 'Last week, Sofia decided to learn how to cook.', es: 'La semana pasada, Sofía decidió aprender a cocinar.' },
      { text: 'First, she watched a video about a simple pasta recipe.', es: 'Primero, vio un video sobre una receta sencilla de pasta.' },
      { text: 'Then, she bought tomatoes, garlic, and fresh basil.', es: 'Luego, compró tomates, ajo y albahaca fresca.' },
      { text: 'After that, she chopped the vegetables carefully.', es: 'Después de eso, cortó las verduras con cuidado.' },
      { text: 'Finally, she cooked the pasta and added the sauce.', es: 'Finalmente, cocinó la pasta y añadió la salsa.' },
      { text: 'The dinner tasted amazing, and Sofia felt very proud.', es: 'La cena sabía increíble, y Sofía se sintió muy orgullosa.' }
    ],
    pronunciation: {
      phoneme: 'ch',
      example: 'chopped',
      description: 'Junta la lengua detrás de los dientes y suelta el aire de golpe, como una pequeña explosión.'
    }
  },
  {
    id: 'en-the-new-job',
    title: 'The New Job',
    level: 'A2',
    subtitle: 'Past simple, feelings',
    duration: '4 min',
    sentences: [
      { text: 'Last Monday, Daniel started his first day at a new job.', es: 'El lunes pasado, Daniel empezó su primer día en un nuevo trabajo.' },
      { text: 'He felt nervous when he walked into the office.', es: 'Se sintió nervioso cuando entró en la oficina.' },
      { text: 'His new manager smiled and introduced him to the team.', es: 'Su nuevo jefe sonrió y lo presentó al equipo.' },
      { text: 'Everyone was kind, and Daniel felt more relaxed.', es: 'Todos fueron amables, y Daniel se sintió más relajado.' },
      { text: 'By the end of the day, he was tired but happy.', es: 'Al final del día, estaba cansado pero feliz.' },
      { text: 'Daniel called his family and told them the good news.', es: 'Daniel llamó a su familia y les contó las buenas noticias.' }
    ],
    pronunciation: {
      phoneme: 'j',
      example: 'job',
      description: 'Junta la lengua justo detrás de los dientes superiores y suelta el sonido con la voz activada.'
    }
  },
  {
    id: 'en-a-letter-to-a-friend',
    title: 'A Letter to a Friend',
    level: 'B1',
    subtitle: 'Present perfect',
    duration: '5 min',
    sentences: [
      { text: 'Dear Clara, I have just moved to a new city, and I wanted to write to you.', es: 'Querida Clara, acabo de mudarme a una ciudad nueva, y quería escribirte.' },
      { text: 'I have already found a small apartment near the park.', es: 'Ya he encontrado un pequeño apartamento cerca del parque.' },
      { text: 'I haven’t met many people yet, but my neighbors seem friendly.', es: 'Todavía no he conocido a mucha gente, pero mis vecinos parecen amables.' },
      { text: 'I have started a new job, and I have learned a lot this month.', es: 'He empezado un nuevo trabajo, y he aprendido mucho este mes.' },
      { text: 'I have never lived alone before, so everything feels new to me.', es: 'Nunca antes he vivido sola, así que todo me parece nuevo.' },
      { text: 'I hope you have been well, and I can’t wait to hear from you.', es: 'Espero que hayas estado bien, y no puedo esperar a saber de ti.' }
    ],
    pronunciation: {
      phoneme: 'v',
      example: 'moved',
      description: 'Coloca los dientes superiores sobre el labio inferior y haz vibrar la voz al soltar el aire.'
    }
  }
];

/** Mismo objeto de siempre para WordOrderGame/GapFillGame/DictationGame/GrammarCard/IdiomCard. */
export const STORY = STORY_LIST.find((s) => s.id === 'en-a-trip-to-the-beach');
