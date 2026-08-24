/**
 * LinguaTales — Inglés C2
 * src/data/stories/en.c2.js
 *
 * Tres lecturas de nivel C2, no historias con diálogo: ensayos reflexivos
 * cortos, sin personajes. Mismo modelo de datos que el resto del catálogo
 * (texto + traducción al español frase por frase + etiquetado de palabras
 * por función gramatical) — solo cambia el género del texto, no la
 * estructura de los datos.
 *
 * Los tres dialogan entre sí (herramientas, aprendizaje, qué ganamos y qué
 * perdemos al delegar en ellas) y marcan estructuras propias de C2:
 * oraciones hendidas, voz pasiva, cláusulas relativas libres con what,
 * subjuntivo tras as though, y nominalización abstracta — cada una con su
 * ficha nueva en GRAMMAR_DETAIL (src/data/grammar/index.js).
 *
 * Igual que en el resto del catálogo: un phrasal verb es UN token, y no se
 * escribe ninguna puntuación dentro de los tokens (el lector nunca la
 * muestra) — solo palabras. La traducción (`tr`) sí lleva su puntuación
 * normal.
 *
 * Token: [ texto, función, traducción, explicación ]
 * Funciones: art verb noun adj adv prep pron phr
 *
 * Regla de integridad (ver src/data/stories/validate.mjs): todo lo que
 * aparece en grammar[].ex y phrasals[].quote tiene que salir literalmente
 * del texto de paras.
 */

export const EN_C2 = [
  {
    num: '01',
    title: 'The Cost of Every Yes',
    sub: 'Oraciones hendidas · voz pasiva',
    tag: 'Nuevo',
    meta: '5 min · 147 palabras · 24 nuevas',

    paras: [
      {
        tr: 'Toda herramienta nueva que adoptamos llega con una etiqueta de precio invisible.',
        t: [
          ['Every', 'adj', 'Toda', 'Determinante de totalidad.'],
          ['new', 'adj', 'nueva', 'Adjetivo.'],
          ['tool', 'noun', 'herramienta', 'Sustantivo contable.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto: cláusula relativa sin that explícito, sujeto de embrace.'],
          ['embrace', 'verb', 'adoptamos', 'Present simple, 1ª persona plural: sin -s.'],
          ['arrives', 'verb', 'llega', 'Present simple, 3ª persona: arrive → arrives.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['an', 'art', 'una', 'Artículo indefinido: delante de sonido vocálico.'],
          ['invisible', 'adj', 'invisible', 'Adjetivo.'],
          ['price', 'noun', 'de precio', 'Sustantivo usado como modificador.'],
          ['tag', 'noun', 'etiqueta', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Cuando una tecnología hace que algo sea más fácil, celebramos las horas que nos ahorra.',
        t: [
          ['When', 'prep', 'Cuando', 'Conjunción de tiempo, abre la frase.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['technology', 'noun', 'tecnología', 'Sustantivo contable.'],
          ['makes', 'verb', 'hace', 'Present simple, 3ª persona: make → makes.'],
          ['something', 'pron', 'algo', 'Pronombre indefinido.'],
          ['easier', 'adj', 'más fácil', 'Comparativo de easy: easy → easier.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto.'],
          ['celebrate', 'verb', 'celebramos', 'Present simple, 1ª persona plural.'],
          ['the', 'art', 'las', 'Artículo definido.'],
          ['hours', 'noun', 'horas', 'Sustantivo contable, plural.'],
          ['it', 'pron', 'que', 'Pronombre relativo omitido: the hours [that] it saves, sujeto la tecnología.'],
          ['saves', 'verb', 'ahorra', 'Present simple, 3ª persona: save → saves.'],
          ['us', 'pron', 'nos', 'Pronombre objeto, 1ª persona plural.']
        ]
      },
      {
        tr: 'Lo que rara vez notamos es la habilidad que se erosiona silenciosamente por debajo,',
        t: [
          ['What', 'pron', 'Lo que', 'Pronombre relativo libre: introduce una cláusula nominal, sin antecedente explícito.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto.'],
          ['rarely', 'adv', 'rara vez', 'Adverbio de frecuencia.'],
          ['notice', 'verb', 'notamos', 'Present simple, 1ª persona plural.'],
          ['is', 'verb', 'es', 'Present simple de be: verbo principal de la cláusula libre con what.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['skill', 'noun', 'habilidad', 'Sustantivo contable.'],
          ['quietly', 'adv', 'silenciosamente', 'Adverbio de modo: adjetivo + -ly.'],
          ['eroding', 'verb', 'erosionándose', 'Gerundio: describe la habilidad en proceso continuo de desaparecer.'],
          ['underneath', 'adv', 'por debajo', 'Adverbio de lugar.']
        ]
      },
      {
        tr: 'el músculo mental que ya no ejercitamos porque ahora una máquina hace el esfuerzo por nosotros.',
        t: [
          ['the', 'art', 'el', 'Artículo definido.'],
          ['mental', 'adj', 'mental', 'Adjetivo.'],
          ['muscle', 'noun', 'músculo', 'Sustantivo contable.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto: cláusula relativa sin that explícito.'],
          ['no', 'adv', 'ya no', 'Determinante negativo, parte de no longer.'],
          ['longer', 'adv', 'más', 'Segunda parte de no longer: ya no.'],
          ['exercise', 'verb', 'ejercitamos', 'Present simple, 1ª persona plural.'],
          ['because', 'prep', 'porque', 'Conjunción de causa.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['machine', 'noun', 'máquina', 'Sustantivo contable.'],
          ['now', 'adv', 'ahora', 'Adverbio de tiempo.'],
          ['does', 'verb', 'hace', 'Present simple, 3ª persona: do → does, verbo principal aquí.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['lifting', 'noun', 'esfuerzo', 'Gerundio usado como sustantivo: el acto de levantar, en sentido figurado.'],
          ['for', 'prep', 'por', 'Preposición.'],
          ['us', 'pron', 'nosotros', 'Pronombre objeto.']
        ]
      },
      {
        tr: 'Piensa en cualquiera que creció con respuestas instantáneas siempre al alcance.',
        t: [
          ['Consider', 'verb', 'Piensa en', 'Imperativo: consider, aquí con el sentido de tomar como ejemplo.'],
          ['anyone', 'pron', 'cualquiera', 'Pronombre indefinido.'],
          ['who', 'pron', 'que', 'Pronombre relativo, sujeto de came.'],
          ['came', 'verb', 'creció', 'Pasado simple irregular de come: came. Come of age, expresión fija.'],
          ['of', 'prep', 'de', 'Preposición, parte de come of age.'],
          ['age', 'noun', 'edad', 'Sustantivo, parte de come of age: llegar a cierta edad o época.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['instant', 'adj', 'instantáneas', 'Adjetivo.'],
          ['answers', 'noun', 'respuestas', 'Sustantivo contable, plural.'],
          ['always', 'adv', 'siempre', 'Adverbio de frecuencia.'],
          ['within', 'prep', 'al', 'Preposición: within reach, al alcance.'],
          ['reach', 'noun', 'alcance', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'Logran en minutos lo que antes tomaba una tarde.',
        t: [
          ['They', 'pron', 'Ellos', 'Pronombre sujeto.'],
          ['accomplish', 'verb', 'logran', 'Present simple, plural.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['minutes', 'noun', 'minutos', 'Sustantivo contable, plural.'],
          ['what', 'pron', 'lo que', 'Pronombre relativo libre.'],
          ['once', 'adv', 'antes', 'Adverbio de tiempo: en otro tiempo.'],
          ['took', 'verb', 'tomaba', 'Pasado simple irregular de take: took.'],
          ['an', 'art', 'una', 'Artículo indefinido.'],
          ['afternoon', 'noun', 'tarde', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Sin embargo, la capacidad de sentarse con un problema difícil,',
        t: [
          ['Yet', 'prep', 'Sin embargo', 'Conjunción de contraste, abre la frase.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['capacity', 'noun', 'capacidad', 'Sustantivo contable.'],
          ['to', 'prep', 'de', 'Partícula de infinitivo.'],
          ['sit', 'verb', 'sentarse', 'Verbo base tras to: infinitivo.'],
          ['with', 'prep', 'con', 'Preposición.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['hard', 'adj', 'difícil', 'Adjetivo.'],
          ['problem', 'noun', 'problema', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'de forcejear con él sin ayuda hasta que cede,',
        t: [
          ['to', 'prep', 'de', 'Partícula de infinitivo, continúa la lista con sit.'],
          ['wrestle', 'verb', 'forcejear', 'Verbo base tras to.'],
          ['with', 'prep', 'con', 'Preposición.'],
          ['it', 'pron', 'él', 'Pronombre objeto: el problema.'],
          ['unaided', 'adv', 'sin ayuda', 'Adverbio: sin asistencia externa.'],
          ['until', 'prep', 'hasta que', 'Conjunción de tiempo.'],
          ['it', 'pron', 'él', 'Pronombre sujeto: el problema.'],
          ['yields', 'verb', 'cede', 'Present simple, 3ª persona: yield → yields.']
        ]
      },
      {
        tr: 'tiende a atrofiarse cuando nunca se exige.',
        t: [
          ['tends', 'verb', 'tiende', 'Present simple, 3ª persona: tend → tends. Verbo principal de toda la oración que empieza en Yet the capacity.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['atrophy', 'verb', 'atrofiarse', 'Verbo base tras to.'],
          ['when', 'prep', 'cuando', 'Conjunción de tiempo.'],
          ['it', 'pron', 'se', 'Pronombre sujeto neutro: la capacidad.'],
          ['is', 'verb', 'es', 'Voz pasiva: is + participio.'],
          ['never', 'adv', 'nunca', 'Adverbio de frecuencia negativa.'],
          ['demanded', 'verb', 'exigida', 'Participio pasado regular: demand + ed. Voz pasiva: is never demanded.']
        ]
      },
      {
        tr: 'Esto no es un argumento contra el progreso.',
        t: [
          ['This', 'pron', 'Esto', 'Pronombre demostrativo.'],
          ['is', 'verb', 'es', 'Present simple de be.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['an', 'art', 'un', 'Artículo indefinido.'],
          ['argument', 'noun', 'argumento', 'Sustantivo contable.'],
          ['against', 'prep', 'contra', 'Preposición.'],
          ['progress', 'noun', 'el progreso', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'Es un llamado a la conciencia.',
        t: [
          ['It', 'pron', 'Eso', 'Pronombre sujeto neutro.'],
          ['is', 'verb', 'es', 'Present simple de be.'],
          ['a', 'art', 'un', 'Artículo indefinido.'],
          ['plea', 'noun', 'llamado', 'Sustantivo contable: súplica o petición.'],
          ['for', 'prep', 'a', 'Preposición.'],
          ['awareness', 'noun', 'conciencia', 'Sustantivo incontable: nominalización de aware, consciente.']
        ]
      },
      {
        tr: 'El objetivo no es rechazar las herramientas que nos hacen más rápidos,',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['goal', 'noun', 'objetivo', 'Sustantivo contable.'],
          ['is', 'verb', 'es', 'Present simple de be.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['reject', 'verb', 'rechazar', 'Verbo base tras to.'],
          ['the', 'art', 'las', 'Artículo definido.'],
          ['tools', 'noun', 'herramientas', 'Sustantivo contable, plural.'],
          ['that', 'pron', 'que', 'Pronombre relativo, sujeto de make.'],
          ['make', 'verb', 'hacen', 'Present simple, plural.'],
          ['us', 'pron', 'nos', 'Pronombre objeto.'],
          ['faster', 'adj', 'más rápidos', 'Comparativo de fast: fast → faster.']
        ]
      },
      {
        tr: 'sino permanecer deliberados sobre qué luchas vale la pena preservar,',
        t: [
          ['but', 'prep', 'sino', 'Conjunción de contraste tras una negación.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['remain', 'verb', 'permanecer', 'Verbo base tras to.'],
          ['deliberate', 'adj', 'deliberados', 'Adjetivo.'],
          ['about', 'prep', 'sobre', 'Preposición de tema.'],
          ['which', 'adj', 'qué', 'Determinante interrogativo/relativo.'],
          ['struggles', 'noun', 'luchas', 'Sustantivo contable, plural.'],
          ['are', 'verb', 'son', 'Present simple de be, plural.'],
          ['worth', 'adj', 'dignas de', 'Adjetivo: worth + gerundio, que vale la pena.'],
          ['preserving', 'verb', 'preservar', 'Gerundio tras worth: worth preserving.']
        ]
      },
      {
        tr: 'pues es a menudo en la lucha, y no en la solución, donde de verdad nos formamos.',
        t: [
          ['for', 'prep', 'pues', 'Conjunción de causa, registro formal/literario.'],
          ['it', 'pron', 'eso', 'Pronombre expletivo: sujeto vacío de la oración hendida it is... that.'],
          ['is', 'verb', 'es', 'Verbo principal de la oración hendida: it is X that Y.'],
          ['often', 'adv', 'a menudo', 'Adverbio de frecuencia.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['struggle', 'noun', 'lucha', 'Sustantivo contable: elemento enfatizado de la oración hendida.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['solution', 'noun', 'solución', 'Sustantivo contable.'],
          ['that', 'prep', 'donde', 'Introduce la segunda mitad de la oración hendida: it is X that Y.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto.'],
          ['are', 'verb', 'somos', 'Voz pasiva: are + participio.'],
          ['actually', 'adv', 'de verdad', 'Adverbio de modo: adjetivo + -ly.'],
          ['formed', 'verb', 'formados', 'Participio pasado regular: form + ed. Voz pasiva.']
        ]
      }
    ],

    grammar: [
      { name: 'Oraciones hendidas (cleft sentences)', hits: '1 uso', ex: 'it is often in the struggle', c: '#4338ca' },
      { name: 'Voz pasiva', hits: '2 usos', ex: 'is never demanded · we are actually formed', c: '#e11d48' },
      { name: 'Present Simple', hits: '2 usos', ex: 'arrives with · celebrate the hours', c: '#0e9f6e' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['What', 'we', 'rarely', '___', 'is', 'the', 'skill', 'eroding', 'underneath.'],
        answer: 'notice',
        opts: ['notice', 'noticing', 'noticed'],
        why: 'Cláusula libre con what + presente simple: what we notice, sujeto + verbo en forma base.'
      },
      {
        s: ['It', 'is', 'often', 'in', 'the', 'struggle', '___', 'we', 'are', 'formed.'],
        answer: 'that',
        opts: ['that', 'what', 'which'],
        why: 'Oración hendida: it is X that Y — that introduce la segunda mitad, nunca what.'
      },
      {
        s: ['The', 'skill', 'is', 'never', '___', 'when', 'a', 'machine', 'does', 'the', 'work.'],
        answer: 'demanded',
        opts: ['demanded', 'demand', 'demanding'],
        why: 'Voz pasiva: is + participio pasado (demanded), no el verbo base ni el gerundio.'
      }
    ]
  },

  {
    num: '02',
    title: 'The Illusion of Simplicity',
    sub: 'Cláusulas libres con what · voz pasiva',
    tag: 'Nuevo',
    meta: '5 min · 125 palabras · 22 nuevas',

    paras: [
      {
        tr: 'Toda explicación sencilla es una pequeña mentira que aceptamos creer.',
        t: [
          ['Every', 'adj', 'Toda', 'Determinante de totalidad.'],
          ['simple', 'adj', 'sencilla', 'Adjetivo.'],
          ['explanation', 'noun', 'explicación', 'Sustantivo contable.'],
          ['is', 'verb', 'es', 'Present simple de be.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['small', 'adj', 'pequeña', 'Adjetivo.'],
          ['lie', 'noun', 'mentira', 'Sustantivo contable.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto: cláusula relativa sin that explícito, sujeto de agree.'],
          ['agree', 'verb', 'aceptamos', 'Present simple, 1ª persona plural: agree to, aceptar hacer algo.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['believe', 'verb', 'creer', 'Verbo base tras to.']
        ]
      },
      {
        tr: 'Nos dicen que el trabajo duro garantiza el éxito,',
        t: [
          ['We', 'pron', 'Nos', 'Pronombre sujeto en inglés; en la traducción funciona como objeto de la pasiva.'],
          ['are', 'verb', 'son', 'Voz pasiva: are + participio.'],
          ['told', 'verb', 'dichas', 'Participio irregular de tell: told. Voz pasiva: are told, se nos dice.'],
          ['that', 'prep', 'que', 'Introduce la cita indirecta.'],
          ['hard', 'adj', 'duro', 'Adjetivo.'],
          ['work', 'noun', 'trabajo', 'Sustantivo incontable.'],
          ['guarantees', 'verb', 'garantiza', 'Present simple, 3ª persona: guarantee → guarantees.'],
          ['success', 'noun', 'el éxito', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'que la honestidad es siempre la mejor política,',
        t: [
          ['that', 'prep', 'que', 'Repite el conector, introduce la segunda cita.'],
          ['honesty', 'noun', 'la honestidad', 'Sustantivo incontable: nominalización de honest, honesto.'],
          ['is', 'verb', 'es', 'Present simple de be.'],
          ['always', 'adv', 'siempre', 'Adverbio de frecuencia.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['best', 'adj', 'mejor', 'Superlativo irregular de good: best.'],
          ['policy', 'noun', 'política', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'que el tiempo cura todas las heridas.',
        t: [
          ['that', 'prep', 'que', 'Introduce la tercera cita.'],
          ['time', 'noun', 'el tiempo', 'Sustantivo incontable.'],
          ['heals', 'verb', 'cura', 'Present simple, 3ª persona: heal → heals.'],
          ['all', 'adj', 'todas', 'Determinante de totalidad.'],
          ['wounds', 'noun', 'las heridas', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Estas no son mentiras exactamente,',
        t: [
          ['These', 'pron', 'Estas', 'Pronombre demostrativo, plural.'],
          ['are', 'verb', 'son', 'Present simple de be, plural.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['falsehoods', 'noun', 'mentiras', 'Sustantivo contable, plural: nominalización de false, falso.'],
          ['exactly', 'adv', 'exactamente', 'Adverbio de modo.']
        ]
      },
      {
        tr: 'son contratos, y como todos los contratos, solo se sostienen bajo condiciones específicas.',
        t: [
          ['they', 'pron', 'ellas', 'Pronombre sujeto.'],
          ['are', 'verb', 'son', 'Present simple de be, plural.'],
          ['contracts', 'noun', 'contratos', 'Sustantivo contable, plural.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['like', 'prep', 'como', 'Preposición de comparación.'],
          ['all', 'adj', 'todos', 'Determinante de totalidad.'],
          ['contracts', 'noun', 'los contratos', 'Sustantivo contable, plural.'],
          ['they', 'pron', 'ellas', 'Pronombre sujeto.'],
          ['hold', 'verb', 'se sostienen', 'Present simple, plural: hold, mantenerse válido.'],
          ['only', 'adv', 'solo', 'Adverbio de restricción.'],
          ['under', 'prep', 'bajo', 'Preposición.'],
          ['specific', 'adj', 'específicas', 'Adjetivo.'],
          ['conditions', 'noun', 'condiciones', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'El problema empieza a gran escala.',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['trouble', 'noun', 'problema', 'Sustantivo incontable.'],
          ['begins', 'verb', 'empieza', 'Present simple, 3ª persona: begin → begins.'],
          ['at', 'prep', 'a', 'Preposición: at scale, a gran escala.'],
          ['scale', 'noun', 'escala', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'Una regla que funciona bien en la vida cotidiana',
        t: [
          ['A', 'art', 'Una', 'Artículo indefinido.'],
          ['rule', 'noun', 'regla', 'Sustantivo contable.'],
          ['that', 'pron', 'que', 'Pronombre relativo, sujeto de works.'],
          ['works', 'verb', 'funciona', 'Present simple, 3ª persona: work → works.'],
          ['beautifully', 'adv', 'bien', 'Adverbio de modo: adjetivo + -ly, literalmente de forma hermosa.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['ordinary', 'adj', 'cotidiana', 'Adjetivo.'],
          ['life', 'noun', 'vida', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'a menudo colapsa bajo una presión para la que nunca fue diseñada.',
        t: [
          ['often', 'adv', 'a menudo', 'Adverbio de frecuencia.'],
          ['collapses', 'verb', 'colapsa', 'Present simple, 3ª persona: collapse → collapses. Sujeto: A rule.'],
          ['under', 'prep', 'bajo', 'Preposición.'],
          ['pressure', 'noun', 'presión', 'Sustantivo incontable.'],
          ['it', 'pron', 'ella', 'Pronombre sujeto: la regla, referencia implícita.'],
          ['was', 'verb', 'fue', 'Pasado simple de be, voz pasiva: was designed.'],
          ['never', 'adv', 'nunca', 'Adverbio de frecuencia negativa.'],
          ['designed', 'verb', 'diseñada', 'Participio pasado regular: design + ed. Voz pasiva.'],
          ['to', 'prep', 'para', 'Partícula de infinitivo de propósito.'],
          ['bear', 'verb', 'soportar', 'Verbo base tras to: aguantar o soportar.']
        ]
      },
      {
        tr: 'Lo que suena sabio tomando un café puede resultar desastroso en una crisis.',
        t: [
          ['What', 'pron', 'Lo que', 'Pronombre relativo libre.'],
          ['sounds', 'verb', 'suena', 'Present simple, 3ª persona: sound → sounds.'],
          ['wise', 'adj', 'sabio', 'Adjetivo.'],
          ['over', 'prep', 'tomando', 'Preposición: over coffee, mientras se toma un café.'],
          ['coffee', 'noun', 'un café', 'Sustantivo incontable.'],
          ['can', 'verb', 'puede', 'Modal can: posibilidad.'],
          ['prove', 'verb', 'resultar', 'Verbo base tras can, sin to: resultar ser.'],
          ['disastrous', 'adj', 'desastroso', 'Adjetivo.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['crisis', 'noun', 'crisis', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Lo que guía suavemente a una persona puede aplastar a mil.',
        t: [
          ['What', 'pron', 'Lo que', 'Pronombre relativo libre.'],
          ['guides', 'verb', 'guía', 'Present simple, 3ª persona: guide → guides.'],
          ['one', 'adj', 'una', 'Numeral.'],
          ['person', 'noun', 'persona', 'Sustantivo contable.'],
          ['gently', 'adv', 'suavemente', 'Adverbio de modo: adjetivo + -ly.'],
          ['can', 'verb', 'puede', 'Modal can: posibilidad.'],
          ['crush', 'verb', 'aplastar', 'Verbo base tras can, sin to.'],
          ['a', 'art', 'un', 'Artículo indefinido: a thousand, mil como cantidad.'],
          ['thousand', 'noun', 'mil', 'Numeral usado como sustantivo.']
        ]
      },
      {
        tr: 'Quienes navegan bien la complejidad no son quienes acumulan más reglas.',
        t: [
          ['Those', 'pron', 'Quienes', 'Pronombre demostrativo plural, antecedente de who.'],
          ['who', 'pron', 'que', 'Pronombre relativo, sujeto de navigate.'],
          ['navigate', 'verb', 'navegan', 'Present simple, plural.'],
          ['complexity', 'noun', 'la complejidad', 'Sustantivo incontable: nominalización de complex, complejo.'],
          ['well', 'adv', 'bien', 'Adverbio de modo irregular.'],
          ['are', 'verb', 'son', 'Present simple de be, plural.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['the', 'art', 'los', 'Artículo definido.'],
          ['ones', 'pron', 'que', 'Pronombre: the ones who, los que.'],
          ['who', 'pron', 'que', 'Pronombre relativo, sujeto de collect.'],
          ['collect', 'verb', 'acumulan', 'Present simple, plural.'],
          ['the', 'art', 'las', 'Artículo definido.'],
          ['most', 'adj', 'más', 'Superlativo de much/many.'],
          ['rules', 'noun', 'reglas', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Son quienes entienden con más precisión',
        t: [
          ['They', 'pron', 'Ellos', 'Pronombre sujeto.'],
          ['are', 'verb', 'son', 'Present simple de be, plural.'],
          ['the', 'art', 'los', 'Artículo definido.'],
          ['ones', 'pron', 'que', 'Pronombre: the ones who.'],
          ['who', 'pron', 'que', 'Pronombre relativo, sujeto de understand.'],
          ['understand', 'verb', 'entienden', 'Present simple, plural.'],
          ['most', 'adv', 'más', 'Superlativo usado como adverbio: most precisely.'],
          ['precisely', 'adv', 'con precisión', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: 'las condiciones exactas bajo las cuales cada regla deja de ser cierta silenciosamente.',
        t: [
          ['the', 'art', 'las', 'Artículo definido.'],
          ['exact', 'adj', 'exactas', 'Adjetivo.'],
          ['conditions', 'noun', 'condiciones', 'Sustantivo contable, plural.'],
          ['under', 'prep', 'bajo', 'Preposición.'],
          ['which', 'pron', 'las cuales', 'Pronombre relativo, en registro formal tras preposición.'],
          ['each', 'adj', 'cada', 'Determinante distributivo.'],
          ['rule', 'noun', 'regla', 'Sustantivo contable.'],
          ['quietly', 'adv', 'silenciosamente', 'Adverbio de modo.'],
          ['stops', 'verb', 'deja', 'Present simple, 3ª persona: stop → stops. Stop being, dejar de ser.'],
          ['being', 'verb', 'de ser', 'Gerundio tras stops: stop + -ing.'],
          ['true', 'adj', 'cierta', 'Adjetivo tras being.']
        ]
      }
    ],

    grammar: [
      { name: 'Cláusulas relativas libres con what', hits: '2 usos', ex: 'What sounds wise · What guides one person', c: '#7c3aed' },
      { name: 'Voz pasiva', hits: '2 usos', ex: 'We are told · was never designed', c: '#e11d48' },
      { name: 'Present Simple', hits: '2 usos', ex: 'collapses under pressure · guides one person', c: '#0e9f6e' }
    ],

    phrasals: [],

    gaps: [
      {
        s: ['___', 'sounds', 'wise', 'over', 'coffee', 'can', 'prove', 'disastrous.'],
        answer: 'What',
        opts: ['What', 'That', 'Which'],
        why: 'Cláusula relativa libre: what = lo que, sin antecedente explícito.'
      },
      {
        s: ['We', 'are', '___', 'that', 'hard', 'work', 'guarantees', 'success.'],
        answer: 'told',
        opts: ['told', 'telling', 'tell'],
        why: 'Voz pasiva: are + participio (told), no el verbo base.'
      },
      {
        s: ['A', 'rule', 'often', '___', 'under', 'pressure', 'it', 'was', 'never', 'designed', 'to', 'bear.'],
        answer: 'collapses',
        opts: ['collapses', 'collapse', 'collapsing'],
        why: 'Present simple, 3ª persona con A rule (singular): collapses, con -s.'
      }
    ]
  },

  {
    num: '03',
    title: 'The Hand and the Hammer',
    sub: 'Subjuntivo as though · nominalización',
    tag: 'Nuevo',
    meta: '5 min · 148 palabras · 26 nuevas',

    paras: [
      {
        tr: 'Hablamos de nuestras herramientas como si fueran instrumentos neutrales,',
        t: [
          ['We', 'pron', 'Nosotros', 'Pronombre sujeto.'],
          ['speak', 'verb', 'hablamos', 'Present simple, plural.'],
          ['of', 'prep', 'de', 'Preposición.'],
          ['our', 'adj', 'nuestras', 'Posesivo.'],
          ['tools', 'noun', 'herramientas', 'Sustantivo contable, plural.'],
          ['as', 'prep', 'como', 'Primera parte de as though.'],
          ['though', 'prep', 'si', 'Segunda parte de as though: como si.'],
          ['they', 'pron', 'ellas', 'Pronombre sujeto: las herramientas.'],
          ['were', 'verb', 'fueran', 'Subjuntivo tras as though: situación hipotética, were para todas las personas.'],
          ['neutral', 'adj', 'neutrales', 'Adjetivo.'],
          ['instruments', 'noun', 'instrumentos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'como si el martillo no diera forma a la mano que lo empuña.',
        t: [
          ['as', 'prep', 'como', 'Primera parte de as though.'],
          ['though', 'prep', 'si', 'Segunda parte de as though.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['hammer', 'noun', 'martillo', 'Sustantivo contable.'],
          ['does', 'verb', 'auxiliar', 'Auxiliar do, negación: does not — presente indicativo, no subjuntivo, mezcla de registro deliberada del texto.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['shape', 'verb', 'dar forma a', 'Verbo base tras does not.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['hand', 'noun', 'mano', 'Sustantivo contable.'],
          ['that', 'pron', 'que', 'Pronombre relativo, sujeto de wields.'],
          ['wields', 'verb', 'empuña', 'Present simple, 3ª persona: wield → wields.'],
          ['it', 'pron', 'lo', 'Pronombre objeto: el martillo.']
        ]
      },
      {
        tr: 'Toda tecnología que adoptamos reorganiza nuestra atención,',
        t: [
          ['Every', 'adj', 'Toda', 'Determinante de totalidad.'],
          ['technology', 'noun', 'tecnología', 'Sustantivo contable.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto: cláusula relativa sin that explícito.'],
          ['adopt', 'verb', 'adoptamos', 'Present simple, plural.'],
          ['reorganizes', 'verb', 'reorganiza', 'Present simple, 3ª persona: reorganize → reorganizes. Sujeto: Every technology.'],
          ['our', 'adj', 'nuestra', 'Posesivo.'],
          ['attention', 'noun', 'atención', 'Sustantivo incontable.']
        ]
      },
      {
        tr: 'reestructura nuestras relaciones,',
        t: [
          ['restructures', 'verb', 'reestructura', 'Present simple, 3ª persona: restructure → restructures.'],
          ['our', 'adj', 'nuestras', 'Posesivo.'],
          ['relationships', 'noun', 'relaciones', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'y renegocia silenciosamente lo que consideramos natural, necesario o incluso posible.',
        t: [
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['quietly', 'adv', 'silenciosamente', 'Adverbio de modo.'],
          ['renegotiates', 'verb', 'renegocia', 'Present simple, 3ª persona: renegotiate → renegotiates.'],
          ['what', 'pron', 'lo que', 'Pronombre relativo libre.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto.'],
          ['consider', 'verb', 'consideramos', 'Present simple, plural.'],
          ['natural', 'adj', 'natural', 'Adjetivo.'],
          ['necessary', 'adj', 'necesario', 'Adjetivo.'],
          ['or', 'prep', 'o', 'Conjunción de alternativa.'],
          ['even', 'adv', 'incluso', 'Adverbio de énfasis.'],
          ['possible', 'adj', 'posible', 'Adjetivo.']
        ]
      },
      {
        tr: 'Alguien que pasa una década pensando de cierta manera no solo adquiere una habilidad,',
        t: [
          ['Someone', 'pron', 'Alguien', 'Pronombre indefinido.'],
          ['who', 'pron', 'que', 'Pronombre relativo, sujeto de spends.'],
          ['spends', 'verb', 'pasa', 'Present simple, 3ª persona: spend → spends.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['decade', 'noun', 'década', 'Sustantivo contable.'],
          ['thinking', 'verb', 'pensando', 'Gerundio: spends a decade thinking.'],
          ['in', 'prep', 'de', 'Preposición.'],
          ['a', 'art', 'cierta', 'Artículo indefinido.'],
          ['certain', 'adj', 'cierta', 'Adjetivo.'],
          ['way', 'noun', 'manera', 'Sustantivo contable.'],
          ['does', 'verb', 'auxiliar', 'Auxiliar do, negación: does not.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['merely', 'adv', 'solo', 'Adverbio: solamente.'],
          ['acquire', 'verb', 'adquiere', 'Verbo base tras does not.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['skill', 'noun', 'habilidad', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'adquiere una forma de ver.',
        t: [
          ['they', 'pron', 'esa persona', 'Pronombre: singular they, se refiere a Someone.'],
          ['acquire', 'verb', 'adquiere', 'Present simple: con singular they, sin -s aunque se refiera a una sola persona.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['way', 'noun', 'forma', 'Sustantivo contable.'],
          ['of', 'prep', 'de', 'Preposición.'],
          ['seeing', 'verb', 'ver', 'Gerundio usado como sustantivo tras of: way of seeing.']
        ]
      },
      {
        tr: 'Los problemas empiezan a revelarse como patrones.',
        t: [
          ['Problems', 'noun', 'Los problemas', 'Sustantivo contable, plural.'],
          ['begin', 'verb', 'empiezan', 'Present simple, plural.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['reveal', 'verb', 'revelarse', 'Verbo base tras to.'],
          ['themselves', 'pron', 'se', 'Pronombre reflexivo, plural.'],
          ['as', 'prep', 'como', 'Preposición.'],
          ['patterns', 'noun', 'patrones', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Lo que antes parecía abrumador se vuelve navegable.',
        t: [
          ['What', 'pron', 'Lo que', 'Pronombre relativo libre.'],
          ['once', 'adv', 'antes', 'Adverbio de tiempo.'],
          ['felt', 'verb', 'parecía', 'Pasado simple irregular de feel: felt.'],
          ['overwhelming', 'adj', 'abrumador', 'Adjetivo: participio presente usado como adjetivo.'],
          ['becomes', 'verb', 'se vuelve', 'Present simple, 3ª persona: become → becomes.'],
          ['navigable', 'adj', 'navegable', 'Adjetivo.']
        ]
      },
      {
        tr: 'El mundo, en cierto sentido irreversible, se vuelve más fácil de leer.',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['world', 'noun', 'mundo', 'Sustantivo contable.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['some', 'adj', 'cierto', 'Determinante de cantidad.'],
          ['irreversible', 'adj', 'irreversible', 'Adjetivo.'],
          ['sense', 'noun', 'sentido', 'Sustantivo contable.'],
          ['becomes', 'verb', 'se vuelve', 'Present simple, 3ª persona.'],
          ['easier', 'adj', 'más fácil', 'Comparativo de easy.'],
          ['to', 'prep', 'de', 'Partícula de infinitivo.'],
          ['read', 'verb', 'leer', 'Verbo base tras to.']
        ]
      },
      {
        tr: 'Pero la legibilidad proyecta sus propias sombras.',
        t: [
          ['But', 'prep', 'Pero', 'Conjunción de contraste.'],
          ['legibility', 'noun', 'la legibilidad', 'Sustantivo incontable: nominalización de legible, legible.'],
          ['casts', 'verb', 'proyecta', 'Present simple, 3ª persona: cast → casts.'],
          ['its', 'adj', 'sus', 'Posesivo neutro.'],
          ['own', 'adj', 'propias', 'Adjetivo.'],
          ['shadows', 'noun', 'sombras', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Lo que no se puede medir tiende a volverse invisible.',
        t: [
          ['What', 'pron', 'Lo que', 'Pronombre relativo libre.'],
          ['cannot', 'verb', 'no se puede', 'Negación del modal can: cannot, todo junto.'],
          ['be', 'verb', 'ser', 'Verbo base tras cannot, voz pasiva: be measured.'],
          ['measured', 'verb', 'medido', 'Participio pasado regular: measure + ed. Voz pasiva.'],
          ['tends', 'verb', 'tiende', 'Present simple, 3ª persona: tend → tends.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['become', 'verb', 'volverse', 'Verbo base tras to.'],
          ['invisible', 'adj', 'invisible', 'Adjetivo.']
        ]
      },
      {
        tr: 'La fricción humana, el entendimiento tácito, el conocimiento que se resiste a ser escrito,',
        t: [
          ['The', 'art', 'La', 'Artículo definido.'],
          ['human', 'adj', 'humana', 'Adjetivo.'],
          ['friction', 'noun', 'fricción', 'Sustantivo incontable.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['unspoken', 'adj', 'tácito', 'Adjetivo: participio pasado usado como adjetivo, no dicho.'],
          ['understanding', 'noun', 'entendimiento', 'Sustantivo incontable: nominalización de understand, entender.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['knowledge', 'noun', 'conocimiento', 'Sustantivo incontable.'],
          ['that', 'pron', 'que', 'Pronombre relativo, sujeto de resists.'],
          ['resists', 'verb', 'se resiste a', 'Present simple, 3ª persona: resist → resists.'],
          ['being', 'verb', 'ser', 'Gerundio pasivo: being written down.'],
          ['written', 'verb', 'escrito', 'Participio irregular de write: written. Voz pasiva.'],
          ['down', 'adv', 'down', 'Adverbio: write down, poner por escrito.']
        ]
      },
      {
        tr: 'estas no desaparecen.',
        t: [
          ['these', 'pron', 'estas', 'Pronombre demostrativo, plural.'],
          ['do', 'verb', 'auxiliar', 'Auxiliar do, negación: do not.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['vanish', 'verb', 'desaparecen', 'Verbo base tras do not.']
        ]
      },
      {
        tr: 'Simplemente dejan de ser contadas.',
        t: [
          ['They', 'pron', 'Ellas', 'Pronombre sujeto.'],
          ['simply', 'adv', 'Simplemente', 'Adverbio de modo.'],
          ['cease', 'verb', 'dejan', 'Present simple, plural: cease to, dejar de.'],
          ['to', 'prep', 'de', 'Partícula de infinitivo.'],
          ['be', 'verb', 'ser', 'Verbo base tras to, voz pasiva: be counted.'],
          ['counted', 'verb', 'contadas', 'Participio pasado regular: count + ed. Voz pasiva.']
        ]
      },
      {
        tr: 'Vivir reflexivamente junto a nuestras herramientas es mantenerse receloso de nuestra propia fluidez,',
        t: [
          ['To', 'prep', 'a', 'Partícula de infinitivo: to live, usado como sujeto de toda la oración.'],
          ['live', 'verb', 'Vivir', 'Verbo base tras to: infinitivo usado como sustantivo, sujeto de is.'],
          ['thoughtfully', 'adv', 'reflexivamente', 'Adverbio de modo: adjetivo + -ly.'],
          ['alongside', 'prep', 'junto a', 'Preposición de compañía.'],
          ['our', 'adj', 'nuestras', 'Posesivo.'],
          ['tools', 'noun', 'herramientas', 'Sustantivo contable, plural.'],
          ['is', 'verb', 'es', 'Present simple de be.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo, segunda mitad.'],
          ['stay', 'verb', 'mantenerse', 'Verbo base tras to.'],
          ['suspicious', 'adj', 'receloso', 'Adjetivo: suspicious of, receloso de.'],
          ['of', 'prep', 'de', 'Preposición.'],
          ['our', 'adj', 'nuestra', 'Posesivo.'],
          ['own', 'adj', 'propia', 'Adjetivo.'],
          ['fluency', 'noun', 'fluidez', 'Sustantivo incontable: nominalización de fluent, fluido.']
        ]
      },
      {
        tr: 'es seguir preguntándonos qué deja fuera el modelo.',
        t: [
          ['to', 'prep', 'a', 'Partícula de infinitivo: continúa la lista de infinitivos, to stay... to keep.'],
          ['keep', 'verb', 'seguir', 'Verbo base tras to: keep + gerundio, seguir haciendo algo.'],
          ['asking', 'verb', 'preguntándonos', 'Gerundio tras keep.'],
          ['what', 'pron', 'qué', 'Pronombre interrogativo, objeto de leaves out.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['model', 'noun', 'modelo', 'Sustantivo contable.'],
          ['leaves out', 'phr', 'deja fuera', 'Phrasal verb: leave + out, omitir o excluir algo.']
        ]
      }
    ],

    grammar: [
      { name: 'Subjuntivo: as though + pasado', hits: '1 uso', ex: 'as though they were', c: '#7c3aed' },
      { name: 'Nominalización abstracta', hits: '3 usos', ex: 'legibility · fluency · understanding', c: '#0891b2' },
      { name: 'Voz pasiva', hits: '2 usos', ex: 'be measured · being written down', c: '#e11d48' }
    ],

    phrasals: [
      { verb: 'leave out', mean: 'omitir', quote: 'what the model leaves out' }
    ],

    gaps: [
      {
        s: ['We', 'speak', 'of', 'our', 'tools', 'as', 'though', 'they', '___', 'neutral', 'instruments.'],
        answer: 'were',
        opts: ['were', 'are', 'was'],
        why: 'As though + pasado (were) para una comparación hipotética o irreal, sin importar la persona.'
      },
      {
        s: ['What', 'cannot', '___', 'measured', 'tends', 'to', 'become', 'invisible.'],
        answer: 'be',
        opts: ['be', 'been', 'being'],
        why: 'Voz pasiva tras el modal cannot: cannot be + participio, verbo base be, no been ni being.'
      },
      {
        s: ['The', 'human', 'friction', 'the', 'unspoken', '___', 'these', 'do', 'not', 'vanish.'],
        answer: 'understanding',
        opts: ['understanding', 'understand', 'understood'],
        why: 'Nominalización: understanding (sustantivo abstracto), no el verbo understand ni el participio understood.'
      }
    ]
  }
];
