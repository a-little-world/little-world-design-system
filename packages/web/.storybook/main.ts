export default {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
    'storybook-addon-remix-react-router',
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
};
