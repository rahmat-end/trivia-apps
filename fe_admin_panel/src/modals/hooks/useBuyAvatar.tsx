/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useEffect } from "react";

type UseBuyAvatar = {
  photo_buyavatar: File | null;
  price_buyavatar: number;
};

export const useBuyAvatar = () => {
  const [dataBuyAvatar, setDataBuyAvatar] = useState<UseBuyAvatar>({
    photo_buyavatar: null,
    price_buyavatar: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setDataBuyAvatar({
      ...dataBuyAvatar,
      [name]: files ? files[0] : value,
    });
  };
  useEffect(() => {
    console.log(dataBuyAvatar);
  }, [dataBuyAvatar]);

  const { mutate: handleSubmit } = useMutation(async (e: any) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "multipart/form-data",
    };
    try {
      const res = await axios.post(
        "http://192.168.18.169:8001/api/buyavatar/",
        dataBuyAvatar,
        { headers }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataBuyAvatar);
  });

  return { dataBuyAvatar, handleChange, handleSubmit };
};
