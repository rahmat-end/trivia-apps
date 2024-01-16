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
      // registerUsertodb();
      console.log("ini id token", idToken);
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
      setInitializing(true);
      const res = await apilaravel.post("http://192.168.18.169:8001/api/auth/registeruser", dataResgister);
      dispatch(SAVEUSER_ASYNCSTORE(res.data));
      saveDataUser();
      console.log("ini response saat login", res.data);
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage(error.data.email);
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

  const data ={
    email:"agungprayogi040701@gmail.com",
    password:"roottrivia"
  }


  const {mutate:loginGolang}=useMutation(async()=>{
    try {
      const res = await apigolang.post("/login", data);
      console.log(res.data);
      dispatch(SAVEUSER_ASYNCSTORE(res.data.data));
      saveDataUser();
    } catch (error) {
      console.log(error.response);
    }
    
  })

 const {mutate:loginLaravel}=useMutation(async()=>{
   try {
    const res = await apilaravel.post("/auth/login", data);
    dispatch(SAVEUSER_ASYNCSTORE(res.data));
    saveDataUser();
    console.log(res.data);
    
   } catch (error) {
    console.log(error.response);
   }
 })




  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // useEffect(() => {
  //     console.log("data resgister", dataResgister);
  //     }, [dataResgister]);


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
  return { submitLogin, initializing, handleLogout, errorMessage, loginGolang, loginLaravel };
};

export default useLogin;
