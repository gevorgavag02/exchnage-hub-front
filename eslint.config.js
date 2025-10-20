import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
      rules: {
          'quotes': ['error', 'single'], // Одинарные кавычки
          'semi': ['error', 'always'], // Точки с запятой в конце строки
          'indent': ['error', 2], // Отступы 2 пробела
          'eol-last': ['error', 'always'], // Новая строка в конце файла
          'no-trailing-spaces': 'error', // Удаление пробелов в конце строки
          'object-curly-spacing': ['error', 'always'], // Пробелы внутри фигурных скобок
          'comma-dangle': ['error', 'always-multiline'],
          'padding-line-between-statements': [
              'error',
              { blankLine: 'always', prev: '*', next: 'return' },
              { blankLine: 'always', prev: '*', next: 'if' }
          ], // Пустая строка перед return
          'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }], // Минимум один пустая строка
          'max-len': [
              'error',
              {
                  code: 120, // Максимум 120 символов
              }
          ],
      },
  },
])
