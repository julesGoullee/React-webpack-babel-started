'use strict'; //eslint-disable-line strict

const webpack = require('webpack');
const production = process.env.NODE_ENV === 'production';

const paths = {
  'dist': './client/dist',
  'src': './client/src'
};

let plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    'name': 'externals',
    'filename': 'scripts/externals.bundle.js',
    'minChunks': 3,
    'chunks': ['app', 'externals']
  }),
  new webpack.optimize.DedupePlugin()
];

if(production){
  
  plugins = plugins.concat(new webpack.optimize.UglifyJsPlugin({
    'output': {
      'comments': false
    },
    'compress': {
      'warnings': false
    }
  }) );
  
}

const webpackConfig = {
  'entry': {
    'app': [`${paths.src}/app.js`, `${paths.src}/index.html`],
    'externals': [
      'react',
      'react-dom',
      'd3',
      'react-tap-event-plugin',
      'material-ui/lib/app-bar',
      'material-ui/lib/svg-icons/navigation/close',
      'material-ui/lib/menus/icon-menu',
      'material-ui/lib/svg-icons/navigation/more-vert',
      'material-ui/lib/menus/menu-item'
    ]
  },
  'output': {
    'path': paths.dist,
    'filename': 'scripts/app.bundle.js',
    'hash': true
  },
  'module': {
    'loaders': [
      {
        'test': /.jsx?$/,
        'loader': 'babel-loader',
        'exclude': /node_modules/,
        'query': {
          'presets': ['es2015', 'react']
        }
      },
      {
        'test': /\.html$/,
        'loader': 'file?name=[name].[ext]'
      },
      {
        'test': /\.scss$/,
        'loaders': ['style', 'css', 'sass']
      }
    ]
  },
  'colors': true,
  'plugins': plugins
};

module.exports = webpackConfig;
