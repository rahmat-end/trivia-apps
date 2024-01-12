/** @format */

import { useQuery } from "react-query";
import axios from "axios";

const useAvatar = () => {
  const { data: dataUser, isLoading: lodingUser } = useQuery(
    "users",
    async () => {
      try {
        const response = await axios.get(
          "https://9403-2404-8000-1004-1019-e4df-1298-a6cd-8e38.ngrok-free.app/api/freeavatar/"
        );
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
