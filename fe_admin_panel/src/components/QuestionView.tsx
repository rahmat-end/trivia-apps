/** @format */

import { Box, Text, Image, Heading } from "@chakra-ui/react";
import Avatar from "../assets/image/cici.jpg";

function question() {
  return (
    <>
      <Box
        w={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        bgColor={"gray.800"}
        p={10}>
        <Heading
          color={"white"}
          fontSize={"3xl"}
         
          w={"100%"}
          display={"flex"}
          bgColor={"gray.800"}>
          {" "}
          Question
        </Heading>
        <Box
          flexWrap={"wrap"}
          display={"flex"}
          w={"100%"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt={"30px"}
            bg={"gray.800"}
            borderTopLeftRadius={"60px"}
            borderBottomRightRadius={"60px"}
            borderRight={"10px ridge #dcfcfe"}
            borderTop={"5px ridge #dcfcfe"}
            gap={10}
            p={5}>
            <Text color={"white"}> Apakah jokowi seorang Developer</Text>
            <Box
              display={"flex"}
              flexDirection={"row"}
              gap={10}>
              <Box display={"flex"}>
                <Image
                  src={Avatar}
                  objectFit={"cover"}
                  w={"100px"}
                  h={"100px"}
                />
              </Box>

              <Box
                display={"flex"}
                flexDirection={"column"}>
                <Text color={"white"}>A. YA</Text>
                <Text color={"white"}>B. nonono</Text>
                <Text color={"white"}>C. wajip dong</Text>
                <Text color={"white"}>D. pastri dong</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default question;
