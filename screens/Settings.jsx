import React from "react";
import { View, Text, Button } from "react-native";

const SettingsPage = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Settings screen</Text>
      <Button
        title="Go to Page B"
        onPress={() => navigation.navigate("PageB")}
      />
    </View>
  );
};

export default SettingsPage;
