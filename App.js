import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import * as firebase from "firebase";
import LoggedInDashboard from "./components/LoggedInDashboard";
import Onboarding from "./screens/Onboarding/Onboarding";
import Login from "./screens/Authentication/Login";
import Signup from "./screens/Authentication/Signup";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

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
const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OswaldBold: require("./assets/Oswald-Bold.ttf"),
    OswaldSemiBold: require("./assets/Oswald-SemiBold.ttf"),
    OswaldRegular: require("./assets/Oswald-Regular.ttf"),
    OswaldMedium: require("./assets/Oswald-Medium.ttf"),
    OswaldLight: require("./assets/Oswald-Light.ttf"),
    OswaldExtraLight: require("./assets/Oswald-ExtraLight.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        {/* <Drawer.Navigator>
        <Drawer.Screen name="Onboarding" component={Onboarding} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Home" component={HomePage} />
      </Drawer.Navigator> */}
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={LoggedInDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
