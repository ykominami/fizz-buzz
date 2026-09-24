import globals from "globals";
import nodePrettier from "@cybozu/eslint-config/presets/node-prettier";

export default [
  {
    ignores: ["eslint.config.mjs"],
  },
  ...nodePrettier,
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
      },
    },
  },
];
