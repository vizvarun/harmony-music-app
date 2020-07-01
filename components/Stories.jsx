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
  { id: 1, source: require("../assets/display.jpeg") },
  { id: 2, source: require("../assets/display.jpeg") },
  { id: 3, source: require("../assets/display.jpeg") },
  { id: 4, source: require("../assets/display.jpeg") },
  { id: 5, source: require("../assets/display.jpeg") },
  { id: 6, source: require("../assets/display.jpeg") },
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
    marginVertical: 12,
    borderRadius: width / 24,
  },
});
