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
import { useAddFreeAvatar } from "../hooks/useAddFreeAvatar";

interface AddFreeAvatar {
  isOpen: boolean;
  onClose: () => void;

}

const AddFreeAvatarModal: React.FC<AddFreeAvatar>= ({isOpen, onClose}) => {
  const { handleChange, handleSubmit } = useAddFreeAvatar();

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Free Avatar</ModalHeader>
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
                Add Free Avatar
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddFreeAvatarModal;
