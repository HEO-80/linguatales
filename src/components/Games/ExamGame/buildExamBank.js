/**
 * src/components/Games/ExamGame/buildExamBank.js
 * Banco de preguntas del examen final (§2, quinta entrega) — mezcla los
 * tipos de todos los juegos. Cada pregunta lleva la MISMA clave SRS que su
 * juego de origen, así responderla en el examen alimenta la misma tarjeta.
 */
import { TOKEN } from '@/data/stories';
import { phrasesOf } from '@/data/phrases';
import { connectorsOf } from '@/data/connectors';
import { buildWordBank } from '../SelectWordGame/buildWordBank';
import { buildLinkerQuestions } from '../LinkerGame/buildLinkerQuestions';
import { buildBacktransBank } from '../BackTranslateGame/buildBacktransBank';
import { seededShuffle } from '../seededShuffle';
import { rankByWeight } from '@/lib/srs';
import { grammarWhy } from '@/lib/whyFeedback';

/** Dos distractores de OTRAS entradas del mismo banco, rotados por índice —
 * el mismo patrón que ya usan phrase/convo/linker. */
function pick2(arr, k) {
  const n = arr.length;
  if (n === 0) return [];
  if (n === 1) return [arr[0]];
  return [arr[(k * 3 + 1) % n], arr[(k * 3 + 2) % n]];
}

function pickOptions(correct, others, seed, k) {
  const [d1, d2] = pick2(others, k);
  const opts = [correct, d1, d2].filter((v, i, arr) => v != null && arr.indexOf(v) === i);
  return seededShuffle(opts, seed);
}

/** Todas las preguntas posibles para este relato/bloque/nivel — sin
 * seleccionar ni ordenar todavía (eso lo hace selectExamQuestions). */
export function buildExamBank({ story, lang, level, phrBlock }) {
  const candidates = [];

  // pick palabra — definición del relato → 3 palabras
  const wordBank = buildWordBank(story, { full: true });
  wordBank.forEach((entry, i) => {
    const w = entry.token[TOKEN.TEXT];
    const others = wordBank.filter((e) => e !== entry).map((e) => e.token[TOKEN.TEXT]);
    candidates.push({
      type: 'pick',
      promptLabel: 'Palabra',
      srsKind: 'Palabra',
      srsKey: `w:${w.toLowerCase()}`,
      prompt: entry.token[TOKEN.EXPLAIN],
      sub: entry.token[TOKEN.TRANSLATION],
      answer: w,
      options: pickOptions(w, others, `exam-word-${i}`, i),
      why: grammarWhy(story, w),
      hint: entry.token[TOKEN.TRANSLATION]
    });
  });

  const blocks = phrasesOf(lang, level);
  const block = phrBlock != null ? blocks[phrBlock] : null;

  if (block) {
    block.items.forEach((item, i) => {
      const othersEn = block.items.filter((_, j) => j !== i).map((it) => it.en);
      candidates.push({
        type: 'pick',
        promptLabel: 'Frase',
        srsKind: 'Frase hecha',
        srsKey: `ph:${block.num}:${i}`,
        prompt: item.es,
        answer: item.en,
        options: pickOptions(item.en, othersEn, `exam-ph-${i}`, i),
        why: { label: 'POR QUÉ', text: item.tip },
        hint: item.tip
      });

      const othersRe = block.items.filter((_, j) => j !== i).map((it) => it.re[0]);
      candidates.push({
        type: 'pick',
        promptLabel: 'Contestación',
        srsKind: 'Contestación',
        srsKey: `co:${block.num}:${i}`,
        prompt: item.en,
        sub: item.es,
        answer: item.re[0],
        options: pickOptions(item.re[0], othersRe, `exam-co-${i}`, i),
        why: { label: 'POR QUÉ', text: `${item.re[0]} — ${item.re[1]}. ${item.tip}` },
        hint: item.re[1]
      });
    });

    buildBacktransBank(block).forEach((it) => {
      candidates.push({
        type: 'write',
        promptLabel: 'Traducción',
        srsKind: 'Traducción inversa',
        srsKey: `ti:${block.num}:${it.id}`,
        prompt: it.q,
        answer: it.a,
        alt: it.alt,
        why: grammarWhy(story, it.a, it.rule),
        hint: it.hint
      });
    });
  }

  const linkerQuestions = buildLinkerQuestions(connectorsOf(lang, level));
  linkerQuestions.forEach((q, i) => {
    const othersAns = linkerQuestions.filter((_, j) => j !== i).map((x) => x.answer);
    candidates.push({
      type: 'pick',
      promptLabel: 'Conector',
      srsKind: 'Conector',
      srsKey: `cx:${q.en}`,
      prompt: q.blanked,
      answer: q.answer,
      options: pickOptions(q.answer, othersAns, `exam-cx-${i}`, i),
      why: { label: 'POR QUÉ', text: `${q.es} · registro ${q.r} · complejidad ${q.g}/3. Ejemplo: ${q.ej}` },
      hint: `${q.es} · registro ${q.r}`
    });
  });

  return candidates;
}

/** Ordena por lo que el SRS ve flojo (§2) y coge las primeras `n`. */
export function selectExamQuestions(candidates, srsCards, day, n = 8) {
  return rankByWeight(candidates, srsCards, day).slice(0, n);
}
