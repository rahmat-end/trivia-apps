/** @format */

import { useContext, useEffect } from "react";
import { HStack, Avatar, VStack, Text, Button, Box } from "@chakra-ui/react";
import { UserContext } from "../auth/hooks/UserContext";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
  
function RightBar() {
  const { user } = useContext(UserContext) || {}; // Gunakan optional chaining disini
  const auth = useAppSelector((state: RootState) => state.auth);
  useEffect(() => {
    console.log("ini auth", auth);
  });

  return (
    <HStack
      align='center'
      justify='space-between'
      display={"flex"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}>
        <Avatar
          size='sm'
          name={auth.name}
          marginRight={"10px"}
          src={
            user
              ? user.avatar
              : "https://i.pinimg.com/564x/f9/c6/58/f9c65832a1d731843b423e0f42a18098.jpg"
          }
        />
        <Text
          color='white'
          fontSize='lg'>
          {auth.name}
        </Text>
      </Box>
    </HStack>
  );
}

export default RightBar;
