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
import { useAppSelector } from "../../Redux/hooks";
import useLogin from "../../hooks/useLogin";
import useAvatar from "../../hooks/useAvatar";
import { useState } from "react";


const ChooseAvatar = ({ navigation }: { navigation: any }) => {
 const { user } = useAppSelector((state: any) => state.user);
  const { dataAvatar, handleChange, addDataUser, setAvatar, createUser} = useAvatar();


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
                  Welcome {user?.displayName}
                </Text>
              </View>

              <Text style={styles.textHeader}>Choose your avatar</Text>
              <View style={styles.avatarContainer}>
                {dataAvatar?.map((item: any, index: number) => {
                  return (
                    <TouchableOpacity
                    onPress={()=>setAvatar(item.photo_freeavatar)}
                      style={styles.avatarButton}
                      key={item.id_freeavatar}
                    >
                      <Image
                        style={styles.avatar}
                        source={{
                          uri: item.photo_freeavatar,
                        }}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View>
                <Input 
                dataUser={addDataUser}
                handleChange={handleChange}
                />
              </View>
              <View>
                <Button
                  onPress={() => createUser()}
                  text="Continue"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
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
});
