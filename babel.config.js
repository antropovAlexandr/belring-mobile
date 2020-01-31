module.exports = {
  'presets': [
    'module:metro-react-native-babel-preset',
  ],
  'plugins': [
    [
      'module-resolver',
      {
        'root': [
          './src',
        ],
        'alias': {
          'Src': './src',
          'Consts': './src/consts',
          'Screens': './src/screens',
          'Components': './src/components',
          'Redux': './src/redux',
          'Navigator': './src/navigator',
          'Selectors': './src/selectors',
          'Services': './src/services',
        },
        'cwd': 'babelrc',
      },
    ],
  ],
}
