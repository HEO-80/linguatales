/**
 * Mezcla determinista semillada por texto. Math.random() en un
 * inicializador de useState produciría un orden distinto en el render de
 * servidor y en el de cliente (error de hidratación) — con la misma
 * semilla, servidor y cliente calculan siempre el mismo "orden aleatorio".
 * La usan los tres juegos (Ordena la frase, Elige el hueco, Dictado no la
 * necesita para nada nuevo pero sí para variar el reinicio).
 */
export function seededShuffle(arr, seedStr) {
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
  const next = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
