/**
 * src/lib/srs.js
 * Repaso espaciado (SRS) — SM-2 reducido a tres notas: 0 fallé · 3 bien ·
 * 5 fácil (§1 linguatales-srs-spec.md). Función pura, sin dependencias de
 * React: la persistencia y el enganche con los juegos viven en
 * src/state/srs.js, que importa de aquí.
 */

/** SM-2 clásico. `card` puede venir vacía (tarjeta nueva) — los valores por
 * defecto son los de una tarjeta recién creada. */
export function sm2(card, q) {
  let ease = card?.ease ?? 2.5;
  let reps = card?.reps ?? 0;
  let interval = card?.interval ?? 0;
  let lapses = card?.lapses ?? 0;

  if (q < 3) {
    reps = 0;
    interval = 1;
    lapses += 1;
    ease = Math.max(1.3, ease - 0.2);
  } else {
    reps += 1;
    interval = reps === 1 ? 1 : reps === 2 ? 6 : Math.max(1, Math.round(interval * ease));
    ease = Math.max(1.3, ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  }

  return { ease, reps, interval, lapses };
}

/** Día entero (días desde epoch, a medianoche LOCAL) — mismo número durante
 * todo el día sin importar la hora. `offsetDays` es el día virtual de
 * desarrollo (ver advanceDay en state/srs.js); en producción es siempre 0. */
export function todayInt(offsetDays = 0) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return Math.floor(d.getTime() / 86400000) + offsetDays;
}

/** Umbral (en días de intervalo) a partir del cual una tarjeta se considera
 * consolidada en vez de "en progreso" (§5 linguatales-srs-spec.md). */
const CONSOLIDATED_INTERVAL = 8;

export const SRS_STATUS = {
  UNSEEN: 'unseen',
  DUE: 'due',
  LEARNING: 'learning',
  MASTERED: 'mastered'
};

/** Color por estado — el mismo en el filete de palabra, el punto de frases
 * hechas y el punto de conectores. */
export const SRS_STATUS_COLOR = {
  unseen: '#8a8377',
  due: '#b45309',
  learning: '#0e7490',
  mastered: '#0f766e'
};

export const SRS_STATUS_LABEL = {
  unseen: 'Sin ver',
  due: 'Toca repasar',
  learning: 'En progreso',
  mastered: 'Consolidada'
};

/** Estado visual de una tarjeta (o su ausencia) para el día dado. `due`
 * manda sobre `interval`: una tarjeta vencida se marca como "toca repasar"
 * aunque ya esté en un intervalo largo. */
export function srsStatus(card, day) {
  if (!card) return SRS_STATUS.UNSEEN;
  if (card.due <= day) return SRS_STATUS.DUE;
  if (card.interval < CONSOLIDATED_INTERVAL) return SRS_STATUS.LEARNING;
  return SRS_STATUS.MASTERED;
}

/** Cifras + cola de "Repaso de hoy" a partir del mapa de tarjetas de un
 * nivel. `queue` va ordenada por vencimiento (lo más atrasado primero). */
export function deriveSrsQueue(cardsMap, day) {
  const entries = Object.entries(cardsMap || {});
  const due = [];
  let inProgress = 0;
  let consolidated = 0;

  entries.forEach(([key, card]) => {
    const status = srsStatus(card, day);
    if (status === SRS_STATUS.DUE) due.push({ key, card });
    else if (status === SRS_STATUS.LEARNING) inProgress += 1;
    else if (status === SRS_STATUS.MASTERED) consolidated += 1;
  });

  due.sort((a, b) => a.card.due - b.card.due || a.key.localeCompare(b.key));

  const all = entries
    .map(([key, card]) => ({ key, card, status: srsStatus(card, day) }))
    .sort((a, b) => a.card.due - b.card.due || a.key.localeCompare(b.key));

  return {
    due,
    all,
    dueCount: due.length,
    inProgressCount: inProgress,
    consolidatedCount: consolidated,
    seenCount: entries.length
  };
}

/**
 * "Lo flojo" (§2 examen final, §4 micro-repaso — quinta entrega): cuánto
 * pesa una tarjeta a la hora de priorizar repaso. Sin tarjeta pesa 1 —
 * entra, pero detrás de cualquier cosa ya fallada alguna vez.
 */
export function srsWeight(card, day) {
  if (!card) return 1;
  return card.lapses * 3 + (card.due <= day ? 2 : 0) + (card.interval < 6 ? 1 : 0);
}

/**
 * Ordena `items` por peso SRS descendente. `keyFn` saca la clave de tarjeta
 * de cada item (por defecto, `item.srsKey`). Empates: orden original de
 * `items` — determinista, sin Math.random, "mismo estado, mismo resultado".
 */
export function rankByWeight(items, srsCards, day, keyFn = (item) => item.srsKey) {
  return items
    .map((item, i) => ({ item, i, weight: srsWeight(srsCards[keyFn(item)], day) }))
    .sort((a, b) => b.weight - a.weight || a.i - b.i)
    .map((x) => x.item);
}
