import "expo-dev-client";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PostHogProvider } from "posthog-react-native";
import { useFonts } from "expo-font";
import {
  Link,
  SplashScreen,
  Stack,
  Tabs,
  useNavigationContainerRef,
} from "expo-router";
import { Drawer } from "expo-router/drawer";
import * as Sentry from "@sentry/react-native";
import { useEffect } from "react";
import { Platform, useColorScheme, Pressable } from "react-native";
import { H1, H2 } from "../components/basic/StyledText";
// import TabLayout from "./(2tabs)/_layout";
import Colors from "../constants/Colors";
import Icon from "../components/basic/Icon";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { config } from "../utils/config";
import { Text } from "../components/Themed";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: "(2tabs)",
// };

// Construct a new instrumentation instance. This is needed to communicate between the integration and React
const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

Sentry.init({
  dsn: config.sentryDsn,
  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
  integrations: [
    new Sentry.ReactNativeTracing({
      // Pass instrumentation to be used as `routingInstrumentation`
      routingInstrumentation,
      // ...
    }),
  ],
});

function RootLayout() {
  const ref = useNavigationContainerRef();

  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (ref) {
      routingInstrumentation.registerNavigationContainer(ref);
    }
    if (error) throw error;
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [ref, error, loaded]);

  if (!loaded) {
    return null;
  }
  if (Platform.OS === "android" || Platform.OS === "ios") {
    return (
      <PostHogProvider
        apiKey={config.postHogApiKey}
        options={{
          host: "https://app.posthog.com",
        }}
      >
        <TabLayout />
      </PostHogProvider>
    );
  }
  return (
    <PostHogProvider
      apiKey={config.postHogApiKey}
      options={{
        host: "https://app.posthog.com",
      }}
    >
      <RootLayoutNav />
    </PostHogProvider>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="/feed"
      screenOptions={{
        tabBarActiveTintColor: Colors["light"].tint,
        tabBarActiveBackgroundColor: "black",
        tabBarShowLabel: false,
        headerRight: () => (
          <Link href="/notifications/" asChild>
            <Pressable>
              {({ pressed }) => (
                <Icon
                  iconName="notifications"
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          headerTitle: "",
          tabBarLabel: "Feed",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, focused, size }) => (
            <>
              <Icon iconName="home" color={focused ? "white" : "black"} />
              <Text style={{ color: focused ? "white" : "black" }}>Home</Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          headerTitle: "",
          tabBarLabel: "Projects",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => (
            <>
              <Icon iconName="work" color={focused ? "white" : "black"} />

              <Text style={{ color: focused ? "white" : "black" }}>
                Projects
              </Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="stream"
        options={{
          headerTitle: "",
          tabBarLabel: "Streaming",
          tabBarShowLabel: false,

          tabBarIcon: ({ color, focused, size }) => (
            <>
              <Icon iconName="stream" color={focused ? "white" : "black"} />
              <Text style={{ color: focused ? "white" : "black" }}>Stream</Text>
            </>
          ),
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          headerTitle: "",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, focused, size }) => (
            <>
              <Icon iconName="groups" color={focused ? "white" : "black"} />
              <Text style={{ color: focused ? "white" : "black" }}>
                Community
              </Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "",
          tabBarShowLabel: false,

          tabBarLabel: "Profile",
          tabBarIcon: ({ color, focused, size }) => (
            <>
              <Icon
                iconName="account-circle"
                color={focused ? "white" : "black"}
              />
              <Text style={{ color: focused ? "white" : "black" }}>
                Account
              </Text>
            </>
          ),
        }}
      />

      <Tabs.Screen name="notifications" options={{ href: null }} />
    </Tabs>
  );
}

// Wrap the Root Layout route component with `Sentry.wrap` to capture gesture info and profiling data.
export default Sentry.wrap(RootLayout);
