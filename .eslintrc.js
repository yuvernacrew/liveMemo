module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  rules: {
    // console出力許可
    'no-console': ['error', { allow: ['error'] }],
    'prettier/prettier': 'error',
  },
};
