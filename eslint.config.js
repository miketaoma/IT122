import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
      }
    }
  },
  {
    rules: {
      semi: ['error', 'always'],
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
      "prefer-arrow-callback": "warn",
      "no-var": "warn",
    }
  },
  pluginJs.configs.recommended,
];