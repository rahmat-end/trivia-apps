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
import Button from "../../Components/Button/Index";
import { useState, useEffect } from "react";
import ChangeAvatarModal from "../../Components/BuyAvatarModal/Index";
import DiamondModal from "../../Components/DiamondPopUp";
import LottieView from "lottie-react-native";
import { useQuery } from "react-query";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../themes/Metrixs";
import useUser from "../../hooks/useUser";
import useLogin from "../../hooks/useLogin";
import { useAppSelector, useAppDispatch } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import EditAvatarPopUp from "../../Components/EditAvatarPopUp/Index";
import useGetGolangToken from "../../hooks/useGetGolangToken";
import { socket } from "../../Components/libs/socket";
// import { io } from "socket.io-client";
import { SAVE_ID_ROOM } from "../../Redux/IdRoomSlice";
import { apinodejs } from "../../Components/libs/api";

const StartGame = ({ navigation }: { navigation: any }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalDiamond, setIsOpenModalDiamond] = useState(false);
  const [editAvatarVisible, setEditAvatarVisible] = useState(false);
  const { dataUser } = useAppSelector((state: RootState) => state.dataUser);
  const { userlogin, isLoadingUserLogin } = useUser();
  const { handleLogout } = useLogin();
  const { loginGolang } = useGetGolangToken();
  const { user } = useAppSelector((state: RootState) => state.user);
  const { idRoom } = useAppSelector((state: RootState) => state.idRoom);
  const dispatch = useAppDispatch();
  const [dataPlayer, setDataPlayer] = useState([]);
  const [newSocket, setNewSocket] = useState(null);

  const [availableRooms, setAvailableRooms] = useState();

  // const handleCreateRoom = async () => {

  //   try {
  //     const messageData = {
  //       name: userlogin?.name,
  //       email: userlogin?.email,
  //       avatar: userlogin?.avatar
  //     }

  //       socket.emit("sendDataProfile", messageData)
  //       navigation.navigate("Find People");
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // const [socket, setSocket] = useState(null);
  const data = {
    name: userlogin?.name,
    email: userlogin?.email,
    avatar: userlogin?.avatar,
  };
  const connectToSocket = async () => {
    try {
      // const socket = io("http://192.168.18.230:3001");
      // setNewSocket(socket);
      socket.on("connect", () => {
        console.log("Terhubung ke server Socket.IO");
      });

      socket.emit("recive", data);
      socket.on("view", (data: any) => {
        dispatch(SAVE_ID_ROOM(data.data.availableRoom));
      });
      // if (idRoom) {
      // navigation.navigate("Find People");}
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (idRoom) {
      navigation.navigate("Find People",{newSocket:newSocket});
    }
  }, [idRoom]);

  // untuk dapat token golang biar bisa masuk ke midtrans

  useEffect(() => {
    loginGolang();
  }, [user]);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../../assets/BackgroundImage/startgame.png")}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={styles.headers}>
            <Image
              style={styles.imageLogo}
              source={require("../../../assets/BackgroundImage/newlogo.png")}
            />
            <View style={styles.headerRight}>
              <LottieView
                style={styles.diamond}
                source={require("../../../assets/Animatiom/diamond.json")}
                autoPlay
                loop
              />
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 17 }}
              >
                {userlogin?.diamond}
              </Text>
              <TouchableOpacity
                onPress={() => setIsOpenModalDiamond(true)}
                style={styles.plusButton}
              >
                <Image
                  style={styles.plus}
                  source={require("../../../assets/LogoAction/plus-svgrepo-com.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.containerAvatar}>
              <TouchableOpacity onPress={() => setIsOpen(true)}>
                {userlogin?.avatar ? (
                  <>
                    <Image
                      style={styles.avatar}
                      source={{ uri: userlogin?.avatar }}
                    />
                  </>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setEditAvatarVisible(true)}
                style={styles.editButton}
              >
                <Image
                  style={styles.edit}
                  source={require("../../../assets/LogoAction/edit-4-svgrepo-com.png")}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.textName}>{userlogin?.name}</Text>
            <Text style={styles.textUsername}>@{userlogin?.username}</Text>
          </View>
        </SafeAreaView>
        <View style={styles.containerThrophy}>
          <LottieView
            style={styles.throphy}
            autoPlay
            loop
            source={require("../../../assets/Animatiom/goldmedal.json")}
          />
          {/* <Image
            style={styles.throphy}
            source={require("../../../assets/LogoAction/gold-medal-svgrepo-com.png")}
          /> */}
          {userlogin?.throphy > 0 ? (
            <Text style={styles.textThrophy}>
              You have {userlogin?.throphy} scores
            </Text>
          ) : (
            <>
              <Text style={styles.textThrophy}>
                You don't have any scores yet
              </Text>
              <Text style={styles.textThrophy}>Go play some game!</Text>
            </>
          )}
        </View>
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text>Logout</Text>
        </TouchableOpacity>

        <View style={styles.containerButton}>
          <Button onPress={() => connectToSocket()} text="Let's Play" />
        </View>
      </View>
      {isOpen && (
        <View style={styles.modalChageAvatar}>
          <ChangeAvatarModal
            open={isOpen}
            setIsOpen={setIsOpen}
            navigation={navigation}
          />
        </View>
      )}
      {isOpenModalDiamond && (
        <View style={styles.modalChageAvatar}>
          <DiamondModal
            setmodalOpen={setIsOpenModalDiamond}
            navigation={navigation}
          />
        </View>
      )}
      {isLoadingUserLogin && (
        <View style={styles.overlayModal}>
          <LottieView
            style={styles.test}
            autoPlay
            loop
            source={require("../../../assets/Animatiom/loadingpostdata.json")}
          />
        </View>
      )}
      {editAvatarVisible && (
        <View style={styles.modalChageAvatar}>
          <EditAvatarPopUp
            open={editAvatarVisible}
            setIsOpen={setEditAvatarVisible}
          />
        </View>
      )}
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
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingTop: verticalScale(30),
    paddingHorizontal: horizontalScale(20),
  },

  imageLogo: {
    width: horizontalScale(70),
    height: verticalScale(70),
    resizeMode: "contain",
  },
  headers: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerRight: {
    backgroundColor: "#89CFF080",
    backgroundOpacity: 0.2,
    borderRadius: moderateScale(5),
    alignItems: "center",
    width: horizontalScale(80),
    position: "relative",
  },
  diamond: {
    width: horizontalScale(53),
    height: verticalScale(53),
    resizeMode: "contain",
    position: "absolute",
    left: horizontalScale(-25),
    top: verticalScale(-12),
  },
  plusButton: {
    position: "absolute",
    right: horizontalScale(-13),
    top: verticalScale(-5),
  },
  plus: {
    width: horizontalScale(30),
    height: verticalScale(35),
    resizeMode: "contain",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerAvatar: {
    backgroundColor: "white",
    width: horizontalScale(105),
    height: verticalScale(105),
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },
  avatar: {
    width: horizontalScale(100),
    height: verticalScale(100),
    borderRadius: moderateScale(100),
  },
  editButton: {
    position: "absolute",
    backgroundColor: "#89CFF0",
    borderRadius: moderateScale(100),
    padding: moderateScale(3),
    right: 0,
    bottom: 0,
  },
  edit: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  textName: {
    color: "white",
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: moderateScale(20),
    textAlign: "center",
    marginTop: moderateScale(20),
  },
  textUsername: {
    color: "white",
    textTransform: "lowercase",
    fontWeight: "400",
    fontSize: moderateScale(15),
    textAlign: "center",
    marginBottom: verticalScale(100),
  },

  containerButton: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
  },
  containerThrophy: {
    justifyContent: "center",
    alignItems: "center",
  },
  throphy: {
    width: horizontalScale(70),
    height: verticalScale(70),
    resizeMode: "contain",
  },
  textThrophy: {
    color: "white",
    fontSize: moderateScale(15),
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
  lottie: {
    height: verticalScale(250),
    width: horizontalScale(300),
    position: "absolute",
    top: verticalScale(-90),
    left: horizontalScale(10),
    right: horizontalScale(0),
  },
  overlayModal: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  test: {
    width: horizontalScale(200),
    height: verticalScale(200),
  },
});
