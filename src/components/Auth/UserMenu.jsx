'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/theme/ThemeContext';
import { useAuth } from '@/state/AuthContext';

export default function UserMenu() {
  const { surface, text, font, shadow } = useTheme();
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const email = user?.email || '';
  const initial = email.charAt(0).toUpperCase() || '?';

  return (
    <div ref={rootRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Cuenta"
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: surface.solid,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: font.display,
          fontSize: 14,
          fontWeight: 600,
          color: '#fffdf7'
        }}
      >
        {initial}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 42,
            right: 0,
            background: surface.cream,
            border: `1px solid ${surface.border}`,
            borderRadius: 6,
            boxShadow: shadow.base,
            padding: '10px 0',
            minWidth: 200,
            zIndex: 50
          }}
        >
          <div
            style={{
              padding: '4px 14px 10px',
              borderBottom: `1px solid ${surface.border}`,
              marginBottom: 6,
              fontFamily: font.body,
              fontSize: 12.5,
              color: text.ink,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}
          >
            {email}
          </div>
          <button
            onClick={() => {
              setOpen(false);
              signOut();
            }}
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '8px 14px',
              fontFamily: font.body,
              fontSize: 13,
              color: text.ink
            }}
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
