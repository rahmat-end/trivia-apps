import { useQuery, useMutation } from "react-query";
import { apilaravel, apigolang } from "../Components/libs/api";
import { useAppSelector, useAppDispatch } from "../Redux/hooks";

import { RootState } from "../Redux/store";
import useUser from "./useUser";
import { SAVE_SNAP } from "../Redux/snapMidtransSlice";



const useDiamond = () => {

  const { dataUser } = useAppSelector((state: RootState) => state.dataUser);
  const {user} = useAppSelector((state: RootState) => state.dataUserGolang);
  const {diamond} = useAppSelector((state: RootState) => state.diamond);
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

  const { mutate: buydiamond } = useMutation(async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      };
      const response = await apigolang.post(
        `/transaction/${diamond.dimaond_id}`,
        {},
        { headers }
      );
      dispatch(SAVE_SNAP(response.data.data))
      console.log(response.data.data);
    } catch (error) {
      console.log("error snap",error.response);
    }
  },
  {
    onSuccess: () => {
      refetchUserlogin()
    }
  });

  const { mutate: buyAvatarbyDiamond, isLoading: isLoadingBuyAvatar, isSuccess:isSuccessBuyAvatar } = useMutation(async (id: any) => {
    try {
      const headers = {
        "Content-Type": "application/json",
         Authorization: `Bearer ${dataUser?.token}`,
      };
      const response = await apilaravel.post(
        `/transaction/userbuyavatar/${id}`,{},{ headers }
      );
      
      // console.log("response beli avatar",response);
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
    isLoadingBuyAvatar,
    isSuccessBuyAvatar,
  
   
  };
};

export default useDiamond;
