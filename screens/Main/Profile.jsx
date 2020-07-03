import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TitleBlock from "../../components/TitleBlock";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../components/Header";
import MainNavigator from "../Navigators/MainNavigator";

export default function Profile({ navigation }) {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock
          heroText="Profile"
          subText="Hey there you just learned props"
        />
        <View style={styles.mainBlock}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text>Hi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
