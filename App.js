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
import { StatusBar } from "react-native";
import * as firebase from "firebase";
import Onboarding from "./screens/Onboarding/Onboarding";
import Login from "./screens/Authentication/Login";
import Signup from "./screens/Authentication/Signup";
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

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="PageA" component={PageA} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsPage} />
      <SettingsStack.Screen name="PageB" component={PageB} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <MaterialCommunityIcons name={iconName} size={24} color={color} />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "black",
        inactiveTintColor: "gray",
        activeBackgroundColor: "#f4f4f4",
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#1D1C27" />
      <Drawer.Navigator>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Onboarding" component={Onboarding} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
