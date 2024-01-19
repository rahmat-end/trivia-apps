/** @format */

// Import tambahan
// import { createBrowserHistory, History } from "history";
import React, { useEffect } from "react";
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

import { useFetchUserData } from "../auth/hooks/useDataUser";
import useUser from "../auth/hooks/useUser";

const Players: React.FC = () => {
  const { getAllUser, handleDeleteUser, getAllUserRefetch } = useUser();

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
        mr={20}
        bgColor={"gray.800"}
        p={5}
        marginRight={"70px"}
        fontWeight={"bold"}
        color={"grey"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}>
        <Table
          variant='striped'
          size={"sm"}
          flexWrap={"wrap"}
          alignItems={"center"}>
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
              <Tr
                key={index}
                p={10}
                borderRadius={"lg"}
                flexDirection={"column"}
                gap={2}
                alignItems={"center"}
                justifyContent={"center"}>
                <Td>
                  <Image
                    src={item.avatar}
                    alt={`Avatar of ${item.name}`}
                    boxSize='40px'
                    borderRadius='full'
                  />
                </Td>
                <Td>{index}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.diamond}</Td>
                <Td>{item.throphy}</Td>
                <Td
                  alignItems={"center"}
                  justifyContent={"end"}>
                  <Button
                    colorScheme='red'
                    size='sm'
                    onClick={() => handleDeleteUser(item.user_id)}>
                    <FaTrash />
                    Delete
                  </Button>
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
