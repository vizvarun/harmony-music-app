import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import Home from "../Main/Home";
import Trending from "../Main/Trending";
import AddPost from "../Main/AddPost";
import Smiles from "../Main/Smiles";
import Search from "../Main/Search";
import { AddButton } from "../../components/AddButton";

const HomeStack = createStackNavigator();
const TrendingStack = createStackNavigator();
const AddPostStack = createStackNavigator();
const SmilesStack = createStackNavigator();
const SearchStack = createStackNavigator();

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
      name="Details"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
  </HomeStack.Navigator>
);

const TrendingStackScreen = ({ navigation }) => (
  <TrendingStack.Navigator
  // screenOptions={{
  //   headerStyle: {
  //     backgroundColor: "#fff",
  //   },
  //   headerTitleStyle: {
  //     fontWeight: "bold",
  //   },
  // }}
  >
    <TrendingStack.Screen
      name="Details"
      component={Trending}
      options={{
        headerShown: false,
      }}
    />
  </TrendingStack.Navigator>
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
      name="Details"
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
      name="Details"
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
      name="Details"
      component={Search}
      options={{
        headerShown: false,
      }}
    />
  </SearchStack.Navigator>
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
      name="Trending"
      component={TrendingStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <SimpleLineIcons name="fire" color={color} size={22} />
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
      name="Search"
      component={SearchStackScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="search" color={color} size={size} />
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
