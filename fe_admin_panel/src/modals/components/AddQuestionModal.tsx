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
  const { question, handleChange } = Question();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmit}
            encType='multipart/form-data'>
            <Input
              type='Text'
              accept='text/*'
              placeholder='question'
              value={question.question}
              name='question'
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />

            <Input
              type='file'
              accept='image/*'
              name='image'
              onChange={(e) => handleImageUpload(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              placeholder='answer 1'
              onChange={(e) => handleChange(e)}
              name='answer'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              placeholder='answer2'
              name='answer2'
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              placeholder='answer 3'
              name='answer3'
              onChange={(e) => handleChange(e)}
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              type='Text'
              onChange={(e) => handleChange(e)}
              placeholder='answer 4'
              name='answer4'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />

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
