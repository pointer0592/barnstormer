import { join, resolve } from 'path';
import { existsSync } from 'fs';

const isProd = process.env.PROD === 'true';

/** @type {import('next').NextConfig} */
export default {
  env: {
    DOCS_EXAMPLES_REACT_PATH: process.env.VITE_DOCS_EXAMPLES_REACT_PATH,
  },
  basePath: process.env.VITE_DOCS_EXAMPLES_REACT_PATH
    ? new URL(process.env.VITE_DOCS_EXAMPLES_REACT_PATH).pathname
    : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    if (!isProd) {
      config.module.rules.push({
        test: /[\\\/]barnstormerui[\\\/]frameworks[\\\/]react[\\\/]index\.ts/,
        loader: 'string-replace-loader',
        options: {
          // only for dev purposes in monorepo:
          // Search all imports and add typing files before them, webpack has problem with re-exporting from packages
          // import { BsThumbnailSize } from '@barnstormer/shared';
          // import type { PropsWithStyle } from '@barnstormer/react';

          // export { BsThumbnailSize };
          search: /^export \* from '\.[\\\/]components[\\\/]([^']+?)';/gm,
          replace: (_match, componentName) => {
            const path = join(
              process.cwd(),
              '..',
              '..',
              '..',
              'packages',
              'barnstormerui',
              'frameworks',
              'react',
              'components',
              componentName,
              'types.ts',
            );
            if (!existsSync(path)) return _match;
            return `export * from './components/${componentName}/types';\nexport * from './components/${componentName}';`;
          },
        },
      });

      const reactPackage = resolve(process.cwd(), '..', '..', '..', 'packages', 'barnstormerui', 'frameworks', 'react', 'index.ts');
      config.resolve.alias = {
        ...config.resolve.alias,
        '@barnstormer/react': reactPackage,
        '@barnstormer/vue': reactPackage,
      }
    }

    return config;
  }
};
