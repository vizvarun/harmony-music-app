import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Onboarding Screen 1</Text>
      <Button
        title="Go to Page Number 1"
        onPress={() => navigation.navigate("PageA")}
      />
    </View>
  );
};

export default Home;
