/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type useRegister= {
  name: string;
  email: string;
  password: string;
};

export const useRegister = () => {
  const [dataRegister, setDataRegister] = useState<useRegister>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataRegister({
      ...dataRegister,
      [name]: value,
    });
  };
  const { mutate: handleSubmit } = useMutation(async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8001/api/auth/register",
        dataRegister
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataRegister);
  });

  return { dataRegister, handleChange, handleSubmit };
};
