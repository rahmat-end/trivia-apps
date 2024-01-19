/** @format */

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  Box,
  Text,
  Radio,
  InputGroup,
} from "@chakra-ui/react";
import { Question } from "../hooks/useQuestion";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  newUserData: { username: string; avatarUrl: string };
  setNewUserData: React.Dispatch<
    React.SetStateAction<{ username: string; avatarUrl: string }>
  >;
  handleSubmit: () => void;
}

const AddQuestionModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  setNewUserData,
}) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewUserData((prevUserData) => ({
          ...prevUserData,
          avatarUrl: reader.result as string,
        }));
      };
    }
  };
  const {
    question,
    handleChange,
    answer1Obj,
    answer2Obj,
    answer3Obj,
    answer4Obj,
    handleAnswerSatu,
    handleAnswerDua,
    handleAnswerEmpat,
    handleAnswerTiga,
    handleSubmitQuestion,
  } = Question();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior='inside'>
      <ModalOverlay />
      <ModalContent
        bgColor={"gray.800"}
        gap={4}>
        <ModalHeader color={"white"}>Add Question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmitQuestion}
            encType='multipart/form-data'>
            <Input
              type='Text'
              placeholder='question'
              value={question.the_question}
              name='the_question'
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
              color={"white"}
            />

            <Input
              type='file'
              name='profile'
              onChange={(e) => handleChange(e)}
              color={"white"}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Text color={"white"}>Pilihan Jawaban</Text>
            <Input
              type='Text'
              placeholder='answer 1'
              onChange={(e) => handleAnswerSatu(e)}
              color={"white"}
              value={answer1Obj.answer}
              name='answer'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <InputGroup
              display={"flex"}
              gap={2}
              alignItems={"center"}>
              <Radio
                value='true'
                color={"white"}
                name='isTrue'
                onChange={(e) => handleAnswerSatu(e)}></Radio>
              <Text color={"white"}>Kunci Jawaban</Text>
            </InputGroup>

            <Input
              type='Text'
              placeholder='answer 2'
              onChange={(e) => handleAnswerDua(e)}
              color={"white"}
              value={answer2Obj.answer}
              name='answer'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <InputGroup
              display={"flex"}
              gap={2}
              alignItems={"center"}>
              <Radio
                value='true'
                color={"white"}
                name='isTrue'
                onChange={(e) => handleAnswerDua(e)}>
                <Text color={"white"}>Kunci Jawaban</Text>
              </Radio>
            </InputGroup>

            <Input
              type='Text'
              placeholder='answer 3'
              onChange={(e) => handleAnswerTiga(e)}
              color={"white"}
              value={answer3Obj.answer}
              name='answer'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <InputGroup className='flex gap-2 items-center'>
              <Radio
                value='true'
                color={"white"}
                onChange={(e) => handleAnswerTiga(e)}
                name='isTrue'>
                <Text color={"white"}>Kunci Jawaban</Text>
              </Radio>
            </InputGroup>

            <Input
              type='Text'
              placeholder='answer 4'
              color={"white"}
              onChange={(e) => handleAnswerEmpat(e)}
              value={answer4Obj.answer}
              name='answer'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <InputGroup className='flex gap-2 items-center'>
              <Radio
                value='true'
                onChange={(e) => handleAnswerEmpat(e)}
                color={"white"}
                name='isTrue'>
                {" "}
                <Text color={"white"}>Kunci Jawaban</Text>
              </Radio>
            </InputGroup>

            <Box
              mt={4}
              width={"100%"}
              display={"flex"}>
              <Button
                type='submit'
                name='Question'
                colorScheme='blue'
                alignItems={"center"}
                justifyContent={"end"}>
                {" "}
                Add Question
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddQuestionModal;
