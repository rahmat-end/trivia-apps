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
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { useAddDiamond } from "../hooks/useAddDiamond";

interface AddDiamondsProps {
  isOpen: boolean;
  onClose: () => void;
  newDiamondsData: {
    question: string;
    answer: string;
  };

  handleSubmit: () => void;
}

const AddDiamondsModal: React.FC<AddDiamondsProps> = ({ isOpen, onClose }) => {
  const { handleSubmit, handleChange } = useAddDiamond();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor={"gray.800"}>
        <ModalHeader color={"white"}>Add Diamond</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmit}
            encType='multipart/form-data'>
            <Input
              color={"white"}
              type='number'
              placeholder='Amount of Diamonds*'
              mt={4}
              name='amount_diamond'
              alignItems={"center"}
              display={"flex"}
              onChange={(e) => handleChange(e)}
            />
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.400'
                fontSize='1.2em'>
                RP
              </InputLeftElement>
              <Input
                placeholder='Enter amount'
                name='price_diamond'
                type='number'
                onChange={(e) => handleChange(e)}
              />
              <InputRightElement>
                <CheckIcon color='green.500' />
              </InputRightElement>
            </InputGroup>

            <Input
              type='file'
              name='photo_diamond'
              color={"white"}
              onChange={(e) => handleChange(e)}
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
                Add Diamond
              </Button>
            </Box>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddDiamondsModal;
