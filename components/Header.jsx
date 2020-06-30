import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={styles.logoImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: height / 12,
  },
  logoImage: {
    width: width / 3.5,
    marginHorizontal: width / 25,
  },
});
