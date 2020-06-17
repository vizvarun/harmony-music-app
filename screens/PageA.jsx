import React from "react";
import { View, Text } from "react-native";

const PageA = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>This is Page 1</Text>
    </View>
  );
};

export default PageA;
