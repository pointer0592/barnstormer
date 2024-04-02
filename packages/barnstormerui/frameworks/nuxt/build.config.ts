import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/module.ts'],
  externals: ['@barnstormer/vue', '@barnstormer/vue/tailwind-config'],
});
