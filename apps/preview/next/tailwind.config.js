const sfTypography = require('@barnstormer/typography');
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require('@barnstormer/tailwind-config');
const tailwindTypography = require('@tailwindcss/typography');

module.exports = {
  presets: [tailwindConfig],
  content: ['./**/*.ts', './**/*.tsx', '../../../node_modules/@barnstormer/react/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
