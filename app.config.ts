import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "UniLend",
  slug: "UniLend",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/splash-icon.jpg",
  scheme: "unilend",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/splash-icon.jpg",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    package: "com.team12.UniLend",
    googleServicesFile:
      process.env.GOOGLE_SERVICES_JSON ?? "./google-services.json",
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/splash-icon.jpg",
  },
  plugins: [[
        "expo-image-picker",
        {
          "photosPermission": "The app accesses your photos to let you share them with your friends."
        }
      ],
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.jpg",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    "@react-native-firebase/app",
    "@react-native-firebase/auth",
    "@react-native-firebase/crashlytics",
    [
      "expo-font",
      {
        fonts: [
          "./assets/fonts/Amiri-Bold.ttf",
          "./assets/fonts/Amiri-BoldItalic.ttf",
          "./assets/fonts/Amiri-Italic.ttf",
          "./assets/fonts/Amiri-Regular.ttf",
          "./assets/fonts/SpaceMono-Regular.ttf",
          "./assets/fonts/Rosarivo-Regular.ttf",
          "./assets/fonts/Rosarivo-Italic.ttf"
        ],
        android: {
          fonts: [
            {
              fontFamily: "Amiri",
              fontDefinitions: [
                {
                  path: "./assets/fonts/Amiri-Regular.ttf",
                  weight: 500
                },
                {
                  path: "./assets/fonts/Amiri-Bold.ttf",
                  weight: 700,
                },
                {
                  path: "./assets/fonts/Amiri-Italic.ttf",
                  style: "italic",
                  weight: 500
                },
                {
                  path: "./assets/fonts/Amiri-BoldItalic.ttf",
                  weight: 700,
                  style: "italic",
                },
              ],
            },{
              fontFamily: "Rosarivo",
              fontDefinitions: [
                {
                  path: "./assets/fonts/Rosarivo-Regular.ttf",
                  weight: 500
                },
                {
                  path: "./assets/fonts/Rosarivo-Italic.ttf",
                  style: "italic",
                  weight: 500
                },
              ],
            },
            {
              fontFamily: "SpaceMono",
              fontDefinitions: [
                { 
                  path: "./assets/fonts/SpaceMono-Regular.ttf",
                  weight: 500
                },
              ],
            },
          ],
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    router: {},
    eas: {
      projectId: "e6238532-3597-4849-8de9-f0b891a43de8",
    },
  },
});
