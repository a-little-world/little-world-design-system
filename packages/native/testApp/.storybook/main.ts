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
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs"
  ],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen",
  },
};

export default main;