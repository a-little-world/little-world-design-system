const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

// Add watchFolders to the default config
defaultConfig.watchFolders = [
  path.resolve(__dirname, '../../core'),
  path.resolve(__dirname, '..')
];

// Enhance resolver configuration
defaultConfig.resolver = {
  ...defaultConfig.resolver,
  extraNodeModules: {
    '@a-little-world/little-world-design-system-core': path.resolve(__dirname, '../../core'),
    '@a-little-world/little-world-design-system-native': path.resolve(__dirname, '..')
  }
};

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});