/**
 * src/lib/azure/pronunciation.ts
 *
 * Interfaz de evaluación de pronunciación que consumen los componentes.
 * Implementación actual: SpeechRecognition (Web Speech API) transcribe lo
 * que dice el usuario y se compara palabra a palabra contra el texto de
 * referencia — un proxy razonable pero NO evaluación fonética real.
 *
 * Cuando se conecte Azure Pronunciation Assessment, `startPronunciationAssessment`
 * se reimplementa por dentro (streaming de audio real al SDK de Azure),
 * pero mantiene esta misma forma: se llama igual, devuelve un controlador
 * con `stop()` y una `result` que resuelve al mismo `PronunciationAssessmentResult`.
 * Los componentes no tienen que cambiar.
 */

import { localeForLang } from "./tts";
import type { PronunciationScoreResult } from "@/types/story";

export interface PronunciationAssessmentInput {
  referenceText: string;
  lang: string;
  /** Corta la escucha si no hay resultado en este tiempo (silencio, mic bloqueado, etc). */
  timeoutMs?: number;
}

export interface PronunciationAssessmentResult extends PronunciationScoreResult {
  /** Lo que entendió el reconocedor — útil para depurar/mostrar, no viene de Azure real. */
  transcript: string;
}

export interface PronunciationAssessmentController {
  /** Corta la escucha antes de tiempo y fuerza a resolver con lo captado hasta ahora. */
  stop: () => void;
  result: Promise<PronunciationAssessmentResult>;
}

function getRecognitionCtor(): SpeechRecognitionConstructor | undefined {
  if (typeof window === "undefined") return undefined;
  return window.SpeechRecognition || window.webkitSpeechRecognition;
}

export function isPronunciationAssessmentSupported(): boolean {
  return !!getRecognitionCtor();
}

function normalizeWord(word: string): string {
  return word.toLowerCase().replace(/[.,!?¿¡"“”]/g, "");
}

/**
 * PLACEHOLDER TEMPORAL — sin evaluación fonética real (eso llega con Azure
 * Pronunciation Assessment). Compara la transcripción de SpeechRecognition
 * contra el texto de referencia palabra a palabra:
 *  - accuracyScore: cuántas palabras coinciden en su posición (o aparecen
 *    en la frase dicha, para no penalizar doble un desliz de orden).
 *  - completenessScore: cuántas de las palabras esperadas llegaron a decirse.
 *  - fluencyScore: no hay señal de prosodia/timing disponible en el
 *    navegador, así que se aproxima por cuánto se acerca el número de
 *    palabras dichas al esperado (una frase muy corta o muy larga puntúa peor).
 *  - pronunciationScore: media de las tres anteriores, igual que hace Azure
 *    con sus sub-scores reales.
 */
function scoreTranscript(referenceText: string, transcript: string): PronunciationScoreResult {
  const ref = referenceText.split(/\s+/).map(normalizeWord).filter(Boolean);
  const said = transcript.split(/\s+/).map(normalizeWord).filter(Boolean);

  let positional = 0;
  for (let i = 0; i < ref.length; i++) {
    if (said[i] && said[i] === ref[i]) positional++;
  }
  const saidSet = new Set(said);
  const anyOrder = ref.filter((w) => saidSet.has(w)).length;
  const matches = Math.max(positional, Math.round((positional + anyOrder) / 2));

  const accuracyScore = ref.length ? Math.round((matches / ref.length) * 100) : 0;
  const completenessScore = ref.length ? Math.round((Math.min(said.length, ref.length) / ref.length) * 100) : 0;
  const fluencyScore = ref.length
    ? Math.max(0, Math.round(100 - Math.min(100, Math.abs(said.length - ref.length) * 15)))
    : 0;
  const pronunciationScore = Math.round((accuracyScore + fluencyScore + completenessScore) / 3);

  return { accuracyScore, fluencyScore, completenessScore, pronunciationScore };
}

export function startPronunciationAssessment({
  referenceText,
  lang,
  timeoutMs = 8000,
}: PronunciationAssessmentInput): PronunciationAssessmentController {
  const Ctor = getRecognitionCtor();

  if (!Ctor) {
    return {
      stop: () => {},
      result: Promise.reject(new Error("speech-recognition-unsupported")),
    };
  }

  const recognition = new Ctor();
  recognition.lang = localeForLang(lang);
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let settled = false;
  let timer: ReturnType<typeof setTimeout>;

  const result = new Promise<PronunciationAssessmentResult>((resolve, reject) => {
    timer = setTimeout(() => recognition.stop(), timeoutMs);

    recognition.onresult = (event) => {
      settled = true;
      clearTimeout(timer);
      const transcript = event.results[0]?.[0]?.transcript || "";
      resolve({ transcript, ...scoreTranscript(referenceText, transcript) });
    };

    recognition.onerror = (event) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(new Error(event.error || "speech-recognition-error"));
    };

    recognition.onend = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      reject(new Error("no-speech"));
    };

    recognition.start();
  });

  return { stop: () => recognition.stop(), result };
}
