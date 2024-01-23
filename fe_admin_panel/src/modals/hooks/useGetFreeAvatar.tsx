/** @format */

import { useQuery } from "react-query";
import { apilaravel, apigolang } from "../../utils/Api";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
const useGetFreeAvatar = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const { data: getFreeavatar, refetch: getFreeavatarRefetch } = useQuery(
    "freeavatar",
    async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const response = await apigolang.get("/freeavatars", { headers });
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  const deleteGetFreeavatar = async (id: number) => {
    try {
      const response = await apilaravel.delete(`/freeavatar/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getFreeavatar,
    getFreeavatarRefetch,
    deleteGetFreeavatar,
  };
};
export default useGetFreeAvatar;
