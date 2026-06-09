// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
    'storybook-addon-remix-react-router',
    '@storybook/addon-docs',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: [
    '../src/components/**/*.stories.tsx',
    '../src/components/**/*.mdx',
    '../src/utils/*.mdx',
    '../src/storybook/*.mdx',
  ],

  features: {
    interactionsDebugger: true,
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  webpackFinal: async config => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': require.resolve('styled-components'),
    };

    // Add module resolution for monorepo packages
    config.resolve.modules = [
      path.resolve(__dirname, '../../../node_modules'),
      path.resolve(__dirname, '../node_modules'),
      ...(config.resolve.modules || []),
    ];

    return config;
  },
};
