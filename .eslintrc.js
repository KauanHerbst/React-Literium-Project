module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parser: '@babel/eslint-parser',
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-comment-textnodes': 'off',
    'jsx-a11y/alt-text': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': 'off',
    'array-callback-return': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-console': 'off',
    'no-dupe-else-if': 'off',
    'react/function-component-definition': 'off',
  },
};
