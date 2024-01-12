import { useState, useEffect } from "react";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { SIGNIN_USER, SAVE_TOKEN, LOGOUT } from "../Redux/userSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import {
  REMOVE_ASYNCSTORE,
  REMOVE_DATAUSER,
  SAVEUSER_ASYNCSTORE,
  SAVE_USER,
} from "../Redux/dataUserSlice";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


const useLogin = () => {
  GoogleSignin.configure({
    webClientId:
      "376331575913-tlpvfh7etmo5m57dto6e1bm6p7dear16.apps.googleusercontent.com",
  });
  const [initializing, setInitializing] = useState(false);
  const dispatch = useAppDispatch();
  const {dataUser} = useAppSelector((state: any) => state.dataUser);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataResgister, setDataResgister] = useState<any>({
    name: "",
    email: "",
    username: "",
    password: "triviagameroot",
    profile: "",
  });


  const submitLogin = async () => {
    try {
      setInitializing(true);
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await registerUsertodb();
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      handleLogout();
      console.log("ini error", error);
    } finally {
      setInitializing(false);
    }
  };

  const saveDataUser = async () => {
    try {
      const dataString = await AsyncStorage.getItem("dataUser");
      const payload = JSON.parse(dataString);
      dispatch(SAVE_USER(payload));
    } catch (error) {
      console.log(error);
    }
  };

  const registerUsertodb = async () => {
    try {
      // setInitializing(true);
     const res = await axios.post(
      "http://192.168.18.169:8001/api/auth/registeruser",
      dataResgister);
      dispatch(SAVEUSER_ASYNCSTORE(res.data));
      saveDataUser();
      console.log("ini response saat login", res.data)
      
    } catch (error) {
      console.log(error);
      setErrorMessage(error.data.email);
    }
    // finally {
    //   setInitializing(false);
    // }
  }

 

  const onAuthStateChanged = (user: any) => {
    if (user) {
      setDataResgister({
        ...dataResgister,
        name: user.displayName,
        email: user.email,
        profile: user.photoURL,
        username: user.displayName,
      });

    }
 
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [initializing]);

  // useEffect(() => {
  //   console.log(errorMessage);
  //   if (errorMessage !== "") {
  //     handleLogout();
  //   }
  // }, [errorMessage]);

  const handleLogout = async () => {
    try {
      dispatch(REMOVE_ASYNCSTORE());
      dispatch(REMOVE_DATAUSER());
      console.log("User signed out!", dataUser);
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };
  return { submitLogin, initializing, handleLogout, errorMessage };
};

export default useLogin;
