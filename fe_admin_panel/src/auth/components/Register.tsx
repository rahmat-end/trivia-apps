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
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

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
        "https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg"
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
              w={"38%"}
              bg={"transparent"}
              p={70}
              borderRadius={"lg"}
              boxShadow={"lg"}
              color={"white"}>
              <Box textAlign={"start"}>
                <Image src={Logo}
                  alt='logo' 
                  width={"120px"}/>
                <Text
                  fontSize={"2xl"}
                  fontWeight={"bold"}>
                  Register To Trivia
                </Text>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>UserName</FormLabel>
                  <Input
                    type='text'
                    name='username'
                    bg={"white"}
                    color={"black"}
                    w={"100%"}
                    p={4}
                    borderRadius={"full"}
                    height={"40px"}
                    placeholder='Username'
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='text'
                    accept='email'
                    placeholder='Email'
                    name='email'
                    bg={"white"}
                    color={"black"}
                    p={5}
                    w={"100%"}
                    borderRadius={"full"}
                    height={"40px"}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    placeholder='Password'
                    name='password'
                    bg={"white"}
                    color={"black"}
                    height={"40px"}
                    p={5}
                    borderRadius={"full"}
                    w={"100%"}
                  />
                </FormControl>
              </Box>
              <Box
                mt={5}
                justifyContent={"end"}
                display={"flex"}>
                <Button
                  
                  _hover={{ bg: "gray.700" }}
                  type='submit'
                  w={"100%"}
                  alignItems={"center"}
                  color={"white"}
                  fontSize={{ base: "xl", md: "2xl" }}
                  borderRadius={"full"}
                  bg={"green.500"}
                  h={"40px"}>
                  Register
                </Button>
              </Box>
              <Text>
                Have account yet?{" "}
                <Link
                  style={{ color: "blue" }}
                  to={"/login"}>
                  Login
                </Link>
              </Text>
            </Box>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default RegisterPages;
