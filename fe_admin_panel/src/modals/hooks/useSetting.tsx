/** @format */

import { useQuery } from "react-query";
// import { apilaravel } from "../../utils/Api";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
const useSetting = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const { data: getSetting, refetch: getSettingRefetch } = useQuery(
    "Setting",
    async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        // const response = await apilaravel.get("/freeavatar/", { headers });
        // console.log(response.data.data);
      //   return response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  );
  // const deleteGetFreeavatar = async (id: number) => {
  //   try {
  //     const response = await apilaravel.delete(`/freeavatar/${id}`);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return {
    getSetting,
    getSettingRefetch,
    // deleteGetFreeavatar,
  };
};
export default useSetting;
