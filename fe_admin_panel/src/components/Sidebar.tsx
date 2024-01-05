/** @format */

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Text,
  HStack,
  VStack,
  Avatar,
  Image,
} from "@chakra-ui/react";
import {
  FaBars,
  FaGamepad,
  FaCog,
  FaTrophy,
  FaSignOutAlt,
} from "react-icons/fa";
import logo from "../assets/image/logo.png";

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Contoh penggunaan state untuk menyimpan nama pengguna dan URL gambar
  const [userData, setUserData] = React.useState({
    username: "John Doe",
    avatarUrl:
      "https://i.pinimg.com/564x/f9/c6/58/f9c65832a1d731843b423e0f42a18098.jpg",
  });

  return (
    <>
      <button onClick={onOpen}>
        <Flex align='center'>
          <FaBars size='2em' />
          <Image
            src={logo}
            alt=''
            color={"white"}
            w={"100px"}
            objectFit={"contain"}
          />
        </Flex>
      </button>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        size='xs'
        placement='left'>
        <DrawerOverlay />
        <DrawerContent
          bg='black'
          color={"white"}>
          <DrawerCloseButton />

          <HStack
            align='center'
            spacing={4}>
            <VStack
              align='center'
              spacing={4}
              mt={4}>
              {/* Avatar dan informasi pengguna dalam satu HStack */}
              <HStack>
                <Avatar
                  size='lg'
                  name={userData.username}
                  src={userData.avatarUrl}
                />
                <VStack align='start'>
                  <Text
                    color='white'
                    fontSize='lg'>
                    {userData.username}
                  </Text>
                </VStack>
              </HStack>
              <DrawerHeader color='white'>Trivia Games</DrawerHeader>

              <DrawerBody>
                <ul className='space-y-2'>
                  <li>
                    <button>
                      <HStack spacing={2}>
                        <FaGamepad size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'>
                          Start Game
                        </Text>
                      </HStack>
                    </button>
                  </li>
                  <li>
                    <button>
                      <HStack
                        spacing={2}
                        mt={2}>
                        <FaCog size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'>
                          Game Settings
                        </Text>
                      </HStack>
                    </button>
                  </li>
                  <li>
                    <button>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaTrophy size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'>
                          Leaderboard
                        </Text>
                      </HStack>
                    </button>
                  </li>
                  <li>
                    <button>
                      <HStack
                        spacing={2}
                        mt={60}>
                        <FaSignOutAlt size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'>
                          Logout
                        </Text>
                      </HStack>
                    </button>
                  </li>
                </ul>
              </DrawerBody>
            </VStack>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
