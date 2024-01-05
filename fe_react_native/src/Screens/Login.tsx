import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import GoogleSvg from "../../assets/login/GoogleSvg";

const Login = () => {
  return (
    <ImageBackground
      source={require("../../assets/image/SplashScreen/splashScreenCrop.png")}
      style={styles.background}
    >
      <StatusBar style="light" />
      <View style={styles.heroLogo}>
        <View style={styles.test}>
          <Image
            style={styles.logo}
            source={require("../../assets/image/SplashScreen/logoBg.png")}
          />
          <Image
            style={styles.fontLogo}
            source={require("../../assets/image/SplashScreen/font-bg.png")}
          />
        </View>
        <View>
          <TouchableOpacity 
          onPress={()=>console.log("hello")}
          style={styles.loginButton}>
            <GoogleSvg />
            <Text style={styles.loginText}>sign in with google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 330,
    resizeMode: "contain",
  },
  heroLogo: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  fontLogo: {
    position: "absolute",
    width: 260,
    height: 200,
    left: 30,
    resizeMode: "contain",
  },
  loginButton: {
    // backgroundColor: "#0080ff",
    backgroundColor:"#318CE7",
    width: 300,
    paddingVertical: 12,
    marginTop: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row",
    gap: 10
  },
  //   loginContainer:{
  //       flex: 2,
  //       justifyContent: "center",
  //       alignItems: "center",
  //   },
  loginText: {
    fontSize: 20,
    textTransform: "capitalize",
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Acme-Regular",
    
  },
  test: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
});
