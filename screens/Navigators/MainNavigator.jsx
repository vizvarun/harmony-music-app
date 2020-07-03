import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Home from "../Main/Home";
import AddPost from "../Main/AddPost";
import Smiles from "../Main/Smiles";
import Search from "../Main/Search";
import Profile from "../Main/Profile";

const HomeStack = createStackNavigator();
const AddPostStack = createStackNavigator();
const SmilesStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const AddPostStackScreen = ({ navigation }) => (
  <AddPostStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <AddPostStack.Screen
      name="AddPost"
      component={AddPost}
      options={{
        headerShown: false,
      }}
    />
  </AddPostStack.Navigator>
);

const SmilesStackScreen = ({ navigation }) => (
  <SmilesStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <SmilesStack.Screen
      name="Smiles"
      component={Smiles}
      options={{
        headerShown: false,
      }}
    />
  </SmilesStack.Navigator>
);

const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <SearchStack.Screen
      name="Search"
      component={Search}
      options={{
        headerShown: false,
      }}
    />
  </SearchStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: "white",
      inactiveTintColor: "#727272",
      showLabel: false,
      inactiveBackgroundColor: "black",
      activeBackgroundColor: "black",
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="AddPost"
      component={AddPostStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="plus-circle" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Smiles"
      component={SmilesStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="smile" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;

const styles = StyleSheet.create({
  bottomTabBar: {
    backgroundColor: "black",
  },
});
