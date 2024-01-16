/** @format */

import { useQuery } from "react-query";
import { apilaravel } from "../../utils/Api";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

const useUser = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const { data: getAllUser, refetch: getAllUserRefetch } = useQuery(
    "user",
    async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        const response = await apilaravel.get("/user/", { headers });
        console.log(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  const deleteUser = async (id: number) => {
    try {
      const response = await apilaravel.delete(`/user/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getAllUser,
    deleteUser,
    getAllUserRefetch,
  };
};

export default useUser;
