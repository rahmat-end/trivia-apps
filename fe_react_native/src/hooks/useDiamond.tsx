import { useQuery, useMutation } from "react-query";
import { apilaravel, apigolang } from "../Components/libs/api";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";

import { RootState } from "../Redux/store";
import { useEffect, useState } from "react";
import useUser from "./useUser";
import { SAVE_SNAP } from "../Redux/snapMidtransSlice";


const useDiamond = () => {

  const { dataUser } = useAppSelector((state: RootState) => state.dataUser);
  const dispatch = useAppDispatch();
  const {refetchUserlogin} = useUser()
  const { data: dataDiamond } = useQuery("diamond", async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${dataUser?.token}`,
      };
      const response = await apigolang.get("/diamonds", { headers });
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });

  // useEffect(() => {
  //   console.log(dataUser.token);
  // }, []);

  const { mutate: buydiamond } = useMutation(async (id: any) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataUser?.token}`,
      };
      const response = await apigolang.post(
        `/transaction/${id}`,
        {},
        { headers }
      );
      dispatch(SAVE_SNAP(response.data.data))
      console.log(response.data.data);
    } catch (error) {
      console.log(error.response.data);
    }
  });

  const { mutate: buyAvatarbyDiamond } = useMutation(async (id: any) => {
    try {
      const headers = {
        "Content-Type": "application/json",
         Authorization: `Bearer ${dataUser?.token}`,
      };
      const response = await apilaravel.post(
        `/transaction/userbuyavatar/${id}`,{},{ headers }
      );
      
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  },
  {
    onSuccess: () => {
      refetchUserlogin()
    }
  }
  
  
  );
  return {
    dataDiamond,
    buydiamond,
    buyAvatarbyDiamond,
   
  };
};

export default useDiamond;
