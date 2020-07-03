import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import { TextInput, ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        username: val,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        username: val,
        check_textInputChange: false,
        isValidEmail: false,
        isValidUser: false,
      });
    }
  };

  const emailInputChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        email: val,
        check_emailInputChange: true,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_emailInputChange: false,
        isValidEmail: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const handleValidEmail = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidEmail: true,
      });
    } else {
      setData({
        ...data,
        isValidEmail: false,
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../../assets/loginImage.png")}
          style={styles.loginImage}
        />
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <View style={[styles.action, { marginTop: 20 }]}>
            <Feather
              name="user"
              size={18}
              color="white"
              style={{ marginTop: 4 }}
            />
            <TextInput
              placeholder="Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  size={16}
                  color="white"
                  style={{ marginTop: 4 }}
                />
              </Animatable.View>
            ) : null}
          </View>
          {/* {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )} */}
          <View style={[styles.action, { marginTop: 40 }]}>
            <Feather
              name="mail"
              size={18}
              color="white"
              style={{ marginTop: 4 }}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => emailInputChange(val)}
              onEndEditing={(e) => handleValidEmail(e.nativeEvent.text)}
            />
            {data.check_emailInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  name="check-circle"
                  size={16}
                  color="white"
                  style={{ marginTop: 4 }}
                />
              </Animatable.View>
            ) : null}
          </View>
          {/* {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )} */}
          <View style={[styles.action, { marginTop: 40 }]}>
            <Feather
              name="lock"
              size={18}
              color="white"
              style={{ marginTop: 4 }}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInput}
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather
                  name="eye-off"
                  size={14}
                  color="white"
                  style={{ marginTop: 4 }}
                />
              ) : (
                <Feather
                  name="eye"
                  size={14}
                  color="white"
                  style={{ marginTop: 4 }}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be of atleast 6 characters.
            </Text> 
          </Animatable.View>
        )} */}
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  backgroundColor: "white",
                  marginTop: width / 7.5,
                  borderRadius: 50,
                },
              ]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "black",
                  },
                ]}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 25,
            }}
          >
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: "white",
                  borderWidth: 2,
                  marginTop: width / 15,
                  borderRadius: 50,
                },
              ]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "white",
                  },
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 3.5,
    margin: width / 10,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 10,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    color: "white",
    fontFamily: "OswaldRegular",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  signIn: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: width / 1.85,
  },
  textSign: {
    fontSize: 15,
    color: "#000",
    fontFamily: "OswaldSemiBold",
    textTransform: "uppercase",
  },

  loginImage: {
    width: "100%",
    height: "100%",
  },
});
