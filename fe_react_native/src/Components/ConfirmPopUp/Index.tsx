import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../themes/Metrixs";
import LottieView from "lottie-react-native";
import Button from "../Button/Index";
import { useAppSelector } from "../../Redux/hooks";
type PropsConfirm = {
    navigation: any
    setVisible: any
}

const ConfirmPopUp = ({navigation,}: PropsConfirm) => {
  const [visible, setVisible] = useState(false);
  const user= useAppSelector((state: any) => state.user.user.displayName);
  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 2000);
  });
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Congratulation {user}</Text>
      <Text style={styles.text}>your account was created</Text>
      {!visible && (
        <LottieView
          style={styles.lottie}
          autoPlay
          source={require("../../../assets/Animatiom/congratulation.json")}
        />
      )}
      <Image
        style={styles.image}
        source={require("../../../assets/LogoAction/verified-svgrepo-com.png")}
      />

      <TouchableOpacity
      onPress={() => navigation.navigate("Start Game")}
      style={styles.buttoncontainer}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConfirmPopUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    padding: moderateScale(20),
  },
  header: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
  text: {
    fontSize: moderateScale(15),
    marginBottom: verticalScale(10),
    textTransform: "capitalize",
  },
  button: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "white",
  },
  buttoncontainer: {
    width: horizontalScale(200),
    height: verticalScale(50),
    marginTop: verticalScale(40),
    backgroundColor: "#45b625",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(10),
  },
  image: {
    width: horizontalScale(80),
    height: verticalScale(80),
    marginTop: verticalScale(20),
    resizeMode: "contain",
  },
  lottie: {
    width: horizontalScale(300),
    height: verticalScale(300),
    position: "absolute",
  },
});
