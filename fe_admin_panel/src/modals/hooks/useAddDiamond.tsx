/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type AddDiamond = {
  amount: number;
  price: number;
};

export const useAddDiamond = () => {
  const [dataDiamond, setDataDiamond] = useState<AddDiamond>({
    amount: 0,
    price: 0,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataDiamond({
      ...dataDiamond,
      [name]: value,
    });
  };
const {mutate:handleSubmit} = useMutation( async () => {
  try {
    
    const res = await axios.post("http://127.0.0.1:8001/api/diamond/", dataDiamond);
    console.log(res)
  } catch (error) {
    console.log(error)  
  }
  console.log(dataDiamond);
  
})
   
  return { dataDiamond, handleChange, handleSubmit };
};
