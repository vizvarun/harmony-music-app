import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons';


export default function MediaContent() {
  return (
    <View style={styles.container}>
      <View style={styles.media}>
        <ImageBackground
          source={require("../assets/loginImage3.png")}
          style={styles.image}
          resizeMode="cover"
        >
          <TouchableOpacity style={styles.playBtn}>
          <FontAwesome5 name="play" size={24} color="white" />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.content}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  media: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    margin: 20,
  },
  content: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    height: 120,
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  playBtn:{
    alignItems: "center",
    padding: 50,
  },
});
