/** @format */

import { Fragment, useEffect, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import Logo from "../../assets/image/logo.png";

export default function Login() {
  const [show, setShow] = useState<boolean>(false);
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
    <>
      <Box
        bgImage={`url(${`https://i.pinimg.com/originals/86/87/ed/8687eddeeb660a2b0b9fba7cc43d2459.jpg`})`}>
        <Fragment>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            height={"100vh"}
            p={4}
            border={"1px solid black"}>
            <Box
              width={"100%"}
              maxWidth={"450px"}
              p={4}
              color={"white"}>
              <Heading>
                <Image
                  src={Logo}
                  alt='logo'
                  width={"120px"}
                />
              </Heading>
              <Text
                fontSize={"xl"}
                mb={3}>
                Login to Trivia
              </Text>
              {isError && (
                <Alert
                  status='error'
                  bg={"#FF6969"}
                  mb={3}
                  borderRadius={5}>
                  <AlertIcon color={"white"} />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <FormControl mb={4}>
                <Input
                  type='text'
                  placeholder='Email/Username *'
                  name='emailOrUsername'
                  value={form.emailOrUsername}
                  onChange={handleChange}
                  width={"100%"}
                  pr='4.5rem'
                  mb={3}
                  color={"black"}
                  _placeholder={{ color: "gray.500" }}
                  _focus={{ borderColor: "green.400" }}
                  h={"40px"}
                  borderRadius={"full"}
                  p={"15px"}
                />
              </FormControl>
              <FormControl mb={4}>
                <InputGroup size='md'>
                  <Input
                    placeholder='Password *'
                    name='password'
                    value={form.password}
                    onChange={handleChange}
                    width={"100%"}
                    pr='4.5rem'
                    mb={3}
                    color={"black"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    display={"flex"}
                    
                    _placeholder={{ color: "gray.500" }}
                    _focus={{ borderColor: "green.400" }}
                    h={"40px"}
                    borderRadius={"full"}
                    p={"15px"}
                    type={show ? "text" : "password"}
                  />
                  <InputRightElement width='4.5rem'>
                    <Button
                      h='1.75rem'
                      size='sm'
                      color={"black"}
                      bg={"transparent"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      onClick={() => setShow(!show)}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
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
                <Button
                  type='submit'
                  borderRadius={"full"}
                  style={{ backgroundColor: "#48bb78" }}
                  width={"100%"}
                  mb={3}
                  h={"40px"}
                  _hover={{ bg: "gray.500" }}
                  onClick={handleLogin}>
                  Login
                </Button>
              )}
              <Text>
                Have no account yet?{" "}
                <Link
                  style={{ color: "blue" }}
                  to={"/register"}>
                  Register
                </Link>
              </Text>
            </Box>
          </Flex>
        </Fragment>
      </Box>
    </>
  );
}
