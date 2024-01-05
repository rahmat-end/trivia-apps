import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/image/SplashScreen/splashScreenCrop.png")}
      style={styles.background}
    >
      <View style={styles.heroLogo}>
        <Image
          style={styles.logo}
          source={require("../../assets/image/SplashScreen/logoBg.png")}
        />
        <Image
          style={styles.fontLogo}
          source={require("../../assets/image/SplashScreen/font-bg.png")}
        />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
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
  },
  fontLogo: {
    position: "absolute",
    width: 260,
    height: 200,
    left: 90,
    resizeMode: "contain",
  },
});
