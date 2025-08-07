const js = require('@eslint/js');
const typescript = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const jsxA11y = require('eslint-plugin-jsx-a11y');
const prettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const globals = require('globals');

module.exports = [
  // Base configuration for all files
  js.configs.recommended,
  prettierConfig,

  // Ignore patterns (replacing .eslintignore)
  {
    ignores: [
      // Dependencies
      'node_modules/',
      'pnpm-lock.yaml',

      // Build outputs
      'dist/',
      'build/',
      '*.tgz',

      // Generated files
      '**/*.d.ts',
      '**/*.d.ts.map',

      // Logs
      '*.log',

      // Environment files
      '.env*',

      // IDE files
      '.vscode/',
      '.idea/',

      // OS files
      '.DS_Store',
      'Thumbs.db',

      // Test coverage
      'coverage/',

      // Storybook build
      'storybook-static/',

      // Native specific
      'packages/native/testApp/',
      'packages/native/dist/',

      // Config files
      '*.config.js',
      '*.config.ts',
      'rollup.config.js',
      'jest.config.js',
      'jest.config.ts',

      // Scripts and JavaScript files
      'scripts/',
      '**/*.js',
      'packages/*/scripts/',
      'packages/*/scripts/**/*.js',

      // Stories and tests (exclude from linting entirely)
      '**/*.stories.tsx',
      '**/*.stories.ts',
      '**/*.test.tsx',
      '**/*.test.ts',
      '**/testUtils.tsx',
      '**/setupTests.ts',

      // Storybook configuration
      '**/.storybook/',
    ],
  },

  // TypeScript files
  {
    files: ['**/*.{ts,tsx}'],
    ignores: ['**/*.d.ts', '**/*.d.ts.map'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        // Re-enable project references now that we've excluded stories/tests
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
      globals: {
        ...globals.node,
        ...globals.es2022,
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      prettier,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // React specific rules
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-array-index-key': 'warn',

      // General rules
      'no-unused-vars': 'off', // Use TypeScript version instead
      'prefer-const': 'error',
      'no-var': 'error',
      'no-nested-ternary': 'warn',
      'object-shorthand': 'error',

      // Prettier
      'prettier/prettier': 'error',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
