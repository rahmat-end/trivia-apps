/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
// import axios from "axios";
import { apilaravel } from "../../utils/Api";

type Question = {
  the_question: string;
  photo_question: File | null;
  answer: [];
 
};

type Answer = {
  answer: string;
  isTrue: boolean;
}

export const Question = () => {
  const [answer1Obj, setAnswer1Obj] = useState({
    answer: "",
    isTrue: false,
  });
  const [question, setQuestion] = useState<Question>({
    the_question: "",
    photo_question: null,
    answer: [],
  
  });

  const handleAnswerSatu = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswer1Obj({
      ...answer1Obj,
      [name]: value,
    })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    setQuestion({
      ...question,
      [name]: files ? files[0] : value,
    });
  };
 


  useEffect(() => {
    console.log(question);
    console.log(answer1Obj);
  }, [question, answer1Obj]);

  // const { mutate: handleSubmitQuestion } = useMutation(async (e: any) => {
  //   e.preventDefault();
  //   try {
  //     const headers = {
  //       "Content-Type": "multipart/form-data",
  //     };
  //     const dataQuestion = new FormData();
  //     dataQuestion.append("the_question", question.the_question);
  //     dataQuestion.append("photo_question", question.photo_question as File);
  //     dataQuestion.append("answer_1", question.answer_1);
  //     dataQuestion.append("answer_2", question.answer_2);
  //     dataQuestion.append("answer_3", question.answer_3);
  //     dataQuestion.append("answer_4", question.answer_4);
  //     const res = await apilaravel.post("/question/", dataQuestion, {
  //       headers,
  //     });
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  return { question, handleChange,  answer1Obj, setAnswer1Obj, handleAnswerSatu };
};
