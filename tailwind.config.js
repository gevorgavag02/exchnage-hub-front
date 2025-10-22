import { lightThemeTokens } from './src/theme/light/index.ts';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ...lightThemeTokens,
      },
    },
  },
  plugins: [],
};
