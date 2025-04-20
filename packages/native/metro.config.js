const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

// Add watchFolders to the default config
defaultConfig.watchFolders = [
  ...(defaultConfig.watchFolders || []),
  path.resolve(__dirname, '../core')
];

// Redirect module resolution
defaultConfig.resolver = {
  ...defaultConfig.resolver,
  extraNodeModules: {
    ...(defaultConfig.resolver.extraNodeModules || {}),
    '@a-little-world/little-world-design-system': path.resolve(__dirname, '../core'),
    'react-router': path.resolve(__dirname, './node_modules/react-router-native'),
    'react-router-dom': path.resolve(__dirname, './node_modules/react-router-native')
  }
};

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});