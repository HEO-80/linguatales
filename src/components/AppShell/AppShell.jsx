'use client';

import { useState } from 'react';
import AppHeader from '@/components/AppHeader/AppHeader';
import Sidebar from '@/components/Sidebar/Sidebar';
import AppFooter from '@/components/AppFooter/AppFooter';

/**
 * src/components/AppShell/AppShell.jsx
 * Client Component intermedio: sostiene el estado del drawer móvil que
 * comparten AppHeader (hamburguesa) y Sidebar (drawer), ya que
 * app/[lang]/layout.tsx es un Server Component y no puede tener useState.
 */
export default function AppShell({ children }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  return (
    <>
      <AppHeader onMenuClick={() => setMobileDrawerOpen(true)} />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Sidebar mobileOpen={mobileDrawerOpen} onCloseMobile={() => setMobileDrawerOpen(false)} />
        <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
      </div>
      <AppFooter />
    </>
  );
}
