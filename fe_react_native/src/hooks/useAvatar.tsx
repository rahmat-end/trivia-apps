import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
import { useState, useEffect } from "react";
import useLogin from "./useLogin";
import { useAppSelector } from "../Redux/hooks";
import { useNavigation } from "@react-navigation/native";
type createDataUSer = {
  name: string;
  email: string;
  username: string;
  avatar: string;
  password: string;
};
const useAvatar =() => {
  const user = useAppSelector((state: any) => state.user.user);
  const[avatar, setAvatar]=useState("");
  const [addDataUser, setAddDataUser] = useState({
    name:"",
    email:"",
    username:"",
    avatar: "",
    profile:"",
    password:""
  });

  const navigation = useNavigation();
  const { data: dataAvatar, isLoading: dataFreevatarLoading } = useQuery(
    "user",
    async () => {
      try {
        const response = await axios.get(
          "http://192.168.18.169:8001/api/freeavatar"
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  const handleChange = (key: string, value: string)=>{
    setAddDataUser({
      ...addDataUser,
      name: user.displayName,
      email: user.email,
      profile: user.photoURL,
      password:"roottrivia",
      avatar: avatar,
     [key]: value
    })
  }

  useEffect(() => {
    console.log(addDataUser)
  },[addDataUser,avatar])



  const { mutate: createUser, isLoading: createUserLoading } = useMutation(
    async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
        }
        const response = await axios.post(
          "http://192.168.18.169:8001/api/auth/registeruser", addDataUser, {
            headers,
          }
        );
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },{
      onSuccess: () => {
        navigation.goBack();
      },
    }
  );

  return { dataAvatar, dataFreevatarLoading, handleChange, createUser, addDataUser, setAvatar };
};

export default useAvatar;
