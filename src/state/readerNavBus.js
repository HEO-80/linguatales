/**
 * src/state/readerNavBus.js
 *
 * AppHeader, la barra de secciones y Rail viven FUERA del árbol de
 * ReaderProvider — en AppShell son hermanos de <main>{children}</main>, no
 * descendientes (ReaderProvider solo envuelve StoryReaderPage, y solo existe
 * en la ruta de un relato). Un Context de React no cruza esa frontera, así
 * que la navegación entre las dos direcciones pasa por este módulo plano (no
 * Context) en vez de por props o contexto compartido.
 *
 * Tres canales, cada uno de un solo sentido:
 *
 * 1. Acción → ReaderProvider (emitReaderNav/subscribeReaderNav). La barra de
 *    secciones y Rail emiten cuando el usuario pulsa un ítem del nav
 *    secundario, o Herramientas cuando pulsa un interruptor; ReaderProvider
 *    escucha mientras está montado y mueve `view` (y estados relacionados)
 *    en consecuencia. Fuera de la página de un relato, emitir no hace nada —
 *    no hay nadie suscrito, y eso es correcto.
 *
 * 2. Vista → barra de secciones (emitReaderView/subscribeReaderView). La
 *    barra marca en negrita la sección abierta (§4
 *    linguatales-conectores-spec.md), y esa sección se deriva de `view` y de
 *    `detail` (§ tres-barras-spec: Gramática/Phrasal Verbs se iluminan
 *    cuando su ficha está abierta, no solo cuando view === 'story') — pero
 *    ambos viven dentro de ReaderProvider. ReaderProvider emite su `view` y
 *    `detail` actuales cada vez que cambian (y 'story'/null al desmontarse,
 *    para que el nav no se quede marcando algo de un relato que ya no está
 *    en pantalla); la barra de secciones se suscribe para reflejarlo.
 *
 * 3. Ajustes de Herramientas → AppHeader (emitReaderToggles/
 *    subscribeReaderToggles). `showTr`, `microOff` y `srsMarksOff` viven en
 *    ReaderProvider (se resetean al cambiar de relato), pero el popover de
 *    Herramientas que los muestra vive en AppHeader — así que ReaderProvider
 *    emite el trío cada vez que cambia, y el popover se suscribe para
 *    reflejarlo. Para cambiarlos, el popover emite una acción por el canal 1
 *    (`toggle-showTr` / `toggle-micro` / `toggle-srsMarks`), nunca escribe el
 *    estado directamente.
 */
let navListeners = new Set();
let viewListeners = new Set();
let toggleListeners = new Set();

export function emitReaderNav(action) {
  navListeners.forEach((fn) => fn(action));
}

export function subscribeReaderNav(fn) {
  navListeners.add(fn);
  return () => navListeners.delete(fn);
}

/** `detail` es opcional — quien no lo necesite (Rail, highlighting simple)
 * puede seguir leyendo solo el primer argumento. */
export function emitReaderView(view, detail = null) {
  viewListeners.forEach((fn) => fn(view, detail));
}

export function subscribeReaderView(fn) {
  viewListeners.add(fn);
  return () => viewListeners.delete(fn);
}

export function emitReaderToggles(toggles) {
  toggleListeners.forEach((fn) => fn(toggles));
}

export function subscribeReaderToggles(fn) {
  toggleListeners.add(fn);
  return () => toggleListeners.delete(fn);
}
