/**
 * src/lib/storage/localProgress.ts
 *
 * Persistencia de progreso mientras no hay Supabase. Los campos replican
 * uno a uno supabase/migrations/0001_init.sql (mismos nombres de columna,
 * mismas columnas reservadas para SM-2 en fase 2) para que migrar más
 * adelante sea cambiar DÓNDE se lee/escribe — estas funciones por llamadas
 * a Supabase — y no la FORMA de los datos ni los componentes que las usan.
 *
 * `window.localStorage` no existe en el servidor, así que ningún componente
 * debe leerlo durante el render inicial (mismo problema de hidratación que
 * el Math.random() de WordOrderGame). La forma correcta de exponer un store
 * externo así en React es `useSyncExternalStore`, no un useEffect+setState
 * — por eso este módulo expone `subscribeToProgress` / `getProgressSnapshot`
 * / `getProgressServerSnapshot` pensados para usarse con ese hook.
 */

const STORAGE_KEY = "linguatales:progress:v1";

export type StoryStatus = "nuevo" | "en_curso" | "leido";

export interface StoredStoryProgress {
  story_id: string;
  status: StoryStatus;
  last_sentence_index: number;
  updated_at: string;
}

export interface StoredPronunciationAttempt {
  id: string;
  user_id: string; // 'local' — no hay auth todavía
  sentence_id: string;
  accuracy_score: number;
  fluency_score: number;
  completeness_score: number;
  pronunciation_score: number;
  // Reservado para SM-2 (fase 2), igual que en la migración de Supabase.
  next_review_at: string | null;
  easiness_factor: number;
  interval_days: number;
  repetitions: number;
  created_at: string;
}

export interface StoredProfile {
  current_level: string;
}

interface ProgressState {
  profile: StoredProfile;
  storyProgress: Record<string, StoredStoryProgress>;
  pronunciationAttempts: StoredPronunciationAttempt[];
}

const DEFAULT_STATE: ProgressState = {
  profile: { current_level: "A2" },
  storyProgress: {},
  pronunciationAttempts: [],
};

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// Cache en memoria + notificación manual: useSyncExternalStore exige que
// getSnapshot devuelva la MISMA referencia mientras nada haya cambiado (si
// no, re-renderiza en bucle). Por eso no se hace JSON.parse en cada
// lectura — se relee de localStorage solo tras escribir, o si otra pestaña
// lo cambia (evento 'storage').
let cache: ProgressState | null = null;
const listeners = new Set<() => void>();

function parseFromStorage(): ProgressState {
  if (!isBrowser()) return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return {
      profile: { ...DEFAULT_STATE.profile, ...parsed.profile },
      storyProgress: parsed.storyProgress || {},
      pronunciationAttempts: parsed.pronunciationAttempts || [],
    };
  } catch {
    return DEFAULT_STATE;
  }
}

function readState(): ProgressState {
  if (!cache) cache = parseFromStorage();
  return cache;
}

function writeState(state: ProgressState): void {
  cache = state;
  if (isBrowser()) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  listeners.forEach((listener) => listener());
}

if (isBrowser()) {
  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY) {
      cache = parseFromStorage();
      listeners.forEach((listener) => listener());
    }
  });
}

/** Para usar con useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot). */
export function subscribeToProgress(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getProgressSnapshot(): ProgressState {
  return readState();
}

export function getProgressServerSnapshot(): ProgressState {
  return DEFAULT_STATE;
}

export function getProfile(): StoredProfile {
  return readState().profile;
}

export function setCurrentLevel(level: string): void {
  const state = readState();
  // Objeto nuevo (no mutar `state` en sitio): useSyncExternalStore compara
  // por referencia, y si el objeto es el mismo no vuelve a renderizar.
  writeState({ ...state, profile: { ...state.profile, current_level: level } });
}

export function getStoryProgress(storyId: string): StoredStoryProgress | undefined {
  return readState().storyProgress[storyId];
}

export function getAllStoryProgress(): Record<string, StoredStoryProgress> {
  return readState().storyProgress;
}

/** Marca una historia como 'en_curso' (o 'leido' si llegó a la última frase) y guarda por dónde iba. */
export function touchStoryProgress(
  storyId: string,
  sentenceIndex: number,
  totalSentences: number
): StoredStoryProgress {
  const state = readState();
  const existing = state.storyProgress[storyId];
  const reachedEnd = sentenceIndex >= totalSentences - 1;
  const status: StoryStatus = reachedEnd || existing?.status === "leido" ? "leido" : "en_curso";

  const next: StoredStoryProgress = {
    story_id: storyId,
    status,
    last_sentence_index: sentenceIndex,
    updated_at: new Date().toISOString(),
  };
  writeState({ ...state, storyProgress: { ...state.storyProgress, [storyId]: next } });
  return next;
}

type NewAttempt = Pick<
  StoredPronunciationAttempt,
  "sentence_id" | "accuracy_score" | "fluency_score" | "completeness_score" | "pronunciation_score"
>;

export function recordPronunciationAttempt(attempt: NewAttempt): StoredPronunciationAttempt {
  const state = readState();
  const full: StoredPronunciationAttempt = {
    id: `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    user_id: "local",
    next_review_at: null,
    easiness_factor: 2.5,
    interval_days: 0,
    repetitions: 0,
    created_at: new Date().toISOString(),
    ...attempt,
  };
  writeState({ ...state, pronunciationAttempts: [...state.pronunciationAttempts, full] });
  return full;
}

export function getPronunciationAttempts(sentenceId?: string): StoredPronunciationAttempt[] {
  const attempts = readState().pronunciationAttempts;
  return sentenceId ? attempts.filter((a) => a.sentence_id === sentenceId) : attempts;
}

export function getLatestPronunciationAttempt(sentenceId: string): StoredPronunciationAttempt | undefined {
  const attempts = getPronunciationAttempts(sentenceId);
  return attempts[attempts.length - 1];
}

export function resetProgress(): void {
  writeState(DEFAULT_STATE);
}
