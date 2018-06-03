const fs = require('fs');
const path = require('path');

module.exports = {

  entry: './main.js',

  output: {
    filename: 'server.bundle.js',
  },

  // Node.js like environment compilation usuage like using 'require' to load modules
  // and not using the 'fs' or 'path'
  target: 'node',

  // provides a way of excluding dependencies from the output bundles.
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server', 'react/addons',
  ]).reduce((ext, mod) => {
    ext[mod] = `commonjs ${mod}`;
    return ext;
  }, {}),

  // to polyfill or mock certain Node.js globals and modules.
  node: {
    __filename: true,
    __dirname: true,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets:
          [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets:
          [
            'es2015',
            'react',
          ],
        },
      },
    ],
  },
};
