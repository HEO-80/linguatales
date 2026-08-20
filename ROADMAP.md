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
- [x] Sección de gramática por idioma (chips de temas)
- [x] Sección de idiomática por idioma (Phrasal Verbs en inglés y su
      equivalente en cada idioma)
- [x] Juego 01 — Ordenar la frase (`WordOrderGame`)
- [x] Juego 02 — Rellenar el hueco (`GapFillGame`)
- [x] Juego 03 — Dictado (`DictationGame`)
- [x] Lectura en voz alta por frases (TTS vía Web Speech API del navegador —
      placeholder pensado para sustituirse por Azure Speech sin tocar los
      componentes que lo consumen)
- [x] Grabación y evaluación de pronunciación (placeholder vía
      SpeechRecognition del navegador, comparación palabra a palabra — no es
      evaluación fonética real todavía)
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
- [ ] Fase 3 — Modelo de lema/glosario para tooltips de significado y
      conjugación dentro de la historia
- [ ] Fase 4 — Juegos y gramática atados al nivel real (no solo al idioma
      activo)
- [ ] Fase 5 — Inglés real migrado a su propia ruta, fuera del árbol de
      niveles graduados
- [ ] Fase 6 — Expansión de contenido al resto de niveles e idiomas

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
