/** @format */

import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import Avatars1 from "../../assets/image/Animate from1.png";
import Avatars2 from "../assets/image/avataaars (2).png";
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
                  borderTopLeftRadius={"60px"}
                  borderBottomRightRadius={"60px"}
                  py={"30px"}
                  p={"5"}
                  width={"250px"}
                  height={"145px"}
                  position={"relative"}
                  borderEnd={"7px ridge #dcfcfe"}
                  borderTop={"5px ridge #dcfcfe"}>
                  <Image
                    className='absolute left-0 top-[-30px]'
                    position={"absolute"}
                    left={"-0"}
                    top={"-30px"}
                    src={Avatars1}
                    width={"100px"}
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={1}
                    p={"10px"}>
                    <Text color={"white"}>{item.name}</Text>
                    <Text color={"grey"}>{item.username}</Text>
                    <Button
                      colorScheme='teal'
                      borderRadius={"5px"}
                      mt={"10px"}
                      p={"3px"}>
                      Edit
                    </Button>
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
