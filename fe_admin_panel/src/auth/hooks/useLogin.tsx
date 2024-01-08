/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type useLogin = {

  email: string;
  password: string;
};

export const useLogin = () => {
  const [dataLogin, setDataLogin] = useState<useLogin>({
   
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setDataLogin({
      ...dataLogin,
      [name]: value,
    });
  };
  const { mutate: handleSubmit } = useMutation(async () => {
    try {
      const res = await axios.post(
        "http://127.0.0.1:8001/api/auth/login",
        dataLogin
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataLogin);
  });

  return { dataLogin, handleChange, handleSubmit };
};
