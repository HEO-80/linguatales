/**
 * src/lib/storage/progressStore.ts
 *
 * Progreso real por usuario (nivel, historias leídas, intentos de
 * pronunciación, avisos de contenido confirmados). Con sesión: lee/escribe
 * en Supabase — RLS garantiza que cada usuario solo ve y toca su propia
 * fila. Sin sesión: no hay persistencia de ningún tipo, nada se inventa;
 * los componentes deben mostrar un CTA de registro en vez de datos falsos.
 *
 * Mismo patrón que el resto del proyecto: un cache en memoria +
 * useSyncExternalStore, aquí sincronizado con el store de sesión de
 * src/lib/supabase/auth.ts en vez de con localStorage.
 */

import { createClient } from "@/lib/supabase/client";
import { subscribeToSession, getSessionSnapshot } from "@/lib/supabase/auth";

export type StoryStatus = "nuevo" | "en_curso" | "leido";

export interface StoredStoryProgress {
  story_id: string;
  status: StoryStatus;
  last_sentence_index: number;
  updated_at: string;
}

export interface StoredPronunciationAttempt {
  id: string;
  user_id: string;
  sentence_id: string;
  accuracy_score: number;
  fluency_score: number;
  completeness_score: number;
  pronunciation_score: number;
  next_review_at: string | null;
  easiness_factor: number;
  interval_days: number;
  repetitions: number;
  created_at: string;
}

export interface StoredProfile {
  current_level: string;
}

export type ProgressStatus = "loading" | "anonymous" | "ready";

interface ProgressState {
  status: ProgressStatus;
  profile: StoredProfile;
  storyProgress: Record<string, StoredStoryProgress>;
  pronunciationAttempts: StoredPronunciationAttempt[];
  acknowledgedWarnings: string[];
}

const EMPTY_STATE: ProgressState = {
  status: "anonymous",
  profile: { current_level: "A2" },
  storyProgress: {},
  pronunciationAttempts: [],
  acknowledgedWarnings: [],
};

const LOADING_STATE: ProgressState = { ...EMPTY_STATE, status: "loading" };

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

let cache: ProgressState = LOADING_STATE;
const listeners = new Set<() => void>();

function setCache(next: ProgressState): void {
  cache = next;
  listeners.forEach((listener) => listener());
}

function currentUserId(): string | null {
  const session = getSessionSnapshot();
  return session?.user?.id ?? null;
}

async function loadFromSupabase(userId: string): Promise<void> {
  const supabase = createClient();

  const [{ data: profile }, { data: storyRows }, { data: attemptRows }] = await Promise.all([
    supabase.from("profiles").select("current_level, acknowledged_warnings").eq("id", userId).maybeSingle(),
    supabase.from("story_progress").select("*").eq("user_id", userId),
    supabase.from("pronunciation_attempts").select("*").eq("user_id", userId),
  ]);

  // Si la sesión cambió mientras esta carga estaba en vuelo, no pisar el
  // estado más nuevo con datos del usuario anterior.
  if (currentUserId() !== userId) return;

  const storyProgress: Record<string, StoredStoryProgress> = {};
  (storyRows ?? []).forEach((row) => {
    storyProgress[row.story_id] = {
      story_id: row.story_id,
      status: row.status as StoryStatus,
      last_sentence_index: row.last_sentence_index,
      updated_at: row.updated_at,
    };
  });

  setCache({
    status: "ready",
    profile: { current_level: profile?.current_level ?? "A2" },
    storyProgress,
    pronunciationAttempts: (attemptRows ?? []) as StoredPronunciationAttempt[],
    acknowledgedWarnings: profile?.acknowledged_warnings ?? [],
  });
}

function syncWithSession(): void {
  const session = getSessionSnapshot();
  if (session === undefined) {
    setCache(LOADING_STATE);
  } else if (session === null) {
    setCache(EMPTY_STATE);
  } else {
    loadFromSupabase(session.user.id).catch(() => setCache(EMPTY_STATE));
  }
}

if (isBrowser()) {
  subscribeToSession(syncWithSession);
  syncWithSession();
}

/** Para usar con useSyncExternalStore(subscribeToProgress, getProgressSnapshot, getProgressServerSnapshot). */
export function subscribeToProgress(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getProgressSnapshot() {
  return cache;
}

export function getProgressServerSnapshot() {
  return LOADING_STATE;
}

export function getProfile(): StoredProfile {
  return cache.profile;
}

/**
 * El nivel es a la vez "filtro de navegación" (para poder explorar
 * historias de cualquier nivel sin cuenta) y "tu nivel guardado" con
 * sesión. Por eso SIEMPRE actualiza el cache en memoria (para que
 * LevelLadder funcione sin login), pero solo se persiste en Supabase con
 * sesión — sin ella, vuelve a 'A2' en el próximo reload, no se inventa
 * continuidad.
 */
export async function setCurrentLevel(level: string): Promise<void> {
  setCache({ ...cache, profile: { ...cache.profile, current_level: level } });

  const userId = currentUserId();
  if (!userId) return;

  const supabase = createClient();
  await supabase.from("profiles").update({ current_level: level }).eq("id", userId);
}

export function getStoryProgress(storyId: string): StoredStoryProgress | undefined {
  return cache.storyProgress[storyId];
}

export function getAllStoryProgress(): Record<string, StoredStoryProgress> {
  return cache.storyProgress;
}

/** No hace nada sin sesión — sin inventar "Leído"/"En curso" para nadie que no se ha registrado. */
export async function touchStoryProgress(
  storyId: string,
  sentenceIndex: number,
  totalSentences: number
): Promise<StoredStoryProgress | null> {
  const userId = currentUserId();
  if (!userId) return null;

  const existing = cache.storyProgress[storyId];
  const reachedEnd = sentenceIndex >= totalSentences - 1;
  const status: StoryStatus = reachedEnd || existing?.status === "leido" ? "leido" : "en_curso";

  const next: StoredStoryProgress = {
    story_id: storyId,
    status,
    last_sentence_index: sentenceIndex,
    updated_at: new Date().toISOString(),
  };
  setCache({ ...cache, storyProgress: { ...cache.storyProgress, [storyId]: next } });

  const supabase = createClient();
  await supabase.from("story_progress").upsert(
    {
      user_id: userId,
      story_id: storyId,
      status,
      last_sentence_index: sentenceIndex,
      updated_at: next.updated_at,
    },
    { onConflict: "user_id,story_id" }
  );

  return next;
}

type NewAttempt = Pick<
  StoredPronunciationAttempt,
  "sentence_id" | "accuracy_score" | "fluency_score" | "completeness_score" | "pronunciation_score"
>;

/** Sin sesión devuelve null y no guarda nada — el llamador decide cómo mostrarlo (ver PronunciationBar). */
export async function recordPronunciationAttempt(attempt: NewAttempt): Promise<StoredPronunciationAttempt | null> {
  const userId = currentUserId();
  if (!userId) return null;

  const supabase = createClient();
  const { data, error } = await supabase
    .from("pronunciation_attempts")
    .insert({ user_id: userId, ...attempt })
    .select()
    .single();

  if (error || !data) return null;

  const full = data as StoredPronunciationAttempt;
  setCache({ ...cache, pronunciationAttempts: [...cache.pronunciationAttempts, full] });
  return full;
}

export function getPronunciationAttempts(sentenceId?: string): StoredPronunciationAttempt[] {
  return sentenceId
    ? cache.pronunciationAttempts.filter((a) => a.sentence_id === sentenceId)
    : cache.pronunciationAttempts;
}

export function getLatestPronunciationAttempt(sentenceId: string): StoredPronunciationAttempt | undefined {
  const attempts = getPronunciationAttempts(sentenceId);
  return attempts[attempts.length - 1];
}

export function hasAcknowledgedWarning(contentId: string): boolean {
  return cache.acknowledgedWarnings.includes(contentId);
}

/**
 * Sin sesión, se recuerda solo en memoria para esta visita (para no
 * repetir el aviso mientras exploras) pero no se persiste en ningún
 * sitio — no es progreso, es cortesía de UX.
 */
export async function acknowledgeWarning(contentId: string): Promise<void> {
  if (cache.acknowledgedWarnings.includes(contentId)) return;

  const next = [...cache.acknowledgedWarnings, contentId];
  setCache({ ...cache, acknowledgedWarnings: next });

  const userId = currentUserId();
  if (!userId) return;

  const supabase = createClient();
  await supabase.from("profiles").update({ acknowledged_warnings: next }).eq("id", userId);
}
