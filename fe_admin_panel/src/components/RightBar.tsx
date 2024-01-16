/** @format */

import { useContext, useEffect } from "react";
import { HStack, Avatar, VStack, Text } from "@chakra-ui/react";
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
    <HStack>
      <Avatar
        size='sm'
        name={auth.name}
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
          {auth.name}
        </Text>
      </VStack>
    </HStack>
  );
}

export default RightBar;
