/** @format */


import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Player = () => {
  return (
    <Box p='4'
    w={"100%"}
    h={"100%"}>
      <Heading mb='4'>Dashboard Overview</Heading>
      <SimpleGrid
        columns={2}
        spacing={4}>
        <Box
          borderWidth='1px'
          borderRadius='lg'
          p='4'>
          <Text
            fontSize='lg'
            fontWeight='bold'>
            Pemain Aktif
          </Text>
          <Text mt='2'>1000</Text>
        </Box>
        <Box
          borderWidth='1px'
          borderRadius='lg'
          p='4'>
          <Text
            fontSize='lg'
            fontWeight='bold'>
            Pendapatan
          </Text>
          <Text mt='2'>$10,000</Text>
        </Box>
        {/* Tambahkan informasi lainnya */}
      </SimpleGrid>
    </Box>
  );
};

export default Player;
