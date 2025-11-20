// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
const require = createRequire(import.meta.url);
export default {
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
    "@storybook/addon-webpack5-compiler-swc",
    "@chromatic-com/storybook",
    "storybook-addon-remix-react-router",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-webpack5",
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
