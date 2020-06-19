import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PageA = () => {
  return (
    <View style={styles.container}>
      <View style={styles.first} />
      <View style={styles.second} />
    </View>
  );
};

export default PageA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  first: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "95%",
    height: "100%",
  },
  second: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#16515f",
  },
});
