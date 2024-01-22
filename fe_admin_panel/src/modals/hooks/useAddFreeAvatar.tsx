/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";

import { apilaravel } from "../../utils/Api";

type AddFreeAvatarModal = {
  photo_freeavatar: File | null;
};

export const useAddFreeAvatar = () => {
  const [dataFreeAvatar, setDatafreeAvatar] = useState<AddFreeAvatarModal>({
    photo_freeavatar: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = event.target;
    setDatafreeAvatar({
      ...dataFreeAvatar,
      [name]: files ? files[0] : value,
    });
  };

  useEffect(() => {
    console.log(dataFreeAvatar);
  }, [dataFreeAvatar]);

  const { mutate: handleSubmit } = useMutation(async (e: any) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const formData = new FormData();
      formData.append(
        "photo_freeavatar",
        dataFreeAvatar.photo_freeavatar as File
      );
      const res = await apilaravel.post("/freeavatar/", formData, { headers });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  });

  return { dataFreeAvatar, handleChange, handleSubmit };
};
