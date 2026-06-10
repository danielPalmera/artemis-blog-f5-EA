import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import checkFile from "eslint-plugin-check-file";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  prettier,

  { ignores: ["dist/", ".astro/", "node_modules/"] },

  {
    languageOptions: {
      globals: {
        process: "readonly",
      },
    },
  },

  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },

  {
    plugins: { "check-file": checkFile },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "src/components/**/*.astro": "PASCAL_CASE",
          "src/**/*.{ts,js,mjs}": "KEBAB_CASE",
        },
        { ignoreMiddleExtensions: true },
      ],
    },
  },

  prettier, // ← añade esto AL FINAL siempre
];
