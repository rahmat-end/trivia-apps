/** @format */

import { Box, Flex, Spacer } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import SidebarDrawer from "../components/SidebarDrawer";
import RightBar from "../components/RightBar";
import Bothbar from "../components/Bothbar";

const HomeLayout = () => {
  return (
    <Box
      minH={"100vw"}
      bgImage={
        "https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg"
      }
      bgSize='cover'
      overflowY='auto'>
      <Flex
        bg='gray.800'
        p={[2, 2, 2, 2, 2, 4]} // Adjust padding for different screen sizes
        align='center'
        direction={["column", "row"]}
        display={["flex", "flex"]}>
        <Box
          w={["100%", "20%"]}
          display={["none", "none", "flex", "flex"]}
          flex={"1"}>
          <Sidebar />
        </Box>

        <Box
          bgColor='transparent'
          display='flex'
          alignItems='center'
          color='white'
          py={2}
          px={5}
          ml={[0, 0, 0, 0, 0, 4]} // Adjust margin for different screen sizes
          gap={1}
          borderRadius='full'
          border='1px solid white'>
          <FaSearch
            flex={"1"}
            color='white'
            display='flex'
          />
          <input
            type='text'
            placeholder='Search....'
            className='w-full border-none focus:outline-none'
            style={{ backgroundColor: "transparent" }}
            color='white'
          />
        </Box>
        <Spacer />

        <Box display='flex'>
          <RightBar />
        </Box>
      </Flex>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        mt={[4, 4, 4, 4, 4, 8]} // Adjust margin-top for different screen sizes
      >
        <Box
          w={["100%", "60%"]}
          h={"20%"}
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
        alignItems='center'
        mt={[4, 4, 4, 4, 4, 8]} // Adjust margin-top for different screen sizes
      >
        <Box
          w={["100%", "60%"]}
          h={"20%"}
          p={5}
          bg={"transparent"}
          borderRadius={"lg"}
          boxShadow={"lg"}
          color={"white"}>
          <Bothbar />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
