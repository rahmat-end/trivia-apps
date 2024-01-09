/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import { useEffect } from "react";

type AddDiamond = {
  amount_diamond: number;
  price_diamond: number;
  photo_diamond: File | null;
};

export const useAddDiamond = () => {
  const [dataDiamond, setDataDiamond] = useState<AddDiamond>({
    amount_diamond: 0,
    price_diamond: 0,
    photo_diamond: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setDataDiamond({
      ...dataDiamond,
      [name]: files ? files[0] : value,
    });
  };
  useEffect(() => {
    console.log(dataDiamond);
  }, [dataDiamond]);

  const { mutate: handleSubmit } = useMutation(async (e: any) => {
    e.preventDefault();

    const headers = {
      "Content-Type": "multipart/form-data",
    };
    try {
      const res = await axios.post(
        "http://192.168.18.169:8001/api/diamond/",
        dataDiamond,
        { headers }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataDiamond);
  });

  return { dataDiamond, handleChange, handleSubmit };
};
