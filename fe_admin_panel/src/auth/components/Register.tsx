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
  Image,
  Heading,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/image/logo.png";
import { useRegister } from "../hooks/useRegister";

export default function Register() {
  const navigate = useNavigate();
  const {
    form,
    handleChange,
    handleRegister,
    isLoading,
    isError,
    error,
    isRegisterSuccess,
  } = useRegister();

  useEffect(() => {
    if (isRegisterSuccess) {
      navigate("/login");
    }
  }, [isRegisterSuccess]);

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
        spacing={3}
        align='stretch'>
        <form
          encType='multipart/form-data'
          onSubmit={handleRegister}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Box
              margin={"90"}
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
                  Register To Trivia
                </Text>
                {isError && (
                  <Alert
                    status='error'
                    bg={"#FF6969"}
                    mb={3}
                    borderRadius={5}>
                    <AlertIcon color={"black"} />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type='text'
                    name='name'
                    value={form.name}
                    bg={"white"}
                    onChange={handleChange}
                    color={"black"}
                    w={"100%"}
                    p={4}
                    borderRadius={"full"}
                    height={"35px"}
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
                    value={form.email}
                    name='email'
                    onChange={handleChange}
                    bg={"white"}
                    color={"black"}
                    p={4}
                    w={"100%"}
                    borderRadius={"full"}
                    height={"35px"}
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
                    height={"35px"}
                    p={4}
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
                  mt={4}
                  justifyContent={"end"}
                  display={"flex"}>
                  <Button
                    _hover={{ bg: "gray.700" }}
                    onClick={handleRegister}
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
              )}
              <Text>
                Have account yet?{" "}
                <Link
                  style={{
                    color: "green",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
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
}
