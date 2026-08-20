/** src/data/stories.fr.js — relato activo + listado, en francés (nivel A2) */

export const STORY = {
  id: 'fr-01',
  title: 'Le premier jour à Paris',
  level: 'A2',
  duration: '4 min',
  grammarNote: 'Passé composé',
  status: 'En curso',
  sentences: [
    { text: 'Léa habite à Lyon, mais elle visite Paris pour la première fois.', es: 'Léa vive en Lyon, pero visita París por primera vez.' },
    { text: 'Elle marche le long de la Seine avec un café chaud.', es: 'Camina junto al Sena con un café caliente.' },
    { text: 'Le matin, elle trouve une librairie près de Notre-Dame.', es: 'Por la mañana, encuentra una librería cerca de Notre-Dame.' },
    { text: 'Le vendeur lui recommande un roman court et facile à lire.', es: 'El vendedor le recomienda una novela corta y fácil de leer.' },
    { text: "Léa achète le livre et s'assoit dans un parc tranquille.", es: 'Léa compra el libro y se sienta en un parque tranquilo.' },
    { text: 'Ce voyage à Paris devient son souvenir préféré de l\'année.', es: 'Ese viaje a París se convierte en su recuerdo favorito del año.' }
  ],
  pronunciation: {
    phoneme: 'u',
    example: 'rue',
    description: 'Redondea los labios como para decir "u" pero pronuncia una "i".'
  }
};

export const STORY_LIST = [
  { id: 'fr-01', title: 'Le premier jour à Paris', level: 'A2', subtitle: 'Passé composé', status: 'En curso', duration: '4 min' },
  { id: 'fr-02', title: 'Le marché du samedi', level: 'A1', subtitle: 'Présent, adjectifs', status: 'Leído', duration: '3 min' },
  { id: 'fr-03', title: 'Une lettre à un ami', level: 'A1', subtitle: 'Présent de l\'indicatif', status: 'Leído', duration: '3 min' },
  { id: 'fr-04', title: 'Le nouveau voisin', level: 'A2', subtitle: 'Imparfait', status: 'Nuevo', duration: '4 min' },
  { id: 'fr-05', title: 'Un dîner improvisé', level: 'A2', subtitle: 'Articles partitifs', status: 'Nuevo', duration: '4 min' },
  { id: 'fr-06', title: 'Retour au village', level: 'B1', subtitle: 'Passé composé vs imparfait', status: 'Nuevo', duration: '5 min' }
];
