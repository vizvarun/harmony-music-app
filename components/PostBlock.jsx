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
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

export default function PostBlock(props) {
  const [playControl, setPlayControl] = useState(true);
  const handlePlayControl = () => {
    setPlayControl(!playControl);
  };
  const [smileControl, setSmileControl] = useState(true);
  const handleSmileControl = () => {
    setSmileControl(!smileControl);
    props.appreHandler(props.id, smileControl);
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
        <View style={styles.detailsBlock}>
          <View style={styles.appreciationsBlock}>
            <TouchableOpacity onPress={() => handleSmileControl()}>
              {smileControl ? (
                <Feather name="smile" size={24} color="gray" />
              ) : (
                <Animatable.Image
                  animation="rubberBand"
                  duration={1500}
                  source={require("../assets/smile.png")}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
            <Text style={styles.appreciationText}>
              {props.appreciations} appreciations
            </Text>
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
    color: "#424242",
    fontFamily: "OswaldSemiBold",
  },
  usernameText: {
    fontSize: 14,
    color: "#c4c4c4",
    fontFamily: "OswaldRegular",
  },
  timeText: {
    margin: 20,
    marginHorizontal: width / 10,
    fontSize: 11,
    color: "#606060",
    fontFamily: "OswaldRegular",
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
  detailsBlock: {
    justifyContent: "center",
    marginVertical: 10,
    marginBottom: 20,
    marginLeft: width / 10,
  },
  appreciationsBlock: {
    flexDirection: "row",
  },
  appreciationText: {
    fontFamily: "OswaldRegular",
    color: "gray",
    marginHorizontal: 10,
    fontSize: 15,
  },
});
