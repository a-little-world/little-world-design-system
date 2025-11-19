// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
const require = createRequire(import.meta.url);
export default {
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("storybook-addon-remix-react-router"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
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

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
