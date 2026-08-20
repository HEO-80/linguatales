import { startPronunciationAssessment } from '@/lib/azure/pronunciation';

/**
 * Envuelve lib/azure/pronunciation.ts (sin tocarlo) para dar una puntuación
 * palabra por palabra. Esto es una aproximación honesta (compara posición a
 * posición transcript-vs-referencia), no aleatoria — no hay servicio de
 * scoring con confidence por palabra conectado todavía; es lo mejor posible
 * sin él, y sustituirlo por Azure/Speechace real no debería requerir tocar
 * el componente, solo esta función.
 */
function normalize(w) {
  return w.toLowerCase().replace(/[.,!?¿¡"'“”]/g, '');
}

export function startSpeakRound({ referenceText, lang }) {
  const controller = startPronunciationAssessment({ referenceText, lang });
  const result = controller.result.then((r) => {
    const refWords = referenceText.split(/\s+/);
    const refNorm = refWords.map(normalize);
    const saidNorm = r.transcript.split(/\s+/).map(normalize);
    const saidSet = new Set(saidNorm);
    const words = refWords.map((original, i) => {
      const w = refNorm[i];
      const score = saidNorm[i] === w ? 100 : saidSet.has(w) ? 65 : 0;
      return { w: original, score };
    });
    return {
      overall: r.pronunciationScore,
      words,
      metrics: { fluency: r.fluencyScore, rhythm: r.completenessScore, phonemes: r.accuracyScore }
    };
  });
  return { stop: controller.stop, result };
}
