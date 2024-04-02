/** @type {import('tailwindcss').Config} */
import { join } from 'path';
import sfTypography from '@barnstormer/typography';
import { tailwindConfig } from '@barnstormer/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

module.exports = {
  presets: [tailwindConfig],
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../../node_modules/@barnstormer/react/shared/**/*.ts',
    join(
      __dirname,
      '..',
      '..',
      '..',
      'packages',
      'barnstormerui',
      'frameworks',
      'react',
      'components',
      '**',
      '*.{js,ts,jsx,tsx}',
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
