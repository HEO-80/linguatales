/**
 * LinguaTales — Conectores · Inglés, por nivel
 * src/data/connectors/en.js
 *
 * Selección y reparto por nivel: los propuso el usuario en el chat, con el
 * criterio de los DOS EJES que gobierna toda esta sección (ver `note` de
 * cada nivel y src/components/Connectors/ConnectorGroupPanel.jsx):
 *
 *   g — complejidad gramatical: cuánto inglés necesitas para usarlo bien.
 *   r — registro: 'casual' | 'neutro' | 'formal'.
 *
 * Los dos ejes son independientes a propósito: 'turns out' es g1 pero
 * casual (un A1 no lo diría nunca); 'moreover' es g1 pero formal (suena a
 * ensayo). Por eso el reparto por nivel no es un único ranking de
 * dificultad — A1/A2 son los "pegamento" y de secuencia narrativa
 * (transversales, por inmersión); B1 ya contrasta y da razones; B2 son los
 * "ganchos" de conversación nativa (registro avanzado, gramática simple);
 * C1 son los formales de ensayo/informe.
 *
 * Lo que SÍ es mío (no viene del curso, hay que revisarlo): las frases de
 * `ej` — el usuario dio el conector, la traducción y el porqué del nivel,
 * no un ejemplo listo — y los valores numéricos de `g` dentro de esa misma
 * lógica. Si el material del curso trae sus propios ejemplos, sustituir
 * estos por los originales (el validador de historias no toca este
 * archivo, pero conviene mantener el mismo cuidado: cada `ej` es la frase
 * que el juego 09 va a huecar).
 *
 * Modelo — { note, groups: [ { title, sub, items: [ { en, es, g, r, ej } ] } ] }.
 */
export const CONNECTORS = {
  'EN/A1': {
    note: 'El pegamento básico: sirve para unir casi cualquier frase, en cualquier registro. Son transversales — se usan en todos los niveles, aquí son los únicos que hay.',
    groups: [
      {
        title: 'Conectores básicos',
        sub: 'PEGAMENTO DE FRASES',
        items: [
          { en: 'and', es: 'y', g: 1, r: 'neutro', ej: 'I like tea and coffee.' },
          { en: 'but', es: 'pero', g: 1, r: 'neutro', ej: 'She is tired, but she keeps working.' },
          { en: 'or', es: 'o', g: 1, r: 'neutro', ej: 'You can call or text me.' },
          { en: 'so', es: 'así que', g: 1, r: 'casual', ej: 'It was late, so we went home.' },
          { en: 'because', es: 'porque', g: 1, r: 'neutro', ej: 'He stayed home because he was sick.' },
          { en: 'then', es: 'entonces / luego', g: 1, r: 'neutro', ej: 'We had lunch, then we went for a walk.' },
          { en: 'also', es: 'también', g: 2, r: 'neutro', ej: 'The hotel is cheap. It is also very clean.' },
          { en: 'too', es: 'también (al final)', g: 2, r: 'casual', ej: 'I like tea. I like coffee too.' },
          { en: 'as well', es: 'también', g: 2, r: 'neutro', ej: 'I like tea. I like coffee as well.' },
          { en: 'if', es: 'si', g: 1, r: 'neutro', ej: 'If it rains, we will stay home.' },
          { en: 'while', es: 'mientras', g: 2, r: 'neutro', ej: 'She read a book while he cooked dinner.' }
        ]
      }
    ]
  },

  'EN/A2': {
    note: 'Para contar una historia en orden: marcan el paso en el que vas, no la idea en sí. Encajan directos con las historias en pasado de este nivel.',
    groups: [
      {
        title: 'Secuencia y tiempo',
        sub: 'CONTAR UNA HISTORIA EN ORDEN',
        items: [
          { en: 'first', es: 'primero', g: 1, r: 'neutro', ej: 'First, she watched a video about the recipe.' },
          { en: 'after that', es: 'después de eso', g: 2, r: 'neutro', ej: 'After that, she chopped the vegetables carefully.' },
          { en: 'finally', es: 'finalmente', g: 1, r: 'neutro', ej: 'Finally, she cooked the pasta and added the sauce.' },
          { en: 'before', es: 'antes de', g: 1, r: 'neutro', ej: 'Before she left home, she put on her blue coat.' },
          { en: 'after', es: 'después de', g: 1, r: 'neutro', ej: 'After they arrived, the sea was calm and blue.' },
          { en: 'when', es: 'cuando', g: 1, r: 'neutro', ej: 'When they arrived, the sea was calm and blue.' },
          { en: 'later / later on', es: 'más tarde', g: 2, r: 'casual', ej: 'We had lunch. Later on, we went for a walk.' },
          { en: 'at first / initially', es: 'al principio', g: 3, r: 'formal', ej: 'At first, the plan seemed perfect.' },
          { en: 'suddenly / all of a sudden', es: 'de repente', g: 2, r: 'casual', ej: 'All of a sudden, the lights went out.' },
          { en: 'in the end', es: 'al final', g: 2, r: 'neutro', ej: 'In the end, everything worked out fine.' }
        ]
      }
    ]
  },

  'EN/B1': {
    note: 'Contraste y consecuencia: ya no solo cuentas qué pasó, también por qué y a pesar de qué — un salto real desde A2.',
    groups: [
      {
        title: 'Contraste y consecuencia',
        sub: 'MATIZAR Y ENCADENAR IDEAS',
        items: [
          { en: 'however', es: 'sin embargo', g: 2, r: 'formal', ej: 'The plan was good. However, nobody followed it.' },
          { en: 'although / even though', es: 'aunque', g: 2, r: 'neutro', ej: 'Although it was raining, they went for a walk.' },
          { en: 'on the other hand', es: 'por otro lado', g: 2, r: 'formal', ej: 'The city is exciting. On the other hand, it is very expensive.' },
          { en: "that's why", es: 'por eso', g: 1, r: 'casual', ej: "He was late again. That's why she was angry." },
          { en: 'as a result', es: 'como resultado', g: 2, r: 'formal', ej: 'The store was closed. As a result, they went home.' },
          { en: 'because of this', es: 'por esto', g: 2, r: 'neutro', ej: 'It rained all week. Because of this, the match was cancelled.' },
          { en: 'meanwhile / in the meantime', es: 'mientras tanto', g: 2, r: 'neutro', ej: 'She cooked dinner. Meanwhile, he set the table.' },
          { en: 'besides', es: 'además', g: 1, r: 'casual', ej: "I don't want to go. Besides, I have no money." },
          { en: 'eventually', es: 'con el tiempo', g: 1, r: 'neutro', ej: 'They got lost, but eventually they found the hotel.' }
        ]
      },
      {
        title: 'Ejemplificar y matizar',
        sub: 'ACLARAR SIN PERDER EL HILO',
        items: [
          { en: 'in fact', es: 'de hecho', g: 1, r: 'neutro', ej: 'The hotel looked small. In fact, it had fifty rooms.' },
          { en: 'for example / for instance', es: 'por ejemplo', g: 1, r: 'neutro', ej: 'You can add fruit, for example bananas or apples.' },
          { en: 'such as', es: 'como', g: 2, r: 'neutro', ej: 'She likes sports such as tennis and swimming.' },
          { en: 'instead', es: 'en su lugar', g: 1, r: 'casual', ej: "He didn't take the bus. He walked instead." },
          { en: 'otherwise', es: 'si no', g: 2, r: 'neutro', ej: 'Leave now, otherwise you will miss the train.' },
          { en: 'anyway', es: 'de todas formas', g: 1, r: 'casual', ej: "It's late. Anyway, let's finish this tomorrow." },
          { en: 'by the way', es: 'por cierto', g: 1, r: 'casual', ej: 'By the way, did you call your mother?' }
        ]
      }
    ]
  },

  'EN/B2': {
    note: 'Complejidad gramatical y registro son ejes distintos: estos ganchos son fáciles de entender pero difíciles de "pillar" sin que alguien te diga cuándo usarlos — es lo que separa hablar inglés correcto de sonar nativo.',
    groups: [
      {
        title: 'Ganchos de conversación',
        sub: 'SONAR NATIVO, NO DE LIBRO',
        items: [
          { en: 'turns out', es: 'resulta que', g: 1, r: 'casual', ej: 'Turns out, he was right all along.' },
          { en: 'you know what', es: '¿sabes qué?', g: 1, r: 'casual', ej: 'You know what? I found the keys.' },
          { en: 'guess what happened next', es: 'adivina qué pasó después', g: 1, r: 'casual', ej: 'Guess what happened next? The dog ran into the lake.' },
          { en: 'can you believe it', es: '¿te lo puedes creer?', g: 1, r: 'casual', ej: 'Can you believe it? She won the whole competition.' },
          { en: 'and get this', es: 'y espera, hay más', g: 1, r: 'casual', ej: 'And get this — he did it all by himself.' },
          { en: 'having said that', es: 'dicho esto', g: 3, r: 'neutro', ej: 'The trip was tiring. Having said that, it was worth it.' },
          { en: 'on top of that', es: 'y encima', g: 2, r: 'casual', ej: 'The flight was delayed. On top of that, they lost my bag.' },
          { en: "what's more", es: 'es más', g: 2, r: 'casual', ej: "The food was cheap. What's more, it was delicious." },
          { en: 'long story short', es: 'para resumir', g: 1, r: 'casual', ej: 'Long story short, we missed the train.' },
          { en: 'right', es: '¿verdad? (coletilla)', g: 1, r: 'casual', ej: 'We should leave early, right?' }
        ]
      },
      {
        title: 'Matizar en conversación',
        sub: 'PRECISAR LO QUE QUIERES DECIR',
        items: [
          { en: 'in other words', es: 'en otras palabras', g: 2, r: 'formal', ej: "He never plans ahead. In other words, he's disorganized." },
          { en: 'actually', es: 'en realidad', g: 1, r: 'neutro', ej: 'I thought it was expensive. Actually, it was quite cheap.' },
          { en: 'to be honest', es: 'para ser sincero', g: 1, r: 'casual', ej: "To be honest, I didn't like the movie." },
          { en: 'as far as I know', es: 'que yo sepa', g: 2, r: 'neutro', ej: 'As far as I know, the shop closes at six.' },
          { en: 'the thing is', es: 'la cosa es que', g: 1, r: 'casual', ej: "I want to help. The thing is, I'm busy today." },
          { en: 'no wonder', es: 'con razón', g: 1, r: 'casual', ej: "He slept four hours. No wonder he's tired." }
        ]
      }
    ]
  },

  'EN/C1': {
    note: 'Conectores de registro formal y escrito: informes, ensayos, exámenes tipo IELTS o Cambridge — casi nunca se dicen en voz alta.',
    groups: [
      {
        title: 'Conectores formales y de escritura',
        sub: 'INFORMES, ENSAYOS, EXÁMENES',
        items: [
          { en: 'moreover', es: 'es más', g: 1, r: 'formal', ej: 'The hotel was expensive. Moreover, it was far from the beach.' },
          { en: 'furthermore', es: 'además', g: 1, r: 'formal', ej: 'The report was late. Furthermore, it contained several errors.' },
          { en: 'therefore', es: 'por lo tanto', g: 2, r: 'formal', ej: 'The store was closed. Therefore, we went home.' },
          { en: 'nevertheless', es: 'no obstante', g: 2, r: 'formal', ej: 'The evidence was weak. Nevertheless, the jury convicted him.' },
          { en: 'consequently', es: 'en consecuencia', g: 2, r: 'formal', ej: 'Sales fell sharply. Consequently, the factory closed.' },
          { en: 'in addition', es: 'además de esto', g: 1, r: 'formal', ej: 'The hotel has a pool. In addition, it offers free breakfast.' },
          { en: 'hence', es: 'de ahí que', g: 2, r: 'formal', ej: 'The bridge was closed, hence the long detour.' },
          { en: 'thus', es: 'así pues', g: 2, r: 'formal', ej: 'The results were inconclusive, thus further research is needed.' },
          { en: 'notwithstanding', es: 'a pesar de ello', g: 3, r: 'formal', ej: 'The risks, notwithstanding, they went ahead with the plan.' }
        ]
      },
      {
        title: 'Contraste y condición avanzados',
        sub: 'ARGUMENTAR CON PRECISIÓN',
        items: [
          { en: 'despite / in spite of', es: 'a pesar de', g: 2, r: 'formal', ej: 'Despite the rain, they finished the race.' },
          { en: 'whereas', es: 'mientras que', g: 2, r: 'formal', ej: 'He loves the city, whereas she prefers the countryside.' },
          { en: 'given that', es: 'dado que', g: 2, r: 'neutro', ej: 'Given that it was raining, we cancelled the picnic.' },
          { en: 'provided that', es: 'siempre que', g: 2, r: 'formal', ej: 'You can leave early, provided that you finish the report.' },
          { en: 'regardless', es: 'sin importar', g: 1, r: 'neutro', ej: 'They decided to go, regardless of the weather.' }
        ]
      }
    ]
  }
};
