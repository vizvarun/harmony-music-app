import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
} from "react-native";
import TitleBlock from "../../components/TitleBlock";
import Stories from "../../components/Stories";
import PostBlock from "../../components/PostBlock";
const { width, height } = Dimensions.get("window");

const fullName = ["Tones and I"];
const userName = ["@tonesandi"];
const uploadTime = ["3 hrs ago"];

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
          <PostBlock
            fullName="Tones and I"
            userName="@tonesandi"
            uploadTime="3 hrs ago"
            userImage={require("../../assets/tonesAndI.png")}
            albumImage={require("../../assets/dp2.jpg")}
          />
          <PostBlock
            fullName="DJ Snake"
            userName="@djsnake"
            userImage={require("../../assets/djsnake.png")}
            uploadTime="5 hrs ago"
            albumImage={require("../../assets/album.png")}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
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
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: width / 20,
  },
  mainBlock: {},
  stories: {
    flexDirection: "row",
    maxHeight: height / 8,
  },
});
