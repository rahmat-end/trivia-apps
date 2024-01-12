/** @format */
import { useEffect, useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

export const useAddAvatar = () => {
  const [dataUser, setDataUser] = useState<UserData>({
    name: "",
    email: "",
    avatar: "",
  });

  const { mutate: handleAddAvatar } = useMutation(async () => {
    try {
      // Gantilah URL dengan endpoint yang sesuai untuk menambahkan avatar
      const response = await axios.post(
        "http://192.168.18.182:8001/api/add-avatar",
        dataUser
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding avatar:", error);
    }
  });

  // Fungsi untuk mengatur data pengguna
  const handleUserData = (userData: UserData) => {
    setDataUser(userData);
  };

  return { dataUser, handleAddAvatar, handleUserData };
};

export const useFetchUserData = () => {
  const { mutate: fetchDataUser } = useMutation(async () => {
    try {
      const response = await axios.get("http://192.168.18.182:8001/api/user");
      console.log(response.data);
      // Jika ingin mengambil data dari respons dan mengubah state atau melakukan operasi lain, tambahkan kode di sini.
    } catch (error) {
      console.error("Error fetching or parsing data:", error);
    }
  });

  // Fungsi untuk memanggil pengambilan data pengguna
  const handleFetchUserData = () => {
    fetchDataUser();
  };

  useEffect(() => {
    // Panggil fungsi untuk mengambil data pengguna saat komponen pertama kali dimuat
    handleFetchUserData();
  }, []);

  return { handleFetchUserData };
};
