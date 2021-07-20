const path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: './images/'
          }
        }
      }
    ]
  },  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
