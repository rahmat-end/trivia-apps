/** @format */

import axios from "axios";
import { useQuery } from "react-query";
import { apigolang } from "../../utils/Api";

const useGetFreeAvatar = () => {
  const { data: getFreeavatar, refetch: getFreeavatarRefetch } = useQuery(
    "freeavatar",
    async () => {
      try {
        const response = await apigolang.get(
          "/freeavatars"
        );
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
   const deleteGetFreeavatar = async (id: number) => {
     try {
       const response = await axios.delete(
         `http://192.168.18.169:8001/freeavatar/1${id}`
       );
       console.log(response.data);
     } catch (error) {
       console.log(error);
     }
   };

  return {
    getFreeavatar,
    getFreeavatarRefetch,
    deleteGetFreeavatar
  };
};
export default useGetFreeAvatar;
