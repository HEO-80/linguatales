/**
 * src/state/readerNavBus.js
 *
 * AppHeader y Rail viven FUERA del árbol de ReaderProvider — en AppShell son
 * hermanos de <main>{children}</main>, no descendientes (ReaderProvider solo
 * envuelve StoryReaderPage, y solo existe en la ruta de un relato). Un
 * Context de React no cruza esa frontera, así que "Historias" → view:'story'
 * y "Juegos" → {view:'game', game:'order'} no pueden leer/escribir el
 * contexto directamente.
 *
 * Este bus (módulo plano, no Context) es la única vía para esas dos
 * acciones de navegación: AppHeader/Rail emiten, ReaderProvider escucha
 * mientras está montado. Fuera de la página de un relato, emitir no hace
 * nada — no hay nadie suscrito, y eso es correcto (no hay `view` que mover).
 */
let listeners = new Set();

export function emitReaderNav(action) {
  listeners.forEach((fn) => fn(action));
}

export function subscribeReaderNav(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
