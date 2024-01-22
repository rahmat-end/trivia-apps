/** @format */

import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { AddDiamondType } from "../../types/index";
import { useEffect } from "react";
import { apilaravel } from "../../utils/Api";

export const useAddDiamond = () => {
  const [dataDiamond, setDataDiamond] = useState<AddDiamondType>({
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
      const res = await apilaravel.post("/diamond/", dataDiamond, { headers });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // console.log(dataDiamond);
  });

  const { data: getDataDiamond } = useQuery("diamond", async () => {
    try {
      const response = await apilaravel.get("/diamond/");
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  });

  return { dataDiamond, handleChange, handleSubmit, getDataDiamond };
};
