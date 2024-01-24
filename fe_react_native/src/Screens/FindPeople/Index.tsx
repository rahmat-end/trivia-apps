import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../../themes/Metrixs";
import { useEffect, useState } from "react";
import useUser from "../../hooks/useUser";
import { apinodejs } from "../../Components/libs/api";
import { useQuery } from "react-query";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import { socket } from "../../Components/libs/socket";


const FindPeople = ({ navigation}: { navigation: any }) => {
  const [Timer, setTimer] = useState(15);
  const [visibleSatu, setVisibleSatu] = useState(false);
  const [visibleDua, setVisibleDua] = useState(false);
  const [visibleTiga, setVisibleTiga] = useState(false);
  const [visibleEmpat, setVisibleEmpat] = useState(false);
  const { userlogin } = useUser();
  const [move, setMove] = useState(false);
  const { idRoom } = useAppSelector((state: RootState) => state.idRoom);
  const [dataPlayer, setDataPlayer] = useState([]);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        }
        return prevTimer; // Jangan mengubah nilai jika sudah 0
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("idRoom di find people", idRoom);
    console.log(Timer)
  },[])

  useEffect(() => {
    socket.on(`dataUser${idRoom}`, (data: any) => {
      console.log("data user", data);
      setDataPlayer(data);
    })
  },[])

 

  // const { data: getDataPlayers } = useQuery("dataPlayer", async () => {
  //   try {
  //     const res = await apinodejs.get(`/getDataArray/${idRoom}`);
  //     return res.data.users;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  // useEffect(() => {
  //   console.log("ini data players",dataPlayer );
  // })

  useEffect(() => {
    if (move) {
      navigation.navigate("Let's Play");
    }
  }, [move]);

  useEffect(() => {
    if (Timer === 7) {
      setVisibleSatu(true);
    } else if (Timer === 5) {
      setVisibleDua(true);
    } else if (Timer === 4) {
      setVisibleTiga(true);
    } else if (Timer === 3) {
      setVisibleEmpat(true);
    } else if (Timer === 1) {
      setMove(true);
    }
  }, [Timer]);

  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/bgfindpeople.png")}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.AnimationContainer}>
          <LottieView
            style={styles.findingAnimation}
            source={require("../../../assets/Animatiom/findingPeople.json")}
            autoPlay
            loop
          />
        </View>
        <StatusBar style="light" />

        <Text style={styles.textTimer}>
          00:{Timer < 10 ? `0${Timer}` : Timer}
        </Text>
        <Text style={styles.textTitle}>Finding Opponent...</Text>
        {dataPlayer?.map((item: any, index: number) => {
          return (
            <View
              key={index}
              style={{
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
                display:
                  visibleSatu && index === 0
                    ? "flex"
                    : visibleDua && index === 1
                    ? "flex"
                    : visibleTiga && index === 2
                    ? "flex"
                    : visibleEmpat && index === 3
                    ? "flex"
                    : "none",
                top:
                  index === 0
                    ? 200
                    : index === 1
                    ? 250
                    : index === 2
                    ? 90
                    : 390,
                left:
                  index === 0
                    ? 180
                    : index === 1
                    ? 100
                    : index === 2
                    ? 250
                    : 10,
                bottom: index === 2 ? 10 : index === 1 ? 10 : null,
              }}
            >
              <TouchableOpacity>
                <View style={styles.coverAvatar}>
                  <Image style={styles.Avatar} source={{ uri: item.avatar }} />
                </View>
              </TouchableOpacity>
              <Text style={styles.textName}>
                {item.email === userlogin?.email ? "You" : item.name}
              </Text>
            </View>
          );
        })}
      </View>
    </ImageBackground>
  );
};

export default FindPeople;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  overlayTimer: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.7)",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  countDownContainer: {
    width: horizontalScale(300),
    height: verticalScale(200),
    backgroundColor: "white",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  textCountDown: {
    color: "black",
    fontWeight: "bold",
    fontSize: moderateScale(20),
  },
  timeIcon: {
    width: horizontalScale(50),
    height: verticalScale(50),
    marginTop: verticalScale(20),
    resizeMode: "contain",
  },
  button: {
    width: horizontalScale(200),
    height: verticalScale(40),
    marginTop: verticalScale(20),
    backgroundColor: "#318CE7",
    borderRadius: moderateScale(10),
    justifyContent: "center",
    alignItems: "center",
  },
  textTimer: {
    color: "white",
    fontSize: moderateScale(50),
    fontWeight: "bold",
    zIndex: 1,
  },
  textTitle: {
    color: "white",
    zIndex: 1,
  },
  textName: {
    color: "white",
    textTransform: "capitalize",
    fontSize: moderateScale(15),
    fontWeight: "bold",
    zIndex: 1,
  },
  AnimationContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  findingAnimation: {
    width: horizontalScale(600),
    height: verticalScale(600),
  },
  Avatar: {
    width: horizontalScale(60),
    height: verticalScale(60),
    zIndex: 1,
    resizeMode: "contain",
    borderRadius: moderateScale(100),
  },
  coverAvatar: {
    width: horizontalScale(70),
    height: verticalScale(70),
    backgroundColor: "white",
    borderRadius: moderateScale(100),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
});
