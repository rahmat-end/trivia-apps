/** @format */

import { useQuery } from "react-query";
import { apigolang } from "../../../utils/Api";
import { useAppSelector } from "../../../redux/hook";
import { RootState } from "../../../redux/store";
import { useEffect } from "react";
const useAvatar = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  useEffect(() => {
    console.log("ini token avatar", token);
  });

  const { data: dataUser, isLoading: lodingUser } = useQuery(
    "users",
    async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };

        const response = await apigolang.get("/freeavatars", { headers });

        console.log(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );

  return { dataUser, lodingUser };
};

export default useAvatar;
