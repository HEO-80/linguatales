/** src/data/stories.it.js — relato activo + listado, en italiano (nivel A2) */

export const STORY = {
  id: 'it-01',
  title: 'Un weekend a Roma',
  level: 'A2',
  duration: '4 min',
  grammarNote: 'Passato prossimo',
  status: 'En curso',
  sentences: [
    { text: 'Marta arriva a Roma un venerdì sera con la sua famiglia.', es: 'Marta llega a Roma un viernes por la noche con su familia.' },
    { text: 'Il giorno dopo camminano vicino al Colosseo per due ore.', es: 'Al día siguiente caminan cerca del Coliseo durante dos horas.' },
    { text: 'Fa molto caldo, così comprano un gelato al limone.', es: 'Hace mucho calor, así que compran un helado de limón.' },
    { text: 'Il nonno racconta storie antiche sulla città e sui romani.', es: 'El abuelo cuenta historias antiguas sobre la ciudad y los romanos.' },
    { text: 'La sera mangiano la pasta in una piccola trattoria.', es: 'Por la noche cenan pasta en una pequeña trattoria.' },
    { text: 'Marta promette di tornare a Roma il prossimo anno.', es: 'Marta promete volver a Roma el próximo año.' }
  ],
  pronunciation: {
    phoneme: 'gli',
    example: 'famiglia',
    description: 'Apoya el dorso de la lengua en el paladar y desliza una "l" mojada.'
  }
};

export const STORY_LIST = [
  { id: 'it-01', title: 'Un weekend a Roma', level: 'A2', subtitle: 'Passato prossimo', status: 'En curso', duration: '4 min' },
  { id: 'it-02', title: 'Il mercato del sabato', level: 'A1', subtitle: 'Presente, aggettivi', status: 'Leído', duration: '3 min' },
  { id: 'it-03', title: 'Una lettera a un amico', level: 'A1', subtitle: 'Presente indicativo', status: 'Leído', duration: '3 min' },
  { id: 'it-04', title: 'Il nuovo vicino', level: 'A2', subtitle: 'Verbi pronominali', status: 'Nuevo', duration: '4 min' },
  { id: 'it-05', title: 'Una cena improvvisata', level: 'A2', subtitle: 'Preposizioni articolate', status: 'Nuevo', duration: '4 min' },
  { id: 'it-06', title: 'Ritorno al paese', level: 'B1', subtitle: 'Passato prossimo vs imperfetto', status: 'Nuevo', duration: '5 min' }
];
