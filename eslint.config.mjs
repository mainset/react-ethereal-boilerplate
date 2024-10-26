import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
  },

  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,

  importPlugin.flatConfigs.recommended,
];
