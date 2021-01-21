import {Configuration} from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: "production",
  entry: {
    'hello-core-js': './hello-core-js.ts',
    'hello-no-core-js': './hello-no-core-js.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  plugins: []
}

export default config;
