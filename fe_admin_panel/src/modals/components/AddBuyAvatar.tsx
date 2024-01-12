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
import { useBuyAvatar } from "../hooks/useBuyAvatar";                                   

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  newUserData: { username: string; avatarUrl: string };
  setNewUserData: React.Dispatch<
    React.SetStateAction<{ username: string; avatarUrl: string }>
  >;
  handleSubmit: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const { handleChange, handleSubmit } = useBuyAvatar();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Buy Avatar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            encType='multipart/form-data'
            onSubmit={handleSubmit}>
            <Input
              type='file'
              onChange={(e) => handleChange(e)}
              name='photo_buyavatar'
              mt={4}
              alignItems={"center"}
              display={"flex"}
            />
            <Input
              placeholder='Enter amount'
              name='price_buyavatar'
              type='number'
              onChange={(e) => handleChange(e)}
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
                Add buy Avatar
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddUserModal;
