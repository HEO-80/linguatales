/**
 * src/lib/azure/tts.ts
 *
 * Interfaz de TTS que consumen los componentes. Implementación actual:
 * Web Speech API (SpeechSynthesis), gratis y sin backend. Cuando se
 * conecte Azure Speech, esta implementación se sustituye por una llamada
 * al SDK/REST de Azure — mismos nombres exportados, misma forma de
 * entrada/salida, cero cambios en los componentes que la usan.
 */

import { useSyncExternalStore } from "react";

const LOCALE_BY_LANG: Record<string, string> = {
  EN: "en-US",
  ES: "es-ES",
  FR: "fr-FR",
  DE: "de-DE",
  IT: "it-IT",
  PT: "pt-PT",
};

export function localeForLang(lang: string): string {
  return LOCALE_BY_LANG[lang] || "en-US";
}

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function subscribeNever() {
  return () => {};
}

/**
 * Hook seguro para renderizar según isSpeechSupported(). Llamarla directo
 * en el JSX rompería la hidratación (el server siempre da `false`, un
 * navegador real casi siempre `true`) — useSyncExternalStore resuelve esto
 * pintando primero el snapshot de servidor y corrigiendo justo después de
 * hidratar, sin que servidor y cliente disientan en el primer render.
 */
export function useIsSpeechSupported(): boolean {
  // Asume soportado en el snapshot de servidor: la mayoría de navegadores
  // (Chrome/Edge) lo soportan, así que minimiza el parpadeo del aviso para
  // el caso común; en un navegador sin soporte, el aviso aparece justo
  // después de hidratar en vez de estar ahí desde el primer pintado.
  return useSyncExternalStore(subscribeNever, isSpeechSupported, () => true);
}

/** Corta cualquier lectura en curso. */
export function cancelSpeech(): void {
  if (isSpeechSupported()) window.speechSynthesis.cancel();
}

export interface SpeakOptions {
  lang: string;
  rate?: number;
}

/** Lee `text` en voz alta. Resuelve cuando termina; rechaza si el navegador no lo soporta o hay un error. */
export function speakSentence(text: string, { lang, rate = 0.95 }: SpeakOptions): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!isSpeechSupported()) {
      reject(new Error("speech-synthesis-unsupported"));
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = localeForLang(lang);
    utterance.rate = rate;
    utterance.onend = () => resolve();
    utterance.onerror = (event) => reject(new Error(event.error || "speech-synthesis-error"));

    // Corta cualquier utterance anterior antes de encolar esta.
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  });
}
