/** @format */

import { useQuery } from "react-query";
import { apilaravel, apigolang } from "../../utils/Api";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { useMutation } from "react-query";

const useUser = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const {
    data: getAllUser,
    refetch: getAllUserRefetch,
    isLoading: getAllUserLoading,
  } = useQuery("user", async () => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await apigolang.get("/users", { headers });
      console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  });

  const { mutate: handleDeleteUser } = useMutation(async (id: any) => {
    try {
      const response = await apilaravel.delete(`/user/${id}`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, {
    onSuccess: () => {
      getAllUserRefetch();
    },
  });

  return {
    getAllUser,
    handleDeleteUser,
    getAllUserRefetch,
    getAllUserLoading,
  };
};

export default useUser;
