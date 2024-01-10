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
  const { mutate: handleSubmit } = useMutation(async (e: any) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const res = await axios.post(
        "http://192.168.18.169:8001/api/auth/login",
        dataLogin,
        { headers }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataLogin);
  });

  return { dataLogin, handleChange, handleSubmit };
};
