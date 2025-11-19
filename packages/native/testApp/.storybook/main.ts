import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { StorybookConfig } from "@storybook/react-native-web-vite";

const require = createRequire(import.meta.url);

const main: StorybookConfig = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-native-web-vite"),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen",
  },
};

export default main;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
