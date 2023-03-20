module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: ['@typescript-eslint', 'import', 'react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: ['./tsconfig.eslint.json', './tsconfig.json'],
    tsconfigRootDir: './'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-mixed-spaces-and-tabs': 'off',
    '@typescript-eslint/indent': 'off',
    'import/no-default-export': 'error',
    'import/order': 'error',
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'yield-star-spacing': 'error',
    'no-eq-null': 'error',
    yoda: 'error',
    // Не использовать any
    '@typescript-eslint/no-explicit-any': 'error',
    'no-var': 'error',
    'react/prop-types': 0,
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-sort-props': [
      'error',
      {
        reservedFirst: true,
        callbacksLast: true
      }
    ],
    'react/no-unescaped-entities': 0,
    'no-use-before-define': 'off',
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      {
        blankLine: 'always',
        prev: [
          'multiline-expression',
          'multiline-const',
          'multiline-block-like',
          'multiline-let',
          'multiline-var'
        ],
        next: '*'
      },
      {
        blankLine: 'never',
        prev: 'cjs-import',
        next: 'cjs-import'
      }
    ],
    'no-shadow': 'error',
    curly: ['error', 'all'],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'no-console': 'off'
      }
    },
    {
      files: ['*.tsx'],
      rules: {
        'no-fallthrough': 'error',
        'valid-typeof': 'off',
        'no-redeclare': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-use-before-define': 'off',
        'no-restricted-imports': 'off',
        '@typescript-eslint/consistent-type-imports': 'error'
      }
    },
    {
      files: ['*.spec.tsx'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off'
      }
    }
  ],
  globals: {
    nameof: 'readonly'
  }
};
