/** @format */

<<<<<<< HEAD
import { Box, Flex, Spacer, Text, Button } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import SidebarDrawer from "../components/SidebarDrawer";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
=======
import { Box, Flex } from "@chakra-ui/react";
import Search from "../serch/components/serch";
import Sidebar from "../components/Sidebar";
import SidebarDrawer from "../components/SidebarDrawer";
import RightBar from "../components/RightBar";
import Bothbar from "../components/Bothbar";
import AvatarCard from "../avatar/components/AvatarCard";
>>>>>>> 49d105ff244509fb4eb101c5ea8040a14717b06e

const HomeLayout = () => {
  return (
    <Box
      minH={"100vh"}
      bgImage={
<<<<<<< HEAD
        "https://images.unsplash.com/photo-1490810194309-344b3661ba39?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
    >
      <Flex bg="gray.800" p="2" align="center">
        <Box>
=======
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
>>>>>>> 49d105ff244509fb4eb101c5ea8040a14717b06e
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
<<<<<<< HEAD
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
=======
          display='flex'
          alignItems='center'
          justifyContent={"flex-end"}
          flex={"1"}
          marginRight={"70px"}>
          <RightBar />
        </Box>
      </Flex>

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
              p={5}
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
>>>>>>> 49d105ff244509fb4eb101c5ea8040a14717b06e
        </Box>
        <Box flex={"1"}>
          <AvatarCard />
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeLayout;
