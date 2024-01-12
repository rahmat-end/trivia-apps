/** @format */
import { Link } from "react-router-dom";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import Logo2 from "../assets/image/logo2.png";

const SidebarDrawer = () => {
  return (
    <>
      <Flex
        display={"flex"}
        flexDirection={{ base: "row", md: "column" }}
        bgColor={"gray.800"}
        borderTopLeftRadius={"60px"}
        borderBottomRightRadius={"60px"}
        p={4}
        borderRight={"10px ridge #dcfcfe"}
        borderTop={"5px ridge #dcfcfe"}
        w={"100%"}
        h={"100%"}
        justifyContent={"space-between"}>
        <Box
          flexDirection={{ base: "column", md: "row" }}
          display={"flex"}
          marginLeft={"10"}>
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
                      Dahsboard
                    </Button>
                  </Text>
                </Link>
              </Box>
            </Box>
            <Box mt={"5"}>
              <img
                src='https://i.pinimg.com/564x/a3/fb/f1/a3fbf1da54db06bcd540588c188506fe.jpg'
                alt=''
                width='100%'
                height='100%'
              />
            </Box>
          </Flex>
          <Box
            flexDirection={{ base: "row", md: "column" }}
            w={"50%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Image
              src={Logo2}
              alt='logo'
              w={{ base: "80px", md: "200px" }}
              h={{ base: "60px", md: "200px" }}
              animation='spin 1s linear infinite'></Image>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SidebarDrawer;
