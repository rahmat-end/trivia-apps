import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes/Metrixs";

const ResultMatch = () => {
  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/winnerpage.png")}
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <View style={styles.container}>
          <LottieView
            style={styles.lottie}
            autoPlay
            source={require("../../../assets/Animatiom/crown.json")}
          />
          <TouchableOpacity style={styles.containerAvatar}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=sph",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footertext}>Looser</Text>
          <View style={styles.footer}>
            {[1, 2, 3, 4].map((item) => {
              return (
                <TouchableOpacity key={item} style={styles.containerFooter}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671140.jpg?size=626&ext=jpg&ga=GA1.1.714462566.1697981532&semt=sph",
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        
      </View>
    </ImageBackground>
  );
};

export default ResultMatch;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // backgroundColor:"white",
    position: "absolute",
    top: verticalScale(50),
  },
  lottie: {
    width: horizontalScale(200),
    height: verticalScale(200),
    transform: [{ rotate: "-15deg" }],
    zIndex: 1,
  },
  avatar: {
    width: horizontalScale(70),
    height: verticalScale(70),
    resizeMode: "cover",
    borderRadius: moderateScale(100),
  },
  containerAvatar: {
    position: "absolute",
    // transform:[{rotate:"-15deg"}],
    top: verticalScale(130),
    left: horizontalScale(70),
    width: horizontalScale(80),
    height: verticalScale(80),
    backgroundColor: "white",
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: {
    color: "white",
    fontSize: moderateScale(25),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: verticalScale(10),
  },
  containerFooter: {
    width: horizontalScale(80),
    height: verticalScale(80),
    backgroundColor: "white",
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    position: "absolute",
    bottom: verticalScale(90),
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
