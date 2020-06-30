import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TitleBlock from "../../components/TitleBlock";

export default function AddPost() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock heroText="Add Post" subText="This is the add post page" />
        <View style={styles.mainBlock}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
