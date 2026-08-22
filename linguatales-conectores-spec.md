# LinguaTales · Conectores, test de 10, audio y juegos 08–10

Segunda entrega. Continúa `linguatales-frases-spec.md` (frases hechas, juegos
06–07, vista exclusiva). Aquí van seis cambios más. La referencia visual sigue
siendo `LinguaTales Reader.dc.html`.

Datos ya escritos, cópialos verbatim en el repo:

- frases → `en.a1.phrases.js` (entregado en la sesión anterior)
- conectores → `en.connectors.js` (nuevo, va a `src/data/connectors/en.js`)

---

## 1 · El test del bloque pasa a 10 preguntas, de una en una

El modelo del bloque cambia: `test` (una sola pregunta) → `tests: [ … ]`, 10
entradas `{ q, a, note }`. Deja el campo `test` viejo si algo lo consume, pero la
UI lee `tests`.

Render, dentro de la caja menta al final del bloque:

- Cabecera: label `Test del bloque` a la izquierda; a la derecha, flechas `‹` `›`
  (28×28, fondo crema, borde pastel menta) y contador mono `3 / 10`.
- **Solo una pregunta visible.** Debajo: `Pregunta 03` en mono, la situación en
  serif 19px, y el botón `Ver respuesta` / `Ocultar respuesta`.
- Al revelar: la frase respuesta en serif 22px y la `note` en 12.5px gris.
- Estado: `phrTIndex` (pregunta actual, cíclica con las flechas) y `phrTests`
  (mapa de índices revelados, para que al ir y volver siga abierta la que abriste).
- Ambos se resetean al cambiar de bloque.

Las 10 preguntas de cada bloque están en el preview y en el archivo de datos: son
situacionales ("Estás en el supermercado y necesitas que alguien se quite para
pasar") y la respuesta es siempre una de las 10 frases del bloque.

## 2 · Botón de escuchar en cada frase

Dos botones por fila, redondos de 24px, glifo `▶` en reposo y `■` sonando:

- uno delante de la frase en inglés, en **ámbar** `#b45309`;
- otro dentro del bloque de contestación, en **índigo** `#4338ca`.

Reposo: fondo pastel del color, borde pastel. Activo: fondo sólido, texto blanco,
halo `0 0 0 4px <color>24`. Solo uno puede estar activo a la vez: reutiliza el
estado `playing` que ya usa el relato, con claves `'ph'+i` y `'re'+i` (y `'sph'`
para el juego 08). Es la misma pastilla que la de los párrafos del relato, solo
más pequeña. Sigue siendo placeholder visual hasta que se conecte Web Speech API.

La pastilla del panel: `10 frases · con audio y contestación`.

## 3 · Juego 08 · Di la frase en voz alta

Tercera pestaña de la fila de frases. Color **violeta** `#6d28d9`.

Misma mecánica y mismo layout que el juego 05 (habla la frase), pero sobre las
frases hechas del bloque activo:

- Caja del enunciado: label `Dila en voz alta`, la frase **en español** en serif
  25px y, debajo, la versión inglesa en 17px violeta con su botón de escuchar
  (así puedes oírla antes o después de intentarlo).
- Fila de grabación: micro de 58px (rojo `#e11d48` mientras graba), 40 barras de
  onda, y caja de puntuación a la derecha.
- Al parar: desglose palabra por palabra con el color por tramo (≥85 menta,
  ≥70 ámbar, resto carmín) y un consejo sobre la palabra más floja.
- Puntuación determinista, sin `Math.random`:
  `seed = (sphIndex + 1) * 41 + phrBlock * 17`, y por palabra
  `62 + ((seed + i*29 + w.length*13) % 39)`.
- Botones `Siguiente frase` y `Repetir`. Progreso `sphBest[i] = mejor nota`.

## 4 · Nav secundario completo

`Historias · Frases · Gramática · Phrasal Verbs · Conectores · Juegos`

El item activo se deriva de `view`: `phrases` → Frases, `linkers` → Conectores,
`game` → Juegos, resto → Historias. El activo va en negrita con subrayado 2px del
color secundario del idioma; los demás en `soft` sin subrayado.

Clicks: Historias → `view: 'story'`; Frases → `view: 'phrases'`; Conectores →
`{ view: 'linkers', cxGroup: 0 }`; Juegos → `{ view: 'game', game: 'order' }`.
Todos limpian `word: null`.

## 5 · Sección Conectores

Va **debajo de las frases**, encima de los juegos, y funciona igual que ellas:
cabecera + chips siempre visibles, panel plegado.

Acento de la sección: **`#155e75`**. Colores de registro:
`casual #0e7490` · `neutro #57534e` · `formal #7c3aed`.

### Modelo

`src/data/connectors/en.js`, indexado `IDIOMA/NIVEL`, cada nivel:
`{ note, groups: [ { title, sub, items: [ { en, es, g, r, ej } ] } ] }`.

Los **dos ejes** son el corazón del contenido y hay que enseñarlos, no solo
usarlos para ordenar:

- `g` — complejidad gramatical: 1 trivial, 2 media, 3 exige entender estructura.
- `r` — registro: casual, neutro, formal.

No son el mismo eje: `Turns out` es gramaticalmente fácil pero conversacionalmente
avanzado, y `Moreover` se entiende sin esfuerzo pero suena a ensayo académico.
El reparto por niveles del archivo de datos ya respeta eso: A1 pegamento básico,
A2 secuencia y tiempo (los de contar historias), B1 contraste y consecuencia.

### Chips (siempre visibles)

Uno por grupo del nivel: `CONECTORES · 6` en mono, el título del grupo en serif
15px, y estado `▸ Ver los 6` / `▾ Abierto`. Mismo tratamiento que los chips de
frases pero en el color de la sección. Toggle: si ya estaba abierto ese grupo,
vuelve a `view: 'story'`; si no, `{ view: 'linkers', cxGroup: i }`.

### Panel (solo el grupo abierto)

- Tarjeta crema, `border-top: 4px solid #155e75`.
- Arriba, la `note` del nivel en 13.5px, ancho máximo 62ch.
- Leyenda de los dos ejes: dos cajas pastel lado a lado —
  `Eje 1 · complejidad gramatical` / "Cuánto inglés necesitas para usarlo bien" y
  `Eje 2 · registro` / "Casual en conversación, neutro, o formal y escrito".
- Cabecera de grupo: título serif 21px + subtítulo mono en mayúsculas.
- Cada conector es una fila `grid-template-columns: 1fr 1fr auto`:
  1. conector en serif 19px + traducción en itálica 12.5px;
  2. el ejemplo en 13.5px;
  3. badges: tres puntos de 7px (`g` puntos en color, el resto en pastel) dentro
     de una cajita pastel, y el chip de registro en el color de su registro.
- Al pie, aviso en pastel del color secundario del idioma: los conectores de A1
  son transversales, siguen apareciendo en todos los niveles.

## 6 · Juego 09 · Elige el conector

Cuarta pestaña de la fila de abajo, color `#155e75`.

- Las preguntas se **derivan de los propios ejemplos** de las fichas: se hueca el
  conector dentro de su frase de ejemplo → `The plan was good. _____, nobody
  followed it.`
- Para entradas con varias formas (`later / later on`, `at first / initially`),
  prueba las formas **de la más larga a la más corta** con `\b…\b` e ignorando
  mayúsculas, y hueca la primera que aparezca. Así `Later on` se hueca entero y no
  queda un `_____ on` suelto. Si ninguna forma aparece en el ejemplo, esa entrada
  no genera pregunta (fíltrala).
- 3 opciones: la correcta + 2 conectores del mismo nivel, elegidos con el mismo
  `pick2` rotado por índice y mezclados con el shuffle sembrado (`seed = 23 + i`).
- Feedback: acierto → `✓ however — sin embargo · registro formal`;
  fallo → `✕ Era however (sin embargo).` + la frase de ejemplo completa.
- Botón `Siguiente hueco`. Progreso `cxDone`, contador sobre el total de huecos
  generados del nivel.

## 7 · Juego 10 · Examen final (desactivado, de momento)

Quinta casilla de la fila de abajo, **siempre bloqueada por ahora**:

- Fondo `rgba(25,23,19,.045)`, borde `1px dashed rgba(25,23,19,.2)`,
  `border-top: 4px solid rgba(25,23,19,.16)`, `cursor: not-allowed`,
  `opacity: .85`. Sin `onClick`.
- Título `Examen final`, subtítulo `Acaba los 9 juegos`, y a la derecha el
  contador `n/9`.
- `n` cuenta juegos **completados al 100%**, no intentados:
  order, gap, match, word y speak contra sus unidades del relato; phrase, convo y
  speakph contra las 10 frases del bloque; linker contra el total de huecos.
- Cuando `n === 9` sigue desactivado en esta entrega. El contenido del examen
  (mezcla de los nueve juegos con nota final) es trabajo posterior: no lo
  implementes todavía, pero deja el cálculo hecho para poder desbloquearlo con un
  solo cambio.

## Estado nuevo, resumen

```
view: 'story' | 'phrases' | 'linkers' | 'game'
phrTIndex, phrTests          // test del bloque: pregunta actual + reveladas
playing                      // 'ph'+i | 're'+i | 'sph' | índice de párrafo
sphIndex, sphState, sphBest   // juego 08
cxGroup                       // grupo de conectores abierto
cxIndex, cxPick, cxDone       // juego 09
```

## Definición de terminado

- El test muestra **una** pregunta, con flechas y contador `n / 10`, y recuerda
  cuáles has revelado.
- Cada frase y cada contestación tienen su botón de audio, y solo uno puede estar
  activo a la vez.
- La fila de abajo tiene 5 casillas: juegos 06, 07, 08, 09 y el examen en gris.
- El nav marca en negrita la sección abierta, y `Conectores` la abre.
- Los chips de conectores arrancan cerrados; abrir uno cierra relato, frases y juego.
- El juego 09 nunca muestra un hueco mal cortado (`_____ on`) ni una opción
  repetida.
- Nada de `Math.random` en ninguno de los juegos nuevos.
