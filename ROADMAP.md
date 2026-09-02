# LinguaTales — Roadmap

Documento vivo del proyecto. Se tacha y se amplía con el tiempo — no es una
foto fija.

## Visión

LinguaTales es una app de aprendizaje de idiomas basada en historias, con dos
misiones:

1. **Aprender el idioma por CURIOSIDAD, no por lección.** El usuario está
   dentro de una historia real y todo el conocimiento (significado de
   palabras, conjugaciones, gramática, phrasal verbs) está a mano para que lo
   descubra al tocarlo, con estímulos visuales y sonoros que guían la
   atención.
2. **Aprender a CONTAR historias en cualquier idioma:** mantener la
   expectación, guiar la atención, ritmo y tensión narrativa. *(Aspiración a
   futuro, pendiente de aterrizar en mecánicas.)*

Diferenciador central frente a apps tipo Duolingo: la práctica de
pronunciación y el aprendizaje por curiosidad dentro de historias reales.

---

## Hecho ✅

- [x] Home con los 6 idiomas (EN/ES/FR/DE/IT/PT) y su identidad visual propia
      (colores de bandera derivados, motivo SVG, tarjeta activa)
- [x] Historias graduadas por nivel (A1–C2) con lector de dos columnas
      (original + traducción alineadas frase a frase)
- [x] "Inglés real" — diálogos con argot y lenguaje coloquial adulto
      (*The Villa Drama*, C1-C2), con aviso de contenido y glosario propio
- [x] Lector interactivo con etiquetado gramatical por palabra: cada token
      lleva función (artículo/verbo/sustantivo/adjetivo/adverbio/preposición/
      pronombre/phrasal verb), color propio, y una ficha al tocarla
      (traducción + explicación pedagógica + salto a la regla o al phrasal
      verb) — `RoleLegend`/`WordToken`/`WordCard`. Un phrasal verb es siempre
      un solo token ("wakes up"), nunca dos.
- [x] `StoryFacts` por relato (no por idioma): gramática que practica ESE
      relato con ejemplos sacados de su propio texto, y sus phrasal verbs con
      la frase donde aparecen — validado en build (`validate.mjs`) contra el
      propio texto para que ninguna cita sea inventada
- [x] 5 juegos generados desde el relato activo, en pestañas, ninguno con
      contenido propio escrito a mano:
      Juego 01 — Ordenar la frase (`WordOrderGame`, de `paras[1]`) ·
      Juego 02 — Elige el hueco (`GapFillGame`, de `story.gaps`) ·
      Juego 03 — Empareja la expresión (`MatchIdiomGame`, de `story.phrasals`
      — oculto si el relato tiene menos de 3) ·
      Juego 04 — Selecciona la palabra (`SelectWordGame`, banco derivado del
      texto, dos modos: elegir/escribir) ·
      Juego 05 — Habla la frase (`SpeakSentenceGame`, pronunciación por
      ronda con desglose palabra a palabra y 3 métricas — mismo placeholder
      Web Speech API de siempre, ahora integrado como juego en vez de barra
      aparte)
- [x] Progreso local por relato (`localStorage`, clave versionada
      `linguatales.progress.v1`, escritura debounced): mejor marca nunca
      última, `solved`/`seen` por índice no por texto, nivel/idioma
      completado se calculan (nunca se guardan). Sobrevive a cambiar de
      relato/nivel/idioma y a recargar — capa aparte del progreso de Supabase
      de abajo, no se fusionan
- [x] Navegación persistente colapsada: `LanguageBar` (bandera + motivo +
      nivel + progreso real) y `Rail` (pastillas de idioma/nivel con
      popovers, opciones sin catálogo deshabilitadas con "Pronto") —
      sustituye al sidebar de la Fase 2.5
- [x] Lectura en voz alta por frases (TTS vía Web Speech API del navegador —
      placeholder pensado para sustituirse por Azure Speech sin tocar los
      componentes que lo consumen)
- [x] Autenticación real con Supabase (Google OAuth + email/contraseña)
- [x] Progreso por usuario persistido en Supabase (nivel actual, historias
      leídas/en curso, intentos de pronunciación) con RLS por usuario; sin
      sesión no se inventa progreso

---

## En marcha 🔨 — Rediseño de navegación (plan aprobado)

De SPA de una sola ruta a rutas reales de App Router, piloto en inglés antes
de expandir al resto de idiomas.

- [x] Fase 1 — Andamiaje de rutas App Router (`/[lang]`, `/[lang]/[level]`,
      `/[lang]/[level]/story/[id]`, Inglés real en ruta propia)
- [x] Fase 2 — Modelo de datos por idioma + nivel (piloto EN A1/A2/B1)
- [x] Fase 2.5 — Rediseño de layout: sidebar izquierdo colapsable *(superado
      por la reconstrucción de abajo — ver Fase 3)*
- [x] Fase 3 — Reconstrucción del lector interactivo según
      `linguatales-reader-spec.md` + `linguatales-games-spec2.md`: modelo de
      datos por palabra (función + traducción + explicación, no llega a
      conjugación completa — eso queda en el backlog de "súper verbos"),
      `Rail`/`LanguageBar` (sustituyen al sidebar de la 2.5), `StoryPicker`,
      lector con tokens tocables, `StoryFacts` por relato, 5 juegos en
      pestañas, y progreso local persistente. Catálogo hoy: solo EN A1/A2
      etiquetado (`STORIES['EN/A1']`, `STORIES['EN/A2']`); B1 quedó fuera a
      propósito para no bloquear el refactor de estructura con autoría de
      contenido — se etiqueta en un pase aparte
- [x] Fase 4 — Juegos y gramática atados al relato real (más estricto que
      "al nivel": cada juego lee del relato concreto que se está leyendo,
      no solo del nivel) — absorbida por la Fase 3
- [ ] Fase 5 — Inglés real migrado a su propia ruta, fuera del árbol de
      niveles graduados
- [x] Fase 6 (parcial) — Catálogo de inglés completo A1–C2 (B1/B2/C1/C2
      añadidos tras el pase inicial de la Fase 3, todos con el mismo
      etiquetado por palabra). Falta expandir a los 5 idiomas restantes
      (FR/DE/IT/PT + el resto), que hoy no tienen ni un relato

---

## Desplegado 🚀

- [x] Proyecto en Vercel (`linguatales`, conectado al repo de GitHub —
      cada push a `main` despliega solo) — https://linguatales.vercel.app
- [ ] Configurar en Supabase el Site URL / Redirect URLs de producción
      (`https://linguatales.vercel.app` y su `/auth/callback`) — pendiente,
      hoy el login solo redirige bien en local
- [ ] Variables de entorno de Supabase en Vercel: cargadas en Production;
      falta cargarlas también en Preview/Development (bug del CLI de Vercel
      pidiendo rama git incluso con `--yes`, sin resolver todavía)

---

## Backlog / Futuro 📋

Ideas fichadas que aún no tocan, para no perderlas.

- [ ] Contenido de "súper verbos" (be, have, do, get, make, take, go, come,
      want, can) con sus radiografías (significados múltiples, conjugación
      por tiempos, truco nativo) como material base para llenar el
      glosario/lema. Introducidos graduados por nivel, paso a paso empezando
      por lo cotidiano: verbos, phrasal verbs, conectores. Material fuente ya
      recibido y guardado en `content-super-verbs-en.md` (sin procesar
      todavía — pendiente de extraer a datos de lema cuando toque la Fase 3
      o posterior).
- [ ] Misión narrativa: enseñar a contar historias, mantener expectación,
      guiar la atención. Pendiente de aterrizar en mecánicas concretas
      (juegos/herramientas) antes de construirse.
- [ ] Azure Speech real (evaluación fonética) sustituyendo el placeholder
      actual de Web Speech API
- [ ] Reactivar "Confirm email" en Supabase antes de producción
- [ ] Interacciones sensoriales en la historia interactiva: colores por tipo
      de palabra (verbo conjugable / phrasal verb / vocabulario clave),
      sonido sutil al tocar una palabra
- [ ] Juego 04 (Selecciona la palabra): para nombres propios u otras
      palabras cuya traducción coincide con el original (p. ej. "Anna"), la
      ficha ya revela la respuesta antes de elegir — decidir si se excluyen
      del banco derivado o si se oculta la traducción cuando coincide con la
      palabra
- [ ] Etiquetar B1 de inglés (y el resto de niveles/idiomas) con el modelo de
      palabra por palabra de la Fase 3, a mano, siguiendo el patrón de
      `en.a1.js`/`en.a2.js`
