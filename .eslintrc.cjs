module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['dist', 'node_modules'],
  plugins: ['react', 'react-hooks'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  overrides: [
    {
      files: ['src/features/**/*.{js,jsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/app/*']
          }
        ]
      }
    },
    {
      files: ['src/shared/**/*.{js,jsx}'],
      rules: {
        'no-restricted-imports': [
          'error',
          {
            patterns: ['@/app/*', '@/features/*']
          }
        ]
      }
    }
  ]
}
