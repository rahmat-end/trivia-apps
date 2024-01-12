import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { diamondData } from "../../services/avatar";
import { horizontalScale,verticalScale, moderateScale } from "../../themes/Metrixs";

type ModalProps = {
  setmodalOpen: any;
};
const DiamondModal = ({ setmodalOpen }: ModalProps) => {
  const test = 1;
  return (
    <View style={styles.modalContent}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => setmodalOpen(false)}
      >
        <Image 
        style={styles.closeicon}
        source={require(`../../../assets/LogoAction/close-svgrepo-com.png`)} />
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        {diamondData.map((item: any, index: number) => {
          return (
            <TouchableOpacity key={index} style={styles.cardAvatar}>
              <Text style={styles.diamondText}>{item.qty}</Text>
              <Image
                style={styles.diamondImage}
                source={require(`../../../assets/LogoAction/diamond5.png`)}
              />
              <Text style={styles.diamondText}>Rp. {item.price}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default DiamondModal;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width:horizontalScale(350),
    height:verticalScale(480),
    borderRadius:moderateScale(10),
    padding:moderateScale(10),
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    width:horizontalScale(40),
    height:verticalScale(40),
    resizeMode: "contain",
    position: "absolute",
    top:verticalScale(-20),
    right:horizontalScale(-20),
  },
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cardAvatar: {
    width:horizontalScale(130),
    height:verticalScale(130),
    backgroundColor: "#89CFF080",
    borderRadius:moderateScale(10),
    padding:moderateScale(10),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    gap: 5,


  },
  diamondText: {
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Acme-Regular",
    fontSize:moderateScale(21),
    fontWeight: "bold",
  },
  diamondImage: {
    width:horizontalScale(70),
    height:verticalScale(70),
    resizeMode: "contain",
  },
  closeicon: {
      width:horizontalScale(35),
      height:verticalScale(35),
  }
});
