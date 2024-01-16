/** @format */

// AddUserModal.tsx
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
  handleSubmit,
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
  const { question, handleChange, answer1Obj, handleAnswerSatu } = Question();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={"gray.800"}>
        <ModalHeader color={"white"}>Add Question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            // onSubmit={handleSubmitQuestion}
            encType='multipart/form-data'>
            <Input
              type='Text'
              color={"white"}
              placeholder='question'
              value={question.the_question}
              name='the_question'
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />

            <Input
              type='file'
              name='profile'
              color={"white"}
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              color={"white"}
              placeholder='answer_1'
              onChange={(e) =>handleAnswerSatu(e)} 
              value={answer1Obj.answer}
              name='answer'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            {/* <Input
              type='Text'
              placeholder='answer_1'
              onChange={(e) => handleAnswer(e)}
              value={answerObj}
              name='answer_1'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              placeholder='answer_2'
              value={answerObj}
              name='answer_2'
              onChange={(e) => handleAnswer(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              placeholder='answer_3'
              value={answerObj}
              name='answer_3'
              onChange={(e) => handleAnswer(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              onChange={(e) => handleAnswer(e)}
              value={answerObj}
              placeholder='answer_4'
              name='answer_4'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            /> */}

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
