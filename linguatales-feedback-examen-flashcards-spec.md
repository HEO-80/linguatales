# LinguaTales · Feedback del "por qué", examen final y flashcards en el Repaso

Quinta entrega. Continúa `linguatales-frases-spec.md`, `linguatales-conectores-spec.md`,
`linguatales-srs-spec.md` y `linguatales-traduccion-inversa-spec.md`.
Referencia visual: `LinguaTales Reader.dc.html`.

Tres piezas que se apoyan entre sí: el fallo pasa a explicar por qué, el examen
se convierte en el sitio donde converge todo, y el Repaso se abre en formato
flashcard.

---

## 1 · Feedback del "por qué"

La mejora más barata de todas: **no hay contenido nuevo**. Las fichas de gramática
ya tienen su `watch` ("cuidado con esto") y las frases su `tip`. Ese texto es
exactamente el feedback que debe salir al fallar.

Ahora al fallar sale "incorrecto". A partir de aquí, debajo del pie del juego
aparece una caja ámbar:

```
POR QUÉ · PRESENT SIMPLE
La -s de la tercera persona es el error más frecuente. Y en negativa y
pregunta la -s se va al auxiliar: does open, no does opens.
```

Estilo: `background` pastel de `#e0a80c` al 82%, borde pastel, `border-left: 4px`,
label mono 9px en mayúsculas, texto 13.5px con `line-height: 1.6`. Es la misma
caja que ya usa "Cuidado con esto" en la ficha de gramática — extráela a un
componente y reutilízala en los dos sitios.

De dónde sale el texto, por juego:

| juego | fuente |
|-------|--------|
| 04 elige la palabra | regla de gramática del relato |
| 10 traducción inversa | regla de gramática del relato |
| 06 elige la frase | el `tip` de la frase |
| 07 conversación | la contestación correcta + su traducción + el `tip` |
| 09 conector | significado, registro, complejidad y ejemplo |
| examen | el `why` de la pregunta, o la regla si no lo lleva |

**Cómo se elige la regla** (juegos 04 y 10): entre las reglas del relato que tengan
`watch`, se coge aquella cuyos ejemplos comparten más palabras con lo fallado; si
ninguna casa, la primera regla del relato. Es heurístico a propósito: no hay que
etiquetar contenido para que funcione. Si en algún ítem el emparejamiento falla,
la salida limpia es añadir `rule: '<nombre de la regla>'` al ítem y respetarlo
cuando exista.

## 2 · Examen final

No es contenido nuevo: es la culminación de todo lo anterior, y el sitio donde
convergen el repaso, la producción y el feedback.

### Banco de preguntas

Se construye mezclando los tipos de todos los juegos:

- `pick` frase: español → 3 frases en inglés
- `pick` contestación: frase inglesa → 3 contestaciones
- `write` traducción inversa: español → escribir en inglés
- `pick` conector: hueco en la frase de ejemplo → 3 conectores
- `pick` palabra: definición del relato → 3 palabras

Cada pregunta lleva **la misma clave SRS** que su juego de origen
(`ph:…`, `co:…`, `ti:…`, `cx:…`, `w:…`). Eso es lo que permite lo siguiente.

### Ordenación por lo flojo

El banco se ordena por lo que el SRS detecta débil, y se cogen **8**:

```
peso = lapses * 3 + (vencida ? 2 : 0) + (interval < 6 ? 1 : 0)
sin tarjeta = 1   // entra, pero detrás de lo ya fallado
```

Empates, por orden de banco: mismo estado, mismo examen.

### Durante el examen

- Cabecera con `Pregunta 3 de 8 · Conector` y el marcador de aciertos.
- `pick`: tres opciones; al elegir se colorean correcta/fallada y se bloquean.
- `write`: input + `Comprobar`, con la misma normalización que el juego 10.
- Al fallar, la caja **Por qué**.
- Cada respuesta **realimenta el SRS** (`kind: 'Examen · …'`), así que lo fallado
  aparece en Repaso inmediatamente.
- Botón `Siguiente pregunta`, y `Ver resultado` en la última.

### Resultado e insignias

Porcentaje grande, aciertos, y la insignia según nota:

| nota | insignia |
|------|----------|
| ≥ 95 % | Élite |
| ≥ 80 % | Avanzado |
| ≥ 60 % | Explorador |
| < 60 % | ninguna |

Con insignia: caja menta, `Nivel A1 superado` y aviso de que lo fallado sigue en
el repaso antes de subir de nivel. Sin ella: caja carmín y empuje al repaso.
Botones `Ir al repaso` (abre la vista SRS) y `Repetir examen`.

### Desbloqueo

La card sigue bloqueada hasta que los **10** juegos estén al 100%; entonces pasa a
ser una card normal, en dorado `#a16207`, y abre `view: 'game', game: 'exam'`.
(En el preview está desbloqueada a propósito para poder verla; en la app manda el
cálculo.)

## 3 · Flashcards: el motor del Repaso

**No es un juego suelto en la fila.** El formato flashcard es la herramienta
natural del repaso espaciado, así que vive dentro del Repaso que ya existe: las
cartas que salen son las que el SRS marca flojas, no cartas al azar.

### Dos modos sobre el mismo material

Dos chips encima de la tarjeta:

- **Tarjeta** (por defecto): pregunta → *piensa* → `Girar la tarjeta` → respuesta y
  pista. Nota en lenguaje de flashcard: `No la sabía` (0) · `La sabía` (4) ·
  `Fácil` (5). Encima del botón, recordatorio mono: "Piensa la respuesta antes de
  girar" — el hueco entre pregunta y giro es donde está el aprendizaje.
- **Test**: la misma tarjeta vencida con 3 opciones, construidas con respuestas de
  otras tarjetas del almacén. Feedback `✓ Correcto` / `✕ Era: …` y
  `Siguiente tarjeta`.

Ambos modos gradúan con SM-2 sobre la misma tarjeta: se puede *estudiar* o
*auto-testear* el mismo material.

### Cuidado con el bug de reindexado

Al graduar, el `due` de la tarjeta salta al futuro y **sale de la lista de
vencidas en ese mismo render**. Si el modo test se apoya en `dueLista[índice]`,
después de responder la pantalla muestra otra tarjeta con su respuesta ya
revelada, y el usuario nunca ve si acertó.

Solución: **congelar la tarjeta respondida**. Guarda su clave (`srsCurrent`) y
mientras haya respuesta pendiente de confirmar, pinta esa clave y no el índice.
La lista solo se vuelve a consultar cuando el usuario pulsa `Siguiente tarjeta`.

## 4 · Micro-repaso entre juegos

Cada **6 respuestas** graduadas dentro de un juego, encima de la rejilla salta una
tanda corta de **3 tarjetas** — las más flojas del SRS, nunca al azar:

```
peso = lapses * 3 + (vencida ? 2 : 0) + (interval < 6 ? 1 : 0)
```

Caja ámbar con `Micro-repaso · 1 de 3`, la pregunta, `Girar la tarjeta` y, tras
girar, `No la sabía` / `La sabía`. Botón `Ahora no` para cerrarla sin puntuar: no
debe romper el flujo del juego. Al puntuar las tres se cierra sola.

## Definición de terminado

- Fallar en cualquiera de los seis sitios muestra la caja Por qué, con texto que
  ya existía en los datos.
- El examen coge sus 8 preguntas de lo más flojo, mezcla reconocer y producir, y
  lo que se responde ahí aparece en Repaso al momento.
- La insignia sale por tramos, y suspender manda al repaso.
- En modo Test del Repaso, tras responder se ve el resultado de **tu** tarjeta, con
  su feedback, y hay botón para avanzar. Nunca se destapa la siguiente.
- El micro-repaso aparece cada 6 respuestas, se puede posponer y se cierra solo al
  completar las tres.
- Ningún texto del Repaso menciona "nueve juegos": son diez más el examen.
