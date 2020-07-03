import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TitleBlock from "../../components/TitleBlock";


export default function Search() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock heroText="Search" subText="This is the search page" />
        <View style={styles.mainBlock}>
         
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
