/**
 * src/state/readerNavBus.js
 *
 * AppHeader y Rail viven FUERA del árbol de ReaderProvider — en AppShell son
 * hermanos de <main>{children}</main>, no descendientes (ReaderProvider solo
 * envuelve StoryReaderPage, y solo existe en la ruta de un relato). Un
 * Context de React no cruza esa frontera, así que la navegación entre las
 * dos direcciones pasa por este módulo plano (no Context) en vez de por
 * props o contexto compartido.
 *
 * Dos canales, cada uno de un solo sentido:
 *
 * 1. Acción → ReaderProvider (emitReaderNav/subscribeReaderNav). AppHeader y
 *    Rail emiten cuando el usuario pulsa un ítem del nav secundario;
 *    ReaderProvider escucha mientras está montado y mueve `view` (y estados
 *    relacionados) en consecuencia. Fuera de la página de un relato, emitir
 *    no hace nada — no hay nadie suscrito, y eso es correcto.
 *
 * 2. Vista → AppHeader (emitReaderView/subscribeReaderView). El nav
 *    secundario marca en negrita la sección abierta (§4
 *    linguatales-conectores-spec.md), y esa sección se deriva de `view` —
 *    pero `view` vive dentro de ReaderProvider. ReaderProvider emite su
 *    `view` actual cada vez que cambia (y 'story' al desmontarse, para que
 *    el nav no se quede marcando una sección de un relato que ya no está en
 *    pantalla); AppHeader se suscribe para reflejarlo.
 */
let navListeners = new Set();
let viewListeners = new Set();

export function emitReaderNav(action) {
  navListeners.forEach((fn) => fn(action));
}

export function subscribeReaderNav(fn) {
  navListeners.add(fn);
  return () => navListeners.delete(fn);
}

export function emitReaderView(view) {
  viewListeners.forEach((fn) => fn(view));
}

export function subscribeReaderView(fn) {
  viewListeners.add(fn);
  return () => viewListeners.delete(fn);
}
