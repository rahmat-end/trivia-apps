import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import "expo-dev-client";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes/Metrixs";
import LottieView from "lottie-react-native";
import useLogin from "../../hooks/useLogin";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";

const Login = ({ navigation }: { navigation: any }) => {
  const { submitLogin, initializing } = useLogin();
  const { user } = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.token) {
      navigation.navigate("Choose Avatar");
    }
  }, [user, submitLogin]);

  // if (initializing && !user.token) {
  //   return (
  //     <ImageBackground
  //     source={require("../../../assets/BackgroundImage/splashScreen.png")}
  //     style={styles.backgroundLoading}
  //   >
  //     <View style={styles.animationContainer}>
  //       <LottieView
  //         source={require("../../../assets/Animatiom/loading.json")}
  //         loop
  //         autoPlay
  //         style={styles.animationlogo}
  //       />
  //     </View>
  //     </ImageBackground>
  //   );
  // }

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/splashScreen.png")}
      style={styles.background}
    >
      <StatusBar style="light" />
      <View style={styles.heroLogo}>
        <View>
          <TouchableOpacity
            onPress={() => submitLogin()}
            style={styles.loginButton}
          >
            <Image
              source={require("../../../assets/LogoAction/google-color-svgrepo-com.png")}
              style={styles.logo}
            />
            <Text style={styles.loginText}>sign in with google</Text>
          </TouchableOpacity>
        </View>
        {initializing && !user.token ? (
          <View style={styles.animationContainer}>
            <LottieView
              source={require("../../../assets/Animatiom/loading.json")}
              loop
              autoPlay
              style={styles.animationlogo}
            />
          </View>
        ) : null}
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
    width: horizontalScale(30),
    height: verticalScale(33),
    resizeMode: "contain",
  },
  animationContainer: {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  animationlogo: {
    width: horizontalScale(200),
    height: verticalScale(200),
  },
  heroLogo: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  loginButton: {
    backgroundColor: "white",
    width: horizontalScale(300),
    paddingVertical: verticalScale(12),
    marginTop: verticalScale(300),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  loginText: {
    fontSize: moderateScale(16),
    textTransform: "capitalize",
    color: "black",
    fontWeight: "bold",
  },
});
