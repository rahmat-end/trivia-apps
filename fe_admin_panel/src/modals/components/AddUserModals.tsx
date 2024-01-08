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
// import { useAddUser } from "../hooks/useAddUser";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  newUserData: { username: string; avatarUrl: string };
  setNewUserData: React.Dispatch<
    React.SetStateAction<{ username: string; avatarUrl: string }>
  >;
  handleSubmit: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({
  isOpen,
  onClose,
  newUserData,
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
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            type='text'
            placeholder='Avatar Name *'
            name="username"
            value={newUserData.username}
            onChange={(e) =>
              setNewUserData({ ...newUserData, username: e.target.value })
            }
          />
          <Input
            type='file'
            accept='image/*'
            onChange={(e) => handleImageUpload(e)}
            name="avatar"
            placeholder='Avatar Pengguna'
            value={newUserData.avatarUrl}
            mt={4}
            alignItems={"center"}
            display={"flex"}
          />
          <Box
            mt={4}
            width={"100%"}
            display={"flex"}>
            <Button
              onClick={handleSubmit}
              colorScheme='blue'
              alignItems={"center"}
              justifyContent={"end"}>
              {" "}
              Add Avatar
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
