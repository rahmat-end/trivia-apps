import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { StackActions } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { horizontalScale, verticalScale } from "../../themes/Metrixs";
import useAvatar from "../../hooks/useAvatar";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SplashScreen = ({ navigation }: { navigation: any }) => {
  const { saveDataUser } = useAvatar();
  const { dataUser } = useAppSelector((state: RootState) => state.dataUser);
  const [logo, setLogo] = useState(false);
  useEffect(() => {
    const cekDataUSer = async () => {
      try {
        const dataString = await AsyncStorage.getItem("dataUser");
        const payload = JSON.parse(dataString);
        console.log("payload displashscren",payload)
        if (payload=== undefined || payload=== null) {
          setTimeout(() => {
            navigation.dispatch(StackActions.replace("Login Screen"));
          }, 9000);
        } else {
          setTimeout(() => {
            navigation.dispatch(StackActions.replace("Start Game"));
          }, 9000);
        }
      } catch (error) {
        console.log(error);
      }
    }; 
    cekDataUSer();
    saveDataUser();
  }, []);

  const fadeIn = new Animated.Value(0);
  useEffect(() => {
    if (logo) {
      Animated.timing(fadeIn, {
        toValue: 1,
        duration: 8000, // Duration for the fade in (in milliseconds)
        useNativeDriver: true, // Add this line for performance optimization
      }).start();
    }
  }, [fadeIn, logo]);

  useEffect(() => {
    setInterval(() => {
      setLogo(true);
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/splashScreen.png")}
      style={styles.background}
    >
      {logo ? (
        <>
          <LottieView
            style={styles.logobg2}
            source={require("../../../assets/Animatiom/loadingdua.json")}
            autoPlay
          />
          <Image
            style={styles.fontLogo}
            source={require("../../../assets/BackgroundImage/newlogo.png")}
          />
        </>
      ) : (
        <LottieView
          style={styles.logobg}
          source={require("../../../assets/Animatiom/splashanimation.json")}
          autoPlay
        />
      )}
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  logobg: {
    width: horizontalScale(500),
    position: "absolute",
    height: verticalScale(500),
  },
  logobg2: {
    width: horizontalScale(300),
    position: "absolute",
    height: verticalScale(300),
  },

  fontLogo: {
    width: horizontalScale(200),
    height: verticalScale(200),
    resizeMode: "contain",
    position: "absolute",
    zIndex: 1,
  },
});
