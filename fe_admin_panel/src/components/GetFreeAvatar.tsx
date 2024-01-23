/** @format */

import React from "react";
import { Box, Flex, Text, Image, Button, Heading } from "@chakra-ui/react";
import { FaClosedCaptioning } from "react-icons/fa";
import useGetFreeAvatar from "../modals/hooks/useGetFreeAvatar";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const ContentManagement: React.FC = () => {
  const { getFreeavatar, getFreeavatarRefetch, deleteGetFreeavatar } =
    useGetFreeAvatar();

  useEffect(() => {
    getFreeavatarRefetch();
  }, []);

  useEffect(() => {
    getFreeavatarRefetch();
  }, [getFreeavatar]);

  return (
    <>
      <Box
        bg={"gray.800"}
        p={10}
        w={"100%"}>
        <Heading
          mb={10}
          color={"gray.400"}
          fontSize={"3xl"}
          fontWeight={"bold"}>
          {" "}
          Free Avatar
        </Heading>
        <Flex
          gap={10}
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}>
          {getFreeavatar?.map((item: any, index: number) => {
            return (
              <Box
                key={index}
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"end"}
                bgColor={"gray.800"}
                borderTopLeftRadius={"60px"}
                borderBottomRightRadius={"60px"}
                py={"30px"}
                ml={"45px"}
                mt={"25px"}
                p={"5"}
                width={"250px"}
                height={"145px"}
                position={"relative"}
                borderEnd={"7px ridge #dcfcfe"}
                borderTop={"5px ridge #dcfcfe"}
                marginRight={"50px"}>
                <Image
                  position={"absolute"}
                  left={"-0"}
                  top={"-30px"}
                  src={item.photo_freeavatar}
                  width={"100px"}
                />
                <FaClosedCaptioning color={"white"} />
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}>
                  <Text
                    color={"white"}
                    fontSize={"xl"}>
                    Avatar
                  </Text>
                  <Button
                    colorScheme={"white"}
                    mt={"5"}
                    onClick={() => {
                      deleteGetFreeavatar(item.id);
                    }}
                    bg={"red.500"}
                    fontSize={"sm"}>
                    <FaTrash />
                    Delete
                  </Button>
                </Box>
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default ContentManagement;
