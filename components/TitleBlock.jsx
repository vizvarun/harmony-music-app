import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function TitleBlock(props) {
  return (
    <View style={styles.container}>
      <View style={styles.headBlock}>
        <View style={styles.headTextBlock}>
          <Text style={styles.heroText}>{props.heroText}</Text>
          <Text style={styles.subText}>{props.subText}</Text>
        </View>
        <TouchableOpacity onPress={console.log("Profile Image Pressed")}>
          <Image
            source={require("../assets/charlie.png")}
            resizeMode="contain"
            style={styles.displayImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headTextBlock: {
    marginHorizontal: 16,
    marginVertical: 14,
    width: width / 1.5,
  },
  headBlock: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heroText: {
    fontSize: 24,
    color: "#424242",
    fontFamily: "OswaldBold",
  },
  subText: {
    fontSize: 14,
    color: "#c4c4c4",
    fontFamily: "OswaldRegular",
  },
  displayImage: {
    width: width / 5,
    height: height / 15,
    borderRadius: width / 20,
    marginVertical: 15,
  },
});
