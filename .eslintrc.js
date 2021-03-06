module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'space-before-function-paren': [2, 'never'],
    'comma-dangle': [2, 'always-multiline'],
    'react/prop-types': [0],
  },
  env: {
    jest: true,
  },
}
