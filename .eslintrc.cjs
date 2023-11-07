module.exports = {
  root: true,
  env: { browser: true, es2023: true },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'eslint-config-mature/prettier',
    'eslint-config-mature',
    'eslint-config-mature/ts',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    esmaFeatures: {
      "jsx": true
    },
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    "semi": 0,
    "comma-dangle": ["error", "always-multiline"],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
