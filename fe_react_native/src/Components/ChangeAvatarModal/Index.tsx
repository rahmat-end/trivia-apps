import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { topUpAvatar } from "../../services/avatar";
import { horizontalScale, verticalScale, moderateScale } from "../../themes/Metrixs";


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
        <Image 
        style={styles.closeicon}
        source={require("../../../assets/LogoAction/close-svgrepo-com.png")} />
      </TouchableOpacity>
      <View style={styles.cardContainer}>
      {
        topUpAvatar.map((item:any)=>{
          return (
      <TouchableOpacity key={item.id} style={styles.cardAvatar}>
        <View style={styles.avatarbackground}>
        <Image 
        style={styles.avatarImage}
        source={require(`../../../assets/Avatar/avatar.png`)} />
        </View>
        <View style={styles.unlock}>
          {
            item.isFree?
            <Image 
            style={styles.unlockicon}
            source={require(`../../../assets/LogoAction/unlocked-svgrepo-com.png`)} />:
            <Image 
            style={styles.unlockicon}
            source={require(`../../../assets/LogoAction/lockkey.png`)} />
          }
        </View>
        {
          item.isFree? 
          <Text style={styles.Avatartext}>free</Text>:
          <View style={styles.diamondContainer}>
          <Image 
          style={styles.diamond}
          source={require(`../../../assets/LogoAction/diamond-svgrepo-com.png`)} />
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
    width:horizontalScale(350),
    height:verticalScale(430),
    borderRadius:moderateScale(10),
    padding:moderateScale(10),
    position: "relative",
    alignItems:"center",
    justifyContent:"center"
  },
  closeButton: {
    width:horizontalScale(40),
    height:verticalScale(40),
    resizeMode: "contain",
    position: "absolute",
    top:verticalScale(-15),
    right:horizontalScale(-15),
  },
  cardAvatar: {
    width:horizontalScale(100),
    height:verticalScale(120),
    backgroundColor: "#89CFF080",
    borderRadius:moderateScale(10),
    padding:moderateScale(10),
    overflow: "hidden",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
  },
  avatarImage:{
    width:horizontalScale(70),
    height:verticalScale(70),
    borderRadius:moderateScale(100)
  },
  avatarbackground:{
    backgroundColor:"white",
    borderRadius:moderateScale(100),
    width:horizontalScale(90),
    height:verticalScale(90),
    justifyContent:"center",
    alignItems:"center"
  },
  Avatartext:{
    textAlign:"center",
    textTransform:"uppercase",
    fontSize:moderateScale(20),
    fontWeight:"bold",
    marginTop:verticalScale(3)
  },
  unlock:{
    position:"absolute",
    right:horizontalScale(10),
    top:verticalScale(70)
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
    width:horizontalScale(18),
    height:verticalScale(18),
    resizeMode:"contain"
  },
  closeicon:{
    width:horizontalScale(35),
    height:verticalScale(35),
    resizeMode:"contain"
  },
  unlockicon:{
    width:horizontalScale(30),
    height:verticalScale(30),
    resizeMode:"contain"
  }
});
