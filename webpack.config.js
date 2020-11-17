const path = require('path');


module.exports = {
  entry: path.resolve(__dirname, '/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

// module.exports = {
//   entry: path.join(__dirname + '/client/index.jsx'),
//   mode: 'development',
//   devtool: 'eval-source-map',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js'

//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         include: path.join(__dirname, '/client/components/'),
//         exclude: /node_modules/,
//         loader: 'babel',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react']
//         }
//       }
//     ]
//   }
// };