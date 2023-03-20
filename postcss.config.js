const cssVariables = require('postcss-css-variables');
const nested = require('postcss-nested');
const postcssImport = require('postcss-import');

module.exports = {
  map: {
    inline: false
  },
  plugins: [postcssImport(), nested(), cssVariables()]
};
