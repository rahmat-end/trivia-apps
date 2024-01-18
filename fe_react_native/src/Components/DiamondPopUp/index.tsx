import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../themes/Metrixs";
import useDiamond from "../../hooks/useDiamond";
import { useState } from "react";
import { useAppSelector , useAppDispatch} from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { SAVE_DIAMOND } from "../../Redux/diamondSlice";

type ModalProps = {
  setmodalOpen: any;
  navigation?: any;
};
const DiamondModal = ({ setmodalOpen, navigation }: ModalProps) => {
  const [visible, setVisible] = useState(false);
  const [selectedDiamond, setSelectedDiamond] = useState({
    amount_diamond: 0,
    price_diamond: 0,
    id_diamond: 0,
  });
  const { dataDiamond, buydiamond } = useDiamond();
 const dispatch = useAppDispatch();

  const formatPrice = (price: number): string => {
    if (price >= 100000) {
      return `Rp. ${price / 1000}K`;
    } else if (price >= 1000) {
      return `Rp. ${price / 1000}K`;
    } else {
      return `Rp. ${price}`;
    }
  };

  const handleCheckOut = (item: any) => {
    setVisible(true);
    setSelectedDiamond(item);
    dispatch(SAVE_DIAMOND(item))
  };

  const handleConfirm = (item: any) => {
    setVisible(false);
    navigation.navigate("PaymentDetail");
  };

  
  return (
    <>
      <View style={styles.modalContent}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setmodalOpen(false)}
        >
          <Image
            style={styles.closeicon}
            source={require(`../../../assets/LogoAction/close-svgrepo-com.png`)}
          />
        </TouchableOpacity>
        <View style={styles.cardContainer}>
          {dataDiamond?.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                onPress={() => handleCheckOut(item)}
                key={index}
                style={styles.cardAvatar}
              >
                <Text style={styles.diamondText}>{item.amount_diamond}</Text>
                <Image
                  style={styles.diamondImage}
                  source={{ uri: item.photo_diamond }}
                />
                <Text style={styles.diamondText}>
                  {formatPrice(item.price_diamond)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {visible && (
        <View style={styles.overlayConfirm}>
          <View style={styles.confirmContainer}>
            <Text style={styles.confirmheader}>Confirm Your Order</Text>
            <Text style={styles.confirmmessage}>
              your order is {selectedDiamond?.amount_diamond} diamonds
            </Text>
            <Text style={styles.confirmmessage}>
              Total price is {formatPrice(selectedDiamond?.price_diamond)}{" "}
            </Text>

            <TouchableOpacity
              onPress={() => handleConfirm(selectedDiamond?.id_diamond)}
              style={styles.topupdiamond}
            >
              <Text style={styles.topupText}>Checkout</Text>
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
    </>
  );
};

export default DiamondModal;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width: horizontalScale(350),
    height: verticalScale(480),
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
    top: verticalScale(-20),
    right: horizontalScale(-20),
  },
  cardContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cardAvatar: {
    width: horizontalScale(130),
    height: verticalScale(130),
    backgroundColor: "#89CFF080",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column",
    gap: 5,
  },
  diamondText: {
    textAlign: "center",
    fontFamily: "Acme-Regular",
    fontSize: moderateScale(15),
    fontWeight: "bold",
  },
  diamondImage: {
    width: horizontalScale(70),
    height: verticalScale(70),
    resizeMode: "contain",
  },
  closeicon: {
    width: horizontalScale(35),
    height: verticalScale(35),
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
    fontSize: moderateScale(20),
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
  },
  topupdiamond: {
    width: horizontalScale(150),
    height: verticalScale(40),
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
    marginTop: verticalScale(20),
    backgroundColor: "#AFE1AF",
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
});
