/** @format */

// Import tambahan
import { createBrowserHistory, History } from "history";
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
import { FaEdit, FaTrash } from "react-icons/fa";
import Avatar from "../assets/image/AvatarBerbayar1.png";
import { useFetchUserData } from "../auth/hooks/useDataUser";
import useUser from "../auth/hooks/useUser";

const Players: React.FC = () => {
  const {getAllUser, deleteUser, getAllUserRefetch} = useUser()
  const playersData = [
    { no: 1, name: "Player 1", email: 10, diamonds: 1000, Trhopy: 1000 },
    { no: 2, name: "Player 2", email: 20, diamonds: 2000, Trhopy: 2000 },
    { no: 3, name: "Player 3", email: 30, diamonds: 3000, Trhopy: 3000 },
    { no: 4, name: "Player 4", email: 40, diamonds: 4000, Trhopy: 4000 },
    // ... other player data
  ];

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPlayerNo, setSelectedPlayerNo] = useState<number | null>(null);

  const { handleFetchUserData } = useFetchUserData();
  const history: History = createBrowserHistory();

  useEffect(() => {
    handleFetchUserData();
  }, []);

  // const handleDelete = (playerNo: number) => {
  //   setSelectedPlayerNo(playerNo);
  //   console.log(`Deleted player with number ${playerNo}`);
  //   // setShowDeleteModal(true);
  //   // ... rest of the code
  // };

  // const handleEdit = (playerNo: number) => {
  //   setSelectedPlayerNo(playerNo);
  //   setShowEditModal(true);
  // };

  // const handleConfirmDelete = () => {
  //   console.log(`Confirmed deletion of player with number ${selectedPlayerNo}`);
  //   setSelectedPlayerNo(null);
  
  //   // ... rest of the code
  // };

  // const handleCancelDelete = () => {
  //   console.log("Cancelled deletion");
  //   setSelectedPlayerNo(null);
  //   // setShowDeleteModal(false);
  //   // ... rest of the code
  // };

  // const handleConfirmEdit = () => {
  //   setShowEditModal(false);
  //   setSelectedPlayerNo(null);
  //   handleFetchUserData();
  //   handleConfirmEdit();
  //   console.log(`Confirmed edit of player with number ${selectedPlayerNo}`);
  //   // ... rest of the code
  // };

  // const handleCancelEdit = () => {
  //   setShowEditModal(false);
  //   setSelectedPlayerNo(null);
  //   console.log("Cancelled edit");
  // };

  useEffect(() => {
    getAllUserRefetch()
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
            {getAllUser?.map((item:any, index: number) => (
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
                    onClick={()=> deleteUser(item.user_id)}
                    >
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
