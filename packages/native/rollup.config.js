const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const { defineConfig } = require("rollup");
const typescript = require("@rollup/plugin-typescript");
const path = require("path");

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const babelRuntimeVersion = require("@babel/runtime/package.json").version;

module.exports = defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
      strict: false,
      globals: {
        react: 'React',
        'react-native': 'ReactNative',
        'styled-components': 'styled'
      },
      interop: 'auto'
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      exports: "named",
      globals: {
        react: 'React',
        'react-native': 'ReactNative',
        'styled-components': 'styled'
      },
      interop: 'auto'
    }
  ],
  plugins: [
    peerDepsExternal({
      includeDependencies: false,
      exclude: ['expo-linear-gradient']
    }),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
      exclude: ["**/node_modules/**", "**/*.test.tsx", "**/*.stories.tsx"]
    }),
    resolve({
      extensions,
      preferBuiltins: false,
      dedupe: ['react', 'react-native', 'styled-components'],
      moduleDirectories: ['node_modules']
    }),
    commonjs({
      include: "node_modules/**",
      exclude: ["**/*.tsx", "**/*.ts"]
    }),
    babel({
      extensions,
      babelHelpers: "runtime",
      include: ["src/**/*"],
      exclude: "**/node_modules/**",
      presets: [
        ["@babel/preset-env", { 
          targets: { node: "current" },
          modules: false
        }],
        ["@babel/preset-react", { 
          runtime: "classic",
          useBuiltIns: true,
          development: process.env.NODE_ENV === 'development'
        }],
        ["@babel/preset-typescript", { 
          isTSX: true,
          allExtensions: true
        }]
      ],
      plugins: [
        ["@babel/plugin-transform-runtime", {
          version: babelRuntimeVersion,
          regenerator: true,
          useESModules: true
        }]
      ]
    })
  ],
  external: [
    'react',
    'react-native',
    'styled-components',
    'react-native-svg',
    '@react-navigation/native',
    'expo-modules-core',
    'expo-linear-gradient',
    /^expo-/,
    /^@babel\/runtime/,
    '@a-little-world/little-world-design-system-core',
    /^react-native/,
    /^@rn-primitives/ 
  ]
});