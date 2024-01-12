/** @format */

import  { useContext } from "react";
import { HStack, Avatar, VStack, Text } from "@chakra-ui/react";
import { UserContext } from "../auth/hooks/UserContext";

function RightBar() {
  const { user } = useContext(UserContext) || {}; // Gunakan optional chaining disini

  return (
    <HStack>
      <Avatar
        size='sm'
        name={user ? user.name : "John Doe"}
        src={
          user
            ? user.avatar
            : "https://i.pinimg.com/564x/f9/c6/58/f9c65832a1d731843b423e0f42a18098.jpg"
        }
      />
      <VStack align='start'>
        <Text
          color='white'
          fontSize='lg'>
          {user ? user.name : "John Doe"}
        </Text>
      </VStack>
    </HStack>
  );
}

export default RightBar;
