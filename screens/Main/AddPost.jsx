import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TitleBlock from "../../components/TitleBlock";
import ImagePickerExample from "../../components/ImagePicker";

export default function AddPost() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock heroText="Add Post" subText="This is the add post page" />
        <View style={styles.mainBlock}>
        <ImagePickerExample />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
