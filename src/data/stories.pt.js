/** src/data/stories.pt.js — relato activo + listado, en portugués (nivel A2) */

export const STORY = {
  id: 'pt-01',
  title: 'Uma nova vida no Porto',
  level: 'A2',
  duration: '4 min',
  grammarNote: 'Pretérito perfeito simples',
  status: 'En curso',
  sentences: [
    { text: 'Beatriz muda-se para o Porto no início do outono.', es: 'Beatriz se muda a Oporto a principios de otoño.' },
    { text: 'A cidade tem ruas estreitas e uma luz muito bonita.', es: 'La ciudad tiene calles estrechas y una luz muy bonita.' },
    { text: 'No primeiro fim de semana, ela visita a Ribeira com calma.', es: 'El primer fin de semana, visita la Ribeira con calma.' },
    { text: 'Um vizinho simpático recomenda um pequeno restaurante perto do rio.', es: 'Un vecino simpático le recomienda un pequeño restaurante cerca del río.' },
    { text: 'Beatriz prova um prato tradicional e adora o sabor.', es: 'Beatriz prueba un plato tradicional y le encanta el sabor.' },
    { text: 'Depois de um mês, o Porto já não parece tão distante.', es: 'Después de un mes, Oporto ya no parece tan lejano.' }
  ],
  pronunciation: {
    phoneme: 'ão',
    example: 'não',
    description: 'Vocal nasal cerrada seguida de una "u" corta, dejando salir aire por la nariz.'
  }
};

export const STORY_LIST = [
  { id: 'pt-01', title: 'Uma nova vida no Porto', level: 'A2', subtitle: 'Pretérito perfeito simples', status: 'En curso', duration: '4 min' },
  { id: 'pt-02', title: 'A feira de sábado', level: 'A1', subtitle: 'Presente, adjetivos', status: 'Leído', duration: '3 min' },
  { id: 'pt-03', title: 'Uma carta para um amigo', level: 'A1', subtitle: 'Presente do indicativo', status: 'Leído', duration: '3 min' },
  { id: 'pt-04', title: 'O novo vizinho', level: 'A2', subtitle: 'Colocação pronominal', status: 'Nuevo', duration: '4 min' },
  { id: 'pt-05', title: 'Um jantar de improviso', level: 'A2', subtitle: 'Pretérito imperfeito', status: 'Nuevo', duration: '4 min' },
  { id: 'pt-06', title: 'Regresso à aldeia', level: 'B1', subtitle: 'Perfeito vs. imperfeito', status: 'Nuevo', duration: '5 min' }
];
