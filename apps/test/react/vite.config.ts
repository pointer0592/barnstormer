import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { replaceImport, copiedBsuiPath, relativeBsuiPath } from '@barnstormer/tests-shared';
import istanbul from 'vite-plugin-istanbul';
import nycConfig from './.nycrc.json';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const reactComponentsPath = isCoverageEnabled
  ? copiedBsuiPath('react', __dirname)
  : relativeBsuiPath('react', __dirname);
// https://vitejs.dev/config/

export default defineConfig({
  server: {
    fs: {
      allow: [
        // https://vitejs.dev/config/server-options.html#server-fs-allow problem with workspace symlinked dependencies
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
  plugins: [
    react(),
    replaceImport('vue'),
    ...(isCoverageEnabled
      ? [
          istanbul({
            ...nycConfig,
            ...(process.env.SPEC && { include: [`**/${process.env.SPEC}/**`] }),
            cypress: true,
          }),
        ]
      : []),
  ],
  resolve: {
    dedupe: ['vue'],
    // Unfortunately we cant do alias directly to packages/barnstormerui/frameworks/vue because node_modules are hardcode excluded from cypress, nyc and code_coverage. And we cant change cwd for nyc(available in cli) because @cypress/code-coverage hardoce cwd where we have package.json https://github.com/cypress-io/code-coverage/blob/706dd66d3450236af9f1dba037dfc1e1fcd5e6d5/task.js#L20
    alias: [
      {
        find: '@barnstormer/vue',
        replacement: reactComponentsPath,
      },
      {
        find: '@barnstormer/react',
        replacement: reactComponentsPath,
      },
    ],
  },
});
