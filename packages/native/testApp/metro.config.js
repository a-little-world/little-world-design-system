const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

// Add watchFolders to the default config
defaultConfig.watchFolders = [
  path.resolve(__dirname, "../../core"),
  path.resolve(__dirname, ".."),
];

// Log module resolution
defaultConfig.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === "react" || moduleName.includes("@a-little-world")) {
    // Force React to always resolve from test app's node_modules
    if (moduleName === "react") {
      return {
        type: "sourceFile",
        filePath: path.resolve(__dirname, "node_modules/react/index.js"),
      };
    }
  }
  // Add special handling for expo-linear-gradient
  if (moduleName === "expo-linear-gradient") {
    return {
      type: "sourceFile",
      filePath: path.resolve(
        __dirname,
        "node_modules/expo-linear-gradient/build/LinearGradient.js"
      ),
    };
  }
  return context.resolveRequest(context, moduleName, platform);
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  extraNodeModules: {
    "@a-little-world/little-world-design-system-core": path.resolve(
      __dirname,
      "../../core"
    ),
    "@a-little-world/little-world-design-system-native": path.resolve(
      __dirname,
      ".."
    ),
    react: path.resolve(__dirname, "node_modules/react"),
    "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    "expo-linear-gradient": path.resolve(
      __dirname,
      "node_modules/expo-linear-gradient"
    ),
  },
};

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});
