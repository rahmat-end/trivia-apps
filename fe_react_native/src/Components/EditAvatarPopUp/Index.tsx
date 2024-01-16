import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes/Metrixs";
import React, { useEffect, useState } from "react";
import useAvatar from "../../hooks/useAvatar";
import { avatar } from "../../services/avatar";

type Props = {
  open?: boolean;
  setIsOpen?: any;
};

const EditAvatarPopUp = ({ open, setIsOpen }: Props) => {
  const { dataAvatar, getUserPaidAvatar } = useAvatar();
  const avatarSuggest = avatar.slice(0, 3);
  const [isActive, setIsActive] = useState(-1);
  const [isActiveFree, setIsActiveFree] = useState(-1);
  const [visibleSuggest, setVisibleSuggest] = useState(false);

  const test = () => {
    getUserPaidAvatar?.map((item: any) => {
      console.log(item.buy_avatar);
    });
  };

  useEffect(() => {
    if (getUserPaidAvatar?.length < 6) {
      setVisibleSuggest(true);
    }
  }, [getUserPaidAvatar]);
  const handleActive = (index: number) => {
    setIsActive(index);
  };

  const handleActiveFree = (index: number) => {
    setIsActiveFree(index);
  };
  return (
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
      <Text style={styles.text}>Change Your Avatar</Text>
      {/* Free avatar */}
      {visibleSuggest && (
        <>
          <Text>Free Avatar Suggestions for you</Text>
          <TouchableOpacity style={styles.avatarcontainer}>
            {avatarSuggest.map((item: any, index: number) => {
              const active = index === isActiveFree;
              return (
                <TouchableOpacity
                  onPress={() => handleActiveFree(index)}
                  style={styles.avatarbackground}
                >
                  <Image
                    style={styles.avatarImage}
                    source={{ uri: item.avatar }}
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
          </TouchableOpacity>
        </>
      )}
      {/* Paid avatar collection */}

      <Text>Your Collection</Text>
      <View style={styles.avatarcontainer}>
        {getUserPaidAvatar?.map((item: any, index: number) => {
          const active = index === isActive;
          return (
            <TouchableOpacity
              onPress={() => handleActive(index)}
              style={styles.avatarbackground}
            >
              <Image
                style={styles.avatarImage}
                source={{ uri: item.buy_avatar.photo_buyavatar }}
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
    </View>
  );
};

export default EditAvatarPopUp;

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    width: horizontalScale(350),
    height: verticalScale(430),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    position: "relative",
    alignItems: "center",
    // justifyContent: "center",
  },
  avatarcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
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
  closeicon: {
    width: horizontalScale(35),
    height: verticalScale(35),
    resizeMode: "contain",
  },
  text: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
  },
  avatarbackground: {
    backgroundColor: "white",
    borderRadius: moderateScale(100),
    width: horizontalScale(90),
    height: verticalScale(90),
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: horizontalScale(70),
    height: verticalScale(70),
    borderRadius: moderateScale(100),
  },
  avatarchoose: {
    width: horizontalScale(30),
    height: verticalScale(30),
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
