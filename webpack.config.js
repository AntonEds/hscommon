const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode   : 'production',
  entry  : './src/hs-common.js',
  output : {
    path    : path.resolve(__dirname, 'dist'),
    filename: 'hs-common.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ]
}
;