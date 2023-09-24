module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
    ],
    // presets: ['module:metro-react-native-babel-preset'],
    // plugins: [
    //   ["module:react-native-dotenv", {
    //     "envName": "APP_ENV",
    //     "moduleName": "@env",
    //     "path": ".env",
    //     "safe": false,
    //     "allowUndefined": true,
    //     "verbose": false
    //   }]
    // ],
  };
};
