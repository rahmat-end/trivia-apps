/** @format */

// Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
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
  Spacer,
} from "@chakra-ui/react";
import {
  FaBars,
  FaCog,
  FaQuestion,
  FaSignOutAlt,
  FaUserPlus,
  FaHome,
  FaDailymotion,
} from "react-icons/fa";
import logo from "../assets/image/logo.png";
import AddUserModal from "../modals/components/AddUserModals";
import AddQuestionModal from "../modals/components/AddQuestionModal";
import AddDiamondsModal from "../modals/components/AddDiamonds";

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isQuestionModalOpen, setQuestionModalOpen] = React.useState(false);

  const [newQuestionData, setNewQuestionData] = React.useState({
    question: "",
    answer: "",
  });

  const [isDiamondsModalOpen, setDiamondsModalOpen] = React.useState(false);
  const [newDiamondsData, setNewDiamondsData] = React.useState({
    question: 0,
    answer: 0,
  });

  const [isAddUserModalOpen, setAddUserModalOpen] = React.useState(false);
  const [newUserData, setNewUserData] = React.useState({
    username: "",
    avatarUrl: "",
  });

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <Flex  align={"center"} justifyContent={"space-between"} p={2}
      gap={20}>
        <Image
          src={logo}
          alt=''
          color={"white"}
          w={"100px"}
          objectFit={"contain"}
          marginLeft={"60px"}
          justifyContent={"start"}
          display={["none", "flex"]}
          flexDirection={"row"}

          
        />
        <Spacer/>
        <button
          onClick={onOpen}
          className='flexDirection-end'>
          <Flex align='end'
            justifyContent='end'
              display={["flex"]}>
            <FaBars
              size='2em'
              color='white'
            />
          </Flex>
        </button>
      </Flex>

      <AddUserModal
        isOpen={isAddUserModalOpen}
        onClose={() => setAddUserModalOpen(false)}
        newUserData={newUserData}
        setNewUserData={setNewUserData}
        handleSubmit={() => setAddUserModalOpen(false)}
      />

      <AddQuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => setQuestionModalOpen(false)}
        newQuestionData={newQuestionData}
        setNewQuestionData={setNewQuestionData}
      />

      <AddDiamondsModal
        isOpen={isDiamondsModalOpen}
        onClose={() => setDiamondsModalOpen(false)}
        newDiamondsData={newDiamondsData}
        setNewDiamondsData={setNewDiamondsData}
      />

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

          <DrawerHeader
            color='white'
            mt={4}
            fontSize={"2xl"}>
            Trivia Games
          </DrawerHeader>
          <HStack
            align='center'
            spacing={4}>
            <VStack
              align='center'
              spacing={4}
              mt={4}>
              <HStack>
                <Avatar
                  size='lg'
                  name={"John Doe"}
                  src={
                    "https://i.pinimg.com/564x/f9/c6/58/f9c65832a1d731843b423e0f42a18098.jpg"
                  }
                />
                <VStack align='start'>
                  <Text
                    color='white'
                    fontSize='lg'>
                    John Doe
                  </Text>
                </VStack>
              </HStack>

              <DrawerBody mt={8}>
                <ul className='space-y-2'>
                  <li>
                    <Link to={`/`}>
                      <button>
                        <HStack spacing={2}>
                          <FaHome size='1.5em' />
                          <Text
                            fontSize='md'
                            color='white'
                            _hover={{ color: "blue.600" }}>
                            Home
                          </Text>
                        </HStack>
                      </button>
                    </Link>
                  </li>

                  <li>
                    <button onClick={() => setQuestionModalOpen(true)}>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaQuestion size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Add Question
                        </Text>
                      </HStack>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setDiamondsModalOpen(true)}>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaDailymotion size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Add Diamond
                        </Text>
                      </HStack>
                    </button>
                  </li>

                  <li>
                    <button onClick={() => setAddUserModalOpen(true)}>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaUserPlus size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Add Avatar
                        </Text>
                      </HStack>
                    </button>
                  </li>

                  <li>
                    <button>
                      <HStack
                        spacing={2}
                        mt={60}>
                        <FaCog size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Settings
                        </Text>
                      </HStack>
                    </button>
                  </li>

                  <li>
                    <Link to={`/login`}>
                      <button>
                        <HStack
                          spacing={2}
                          mt={5}>
                          <FaSignOutAlt
                            size='1.5em'
                            color='red'
                            onClick={handleLogout}
                          />
                          <Text color={"red"}>Logout</Text>
                        </HStack>
                      </button>
                    </Link>
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
