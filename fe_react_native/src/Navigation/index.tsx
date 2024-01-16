import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
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
const Stack = createNativeStackNavigator();



export default function Navigation() {
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

  const styles = StyleSheet.create({
    container: {
      height: verticalScale(150),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: horizontalScale(10),
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
  });


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
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
              headerShown: true,
              headerTitle: "Payment",
              headerTitleAlign: "center",
              headerTitleStyle: {
                fontSize: moderateScale(15),
              }
            }}
            name="Payment"
            component={MidtransWebView}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerTitle: "Detail Pesanan",
              headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: moderateScale(17),
            }
             
            }}
            name="PaymentDetail"
            component={PaymentDetail}
          />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}
