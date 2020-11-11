module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
};
