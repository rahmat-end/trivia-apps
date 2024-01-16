/** @format */

import { Box, Text, Flex, Image } from "@chakra-ui/react";
import Avatar from "../assets/image/avatar1.png";
import Avatar2 from "../assets/image/avatar21.png";
import Avatar3 from "../assets/image/avatar31.png";

const SidebarDrawer = () => {
  return (
    <>
      <Flex
        display={"flex"}
        flexDirection={"row"}
        bgColor={"gray.800"}
        borderTopLeftRadius={"60px"}
        borderBottomRightRadius={"60px"}
        borderRight={"10px ridge #dcfcfe"}
        borderTop={"5px ridge #dcfcfe"}
        p={50}
        w={"100%"}
        h={"100%"}
        justifyContent={"space-between"}>
        <Box
          flexDirection={"row"}
          display={"flex"}
          gap={10}>
          <Flex
            align={"center"}
            w={"50%"}
            flexDirection={"column"}>
            <Box>
              <Text
                as={"kbd"}
                color={"green.500"}
                fontSize={"2xl"}>
                Welcome Play Trivia
              </Text>
            </Box>
            <Box mt={5}>
              <Text
                as={"i"}
                size={"sm"}
                color={"grey"}>
                React does not prescribe how you add CSS files. In the simplest
                case, you’ll add a tag to your HTML. If you use a build tool or
                a
              </Text>
            </Box>
          </Flex>
          <Box
            display={"flex"}
            justifyContent={"end"}>
            <Image
              src={Avatar}
              alt='logo'
              w={"50"}
              h={"40"}
            />
            <Image
              src={Avatar2}
              alt='logo'
              w={"50"}
              h={"40"}
            />
            <Image
              src={Avatar3}
              alt='logo'
              w={"50"}
              h={"40"}
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SidebarDrawer;
