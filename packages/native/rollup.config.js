// rollup.config.js
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const { defineConfig } = require('rollup');
const typescript = require('@rollup/plugin-typescript');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const babelRuntimeVersion = require('@babel/runtime/package.json').version;

module.exports = defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // Automatically externalize peerDependencies
    peerDepsExternal(),
    
    // Handle TypeScript
    typescript({
      tsconfig: './tsconfig.json',
      outputToFilesystem: true,
      declaration: true,
      declarationDir: 'dist'
    }),
    
    // Resolve source files
    resolve({
      extensions,
      modulesOnly: true,
      // Prevent bundling node_modules
      preferBuiltins: true
    }),
    
    // Convert CommonJS modules to ES6
    commonjs({
      include: 'node_modules/**',
    }),
    
    // Transpile with babel
    babel({
      extensions,
      babelHelpers: 'runtime',
      include: ['src/**/*'],
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' }, modules: false }],
        '@babel/preset-react',
        ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
      ],
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          {
            version: babelRuntimeVersion,
            regenerator: true,
            useESModules: true
          },
        ],
      ],
    }),
  ],
  // Important for React Native - treat these as external dependencies
  external: [
    'react',
    'react-native',
    'react-dom',
    'styled-components',
    'react-native-svg',
    '@react-navigation/native',
    'expo-linear-gradient',
    // Regexp for @babel/runtime helpers
    /^@babel\/runtime/,
    'expo-font',
    'expo-modules-core',
    // External dependencies from core package
    'svgson',
    'lodash',
    // Handle the core library properly
    '@a-little-world/little-world-design-system-core',
    // Avoid processing node_modules
    /node_modules/
  ],
});