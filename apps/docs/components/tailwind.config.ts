import type { Config } from 'tailwindcss';
import sfTypography from '@barnstormer/typography';
import { tailwindConfig } from '@barnstormer/vue/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../../packages/barnstormerui/frameworks/vue/**/*.vue', './content/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        headings: 'Titillium Web, sans-serif',
        body: 'Titillium Web, sans-serif',
        sans: 'Titillium Web, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
