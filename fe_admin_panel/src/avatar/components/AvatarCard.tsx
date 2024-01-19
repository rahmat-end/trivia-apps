/** @format */

import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";
import useUser from "../../auth/hooks/useUser";
import { useFetchUserData } from "../../auth/hooks/useDataUser";
import { useEffect } from "react";

function AvatarCard() {
  const { getAllUser, getAllUserRefetch } = useUser();

  const { handleFetchUserData } = useFetchUserData();

  useEffect(() => {
    handleFetchUserData();
  }, []);

  useEffect(() => {
    getAllUserRefetch();
  }, [getAllUser]);
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mt={"20px"}
        w={"100%"}>
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
          {getAllUser?.map((item: any, index: number) => {
            return (
              <>
                <Flex>
                  <Box
                    key={index}
                    display={"flex"}
                    flexDirection={"row"}
                    bgColor={"gray.800"}
                    borderTopLeftRadius={"60px"}
                    borderBottomRightRadius={"60px"}
                    w={"300px"}
                    p={5}
                    position={"relative"}>
                    <Box
                      display={"flex"}
                      justifyContent={"center"}
                      w={"50%"}>
                      <Image
                        borderRadius={"full"}
                        src={item.avatar}
                        width={"100px"}
                        height={"100px"}
                        objectFit={"cover"}
                      />
                    </Box>

                    <Box
                      w={"50%"}
                      gap={1}>
                      <Text
                        flexWrap={"wrap"}
                        color={"white"}>
                        {item.name}
                      </Text>
                      <Text
                        flexWrap={"wrap"}
                        color={"grey"}>
                        {item.username}
                      </Text>

                      <Text
                        display={"flex"}
                        flexWrap={"wrap"}
                        color={"white"}>
                        {item.email.substring(0, 10) + "...."}
                      </Text>

                      <Text
                        flexWrap={"wrap"}
                        color={"white"}>
                        {item.diamonds}
                      </Text>
                    </Box>
                  </Box>
                </Flex>
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default AvatarCard;
