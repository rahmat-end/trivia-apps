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
import AlertPopUp from "../../Components/AlertPopUp/Index";

const Login = ({ navigation }: { navigation: any }) => {
  const { submitLogin, initializing, errorMessage, handleLogout, loginGolang, loginLaravel } = useLogin();
const {dataUser} = useAppSelector((state: RootState) => state.dataUser);
  const [visible, setvisible] = useState(false);

  useEffect(() => {
    if (dataUser.token) {
      navigation.navigate("Choose Avatar");
    }
  }, [dataUser])

  useEffect(() => {
    if (errorMessage) {
      setvisible(true);
    }
  }, [errorMessage, setvisible]);

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/splashScreen.png")}
      style={styles.background}
    >
      <StatusBar style="light" />
      <View style={styles.heroLogo}>
        {
          visible?
        <View style={styles.containerconfirm}>
          <AlertPopUp alertText={errorMessage} alertVisible={setvisible} />
        </View>:
        <>
        <View>
          
          <TouchableOpacity
            onPress={() =>loginGolang()}
            style={styles.loginButton}
          >
            <Image
              source={require("../../../assets/LogoAction/google-color-svgrepo-com.png")}
              style={styles.logo}
            />
            <Text style={styles.loginText}>sign in with google</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
        onPress={()=>handleLogout()}
        >
          <Text>Logoout</Text>
        </TouchableOpacity> */}
        </>
        }
        {initializing? (
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
  containerPopUp: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItem: "center",
  },
  animationContainer: {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 60,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  animationlogo: {
    width: horizontalScale(100),
    height: verticalScale(100),
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
  containerconfirm: {
    width: horizontalScale(300),
    height: verticalScale(300),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
  },
});
