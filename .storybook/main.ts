import remarkGfm from 'remark-gfm';

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  stories: [
    '../src/components/**/*.stories.tsx',
    // '../src/components/**/*.mdx',
    '../src/utils/*.mdx',
    '../src/tokens/*.mdx',
  ],

  staticDirs: ['../public'],

  features: {
    interactionsDebugger: true,
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
