# LinguaTales · Frases y conectores de uno en uno, test con opciones

Séptima entrega. Continúa los seis specs anteriores. Referencia visual:
`LinguaTales Reader.dc.html`.

Mostrar diez frases a la vez abruma. Se pasan de una en una, y el test del bloque
solo aparece cuando has pasado por todas.

---

## 1 · Una frase a la vez

El panel del bloque deja de listar las diez. Muestra **una**:

- Cabecera del panel: a la izquierda `Bloque 01 · Saludos y despedidas`; a la
  derecha, flechas `‹` `›` (30×30, fondo crema, borde pastel ámbar) y contador mono
  `3 / 10` en la pastilla.
- La frase, ahora con sitio, sube a serif 24px. Debajo, su traducción, la
  contestación con sus dos botones de audio, y a la derecha el ejemplo, el tip y el
  estado SRS. Sin `border-bottom`: no hay lista, hay una ficha.
- Estado: `phrRow` (índice visible, cíclico con las flechas).

## 2 · El test se desbloquea al pasar las diez

Mientras falten frases, en el sitio del test hay una nota mono:

```
Pasa las 10 frases y aparece el test del bloque · 4 de 10 vistas
```

Cuando estén las diez, aparece el test.

### El desbloqueo cuenta índices distintos, no el máximo

Cuidado con esto, es el bug que tuvimos: si el desbloqueo mira "el índice más alto
alcanzado", **un solo clic en `‹` desde la primera frase da la vuelta a la décima**
y desbloquea el test al instante.

Guarda un conjunto de índices vistos (`phrSeen`, arrancando con el 0 ya visto) y
desbloquea cuando su tamaño llegue a 10. Así da igual el orden y las vueltas. Si
más adelante bloqueas algo con la navegación de conectores, misma regla.

## 3 · El test pasa a tres opciones

Ya no es "ver respuesta": es una pregunta con tres opciones.

- Una pregunta a la vez, con sus propias flechas y contador `3 / 10`.
- Opciones: la respuesta correcta + 2 respuestas de otras preguntas **del mismo
  bloque**, rotadas por índice y mezcladas con el shuffle sembrado (`seed = 101 + i`),
  deduplicadas.
- Al elegir: correcta en menta, fallada en carmín, se bloquea el resto.
- Debajo, feedback (`✓ Take care.` / `✕ Era: Take care.`) y la `note` de la
  pregunta.
- Cambiar de pregunta con las flechas limpia la elección (`phrTPick: null`).
- Cambiar de bloque resetea `phrRow`, `phrSeen`, `phrTIndex` y `phrTPick`.

## 4 · Conectores igual

El panel de conectores muestra **un conector a la vez**:

- Cabecera del grupo: título y subtítulo a la izquierda; flechas `‹` `›` y contador
  `1 / 6` a la derecha, en el color de la sección.
- El conector sube a serif 23px, con su traducción, el ejemplo, los tres puntos de
  complejidad, el chip de registro y el punto de estado SRS.
- Estado: `cxRow`, que se resetea al cambiar de grupo o al entrar desde el nav.

## Definición de terminado

- El panel del bloque muestra exactamente una frase, con flechas y contador.
- Dar `‹` en la primera frase **no** desbloquea el test.
- El test aparece solo al haber visto las diez, y cada pregunta se responde con
  tres opciones, no revelando.
- El panel de conectores muestra exactamente un conector, con flechas y contador.
- Cambiar de bloque o de grupo deja la navegación y las respuestas a cero.
- No queda ningún valor calculado sin usar (si la pastilla ya muestra el contador,
  el texto viejo del total sobra: bórralo).
