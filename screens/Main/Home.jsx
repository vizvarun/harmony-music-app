import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TitleBlock from "../../components/TitleBlock";
import Stories from "../../components/Stories";
const { width, height } = Dimensions.get("window");

export default function HomePage(props) {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock
          heroText="Timeline"
          subText="Hey there you just learned props"
        />
        <View style={styles.mainBlock}>
          <Stories />
        </View>
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
  stories: {
    flexDirection: "row",
    maxHeight: height / 8,
  },
});
