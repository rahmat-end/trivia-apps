/** @format */

import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type useRegister = {
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
      const headers = {
        "Content-Type": "multipart/form-data",
      }
      const res = await axios.post(
        "http://192.168.18.169:8001/api/auth/registeruser",
        dataRegister,
        { headers }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(dataRegister);
  });

  return { dataRegister, handleChange, handleSubmit };
};
