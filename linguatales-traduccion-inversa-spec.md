# LinguaTales · Traducción inversa, card de Repaso y rejilla final de juegos

Cuarta entrega. Continúa `linguatales-frases-spec.md`, `linguatales-conectores-spec.md`
y `linguatales-srs-spec.md`. Referencia visual: `LinguaTales Reader.dc.html`.

Dos cosas nuevas (juego 10 y la card de Repaso) y la colocación definitiva de la
rejilla de juegos.

---

## 1 · La rejilla definitiva

Tres filas, todas `display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px`.

```
fila 1   01 Ordena   02 Rellena   03 Empareja   04 Elige palabra   05 Habla
fila 2   06 Frase    07 Conversa  08 Di frase   09 Conector        10 Traducción inversa
fila 3   Repaso      Examen final    ·   ·   ·
```

**Todas las cards se construyen con el mismo builder** (`mkTab`) — incluidas la de
Repaso y la del Examen. Nada de estilos a mano por card: si una difiere en
padding, tamaño de icono o tipografía, está mal. La card es:

- `flex; align-items:center; gap:12px; padding:14px 16px; border-radius:6px`
- `border: 1px solid <pastel>` + `border-top: 4px solid <color>`
- icono en caja de 34×34 con fondo crema y borde pastel
- título serif 17px, subtítulo 11px, contador mono 10.5px a la derecha
- activa: fondo más saturado y sombra de color; hover: mismo fondo saturado

El builder acepta un séptimo campo opcional, `view`: si viene, la pestaña abre
una **vista** (`view: 'srs'`) en vez de un juego, y su estado activo se calcula
contra `view` y no contra `game`. Es lo que permite que Repaso sea una card más
sin duplicar código.

## 2 · Juego 10 · Traducción inversa

Cierra la fila 2. Color rosa (el mismo `ROSE` del juego 04).

**Por qué este y no "escribe libre"**: evaluar una frase libre de verdad sin IA es
casi imposible. Partiendo de una frase española con traducción modelo conocida, la
producción es real —el usuario escribe inglés desde cero, sin opciones— y la
corrección es comprobable. El contenido ya existe en formato español↔inglés.

### Banco de ítems

Del bloque de frases activo. **Cada frase da dos ítems**: la frase (`es → en`) y su
contestación (`re[1] → re[0]`). 10 frases = 20 ítems, sin escribir contenido nuevo.
La pista del ítem es el `tip` de la frase, o `Es la contestación a "…"` para el
segundo.

### Evaluación (sin IA)

Dos funciones puras, en `src/lib/backtrans.js`:

```js
norm(s)          // minúsculas · contracciones expandidas · sin puntuación · espacios colapsados
diff(user, model) // { marks: [{w, ok}], missing: [w], exact }
```

`norm` expande `can't → cannot`, `won't → will not`, `n't → not`, `'re/'m/'ll/'ve/'d`,
`it's/that's/let's`, cambia `’` por `'` y quita `. , ! ? ; : ¡ ¿ " “ ”`. Así
`Can you cook?`, `can you cook` y `Can you cook.` son la misma respuesta.

`diff` compara palabra a palabra contra la modelo consumiendo un pool (una palabra
del modelo solo puede casar una vez), y devuelve qué encajó, qué sobró y qué faltó.

Acepta como correcta la coincidencia exacta tras normalizar. **Pendiente de datos**:
añadir `alt: []` a cada frase con las variantes válidas (`Are you able to cook?`) y
dar por buena cualquiera de ellas. La lista va en los datos, no en el código.

### Pantalla

- Enunciado: caja blanca traslúcida con `border-left: 5px` rosa, label
  `Escríbelo en inglés` y la frase **en español** en serif 25px.
- Un `input` de ancho completo debajo. Enter comprueba.
- Al comprobar, el input se tiñe (menta si exacta, carmín si no) y aparece el
  desglose: tus palabras en verde/rojo, las que faltaron en ámbar punteado, la
  respuesta modelo y la pista.
- Botones `Comprobar`, `Siguiente`, `Borrar`. Feedback: `✓ Exacta.`,
  `Casi: te faltan palabras.` o `No es esa. Compara con la modelo y vuelve a intentarlo.`
- Alimenta el SRS con clave `ti:<bloque>:<id>` (`f3`, `r3`…), nota 4 o 0.

### La puerta a la IA queda abierta

La evaluación vive entera en `norm` + `diff`. El día que se meta Claude API, la
corrección por IA se añade **encima** como capa opcional sobre la misma respuesta
libre ("tu frase suena formal, un nativo diría…"), sin tocar el juego ni el
almacén. No implementes nada de IA ahora; solo no cierres la puerta: la respuesta
del usuario y la modelo tienen que quedar accesibles en un único punto.

## 3 · Card de Repaso

Primera de la fila 3. No es un juego: abre la vista de repaso espaciado que ya
existe (`view: 'srs'`).

- Mismo builder que las demás, con `view: 'srs'` y el color ámbar del estado
  "toca repasar".
- Título `Repaso`, subtítulo `Lo fallado, antes del examen`, contador `N hoy`
  con las tarjetas vencidas.
- Toggle: si ya está abierta, vuelve a `view: 'story'`.

La idea que transmite: todo lo fallado hay que repasarlo cada cierto tiempo, y
sobre todo antes del examen. Por eso la card está pegada a la del examen.

## 4 · Examen final

Segunda de la fila 3, al final de todo. Sigue **bloqueado** en esta entrega.

- Misma geometría que el resto de cards (mismo padding, icono de 34px, título
  serif 17px). Lo único que cambia: fondo pastel gris, `border: 1px dashed`,
  `border-top` apagado, sin sombra y `cursor: not-allowed`.
- Subtítulo `Acaba los 10 juegos`, contador `n/10`.
- `n` cuenta juegos completados al 100%: los cinco del relato, los tres de frases,
  el de conectores y **la traducción inversa**.
- No lo desbloquees todavía; deja el cálculo listo para hacerlo con un cambio.

## Definición de terminado

- Las doce cards (10 juegos + Repaso + Examen) son idénticas en geometría; solo
  cambian color, contenido y el estado apagado del examen.
- La fila 3 empieza por Repaso y termina en Examen final.
- Traducción inversa acepta contracciones y puntuación indistintamente, y nunca
  marca en verde una palabra del modelo dos veces.
- El desglose distingue lo que sobra de lo que falta.
- La corrección está aislada en dos funciones puras, sin dependencias de React ni
  de la UI.
