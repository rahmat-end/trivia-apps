import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ExitSvg from "../../../assets/login/ExitSvg";

type ModalProps = {
  open?: boolean;
  setIsOpen: any;
};
const ChangeAvatarModal = ({ open, setIsOpen }: ModalProps) => {
  return (
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setIsOpen(false)}
      >
        <ExitSvg />
      </TouchableOpacity>
      <View style={styles.cardAvatar}>
        <View style={styles.avatarbackground}>
        <Image 
        style={styles.avatarImage}
        source={require("../../../assets/chooseAvatar/Avatars/1.png")} />
        </View>
        <Text style={styles.Avatartext}>free</Text>
      </View>
      
    </View>
  );
};

export default ChangeAvatarModal;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width: 350,
    height: 500,
    borderRadius: 10,
    padding: 10,
    position: "relative",
  },
  closeButton: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    position: "absolute",
    top: -20,
    right: -20,
  },
  cardAvatar: {
    width: 110,
    height: 130,
    backgroundColor: "#89CFF080",
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    justifyContent:"center",
    alignItems:"center"
  },
  avatarImage:{
    width:90,
    height:90,
    borderRadius:100
  },
  avatarbackground:{
    backgroundColor:"white",
    borderRadius:100,
    width:100,
    height:100,
    justifyContent:"center",
    alignItems:"center"
  },
  Avatartext:{
    textAlign:"center",
    textTransform:"uppercase",
    fontFamily:"Acme-Regular",
    fontSize:20,
    fontWeight:"bold",
    marginTop:3
  }
});
