import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
const { width, height } = Dimensions.get("window");

const illustrations = [
  { id: 4, source: require("../assets/marshmellow.png") },
  { id: 3, source: require("../assets/malone.png") },
  { id: 2, source: require("../assets/charlie.png") },
  { id: 6, source: require("../assets/imaginedragons.png") },
  { id: 7, source: require("../assets/tonesAndI.png") },
  { id: 1, source: require("../assets/shawn.png") },
  { id: 5, source: require("../assets/djsnake.png") },
];

export default function Stories(props) {
  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        data={illustrations}
        keyExtractor={(item, index) => `${item.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              source={item.source}
              resizeMode="contain"
              style={styles.storyImage}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  storyImage: {
    height: height / 10,
    width: width / 5,
    marginHorizontal: 6,
    marginTop: 12,
    marginBottom: 6,
    borderRadius: width / 24,
  },
});
