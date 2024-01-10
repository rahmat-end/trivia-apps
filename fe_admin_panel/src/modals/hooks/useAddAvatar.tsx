/** @format */

import React from "react";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type AddAvatarModal = {
  photo_freeavatar: File | null;

};

export const useAddAvatar = () => {
  const [dataAvatar, setDataAvatar] = useState<AddAvatarModal>({
    photo_freeavatar: null
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files, value } = event.target;
    setDataAvatar({
      ...dataAvatar,
      [name]: files ? files[0] : value
    })
  };

  useEffect(() => {

    console.log(dataAvatar);
  },[dataAvatar])
  const { mutate: handleSubmit } = useMutation(async (e: any) => {
    e.preventDefault();
    try {

      const headers = {
        "Content-Type": "multipart/form-data",
      }
      const formData = new FormData();
      formData.append("photo_freeavatar", dataAvatar.photo_freeavatar as File);
      const res = await axios.post(
        "http://192.168.18.169:8001/api/freeavatar/",
        formData, {headers}
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  return { dataAvatar, handleChange, handleSubmit};
};
