const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point for our application
  entry: './src/index.js',
  
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  // Module rules for transforming files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,          // Transform both .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,               // Allow importing CSS files
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  
  // Plugins (generates an HTML file that includes the bundle)
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  
  // Development server configuration
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    open: true // Automatically open the browser
  },
  
  // Resolve file extensions
  resolve: {
    extensions: ['.js', '.jsx']
  },
  
  mode: 'development' // Change to 'production' for production build
};