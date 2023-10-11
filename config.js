const fs = require("fs");
const dotenv = require("dotenv");

// Load environment variables from .env
dotenv.config();
console.log(process.env.mapbox_sk);
// Define the app configuration based on environment variables
const appConfig = {
  expo: {
    owner: "navinomad",
    scheme: "acme",
    web: {
      bundler: "metro",
    },
    name: "navinomad",
    slug: "navinomad",
    splash: {
      backgroundColor: "#000000",
    },
    icon: "./assets/Logo.png",
    plugins: [
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsImpl: "mapbox",
          RNMapboxMapsDownloadToken: process.env.mapbox_sk,
        },
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission:
            "Allow me to use your location.",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "ec10b3e6-fd3c-4ac1-ad3c-02e4c6fd6e7c",
      },
    },
    android: {
      package: "com.criipi.TripRouter",
    },
    ios: {
      bundleIdentifier: "com.criipi.TripRouter",
    },
  },
};

// Write the app configuration to app.json
fs.writeFileSync("app.json", JSON.stringify(appConfig, null, 2));
