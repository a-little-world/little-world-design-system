module.exports = {
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs', '@storybook/addon-essentials', '@storybook/addon-styling'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  stories: ['../src/components/**/*.stories.js', '../src/components/**/*.stories.tsx'],
  staticDirs: ['../public'],
  features: {
    interactionsDebugger: true
  },
  docs: {
    autodocs: true
  }
};