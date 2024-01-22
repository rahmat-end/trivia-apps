/** @format */

import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
// import axios from "axios";
import { apilaravel } from "../../utils/Api";

type Question = {
  the_question: string;
  profile: File | null;
  answers: Answer[]
 
};

type Answer = {
  answer: string;
  isTrue: string;
}

export const Question = () => {
  const [answer1Obj, setAnswer1Obj] = useState<Answer>({
    answer: "",
    isTrue:"false",
  });

  const [answer2Obj, setAnswer2Obj] = useState<Answer>({
    answer: "",
    isTrue:"false",
  });

  const [answer3Obj, setAnswer3Obj] = useState<Answer>({
    answer: "",
    isTrue:"false",
  })

  const [answer4Obj, setAnswer4Obj] = useState<Answer>({
    answer: "",
    isTrue:"false",
  })


  const [question, setQuestion] = useState<Question>({
    the_question: "",
    profile: null,
    answers:[]
  
  });

  const handleAnswerSatu = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswer1Obj({
      ...answer1Obj,
      [name]: value,
    })
   
  }

  const handleAnswerDua = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswer2Obj({
      ...answer2Obj,
      [name]: value,
    })
  }

  const handleAnswerTiga = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswer3Obj({
      ...answer3Obj,
      [name]: value,
    })
  }

  const handleAnswerEmpat = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAnswer4Obj({
      ...answer4Obj,
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
 

  const putDatatoArray = () => {
    setQuestion({
      ...question,
      answers: [answer1Obj, answer2Obj, answer3Obj, answer4Obj],
    });
  }

  const getDatatoArray = () => {
    setQuestion({
      ...question,
      answers: [answer1Obj, answer2Obj, answer3Obj, answer4Obj],
    });
  }

  useEffect(() => {
  putDatatoArray()
  }, [ answer1Obj, answer2Obj, answer3Obj, answer4Obj]);

  useEffect(() => {
    getDatatoArray();
  }, [answer1Obj, answer2Obj, answer3Obj, answer4Obj]);


  useEffect(() => {
    // console.log(question);
  }, [putDatatoArray]);

  const { mutate: handleSubmitQuestion } = useMutation(async (e: any) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const dataQuestion = new FormData();
      dataQuestion.append("the_question", question.the_question);
      dataQuestion.append("profile", question.profile as File);
      question.answers.forEach((answer:any, index: number) => {
        dataQuestion.append(`answers[${index}][answer]`, answer.answer);
        dataQuestion.append(`answers[${index}][isTrue]`, answer.isTrue);
      })
      const res = await apilaravel.post("/question", dataQuestion, {
        headers,
      });
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  });

  return { question, handleChange,  answer1Obj, answer2Obj, answer3Obj, answer4Obj, handleAnswerSatu,handleAnswerEmpat,handleAnswerTiga,handleAnswerDua, handleSubmitQuestion };
};
