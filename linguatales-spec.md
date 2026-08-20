# LinguaTales — Especificación de diseño e implementación

App de aprendizaje de idiomas basada en **historias cortas + práctica de pronunciación**. Público adulto.

Dirección visual: **editorial**, no dashboard. Papel crema, tipografía literaria, radios pequeños, sombras suaves. **Cada idioma tiene identidad de bandera** y ese color recorre toda la página.

Ancho de referencia: 1440px. Layout fluido con grid/flex + `gap`.

---

## 0. Tipografía — cargar primero, es lo que da el carácter

```html
<link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Karla:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

| Familia | Uso | Nunca |
|---|---|---|
| **Newsreader** (serif) | Títulos, nombres de idioma, texto del relato, palabras del juego, códigos de nivel, números de puntuación | Interfaz, etiquetas |
| **Karla** (sans) | Cuerpo, botones, descripciones, chips de gramática | Titulares |
| **IBM Plex Mono** | Micro-etiquetas mayúsculas, metadatos, porcentajes, contadores | Texto corrido |

**Micro-etiqueta** (patrón repetido en toda la app): Plex Mono, 9.5–10px, `font-weight:700`, `letter-spacing:1.4–1.8px`, `text-transform:uppercase`.

Tamaños clave: H1 hero 40px · título de relato 42px · título de tarjeta grande 34px / mediana 29px · texto del relato 17.5px · traducción 14px · cuerpo 13–13.5px · palabras del juego 19px.

---

## 1. El sistema de color (crítico — leer antes de escribir CSS)

**No hay una paleta fija de pasteles.** Todos los tonos se **derivan por cálculo** de dos colores base por idioma. Implementa estas funciones una vez (`src/theme/color.js`) y úsalas en todos los componentes:

```js
// mezcla lineal en RGB
mix(a, b, t)

// pastel = color mezclado con crema  [252,248,238]
pastel(hex, t)        // t alto = más claro. t=0.76 → fondo de tarjeta activa

// oscuro = color mezclado con tinta  [14,13,11]
dark(hex, t)          // t=0.68 → fondo de la tarjeta idiomática

// contraste WCAG
luminance(rgb), ratio(a, b)

// TEXTO ACCESIBLE: acerca `hex` a blanco o negro (según la luminancia del fondo)
// hasta alcanzar el ratio pedido. SIEMPRE usar esto para texto sobre tinte.
fg(hex, bgColor, targetRatio = 4.5)
```

### 1.1 Identidad por idioma

```js
const LANGUAGES = {
  EN: { name:'Inglés',    native:'English',   p1:'#12275e', p2:'#cf142b', p3:'#ffffff', navIdiom:'Phrasal Verbs' },
  ES: { name:'Español',   native:'Español',   p1:'#c8102e', p2:'#f4a900', p3:'#c8102e', navIdiom:'Modismos' },
  FR: { name:'Francés',   native:'Français',  p1:'#17368f', p2:'#e1223b', p3:'#ffffff', navIdiom:'Expressions' },
  DE: { name:'Alemán',    native:'Deutsch',   p1:'#1d1d1d', p2:'#dd2b1c', p3:'#f5c518', navIdiom:'Trennbare Verben' },
  IT: { name:'Italiano',  native:'Italiano',  p1:'#0b8a4b', p2:'#ce2b37', p3:'#ffffff', navIdiom:'Verbi pronominali' },
  PT: { name:'Portugués', native:'Português', p1:'#009a4e', p2:'#ffcb00', p3:'#2b3a8f', navIdiom:'Expressões', warm:true }
};
```

`p1/p2/p3` son las tres franjas de bandera. `warm:true` en PT para separarlo del verde italiano.

### 1.2 `hue()` — la función que evita que los pasteles salgan grises

Un azul marino o un negro dan pastel gris. Pero **la puerta debe medir el croma del pastel resultante, no la luminancia del original** (si mides luminancia, el azul francés —oscuro pero saturado— se desvía a rosa por error):

```js
function hue(lang) {
  const p = rgb(pastel(lang.p1, 0.76));
  const spread = Math.max(...p) - Math.min(...p);
  if (spread < 14) {                       // gris de verdad → tirar del secundario
    const alt = lang.p3 !== '#ffffff' ? lang.p3 : lang.p2;
    return mix(lang.p1, alt, 0.68);        // EN→carmesí, DE→dorado
  }
  if (lang.warm) return mix(lang.p1, lang.p2, 0.34);  // PT→verde lima
  return lang.p1;                          // FR/ES/IT conservan su tono
}
```

Amplitudes medidas: EN 7 (desvía) · DE 10 (desvía) · FR 18 · IT 28 · PT 33 · ES 48 (conservan).

### 1.3 Tokens derivados del idioma activo

```js
const h = hue(A);
const tint     = pastel(h, 0.84);   // superficie principal (cabecera, tarjeta Historias, banda)
const tintDeep = pastel(h, 0.73);   // fila resaltada, pie, degradado de banda
const border   = pastel(h, 0.54);   // borde visible de tarjeta
const solid    = dark(A.p1, 0.18);  // botones sólidos, avatar, badge de nivel
const idiomBg  = dark(A.p1, 0.68);  // fondo de la tarjeta idiomática
```

### 1.4 Colores fijos de sección y nivel

| Elemento | Color base | Fondo |
|---|---|---|
| Gramática | `#0e9f6e` menta | `pastel(c, 0.82)` |
| Juegos | `#f97316` melocotón | `pastel(c, 0.84)` |
| Nivel A1 | `#0e9f6e` | `pastel(c, 0.86)` / activo `0.74` |
| Nivel A2 | `#3f9d2f` | ídem |
| Nivel B1 | `#e0a80c` | ídem |
| Nivel B2 | `#f97316` | ídem |
| Nivel C1 | `#e11d48` | ídem |
| Nivel C2 | `#7c3aed` | ídem |
| Juego "Elegir el hueco" | `#0891b2` | `pastel(c, 0.80)` |
| Juego "Dictado" | `#7c3aed` | ídem |
| Juego pendiente | `#8d8674` | `pastel(c, 0.88)` |

Neutros: página `#f7f1e3` · crema de caja interior `#fffdf7` · tinta `#191713` · texto suave `#4a443a` · gris `#6d6658`.

### 1.5 Regla de accesibilidad — no negociable

**Ningún color de texto se escribe a mano sobre un tinte.** Todos pasan por `fg(color, superficieReal, ratio)`. Dos errores que ya cometimos y hay que evitar:

1. **Apunta a la superficie real, no a la página.** El marcador ▶ vive sobre `tintDeep` (fila resaltada), no sobre el fondo de página. Los metadatos del listado viven sobre `#fffdf7`, no sobre `tint`.
2. **El glifo del micrófono** se decide midiendo el ratio, no comparando cadenas: `ratio(white, p2) >= 4.5 ? white : ink`. Con amarillo (ES/DE/PT) tiene que salir tinta oscura.

Ratios: 4.5 mínimo · 5–6 en títulos y códigos de nivel · 7 en chips de juego.

### 1.6 Sombras

```js
const shadow   = '0 1px 2px rgba(25,23,19,.05), 0 6px 14px rgba(25,23,19,.055), 0 16px 34px rgba(25,23,19,.05)';
const shadowSm = '0 1px 2px rgba(25,23,19,.05), 0 4px 10px rgba(25,23,19,.05)';
```

Tres capas, opacidad baja. La tarjeta de idioma activa añade `0 3px 0 {p1}` delante (filete de color al pie). Radio de tarjeta: 5px. Radio de chip: 4px.

---

## 2. Arquitectura de componentes

```
src/
  theme/
    color.js              mix, pastel, dark, fg, ratio, hue
    languages.js          LANGUAGES, LEVELS, SECTION_COLORS
    tokens.js             buildTheme(langCode) → {tint, tintDeep, border, solid, idiomBg, …}
  data/
    stories.<lang>.js     relatos + frases con traducción por idioma
    grammar.<lang>.js     temas de gramática
    idioms.<lang>.js      phrasal verbs / perífrasis / trennbare Verben…
  components/
    AppHeader/            navbar + filete tricolor + racha + avatar
    LanguageShelf/
      LanguageShelf.jsx   contenedor de las 6 tarjetas
      LanguageCard.jsx    tarjeta individual (franjas + motivo + progreso)
      motifs/             6 SVG: BigBen, Sun, EiffelTower, BrandenburgGate, Colosseum, Cristo
    SectionGrid/
      SectionGrid.jsx     el grid 1.55fr 1fr 1fr
      StoriesCard.jsx     tarjeta grande + escalera + listado
      LevelLadder.jsx     los 6 escalones A1–C2
      StoryList.jsx       filas de relato con etiqueta de estado
      GrammarCard.jsx     tarjeta menta + chips
      IdiomCard.jsx       tarjeta oscura (Phrasal Verbs y equivalentes)
      GamesCard.jsx       tarjeta melocotón + 3 chips
    StoryReader/
      StoryReader.jsx     banda completa
      SentencePair.jsx    fila original + traducción alineadas
      PronunciationBar.jsx micro + onda + métricas + precisión
      Waveform.jsx        34 barras
    Games/
      GameShell.jsx       ⚠ contrato común de juego (ver §5)
      WordOrderGame/      juego 01 — ordenar la frase
        WordOrderGame.jsx
        WordBlock.jsx     bloque con relieve
        DropZone.jsx      zona de destino + huecos punteados
      GapFillGame/        juego 02 (pendiente)
      DictationGame/      juego 03 (pendiente)
      GameCatalogue.jsx   tarjetas laterales + hueco punteado
    AppFooter/            pie + puntos de idioma
```

**Estado global mínimo** (context o store): `{ lang, level, sentenceIndex }`. El tema se recalcula con `useMemo(() => buildTheme(lang), [lang])` y se reparte por contexto. Ningún componente escribe hex a mano; todos leen del tema.

---

## 3. Componentes de estructura

### 3.1 `AppHeader`
- Sticky, `z-index:40`, fondo `tint`, `border-bottom: 1px solid border`, sombra `0 2px 12px rgba(25,23,19,.06)`.
- **Filete tricolor de 4px** arriba: `linear-gradient(90deg, p1 0 33%, p2 33% 66%, p3 66% 100%)`.
- Logotipo "LinguaTales" en Newsreader 29px + lema en micro-etiqueta.
- Nav de 4 elementos: `Historias · Gramática · {navIdiom} · Juegos`. **El tercero es dinámico** — nunca dejarlo fijo en "Phrasal Verbs". Activo: peso 700 + `border-bottom: 2px solid p2`.
- Racha en cápsula crema con borde del idioma; avatar circular en `solid`.

### 3.2 `LanguageShelf` + `LanguageCard`
Fila flex de 6 tarjetas, `gap:12px`. **La activa crece a `flex:1.5`** (las demás `flex:1`) con `transition: flex .22s`.

Cada tarjeta:
- Fondo `pastel(hue(lang), activa ? 0.76 : 0.84)` — **color en toda la superficie**, no solo un borde.
- Tres franjas de bandera arriba (9px activa / 6px inactiva), una por `p1/p2/p3`. La franja blanca lleva `inset 0 -1px 0 border` para no desaparecer.
- **Motivo SVG de marca de agua** en la esquina superior derecha, desbordando el borde, `color: p1`, `opacity: .2` activa / `.13` inactiva, `pointer-events:none`. Trazo de 1.4px, `viewBox="0 0 24 24"`, `stroke="currentColor"`, sin relleno. Geométricos y mínimos, no ilustraciones:

| Idioma | Motivo | Construcción |
|---|---|---|
| EN | Torre del reloj | rectángulo + aguja triangular + círculo con dos manecillas |
| ES | Sol | círculo + 8 rayos |
| FR | Torre Eiffel | dos diagonales + 3 travesaños |
| DE | Puerta de Brandeburgo | dintel + 4 columnas + frontón |
| IT | Coliseo | arco exterior + 2 arcos interiores + cornisa |
| PT | Cristo Redentor | círculo (cabeza) + vertical + brazos + base |

- Activa: nivel actual en Newsreader 26px, barra de progreso con `linear-gradient(90deg, p1, p2)`, contadores. Inactiva: solo el número de relatos.
- Al pulsar: cambia el idioma **y reinicia** `sentenceIndex` y el estado del juego.

### 3.3 `SectionGrid`
`grid-template-columns: 1.55fr 1fr 1fr`, `gap:16px`. `StoriesCard` ocupa `grid-row: span 2`; `GamesCard` ocupa `grid-column: span 2`.

**Cada tarjeta con fondo distinto** para que se distingan de un vistazo:

| Tarjeta | Fondo | Borde superior |
|---|---|---|
| Historias | `tint` (color del idioma) | 4px `p1` |
| Gramática | `pastel('#0e9f6e', .82)` menta | 4px `#0e9f6e` |
| Idiomática | `linear-gradient(158deg, dark(p1,.68), dark(p1,.84))` | 4px `p2` |
| Juegos | `pastel('#f97316', .84)` melocotón | 4px `#f97316` |

La tarjeta idiomática en oscuro es la **referencia de contraste** de la página: texto blanco, significados en `#c9c3b7`, niveles en `fg(p2, idiomBg, 4.6)`.

### 3.4 `LevelLadder`
Seis escalones de altura creciente (48, 60, 72, 84, 96, 108px), `align-items:flex-end`, `gap:7px`.
- Cada uno con **su propio pastel**, `border-bottom: 4px solid` su color, radio `4px 4px 0 0`.
- Relleno interior absoluto desde abajo con `height: {pct}%` y `opacity .16` (.22 activo) → progreso visible.
- Porcentaje arriba en mono, código de nivel abajo en Newsreader; ambos vía `fg(c, bg, 6.5)`.
- Activo: `box-shadow: 0 -2px 14px {c}3d` + sombra suave.
- Al pulsar cambia el listado de relatos de abajo.

### 3.5 `StoryList`
Dentro de una caja crema `#fffdf7` (segunda capa de color sobre el tinte). Filas: número mono · título Newsreader 17px + subtítulo gramatical · etiqueta de estado · duración. Hover: fondo `tintDeep`.

Etiquetas: **Leído** menta · **En curso** en `p2` del idioma · **Nuevo** neutro. Fondo `pastel(c,.78)`, texto `fg(c, ese fondo, 5)`.

---

## 4. `StoryReader` — la vista de historia

Banda con `linear-gradient(180deg, tintDeep, tint)` y bordes del idioma.

- Cabecera: badge de nivel en `solid`, metadatos, título del relato 42px, botón **▶ Leer en voz alta** (sólido) y **◍ Traducción** (fantasma crema).
- **Lector en dos columnas** dentro de una caja `#fffdf7` con radio 5px y `overflow:hidden`: original a la izquierda, traducción a la derecha, **alineadas frase a frase** (una fila por frase en ambas columnas, misma altura).
- Frase activa: fondo `tintDeep` + `border-left: 4px solid p2` + marcador ▶ en `fg(p2, tintDeep, 4.6)`. Las ya leídas llevan `·`. Clic en una frase la activa.
- `PronunciationBar`: `border-left: 5px solid p2` sobre crema.
  - Cita de la frase activa en Newsreader 20px.
  - **Micrófono**: círculo de 56px en `p2`, halo `0 0 0 6px {p2}2b`. El glifo usa la regla de §1.5.2.
  - `Waveform`: 34 barras de 3px, altura `4 + |sin(i·.55)·cos(i·.21)|·34`; las primeras 22 en `p2`, el resto en gris → sensación de grabación en curso.
  - Tres métricas en cajas pastel propias: **Fluidez** menta · **Ritmo** ámbar · **Fonemas** rosa. Número en Newsreader 28px.
  - **Precisión** en caja menta: porcentaje, barra, y una **pista concreta por idioma** (`th` en inglés, `rr` en español, `ch` en alemán, `ão` en portugués…) con el fonema resaltado.

**Regla de contenido:** el relato, la cita del micrófono y la pista de pronunciación deben estar **en el idioma seleccionado**. No renombrar el título al idioma dejando el texto en inglés — o traduces el contenido, o mantienes la vista en inglés y la etiquetas como tal.

---

## 5. `Games` — contrato para que se puedan añadir juegos

`GameShell` define la envoltura común y **cada juego solo implementa su interior**:

```jsx
<GameShell
  index="01"                    // se muestra como "Juego 01"
  title="Ordena la frase"
  blurb={<>Arrastra cada palabra… Del relato <em>{story.title}</em>.</>}
  level="B1"
  progress={`${done} / ${total}`}
  accent="#f97316"              // define fondo pastel, borde superior y kickers
  onCheck={...} onReset={...}
  feedback={{ text, tone }}     // tone: 'idle' | 'ready' | 'ok' | 'error'
>
  {/* interior del juego */}
</GameShell>
```

`GameShell` aporta: fondo `pastel(accent,.84)`, borde superior de 4px, sombra, cabecera con kicker/título/blurb, badge de nivel, cápsula de progreso, y el pie con **Comprobar** (sólido, deshabilitado hasta completar) + **Reiniciar** (fantasma) + mensaje de feedback coloreado por `tone`.

### 5.1 `WordOrderGame` (juego 01)

Frase objetivo = **la frase 3 del relato del idioma activo**, así el juego practica lo que se acaba de leer.

- **`DropZone`** — "Tu frase": flex wrap, `min-height:78px`, fondo `rgba(255,255,255,.62)`, `border-left: 5px solid` melocotón, sombra interior. Al comprobar, todo el fondo pasa a menta pastel (acierto) o rosa pastel (error) y el filete izquierdo cambia de color.
- **Huecos vacíos**: `58×42px`, `border: 2px dashed`, uno por palabra que falta.
- **`WordBlock`** — bloque táctil: Newsreader 19px, fondo crema, radio 5px, y el relieve viene de `box-shadow: 0 3px 0 {pastelBorde}, 0 4px 10px rgba(25,23,19,.12)`. Hover: `translateY(-3px)` y la sombra inferior crece a 5px con el color del idioma.
- **Interacción**: clic en el banco → coloca al final; clic en una palabra colocada → vuelve al banco. Implementar además HTML5 drag & drop (o `@dnd-kit`) con la misma lógica de estado; el clic debe seguir funcionando como alternativa accesible.
- **Banco de palabras** en zona propia con `border: 1px dashed`, para separarlo visualmente del destino.
- **Feedback por palabra** tras comprobar: cada bloque se colorea según si coincide con su posición en el objetivo (menta / rosa), no solo el conjunto.
- Mensajes: `Faltan N palabras.` → `Frase completa. Comprueba.` → `✓ Correcto — {nota gramatical del idioma}.` o `Casi. Revisa dónde va el adverbio.`

### 5.2 `GameCatalogue` (columna derecha, 316px)
Tres tarjetas con fondo pastel de su color, `border-left: 5px solid`, icono en caja crema, y estado `Listo` / `Pronto`. Hover eleva 2px con glow de su color. Debajo, un **hueco punteado** con `+` que deja explícito dónde caben más juegos — mismo tamaño y radio que las tarjetas.

Añadir un juego nuevo = crear su carpeta, envolverlo en `GameShell` con su `accent`, y registrarlo en el catálogo. Nada más.

---

## 6. `AppFooter`
Fondo `tintDeep`, borde superior del idioma. Logotipo + una línea de resumen **que no mencione términos de un solo idioma** (mal: "340 phrasal verbs"; bien: "Seis idiomas · 184 relatos · un camino propio por lengua"). A la derecha, seis puntos de 20×6px con el `p1` de cada idioma; el activo a opacidad 1, el resto a .32.

---

## 7. Orden de implementación sugerido

1. `theme/color.js` + `languages.js` + `tokens.js` con **test unitario de contraste**: para los 6 idiomas, todo par texto/fondo ≥ 4.5:1. Esto previene la clase de bug que más nos costó.
2. `AppHeader` + `LanguageShelf` (con los 6 motivos) — es el 60% de la identidad.
3. `SectionGrid` con las 4 tarjetas y `LevelLadder`.
4. `StoryReader` + `PronunciationBar`.
5. `GameShell` + `WordOrderGame`.
6. `GameCatalogue`, `AppFooter`, y los dos juegos pendientes.

## 8. Errores concretos a evitar (nos pasaron)

- Escribir un color de texto a mano sobre una superficie con tinte → falla contraste al cambiar de idioma. Todo por `fg()`.
- Derivar el color de texto contra el fondo de página cuando el elemento vive sobre una fila resaltada.
- Decidir el color de un glifo comparando cadenas de color en vez de medir el ratio.
- Etiquetar la vista con el idioma seleccionado dejando el contenido en inglés.
- Dejar fijo el tercer elemento del nav ("Phrasal Verbs") o el recuento del pie.
- Gatear el desvío de tono por luminancia del color base en vez de por croma del pastel resultante.
