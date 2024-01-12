/** @format */

import { Box, Flex, Heading } from "@chakra-ui/react";
import Search from "../serch/components/serch";
import Sidebar from "../components/Sidebar";
import SidebarDrawer from "../components/SidebarDrawer";
import RightBar from "../components/RightBar";
import Bothbar from "../components/Bothbar";
import AvatarCard from "../avatar/components/AvatarCard";
import Clock from "../components/Clock";
import { useAddDiamond } from "../modals/hooks/useAddDiamond";
import { useEffect } from "react";

const HomeLayout = () => {
  const {getDataDiamond} = useAddDiamond()
  useEffect(() => {
    console.log(getDataDiamond)
  },[getDataDiamond])
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
        direction={["column", "row"]}
        display={["flex", "flex"]}>
        <Box
          w={["100%"]}
          display={["none", "none", "flex", "flex"]}
          justifyContent={"flex-start"}
          flex={"2"}>
          <Sidebar />
        </Box>
        <Box
          w={["100%"]}
          flex={"1"}
          display={["none", "none", "flex", "flex"]}
          px={"5px"}
          py={"5px"}
          justifyContent={"flex-start"}>
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
          <Clock />
        </Box>
      </Heading>
      <Flex>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection={"column"}
          flex={"1"}>
          <Box
            display={"flex"}
            flexDirection={"column"}>
            <Box
              w={"100%"}
              p={3}
              bg={"transparent"}
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
              color={"white"}>
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
