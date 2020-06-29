import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import SwiperFlatList from "react-native-swiper-flatlist";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Onboarding() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SwiperFlatList
          autoplay={true}
          autoplayDelay={2}
          autoplayLoop={true}
          index={0}
          showPagination
          paginationDefaultColor="#c4c4c4"
          paginationActiveColor="#000"
          paginationStyleItem={{
            width: 10,
            height: 10,
          }}
        >
          <View style={styles.child}>
            <Image
              source={require("../../assets/illustration1.png")}
              resizeMode="contain"
              style={styles.illustrations}
            />
          </View>
          <View style={styles.child}>
            <Image
              source={require("../../assets/illustration2.png")}
              resizeMode="contain"
              style={styles.illustrations}
            />
          </View>
          <View style={styles.child}>
            <Image
              source={require("../../assets/illustration3.png")}
              resizeMode="contain"
              style={styles.illustrations}
            />
          </View>
        </SwiperFlatList>
      </View>
      <View style={styles.footer}>
        <Text style={styles.heroText}>Lorem ipsum dolor sit</Text>
        <Text style={styles.subText}>
          Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit
          Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit Lorem Ipsum Dolor Sit
          Lorem Ipsum Dolor Sit
        </Text>
        <TouchableOpacity style={styles.btnNext}>
          <Text style={styles.btnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1.1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: height / 25,
  },
  footer: {
    flex: 1,
    backgroundColor: "#000000",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  child: {
    height: height * 0.5,
    width,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrations: {
    width: width / 1.25,
  },
  heroText: {
    color: "white",
    width: width / 1.75,
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 35,
    marginVertical: 10,
    marginTop: 50,
  },
  subText: {
    color: "#f4f4f4",
    fontSize: 14,
    width: width / 1.4,
    marginHorizontal: 35,
    marginVertical: 10,
  },
  btnNext: {
    backgroundColor: "white",
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60,
    marginHorizontal: width / 1.75,
    marginTop: 40,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});
