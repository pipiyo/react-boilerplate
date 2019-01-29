const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//npm run build -- --mode development
//$(npm bin)/babel ./src/greet.js --presets=@babel/preset-env
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties'
          ]
        }
      },
      {
        test: /\.css$/,
        //loader cuando es 1 solo loader y use cuando don varios(loaders esta deprecado)
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
}
