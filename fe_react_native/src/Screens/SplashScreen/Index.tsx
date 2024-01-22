import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { useEffect } from "react";
import { StackActions } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { horizontalScale, verticalScale } from "../../themes/Metrixs";
const SplashScreen = ({ navigation }: { navigation: any }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("Login Screen"));
    }, 5000);
  },[]);

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/splashScreen.png")}
      style={styles.background}
    >
      <Image
        style={styles.fontLogo}
        source={require("../../../assets/BackgroundImage/logo.png")}
      />

      <LottieView
        style={styles.logobg}
        source={require("../../../assets/Animatiom/splashanimation.json")}
        autoPlay
        loop
      />
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logobg: {
    width: horizontalScale(500),
    position: "absolute",

    height: verticalScale(500),
  },

  fontLogo: {
    width:horizontalScale(260),
    height:verticalScale(200),
    resizeMode: "contain",
    zIndex: 1,
  },
});
