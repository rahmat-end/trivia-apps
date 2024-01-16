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
  UnorderedList,
  Image,
  Spacer,
  ListItem,
  Button,
} from "@chakra-ui/react";
import {
  FaBars,
  FaCog,
  FaQuestion,
  FaSignOutAlt,
  FaUserPlus,
  FaHome,
  FaDailymotion,
  FaUserClock,
  FaHouseDamage,
} from "react-icons/fa";
import logo from "../assets/image/logo.png";
import AddFreeAvatarModal from "../modals/components/AddFreeAvatar";
import AddQuestionModal from "../modals/components/AddQuestionModal";
import AddDiamondsModal from "../modals/components/AddDiamonds";
import AddBuyAvatar from "../modals/components/AddBuyAvatar";
import { REMOVE_TOKEN } from "../redux/authSlice";
import { useAppDispatch } from "../redux/hook";
// import AddSettings from "../modals/components/AddSettings";

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [freeavatarModalVisible, setFreeAvatarModalVisible] =
    React.useState(false);
  const [isQuestionModalOpen, setQuestionModalOpen] = React.useState(false);

  const [newQuestion, setNewQuestion] = React.useState({
    question: "",
    answer: "",
  });

  const [isDiamondsModalOpen, setDiamondsModalOpen] = React.useState(false);
  const [newDiamondsData, setNewDiamondsData] = React.useState({
    question: 0,
    answer: 0,
  });

  const [isBuyAvatarModalOpen, setBuyAvatarModalOpen] = React.useState(false);

  const [isAddUserModalOpen, setAddUserModalOpen] = React.useState(false);
  const [newUserData, setNewUserData] = React.useState({
    username: "",
    avatarUrl: "",
  });
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(REMOVE_TOKEN());
    window.location.reload();
  };

  return (
    <>
      <Flex
        align={"center"}
        justifyContent={"space-between"}
        gap={20}
        p={1}>
        <Image
          alignContent={"center"}
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
        <Spacer />
        <Button
          onClick={onOpen}
          border={"none"}
          borderRadius={"full"}
          _hover={{ bg: "transparent", color: "red.500" }}
          className='flexDirection-end'
          bgColor={"transparent"}>
          <Flex
            align='end'
            justifyContent='end'
            display={["flex"]}>
            <FaBars
              size='2em'
              color='white'
            />
          </Flex>
        </Button>
      </Flex>

      <AddFreeAvatarModal
        isOpen={freeavatarModalVisible}
        onClose={() => setFreeAvatarModalVisible(false)}
      />

      <AddQuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => setQuestionModalOpen(false)}
        newQuestion={newQuestion}
        setNewQuestion={setNewQuestion}
      />

      <AddDiamondsModal
        isOpen={isDiamondsModalOpen}
        onClose={() => setDiamondsModalOpen(false)}
        newDiamondsData={newDiamondsData}
        setNewDiamondsData={setNewDiamondsData}
      />

      <AddBuyAvatar
        isOpen={isAddUserModalOpen}
        onClose={() => setAddUserModalOpen(false)}
        newUserData={newUserData}
        setNewUserData={setNewUserData}
        handleSubmit={() => setAddUserModalOpen(false)}
      />
      {/* 
      <AddSettings /> */}

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        size='xs'
        placement='left'>
        <DrawerOverlay />
        <DrawerContent
          bg={"gray.800"}
          color={"white"}
          borderRadius={"30px"}
          boxShadow={"lg"}
          className='rounded-tl-[60px] rounded-br-[60px]'
          borderEnd={"7px ridge #dcfcfe"}>
          <DrawerCloseButton />

          <DrawerHeader
            color='white'
            fontSize={"2xl"}>
            <Image
              src={logo}
              alt='logo'
              w={"150px"}
              objectFit={"contain"}
              justifyContent={"start"}
              display={["none", "flex"]}
              flexDirection={"row"}
              className='rounded-tl-[60px] rounded-br-[60px]'
              borderRadius={"30px"}
              boxShadow={"lg"}
            />
          </DrawerHeader>
          <HStack
            align='center'
            gap={4}>
            <VStack
              align='center'
              spacing={2}
              mt={1}>
              <DrawerBody mt={8}>
                <UnorderedList listStyleType='none'>
                  <ListItem>
                    <Link to={`/`}>
                      <button>
                        <HStack spacing={2}>
                          <Text
                            fontSize='md'
                            display={["none", "flex"]}
                            color='white'
                            _hover={{ color: "blue.600" }}
                            textDecoration={"none"}
                            decoration={"none"}
                            gap={2}>
                            <FaHome
                              size='1.5em'
                              Text
                            />
                            Home
                          </Text>
                        </HStack>
                      </button>
                    </Link>
                  </ListItem>

                  <ListItem>
                    <Link to={`/dahsboard`}>
                      <button>
                        <HStack mt={6}>
                          <Text
                            fontSize='md'
                            color='white'
                            _hover={{ color: "blue.600" }}
                            gap={2}
                            display={["none", "flex"]}>
                            <FaHouseDamage size='1.5em' />
                            Dahsboard
                          </Text>
                        </HStack>
                      </button>
                    </Link>
                  </ListItem>

                  <ListItem>
                    <button onClick={() => setQuestionModalOpen(true)}>
                      <HStack mt={6}>
                        <Text
                          fontSize='md'
                          color='white'
                          display={["none", "flex"]}
                          _hover={{ color: "blue.600" }}
                          gap={2}>
                          <FaQuestion size='1.5em' />
                          Add Question
                        </Text>
                      </HStack>
                    </button>
                  </ListItem>

                  <ListItem>
                    <button onClick={() => setDiamondsModalOpen(true)}>
                      <HStack mt={6}>
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}
                          display={["none", "flex"]}
                          gap={2}>
                          <FaDailymotion size='1.5em' />
                          Add Diamond
                        </Text>
                      </HStack>
                    </button>
                  </ListItem>

                  <ListItem>
                    <button onClick={() => setFreeAvatarModalVisible(true)}>
                      <HStack mt={6}>
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}
                          display={"flex"}
                          gap={2}>
                          <FaUserPlus size='1.5em' />
                          Add Free Avatar
                        </Text>
                      </HStack>
                    </button>
                  </ListItem>

                  <ListItem>
                    <button onClick={() => setAddUserModalOpen(true)}>
                      <HStack mt={6}>
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}
                          display={"flex"}
                          gap={2}>
                          <FaUserClock size='1.5em' />
                          Add buy Avatar
                        </Text>
                      </HStack>
                    </button>
                  </ListItem>

                  <ListItem>
                    <button>
                      <HStack mt={6}>
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}
                          display={["none", "flex"]}
                          gap={4}>
                          <FaCog size='1.5em' />
                          Settings
                        </Text>
                      </HStack>
                    </button>
                  </ListItem>

                  <ListItem>
                    <Link to={`/login`}>
                      <button>
                        <HStack mt={20}>
                          <FaSignOutAlt
                            size='1.5em'
                            color='red'
                            onClick={handleLogout}
                          />
                          <Text color={"red"}>Logout</Text>
                        </HStack>
                      </button>
                    </Link>
                  </ListItem>
                </UnorderedList>
              </DrawerBody>
            </VStack>
          </HStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
