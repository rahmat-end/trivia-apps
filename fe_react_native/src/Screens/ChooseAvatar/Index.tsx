import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import Button from "../../Components/Button/Index";
import Input from "../../Components/Input/index";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../../themes/Metrixs";

import useAvatar from "../../hooks/useAvatar";
import { useState } from "react";
import ConfirmPopUp from "../../Components/ConfirmPopUp/Index";
import AlertPopUp from "../../Components/AlertPopUp/Index";
import LottieView from "lottie-react-native";
import useUser from "../../hooks/useUser";

const ChooseAvatar = ({ navigation }: { navigation: any }) => {
  const {
    dataAvatar,
    handleChange,
    addDataUser,
    setAvatar,
    createUser,
    avatar,
    createUserLoading,

  } = useAvatar();

  const {userlogin}= useUser();
  const [visible, setVisible] = useState(false);
  const [avatarAlertVisible, setAvatarAlertVisible] = useState(false);
  const [usernameAlertVisible, setUsernameAlertVisible] = useState(false);
  const [isActive, setIsActive] = useState(-1);

  useEffect(() => {
    console.log("userlogin", userlogin);
  },[userlogin])


  const handleSubmitAvatar = () => {
    if (addDataUser.username.length < 8 || addDataUser.username.length > 10) {
      return setUsernameAlertVisible(true);
    } else if (addDataUser.avatar === "") {
      return setAvatarAlertVisible(true);
    } else{
      createUser();
      setVisible(true);
    }
  };


  useEffect(() => {
    if (avatarAlertVisible || usernameAlertVisible || visible) {
      Keyboard.dismiss();
    }
  }, [avatarAlertVisible, usernameAlertVisible]);

  const handleChooseAvatar = (index: number, item: any) => {
    setAvatar(item);
    setIsActive(index);
  };

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/chooseAvatar.png")}
      style={styles.background}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={styles.logoContainer}></View>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"} // Atur perilaku sesuai platform
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20} // Sesuaikan offset jika diperlukan
          >
            <View style={styles.container}>
              <View>
                <Text style={styles.textwelcome}>
                  {/* Welcome {user?.displayName} */}
                </Text>
              </View>

              <Text style={styles.textHeader}>Setting Up your profile</Text>
              <Text style={styles.text}>choose free avatar available</Text>
               <View style={styles.avatarContainer}>
                {dataAvatar?.map((item: any, index: number) => {
                  const active = isActive === index;
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        handleChooseAvatar(index, item.photo_freeavatar)
                      }
                      style={styles.avatarButton}
                      key={index}
                    >
                      <Image
                        style={styles.avatar}
                        source={{
                          uri: item.photo_freeavatar,
                        }}
                      />
                      {active ? (
                        <Image
                          style={styles.avatarchoose}
                          source={require("../../../assets/LogoAction/choose.png")}
                        />
                      ) : null}
                    </TouchableOpacity>
                  );
                })}
              </View> 
              <View>
                <Input placeholder="Type Your username" dataUser={addDataUser} handleChange={handleChange} namakey="username" />
                <Input placeholder="Type Your display name" dataUser={addDataUser} namakey="name" handleChange={handleChange} />
              </View>
              <View>
                <Button onPress={() => handleSubmitAvatar()} text="Submit" />
              </View>
            </View>
          </KeyboardAvoidingView>
          {visible && (
            <View style={styles.overlayconfirm}>
              <View style={styles.containerconfirm}>
                <ConfirmPopUp navigation={navigation} setVisible={setVisible}/>
              </View>
            </View>
          )}
          {usernameAlertVisible && (
            <View style={styles.overlayconfirm}>
              <View style={styles.containerconfirm}>
                <AlertPopUp
                  alertVisible={setUsernameAlertVisible}
                  alertText="Username must be at least 8 characters and not greater than 10"
                />
              </View>
            </View>
          )}
          {avatarAlertVisible && (
            <View style={styles.overlayconfirm}>
              <View style={styles.containerconfirm}>
                <AlertPopUp
                  alertVisible={setAvatarAlertVisible}
                  alertText="Please choose your avatar"
                />
              </View>
            </View>
          )}

          {createUserLoading && (
            <View style={styles.overlayconfirm}>
              <LottieView
                autoPlay
                style={styles.lottie}
                source={require("../../../assets/Animatiom/loadingpostdata.json")}
              />
            </View>
          )}
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default ChooseAvatar;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.8,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.9)",
    alignItems: "center",
  },

  overlayconfirm: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.9)",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
  },

  containerconfirm: {
    width: horizontalScale(300),
    height: verticalScale(300),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
  },
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
  },
  imageLogo: {
    width: horizontalScale(150),
    height: verticalScale(150),
    resizeMode: "contain",
  },
  textwelcome: {
    textTransform: "capitalize",
    fontSize: moderateScale(20),
    color: "white",
  },
  textHeader: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: moderateScale(23),
    marginBottom: moderateScale(25),
    textAlign: "center",
  },
  text:{
    color: "white",
    fontSize: moderateScale(15),
    textAlign: "center",
    textTransform: "capitalize",
  },
  avatar: {
    borderRadius: moderateScale(100),
    height: verticalScale(70),
    width: horizontalScale(70),
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: horizontalScale(20),
    gap: 20,
    marginBottom: verticalScale(50),
  },
  avatarButton: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(100),
    height: verticalScale(75),
    width: horizontalScale(75),
  },
  avatarchoose: {
    width: horizontalScale(30),
    height: verticalScale(30),
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  lottie: {
    width: horizontalScale(250),
    height: verticalScale(250),
    position: "absolute",
  },
});
