import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import MainNavigator from "../screens/Navigators/MainNavigator";
import TitleBlock from "./TitleBlock";

export default function LoggedInDashboard() {
  return (
    <>
      <Header />
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({});
