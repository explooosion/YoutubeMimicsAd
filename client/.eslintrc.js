// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // custom rules
    'linebreak-style': [1, 'windows'],
    'semi': 0,
    'no-console': 'off',
    'no-empty': 'off',
    'no-var': 0,
    'no-alert': 0,
    'no-unused-vars': 0,
    'no-useless-constructor': 0,
    'padded-blocks': 0,
    'indent': 0,
    'import/no-extraneous-dependencies': 0,
    'formatting/newline-object-in-array': 0,
    'formatting/space-after-class-name': 0,
    'prefer-destructuring': 0,
    'prefer-arrow-callback': 0,
    'space-before-function-paren': 0,
    'class-methods-use-this': 0,
    'no-use-before-define': 0,
    'prefer-template': 0,
    'func-names': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'comma-dangle': 0,
    'eol-last': 0,
    'import/first': 0,
    'import/no-unresolved': 0,
  }
}