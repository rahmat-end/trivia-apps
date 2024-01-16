/** @format */

import { Box, Flex, Heading } from "@chakra-ui/react";
// import { useEffect } from "react";
// import useAddDiamond from "../../src/modals/hooks/useAddDiamond";
import Search from "../serch/components/serch";
import Sidebar from "../components/Sidebar";
import SidebarDrawer from "../components/SidebarDrawer";
import RightBar from "../components/RightBar";
import Bothbar from "../components/Bothbar";
import AvatarCard from "../avatar/components/AvatarCard";
import Oclock from "../components/Clock";

const HomeLayout = () => {
  // const { getDataDiamond } = useAddDiamond();
  // useEffect(() => {
  //   console.log(getDataDiamond);
  // }, [getDataDiamond]);
  return (
    <Box
      minH={"100vh"}
      bgImage={
        "https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg"
      }
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
          flexDirection={"row"}
          gap={2}
          flex={"2"}
          ml={"200"}
          w={"100%"}
          justifyContent={"flex-start"}
          display={["none", "flex"]}>
          <Search />
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

      <Heading w={"100%"}>
        <Box
          display={"flex"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          mt={"10px"}
          mr={"100px"}>
          <Oclock />
        </Box>
      </Heading>
      <Flex>
        <Box
          display='flex'
          alignItems='center'
          justifyContent={"start"}
          flexDirection={"column"}
          flex={"1"}
          w={"100%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"start"}
            w={"100%"}>
            <Box
              p={3}
              borderRadius={"lg"}
              boxShadow={"lg"}
              color={"white"}>
              <SidebarDrawer />
            </Box>
          </Box>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'>
            <Box
              w={"100%"}
              p={5}
              bg={"transparent"}
              borderRadius={"lg"}
              boxShadow={"lg"}
              color={"white"}
              gap={5}>
              <Bothbar />
            </Box>
          </Box>
        </Box>
        <Box flex={"1"}>
          <AvatarCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeLayout;
