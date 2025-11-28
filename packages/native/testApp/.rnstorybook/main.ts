import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-native";

const require = createRequire(import.meta.url);

const main: StorybookConfig = {
  stories: ["../stories/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-actions",
  ],
};

export default main;