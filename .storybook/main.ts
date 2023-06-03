import remarkGfm from 'remark-gfm';

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-essentials',
    '@storybook/addon-styling',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['../src/components/**/*.stories.tsx', '../src/utils/*.stories.mdx'],
  staticDirs: ['../public'],
  features: {
    interactionsDebugger: true,
  },
  docs: {
    autodocs: true,
  },
};
