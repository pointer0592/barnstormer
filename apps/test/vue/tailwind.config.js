const sfTypography = require("@barnstormer/typography");
/** @type {import('tailwindcss').Config} */
const { tailwindConfig } = require("@barnstormer/tailwind-config");
const tailwindTypography = require('@tailwindcss/typography');
const { join } = require("path");

module.exports = {
  presets: [tailwindConfig],
  content: [
    "./**/*.vue",
    "./**/*.ts",
    "./**/*.tsx",
    "../../../node_modules/@barnstormer/vue/shared/**/*.ts",
    join(
      __dirname,
      "..",
      "..",
      "..",
      "packages",
      "barnstormerui",
      "frameworks",
      "vue",
      "components",
      "**",
      "*.{ts,vue}"
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [sfTypography, tailwindTypography ],
};
