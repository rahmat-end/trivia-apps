/** @format */

import React from "react";
import { useState } from "react";

type Question = {
    question: string;
    answer: string;

};

export const Question = () => {
  const [question, setQuestion] = useState<Question>({
    question: "",
    answer: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setQuestion({
      ...question,
      [name]: value,
    });

    console.log(question);
  };
  return { question, handleChange };
};
