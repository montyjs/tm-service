const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/client/components'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-es2016'],
      },
    }],
  },
};
