import {apigolang, apilaravel} from "../Components/libs/api";
import { useQuery, useMutation } from "react-query";
import { useState, useEffect } from "react";
import { useAppSelector } from "../Redux/hooks";
import { useAppDispatch } from "../Redux/hooks";
import { SAVE_USER, SAVEUSER_ASYNCSTORE } from "../Redux/dataUserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootState } from "../Redux/store";
import useUser from "./useUser";
type editDataUSer = {
  name: string;
  email: string;
  username: string;
  avatar: string;
  password: string;
  profile: string;
};
const useAvatar = () => {
  const [avatar, setAvatar] = useState("");
  const {userlogin} = useUser()
  const [addDataUser, setAddDataUser] = useState<editDataUSer>({
    name: "",
    email: "",
    username: "",
    avatar: "",
    profile: "",
    password: "",
  });
  const dispatch = useAppDispatch();
const {dataUser} = useAppSelector((state: RootState) => state.dataUser);
  const { data: dataAvatar, isLoading: dataFreevatarLoading } = useQuery(
    "dataAvatar",
    async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataUser?.token}`,
        }
        const response = await apigolang.get(
          "/freeavatars", { headers }
        );
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error.data);
      }
    }
  );

  const {data:avatarpaid }= useQuery('avatarpaid', async ()=>{
    try {
      const headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${dataUser?.token}`,
      }
      const response = await apigolang.get("/buyavatars", { headers })
      return response.data.data
    } catch (error) {
      console.log(error.data);
    }
  })

  const handleChange = (key: string, value: string) => {
    setAddDataUser({
      ...addDataUser,
      email: userlogin?.email,
      profile: userlogin?.profile,
      password: "roottrivia",
      avatar: avatar,
      [key]: value,
    });
  };

  useEffect(() => {
    console.log("data submit aba",addDataUser);
    console.log(avatar);
  }, [addDataUser, avatar]);

  const {
    mutate: createUser,
    isLoading: createUserLoading,
    isSuccess: createUserSuccess,
    isError: createUserError,
  } = useMutation(async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        
      };
      const response = await apilaravel.put(
        `/userprofile/update/${userlogin?.user_id}`,
        addDataUser,
        {
          headers,
        }
      );
      // dispatch(SAVEUSER_ASYNCSTORE(response.data.user));
      // saveDataUser();
      console.log("ini response",response.data);
      return response.data;
    } catch (error) {
      console.log("ini pesan error",error.response.data.message);
    }
  });


  const {data:getUserPaidAvatar, refetch:refetchUserPaidAvatar} = useQuery('getUserPaidAvatar', async ()=>{
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataUser?.token}`,
      }
      const response = await apilaravel.get(`/transaction/userbuyavatar/${dataUser?.userid}`, { headers })
      return response.data
    } catch (error) {
      console.log(error.response);
    }
  })

  const saveDataUser = async () => {
    try {
    const dataString =  await AsyncStorage.getItem("dataUser");
    const payload = JSON.parse(dataString);
    dispatch(SAVE_USER(payload));
      
    } catch (error) {
      console.log(error);
      
    }
    
  };

  return {
    dataAvatar,
    getUserPaidAvatar,
    dataFreevatarLoading,
    createUserError,
    createUserSuccess,
    handleChange,
    createUser,
    addDataUser,
    setAvatar,
    avatar,
    createUserLoading,
    saveDataUser,
    avatarpaid
  };
};

export default useAvatar;
