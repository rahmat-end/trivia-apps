/** @format */

// src/pages/RegisterPages.tsx
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Text,
} from "@chakra-ui/react";

const RegisterPages: React.FC = () => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registering...");
  };

  return (
    <Box
      h={"100vh"}
      bgImage={
        "https://images.unsplash.com/photo-1490810194309-344b3661ba39?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }>
      <VStack
        spacing={4}
        align='stretch'>
        <form onSubmit={handleRegister}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Box
              margin={"100"}
              w={"40%"}
              bg={"transparent"}
              p={50}
              borderRadius={"lg"}
              border={"1px solid black"}
              boxShadow={"lg"}
              color={"white"}>
              <Box textAlign={"center"}>
                <Text
                  fontSize={"4xl"}
                  fontWeight={"bold"}>
                  Register
                </Text>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>UserName</FormLabel>
                  <Input
                    type='username'
                    placeholder='Username'
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='email'
                    placeholder='Email'
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    placeholder='Password'
                  />
                </FormControl>
              </Box>
              <Box
                mt={10}
                justifyContent={"end"}
                display={"flex"}>
                <Button
                  colorScheme='transparent'
                  _hover={{ bg: "gray.700" }}
                  type='submit'>
                  Register
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default RegisterPages;
