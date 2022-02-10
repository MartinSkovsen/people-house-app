module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'crlf',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
    'linebreak-style': [0],
    'object-curly-newline': [0],
    'react/jsx-filename-extension': ['off'],
    'react/prop-types': 0,
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [0],
    'import/no-unresolved': [0],
    'react/react-in-jsx-scope': [0],
    'import/extensions': [0],
    'react/destructuring-assignment': [0],
    'no-plusplus': [0],
    'react/jsx-props-no-spreading': [0],
    'no-shadow': [0],
    '@typescript-eslint/no-shadow': [2],
    'no-unused-vars': [0],
    'prefer-destructuring': ['error', { object: true, array: false }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none',
      },
    ],
  },
};
