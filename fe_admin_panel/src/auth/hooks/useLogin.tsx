/** @format */

import { useState, ChangeEvent } from "react";
import { LoginType } from "../../types";
import { toast } from "react-toastify";
import getError from "../../utils/getError";
import { apigolang } from "../../utils/Api";
import { SAVE_TOKEN, SAVE_USER } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/hook";

export function useLogin() {
  const dispatch = useAppDispatch();
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

      const response = await apigolang.post("/login", form);
      dispatch(SAVE_TOKEN(response.data.data));
      saveDatauser();

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
      setIsLoginSuccess(true);
    } catch (error) {
      setIsError(true);
      setError(getError(error));
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  function saveDatauser() {
    const data = localStorage.getItem("auth");
    if (data) {
      const payload = JSON.parse(data);
      dispatch(SAVE_USER(payload));
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
    saveDatauser,
  };
}
