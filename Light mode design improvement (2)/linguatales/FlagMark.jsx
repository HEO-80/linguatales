/**
 * LinguaTales — bandera del idioma en curso
 * src/components/LanguageBar/FlagMark.jsx
 *
 * 31×21px, radio 3px, con relieve. Va en el nav secundario, junto al motivo.
 *
 * ⚠ El inglés lleva la Union Jack DIBUJADA, no tres franjas: tres franjas
 *   horizontales azul/rojo/blanco se leen como la bandera rusa (corrección
 *   explícita del usuario). Los demás idiomas van con franjas VERTICALES,
 *   que es como van Francia, Italia y Portugal.
 */

const SHELL = {
  display: 'flex',
  width: '31px',
  height: '21px',
  borderRadius: '3px',
  overflow: 'hidden',
  flexShrink: 0,
  border: '1px solid rgba(25,23,19,.16)',
  boxShadow: '0 2px 5px rgba(25,23,19,.14)'
};

/** Union Jack — capas en orden: campo, diagonales, cruz de San Jorge */
function UnionJack() {
  return (
    <svg viewBox="0 0 60 40" width="100%" height="100%" preserveAspectRatio="none">
      <rect width="60" height="40" fill="#12275e" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#ffffff" strokeWidth="8" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#cf142b" strokeWidth="3.4" />
      <path d="M30 0V40M0 20H60" stroke="#ffffff" strokeWidth="13" />
      <path d="M30 0V40M0 20H60" stroke="#cf142b" strokeWidth="7.5" />
    </svg>
  );
}

/** Franjas verticales p1 · p2 · p3 */
function VerticalBars({ lang }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <span style={{ flex: 1, background: lang.p1 }} />
      <span style={{ flex: 1, background: lang.p2 }} />
      <span style={{ flex: 1, background: lang.p3 }} />
    </div>
  );
}

export default function FlagMark({ lang }) {
  return (
    <div style={SHELL}>
      {lang.code === 'EN' ? <UnionJack /> : <VerticalBars lang={lang} />}
    </div>
  );
}
