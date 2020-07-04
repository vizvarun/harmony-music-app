import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

export default function VideoPost(props) {
  const [playControl, setPlayControl] = useState(true);
  const handlePlayControl = () => {
    setPlayControl(!playControl);
  };
  return (
    <View>
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
  );
}

const styles = StyleSheet.create({
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
});
