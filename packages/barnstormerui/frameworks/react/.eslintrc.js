module.exports = {
  extends: ['@barnstormer/eslint-config/react.js'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
