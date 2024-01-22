/** @format */

// src/components/ContentManagement.tsx
import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Avatar from "../assets/image/avataaars (10).png";

const ContentManagement: React.FC = () => {
  return (
    <>
      <Flex
        gap={2}
        display={["row", "row", "row", "flex"]}
        flexDirection={"row"}
        flexWrap={"wrap"}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          bgColor={"gray.800"}
          className='rounded-tl-[60px] rounded-br-[60px]'
          py={"30px"}
          p={"5"}
          width={"250px"}
          height={"145px"}
          position={"relative"}
          borderEnd={"7px ridge #dcfcfe"}
          borderTop={"5px ridge #dcfcfe"}>
          <Image
            className='absolute left-0 top-[-30px]'
            src={Avatar}
            width={"100px"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}>
            <Text
              color={"white"}
              fontSize={"xl"}>
              Admin
            </Text>
            <Text
              color={"grey"}
              fontSize={"lg"}>
              Rare
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          bgColor={"gray.800"}
          className='rounded-tl-[60px] rounded-br-[60px]'
          py={"30px"}
          p={"5"}
          width={"250px"}
          height={"145px"}
          position={"relative"}
          borderEnd={"7px ridge #dcfcfe"}
          borderTop={"5px ridge #dcfcfe"}>
          <Image
            className='absolute left-0 top-[-30px]'
            src={Avatar}
            width={"100px"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}>
            <Text
              color={"white"}
              fontSize={"xl"}>
              Admin
            </Text>
            <Text
              color={"grey"}
              fontSize={"lg"}>
              Rare
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          bgColor={"gray.800"}
          className='rounded-tl-[60px] rounded-br-[60px]'
          py={"30px"}
          p={"5"}
          width={"250px"}
          height={"145px"}
          position={"relative"}
          borderEnd={"7px ridge #dcfcfe"}
          borderTop={"5px ridge #dcfcfe"}>
          <Image
            className='absolute left-0 top-[-30px]'
            src={Avatar}
            width={"100px"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}>
            <Text
              color={"white"}
              fontSize={"xl"}>
              Admin
            </Text>
            <Text
              color={"grey"}
              fontSize={"lg"}>
              Rare
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          bgColor={"gray.800"}
          className='rounded-tl-[60px] rounded-br-[60px]'
          py={"30px"}
          p={"5"}
          width={"250px"}
          height={"145px"}
          position={"relative"}
          borderEnd={"7px ridge #dcfcfe"}
          borderTop={"5px ridge #dcfcfe"}>
          <Image
            className='absolute left-0 top-[-30px]'
            src={Avatar}
            width={"100px"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}>
            <Text
              color={"white"}
              fontSize={"xl"}>
              Admin
            </Text>
            <Text
              color={"grey"}
              fontSize={"lg"}>
              Rare
            </Text>
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"end"}
          bgColor={"gray.800"}
          className='rounded-tl-[60px] rounded-br-[60px]'
          py={"30px"}
          p={"5"}
          width={"250px"}
          height={"145px"}
          position={"relative"}
          borderEnd={"7px ridge #dcfcfe"}
          borderTop={"5px ridge #dcfcfe"}>
          <Image
            className='absolute left-0 top-[-30px]'
            src={Avatar}
            width={"100px"}
          />
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}>
            <Text
              color={"white"}
              fontSize={"xl"}>
              Admin
            </Text>
            <Text
              color={"grey"}
              fontSize={"lg"}>
              Rare
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default ContentManagement;
