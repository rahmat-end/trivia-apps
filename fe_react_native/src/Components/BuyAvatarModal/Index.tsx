import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../themes/Metrixs";
import LottieView from "lottie-react-native";
import { useState } from "react";
import useAvatar from "../../hooks/useAvatar";
import useUser from "../../hooks/useUser";
import DiamondModal from "../DiamondPopUp";
import useDiamond from "../../hooks/useDiamond";


type ModalProps = {
  open?: boolean;
  setIsOpen: any;
};
const ChangeAvatarModal = ({ open, setIsOpen }: ModalProps) => {
  const [visible, setVisible] = useState(false);
  const { userlogin } = useUser();
  const { avatarpaid } = useAvatar();
  const [visibleNull, setVisibleNull] = useState(false);
  const[popUpdiamondvisible,setPopUpdiamondvisible]=useState(false)
  const {buyAvatarbyDiamond}=useDiamond()
  const [selectedAvatar, setSelectedAvatar] = useState({
    photo_buyavatar: "",
    price_buyavatar: 0,
    id_buyavatar: 0,
  });

  const handleCheckOut = (item: any) => {
    if (userlogin.diamond === 0) {
      setVisibleNull(true);
      setSelectedAvatar(item);
    } else {
      setVisible(true);
      setSelectedAvatar(item);
    }
  };

  return (
    <>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setIsOpen(false)}
        >
          <Image
            style={styles.closeicon}
            source={require("../../../assets/LogoAction/close-svgrepo-com.png")}
          />
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          {avatarpaid?.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                onPress={() => handleCheckOut(item)}
                key={index}
                style={styles.cardAvatar}
              >
                <View style={styles.avatarbackground}>
                  <Image
                    style={styles.avatarImage}
                    source={{ uri: item.photo_buyavatar }}
                  />
                </View>
                <View style={styles.unlock}>
                  <Image
                    style={styles.unlockicon}
                    source={require(`../../../assets/LogoAction/lockkey.png`)}
                  />
                </View>
                <View style={styles.diamondContainer}>
                  <Image
                    style={styles.diamond}
                    source={require(`../../../assets/LogoAction/diamond-svgrepo-com.png`)}
                  />
                  <Text style={styles.Avatartext}>{item.price_buyavatar}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {visibleNull && (
        <View style={styles.overlayConfirm}>
          <View style={styles.confirmContainer}>
            <Text style={styles.confirmheader}>Uppss! :(</Text>
            <Text style={styles.confirmmessage}>
              you don't have any diamond yet
            </Text>
            <LottieView
              style={styles.lottie}
              source={require("../../../assets/Animatiom/emptybox.json")}
              autoPlay
            />
            <TouchableOpacity 
            onPress={() => {setPopUpdiamondvisible(true)}}
            style={styles.topupdiamond}>
              <Text style={styles.topupText}>Buy Diamond</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closebuttondua}
              onPress={() => setVisibleNull(false)}
            >
              <Image
                source={require("../../../assets/LogoAction/close-svgrepo-com.png")}
                style={styles.closeicondua}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

      {visible && (
        <View style={styles.overlayConfirm}>
          <View style={styles.confirmContainer}>
            <Text style={styles.confirmheader}>
              You Want to Buy this Avatar
            </Text>
            <Text style={styles.confirmmessage}>
              your balance is {userlogin?.diamond}{" "}
            </Text>
            <Image
              style={styles.lottie}
              source={{ uri: selectedAvatar.photo_buyavatar }}
            />
            <View style={styles.diamondContainer}>
              <Image
                style={styles.diamond}
                source={require(`../../../assets/LogoAction/diamond-svgrepo-com.png`)}
              />
              <Text style={styles.Avatartext}>
                {selectedAvatar.price_buyavatar}
              </Text>
            </View>
            <TouchableOpacity 
            onPress={()=>buyAvatarbyDiamond(selectedAvatar.id_buyavatar)}
            style={styles.topupdiamond}>
              <Text style={styles.topupText}>Buy Avatar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.closebuttondua}
              onPress={() => setVisible(false)}
            >
              <Image
                source={require("../../../assets/LogoAction/close-svgrepo-com.png")}
                style={styles.closeicondua}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
      {
        popUpdiamondvisible && (
          <View style={styles.modalChageAvatar}>
            <DiamondModal setmodalOpen={setPopUpdiamondvisible}/>
           

          </View>
        )
      }
    </>
  );
};

export default ChangeAvatarModal;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width: horizontalScale(350),
    height: verticalScale(430),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  closeButton: {
    width: horizontalScale(40),
    height: verticalScale(40),
    resizeMode: "contain",
    position: "absolute",
    top: verticalScale(-15),
    right: horizontalScale(-15),
  },
  cardAvatar: {
    width: horizontalScale(100),
    height: verticalScale(120),
    backgroundColor: "#89CFF080",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  avatarImage: {
    width: horizontalScale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(100),
  },
  avatarbackground: {
    backgroundColor: "white",
    borderRadius: moderateScale(100),
    width: horizontalScale(90),
    height: verticalScale(90),
    justifyContent: "center",
    alignItems: "center",
  },
  Avatartext: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: moderateScale(15),
    fontWeight: "bold",
    marginTop: verticalScale(3),
  },
  unlock: {
    position: "absolute",
    right: horizontalScale(10),
    top: verticalScale(70),
  },
  cardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  diamondContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  diamond: {
    width: horizontalScale(18),
    height: verticalScale(18),
    resizeMode: "contain",
  },
  closeicon: {
    width: horizontalScale(35),
    height: verticalScale(35),
    resizeMode: "contain",
  },
  unlockicon: {
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: "contain",
  },
  overlayConfirm: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  confirmContainer: {
    width: horizontalScale(300),
    height: verticalScale(300),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  confirmheader: {
    textAlign: "center",
    fontSize: moderateScale(18),
    fontWeight: "bold",
    marginTop: verticalScale(10),
  },
  confirmmessage: {
    textAlign: "center",
    fontSize: moderateScale(15),
    marginTop: verticalScale(10),
    textTransform: "capitalize",
  },
  lottie: {
    width: horizontalScale(100),
    height: verticalScale(100),
    resizeMode: "contain",
  },
  topupdiamond: {
    width: horizontalScale(150),
    height: verticalScale(40),
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(20),
    backgroundColor: "#318CE7",
  },
  topupText: {
    color: "white",
    fontWeight: "bold",
  },
  closeicondua: {
    width: horizontalScale(35),
    height: verticalScale(35),
    resizeMode: "contain",
  },
  closebuttondua: {
    position: "absolute",
    top: verticalScale(-15),
    right: horizontalScale(-15),
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
});
