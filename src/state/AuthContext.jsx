'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';
import {
  subscribeToSession,
  getSessionSnapshot,
  getSessionServerSnapshot,
  signInWithGoogle,
  signInWithPassword,
  signUpWithPassword,
  signOut
} from '@/lib/supabase/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const session = useSyncExternalStore(subscribeToSession, getSessionSnapshot, getSessionServerSnapshot);

  const value = {
    // undefined = todavía comprobando; null = sin sesión; objeto = logueado.
    session,
    user: session?.user ?? null,
    loading: session === undefined,
    signInWithGoogle,
    signInWithPassword,
    signUpWithPassword,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
