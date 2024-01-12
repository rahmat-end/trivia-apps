/** @format */

// src/components/PlayersManagement.tsx
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const Players: React.FC = () => {
  const playersData = [
    { id: 1, name: "Player 1", level: 10, diamonds: 1000 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },
    { id: 2, name: "Player 2", level: 15, diamonds: 1500 },

    // ... data pemain lainnya
  ];

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
              <Th color={"white"}>ID</Th>
              <Th color={"white"}>Nama</Th>
              <Th color={"white"}>Level</Th>
              <Th color={"white"}>Diamonds</Th>
            </Tr>
          </Thead>
          <Tbody>
            {playersData.map((player) => (
              <Tr key={player.id}>
                <Td>{player.id}</Td>
                <Td>{player.name}</Td>
                <Td>{player.level}</Td>
                <Td>{player.diamonds}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default Players;
