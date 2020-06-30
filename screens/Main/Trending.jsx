import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TitleBlock from "../../components/TitleBlock";

export default function Trending() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock heroText="Trending" subText="This is the trending page" />
        <View style={styles.mainBlock}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
