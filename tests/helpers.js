const util = require('util');

const sass = require('node-sass');
const sassRender = util.promisify(sass.render);

module.exports.render = (options) => {
  return sassRender({
    // Where node-sass should look for files when you use @import
    includePaths: ['./src/scss'],

    // Using a compact output style allows you to use concise 'expected' CSS
    outputStyle: 'compact',

    // Merge in any other options you pass when calling render
    ...options,
  });
};
