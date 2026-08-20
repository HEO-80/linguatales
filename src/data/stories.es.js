/** src/data/stories.es.js — relato activo + listado, en español (nivel A2)
 *  Traducción a inglés: es el par natural para quien aprende español. */

export const STORY = {
  id: 'es-01',
  title: 'El primer día en la ciudad',
  level: 'A2',
  duration: '4 min',
  grammarNote: 'Pretérito perfecto simple',
  status: 'En curso',
  sentences: [
    { text: 'Ana llegó a la ciudad el lunes por la mañana.', es: 'Ana arrived in the city on Monday morning.' },
    { text: 'Ella no conocía a nadie, pero no tenía miedo.', es: "She didn't know anyone, but she wasn't afraid." },
    { text: 'En la plaza, un hombre le preguntó la hora amablemente.', es: 'In the square, a man kindly asked her the time.' },
    { text: 'Ana sonrió y corrió a saludarlo, sorprendida de su suerte.', es: 'Ana smiled and ran over to greet him, surprised by her luck.' },
    { text: 'Por la tarde, encontró un café pequeño y tranquilo.', es: 'In the afternoon, she found a small, quiet café.' },
    { text: 'Al final del día, ya sentía la ciudad un poco suya.', es: 'By the end of the day, the city already felt a little bit hers.' }
  ],
  pronunciation: {
    phoneme: 'rr',
    example: 'perro',
    description: 'Vibra la punta de la lengua contra el paladar varias veces seguidas.'
  }
};

export const STORY_LIST = [
  { id: 'es-01', title: 'El primer día en la ciudad', level: 'A2', subtitle: 'Pretérito perfecto simple', status: 'En curso', duration: '4 min' },
  { id: 'es-02', title: 'La lista de la compra', level: 'A1', subtitle: 'Presente de indicativo', status: 'Leído', duration: '3 min' },
  { id: 'es-03', title: 'Domingo en el mercado', level: 'A1', subtitle: 'Presente, adjetivos', status: 'Leído', duration: '3 min' },
  { id: 'es-04', title: 'Una carta desde el pueblo', level: 'A2', subtitle: 'Pretérito imperfecto', status: 'Nuevo', duration: '4 min' },
  { id: 'es-05', title: 'El examen de conducir', level: 'A2', subtitle: 'Ser y estar', status: 'Nuevo', duration: '4 min' },
  { id: 'es-06', title: 'Vecinos nuevos', level: 'B1', subtitle: 'Pretérito perfecto compuesto', status: 'Nuevo', duration: '5 min' }
];
