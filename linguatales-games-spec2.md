# LinguaTales — Los cinco juegos y de dónde salen sus datos

Documento complementario a `linguatales-reader-spec.md`. Aquí solo la sección de juegos: qué hace cada uno, **de qué campo del relato saca su contenido**, y cómo se guarda el progreso para poder cambiar de nivel, de historia y de idioma sin perder nada.

La idea central: **ningún juego tiene contenido propio.** Los cinco se generan desde el relato que estás leyendo. Cambias de historia y las cinco prácticas cambian con ella, sin escribir un solo ejercicio a mano.

---

## 1. Los cinco juegos

Van en **pestañas**, no apilados: si se apilan, empujan el relato fuera de la pantalla. Cada pestaña muestra su color, su icono, su descripción y **su marcador** (`3/9`, `2/4`).

| # | Juego | Color | Contenido que consume |
|---|---|---|---|
| 01 | Ordena la frase | `#f97316` melocotón | `story.paras[1].t` — los tokens de la 2ª frase, en orden |
| 02 | Elige el hueco | `#0891b2` cian | `story.gaps[]` — frase, respuesta, opciones y `why` |
| 03 | Empareja la expresión | `#7c3aed` lila | `story.phrasals[]` — verbo ↔ significado |
| 04 | Selecciona la palabra | `#be185d` magenta | `story.paras[].t` — se deriva un banco de palabras |
| 05 | Habla la frase | `#0f766e` petróleo | `story.paras[]` — una frase por ronda |

### 01 · Ordena la frase
Se toma `paras[1].t.map(t => t[0])` como solución y se baraja con semilla estable. La mitad inicial puede venir ya colocada para dar arranque. Clic en el banco coloca, clic en una colocada la devuelve; encima va drag & drop, pero **el clic debe seguir funcionando** (táctil y accesibilidad). Al comprobar, cada bloque se colorea según si coincide con su posición.

### 02 · Elige el hueco
Recorre `story.gaps[]`. La frase se pinta con el hueco como caja discontinua; al elegir opción se colorea y el feedback muestra **el campo `why`** — la explicación gramatical, que es lo que realmente enseña. "Siguiente frase" solo se habilita al acertar.

### 03 · Empareja la expresión
Dos columnas: los `phrasals[].verb` a la izquierda, los `phrasals[].mean` a la derecha **mezclados con semilla estable** (nunca `Math.random`: rebotaría en cada repintado). Tocas expresión → tocas significado; si acierta, las dos filas se fijan en verde y salen del juego.

> **Si una historia tiene menos de 3 phrasals, oculta esta pestaña para esa historia** en lugar de mostrarla vacía.

### 04 · Selecciona la palabra
El banco se **deriva** del relato: se recorren todos los tokens, se descartan los de ≤2 letras y los repetidos, y se toman ~6. De cada palabra se muestra su ficha sin decir cuál es —badge de función, explicación gramatical y traducción— y el jugador la adivina en **dos modos**:

- **Elegir de varias** — 4 opciones. Los distractores se buscan primero **entre palabras de la misma función gramatical**; así la pregunta discrimina de verdad en vez de ser una adivinanza. Al fallar, se marca en verde cuál era.
- **Escribirla** — campo de texto con pista discreta (letra inicial + número de letras) que desaparece al responder. Comparación normalizada: `trim().toLowerCase()`.

### 05 · Habla la frase
Una frase de `paras[]` por ronda, con su traducción. El micrófono alterna grabando/parado (rojo mientras graba, con halo). Al parar se muestra:

- **Porcentaje global**, con fondo verde / ámbar / rojo según tramo (≥80 / ≥65 / resto).
- **Acierto palabra por palabra** — cada palabra de la frase coloreada por su nota. Esto es lo que hace útil el juego: ves exactamente dónde has fallado.
- **Tres métricas** (fluidez, ritmo, fonemas) y un consejo concreto sobre la palabra más floja.

En el diseño la puntuación es **simulada de forma determinista** (misma frase → misma nota, para no bailar entre renders). Al cablearlo:

```js
// el scoring debe devolver el DESGLOSE, no solo el total
{ overall: 84, words: [{ w: 'platform', score: 68 }, …],
  metrics: { fluency: 88, rhythm: 78, phonemes: 84 } }
```
Web Speech API para la captura, y un servicio de scoring (Azure Pronunciation Assessment, Speechace o similar) para el desglose. Si el servicio solo da el total, reparte por palabra con la confianza del reconocedor antes de renunciar al desglose: es la parte que enseña.

---

## 2. Persistencia — lo que hay que guardar

El progreso de los juegos **no es estado de UI**: sobrevive a cambiar de historia, de nivel y de idioma, y a recargar la página.

### 2.1 Clave y forma

La unidad de progreso es **el relato**, y su clave es `IDIOMA/NIVEL/RELATO`:

```js
// progress['EN/A1/01']
{
  order:  { done: true,  best: 9, attempts: 2 },
  gap:    { done: false, solved: [0, 2], attempts: 4 },      // índices de story.gaps
  match:  { done: true,  pairs: 3, attempts: 1 },
  word:   { done: false, correct: 4, total: 6, seen: [0,1,2,3,4] },
  speak:  { best: { 0: 88, 1: 74, 2: 91 } },                 // mejor nota por frase
  read:   { seen: true, translationUsed: true },
  updatedAt: '2026-08-20T18:07:00Z'
}
```

Reglas:

- **Se guarda la mejor marca, no la última.** En `speak`, `Math.max(anterior, nueva)`. Reintentar nunca puede empeorar tu registro.
- `gap.solved` y `word.seen` guardan **índices**, no textos: si se corrige una errata en el relato, el progreso no se rompe.
- `updatedAt` por relato: sirve para "seguir donde lo dejaste" y para resolver conflictos al sincronizar.

### 2.2 Derivados (se calculan, no se guardan)

Nunca guardes lo que puedas derivar — se desincroniza:

```js
storyComplete(p)  = p.order.done && p.match.done &&
                    p.gap.solved.length === story.gaps.length &&
                    p.word.correct === p.word.total
levelProgress(lang, level) = relatos completos / total del nivel   // la barra del LanguageBar
languageProgress(lang)     = media de sus niveles                  // el punto del rail
```

Los porcentajes que hoy están escritos a mano en `LEVELS` (`pct: 62`) son **placeholders de diseño**. Al cablear la persistencia salen de aquí.

### 2.3 Dónde vive

Tres capas, en este orden:

1. **`ReaderContext`** — el progreso en memoria durante la sesión.
2. **`localStorage`** bajo una sola clave (`linguatales.progress.v1`) con **número de versión**: si algún día cambia la forma, migras en lugar de perder el progreso del usuario. Escritura con *debounce* (~500 ms), no en cada clic.
3. **Backend**, cuando haya cuentas: el mismo objeto por usuario. Resolución de conflictos por `updatedAt` y, dentro de cada juego, quedándose con la mejor marca.

```js
// src/state/progress.js
loadProgress()                       // localStorage → objeto, migrando versiones
saveProgress(progress)               // debounced
getStoryProgress(lang, level, num)   // devuelve el objeto vacío si no existe
recordGameResult(key, game, result)  // fusiona quedándose con la mejor marca
resetStory(key)                      // el botón "Reiniciar" de un juego
```

### 2.4 Qué se reinicia al cambiar de contexto

| Acción | Se reinicia | Se conserva |
|---|---|---|
| Cambiar de relato | Estado en curso de los 5 juegos, palabra seleccionada, filtro | El progreso guardado de ambos relatos |
| Cambiar de nivel | Todo lo anterior + relato a 0 | Progreso de todos los niveles |
| Cambiar de idioma | Todo lo anterior; el nivel salta al primero disponible | Progreso de todos los idiomas |
| Recargar | Nada (se restaura de `localStorage`) | Todo |

El estado **en curso** (las palabras que llevas colocadas, la opción que acabas de marcar) es efímero y se descarta. El **resultado** (mejor marca, ejercicios resueltos) persiste.

---

## 3. Añadir un juego nuevo

`GameShell` define la envoltura; cada juego solo implementa su interior:

```jsx
<GameShell
  index="06" title="…" accent="#…"
  prompt={…} progress={`${done} / ${total}`}
  onCheck={…} onReset={…}
  feedback={{ text, tone }}   // 'idle' | 'ready' | 'ok' | 'error'
>
  {/* interior */}
</GameShell>
```

Un juego nuevo es: (a) una carpeta con su componente, (b) una entrada en `GameTabs` con su color, (c) una clave en el objeto de progreso, y (d) **decidir de qué campo del relato saca su contenido** — o añadir ese campo al modelo de datos si no existe. Si necesita contenido propio escrito a mano, probablemente esté mal planteado.

---

## 4. Errores a evitar

- Guardar la última marca en vez de la mejor: reintentar empeora tu registro.
- Guardar textos en lugar de índices en `solved` / `seen`: una errata corregida borra el progreso.
- Guardar derivados (`levelProgress`) en lugar de calcularlos: se desincronizan.
- `localStorage` sin número de versión: el primer cambio de forma borra el progreso de todos.
- Escribir en `localStorage` en cada clic en vez de con debounce.
- Barajar con `Math.random` en render (juegos 03 y 04): rebota en cada repintado. Semilla estable.
- Mostrar la pestaña del juego 03 cuando la historia tiene menos de 3 phrasals.
- Dejar `LEVELS[].pct` escrito a mano cuando ya exista persistencia.
