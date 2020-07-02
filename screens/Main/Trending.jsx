import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import TitleBlock from "../../components/TitleBlock";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from "@expo/vector-icons";
import Music from "../TrendingPages/Music";
import Instrumental from "../TrendingPages/Instrumental";
import MostShared from "../TrendingPages/MostShared";
import MostAppreciated from "../TrendingPages/MostAppreciated";


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Music"
      tabBarOptions={{
        activeTintColor: "#fff",
        showIcon: true,
        showLabel: false,
        style: { backgroundColor: "black" },
        indicatorStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Music"
        component={Music}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="headphones" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Instrumental"
        component={Instrumental}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="speaker" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="MostShared"
        component={MostShared}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="share-2" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="MostAppreciated"
        component={MostAppreciated}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="smile" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Trending() {
  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TitleBlock heroText="Trending" subText="This is the trending page" />
        <MyTabs />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
