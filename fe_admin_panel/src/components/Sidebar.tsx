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

  const handleLogout = () => {
    localStorage.clear();
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
              boxShadow={"lg"}></Image>
          </DrawerHeader>
          <HStack
            align='center'
            spacing={2}>
            <VStack
              align='center'
              spacing={4}
              mt={4}>
              <DrawerBody mt={8}>
                <UnorderedList listStyleType='none'>
                   <ListItem>
                    <Link to={`/`}>
                      <button>
                        <HStack spacing={2}>
                          <FaHome
                            size='1.5em'
                            Text
                          />
                          <Text
                            fontSize='md'
                            color='white'
                            _hover={{ color: "blue.600" }}
                            textDecoration={"none"}
                            decoration={"none"}>
                            Home
                          </Text>
                        </HStack>
                      </button>
                    </Link>
                 </ListItem>

                   <ListItem>
                    <Link to={`/dahsboard`}>
                      <button>
                        <HStack
                          spacing={2}
                          mt={4}>
                          <FaHouseDamage size='1.5em' />
                          <Text
                            fontSize='md'
                            color='white'
                            _hover={{ color: "blue.600" }}>
                            Dahsboard
                          </Text>
                        </HStack>
                      </button>
                    </Link>
                  </ListItem>


                   <ListItem>
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
                  </ListItem>

                   <ListItem>
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
                 </ListItem>


                  <ListItem>
                    <button onClick={() => setFreeAvatarModalVisible(true)}>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaUserPlus size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Add Free Avatar
                        </Text>
                      </HStack>
                    </button>
                 </ListItem>

                   <ListItem>
                    <button onClick={() => setAddUserModalOpen(true)}>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaUserClock size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Add buy Avatar
                        </Text>
                      </HStack>
                    </button>
                </ListItem>


                   <ListItem>
                    <button>
                      <HStack
                        spacing={2}
                        mt={4}>
                        <FaCog size='1.5em' />
                        <Text
                          fontSize='md'
                          color='white'
                          _hover={{ color: "blue.600" }}>
                          Settings
                        </Text>
                      </HStack>
                    </button>
                  </ListItem>

                   <ListItem>
                    <Link to={`/login`}>
                      <button>
                        <HStack
                          spacing={2}
                          mt={2}>
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
