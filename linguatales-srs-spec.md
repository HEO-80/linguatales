# LinguaTales · Repaso espaciado (SRS)

Tercera entrega. Continúa `linguatales-frases-spec.md` y
`linguatales-conectores-spec.md`. Referencia visual: `LinguaTales Reader.dc.html`.

Esto **no es un juego nuevo**: es una capa que se monta encima de los juegos que
ya existen. Cada acierto o fallo en cualquier juego alimenta una tarjeta SM-2, y
el sistema recuerda qué costó y cuándo toca repasarlo. Se manifiesta en dos
piezas para el usuario: un modo *Repaso de hoy* y un marcado visual sutil dentro
del propio contenido.

---

## 1 · El algoritmo

SM-2 clásico, reducido a tres notas: `0` fallé · `3` bien · `5` fácil.

```js
_sm2(card, q) {
  let ease = card?.ease ?? 2.5, reps = card?.reps ?? 0;
  let interval = card?.interval ?? 0, lapses = card?.lapses ?? 0;
  if (q < 3) {
    reps = 0; interval = 1; lapses += 1;
    ease = Math.max(1.3, ease - 0.2);
  } else {
    reps += 1;
    interval = reps === 1 ? 1 : reps === 2 ? 6 : Math.max(1, Math.round(interval * ease));
    ease = Math.max(1.3, ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
  }
  return { ease, reps, interval, lapses };
}
```

Va en `src/lib/srs.js` como función pura, sin dependencias de React.

## 2 · El almacén de tarjetas

Un mapa plano, `srs[key] = card`. La clave lleva el tipo delante:

| clave | qué es | de dónde sale |
|-------|--------|----------------|
| `w:<palabra en minúsculas>` | palabra del relato | juego 04 · elige la palabra |
| `ph:<bloque>:<i>` | frase hecha | juego 06 · elige la frase |
| `co:<bloque>:<i>` | contestación | juego 07 · sigue la conversación |
| `sp:<bloque>:<i>` | pronunciación de una frase | juego 08 · di la frase |
| `cx:<conector completo>` | conector | juego 09 · elige el conector |

En `cx:` usa el `en` **completo** de la ficha (`later / later on`), no la forma
huecada, o la misma entrada generaría dos tarjetas distintas.

La tarjeta guarda algoritmo + lo justo para poder repasarla sin volver a buscar
el contenido:

```js
{ ease, reps, interval, lapses,
  due,          // día en que vuelve a tocar
  last, seen,   // último repaso y nº de veces vista
  kind,         // 'Palabra' | 'Frase hecha' | 'Contestación' | 'Pronunciación' | 'Conector'
  q, a, hint }  // pregunta, respuesta y pista
```

Guardar `q/a/hint` en la tarjeta es deliberado: el repaso no depende de qué
relato o bloque esté abierto.

**Persistencia**: junto al progreso existente, indexado por `IDIOMA/NIVEL` (las
tarjetas son de nivel, no de relato). Igual que el resto, solo índices y claves,
nunca texto que pueda cambiar al corregir el contenido… salvo `q/a/hint`, que se
refrescan al volver a graduar la tarjeta.

## 3 · Enganche en los juegos

Una sola función, llamada **en el momento de responder**, antes de pintar el
feedback:

```js
grade(key, meta, q)   // meta = { kind, q, a, hint }
// due = hoy + interval resultante
```

- juegos 04, 06, 07, 09 → `q = 4` si acierta, `q = 0` si falla.
- juego 08 (pronunciación) → la nota sale del porcentaje:
  `≥85 → 5`, `≥70 → 3`, resto `0`.
- Los juegos siguen marcando su progreso propio como hasta ahora: el SRS es una
  capa paralela, no sustituye `done`.

## 4 · Modo "Repaso de hoy"

Séptimo item del nav, después de Juegos, con el número de pendientes en la propia
etiqueta: `Repaso · 3` (sin número si no hay ninguno). Es una vista más de la
vista exclusiva: `view: 'srs'` esconde relato, frases, conectores y juego.

Contenido, en una tarjeta crema con `border-top: 4px solid #b45309`:

1. **Cuatro cifras** en cajas pastel: Toca hoy · En progreso · Consolidadas ·
   Vistas. Colores de estado (abajo).
2. **La tarjeta del día**: caja blanca traslúcida con `border-left: 5px` ámbar.
   Arriba `Frase hecha · 2 / 7` en mono; la pregunta en serif 26px; botón
   `Ver respuesta`; al revelar, la respuesta en serif 22px y la pista debajo.
   Línea mono con el estado del algoritmo:
   `Vista 3 · intervalo 6 días · facilidad 2.36 · 1 fallo`.
3. **Tres botones de nota**: `Fallé` (carmín) · `Bien` (cian) · `Fácil` (verde),
   que gradúan y pasan a la siguiente. Solo aparecen tras revelar.
4. `Saltar` (siguiente sin graduar) y `Avanzar un día`.
5. **La cola completa**: chips con punto de color, la respuesta y cuándo toca
   (`hoy`, `en 6d`).

Estado vacío: si no hay nada vencido, caja menta —
"Nada que repasar hoy" si ya hay tarjetas, o "Aún no hay nada que repasar" +
explicación de que jugar crea las tarjetas, si el almacén está vacío.

**Sobre el día**: en el preview `day` es un contador virtual y `Avanzar un día`
lo incrementa, para poder ver el ciclo sin esperar. En la app real usa la fecha
real (días desde epoch, a medianoche local) y **deja el botón solo en desarrollo**.

## 5 · Marcado visual sutil

Cuatro estados, con su color:

| estado | cuándo | color |
|--------|--------|-------|
| Sin ver | no hay tarjeta | `#8a8377` |
| Toca repasar | `due <= hoy` | `#b45309` |
| En progreso | `interval < 8` | `#0e7490` |
| Consolidada | `interval >= 8` | `#0f766e` |

Dónde se ve:

- **En el texto del relato**: cambia solo el filete inferior de la palabra, sin
  tocar el color de rol ni el fondo — ámbar sólido si toca repasar, cian sólido
  si está en progreso, verde punteado apagado si está consolidada. Lo dominado se
  apaga y lo flojo destaca: el ojo se va solo a lo que hay que repasar.
- **En las frases hechas**: bajo el ejemplo, punto de color + etiqueta mono
  (`CONSOLIDADA`).
- **En los conectores**: punto de color junto al chip de registro.

Regla: el marcado SRS **nunca** sustituye al color gramatical de la palabra ni al
de registro del conector. Se añade como filete o punto; si compite, gana el color
semántico.

## Estado nuevo

```
srs: {}          // el almacén de tarjetas
day: 0           // día virtual en el preview; fecha real en la app
view: … | 'srs'  // séptima vista exclusiva
srsIdx, srsShown // tarjeta actual de la cola y si la respuesta está revelada
```

## Definición de terminado

- Jugar a cualquiera de los cinco juegos enganchados crea tarjetas: se ve subir
  el contador del nav.
- Fallar baja la facilidad y pone el intervalo a 1 día; acertar tres veces
  seguidas lo lleva a 1 → 6 → ~15 días.
- `Avanzar un día` hace reaparecer lo vencido y solo lo vencido.
- Una palabra consolidada se ve más apagada en el relato que una que toca repasar.
- El repaso funciona con otro relato abierto: la tarjeta lleva su propio contenido.
- Nada de `Math.random`; el mismo estado siempre pinta lo mismo.
