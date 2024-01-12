/** @format */

import { useState, ChangeEvent } from "react";
import { RegisterType } from "../../types";
import axios from "axios";

import { toast } from "react-toastify";
import getError from "../../utils/getError";

export function useRegister() {
  const [form, setForm] = useState<RegisterType>({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleRegister() {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "http://192.168.18.169:8001/api/auth/register",
        form
      );
      console.log(response);
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsError(false);
      setError("");
      setIsRegisterSuccess(true);
    } catch (error) {
      setIsError(true);
      setError(getError(error));
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    handleChange,
    handleRegister,
    isLoading,
    isError,
    error,
    isRegisterSuccess,
  };
}
