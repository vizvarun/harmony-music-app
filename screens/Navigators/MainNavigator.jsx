import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Home from "../Main/Home";

const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();

const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <LoginStack.Screen
      name="Login"
      component={Login}
      options={{
        headerLeft: () => (
          <Feather
            name="menu"
            size={25}
            backgroundColor="#fff"
            color="black"
            onPress={() => {}}
          />
        ),
      }}
    />
  </LoginStack.Navigator>
);

const SignupStackScreen = ({ navigation }) => (
  <SignupStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <SignupStack.Screen
      name="Details"
      component={Signup}
      options={{
        headerLeft: () => (
          <Feather
            name="menu"
            size={25}
            backgroundColor="#fff"
            color="black"
            onPress={() => {}}
          />
        ),
      }}
    />
  </SignupStack.Navigator>
);

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: "#e91e63",
    }}
  >
    <Tab.Screen
      name="Login"
      component={LoginStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Signup"
      component={SignupStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarIcon: ({ color, size }) => (
          <Feather name="bell" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
          <Feather name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
