import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
// import { captureSentryException } from "sentry_telemetry/sentryLogger";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  // load fonts
  const [fontsLoaded] = Font.useFonts({
    "Freight-regular": require("../assets/fonts/FreightSansProBlack-Italic.ttf"),
  });
  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load icons
        await Font.loadAsync({
          ...MaterialIcons.font,
          ...Ionicons.font,
          ...MaterialCommunityIcons.font,
        });
      } catch (error) {
        // We might want to provide this error information to an error reporting service
        // captureSentryException("Splash Screen error", error as any);
        console.warn(error);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete && fontsLoaded;
}
