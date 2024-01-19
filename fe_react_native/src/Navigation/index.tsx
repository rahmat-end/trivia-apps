import { View, TouchableOpacity, StyleSheet, Image, Text } from "react-native";
import {
  verticalScale,
  horizontalScale,
  moderateScale,
} from "../themes/Metrixs";
import { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Screens/SplashScreen/Index";
import Login from "../Screens/Login/index";
import ChooseAvatar from "../Screens/ChooseAvatar/Index";
import SettingModal from "../Components/SettingMenu/SettingModal";
import StartGame from "../Screens/StartGame/Index";
import FindPeople from "../Screens/FindPeople/Index";
import LetsPlay from "../Screens/LetsPlay/Index";
import ResultMatch from "../Screens/Result/Index";
import TestWebView from "../Screens/MidtransWebView";
import MidtransWebView from "../Screens/MidtransWebView";
import PaymentDetail from "../Screens/PaymentDetail/Index";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();
import useUser from "../hooks/useUser";
import { useAppDispatch } from "../Redux/hooks";
import { REMOVE_SNAP } from "../Redux/snapMidtransSlice";

export default function Navigation() {

  const {refetchUserlogin}=useUser()
  const CostumHeader = ({ navigation }: { navigation: any }) => {
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../assets/BackgroundImage/newlogo.png")}
        />
        <TouchableOpacity onPress={() => setIsSettingOpen(true)}>
          <LottieView
            style={styles.settingButton}
            source={require("../../assets/Animatiom/settingProfile.json")}
            autoPlay
          />
        </TouchableOpacity>

        {isSettingOpen && (
          <SettingModal
            navigation={navigation}
            setIsOpen={() => setIsSettingOpen(false)}
          />
        )}
      </View>
    );
  };

 

  const headerPayment = ({ navigation }: { navigation: any }) => {
    const dispatch = useAppDispatch();
    const handleBackAfterPayment = () => {
      refetchUserlogin();
      navigation.navigate("Start Game");
      dispatch(REMOVE_SNAP());
    }
    return (
      <View style={styles.containerPayment}>
        <StatusBar style="light" />
        <View style={styles.containerBottom}>
          <TouchableOpacity
          onPress={() => handleBackAfterPayment()}
          >
            <Image
              style={styles.back}
              source={require("../../assets/LogoAction/arrow-back-simple-svgrepo-com.png")}
            />
          </TouchableOpacity>
          <Text style={styles.textPayment}>Pembayaran</Text>
        </View>
      </View>
    );
  };

  

  const headerDetailPayment = ({ navigation }: { navigation: any }) => {
    return (
      <View style={styles.containerPayment}>
        <StatusBar style="light" />
        <View style={styles.containerBottom}>
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.back}
              source={require("../../assets/LogoAction/arrow-back-simple-svgrepo-com.png")}
            />
          </TouchableOpacity>
          <Text style={styles.textPayment}>Detail Pesanan</Text>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: verticalScale(150),
      justifyContent: "space-between",  
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: horizontalScale(10),
    },
    containerPayment: {
      height: verticalScale(100),
      backgroundColor: "#002D62",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: horizontalScale(10),
    },
    textPayment: {
      color: "white",
      fontSize: moderateScale(17),
      fontWeight: "bold",
    },
    logo: {
      width: horizontalScale(70),
      height: verticalScale(70),
      resizeMode: "contain",
    },
    settingButton: {
      width: horizontalScale(50),
      height: horizontalScale(50),
      resizeMode: "contain",
    },
    containerBottom: {
      marginTop: verticalScale(30),
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      gap:moderateScale(10)
    },
    back: {
      width: horizontalScale(20),
      height: verticalScale(20),
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LetsPlay">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Login Screen"
          component={Login}
        />

        <Stack.Screen
          options={{
            header: CostumHeader,
            headerTransparent: true,
            headerShown: true,
          }}
          name="Choose Avatar"
          component={ChooseAvatar}
        />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Start Game"
          component={StartGame}
        />

        <Stack.Screen
          options={{
            header: CostumHeader,
            headerTransparent: true,
            headerShown: true,
          }}
          name="Find People"
          component={FindPeople}
        />
        <Stack.Screen
          options={{
            header: CostumHeader,
            headerTransparent: true,
            headerShown: true,
          }}
          name="LetsPlay"
          component={LetsPlay}
        />
        <Stack.Screen
          options={{
            header: CostumHeader,
            headerTransparent: true,
            headerShown: true,
          }}
          name="Result Match"
          component={ResultMatch}
        />
        <Stack.Screen
          options={{
            header: headerPayment,
            headerShown: true,
          
            // headerTitleAlign: "center",
            headerTransparent: true,
          }}
          name="Payment"
          component={MidtransWebView}
        />
        <Stack.Screen
          options={{
            header: headerDetailPayment,
            headerShown: true,
          }}
          name="PaymentDetail"
          component={PaymentDetail}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
