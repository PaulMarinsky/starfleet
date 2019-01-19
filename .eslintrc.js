module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'import', 'jsx-a11y'],

  rules: {
    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
  },
};
