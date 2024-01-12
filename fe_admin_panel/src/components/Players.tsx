/** @format */

// Import tambahan
// import { createBrowserHistory, History } from "history";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import Avatar from "../assets/image/AvatarBerbayar1.png";
import { useFetchUserData } from "../auth/hooks/useDataUser";
import useUser from "../auth/hooks/useUser";

const Players: React.FC = () => {
  const { getAllUser, deleteUser, getAllUserRefetch } = useUser();

  const { handleFetchUserData } = useFetchUserData();

  useEffect(() => {
    handleFetchUserData();
  }, []);

  useEffect(() => {
    getAllUserRefetch();
  }, [getAllUser]);

  return (
    <>
      <Box
        bgColor={"gray.800"}
        p={5}
        borderRadius={"lg"}
        fontWeight={"bold"}
        color={"grey"}
        border={"10px inset  #dcfcfe"}>
        <Table
          variant='striped'
          size={"sm"}
          colorScheme={"gray"}
          overflow={"auto"}>
          <Thead>
            <Tr>
              <Th color={"white"}>Avatar</Th>
              <Th color={"white"}>Number</Th>
              <Th color={"white"}>Nama</Th>
              <Th color={"white"}>Email</Th>
              <Th color={"white"}>Diamonds</Th>
              <Th color={"white"}>Trhopy</Th>
            </Tr>
          </Thead>
          <Tbody p={10}>
            {getAllUser?.map((item: any, index: number) => (
              <Tr key={index}>
                <Td>
                  <Image
                    src={Avatar}
                    alt={`Avatar of ${item.name}`}
                    boxSize='40px'
                    borderRadius='full'
                  />
                </Td>
                <Td>{index}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.throphy}</Td>
                <Td>{item.diamond}</Td>
                <Td
                  alignItems={"center"}
                  justifyContent={"end"}>
                  <Button
                    colorScheme='red'
                    size='sm'
                    onClick={() => deleteUser(item.user_id)}>
                    <FaTrash />
                    Delete
                  </Button>
                  {/* <Button
                    colorScheme='teal'
                    size='sm'
                    ml={2}
                    // onClick={() => handleEdit(player.no)}
                    
                    >
                    <FaEdit />
                    Edit
                  </Button> */}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Players;
