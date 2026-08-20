'use client';

import { useState } from 'react';
import { useTheme } from '@/theme/ThemeContext';
import { useAuth } from '@/state/AuthContext';

export default function AuthModal({ onClose }) {
  const { surface, text, font, shadow } = useTheme();
  const { signInWithGoogle, signInWithPassword, signUpWithPassword } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);
  const [busy, setBusy] = useState(false);

  const handleGoogle = async () => {
    setError(null);
    setBusy(true);
    const { error: err } = await signInWithGoogle();
    // Si no hay error, el navegador ya está navegando fuera a Google.
    if (err) {
      setError(err);
      setBusy(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo(null);
    setBusy(true);

    if (mode === 'login') {
      const { error: err } = await signInWithPassword(email, password);
      setBusy(false);
      if (err) setError(err);
      else onClose();
    } else {
      const { error: err, needsConfirmation } = await signUpWithPassword(email, password);
      setBusy(false);
      if (err) {
        setError(err);
      } else if (needsConfirmation) {
        setInfo('Cuenta creada. Revisa tu correo para confirmarla antes de entrar.');
      } else {
        onClose();
      }
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(25,23,19,.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: surface.cream,
          borderRadius: 8,
          boxShadow: shadow.base,
          padding: '28px 26px',
          width: 360,
          maxWidth: 'calc(100vw - 32px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{ position: 'absolute', top: 14, right: 16, fontFamily: font.mono, fontSize: 14, color: text.onCream }}
        >
          ✕
        </button>

        <h2 style={{ fontFamily: font.display, fontSize: 24, fontWeight: 600, color: text.ink, margin: 0 }}>
          {mode === 'login' ? 'Inicia sesión' : 'Crea tu cuenta'}
        </h2>

        <button
          onClick={handleGoogle}
          disabled={busy}
          style={{
            border: `1px solid ${surface.border}`,
            borderRadius: 5,
            padding: '10px 14px',
            fontFamily: font.body,
            fontSize: 13.5,
            fontWeight: 600,
            color: text.ink,
            background: '#fff',
            opacity: busy ? 0.6 : 1
          }}
        >
          Continuar con Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ flex: 1, height: 1, background: surface.border }} />
          <span style={{ fontFamily: font.mono, fontSize: 9.5, color: text.onCream, textTransform: 'uppercase' }}>o</span>
          <div style={{ flex: 1, height: 1, background: surface.border }} />
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input
            type="email"
            required
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              border: `1px solid ${surface.border}`,
              borderRadius: 5,
              padding: '9px 12px',
              fontFamily: font.body,
              fontSize: 13.5,
              color: text.ink,
              background: '#fff'
            }}
          />
          <input
            type="password"
            required
            minLength={6}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              border: `1px solid ${surface.border}`,
              borderRadius: 5,
              padding: '9px 12px',
              fontFamily: font.body,
              fontSize: 13.5,
              color: text.ink,
              background: '#fff'
            }}
          />

          {error && <span style={{ fontFamily: font.body, fontSize: 12.5, color: '#e11d48' }}>{error}</span>}
          {info && <span style={{ fontFamily: font.body, fontSize: 12.5, color: '#0e9f6e' }}>{info}</span>}

          <button
            type="submit"
            disabled={busy}
            style={{
              background: surface.solid,
              color: '#fffdf7',
              borderRadius: 5,
              padding: '10px 14px',
              fontFamily: font.body,
              fontSize: 13.5,
              fontWeight: 600,
              opacity: busy ? 0.6 : 1
            }}
          >
            {mode === 'login' ? 'Entrar' : 'Crear cuenta'}
          </button>
        </form>

        <button
          onClick={() => {
            setMode((m) => (m === 'login' ? 'signup' : 'login'));
            setError(null);
            setInfo(null);
          }}
          style={{ fontFamily: font.body, fontSize: 12.5, color: text.onCream, textAlign: 'center' }}
        >
          {mode === 'login' ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      </div>
    </div>
  );
}
