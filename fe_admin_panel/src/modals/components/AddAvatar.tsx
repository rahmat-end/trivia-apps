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
import { useAddAvatar } from "../hooks/useAddAvatar";

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
}) => {
  const { handleChange,  handleSubmit } = useAddAvatar();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            encType='multipart/form-data'
            onSubmit={handleSubmit}>
            <Input
              type='file'
              onChange={(e) => handleChange(e)}
              name='photo_freeavatar'
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
                colorScheme='blue'
                alignItems={"center"}
                justifyContent={"end"}>
                {" "}
                Add Avatar
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
