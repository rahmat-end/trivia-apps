/** @format */

// src/pages/Dashboard.tsx
import React from "react";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Player from "../components/Players";
// import Server from "../components/server";
import Content from "../components/GetFreeAvatar";
import Serch from "../serch/components/Serch";
import Sidebar from "../components/Sidebar";
import RightBar from "../components/RightBar";
import Oclock from "../components/Clock";
import QuestionView from "../components/QuestionView";
import { FadeLoader } from "react-spinners"; //FadeLoader
import useUser from "../auth/hooks/useUser";

const Dashboard: React.FC = () => {
  const { getAllUserLoading } = useUser();
  return (
    <Box>
      <Flex
        bg='gray.800'
        align='center'
        display={["none", "none", "flex", "flex"]}>
        <Box
          display={"flex"}
          alignItems={""}
          flexDirection={"column"}
          w={"40%"}>
          <Sidebar />
        </Box>
        <Box
          display={"flex"}
          w={"30%"}
          ml={"100px"}>
          <Serch />
        </Box>

        <Box
          display='flex'
          alignItems='center'
          justifyContent={"flex-end"}
          marginRight={"70px"}
          w={"30%"}>
          <RightBar />
        </Box>
      </Flex>
      <Container maxW='container.3xl'>
        <Heading
          mb={"30px"}
          textAlign={"center"}
          justifyContent={"space-between"}
          display={"flex"}
          mt={"30px"}>
          <Box
            display={"flex"}
            py={"30px"}
            p={"5"}
            width={"200px"}
            height={"105px"}
            ml={"50px"}>
            <Text
              color={"#343F56"}
              fontSize={"4xl"}
              fontWeight={"bold"}
              textShadow='2px 5px #000000'>
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

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            ml={"10px"}
            mt={"50px"}
            mr={"65px"}>
            <Content />
          </Box>
          <Box
            ml={"10px"}
            mt={"50px"}
            mr={"65px"}>
            <QuestionView />
          </Box>
        </Flex>
      </Container>
      {getAllUserLoading && (
        <Box
          position={"fixed"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}>
          <FadeLoader color='#dbeff3' />
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
