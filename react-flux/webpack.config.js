var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
/*var jQueryPluginConfig = new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        });
*/

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
     // {test: /\.css$/,  loader: "style-loader!css-loader" },
    ],
      resolve: {
      extensions: ['', '.js', '.jsx', '.css']
    }
  },
  plugins: [HTMLWebpackPluginConfig ]
};
