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
  Radio, RadioGroup, Stack
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
  const { question, handleChange, answer1Obj, answer2Obj, answer3Obj, answer4Obj,
    handleAnswerSatu, handleAnswerDua, handleAnswerEmpat, handleAnswerTiga, handleSubmitQuestion } = Question();

  return (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmitQuestion}
            encType="multipart/form-data"
          >
            <Input
              type="Text"
              placeholder="question"
              value={question.the_question}
              name="the_question"
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />

            <Input
              type="file"
              name="profile"
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <p>Pilihan Jawaban</p>
            <Input
              type="Text"
              placeholder="answer 1"
              onChange={(e) => handleAnswerSatu(e)}
              value={answer1Obj.answer}
              name="answer"
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <span className="flex gap-2 items-center">
            <input type="radio" value="true" checked name="isTrue" onChange={(e) => handleAnswerSatu(e)}/>
            Kunci Jawaban
            </span>

            <Input
              type="Text"
              placeholder="answer 2"
              onChange={(e) => handleAnswerDua(e)}
              value={answer2Obj.answer}
              name="answer"
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <span className="flex gap-2 items-center">
            <input type="radio" value="true"  name="isTrue" onChange={(e) => handleAnswerDua(e)}/>
            Kunci Jawaban
            </span>

            <Input
              type="Text"
              placeholder="answer 3"
              onChange={(e) => handleAnswerTiga(e)}
              value={answer3Obj.answer}
              name="answer"
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <span className="flex gap-2 items-center">
            <input type="radio" value="true"  name="isTrue" onChange={(e) => handleAnswerTiga(e)}/>
            Kunci Jawaban
            </span>


            <Input
              type="Text"
              placeholder="answer 4"
              onChange={(e) => handleAnswerEmpat(e)}
              value={answer4Obj.answer}
              name="answer"
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <span className="flex gap-2 items-center">
            <input type="radio" value="true"  name="isTrue" onChange={(e) => handleAnswerEmpat(e)}/>
            Kunci Jawaban
            </span>


            

            <Box mt={4} width={"100%"} display={"flex"}>
              <Button
                type="submit"
                name="Question"
                colorScheme="blue"
                alignItems={"center"}
                justifyContent={"end"}
              >
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
