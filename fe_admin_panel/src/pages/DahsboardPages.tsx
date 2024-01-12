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
import Oclock from "../components/Clock";

const Dashboard: React.FC = () => {
  return (
    <Box
      bgImage={
        "https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg"
      }
      minH={"100vh"}
      bgSize='cover'
      overflowY='auto'
      w={"100%"}>
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
          ml={"200"}
          w={"100%"}
          justifyContent={"flex-start"}
          display={["none", "none", "flex", "flex"]}
          px={"5px"}
          py={"10px"}>
          <Serch />
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent={"flex-end"}
          flex={"1"}
          marginRight={"70px"}>
          <RightBar />
        </Box>
      </Flex>
      <Container maxW='container.3xl'>
        <Heading
          mb={"40px"}
          textAlign={"center"}
          justifyContent={"space-between"}
          display={"flex"}
          mt={"30px"}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            bgColor={"gray.800"}
            borderTopLeftRadius={"60px"}
            borderBottomRightRadius={"60px"}
            py={"30px"}
            p={"5"}
            width={"200px"}
            height={"105px"}
            position={"relative"}
            borderEnd={"7px ridge #dcfcfe"}
            borderTop={"5px ridge #dcfcfe"}
            ml={"50px"}>
            <Text
              color={"gray.400"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              justifyContent={"end"}>
              Admin Dashboard
            </Text>
          </Box>
          <Box mr={"120px"}>
            <Oclock />
          </Box>
        </Heading>
        <Flex
          ml={"50px"}
          display={"flex"}
          flexDirection={"column"}
          flexWrap={"wrap"}>
          <Box>
            <Player />
          </Box>

          {/* <Box flex='0'>
            <Server />
          </Box> */}

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            ml={"50px"}
            mt={"50px"}>
            <Content />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Dashboard;
