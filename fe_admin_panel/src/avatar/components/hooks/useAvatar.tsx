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

  const { data: dataAvatar, isLoading: lodingUser } = useQuery(
    "avatar",
    async () => {
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
    }
  );

  return { dataAvatar, lodingUser };
};

export default useAvatar;
