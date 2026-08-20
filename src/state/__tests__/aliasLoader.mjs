/**
 * src/state/__tests__/aliasLoader.mjs
 *
 * Loader ESM mínimo para que progress.migration.test.mjs pueda ejecutarse
 * con `node` puro (sin Next/webpack) y aun así importar el módulo real
 * src/state/progress.js, cuyos imports internos usan el alias '@/' → 'src/'
 * (mismo mapeo que tsconfig.json → compilerOptions.paths). Solo lo usa ese
 * test — Next/webpack ya resuelven '@/' por su cuenta y no lo necesitan.
 */
import { statSync } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const SRC_DIR = path.resolve(import.meta.dirname, '..', '..');

function isFile(p) {
  try {
    return statSync(p).isFile();
  } catch {
    return false;
  }
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('@/')) {
    const rel = specifier.slice(2);
    const base = path.join(SRC_DIR, rel);
    const candidates = [`${base}.js`, path.join(base, 'index.js'), base];
    const match = candidates.find(isFile);
    if (match) {
      return { url: pathToFileURL(match).href, shortCircuit: true };
    }
  }
  return nextResolve(specifier, context);
}
