const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

const withStorybook = require("@storybook/react-native/metro/withStorybook");

const config = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});

// Add core package to watch folders
config.watchFolders = [
  ...config.watchFolders,
  path.resolve(__dirname, "../core"),
];

// Add core package to node modules paths
config.resolver.nodeModulesPaths = [
  ...config.resolver.nodeModulesPaths,
  path.resolve(__dirname, "../core"),
];

// Add core package to extraNodeModules
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "@a-little-world/little-world-design-system": path.resolve(__dirname, "../core"),
};

module.exports = config;
