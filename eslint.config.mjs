import babelParser from '@babel/eslint-parser';
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
  // NOTE: custom config starts
  {
    languageOptions: {
      parser: babelParser,
    },
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

  // NOTE: extra plugins added
  importPlugin.flatConfigs.recommended,
];
