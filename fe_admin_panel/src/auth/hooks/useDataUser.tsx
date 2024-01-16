/** @format */
import { useEffect, useState } from "react";
import { apilaravel } from "../../utils/Api";
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
      const response = await apilaravel.post("/add-avatar", dataUser);
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
      const response = await apilaravel.get("/user");
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
