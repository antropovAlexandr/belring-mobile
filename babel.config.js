module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          Src: './src',
          Screens: './src/screens',
          Components: './src/components',
          Store: './src/store',
          Navigator: './src/navigator',
          Selectors: './src/selectors',
          Services: './src/services',
          Consts: './src/consts',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};

