import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import SettingsPage from "./screens/Settings";
import PageA from "./screens/PageA";
import PageB from "./screens/PageB";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar, View } from "react-native";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA24RLscEW3GsdcmZ0I0SrzSEuP5fc_0qY",
  authDomain: "harmony-music-app.firebaseapp.com",
  databaseURL: "https://harmony-music-app.firebaseio.com",
  projectId: "harmony-music-app",
  storageBucket: "harmony-music-app.appspot.com",
  messagingSenderId: "403211028232",
  appId: "1:403211028232:web:14183d3fa2e37304da4ebd",
  measurementId: "G-DDLJVJ69J9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default function App() {
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
