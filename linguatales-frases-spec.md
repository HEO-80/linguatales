# LinguaTales · Frases hechas, juegos 06–07 y vista exclusiva

Instrucciones para implementar en la app React (CRACO). La referencia visual es
`LinguaTales Reader.dc.html` en este proyecto: si hay duda de medidas, colores o
copy, gana el preview.

Tres cambios, en este orden:

1. Nueva sección **Frases hechas y su contestación** (por nivel, en bloques de 10).
2. Dos juegos nuevos que salen de esas frases → la fila de juegos pasa a dos filas.
3. **Vista exclusiva**: relato, frases y juego no se ven nunca a la vez.

Más un bug de color a arreglar (final del documento).

---

## 1 · Datos: frases por nivel

Nuevo módulo `src/data/phrases/en.a1.js` + índice `src/data/phrases/index.js`,
con la misma forma de clave que las historias: `IDIOMA/NIVEL`.

```js
// src/data/phrases/index.js
export const PHRASES = { 'EN/A1': [ /* bloques */ ] };
```

Cada nivel es un array de **bloques de 10 frases**. Un bloque:

```js
{
  num: '01',
  title: 'Saludos y despedidas',
  items: [
    {
      en: 'Hello.',
      es: 'Hola.',
      ej: 'Hello. Nice to meet you.',
      tip: 'No lo digas como un robot, hazlo con energía y con una sonrisa.',
      re: ['Hi! How are you?', '¡Hola! ¿Qué tal?']   // contestación EN, ES
    },
    // …10 en total
  ],
  test: {
    label: 'Test 1',
    q: '¿Qué dirías si quieres despedirte de alguien de manera cálida?',
    a: 'Take care.',
    note: 'Muestra que te importa la persona.'
  }
}
```

Reglas del modelo:

- `re` es obligatorio en cada frase: la contestación natural. **De ahí sale el
  juego 07**, así que no puede faltar ninguna.
- `ej` y `tip` van **verbatim** del material original del curso. No reescribir.
- Un bloque son exactamente 10 items. El objetivo por nivel son ~50 frases = 5
  bloques. Ahora hay 2 cargados (01 Saludos y despedidas, 02 Cortesía y pedir
  ayuda); cópialos del preview, que ya los tiene con el texto definitivo.
- La numeración visible de cada frase es continua entre bloques:
  `String(indiceBloque * 10 + i + 1).padStart(2, '0')` → bloque 02 empieza en 11.
- Las frases son **de nivel, no de relato**: al cambiar de historia no cambian;
  al cambiar de nivel o idioma, sí.

## 2 · Sección de frases (UI)

Va **debajo del índice de gramática / phrasal verbs** y **encima de los juegos**.

Estructura:

```
[ cabecera ]  Frases hechas y su contestación ──────────  N frases cargadas · bloques de 10 · nivel A1
[ chips    ]  Bloque 01 / Saludos y despedidas / ▸ Ver las 10      Bloque 02 / … / ▸ Ver las 10
[ panel    ]  (solo si hay un bloque abierto)
```

### Chips de bloque

- Un chip por bloque, en fila con `flex-wrap` y `gap: 10px`.
- Tres líneas: `Bloque 01` (mono 9.5px, mayúsculas), título (serif 15px), estado
  (mono 9px): `▸ Ver las 10` cerrado, `▾ Abierto` abierto.
- Chip cerrado: fondo crema, borde 1px pastel ámbar, `border-left: 4px` pastel.
- Chip abierto: fondo `pastel(AMBER, .7)`, `border-left: 4px solid AMBER`,
  sombra `0 2px 8px AMBER2b`.
- Los chips **siempre visibles**: son la cabecera del acordeón.
- Acento de toda la sección: `AMBER = #b45309`. Las contestaciones usan
  `INDIGO = #4338ca`.

### Panel del bloque (acordeón, cerrado por defecto)

Nada de frases desplegadas al cargar. El panel solo se monta cuando el bloque
está abierto (ver §4).

- Tarjeta crema, `border-top: 4px solid AMBER`, radio 6px, sombra de tarjeta.
- Cabecera: kicker `Bloque 01 · Saludos y despedidas` + pastilla a la derecha
  `10 frases · con contestación`.
- Cada frase es una fila `display: grid; grid-template-columns: 30px 1.1fr 1fr;
  gap: 18px; align-items: start;` con `border-bottom` pastel:
  - **col 1**: número mono 10.5px en ámbar.
  - **col 2**: `en` en serif 20px; `es` debajo en itálica 13px gris; luego el
    bloque de contestación, separado por `border-top: 1px dashed` índigo:
    flecha `↳` mono + `re[0]` serif 16px índigo + `re[1]` itálica 12px gris.
  - **col 3**: `ej` (13.5px, línea 1.5) y `tip` debajo (12.5px gris).
- Al final del bloque, caja de test verde menta con `border-left: 4px`:
  label del test en kicker, pregunta en serif 18px, botón mono
  `Ver respuesta` / `Ocultar respuesta`, y al revelar: respuesta en serif 20px +
  `note` en 12.5px gris. El estado del test se resetea al cambiar de bloque.

## 3 · Juegos 06 y 07 (salen de las frases)

La fila de pestañas de juego pasa a **dos filas**, ambas
`display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px`:

- **fila 1**: los 5 juegos del relato (ordenar, hueco, emparejar, palabra, hablar).
- **fila 2**: los 2 juegos de frases (ocupan 2 de las 5 columnas, así quedan
  alineados con la fila de arriba; no estirarlos a media pantalla).

La tarjeta de pestaña es **la misma** que ya existe (icono, título, subtítulo,
contador a la derecha, `border-top: 4px` del color del juego): extrae el builder
actual a una función y úsala para las dos filas. Nota de la cabecera de juegos:
`Al abrir un juego se esconden el relato y las frases`.

Pestañas nuevas:

| id | icono | título | subtítulo | color | contador |
|----|-------|--------|-----------|-------|----------|
| `phrase` | ✦ | Elige la frase | Cómo se dice en inglés | `#b45309` | aciertos/10 |
| `convo` | ❝ | Sigue la conversación | Contesta con la frase justa | `#4338ca` | aciertos/10 |

Los dos juegos trabajan **sobre el bloque activo** (`phrBlock`), 10 preguntas.

### Juego 06 · Elige la frase correcta

- Enunciado: caja blanca traslúcida con `border-left: 5px solid AMBER`,
  label `¿Cómo lo dirías en inglés?` y la frase en **español** (`item.es`) en
  serif 25px.
- Tres opciones en inglés: la correcta (`item.en`) + 2 distractores tomados de
  otras frases del mismo bloque, rotados por índice para que no salgan siempre
  los mismos:
  `pick2(arr, k) = [arr[(k*3+1) % n], arr[(k*3+2) % n]]`, y el orden se mezcla
  con el shuffle determinista sembrado (`seed = 3 + phIndex`). Sin `Math.random`:
  la misma pregunta debe verse igual entre renders.
- Al elegir: la correcta se pinta menta, la fallada carmín, las demás quedan
  neutras y ya no se puede volver a pulsar.
- Feedback: acierto → `✓ Correcto · <en> — <tip>`; fallo → `✕ Era: <en>`.
- Botón `Siguiente frase` avanza cíclico y limpia la elección.

### Juego 07 · Sigue la conversación

- Igual de estructura, con `INDIGO`.
- Enunciado: label `Te dicen`, la frase en **inglés** (`item.en`) en serif 25px y
  su traducción en itálica debajo.
- Tres opciones: `item.re[0]` (correcta) + 2 contestaciones de otras frases del
  bloque, mismo `pick2` con `seed = 11 + coIndex`.
- Feedback: acierto → `✓ <re[0]> — <re[1]>`; fallo →
  `✕ Se contesta: <re[0]> — <re[1]>`.
- Botón `Siguiente turno`.

### Progreso

- Un acierto por índice, sin duplicar: `phDone[i] = 1`, `coDone[i] = 1`.
- Contador de la pestaña y de la cabecera: `Object.keys(done).length + '/' + 10`.
- Badge `✓ Hecho` en la cabecera cuando la pregunta actual ya está acertada.
- Se resetean `phIndex/phPick/coIndex/coPick` al cambiar de bloque, pero **el
  progreso no se pierde al cerrar el juego**. Si lo persistes, la clave es
  `IDIOMA/NIVEL/BLOQUE` (paralela a la de relatos, que es `IDIOMA/NIVEL/RELATO`)
  y guarda **índices, no texto**.

## 4 · Vista exclusiva: solo una zona abierta

Un único estado manda: `view: 'story' | 'phrases' | 'game'` (inicial `'story'`).
El objetivo pedagógico es forzar a retener de memoria: **jugando no puedes leer**.

Reglas:

- `view === 'story'` → se ven el relato completo, el índice de gramática/phrasal
  verbs y el panel de detalle. No se ve ningún juego ni ningún bloque de frases.
- `view === 'phrases'` → se ve el bloque de frases abierto. Relato y juego, fuera.
- `view === 'game'` → se ve el juego activo. Relato y frases, fuera.
- Chips y pestañas **no** se esconden nunca: son la navegación.

Interacciones:

- Pestaña de juego: si ya era la activa y `view === 'game'` → vuelve a
  `view: 'story'`. Si no → `{ view: 'game', game: id, word: null }`.
- Chip de bloque: si ya era el abierto y `view === 'phrases'` → vuelve a
  `view: 'story'`. Si no → `{ view: 'phrases', phrBlock: i, … }` reseteando el
  test y los índices de los dos juegos de frases.
- Al abrir juego o frases se cierra la ficha de palabra (`word: null`).
- Nav secundario: `Historias` → `view: 'story'`; `Juegos` → `{ view: 'game',
  game: 'order' }`. Igual el icono de Juegos del rail.
- Todos los flags de juego se derivan de las dos cosas:
  `isOrder = view === 'game' && game === 'order'`, etc. No basta con `game`.

### Cabecera-muñón del relato

Cuando `view !== 'story'`, en el sitio del relato queda una barra clicable (es la
única forma de volver desde un juego sin usar el nav):

- Fila crema, `border-left: 5px solid` color secundario del idioma, sombra corta,
  cursor pointer, hover con fondo pastel.
- Izquierda: kicker `Relato 01 · A1`, título en serif 26px, meta en mono 10px
  (`3 min · 62 palabras · 14 nuevas`).
- Derecha: pastilla mono `▸ Ver el relato`.
- Al pulsar: `view: 'story'` (cierra juego o frases).

## 5 · Bug de color a arreglar

`_rgb()` no expandía hex de 3 dígitos: `parseInt('fff', 16) = 4095` → devolvía
`rgb(0,15,255)`, un azul saturado. Todo lo que derivaba color contra `'#fff'`
salía con contraste ~1.5:1. Arréglalo en `src/theme/color.js`:

```js
if (c[0] === '#') {
  let h = c.slice(1);
  if (h.length === 3) h = h[0]+h[0] + h[1]+h[1] + h[2]+h[2];
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
```

Y donde una caja sea blanco traslúcido sobre un fondo de color, no pases `'#fff'`
como fondo al derivar el texto: pasa el fondo **compuesto real**
(p. ej. `pastel(ACCENT, .94)`), o el contraste medido no coincide con el calculado.

## Definición de terminado

- Con el relato abierto no hay ningún juego ni bloque de frases en pantalla.
- Con un juego abierto solo se ve el muñón del relato + chips + pestañas + juego.
- Los chips arrancan cerrados: la sección de frases no ocupa alto hasta pulsarla.
- Juegos 06 y 07 generan sus 3 opciones del bloque activo, sin `Math.random`, y
  los distractores cambian con el índice.
- Ningún texto por debajo de 4.5:1 de contraste (comprobar las etiquetas mono de
  9px de los dos juegos nuevos, que son las que fallaban).
