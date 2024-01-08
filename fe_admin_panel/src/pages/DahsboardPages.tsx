/** @format */

// src/pages/Dashboard.tsx
import React from "react";
import { Box, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import Player from "../components/Players";
import Server from "../components/server";
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
      h={"100vh"}>
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
      <Container maxW='container.3xl'
      p={5}>
        <Heading mb='4'>
          <Text color={"grey"}>Admin Dashboard</Text>
        </Heading>
        <Flex>
          <Box flex='2'>
            <Player />
          </Box>
          <Spacer />
          <Box flex='1'>
            <Server />
          </Box>
          <Spacer />
          <Box flex='1'
          mr={"50"}>
            <Content />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Dashboard;
