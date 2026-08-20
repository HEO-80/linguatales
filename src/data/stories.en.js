/** src/data/stories.en.js — relato activo + listado, en inglés (nivel A2) */

export const STORY = {
  id: 'en-01',
  title: 'A Trip to the Beach',
  level: 'A2',
  duration: '4 min',
  grammarNote: 'Past simple + adjectives',
  status: 'En curso',
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
};

export const STORY_LIST = [
  { id: 'en-01', title: 'A Trip to the Beach', level: 'A2', subtitle: 'Past simple + adjectives', status: 'En curso', duration: '4 min' },
  { id: 'en-02', title: 'A New Morning', level: 'A1', subtitle: 'Present simple, daily routine', status: 'Leído', duration: '3 min' },
  { id: 'en-03', title: 'The Little Bakery', level: 'A1', subtitle: 'Present simple, adjectives', status: 'Leído', duration: '3 min' },
  { id: 'en-04', title: 'Learning to Cook', level: 'A2', subtitle: 'Past simple, sequencing words', status: 'Nuevo', duration: '4 min' },
  { id: 'en-05', title: 'The New Job', level: 'A2', subtitle: 'Past simple, feelings', status: 'Nuevo', duration: '4 min' },
  { id: 'en-06', title: 'A Letter to a Friend', level: 'B1', subtitle: 'Present perfect', status: 'Nuevo', duration: '5 min' }
];
