/** @format */

import { useContext, useEffect } from "react";
import { HStack, Avatar, VStack, Text , Button } from "@chakra-ui/react";
import { UserContext } from "../auth/hooks/UserContext";
import { useAppSelector } from "../redux/hook";
import { RootState } from "../redux/store";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

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
        <Link to={`/login`}>
          <Text>
            <Button
              fontSize={"medium"}
              ml={3}
              color={"grey"}
              textDecoration={"none"}
              _hover={{ color: "red.600" }}
              bg={"transparent"}>
              <FaSignOutAlt />
              Logout
            </Button>
          </Text>
        </Link>
      </VStack>
    </HStack>
  );
}

export default RightBar;
