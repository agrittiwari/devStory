import { StyleSheet, Text } from "react-native";
import React from "react";
import { View } from "../../components/Themed";

const login = () => {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    >
      <Text style={styles.title}>Please login to read this in detail</Text>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
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
