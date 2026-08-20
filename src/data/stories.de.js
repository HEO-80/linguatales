/** src/data/stories.de.js — relato activo + listado, en alemán (nivel A2) */

export const STORY = {
  id: 'de-01',
  title: 'Ein neuer Anfang in Berlin',
  level: 'A2',
  duration: '4 min',
  grammarNote: 'Präteritum + trennbare Verben',
  status: 'En curso',
  sentences: [
    { text: 'Jonas zieht im September nach Berlin für ein neues Praktikum.', es: 'Jonas se muda a Berlín en septiembre para unas nuevas prácticas.' },
    { text: 'Die Wohnung ist klein, aber sie liegt sehr zentral.', es: 'El piso es pequeño, pero está muy céntrico.' },
    { text: 'Am ersten Tag verläuft er sich zweimal in der U-Bahn.', es: 'El primer día se pierde dos veces en el metro.' },
    { text: 'Ein freundlicher Nachbar zeigt ihm den Weg zur Arbeit.', es: 'Un vecino simpático le enseña el camino al trabajo.' },
    { text: 'Abends kocht Jonas ein einfaches Gericht in seiner neuen Küche.', es: 'Por la noche, Jonas cocina un plato sencillo en su nueva cocina.' },
    { text: 'Nach einer Woche fühlt sich Berlin schon vertraut an.', es: 'Después de una semana, Berlín ya le resulta familiar.' }
  ],
  pronunciation: {
    phoneme: 'ch',
    example: 'ich',
    description: 'Sonido suave de fricción en el paladar, sin tocarlo con la lengua.'
  }
};

export const STORY_LIST = [
  { id: 'de-01', title: 'Ein neuer Anfang in Berlin', level: 'A2', subtitle: 'Präteritum + trennbare Verben', status: 'En curso', duration: '4 min' },
  { id: 'de-02', title: 'Der Wochenmarkt', level: 'A1', subtitle: 'Präsens, Adjektive', status: 'Leído', duration: '3 min' },
  { id: 'de-03', title: 'Ein Brief an eine Freundin', level: 'A1', subtitle: 'Präsens', status: 'Leído', duration: '3 min' },
  { id: 'de-04', title: 'Die neue Nachbarin', level: 'A2', subtitle: 'Modalverben', status: 'Nuevo', duration: '4 min' },
  { id: 'de-05', title: 'Ein Abend im Biergarten', level: 'A2', subtitle: 'Wortstellung', status: 'Nuevo', duration: '4 min' },
  { id: 'de-06', title: 'Rückkehr aufs Land', level: 'B1', subtitle: 'Perfekt vs. Präteritum', status: 'Nuevo', duration: '5 min' }
];
