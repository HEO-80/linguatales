import AppHeader from '@/components/AppHeader/AppHeader';
import LanguageBar from '@/components/LanguageBar/LanguageBar';
import Rail from '@/components/Rail/Rail';
import AppFooter from '@/components/AppFooter/AppFooter';

/**
 * src/components/AppShell/AppShell.jsx
 * Ya no sostiene estado de drawer móvil: Rail funciona colapsado a
 * cualquier ancho, así que no hace falta un intermediario Client Component
 * con useState.
 */
export default function AppShell({ children }) {
  return (
    <>
      <AppHeader />
      <LanguageBar />
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <Rail />
        <main style={{ flex: 1, minWidth: 0 }}>{children}</main>
      </div>
      <AppFooter />
    </>
  );
}
