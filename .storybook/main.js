module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/react',
  stories: [
    '../src/components/**/*.stories.js',
    '../src/components/**/*.stories.tsx',
  ],
  staticDirs: ['../public'],
  features: {
    interactionsDebugger: true,
  },
};
