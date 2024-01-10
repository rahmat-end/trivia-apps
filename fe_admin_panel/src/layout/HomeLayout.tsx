/** @format */

import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import SidebarDrawer from "../components/SidebarDrawer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <Box
      h={"100vh"}
      bgImage={
        "https://images.unsplash.com/photo-1490810194309-344b3661ba39?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    >
      <Flex bg="gray.800" p="2" align="center">
        <Box>
          <Sidebar />
        </Box>
        <Spacer />

        <Box
          bgColor="transparent"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          color={"white"}
          py={2}
          px={5}
          w={"50%"}
          gap={3}
          // px={200}
          borderRadius={"full"}
          border={"1px solid white"}
        >
          <FaSearch flex={0} color="white" display={"flex"} />
          <input
            type="text"
            placeholder="Search...."
            className="w-full border-none focus:outline-none "
            style={{ backgroundColor: "transparent" }}
            color="white"
            width={"100%"}
          />
        </Box>
        <Spacer />

        <Box>
          <Box flexDirection={"row"} display={"flex"}>
            <Link to={"/"}>
              <Text>
                <Button
                  mx="2"
                  color="white"
                  marginLeft={"5"}
                  bg={"transparent"}
                  _hover={{ bg: "blue" }}
                >
                  Home
                </Button>
              </Text>
            </Link>

            <Link to={"/dahsboard"}>
              <Text>
                <Button
                  mx="2"
                  color="white"
                  marginLeft={"5"}
                  bg={"transparent"}
                  _hover={{ bg: "blue" }}
                >
                  Dahsboard
                </Button>
              </Text>
            </Link>

            <Link to={"/dahsboard"}>
              <Text>
                <Button
                  mx="2"
                  color="white"
                  bg={"transparent"}
                  _hover={{ bg: "blue" }}
                >
                  Setting
                </Button>
              </Text>
            </Link>
          </Box>
        </Box>
      </Flex>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box
          margin={"5"}
          w={"60%"}
          h={"20%"}
          p={5}
          bg={"transparent"}
          borderRadius={"lg"}
          boxShadow={"lg"}
          color={"white"}
        >
          <SidebarDrawer />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeLayout;
