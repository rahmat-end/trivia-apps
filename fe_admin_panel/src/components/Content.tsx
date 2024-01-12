/** @format */

// src/components/ContentManagement.tsx
import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";
import Avatar from "../assets/image/AvatarBerbayar6.png";
// import { Content } from "../service/content";
import { FaClosedCaptioning } from "react-icons/fa";
import useGetFreeAvatar from "../modals/hooks/useGetFreeAvatar";
import { useEffect } from "react";
import { FaTrash } from "react-icons/fa";

const ContentManagement: React.FC = () => {
  const { getFreeavatar, getFreeavatarRefetch } = useGetFreeAvatar();
  // const { handleFetchgetFreeavatar } = useGetFreeAvatar();
  // useEffect(() => {
  //   handleFetchgetFreeavatar();
  // }, []);
  useEffect(() => {
    // getFreeavatarRefetch();
    console.log(getFreeavatar);
  }, [getFreeavatar]);

  return (
    <>
      <Flex
        gap={2}
        display={["row", "row", "row", "flex"]}
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
                  // onClick={() => deleteUser(item.user_id)()}
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
    </>
  );
};

export default ContentManagement;
