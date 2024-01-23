import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import {
  REMOVE_ASYNCSTORE,
  REMOVE_DATAUSER,
  SAVEUSER_ASYNCSTORE,
  SAVE_USER,
} from "../Redux/dataUserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { apilaravel, apigolang } from "../Components/libs/api";

const useLogin = () => {
  GoogleSignin.configure({
    webClientId:
      "376331575913-tlpvfh7etmo5m57dto6e1bm6p7dear16.apps.googleusercontent.com",
  });
  const [initializing, setInitializing] = useState(false);
  const dispatch = useAppDispatch();
  const { dataUser } = useAppSelector((state: any) => state.dataUser);

  const [dataResgister, setDataResgister] = useState<any>({
    name: "",
    email: "",
    username: "",
    password: "roottrivia",
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
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      handleLogout();
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
      setInitializing(true);
      const headers = {
        "Content-Type": "application/json",
      };
      const res = await apilaravel.post("auth/registeruser", dataResgister, {
        headers,
      });
      dispatch(SAVEUSER_ASYNCSTORE(res.data));
      saveDataUser();
      // console.log("ini response saat login", res.data);
    } catch (error) {
      console.log("ini response login laravel", error.response.data);
    }
  };
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
    if (dataResgister.email !== "") {
      registerUsertodb();
    }
    console.log("ini data resgister", dataResgister);
  }, [dataResgister]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => subscriber();
  }, []);

 

 

  const handleLogout = async () => {
    try {
      dispatch(REMOVE_ASYNCSTORE());
      dispatch(REMOVE_DATAUSER());
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log("User signed out!", dataUser);
    } catch (error) {
      console.log(error);
    }
  };

  

  return { submitLogin, initializing, handleLogout };
};

export default useLogin;
