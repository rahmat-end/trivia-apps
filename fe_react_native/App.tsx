
// import SplashScreen from './src/Screens/SplashScreen';
import Login from './src/Screens/Login';
import ChooseAvatar from './src/Screens/ChooseAvatar';
import StartGame from './src/Screens/StartGame';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
export default function App() {
  const [fontsLoaded] = useFonts({
    'MiltonianTattoo-Regular': require('./assets/fonts/MiltonianTattoo-Regular.ttf'),
    'Acme-Regular': require('./assets/fonts/Acme-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[])

  if(!fontsLoaded) {
    return null;
  }else{
    SplashScreen.hideAsync();
  }

  return (
    <>
    {/* <SplashScreen/>  */}
    <Login/>
    {/* <ChooseAvatar/>  */}
    {/* <StartGame/> */}
    </>
  );
}


