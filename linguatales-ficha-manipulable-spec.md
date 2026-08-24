# LinguaTales · Ficha de gramática manipulable

Referencia visual: `LinguaTales Reader.dc.html` — panel de gramática, fila "Present Simple".

## §1 Reordenar el panel

La columna izquierda dejaba un hueco grande bajo los chips de verbo. Mover Ejemplos a esa columna:

- **Izquierda**: Cómo se forma → En este relato (chips de verbo) → Ejemplos.
- **Derecha**: Pruébalo (pronombres + frase viva). Pasa a ser puramente interactiva.

## §2 Elegir persona y verbo

Fila de píldoras de pronombre (mono): `I you he she it we they`. La píldora activa recibe el fondo más saturado del color de la regla + sombra del mismo color.

Los chips de "En este relato" se vuelven seleccionables: al hacer clic cambian el verbo conjugado y lo resaltan; los chips siguen viniendo del texto del relato como antes.

Estado: `gPron` (por defecto `'she'`), `gVerb` (por defecto el primer verbo).

Solo se activa para Present Simple — y en concreto: cuando otra regla lo necesite, el interruptor debe venir de la ficha (`conj: 'present-simple'`), no de un `if` por nombre de regla.

## §3 La frase viva

Las tres formas se reconstruyen en vivo:

```
AFIRMATIVA   He opens the window.        Él abre la ventana.
NEGATIVA     He doesn't open the window. Él no abre la ventana.
PREGUNTA     Does he open the window?    ¿Él abre la ventana?
```

### El verbo

Los chips llevan la forma mostrada en el relato (`opens`, `leaves`); hay que extraer la base y re-conjugar.

Reglas de extracción de base: `ies → y`; `(s|sh|ch|x|o)es → -es` (recorta el "es"); `es → -s salvo tras vocal`; `s → ∅ salvo ss`.

Reglas de 3ª persona: `[^aeiou]y → ies`; `(s|sh|ch|x|o) → +es`; resto `+s`.

### El complemento (lo que más veces se rompió)

**No** recortar una ventana de N palabras tras el verbo ni cortar con una lista negra de conjunciones: siempre aparece un patrón nuevo que se cuela ("She leaves home she puts on her blue").

La regla que funciona: desde el verbo, avanzar aceptando SOLO roles de complemento (`art, adj, noun, prep, adv`) y parar en el primer rol que no lo sea (`pron`, o `verb`/`phr` ya es otra cláusula). Luego recortar desde el final hasta que el último token sea `noun` o `adv`. Si no queda nada, ningún complemento es correcto: "She leaves." es correcto; "She leaves her blue" no debe generarse nunca.

### La traducción (`src/lib/es-conj.js`)

Conjugada desde la traducción almacenada en 3ª persona del singular (`abre`, `prepara`):

- Terminación `-a` → patrón `-ar` (yo `-o`, tú `-as`, él `-a`, nosotros `-amos`, ellos `-an`).
- Terminación `-e` → patrón `-er`/`-ir` (yo `-o`, tú `-es`, él `-e`, ellos `-en`, nosotros `-emos` excepto la lista `-ir` [`abre, vive, escribe, sube, recibe, parte`] que usa `-imos`).
- Mapa irregular para `huele, sale, viene, dice, tiene, hace` (palabras que aparecen en el material real).

Si no está seguro, devuelve `null` y la traducción no se muestra. Antes sin traducción que con castellano mal.

El complemento en español sale de la traducción de los MISMOS tokens (`tk[2]`). Negativa: "Él no abre…". Pregunta: "¿Él abre…?".

## §4 Marcar en verde lo que cambia

La frase NO se construye como string — se construye en TROZOS, y el trozo que cambia recibe fondo verde pastel (`#0e7a5f`), texto en el mismo verde, peso 600.

Tabla de qué se marca:

| Forma | Se marca |
|---|---|
| Afirmativa, 3ª persona | solo la `-s` final (`open`+**`s`**) |
| Afirmativa, resto | nada |
| Negativa | `doesn't`/`don't` |
| Pregunta | `Does`/`Do` |

### Trampa de whitespace (obligatorio)

Emitir un `<span>` por trozo hace que los saltos de línea/indentación de JSX entre hermanos se rendericen como UN ESPACIO, produciendo "He open s the window."

Solución: el contenedor de la frase va a `font-size: 0` y CADA trozo restaura `font-family` y `font-size: 21px`; los nodos de espacio quedan sin ancho, y los espacios reales viajan dentro de los propios trozos (`' the window.'`).

Alternativa válida: `display:flex; flex-wrap:wrap` en el contenedor y ` ` para espacios intencionales. Lo que no vale es tocar los strings a ojo.

La etiqueta de contexto usa la forma que realmente se muestra: "Con they + open (abren)" — nunca el texto crudo del chip ni el gloss almacenado en 3ª persona.

## Definición de terminado

- `opens` se lee como una sola palabra, con la `s` resaltada, sin espacio.
- Negativa y pregunta tienen exactamente un espacio alrededor del auxiliar.
- Cambiar de `she` a `they` quita la `-s` y cambia el auxiliar, y la traducción pasa de "Él abre" a "Ellos abren".
- Ningún verbo de ningún relato genera una frase con dos sujetos, dos verbos conjugados o un determinante colgando.
- Si el conjugador no reconoce el verbo, la frase en inglés se sigue mostrando y la línea en español simplemente no aparece.
- La columna izquierda nunca deja un hueco: formas, verbos y ejemplos.
