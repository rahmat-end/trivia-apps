import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Button from "../../Components/Button/Index";
import { useState, useEffect } from "react";
import ChangeAvatarModal from "../../Components/ChangeAvatarModal/Index";
import DiamondModal from "../../Components/DiamondPopUp";

import LottieView from "lottie-react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../themes/Metrixs";

const StartGame = ({ navigation }: { navigation: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalDiamond, setIsOpenModalDiamond] = useState(false);
  const [data, setData] = useState([]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/BackgroundImage/startgame.png")}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={styles.headers}>
            <Image
              style={styles.imageLogo}
              source={require("../../../assets/BackgroundImage/logo.png")}
            />
            <View style={styles.headerRight}>
              <LottieView
                style={styles.diamond}
                source={require("../../../assets/Animatiom/diamond.json")}
                autoPlay
                loop
              />
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 17 }}
              >
                9.9K
              </Text>
              <TouchableOpacity
                onPress={() => setIsOpenModalDiamond(true)}
                style={styles.plusButton}
              >
                <Image
                  style={styles.plus}
                  source={require("../../../assets/LogoAction/plus-svgrepo-com.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.containerAvatar}>
              <Image
                style={styles.avatar}
                source={require("../../../assets/Avatar/avatar.png")}
              />
              <TouchableOpacity
                onPress={() => setIsOpen(true)}
                style={styles.editButton}
              >
                <Image
                  style={styles.edit}
                  source={require("../../../assets/LogoAction/edit-4-svgrepo-com.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.textName}>Arre pangestu pradana</Text>
            <Text style={styles.textUsername}>@Arrepangestu</Text>
          </View>

          <View style={styles.containerButton}>
            <LottieView
              style={styles.lottie}
              source={require("../../../assets/Animatiom/play.json")}
              autoPlay
            //   loop={false}
            />
            <Button
              onPress={() => navigation.navigate("Find People")}
              text="Let's Play"
            />
          </View>
          <LottieView
            style={styles.imagePlay}
            source={require("../../../assets/Animatiom/spark.json")}
            autoPlay
            loop={false}
          />
          {/* <LottieView
                style={styles.imagePlay}
                source={require("../../../assets/Animation/spark.json")}
                autoPlay loop
              /> */}
        </SafeAreaView>
        {isOpen && (
            <View style={styles.modalChageAvatar}>
              <ChangeAvatarModal open={isOpen} setIsOpen={setIsOpen} />
            </View>
          )}
        {isOpenModalDiamond && (
            <View style={styles.modalChageAvatar}>
              <DiamondModal setmodalOpen={setIsOpenModalDiamond} />
            </View>
          )}
      </View>
    </ImageBackground>
  );
};

export default StartGame;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: moderateScale(20),
  },

  imageLogo: {
    width: horizontalScale(90),
    height: verticalScale(90),
    resizeMode: "contain",
  },
  headers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerRight: {
    backgroundColor: "#89CFF080",
    backgroundOpacity: 0.2,
    borderRadius: moderateScale(5),
    alignItems: "center",
    width: horizontalScale(80),
    position: "relative",
  },
  diamond: {
    width: horizontalScale(53),
    height: verticalScale(53),
    resizeMode: "contain",
    position: "absolute",
    left: horizontalScale(-9),
    top: verticalScale(-9),
  },
  plusButton: {
    position: "absolute",
    right: horizontalScale(-13),
    top: verticalScale(-8),
  },
  plus: {
    width: horizontalScale(30),
    height: verticalScale(35),
    resizeMode: "contain",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(100),
  },
  containerAvatar: {
    backgroundColor: "white",
    width: horizontalScale(115),
    height: verticalScale(115),
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatar: {
    width: horizontalScale(110),
    height: verticalScale(110),
    borderRadius: moderateScale(100),
  },
  editButton: {
    position: "absolute",
    backgroundColor: "#89CFF0",
    borderRadius: moderateScale(100),
    padding: moderateScale(3),
    right: 0,
    bottom: 0,
  },
  edit: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  textName: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize:moderateScale(25),
    textAlign: "center",
    marginTop:moderateScale(20),
  
  },
  textUsername: {
    color: "white",
    textTransform: "lowercase",
    fontWeight: "400",
    fontSize:moderateScale(20),
    textAlign: "center",
    marginBottom:verticalScale(100),

  },
  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:verticalScale(100),
    position: "relative",
  
  },
  imagePlay: {

    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    top: 0,
    zIndex: -1,
  },
  modalChageAvatar: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  lottie: {
    height:verticalScale(250),
    width:horizontalScale(300),
    position: "absolute",
    top:verticalScale(-90),
    left:horizontalScale(10),
    right:horizontalScale(0),
  },
});
