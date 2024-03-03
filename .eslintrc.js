//
// @README:
// Turn on "Automatic ESLint configuration" under
//   Settings > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint.
//

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', '@typescript-eslint', 'react', 'prettier', 'no-relative-import-paths'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './src']],
        extensions: ['.ts', '.js', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],

    'react/jsx-curly-brace-presence': ['error'],
    'react/jsx-tag-spacing': ['error'],
    'jsx-quotes': ['error'],

    // react 17
    'react/react-in-jsx-scope': ['off'],

    'no-nested-ternary': ['error'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],

      rules: {
        '@typescript-eslint/no-unnecessary-condition': ['error'],
      },

      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
};
