// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from 'node:module';
import type { StorybookConfig } from '@storybook/react-webpack5';

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
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

    return config;
  },
};

export default config;
