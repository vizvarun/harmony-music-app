import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import MainNavigator from "../Navigators/MainNavigator";
const { width, height } = Dimensions.get("window");

export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.headBlock}>
          <View style={styles.headTextBlock}>
            <Text style={styles.heroText}>Timeline</Text>
            <Text style={styles.subText}>
              Check out what’s going on around you
            </Text>
          </View>
          <TouchableOpacity onPress={console.log("Profile Image Pressed")}>
            <Image
              source={require("../../assets/display.jpeg")}
              resizeMode="contain"
              style={styles.displayImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.mainBlock}></View>
      </ScrollView>
    </>
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
  },
  headBlock: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  heroText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#424242",
  },
  subText: {
    fontSize: 14,
    color: "#c4c4c4",
  },
  displayImage: {
    width: width / 5,
    height: height / 15,
    marginLeft: width / 12,
    borderRadius: width / 20,
    marginVertical: 15,
  },
  mainBlock: {
    height: height * 2,
    backgroundColor: "#f0f0f0",
  },
});
