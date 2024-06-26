module.exports = {
  extends: ['next/core-web-vitals', '@barnstormer/eslint-config/react.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "@next/next/no-img-element": "off",
  }
};
