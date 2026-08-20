/**
 * src/lib/supabase/auth.ts
 *
 * Store de sesión, mismo patrón que localProgress.ts: un singleton de
 * módulo actualizado por `supabase.auth.onAuthStateChange` (un listener
 * real de Supabase, no localStorage) y expuesto vía
 * useSyncExternalStore — así ningún componente necesita un
 * useEffect+setState para saber si hay sesión.
 */

import type { Session } from "@supabase/supabase-js";
import { createClient } from "./client";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// undefined = todavía no se ha comprobado; null = comprobado, sin sesión.
let currentSession: Session | null | undefined = undefined;
const listeners = new Set<() => void>();

if (isBrowser()) {
  const supabase = createClient();
  supabase.auth.onAuthStateChange((_event, session) => {
    currentSession = session;
    listeners.forEach((listener) => listener());
  });
}

export function subscribeToSession(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** undefined mientras se comprueba la sesión guardada; null = sin sesión; Session = logueado. */
export function getSessionSnapshot(): Session | null | undefined {
  return currentSession;
}

export function getSessionServerSnapshot(): Session | null | undefined {
  return undefined;
}

export async function signInWithGoogle(): Promise<{ error: string | null }> {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo: `${window.location.origin}/auth/callback` },
  });
  return { error: error?.message ?? null };
}

export async function signInWithPassword(email: string, password: string): Promise<{ error: string | null }> {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error: error?.message ?? null };
}

export async function signUpWithPassword(
  email: string,
  password: string
): Promise<{ error: string | null; needsConfirmation: boolean }> {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });
  // Si el proyecto exige confirmar el correo, signUp no crea sesión todavía.
  return { error: error?.message ?? null, needsConfirmation: !error && !data.session };
}

export async function signOut(): Promise<void> {
  const supabase = createClient();
  await supabase.auth.signOut();
}
