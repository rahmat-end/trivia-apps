/** @format */

import { useQuery } from "react-query";
import { apigolang, apilaravel } from "../../utils/Api";

const useUser = () => {
  const { data: getAllUser, refetch: getAllUserRefetch } = useQuery(
    "user",
    async () => {
      try {
        const response = await apigolang.get("/users");
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
