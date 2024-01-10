/** @format */

import { Button, Box, Text, Flex, Image } from "@chakra-ui/react";
import Logo from "../assets/image/logo.png";

const SidebarDrawer = () => {
  return (
    <>
      <Flex
        display={"flex"}
        flexDirection={"row"}
        bgColor={"gray.800"}
        className='rounded-tl-[50px] rounded-br-[50px]'
        p={5}>
        <Box
          flexDirection={"row"}
          display={"flex"}>
          <Flex
            align={"center"}
            w={"50%"}
            flexDirection={"column"}>
            <Box>
              <Text
                color={"white"}
                fontSize={"3xl"}>
                Play Trivia Game
              </Text>
            </Box>
            <Box>
              <Text
                size={"sm"}
                color={"grey"}>
                React does not prescribe how you add CSS files. In the simplest
                case, you’ll add a tag to your HTML. If you use a build tool or
                a
              </Text>
            </Box>
            <Box>
              <Button
                colorScheme='teal'
                className='rounded-tl-2xl- rounded-br-2x1'>
                
                Play Now
              </Button>
            </Box>
          </Flex>
          <Box
            w={"50%"}
            display={"flex"}
            justifyContent={"end"}>
            <Image
              src={Logo}
              alt='logo'
              w={"50"}
              h={"40"}
              ></Image>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default SidebarDrawer;
