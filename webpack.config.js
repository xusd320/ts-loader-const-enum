const { resolve } = require('path');

const configuration = {
  context: __dirname,
  entry: './src/main.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
            },
          },
        ],
      },
    ],
  },
};

module.exports = configuration;
