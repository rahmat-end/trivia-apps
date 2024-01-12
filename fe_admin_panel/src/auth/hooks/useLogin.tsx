/** @format */

import { useState, ChangeEvent } from "react";
import { LoginType } from "../../types";
import { toast } from "react-toastify";
import getError from "../../utils/getError";
import axios from "axios";

export function useLogin() {
  const [form, setForm] = useState<LoginType>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleLogin() {
    try {
      setIsLoading(true);

      const response = await axios.post(
        "http://192.168.18.169:8001/api/auth/login",
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
      localStorage.setItem("jwtToken", response.data.token);

      setIsError(false);
      setError("");
      setIsLoginSuccess(true);
    } catch (error) {
      setIsError(true);
      setError(getError(error));
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  console.log(form);

  return {
    form,
    handleChange,
    handleLogin,
    isLoading,
    isError,
    error,
    isLoginSuccess,
  };
}
