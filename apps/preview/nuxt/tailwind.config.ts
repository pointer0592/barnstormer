import type { Config } from 'tailwindcss';
import sfTypography from '@barnstormer/typography';
import { tailwindConfig } from '@barnstormer/vue/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../../packages/barnstormerui/frameworks/vue/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Titillium Web, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
