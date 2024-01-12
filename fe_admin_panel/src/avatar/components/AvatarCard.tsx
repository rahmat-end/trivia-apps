/** @format */

import { Flex, Box, Text } from "@chakra-ui/react";
import Avatars1 from "../../assets/image/avataaars (1).png";
// import Avatars2 from "../assets/image/avataaars (2).png";
// import Avatars3 from "../assets/image/avataaars (3).png";
// import Avatars5 from "../assets/image/avataaars (5).png";
// import Avatars6 from "../assets/image/avataaars (6).png";
// import Avatars7 from "../assets/image/avataaars (7).png";
import { avatar } from "../../service/avatar";
import useAvatar from "./hooks/useAvatar";

function AvatarCard() {
 

  return (
    <>
      <Flex>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"20px"}>
          <Box
            w={["100%"]}
            display={"flex"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"lg"}
            boxShadow={"lg"}
            margin={"10px"}
            gap={"10px"}>
            {avatar.map((item: any, index: number) => {
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
                  <img
                    src={Avatars1}
                    className='absolute left-0 top-[-30px]'
                    alt='Avatars1'
                    width={"100px"}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}>
                    <Text color={"white"}>{item.name}</Text>
                    <Text color={"grey"}>{item.username}</Text>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default AvatarCard;
