# LinguaTales — Especificación del Lector interactivo

Segunda iteración, **funcional**. La versión anterior era un escaparate: mostraba las seis tarjetas de idioma todo el rato. Esta es una herramienta de lectura: idioma y nivel viven colapsados en un rail, y todo el espacio se dedica al relato, a sus reglas y a los juegos que salen de él.

Referencia visual: `LinguaTales Reader.dc.html`. Ancho de diseño 1440px.

> **Reutiliza los archivos ya entregados**: `linguatales/color.js`, `languages.js`, `tokens.js`, `motifs.jsx`. Todo el sistema de derivación de color (`pastel`, `dark`, `fg`, `hue`) sigue vigente sin cambios. Este documento añade la estructura funcional encima.

---

## 1. Regla de oro: nada se etiqueta si no existe

El error que más veces cometimos. El selector de nivel y el de idioma **no pueden reetiquetar contenido que no tienen**: cambiar a A2 y seguir mostrando el relato de A1 con el rótulo "A2" es peor que no ofrecer A2.

**Catálogo indexado por `IDIOMA/NIVEL`:**

```js
STORIES = {
  'EN/A1': [ …dos relatos… ],
  'EN/A2': [ …dos relatos… ],
  // todo lo demás: no existe todavía
}

has(lang, level) => !!STORIES[`${lang}/${level}`]
```

En los desplegables, lo que no está en el catálogo se renderiza **deshabilitado**: `opacity .52`, `cursor:not-allowed`, sin `onClick`, y con una etiqueta `PRONTO` en gris. En cuanto añades una clave al catálogo, esa opción se habilita sola — sin tocar la UI.

Un idioma se considera disponible si tiene **algún** nivel. Al elegirlo, si el nivel actual no existe para él, salta al primero que sí exista en lugar de dejar la vista vacía.

**Ningún rótulo literal que dependa del idioma.** El encabezado de la tarjeta oscura sale de `lang.navIdiom`, la misma fuente que el nav — nunca la cadena `"Phrasal Verbs"` escrita a mano. Si no, en portugués el nav dice "Expressões" y la tarjeta dos filas más abajo dice "Phrasal Verbs".

---

## 2. Modelo de datos — el corazón del asunto

Un relato es esto. **Cada palabra va etiquetada con su función gramatical**, y de ahí sale todo: el color, la ficha al tocarla, y las preguntas de los juegos.

```js
{
  num: '01',
  title: 'A New Morning',
  sub: 'Present simple · rutinas',
  tag: 'En curso',                    // 'Leído' | 'En curso' | 'Nuevo'
  meta: '3 min · 62 palabras · 14 nuevas',

  // un objeto por frase; el relato se lee como párrafos
  paras: [
    {
      tr: 'Anna se despierta a las siete todos los días.',   // traducción de la frase
      t: [
        // [ texto, función, traducción, explicación ]
        ['Anna',      'noun', 'Anna',        'Nombre propio: sujeto de la frase.'],
        ['wakes up',  'phr',  'se despierta','Phrasal verb: wake + up. Inseparable en este uso.'],
        ['at',        'prep', 'a',           'Preposición de hora puntual: at seven.'],
        …
      ]
    },
    …
  ],

  // reglas que practica ESTE relato, con recuento y ejemplos del propio texto
  grammar: [
    { name: 'Present Simple', hits: '9 usos', ex: 'opens · makes · eats · leaves', c: '#0e9f6e' },
    …
  ],

  // phrasal verbs que salen, con la frase donde aparecen
  phrasals: [
    { verb: 'wake up', mean: 'despertarse', quote: 'Anna wakes up at seven o’clock.' },
    …
  ],

  // huecos del juego 02, sacados de estas mismas frases
  gaps: [
    { s: ['She','___','the','window','every','morning.'],
      answer: 'opens', opts: ['opens','open','opening'],
      why: 'Present simple, 3ª persona: opens.' },
    …
  ]
}
```

**Un phrasal verb es UN token**, no dos: `['wakes up', 'phr', …]`. Partirlo en `wakes` + `up` rompe el color y la ficha.

### Funciones gramaticales y su color

| Clave | Etiqueta | Color |
|---|---|---|
| `art` | Artículo | `#0e9f6e` verde |
| `verb` | Verbo | `#e0a80c` ámbar |
| `noun` | Sustantivo | `#2563eb` azul |
| `adj` | Adjetivo | `#e11d48` rosa |
| `adv` | Adverbio | `#7c3aed` lila |
| `prep` | Preposición | `#0891b2` cian |
| `pron` | Pronombre | `#f97316` naranja |
| `phr` | Phrasal verb | `#be185d` magenta |

El etiquetado es **contenido, no presentación**: si el backend puede generarlo (spaCy, un POS tagger, o el propio autor del relato), mejor. La UI solo consume estas cuatro posiciones por token.

---

## 3. Componentes

```
src/
  theme/                    color.js · languages.js · tokens.js   (ya entregados)
  data/
    stories/
      en.a1.js  en.a2.js    un archivo por IDIOMA/NIVEL
      index.js              STORIES = {'EN/A1': …}, has(), catalogue()
  state/
    ReaderContext.jsx       { lang, level, story, word, showTr, roleFilter, game }
  components/
    AppHeader/              nav principal + filete tricolor + racha + avatar
    LanguageBar/            ⬅ NUEVO · nav secundario: bandera + motivo + nivel
      LanguageBar.jsx
      FlagMark.jsx          Union Jack dibujada (EN) / franjas verticales (resto)
    Rail/                   ⬅ NUEVO · rail colapsado de 76px
      Rail.jsx
      LanguagePopover.jsx
      LevelPopover.jsx
    StoryPicker/            botón + cajón de relatos del nivel
    StoryReader/            ⬅ el núcleo
      StoryReader.jsx
      RoleLegend.jsx        las 8 etiquetas; filtran el texto
      WordToken.jsx         palabra coloreada, pulsable
      WordCard.jsx          ficha de la palabra tocada
    StoryFacts/
      GrammarCard.jsx       reglas de este relato
      IdiomCard.jsx         phrasal verbs de este relato (tarjeta oscura)
    Games/
      GameTabs.jsx          tres pestañas con progreso
      GameShell.jsx         envoltura común
      WordOrderGame/        juego 01
      GapFillGame/          juego 02
      MatchIdiomGame/       juego 03
```

Estado global: `{ lang, level, story, word, showTr, roleFilter, game }` + el estado propio de cada juego. El tema se recalcula con `useMemo(() => buildTheme(lang), [lang])`.

---

## 4. `AppHeader` + `LanguageBar` (los dos navs)

**Principal**, sticky, fondo `tint`: filete tricolor de 4px arriba, logotipo, nav de cuatro (`Historias · Gramática · {lang.navIdiom} · Juegos` — el tercero **dinámico**), racha y avatar. Alto 66px.

**Secundario**, justo debajo, fondo crema, alto 58px. De izquierda a derecha:

1. **`FlagMark`** — 31×21px, radio 3px, con relieve.
   - **Inglés: Union Jack dibujada en SVG**, no franjas. `viewBox="0 0 60 40"`, `preserveAspectRatio="none"`: fondo `#12275e`, las dos diagonales en blanco de 8px, encima las mismas en rojo `#cf142b` de 3.4px, luego la cruz central blanca de 13px y el rojo de 7.5px. Tres franjas horizontales aquí se leen como la bandera rusa — fue una corrección explícita.
   - **Resto: franjas verticales** (`display:flex` en fila) con `p1/p2/p3`. Verticales, no horizontales: es como van Francia, Italia y Portugal.
2. **Motivo del idioma** — 30px, el mismo SVG de `motifs.jsx`, `color: p1`, `opacity .85`. Torre del reloj, sol, torre Eiffel, puerta de Brandeburgo, Coliseo, Cristo Redentor.
3. **Nombre nativo** en Newsreader 19px + micro-etiqueta "ESTÁS APRENDIENDO".
4. Separador de 1px.
5. **Chip de nivel** pulsable (abre el mismo popover que el rail): punto de color con el código, nombre del nivel, caret. Fondo `pastel(nivel, .82)`.
6. **Barra de progreso** del nivel, 84×5px, con `linear-gradient(90deg, p1, p2)`.
7. A la derecha: `"2 relatos en A1 · leyendo el 01"`.

---

## 5. `Rail` — 76px, colapsado

Fondo `tintDeep`, `border-right`, sombra interior en el borde. Contiene, centrado:

- **Pastilla de idioma** 46×46px, radio 13px, fondo `solid`, el código en mono. Al pulsar abre `LanguagePopover`.
- **Pastilla de nivel** 46×46px, fondo `pastel(nivel,.3)`. Abre `LevelPopover`.
- Tres iconos secundarios en caja crema: relatos, juegos, progreso.
- Al pie, `"01 / 2"`.

La pastilla abierta se marca con `border: 2px solid` su color.

**Popovers**: `position:fixed`, 318px de ancho, a `left:88px` (idioma en `top:96px`, nivel en `top:150px`), sobre un scrim `rgba(25,23,19,.28)` que cierra al pulsar. Cada fila: punto de color, nombre, metadatos, y a la derecha la bandera en miniatura (idioma) o la barra de progreso (nivel). Las no disponibles, deshabilitadas con `PRONTO` según §1.

**El motivo por el que el rail va colapsado:** no necesitas ver los seis idiomas mientras lees. Se despliegan cuando los pides.

---

## 6. `StoryPicker`

En la fila de migas (`INGLÉS · A1 · PRIMEROS PASOS`), a la derecha, un botón `◫ Cambiar relato (2)`. Al pulsarlo se abre un cajón con los relatos del nivel en dos columnas: número, título, subtítulo gramatical y etiqueta de estado. El activo lleva `border-left: 4px solid p1` y fondo crema.

Elegir un relato **reinicia todo lo que depende de él**: palabra seleccionada, y el estado de los tres juegos.

---

## 7. `StoryReader` — el núcleo

Tarjeta con fondo `tint`, `border-top: 4px solid p1`, radio 6px.

Cabecera: `display:flex; justify-content:space-between` — a la izquierda el bloque de título (kicker `RELATO 01 · A1`, título en Newsreader 38px, metadatos); a la derecha, con `flex-shrink:0`, los dos botones: **`◍ Ver traducción`** (alterna) y **`▶ Escuchar`** (sólido).

El texto del relato vive dentro de una **`proseBox`**: fondo `cream` (`#fffdf7`), `border-radius: 6px`, `border: 1px solid border`, `padding: 22px 26px 24px`. Es la segunda capa de color: separa el relato de su cabecera y hace que el texto destaque sobre el tinte de la tarjeta.

### 7.1 `RoleLegend` — y el filtro, que es el detalle que más gustó

Barra con borde discontinuo y las ocho etiquetas de función. **Cada una es un interruptor independiente — el filtro es multi-selección (`roleFilter: clave[]`):**

- Al pulsar `Artículo`, **todos los artículos del texto se resaltan** (fondo `pastel(c,.38)`, borde inferior a color pleno, `box-shadow 0 2px 8px {c}4d`) y **el resto se apaga** (`rgba(255,255,255,.35)`, texto gris, borde casi invisible). Se puede activar `Verbo` a la vez sin desactivar `Artículo` — cada etiqueta se enciende y apaga por separado.
- Se resalta toda palabra cuya función esté en el array; el resto se apaga. Array vacío = texto normal, nada apagado.
- La cabecera de la barra: vacío → "Toca cualquier palabra"; un filtro activo → **"Resaltando · Artículo"**, en el color de esa función; varios → **"Resaltando · 3 funciones"**, en el color por defecto.
- Cuando hay algún filtro activo aparece un botón **`✕ Quitar`** al final de la leyenda que vacía el array de un golpe.

### 7.2 `WordToken`

Cada palabra es un `<span>` pulsable: Newsreader 21px, `padding: 3px 7px`, radio 4px, fondo `pastel(color,.82)` y **`border-bottom: 2.5px solid pastel(color,.42)`** — el subrayado grueso es lo que hace que se lea como recuadro de color sin cansar. Hover: fondo más saturado y sombra suave.

Tres estados: normal · seleccionada (fondo `.38` + sombra de color) · apagada por el filtro.

El párrafo es `display:flex; flex-wrap:wrap; gap:5px; align-items:baseline` — con `gap`, nunca con espacios en el markup.

Con la traducción activada, cada frase muestra debajo su versión en español: 13.5px, cursiva, `border-left: 3px solid pastel(p2,.55)`. No sustituye al original, se añade.

### 7.3 `WordCard`

Al tocar una palabra se abre bajo el texto, con el color de su función: fondo `pastel(c,.8)`, `border-left: 5px solid c`.

Contiene: **badge** con la función en color pleno · la palabra en Newsreader 30px · su transcripción · la traducción en cursiva · **la explicación de por qué está así** ("Present simple, 3ª persona: se añade -s") · y dos botones de salto:

- si es phrasal verb → `→ Ver en {lang.navIdiom}`
- si no → `→ Ver la regla de {función}`
- y `◍ Escuchar`

Esos botones son la parte interactiva que pediste: desde una palabra llegas a su regla o a su ficha de expresión. Cablea el primero a la sección de gramática filtrada por esa regla.

Cierre con `✕` arriba a la derecha; volver a tocar la misma palabra también cierra.

---

## 8. `StoryFacts` — "En este relato"

Dos tarjetas al 50%:

- **`GrammarCard`** (menta, `pastel('#0e9f6e',.82)`): "Reglas que practica". Cada fila: chip con el nombre de la regla en su color, cuántas veces aparece, flecha, y debajo **ejemplos sacados del propio relato** en cursiva. Pulsable → lleva a la regla completa.
- **`IdiomCard`** (oscura, `dark(p1,.68)` → `dark(p1,.85)`, borde superior `p2`): encabezado `{lang.navIdiom} · 3`. Cada fila: la expresión en Newsreader blanco, su significado, flecha, y **la frase del relato donde sale**, en cursiva. La tarjeta oscura es la referencia de contraste de la página.

---

## 9. `Games` — tres juegos, todos atados a este relato

**`GameTabs`**: tres pestañas a lo ancho, cada una con su color, icono en caja crema, título, descripción y **su progreso** (`1/9`, `2/3`). La activa sube de saturación y gana glow. En pestañas, no apiladas: si no, los juegos empujan el relato fuera de la pantalla.

`GameShell` aporta fondo `pastel(accent,.84)`, borde superior de 4px, cabecera (kicker + enunciado en Newsreader 21px + cápsula de progreso) y pie con botones y mensaje de feedback coloreado.

### 9.1 `WordOrderGame` · melocotón `#f97316`

Frase objetivo: **la segunda frase del relato activo** (`paras[1]`, tokens en orden). Así el juego practica exactamente lo que se acaba de leer.

- Zona de destino: `border-left: 5px solid`, sombra interior. Huecos vacíos de 56×42px con borde discontinuo.
- Bloques con relieve: `box-shadow: 0 3px 0 {pastelBorde}, 0 4px 10px rgba(25,23,19,.12)`. Hover: `translateY(-3px)` y la sombra inferior crece a 5px.
- Clic en el banco → coloca; clic en una colocada → vuelve al banco. Añade drag & drop encima, pero **el clic debe seguir funcionando** (accesibilidad y táctil).
- Al comprobar: cada bloque se colorea según si coincide con su posición, y la zona entera cambia de fondo. Mensajes: `Faltan N palabras.` → `Frase completa. Comprueba.` → `✓ Correcto — así aparece en el relato.` / `Casi. Fíjate en el orden sujeto + verbo + objeto.`

### 9.2 `GapFillGame` · cian `#0891b2`

Las tres frases de `story.gaps`. La frase se pinta en Newsreader 22px con el hueco como caja discontinua de 84px mínimo. Al elegir una opción, la caja se rellena y se colorea (verde acierto / rojo error) y el feedback muestra **el `why`**: la explicación gramatical, que es lo que enseña. `Siguiente frase` solo se habilita al acertar.

### 9.3 `MatchIdiomGame` · lila `#7c3aed`

Dos columnas: **Expresión** (los phrasal verbs del relato) y **Significado** (mezclados con semilla estable, no `Math.random`, para que no baile entre renders).

Flujo: tocas una expresión → se marca; tocas un significado → si acierta, **las dos filas se fijan en verde** y salen del juego; si no, la fila errónea parpadea en rojo y el mensaje avisa. Feedback progresivo: `Toca una expresión de la izquierda.` → `Ahora elige su significado.` → `Ese no. Vuelve a mirar la frase del relato.` → `✓ Los tres phrasal verbs del relato, emparejados.`

---

## 10. Orden de implementación

1. `theme/` (los tres archivos ya escritos) + el test `auditContrast()` en verde para los seis idiomas.
2. `data/stories/index.js` con `has()` y el catálogo por `IDIOMA/NIVEL`. Traslada `en.a1.js` y `en.a2.js` del diseño.
3. `AppHeader` + `LanguageBar` + `FlagMark` (Union Jack incluida) + `Rail` con los dos popovers **y las opciones deshabilitadas**.
4. `StoryPicker`.
5. `StoryReader` + `RoleLegend` + `WordToken` + `WordCard`. Es el 60% del valor.
6. `StoryFacts`.
7. `GameTabs` + `GameShell` + los tres juegos.

## 11. Errores a evitar (todos los cometimos)

- Reetiquetar contenido inexistente: cambiar de nivel/idioma y servir el relato anterior con el rótulo nuevo. Usa `has()` y deshabilita.
- Un rótulo literal dependiente del idioma ("Phrasal Verbs") contradiciendo al nav.
- Partir un phrasal verb en dos tokens.
- Escribir un color de texto a mano sobre un tinte: todo por `fg(color, superficieREAL, ratio)`. Si el elemento vive en una fila resaltada, la superficie es `tintDeep`, no la página.
- Decidir el color de un glifo comparando cadenas de color en vez de medir el ratio.
- Tres franjas horizontales como bandera inglesa (parece la rusa) → Union Jack dibujada.
- Espaciar palabras o botones con espacios en el markup en vez de `gap`.
- Mezclar los significados del juego 03 con `Math.random` (rebota en cada render).
