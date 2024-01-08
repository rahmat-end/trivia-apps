/** @format */

import React from "react";
import Login from "../auth/components/Login";
import { ChakraBaseProvider } from "@chakra-ui/react";

function LoginPages() {
  return (
    <>
      <ChakraBaseProvider>
        <Login />
      </ChakraBaseProvider>
    </>
  );
}

export default LoginPages;
