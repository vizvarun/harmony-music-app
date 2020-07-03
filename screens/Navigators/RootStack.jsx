import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainNavigator from "./MainNavigator";
import Profile from "../Main/Profile";
import LoggedInDashboard from "../../components/LoggedInDashboard";
import TitleBlock from "../../components/TitleBlock";
import Header from "../../components/Header";

const Stack = createStackNavigator();

const RootStack = ({ navigation }) => (
  <Stack.Navigator
    initialRouteName="Main"
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Main" component={LoggedInDashboard} />
    <Stack.Screen name="Title" component={TitleBlock} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Header" component={Header} />
  </Stack.Navigator>
);

export default RootStack;
