/** @format */

// src/pages/Dashboard.tsx
import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Player from "../components/Players";
// import Server from "../components/server";
import Content from "../components/Content";
import Serch from "../serch/components/serch";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";

const Dashboard: React.FC = () => {
  return (
    <Box
      bgImage={
        "https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg"
      }
      minH={"100vh"}
      bgSize='cover'
      overflowY='auto'>
      <Flex
        bg='gray.800'
        align='center'
        display={["none", "none", "flex", "flex"]}>
        <Box
          flex={"1"}
          display={"flex"}
          alignItems={""}
          flexDirection={"column"}
          w={"100%"}>
          <Sidebar />
        </Box>

        <Box
          flexDirection={"column"}
          gap={2}
          flex={"2"}
          ml={"200"}>
          <Serch />
        </Box>

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flex={"0"}
          mr={"50"}>
          <RightBar />
        </Box>
      </Flex>
      <Container
        maxW='container.3xl'
        p={5}>
        <Heading
          mb={"40px"}
          textAlign={"center"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"end"}
            bgColor={"gray.800"}
            className='rounded-tl-[60px] rounded-br-[60px]'
            py={"30px"}
            p={"5"}
            width={"200px"}
            height={"105px"}
            position={"relative"}
            borderEnd={"7px ridge #dcfcfe"}
            borderTop={"5px ridge #dcfcfe"}>
            <Text
              color={"gray.400"}
              fontSize={"2xl"}
              fontWeight={"bold"}>
              Admin Dashboard
            </Text>
          </Box>
        </Heading>
        <Flex gap={100}>
          <Box flex='1'>
            <Player />
          </Box>

          {/* <Box flex='0'>
            <Server />
          </Box> */}

          <Box
            flex='1'
            display={["none", "none", "flex", "flex"]}>
            <Content />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Dashboard;
