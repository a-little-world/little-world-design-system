const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const withStorybook = require("@storybook/react-native/metro/withStorybook");

const defaultConfig = getDefaultConfig(__dirname);

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
  
  // Force styled-components to always resolve from test app's node_modules
  if (moduleName === "styled-components") {
    return {
      type: "sourceFile",
      filePath: path.resolve(__dirname, "node_modules/styled-components/index.js"),
    };
  }
  
  // Handle styled-components/native subpath
  if (moduleName === "styled-components/native") {
    return {
      type: "sourceFile",
      filePath: path.resolve(__dirname, "node_modules/styled-components/native/dist/styled-components.native.cjs.js"),
    };
  }
  
  // Force react-native-svg to always resolve from test app's node_modules
  if (moduleName === "react-native-svg") {
    return {
      type: "sourceFile",
      filePath: path.resolve(__dirname, "node_modules/react-native-svg/lib/commonjs/index.js"),
    };
  }
  
  return context.resolveRequest(context, moduleName, platform);
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  extraNodeModules: {
    react: path.resolve(__dirname, "node_modules/react"),
    "react-dom": path.resolve(__dirname, "node_modules/react-dom"),
    "styled-components": path.resolve(__dirname, "node_modules/styled-components"),
    "react-native-svg": path.resolve(__dirname, "node_modules/react-native-svg"),
  },
};

module.exports = withStorybook(defaultConfig, {
  enabled: process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true",
  configPath: path.resolve(__dirname, "./.rnstorybook"),
  onDisabledRemoveStorybook: true,
});
