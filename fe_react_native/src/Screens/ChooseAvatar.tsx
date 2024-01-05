import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import React from "react";
import { avatar } from "../services/avatar";
import { StatusBar } from "expo-status-bar";
import Button from "../Components/Button";
import Input from "../Components/Input";

const ChooseAvatar = () => {
  return (
    <ImageBackground
      source={require("../../assets/chooseAvatar/background.png")}
      style={styles.background}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Image
              style={styles.imageLogo}
              source={require("../../assets/image/SplashScreen/font-bg.png")}
            />
          </View>
          <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Atur perilaku sesuai platform
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Sesuaikan offset jika diperlukan
    >
          <View style={styles.container}>
                
            <Text style={styles.textHeader}>Choose your avatar</Text>
            <View style={styles.avatarContainer}>
              {avatar.map((item: any, index: number) => {
                return (
                  <TouchableOpacity key={index}>
                    <Image
                      style={styles.avatar}
                      source={{
                        uri: item.avatar,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View>
            <Input/>
            </View>
                <View>
            <Button text="Continue"/>
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
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  logoContainer: {
    // backgroundColor: "red",
    alignItems: "center",
  },
  imageLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  textHeader: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: 23,
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "Acme-Regular",
  },
  avatar: {
    borderRadius: 100,
    height: 70,
    width: 70,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    gap: 20,
    marginBottom:50,
  },
});
