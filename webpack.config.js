const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  mode: 'production',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  plugins: [
    /* HTML Webpack Plugin */
    new HtmlWebpackPlugin({
      template: './src/template.html',
      filename: '../index.html',
    }),
  ],
    devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};