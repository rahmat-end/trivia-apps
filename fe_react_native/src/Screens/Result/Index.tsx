import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBase,
} from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../themes/Metrixs";
import { useAppSelector } from "../../Redux/hooks";
import { RootState } from "../../Redux/store";
import useUser from "../../hooks/useUser";
import { useMutation } from "react-query";
import { apigrpc } from "../../Components/libs/api";

const ResultMatch = ({ navigation}: { navigation: any }) => {
  const {users, iswinner}=useAppSelector((state: RootState) => state.resultScore);
 const {userlogin} = useUser();

  const winnerPlayer = users.filter((item: any) => {
    if (item.rank === 1) {
      return item;
    }
  });

  const{mutate:sendDataWinner}=useMutation(async ()=>{
    try {
      const response = await apigrpc.put(`/updateUser/${winnerPlayer[0].userId}`,)
      console.log("response", response)
      
    } catch (error) {
      console.log(error)
    }
  })

  useEffect(() => {
   sendDataWinner()
  },[])


  return (
    <ImageBackground
      source={require("../../../assets/BackgroundImage/winnerpage.png")}
      style={{ flex: 1 }}
    >
      <StatusBar style="light" />
      <View style={styles.overlay}>
        <View style={styles.container}>
          { iswinner? (
            <>
              <Text style={styles.header}>Congrats,</Text>
              <Text style={styles.text}>You Got 10 Diamonds</Text>
            </>
          ) : (
            <>
              <Text style={styles.header}>Unfortunately,</Text>
              <Text style={styles.text}>Better Luck Next Time</Text>
            </>
          )}
        </View>
        <View style={styles.podiumContainer}>
          <Image
            style={styles.image}
            source={require("../../../assets/LogoAction/podium-svgrepo-com.png")}
          />
          {users?.map((item: any, index: any) => {
            return (
              <View
                key={index}
                style={[
                  styles.avatarContainer,
                  {
                    bottom:
                      index === 0
                        ? verticalScale(230)
                        : index === 1
                        ? verticalScale(185)
                        : verticalScale(160),
                    left:
                      index === 0
                        ? horizontalScale(140)
                        : index === 1
                        ? horizontalScale(40)
                        : null,
                    right: index === 2 ? horizontalScale(40) : null,
                  },
                ]}
              >
                <Image
                  style={styles.avatar}
                  source={{uri: item.avatar}}
                />
                <LottieView
                  autoPlay
                  loop
                  style={styles.medal}
                  source={require("../../../assets/Animatiom/goldmedal.json")}
                />
                <Text style={styles.username}>{item.email === userlogin?.email ? "You" : item.name}</Text>
              </View>
            );
          })}
          <Image
            style={styles.crown}
            source={require("../../../assets/LogoAction/crown-svgrepo-com.png")}
          />
          {[12, 22, 32].map((item: any, index:number) => {
            return (
              <View key={item} 
              style={[styles.medalContainer,
              {
                bottom:
                index === 0
                  ? verticalScale(150)
                  : index === 1
                  ? verticalScale(110)
                  : verticalScale(90),
              left:
                index === 0
                  ? horizontalScale(100)
                  : index === 1
                  ? horizontalScale(0)
                  : null,
              right: index === 2 ? horizontalScale(45) : null,
              }]}>
                <Text style={styles.textmedal}>{item}</Text>
                <Image
                  style={styles.medalscore}
                  source={require("../../../assets/LogoAction/gold-medal-svgrepo-com.png")}
                />
              </View>
            );
          })}
        </View>

        <LottieView
          autoPlay
          loop
          style={styles.spark}
          source={require("../../../assets/Animatiom/sparkdua.json")}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Find People")}
          style={styles.buttonfooter}
        >
          <Text style={styles.textfooter}>Play Again</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ResultMatch;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: verticalScale(100),
  },
  image: {
    width: horizontalScale(350),
    height: verticalScale(200),
    resizeMode: "cover",
  },
  avatar: {
    width: horizontalScale(60),
    height: verticalScale(60),
    resizeMode: "cover",
    borderRadius: moderateScale(100),
  },
  podiumContainer: {
    position: "absolute",
    bottom: verticalScale(130),
  },
  header: {
    color: "white",
    fontSize: moderateScale(27),
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: moderateScale(17),
  },
  textmedal:{
    color: "white",
    fontSize: moderateScale(15),


  },
  avatarContainer: {
    position: "absolute",
    backgroundColor: "white",
    height: verticalScale(65),
    width: horizontalScale(65),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(100),
  },
  crown: {
    position: "absolute",
    top: verticalScale(-160),
    left: horizontalScale(145),
    width: horizontalScale(60),
    height: verticalScale(60),
    resizeMode: "contain",
    borderRadius: moderateScale(100),
  },
  medal: {
    width: horizontalScale(40),
    height: verticalScale(40),
    resizeMode: "cover",
    position: "absolute",
    borderRadius: moderateScale(100),
    right: horizontalScale(0),
    bottom: verticalScale(-20),
  },
  spark: {
    resizeMode: "cover",
    position: "absolute",
    borderRadius: moderateScale(100),
    right: horizontalScale(0),
    bottom: verticalScale(0),
    top: verticalScale(0),
    left: horizontalScale(0),
  },
  medalContainer:{
    width: horizontalScale(100),
    height: verticalScale(30),
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
  medalscore:{
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: "contain",
    borderRadius: moderateScale(100),
  },
  username: {
    color: "white",
    position: "absolute",
    bottom: verticalScale(-25),
    fontSize: moderateScale(12),
  },
  footer: {
    position: "absolute",
    bottom: verticalScale(45),
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonfooter: {
    width: horizontalScale(150),
    backgroundColor: "#318CE7",
    height: verticalScale(45),
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
    alignItems: "center",
    justifyContent: "center",
  },
  textfooter: {
    fontSize: moderateScale(15),
    fontWeight: "bold",
    color: "white",
  },
});
