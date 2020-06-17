import * as React from "react";
import { StatusBar, View, Text } from "react-native";
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

export default function App() {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f4f4"/>
      <Text>Hello World</Text>
    </View>
  );
}
