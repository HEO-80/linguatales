/**
 * LinguaTales — Inglés C1
 * src/data/stories/en.c1.js
 *
 * Dos relatos de C1, en diálogo y narración de tercera persona (no ensayo
 * como C2): una oficina donde alguien especula sobre un ascenso perdido, y
 * un equipo que gestiona el error de haber enviado el archivo equivocado a
 * un cliente. Gramática propia de C1: modales perfectos de deducción
 * (must/can't/might have + participio), inversión enfática (Never had...,
 * Not only did..., rarely does...), cláusulas de participio (Having +
 * participio) y verbos reportantes más allá de say/tell (admit, deny,
 * insist, claim) — un peldaño por debajo de las estructuras de ensayo de C2
 * (oraciones hendidas, subjuntivo con as though, nominalización abstracta).
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

export const EN_C1 = [
  {
    num: '01',
    title: 'The Promotion That Wasn\'t',
    sub: 'Modales perfectos de deducción · inversión enfática',
    tag: 'Nuevo',
    meta: '6 min · 160 palabras · 24 nuevas',

    paras: [
      {
        tr: 'Priya encontró a Tom mirando fijamente la pantalla de su computadora, con la cara pálida.',
        t: [
          ['Priya', 'noun', 'Priya', 'Nombre propio: protagonista del relato.'],
          ['found', 'verb', 'encontró', 'Pasado simple irregular de find: found.'],
          ['Tom', 'noun', 'Tom', 'Nombre propio.'],
          ['staring', 'verb', 'mirando fijamente', 'Gerundio: find + persona + gerundio, ver a alguien haciendo algo.'],
          ['at', 'prep', 'a', 'Preposición: stare at, mirar fijamente.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['computer', 'noun', 'de computadora', 'Sustantivo usado como modificador de otro sustantivo.'],
          ['screen', 'noun', 'pantalla', 'Sustantivo contable.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['face', 'noun', 'cara', 'Sustantivo contable.'],
          ['pale', 'adj', 'pálida', 'Adjetivo.']
        ]
      },
      {
        tr: '"Te ves fatal", dijo ella. "¿Qué pasó?"',
        t: [
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['look', 'verb', 'ves', 'Present simple, 2ª persona: look + adjetivo, tener aspecto de.'],
          ['terrible', 'adj', 'fatal', 'Adjetivo.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say: said.'],
          ['What', 'pron', 'Qué', 'Pronombre interrogativo.'],
          ['happened', 'verb', 'pasó', 'Pasado simple regular: happen + ed.']
        ]
      },
      {
        tr: '"No conseguí el ascenso", dijo Tom en voz baja.',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["didn't", 'verb', 'no', 'Auxiliar do en pasado, negación: did not → didn\'t.'],
          ['get', 'verb', 'conseguí', 'Verbo base tras didn\'t: vuelve al infinitivo, sin -ed.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['promotion', 'noun', 'ascenso', 'Sustantivo contable.'],
          ['Tom', 'noun', 'Tom', 'Nombre propio.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['quietly', 'adv', 'en voz baja', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: '"¿Qué? Debes de haber entendido mal. Tenías los mejores números de todo el equipo."',
        t: [
          ['What', 'pron', 'Qué', 'Pronombre interrogativo usado como interjección.'],
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['must', 'verb', 'debes de', 'Modal must: deducción casi segura sobre el pasado, seguido de have + participio.'],
          ['have', 'verb', 'haber', 'Auxiliar have tras el modal must, sin conjugar.'],
          ['misunderstood', 'verb', 'entendido mal', 'Participio irregular de misunderstand: misunderstood.'],
          ['You', 'pron', 'Tú', 'Pronombre sujeto.'],
          ['had', 'verb', 'tenías', 'Pasado simple irregular de have: had.'],
          ['the', 'art', 'los', 'Artículo definido.'],
          ['best', 'adj', 'mejores', 'Superlativo irregular de good: best.'],
          ['numbers', 'noun', 'números', 'Sustantivo contable, plural.'],
          ['on', 'prep', 'de', 'Preposición.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['whole', 'adj', 'todo', 'Adjetivo de totalidad.'],
          ['team', 'noun', 'equipo', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"No entendí mal nada. Rebecca lo consiguió en mi lugar."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ["didn't", 'verb', 'no', 'Auxiliar do en pasado, negación.'],
          ['misunderstand', 'verb', 'entendí mal', 'Verbo base tras didn\'t.'],
          ['anything', 'pron', 'nada', 'Pronombre indefinido tras negación.'],
          ['Rebecca', 'noun', 'Rebecca', 'Nombre propio.'],
          ['got', 'verb', 'consiguió', 'Pasado simple irregular de get: got.'],
          ['it', 'pron', 'lo', 'Pronombre objeto neutro.'],
          ['instead', 'adv', 'en mi lugar', 'Adverbio: en su lugar, en vez de eso.']
        ]
      },
      {
        tr: '"¿Rebecca? No puede haber aplicado. Se unió a la empresa apenas en marzo."',
        t: [
          ['Rebecca', 'noun', 'Rebecca', 'Nombre propio.'],
          ['She', 'pron', 'Ella', 'Pronombre sujeto.'],
          ["can't", 'verb', 'no puede', 'Negación del modal can: deducción casi imposible sobre el pasado, seguida de have + participio.'],
          ['have', 'verb', 'haber', 'Auxiliar have tras el modal can\'t, sin conjugar.'],
          ['applied', 'verb', 'aplicado', 'Participio regular de apply: apply + ed.'],
          ['She', 'pron', 'Ella', 'Pronombre sujeto.'],
          ['only', 'adv', 'apenas', 'Adverbio de restricción.'],
          ['joined', 'verb', 'se unió a', 'Pasado simple regular: join + ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['company', 'noun', 'empresa', 'Sustantivo contable.'],
          ['in', 'prep', 'en', 'Preposición de tiempo.'],
          ['March', 'noun', 'marzo', 'Mes, con mayúscula en inglés.']
        ]
      },
      {
        tr: '"Debe de haber aplicado de alguna manera. Recursos Humanos lo anunció esta mañana."',
        t: [
          ['She', 'pron', 'Ella', 'Pronombre sujeto.'],
          ['must', 'verb', 'debe de', 'Modal must: deducción casi segura sobre el pasado.'],
          ['have', 'verb', 'haber', 'Auxiliar have tras el modal must.'],
          ['applied', 'verb', 'aplicado', 'Participio regular de apply: apply + ed.'],
          ['somehow', 'adv', 'de alguna manera', 'Adverbio de modo indefinido.'],
          ['HR', 'noun', 'Recursos Humanos', 'Sigla de Human Resources.'],
          ['announced', 'verb', 'anunció', 'Pasado simple regular: announce + d.'],
          ['it', 'pron', 'lo', 'Pronombre objeto neutro.'],
          ['this', 'adj', 'esta', 'Determinante demostrativo.'],
          ['morning', 'noun', 'mañana', 'Sustantivo contable.']
        ]
      },
      {
        tr: 'Nunca se había sentido Tom tan seguro de algo en su vida.',
        t: [
          ['Never', 'adv', 'Nunca', 'Adverbio de frecuencia negativa: abre la frase y provoca inversión.'],
          ['had', 'verb', 'había', 'Pasado perfecto invertido: adverbio negativo + had + sujeto + participio.'],
          ['Tom', 'noun', 'Tom', 'Nombre propio: sujeto, colocado después de had por la inversión.'],
          ['felt', 'verb', 'sentido', 'Participio irregular de feel: felt.'],
          ['so', 'adv', 'tan', 'Adverbio de intensidad.'],
          ['confident', 'adj', 'seguro', 'Adjetivo.'],
          ['about', 'prep', 'de', 'Preposición de tema.'],
          ['anything', 'pron', 'algo', 'Pronombre indefinido.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['life', 'noun', 'vida', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"No solo consiguió el ascenso, sino que también se quedó con tu antigua oficina."',
        t: [
          ['Not', 'adv', 'No', 'Adverbio de negación, primera parte de not only.'],
          ['only', 'adv', 'solo', 'Segunda parte de not only: provoca inversión con did.'],
          ['did', 'verb', 'auxiliar', 'Auxiliar do en pasado, invertido tras not only: did + sujeto + verbo base.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto, después de did por la inversión.'],
          ['get', 'verb', 'consiguió', 'Verbo base tras did: vuelve al infinitivo.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['promotion', 'noun', 'ascenso', 'Sustantivo contable.'],
          ['but', 'prep', 'sino', 'Conjunción de contraste, segunda mitad de not only... but also.'],
          ['she', 'pron', 'ella', 'Pronombre sujeto.'],
          ['also', 'adv', 'también', 'Adverbio: segunda parte de but also.'],
          ['got', 'verb', 'se quedó con', 'Pasado simple irregular de get: got.'],
          ['your', 'adj', 'tu', 'Posesivo.'],
          ['old', 'adj', 'antigua', 'Adjetivo.'],
          ['office', 'noun', 'oficina', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Si hubiera sabido que esto iba a pasar, habría buscado otro trabajo hace meses."',
        t: [
          ['If', 'prep', 'Si', 'Conjunción condicional, abre la frase.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['had', 'verb', 'hubiera', 'Pasado perfecto en la cláusula con if: tercer condicional.'],
          ['known', 'verb', 'sabido', 'Participio irregular de know: known.'],
          ['this', 'pron', 'esto', 'Pronombre demostrativo.'],
          ['would', 'verb', 'iba a', 'Would en una cláusula subordinada: reporta una intención pasada, distinto del condicional principal.'],
          ['happen', 'verb', 'pasar', 'Verbo base tras would.'],
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['would', 'verb', 'habría', 'Would have + participio: resultado del tercer condicional.'],
          ['have', 'verb', 'haber', 'Auxiliar have tras would.'],
          ['looked', 'verb', 'buscado', 'Participio regular de look: look + ed.'],
          ['for', 'prep', 'para', 'Preposición.'],
          ['another', 'adj', 'otro', 'Determinante de diferencia.'],
          ['job', 'noun', 'trabajo', 'Sustantivo contable.'],
          ['months', 'noun', 'meses', 'Sustantivo contable, plural.'],
          ['ago', 'adv', 'hace', 'Adverbio de tiempo pasado: se coloca después de la cantidad.']
        ]
      },
      {
        tr: '"Rebecca podría haber tenido contactos con el director", dijo Priya.',
        t: [
          ['Rebecca', 'noun', 'Rebecca', 'Nombre propio.'],
          ['might', 'verb', 'podría', 'Modal might: deducción posible sobre el pasado, menos segura que must.'],
          ['have', 'verb', 'haber', 'Auxiliar have tras el modal might.'],
          ['had', 'verb', 'tenido', 'Participio irregular de have: had.'],
          ['connections', 'noun', 'contactos', 'Sustantivo contable, plural.'],
          ['with', 'prep', 'con', 'Preposición de compañía.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['director', 'noun', 'director', 'Sustantivo contable.'],
          ['Priya', 'noun', 'Priya', 'Nombre propio.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.']
        ]
      },
      {
        tr: '"Eso aún no puede haber sido justo", dijo Tom, y cerró su laptop.',
        t: [
          ['That', 'pron', 'Eso', 'Pronombre demostrativo.'],
          ['still', 'adv', 'aún', 'Adverbio de tiempo.'],
          ["can't", 'verb', 'no puede', 'Negación del modal can: deducción casi imposible sobre el pasado.'],
          ['have', 'verb', 'haber', 'Auxiliar have tras el modal can\'t.'],
          ['been', 'verb', 'sido', 'Participio irregular de be: been.'],
          ['fair', 'adj', 'justo', 'Adjetivo.'],
          ['Tom', 'noun', 'Tom', 'Nombre propio.'],
          ['said', 'verb', 'dijo', 'Pasado simple irregular de say.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['closed', 'verb', 'cerró', 'Pasado simple regular: close + d.'],
          ['his', 'adj', 'su', 'Posesivo.'],
          ['laptop', 'noun', 'laptop', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Tienes razón. Solo raramente la empresa se equivoca tanto en algo."',
        t: [
          ["You're", 'verb', 'Tienes', 'Contracción de you are, en la expresión fija you\'re right.'],
          ['right', 'adj', 'razón', 'Adjetivo tras be: be right, tener razón.'],
          ['Only', 'adv', 'Solo', 'Adverbio de restricción, primera parte de only rarely.'],
          ['rarely', 'adv', 'raramente', 'Adverbio de frecuencia negativa: provoca inversión con does.'],
          ['does', 'verb', 'auxiliar', 'Auxiliar do en presente, invertido tras only rarely: does + sujeto + verbo base.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['company', 'noun', 'empresa', 'Sustantivo contable, sujeto colocado después de does por la inversión.'],
          ['get', 'verb', 'se equivoca', 'Verbo base tras does: vuelve al infinitivo.'],
          ['something', 'pron', 'en algo', 'Pronombre indefinido.'],
          ['this', 'adv', 'tanto', 'Adverbio de intensidad: this wrong, tan mal.'],
          ['wrong', 'adj', 'mal', 'Adjetivo.']
        ]
      },
      {
        tr: '"Si decidieras quejarte, te apoyaría por completo."',
        t: [
          ['Should', 'verb', 'Si', 'Inversión formal: should + sujeto + verbo base = if + sujeto + should, registro formal.'],
          ['you', 'pron', 'tú', 'Pronombre sujeto, colocado después de should por la inversión.'],
          ['decide', 'verb', 'decidieras', 'Verbo base tras should en la inversión formal.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['complain', 'verb', 'quejarte', 'Verbo base tras to: infinitivo.'],
          ['I', 'pron', 'yo', 'Pronombre sujeto.'],
          ['would', 'verb', 'apoyaría', 'Would + verbo base: resultado del condicional formal.'],
          ['support', 'verb', 'apoyar', 'Verbo base tras would.'],
          ['you', 'pron', 'te', 'Pronombre objeto.'],
          ['completely', 'adv', 'por completo', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: 'Tom se puso de pie y caminó hacia la oficina del director, y, por primera vez ese día, sonrió.',
        t: [
          ['Tom', 'noun', 'Tom', 'Nombre propio.'],
          ['stood up', 'phr', 'se puso de pie', 'Phrasal verb: stand + up, ponerse de pie.'],
          ['and', 'prep', 'y', 'Conjunción de suma.'],
          ['walked', 'verb', 'caminó', 'Pasado simple regular: walk + ed.'],
          ['toward', 'prep', 'hacia', 'Preposición de dirección.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ["director's", 'noun', 'del director', 'Genitivo sajón: director\'s office, la oficina del director.'],
          ['office', 'noun', 'oficina', 'Sustantivo contable.'],
          ['for', 'prep', 'por', 'Preposición.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['first', 'adj', 'primera', 'Numeral ordinal.'],
          ['time', 'noun', 'vez', 'Sustantivo contable.'],
          ['that', 'adj', 'ese', 'Determinante demostrativo.'],
          ['day', 'noun', 'día', 'Sustantivo contable.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['smiled', 'verb', 'sonrió', 'Pasado simple regular: smile + d.']
        ]
      }
    ],

    /* reglas que practica este relato · los ejemplos salen del propio texto */
    grammar: [
      { name: 'Modales perfectos de deducción', hits: '5 usos', ex: "must have misunderstood · can't have applied · might have had", c: '#e0a80c' },
      { name: 'Inversión enfática', hits: '3 usos', ex: 'Never had Tom felt · Not only did she get · rarely does the company', c: '#4338ca' },
      { name: 'Condicionales', hits: '2 usos', ex: 'If I had known this would happen · Should you decide to complain', c: '#0e9f6e' }
    ],

    /* phrasal verbs con la frase donde aparecen */
    phrasals: [
      { verb: 'stand up', mean: 'ponerse de pie', quote: "Tom stood up and walked toward the director's office" }
    ],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      {
        s: ['You', '___', 'have', 'misunderstood.'],
        answer: 'must',
        opts: ['must', "can't", 'might'],
        why: 'Deducción casi segura sobre el pasado: must have + participio.'
      },
      {
        s: ['She', '___', 'have', 'applied.'],
        answer: "can't",
        opts: ["can't", 'must', 'might'],
        why: "Deducción negativa fuerte: can't have + participio — imposible que pasara."
      },
      {
        s: ['Never', '___', 'Tom', 'felt', 'so', 'confident.'],
        answer: 'had',
        opts: ['had', 'has', 'did'],
        why: 'Inversión con adverbio negativo: Never + had + sujeto + participio, pasado perfecto invertido.'
      }
    ]
  },

  {
    num: '02',
    title: 'The Apology Email',
    sub: 'Cláusulas de participio · verbos reportantes',
    tag: 'Nuevo',
    meta: '5 min · 140 palabras · 22 nuevas',

    paras: [
      {
        tr: 'Habiendo enviado el archivo equivocado al cliente, Daniela llamó de inmediato a su jefe.',
        t: [
          ['Having', 'verb', 'Habiendo', 'Cláusula de participio perfecto: having + participio, acción completada antes de la principal.'],
          ['sent', 'verb', 'enviado', 'Participio irregular de send: sent.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['wrong', 'adj', 'equivocado', 'Adjetivo.'],
          ['file', 'noun', 'archivo', 'Sustantivo contable.'],
          ['to', 'prep', 'a', 'Preposición de dirección.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['client', 'noun', 'cliente', 'Sustantivo contable.'],
          ['Daniela', 'noun', 'Daniela', 'Nombre propio: protagonista del relato.'],
          ['immediately', 'adv', 'de inmediato', 'Adverbio de modo: adjetivo + -ly.'],
          ['called', 'verb', 'llamó', 'Pasado simple regular: call + ed.'],
          ['her', 'adj', 'su', 'Posesivo.'],
          ['manager', 'noun', 'jefe', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"¿Qué pasa?", preguntó él, notando el pánico en su voz.',
        t: [
          ["What's", 'pron', 'Qué', 'Contracción de what is.'],
          ['wrong', 'adj', 'pasa', 'Adjetivo en la expresión fija what\'s wrong, qué pasa.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['asked', 'verb', 'preguntó', 'Pasado simple regular: ask + ed.'],
          ['noticing', 'verb', 'notando', 'Gerundio: describe una acción simultánea a asked.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['panic', 'noun', 'pánico', 'Sustantivo incontable.'],
          ['in', 'prep', 'en', 'Preposición.'],
          ['her', 'adj', 'su', 'Posesivo.'],
          ['voice', 'noun', 'voz', 'Sustantivo contable.']
        ]
      },
      {
        tr: '"Adjunté la hoja de cálculo equivocada. Tiene los números del año pasado, no los de este año."',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['attached', 'verb', 'Adjunté', 'Pasado simple regular: attach + ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['wrong', 'adj', 'equivocada', 'Adjetivo.'],
          ['spreadsheet', 'noun', 'hoja de cálculo', 'Sustantivo contable.'],
          ['It', 'pron', 'Tiene', 'Pronombre sujeto neutro, sujeto de has.'],
          ['has', 'verb', 'tiene', 'Present simple, 3ª persona: have → has.'],
          ['last', 'adj', 'del', 'Adjetivo de tiempo: last year, el año pasado.'],
          ["year's", 'noun', 'año pasado', 'Sustantivo con genitivo sajón: year\'s numbers, los números de ese año.'],
          ['numbers', 'noun', 'números', 'Sustantivo contable, plural.'],
          ['not', 'adv', 'no', 'Adverbio de negación.'],
          ['this', 'adj', 'de este', 'Determinante demostrativo: this year, este año.'],
          ["year's", 'noun', 'año', 'Sustantivo con genitivo sajón: this year\'s, de este año.']
        ]
      },
      {
        tr: 'Dándose cuenta de que no había tiempo que perder, le pidió que enviara una corrección de inmediato.',
        t: [
          ['Realizing', 'verb', 'Dándose cuenta', 'Cláusula de participio presente: gerundio + cláusula, acción simultánea al verbo principal.'],
          ['there', 'pron', 'no había', 'Pronombre expletivo: there was, había.'],
          ['was', 'verb', 'había', 'Pasado simple de be: there was, había.'],
          ['no', 'adv', 'no', 'Determinante negativo.'],
          ['time', 'noun', 'tiempo', 'Sustantivo incontable.'],
          ['to', 'prep', 'que', 'Partícula de infinitivo.'],
          ['lose', 'verb', 'perder', 'Verbo base tras to.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['asked', 'verb', 'pidió', 'Pasado simple regular: ask + ed.'],
          ['her', 'pron', 'le', 'Pronombre objeto.'],
          ['to', 'prep', 'que', 'Partícula de infinitivo tras ask + persona.'],
          ['send', 'verb', 'enviara', 'Verbo base tras to.'],
          ['a', 'art', 'una', 'Artículo indefinido.'],
          ['correction', 'noun', 'corrección', 'Sustantivo contable.'],
          ['right', 'adv', 'de inmediato', 'Adverbio: right away, enseguida.'],
          ['away', 'adv', 'away', 'Segunda parte de right away.']
        ]
      },
      {
        tr: 'Daniela escribió un correo de disculpa, admitiendo el error con claridad.',
        t: [
          ['Daniela', 'noun', 'Daniela', 'Nombre propio.'],
          ['wrote', 'verb', 'escribió', 'Pasado simple irregular de write: wrote.'],
          ['an', 'art', 'un', 'Artículo indefinido.'],
          ['apology', 'noun', 'de disculpa', 'Sustantivo usado como modificador.'],
          ['email', 'noun', 'correo', 'Sustantivo contable.'],
          ['admitting', 'verb', 'admitiendo', 'Gerundio: describe una acción simultánea a wrote.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['mistake', 'noun', 'error', 'Sustantivo contable.'],
          ['clearly', 'adv', 'con claridad', 'Adverbio de modo: adjetivo + -ly.']
        ]
      },
      {
        tr: 'Su colega Marcus negó haber revisado el archivo antes de que se enviara.',
        t: [
          ['Her', 'adj', 'Su', 'Posesivo.'],
          ['colleague', 'noun', 'colega', 'Sustantivo contable.'],
          ['Marcus', 'noun', 'Marcus', 'Nombre propio.'],
          ['denied', 'verb', 'negó', 'Pasado simple regular: deny → denied. Verbo reportante: deny that, negar haber hecho algo.'],
          ['that', 'prep', 'que', 'Introduce la cláusula reportada tras denied.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['had', 'verb', 'había', 'Pasado perfecto: acción anterior a la de negar.'],
          ['checked', 'verb', 'revisado', 'Participio regular de check: check + ed.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['file', 'noun', 'archivo', 'Sustantivo contable.'],
          ['before', 'prep', 'antes de que', 'Conjunción de tiempo.'],
          ['it', 'pron', 'se', 'Pronombre sujeto neutro: el archivo.'],
          ['was', 'verb', 'fue', 'Voz pasiva: was + participio.'],
          ['sent', 'verb', 'enviado', 'Participio irregular de send: sent. Voz pasiva: was sent.']
        ]
      },
      {
        tr: '"Insistí en que alguien lo revisara dos veces", afirmó Marcus.',
        t: [
          ['I', 'pron', 'Yo', 'Pronombre sujeto.'],
          ['insisted', 'verb', 'Insistí', 'Pasado simple regular: insist → insisted. Insist that + subjuntivo: insistir en que.'],
          ['that', 'prep', 'en que', 'Introduce la cláusula tras insisted.'],
          ['someone', 'pron', 'alguien', 'Pronombre indefinido.'],
          ['double-check', 'verb', 'revisara dos veces', 'Subjuntivo tras insist that: verbo base, sin -s aunque el sujeto sea someone.'],
          ['it', 'pron', 'lo', 'Pronombre objeto neutro.'],
          ['Marcus', 'noun', 'Marcus', 'Nombre propio.'],
          ['claimed', 'verb', 'afirmó', 'Pasado simple regular: claim → claimed. Verbo reportante: claimed, afirmar algo que puede no ser cierto.']
        ]
      },
      {
        tr: 'Habiendo revisado la cadena de correos, el jefe no encontró tal mensaje de Marcus.',
        t: [
          ['Having', 'verb', 'Habiendo', 'Cláusula de participio perfecto: having + participio.'],
          ['reviewed', 'verb', 'revisado', 'Participio regular de review: review + ed.'],
          ['the', 'art', 'la', 'Artículo definido.'],
          ['email', 'noun', 'de correos', 'Sustantivo usado como modificador.'],
          ['chain', 'noun', 'cadena', 'Sustantivo contable.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['manager', 'noun', 'jefe', 'Sustantivo contable.'],
          ['found', 'verb', 'encontró', 'Pasado simple irregular de find: found.'],
          ['no', 'adv', 'no', 'Determinante negativo: no such, ningún tal.'],
          ['such', 'adj', 'tal', 'Determinante: no such message, ningún mensaje así.'],
          ['message', 'noun', 'mensaje', 'Sustantivo contable.'],
          ['from', 'prep', 'de', 'Preposición.'],
          ['Marcus', 'noun', 'Marcus', 'Nombre propio.']
        ]
      },
      {
        tr: '"Si hubiéramos detectado esto una hora antes, el cliente no estaría tan molesto ahora."',
        t: [
          ['If', 'prep', 'Si', 'Conjunción condicional.'],
          ['we', 'pron', 'nosotros', 'Pronombre sujeto.'],
          ['had', 'verb', 'hubiéramos', 'Pasado perfecto en la cláusula con if: condicional mixto.'],
          ['caught', 'verb', 'detectado', 'Participio irregular de catch: caught.'],
          ['this', 'pron', 'esto', 'Pronombre demostrativo.'],
          ['an', 'art', 'una', 'Artículo indefinido.'],
          ['hour', 'noun', 'hora', 'Sustantivo contable.'],
          ['earlier', 'adv', 'antes', 'Comparativo de early: early → earlier.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['client', 'noun', 'cliente', 'Sustantivo contable.'],
          ["wouldn't", 'verb', 'no estaría', 'Condicional mixto: resultado en presente, would + verbo base, no would have + participio.'],
          ['be', 'verb', 'estar', 'Verbo base tras wouldn\'t.'],
          ['this', 'adv', 'tan', 'Adverbio de intensidad.'],
          ['upset', 'adj', 'molesto', 'Adjetivo.'],
          ['now', 'adv', 'ahora', 'Adverbio de tiempo: marca que el resultado es presente, no pasado.']
        ]
      },
      {
        tr: 'Se le dijo al cliente que los números correctos llegarían en minutos.',
        t: [
          ['The', 'art', 'El', 'Artículo definido.'],
          ['client', 'noun', 'cliente', 'Sustantivo contable, sujeto de la voz pasiva.'],
          ['was', 'verb', 'fue', 'Voz pasiva: was + participio.'],
          ['told', 'verb', 'dicho', 'Participio irregular de tell: told. Voz pasiva: was told, se le dijo.'],
          ['that', 'prep', 'que', 'Introduce la cláusula reportada.'],
          ['the', 'art', 'los', 'Artículo definido.'],
          ['correct', 'adj', 'correctos', 'Adjetivo.'],
          ['numbers', 'noun', 'números', 'Sustantivo contable, plural.'],
          ['would', 'verb', 'llegarían', 'Would + verbo base: futuro en el pasado, dentro del estilo indirecto.'],
          ['arrive', 'verb', 'llegar', 'Verbo base tras would.'],
          ['within', 'prep', 'en', 'Preposición de tiempo: dentro de un plazo.'],
          ['minutes', 'noun', 'minutos', 'Sustantivo contable, plural.']
        ]
      },
      {
        tr: 'Marcus finalmente admitió que se había olvidado por completo de revisar el archivo.',
        t: [
          ['Marcus', 'noun', 'Marcus', 'Nombre propio.'],
          ['eventually', 'adv', 'finalmente', 'Adverbio de tiempo.'],
          ['admitted', 'verb', 'admitió', 'Pasado simple regular: admit → admitted. Verbo reportante: admit that, admitir que.'],
          ['that', 'prep', 'que', 'Introduce la cláusula tras admitted.'],
          ['he', 'pron', 'él', 'Pronombre sujeto.'],
          ['had', 'verb', 'se había', 'Pasado perfecto: acción anterior a la de admitir.'],
          ['forgotten', 'verb', 'olvidado', 'Participio irregular de forget: forgotten.'],
          ['to', 'prep', 'de', 'Partícula de infinitivo.'],
          ['check', 'verb', 'revisar', 'Verbo base tras to.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['file', 'noun', 'archivo', 'Sustantivo contable.'],
          ['at', 'prep', 'por completo', 'Preposición, parte de at all: en absoluto.'],
          ['all', 'adj', 'all', 'Segunda parte de at all: en absoluto, por completo.']
        ]
      },
      {
        tr: 'Habiendo aprendido esta lección, el equipo acordó revisar dos veces cada archivo de ahora en adelante.',
        t: [
          ['Having', 'verb', 'Habiendo', 'Cláusula de participio perfecto: having + participio.'],
          ['learned', 'verb', 'aprendido', 'Participio regular de learn: learn + ed.'],
          ['this', 'adj', 'esta', 'Determinante demostrativo.'],
          ['lesson', 'noun', 'lección', 'Sustantivo contable.'],
          ['the', 'art', 'el', 'Artículo definido.'],
          ['team', 'noun', 'equipo', 'Sustantivo contable.'],
          ['agreed', 'verb', 'acordó', 'Pasado simple regular: agree → agreed.'],
          ['to', 'prep', 'a', 'Partícula de infinitivo.'],
          ['double-check', 'verb', 'revisar dos veces', 'Verbo base tras to.'],
          ['every', 'adj', 'cada', 'Determinante distributivo.'],
          ['file', 'noun', 'archivo', 'Sustantivo contable.'],
          ['from', 'prep', 'de', 'Preposición, parte de from now on.'],
          ['now', 'adv', 'ahora', 'Adverbio de tiempo, parte de from now on.'],
          ['on', 'adv', 'en adelante', 'Adverbio: from now on, de ahora en adelante.']
        ]
      }
    ],

    /* reglas que practica este relato · los ejemplos salen del propio texto */
    grammar: [
      { name: 'Cláusulas de participio', hits: '4 usos', ex: 'Having sent the wrong file · Realizing there was no time to lose · Having learned this lesson', c: '#0891b2' },
      { name: 'Verbos reportantes (admit, deny, insist, claim)', hits: '4 usos', ex: 'denied that he had checked · admitted that he had forgotten · Marcus claimed', c: '#be185d' },
      { name: 'Condicionales', hits: '1 uso', ex: "If we had caught this an hour earlier, the client wouldn't be this upset now", c: '#0e9f6e' }
    ],

    /* sin phrasal verbs propios en este relato */
    phrasals: [],

    /* juego 02 · huecos sacados de estas mismas frases; `why` es lo que enseña */
    gaps: [
      {
        s: ['___', 'sent', 'the', 'wrong', 'file', 'Daniela', 'called', 'her', 'manager.'],
        answer: 'Having',
        opts: ['Having', 'Have', 'Had'],
        why: 'Cláusula de participio perfecto: Having + participio, para una acción completada antes de la principal.'
      },
      {
        s: ['Marcus', '___', 'that', 'he', 'had', 'checked', 'the', 'file.'],
        answer: 'denied',
        opts: ['denied', 'admitted', 'insisted'],
        why: 'Deny that + cláusula: negar haber hecho algo — distinto de admit that (admitir) o insist that (insistir).'
      },
      {
        s: ['If', 'we', 'had', 'caught', 'this', 'earlier', 'the', 'client', '___', 'be', 'this', 'upset', 'now.'],
        answer: "wouldn't",
        opts: ["wouldn't", "won't", "hadn't"],
        why: "Condicional mixto: si-cláusula en pasado (had caught), resultado en presente (wouldn't be) — no wouldn't have been."
      }
    ]
  }
];
