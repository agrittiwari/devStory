import { Pressable, StyleSheet } from "react-native";
import { H1, H2 } from "../components/basic/StyledText";
import { View } from "../components/basic/Themed";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <H2>hello World</H2>
      <Link href="/2tabs/" asChild>
        <Pressable>
          <H1>Press me</H1>
        </Pressable>
      </Link>
    </View>
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
