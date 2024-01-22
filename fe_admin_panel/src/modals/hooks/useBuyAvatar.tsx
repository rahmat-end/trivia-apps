/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import { apilaravel } from "./../../utils/Api";
import { useEffect } from "react";
import { UseBuyAvatar } from "../../types/index";

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
      const res = await apilaravel.post("/buyavatar/", dataBuyAvatar, {
        headers,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataBuyAvatar);
  });

  return { dataBuyAvatar, handleChange, handleSubmit };
};
