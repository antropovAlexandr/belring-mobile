module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    //'eslint-plugin-tsdoc',
    'eslint-plugin-prefer-arrow',
  ],
  rules: {
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: true,
        classPropertiesAllowed: true,
      },
    ],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': 'error',
    'react/jsx-key': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        groups: ['external', 'internal', 'builtin', 'parent', 'unknown', 'index', 'sibling'],
        'newlines-between': 'always',
      },
    ],
    'import/no-absolute-path': 2,
    'import/no-useless-path-segments': 2,
    'import/newline-after-import': 2,
    //'tsdoc/syntax': 'warn',
  },
}
