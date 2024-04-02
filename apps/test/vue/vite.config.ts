import vue from '@vitejs/plugin-vue';
import { defineConfig, searchForWorkspaceRoot, type PluginOption } from 'vite';
import { copiedBsuiPath, relativeBsuiPath, replaceImport } from '@barnstormer/tests-shared';
import istanbul from 'vite-plugin-istanbul';
import nycConfig from './.nycrc.json';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const vueComponentsPath = isCoverageEnabled ? copiedBsuiPath('vue', __dirname) : relativeBsuiPath('vue', __dirname);
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
    vue(),
    replaceImport('react'),
    ...(isCoverageEnabled
      ? [
          istanbul({
            ...nycConfig,
            ...(process.env.SPEC && { include: [`**/${process.env.SPEC}/**`] }),
            cypress: true,
          }) as PluginOption,
        ]
      : []),
  ],
  resolve: {
    dedupe: ['vue'],
    // Unfortunately we cant do alias directly to packages/barnstormerui/frameworks/vue because node_modules are hardcode excluded from cypress, nyc and code_coverage. And we cant change cwd for nyc(available in cli) because @cypress/code-coverage hardoce cwd where we have package.json https://github.com/cypress-io/code-coverage/blob/706dd66d3450236af9f1dba037dfc1e1fcd5e6d5/task.js#L20
    alias: [
      {
        find: '@barnstormer/vue',
        replacement: vueComponentsPath,
      },
      {
        find: '@barnstormer/react',
        replacement: vueComponentsPath,
      },
    ],
  },
});
