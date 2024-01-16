/** @format */
import { Link } from "react-router-dom";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import Logo2 from "../assets/image/chou.jpg";
import Logo1 from "../assets/image/avatar21.png";
import Logo3 from "../assets/image/avatar31.png";

const SidebarDrawer = () => {
  return (
    <>
      <Flex
        display={"flex"}
        flexDirection={{ base: "row", md: "column" }}
        bgColor={"gray.800"}
        p={5}
        borderTopLeftRadius={"160px"}
        borderBottomRightRadius={"150px"}
        px={9}
        py={4}
        borderRight={"10px ridge #dcfcfe"}
        borderTop={"5px ridge #dcfcfe"}
        w={"100%"}
        h={"100%"}
        justifyContent={"space-between"}>
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
            <Box
              mt={"5"}
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              p={10}
              justifyContent={"center"}
              w={"100%"}
              h={"100%"}>
              <img
                src={Logo1}
                alt=''
                width='40%'
                height='60%'
              />
              <img
                src={Logo3}
                alt=''
                width='40%'
                height='60%'
              />
              <img
                src={Logo2}
                alt=''
                width='40%'
                height='60%'
              />
              <img
                src={Logo2}
                alt=''
                width='40%'
                height='60%'
              />

              {/* <Box
                display={"flex"}
                justifyContent={"start"}
                alignItems={"start"}
                w={"100%"}
                flexDirection={"column"}
                fontSize={"xl"}
                p={3}>
                <Text
                  display={"flex"}
                  borderRadius={"50px"}
                  alignContent={"start"}
                  color={"blue.500"}
                  alignItems={"start"}
                  borderTopLeftRadius={"60px"}
                  borderBottomRightRadius={"60px"}
                  as={"samp"}
                  fontSize={"md"}>
                  Platinum
                </Text>
                <Text
                  borderRadius={"50px"}
                  textAlign={"center"}
                  color={"blue.700"}
                  alignItems={"center"}
                  borderTopLeftRadius={"60px"}
                  borderBottomRightRadius={"60px"}
                  p={2}
                  fontSize={"xs"}
                  mt={2}
                  as={"sub"}>
                  rare
                </Text>
              </Box> */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default SidebarDrawer;
