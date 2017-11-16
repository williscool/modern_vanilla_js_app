// another config file you cant es6 :/
const htmlLoader = require('html-loader');

module.exports = {
  process(src) {
    return htmlLoader(src);
  },
};
