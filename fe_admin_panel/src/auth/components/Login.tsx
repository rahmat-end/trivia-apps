/** @format */

// src/pages/RegisterPages.tsx

import { useEffect } from "react";
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
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";

import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();
  const {
    form,
    handleChange,
    handleLogin,
    isLoading,
    isError,
    error,
    isLoginSuccess,
  } = useLogin();

  useEffect(() => {
    if (isLoginSuccess) {
      navigate("/");
    }
  }, [isLoginSuccess]);
  return (
    <Box>
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
        <form
          encType='multipart/form-data'
          onSubmit={handleLogin}>
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
              {isError && (
                <Alert
                  status='error'
                  bg={"#FF6969"}
                  mb={3}
                  borderRadius={5}>
                  <AlertIcon 
                  color={"black"}
                        
                   />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Box>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type='text'
                    accept='email'
                    placeholder='Email'
                    value={form.email}
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
                    value={form.password}
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
              {isLoading ? (
                <Button
                  isLoading
                  colorScheme='green'
                  variant='solid'
                  borderRadius={"full"}
                  width={"100%"}
                  mb={3}>
                  Loading
                </Button>
              ) : (
                <Box
                  mt={5}
                  justifyContent={"end"}
                  display={"flex"}>
                  <Button
                    _hover={{ bg: "gray.700" }}
                    type='submit'
                    onClick={handleLogin}
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
              )}
              <Text>
                Have no account yet?{" "}
                <Link
                  style={{
                    color: "green",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
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
}
