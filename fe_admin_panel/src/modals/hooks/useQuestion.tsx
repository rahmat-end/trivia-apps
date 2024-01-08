/** @format */

import React from "react";
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
    const { name, value } = event.target;
    setQuestion({
      ...question,
      [name]: value,
    });

    console.log(question);
  };

  const { mutate: handleSubmit } = useMutation(async () => {
    try {
      const dataQuestion = new FormData();
      dataQuestion.append("question", question.question);
      dataQuestion.append("answer", question.answer);
      dataQuestion.append("image", question.image as File);
      const res = await axios.post(
        "http://127.0.0.1:8001/api/freeavatar/",
        dataQuestion
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  return { question, handleChange, handleSubmit };
};
