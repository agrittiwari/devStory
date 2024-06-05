export default {
  expo: {
    name: "DevStory",
    slug: "devStory",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "devstory",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.agrittiwari.devStory",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.agrittiwari.devStory",
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",

      [
        "expo-font",
        {
          fonts: [
            "./assets/fonts/Ionicons.ttf",
            "./assets/fonts/FreightSansProBlack-Italic.ttf",
            "./assets/fonts/FreightSansProBlack-Regular.ttf",
            "./assets/fonts/FreightSansProBold-Italic.ttf",
            "./assets/fonts/FreightSansProBold-Regular.ttf",
            "./assets/fonts/FreightSansProBook-Italic.ttf",
            "./assets/fonts/FreightSansProBook-Regular.ttf",
            "./assets/fonts/FreightSansProLight-Italic.ttf",
            "./assets/fonts/FreightSansProLight-Regular.ttf",
            "./assets/fonts/FreightSansProMedium-Italic.ttf",
            "./assets/fonts/FreightSansProMedium-Regular.ttf",
            "./assets/fonts/FreightSansProSemibold-Italic.ttf",
            "./assets/fonts/FreightSansProSemibold-Regular.ttf",
          ],
        },
      ],
      [
        "react-native-vision-camera",
        {
          cameraPermissionText: "$(PRODUCT_NAME) needs access to your Camera.",
          enableMicrophonePermission: true,
          microphonePermissionText:
            "$(PRODUCT_NAME) needs access to your Microphone.",
        },
      ],
      [
        "react-native-auth0",
        {
          domain: "dev-r1jw7y2x.us.auth0.com",
        },
      ],
      [
        "@sentry/react-native/expo",
        {
          organization: "agrittiwari",
          project: "devstory-client",
        },
      ],
      "expo-localization",
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "beb84b47-8063-4824-8521-a7e7322a3b04",
      },
    },
    owner: "agrittiwari",
  },
};
