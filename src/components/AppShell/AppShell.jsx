import AppHeader from '@/components/AppHeader/AppHeader';
import LanguageBar from '@/components/LanguageBar/LanguageBar';
import SectionsBar from '@/components/SectionsBar/SectionsBar';
import Rail from '@/components/Rail/Rail';
import AppFooter from '@/components/AppFooter/AppFooter';

/**
 * src/components/AppShell/AppShell.jsx
 * Ya no sostiene estado de drawer móvil: Rail funciona colapsado a
 * cualquier ancho, así que no hace falta un intermediario Client Component
 * con useState.
 *
 * El wrapper `position: relative` es el "lienzo" del que hablan los
 * popovers (§3 tres-barras-spec): AppHeader, LanguageBar, SectionsBar y
 * Rail abren cada uno los suyos, todos anclados a su propia pastilla vía
 * `position: absolute` — hace falta un único ancestro `relative` que los
 * cubra a todos para que esas coordenadas absolutas signifiquen lo mismo
 * sea cual sea el trigger que los abrió.
 */
export default function AppShell({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <AppHeader />
      <LanguageBar />
      <SectionsBar />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Rail />
        <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
      </div>
      <AppFooter />
    </div>
  );
}
