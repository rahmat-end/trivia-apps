/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

type Question = {
  question: string;
  answer: string;
  image: File | null;
};

export const Question = () => {
  const [question, setQuestion] = useState<Question>({
    question: "",
    answer: "",
    image: null,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setQuestion({
      ...question,
      [name]: files ? files[0] : value,
    });
  };
  useEffect(() => {
    console.log(question);
  }, [question]);

  const { mutate: handleSubmit } = useMutation(async (e: any) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const dataQuestion = new FormData();
      dataQuestion.append("question", question.question);
      dataQuestion.append("answer", question.answer);
      dataQuestion.append("image", question.image as File);
      const res = await axios.post(
        "http://192.168.18.169:8001/api/freeavatar/",
        dataQuestion,
        { headers }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  return { question, handleChange, handleSubmit };
};
