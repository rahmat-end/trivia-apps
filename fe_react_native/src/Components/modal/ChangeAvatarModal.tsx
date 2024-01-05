import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import ExitSvg from "../../../assets/login/ExitSvg";
import UnlockSvg from "../../../assets/login/UnlockSvg";
import { topUpAvatar } from "../../services/avatar";
import LockedSvg from "../../../assets/login/LockedSvg";

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
      <View style={styles.cardContainer}>
      {
        topUpAvatar.map((item:any)=>{
          return (
      <TouchableOpacity key={item.id} style={styles.cardAvatar}>
        <View style={styles.avatarbackground}>
        <Image 
        style={styles.avatarImage}
        source={require(`../../../assets/chooseAvatar/Avatars/1.png`)} />
        </View>
        <View style={styles.unlock}>
          {
            item.isFree?
            <UnlockSvg/>:
            <LockedSvg/>
          }
        </View>
        {
          item.isFree? 
          <Text style={styles.Avatartext}>free</Text>:
          <View style={styles.diamondContainer}>
          <Image 
          style={styles.diamond}
          source={require(`../../../assets/image/startGame/diamond-svgrepo-com.png`)} />
          <Text style={styles.Avatartext}>{item.price}</Text>
          </View>
        }
      </TouchableOpacity>
          )
          
        })
      }

      </View>
      
    </View>
  );
};

export default ChangeAvatarModal;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width: 350,
    height: 430,
    borderRadius: 10,
    padding: 10,
    position: "relative",
    alignItems:"center",
    justifyContent:"center"
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
    width: 100,
    height: 120,
    backgroundColor: "#89CFF080",
    borderRadius: 10,
    padding: 10,
    overflow: "hidden",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
  },
  avatarImage:{
    width:70,
    height:70,
    borderRadius:100
  },
  avatarbackground:{
    backgroundColor:"white",
    borderRadius:100,
    width:90,
    height:90,
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
  },
  unlock:{
    position:"absolute",
    right:10,
    top:70
  },
  cardContainer:{
    flexDirection:"row",
    gap:10,
    justifyContent:"center",
    alignItems:"center",
    flexWrap:"wrap"
  },
  diamondContainer:{
    flexDirection:"row",
    alignItems:"center",
    gap:2
  },
  diamond:{
    width:18,
    height:18,
    resizeMode:"contain"
  }
});
