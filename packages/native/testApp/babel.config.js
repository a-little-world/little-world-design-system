module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", {
        jsxRuntime: 'automatic',
        jsxImportSource: 'react'
      }]
    ],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      ["@babel/plugin-transform-react-jsx", {
        runtime: "automatic",
        importSource: "react"
      }]
    ],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    }
  };
};
