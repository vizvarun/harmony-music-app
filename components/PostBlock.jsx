import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function PostBlock(props) {
  const [playControl, setPlayControl] = useState(true);
  const handlePlayControl = () => {
    setPlayControl(!playControl);
  };
  return (
    <View>
      <View style={styles.postBlock}>
        <View style={styles.headPostBlock}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={console.log("Profile Image Pressed")}>
              <Image
                source={props.userImage}
                resizeMode="contain"
                style={styles.displayImage}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.nameText}>{props.fullName}</Text>
              <Text style={styles.usernameText}>{props.userName}</Text>
            </View>
          </View>
          <Text style={styles.timeText}>{props.uploadTime}</Text>
        </View>
        <View style={styles.postView}>
          <Image
            source={props.albumImage}
            resizeMode="contain"
            style={styles.post}
          />
          <View style={styles.playIcon}>
            <TouchableOpacity onPress={() => handlePlayControl()}>
              {playControl ? (
                <Image
                  source={require("../assets/playIcon.png")}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  source={require("../assets/pauseIcon.png")}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postBlock: {
    backgroundColor: "white",
    marginVertical: 7,
  },
  headPostBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#424242",
  },
  usernameText: {
    fontSize: 14,
    color: "#c4c4c4",
  },
  timeText: {
    margin: 20,
    marginHorizontal: width / 10,
    fontSize: 11,
    color: "#606060",
  },
  postView: {
    alignItems: "center",
  },
  post: {
    width: width / 1.25,
    height: width / 1.75,
    borderRadius: 25,
    margin: 10,
  },
  playIcon: {
    position: "absolute",
    top: width / 4.5,
  },
  displayImage: {
    width: width / 5,
    height: height / 15,
    marginVertical: 20,
    marginLeft: 20,
    borderRadius: width / 20,
  },
});
