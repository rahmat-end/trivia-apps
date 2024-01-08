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
import  {useAddDiamond}  from "../hooks/useAddDiamond"

interface AddDiamondsProps {
  isOpen: boolean;
  onClose: () => void;
  newDiamondsData: {
    question: string;
    answer: string;
  };

  handleSubmit: () => void;
}



const AddDiamondsModal: React.FC<AddDiamondsProps> = ({
  isOpen,
  onClose,
  handleSubmit,
}) => {

  const { dataDiamond, handleChange } = useAddDiamond();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Diamond</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            type='number'
            accept='text/*'
            placeholder='Amount of Diamonds*'
            mt={4}
            name="amount"
            value={dataDiamond.amount}
            alignItems={"center"}
            display={"flex"}
            onChange={(e) => handleChange(e)}
          />
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'>

              RP
            </InputLeftElement>
            <Input
              placeholder='Enter amount'
              name="price"
              value={dataDiamond.price}
              type='number'
              onChange={(e) => handleChange(e)}
            />
            <InputRightElement>
              <CheckIcon color='green.500' />
            </InputRightElement>
          </InputGroup>

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
              Add Diamond
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddDiamondsModal;
