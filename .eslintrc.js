module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  root: true,
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-types': 'off',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'no-trailing-spaces': ['error', {
      'skipBlankLines': true,
      'ignoreComments': true
    }],
    'semi': ['error', 'always'],
    'prefer-destructuring': ['error', {
      'VariableDeclarator': {
        'object': true,
        'array': false
      },
      'AssignmentExpression': {
        'object': false,
        'array': false
      }
    }],
    'quote-props': ['error', 'as-needed'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'no-magic-numbers': ['error', {
      'ignore': [0, 1, 2]
    }],
    'quotes': ['error', 'single'],
    'eol-last': ['error', 'always'],
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreRegExpLiterals': true
    }],
    'curly': 'error',
    'object-property-newline': ['error', {
      'allowAllPropertiesOnSameLine': true
    }],
    'no-process-exit': 'error',
    'array-element-newline': ['error', 'consistent'],
    'no-extra-parens': ['error', 'all', {
      'conditionalAssign': false,
      'nestedBinaryExpressions': false
    }],
    'array-bracket-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'id-length': ['error', {
      'min': 2,
      'exceptions': [ 'i' ]
    }],
    'space-infix-ops': ['error'],
    'max-statements': ['error', {
      'max': 60
    }],
    'multiline-ternary': ['error', 'always-multiline'],
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 3
    }],
    'no-plusplus': ['error', {
      'allowForLoopAfterthoughts': true
    }],
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', {
      'consistent': true
    }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'always'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error'],
    'semi-spacing': ['error'],
    'block-spacing': ['error'],
    'space-in-parens': ['error', 'never']
  },
  'overrides': [{
    'files': ['*.test.ts'],
    'rules': {
      'no-magic-numbers': 'off',
      'no-process-env': 'off',
    }
  }],
};
