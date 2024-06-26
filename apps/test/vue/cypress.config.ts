import { defineConfig } from 'cypress';
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const singleFile = process.env.SPEC ? `${process.env.SPEC}/` : '';
export default defineConfig({
  env: {
    framework: 'vue',
    coverage: isCoverageEnabled,
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    specPattern: `src/components/barnstormerui/tests/components/${singleFile}**/*.cy.tsx`,
    fixturesFolder: 'src/components/barnstormerui/tests/fixtures',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      isCoverageEnabled && require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
