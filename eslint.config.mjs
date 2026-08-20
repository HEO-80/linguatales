import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Staging copy of the files already copied into src/theme — not part of the app.
    "Light mode design improvement/**",
  ]),
  {
    // tokens.js mixes `require()` into an ESM module on purpose (auditContrast()
    // is meant to run standalone in CI). It's pre-written, don't rewrite it.
    files: ["src/theme/tokens.js"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
]);

export default eslintConfig;
