import { Pressable, StyleSheet } from "react-native";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { H1, H2 } from "../components/basic/StyledText";
import { View } from "../components/basic/Themed";
import { Link } from "expo-router";
import TriggersList from "../components/Composite/Lists/TriggersList";

export default function Page() {
  return (
    <Auth0Provider
      domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN || ""}
      clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID || ""}
    >
      <View style={styles.container}>
        <View style={styles.container}>
          <TriggersList />
        </View>
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
