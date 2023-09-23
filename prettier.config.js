/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 90,
  arrowParens: 'always',
};
