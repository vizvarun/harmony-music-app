import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TitleBlock from "../../components/TitleBlock";

export default function Smiles() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock
          heroText="Appreciations"
          subText="This is the appreciations page"
        />
        <View style={styles.mainBlock}></View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
