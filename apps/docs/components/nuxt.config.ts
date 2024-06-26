// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  extends: ['bs-docs-base'],
  app: {
    baseURL: process.env.VITE_DOCS_BASEPATH ?? '',
  },
  // fix via https://github.com/nuxt/content/issues/2254
  alias: {
    'micromark/lib/preprocess.js': 'micromark',
    'micromark/lib/postprocess.js': 'micromark',
  },
  runtimeConfig: {
    public: {
      barnstormerUi: true,
      DOCS_EXAMPLES_VUE_PATH: process.env.VITE_DOCS_EXAMPLES_VUE_PATH,
      DOCS_EXAMPLES_REACT_PATH: process.env.VITE_DOCS_EXAMPLES_REACT_PATH,
    },
  },
  nitro: {
    routeRules: {
      '/figma': { redirect: 'https://www.figma.com/file/Q7Nr1NvjPdcGVhykkfDg2k/Storefront-UI-%7C-Design-Kit-v2.5-(public)?type=design&node-id=22913-91045&mode=design'}
    }
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
});
