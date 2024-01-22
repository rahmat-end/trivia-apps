import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import { findPeople } from "../../services/avatar";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../themes/Metrixs";
import { useEffect } from "react";
import { StackActions } from "@react-navigation/native";
const FindPeople = ({ navigation }: { navigation: any }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.dispatch(StackActions.replace("Lets Play"));
  //   }, 5000);
  // },[]);
  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/bgfindpeople.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.AnimationContainer}>
          <LottieView
            style={styles.findingAnimation}
            source={require("../../../assets/Animatiom/findingPeople.json")}
            autoPlay
            loop
          />
        </View>
        <StatusBar style="light" />
        <Text style={styles.textTimer}>00:15</Text>
        <Text style={styles.textTitle}>Finding Opponent...</Text>
        {findPeople.map((item: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                top:
                  index === 0
                    ? 300
                    : index === 1
                    ? 250
                    : index === 2
                    ? 320
                    : 390,
                left:
                  index === 0
                    ? 180
                    : index === 1
                    ? 100
                    : index === 2
                    ? 320
                    : 10,
                bottom: index === 2 ? 10 : index === 1 ? 10 : null,
              }}
            >
              <TouchableOpacity>
                <View style={styles.coverAvatar}>
                  <Image
                    style={styles.Avatar}
                    source={require(`../../../assets/Avatar/avatar.png`)}
                  />
                </View>
              </TouchableOpacity>
              <Text style={styles.textName}>{item.name}</Text>
            </View>
          );
        })}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Start Game")}>
        <LottieView
          style={styles.backButton}
          source={require("../../../assets/Animatiom/backanimation.json")}
          autoPlay
          loop
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default FindPeople;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  textTimer: {
    color: "white",
    fontSize: moderateScale(50),
    fontWeight: "bold",
    zIndex: 1,
  },
  textTitle: {
    color: "white",
    zIndex: 1,
  },
  textName: {
    color: "white",
    textTransform: "capitalize",
    fontSize: moderateScale(15),
    fontWeight: "bold",
    zIndex: 1,
  },
  AnimationContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  findingAnimation: {
    width: horizontalScale(600),
    height: verticalScale(600),
  },
  Avatar: {
    width: horizontalScale(60),
    height: verticalScale(60),
    zIndex: 1,
    resizeMode: "contain",
    borderRadius: moderateScale(100),
  },
  coverAvatar: {
    width: horizontalScale(70),
    height: verticalScale(70),
    backgroundColor: "white",
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  backButton: {
    height: verticalScale(100),
    width: horizontalScale(100),
    position: "absolute",
    bottom: verticalScale(10),
    left: horizontalScale(10),
    zIndex: 1,
  },
});
