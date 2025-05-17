module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", {
        jsxRuntime: 'automatic'
      }]
    ],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      ["@babel/plugin-transform-react-jsx", {
        runtime: "automatic",
        useBuiltIns: true,
        importSource: "@a-little-world/little-world-design-system-native/node_modules/react"
      }]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    }
  };
};
