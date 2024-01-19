/** @format */
import { Link } from "react-router-dom";
import { Box, Flex, Button, Text } from "@chakra-ui/react";

import { FaDashcube, FaHome, FaCog, FaSignOutAlt } from "react-icons/fa";

const SidebarDrawer = () => {
  return (
    <>
      <Flex
        display={"flex"}
        justifyContent={"start"}
        flexDirection={{ base: "row", md: "column" }}
        bgColor={"gray.800"}
        borderTopLeftRadius={"160px"}
        borderBottomRightRadius={"150px"}
        px={9}
        py={4}
        
        w={"100%"}
        h={"100%"}>
        <Box
          flexDirection={{ base: "column", md: "row" }}
          display={"flex"}
          p={5}>
          <Flex
            w={"50%"}
            flexDirection={{ base: "row", md: "column" }}>
            <Box
              display={"flex"}
              alignItems={"center"}>
              <Box>
                <Link to={`/home`}>
                  <Text>
                    <Button
                      fontSize={{ base: "xl", md: "2xl" }}
                      textDecoration={"none"}
                      _hover={{ color: "blue.600" }}
                      bg={"transparent"}
                      color={"white"}>
                      <FaHome />
                      Home
                    </Button>
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to={`/dahsboard`}>
                  <Text>
                    <Button
                      fontSize={{ base: "xl", md: "2xl" }}
                      color={"grey"}
                      textDecoration={"none"}
                      _hover={{ color: "blue.600" }}
                      bg={"transparent"}>
                      <FaDashcube />
                      Dahsboard
                    </Button>
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to={`/dahsboard`}>
                  <Text>
                    <Button
                      fontSize={{ base: "xl", md: "2xl" }}
                      color={"grey"}
                      textDecoration={"none"}
                      _hover={{ color: "blue.600" }}
                      bg={"transparent"}>
                      <FaCog />
                      Settings
                    </Button>
                  </Text>
                </Link>
              </Box>
              <Box>
                <Link to={`/login`}>
                  <Text>
                    <Button
                      fontSize={{ base: "xl", md: "2xl" }}
                      color={"grey"}
                      textDecoration={"none"}
                      _hover={{ color: "red.600" }}
                      bg={"transparent"}>
                      <FaSignOutAlt />
                      Logout
                    </Button>
                  </Text>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default SidebarDrawer;
