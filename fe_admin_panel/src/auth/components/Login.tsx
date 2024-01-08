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
  Heading,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

import { useLogin } from "../hooks/useLogin";

const LoginPages: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Registering...");
  };
  const { dataLogin, handleChange } = useLogin();

  return (
    <Box
      minH={"100vh"}
      bgSize='cover'
      overflowY='auto'
      bgImage={
        "https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg"
      }>
      <Heading>
        <Box>
          <Image
            src={Logo}
            alt='logo'
            width={"120px"}
            ml={"20"}
          />
        </Box>
      </Heading>
      <VStack
        spacing={4}
        align='stretch'>
        <form onSubmit={handleLogin}>
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
                <Text
                  fontSize={"2xl"}
                  fontWeight={"bold"}>
                  Login To Trivia
                </Text>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='text'
                    accept='email'
                    placeholder='Email'
                    value={dataLogin.email}
                    name='email'
                    onChange={handleChange}
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
                    value={dataLogin.password}
                    onChange={handleChange}
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
                  Login
                </Button>
              </Box>
              <Text>
                Have no account yet?{" "}
                <Link
                  style={{ color: "green" , fontWeight:"bold", fontStyle: "italic", }}
                  to={"/register"}>
                  Register
                </Link>
              </Text>
            </Box>
          </Box>
        </form>
      </VStack>
    </Box>
  );
};

export default LoginPages;
