import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "react-native";
import * as firebase from "firebase";
import MainNavigator from "./screens/Navigators/MainNavigator";
import Header from "./components/Header";
{
  /*
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

*/
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Onboarding" component={Onboarding} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="MenuTab" component={MainNavigator} />
      </Drawer.Navigator> */}
      <Header />
      <MainNavigator />
    </NavigationContainer>
  );
}
