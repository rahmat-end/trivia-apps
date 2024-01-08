/** @format */

import React from "react";
import { useState } from "react";

type AddAvatarModal = {
  Username: string;
  avatar: string;
};

export const useAddAvatar = () => {
  const [dataUser, setDataUser] = useState<AddAvatarModal>({
    Username: "",
    avatar: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataUser({
      ...dataUser,
      [name]: value,
    });

    console.log(dataUser);
  };
  return { dataUser, handleChange };
};
