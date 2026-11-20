import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import security from "eslint-plugin-security";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Security linting for application code: flags eval, unsafe regular expressions (ReDoS), timing-unsafe comparisons,
  // child_process misuse and similar patterns. Scoped to src/ (build scripts legitimately take file paths as input).
  {
    ...security.configs.recommended,
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      ...security.configs.recommended.rules,
      // Fires on every obj[key] (hundreds of false positives in typed code); TypeScript covers the real risk.
      "security/detect-object-injection": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
