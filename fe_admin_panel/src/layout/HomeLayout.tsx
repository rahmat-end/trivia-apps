/** @format */

import { Box, Flex, Heading } from "@chakra-ui/react";
// import { useEffect } from "react";
// import useAddDiamond from "../../src/modals/hooks/useAddDiamond";
import Search from "../serch/components/Serch";
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
          <Search />
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
        <Box
          display={"flex"}
          w={"100%"}
          flexWrap={"wrap"}
          alignItems={"center"}>
          <AvatarCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeLayout;
