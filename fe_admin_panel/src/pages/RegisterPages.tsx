/** @format */
import Register from "../auth/components/Register";
import { ChakraBaseProvider } from "@chakra-ui/react";

function LoginPages() {
  return (
    <>
      <ChakraBaseProvider>
        <Register />
      </ChakraBaseProvider>
    </>
  );
}

export default LoginPages;
