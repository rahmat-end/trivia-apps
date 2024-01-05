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
import EditSvg from "../../assets/login/EditSvg";
import Button from "../Components/Button";
import PlaySvg from "../../assets/login/PlaySvg";
import { useState } from "react";
import ChangeAvatarModal from "../Components/modal/ChangeAvatarModal";

const StartGame = () => {
    const [isOpen, setIsOpen] = useState(false);



  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/image/startGame/bg.png")}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={styles.headers}>
            <Image
              style={styles.imageLogo}
              source={require("../../assets/image/SplashScreen/font-bg.png")}
            />
            <View style={styles.headerRight}>
              <Image
                style={styles.diamond}
                source={require("../../assets/image/startGame/diamond.png")}
              />
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 17 }}
              >
                9.9K
              </Text>
              <Image
                style={styles.plus}
                source={require("../../assets/image/startGame/plus-svgrepo-com.png")}
              />
            </View>
          </View>
            <View style={styles.container}>
          <View style={styles.containerAvatar}>
            <Image
            style={styles.avatar}
            source={require("../../assets/chooseAvatar/avataaars.png")}
            />
            <TouchableOpacity 
            onPress={()=>setIsOpen(true)}
            style={styles.editButton}>
            <EditSvg
            width={30}
            height={30}
            fill="none"
            strokeColor="#fff"
            />
            </TouchableOpacity>
          </View>
            <Text style={styles.textName}>
                Arre pangestu pradana
            </Text>
            <Text style={styles.textUsername}>
                @Arrepangestu
            </Text>
            </View>
            <View style={styles.containerButton}>
                <Button text="Let's Play"/>
            </View>
                <Image 
                style={styles.imagePlay}
                source={require("../../assets/image/startGame/play-game-svgrepo-com.png")}/>
        </SafeAreaView>
                {
                    isOpen && (
                <View style={styles.modalChageAvatar}>
                   <ChangeAvatarModal 
                   open={isOpen}
                   setIsOpen={setIsOpen}
                   />
                </View>
                        
                    )
                }
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
    padding: 20,
  
  },

  imageLogo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    // transform: [{ rotate: "-30deg" }],
  },
  headers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerRight: {
    backgroundColor: "#89CFF080",
    backgroundOpacity: 0.2,
    paddingVertical: 2,
    borderRadius: 5,
    alignItems: "center",
    width: 80,
    position: "relative",
  },
  diamond: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    position: "absolute",
    left: -15,
    top: -6,
  },
  plus: {
    width: 30,
    height: 35,
    resizeMode: "contain",
    position: "absolute",
    right: -15,
    top: -6,
  },
  container:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:100
  },
  containerAvatar:{
    backgroundColor:"white",
    width:130,
    height:130,
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  avatar:{
    width:125,
    height:125,
    borderRadius:100
  },
  editButton:{
    position:"absolute",
    backgroundColor:"#89CFF0",
    borderRadius:100,
    padding:3,
    right:0,
    bottom:0
  },
  textName:{
    color:"white",
    textTransform:"capitalize",
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    marginTop:20,
    fontFamily:"Acme-Regular"
  },
  textUsername:{
    color:"white",
    textTransform:"lowercase",
    fontWeight:"400",
    fontSize:20,
    textAlign:"center",
    marginBottom:100,
    fontFamily:"Acme-Regular"
    
  },
  containerButton:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:100,
    // backgroundColor:"white",
  },
  imagePlay:{
    width:90,
    height:90,
    transform: [{ rotate: "-30deg" }],
    position:"absolute",
    bottom:0,
    right:0
  },
  modalChageAvatar:{
      position:"absolute",
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      top:0,
      bottom:0,
      right:0,
      left:0,
      backgroundColor:"rgba(0,0,0,0.5)",
    //   top:0,
    //   transform: [{ translateY: 400 }],
    
  },
  

});
