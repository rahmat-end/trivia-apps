
import { FaSearch } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

function serch() {
  return (
    <>
      <Box
        bgColor='transparent'
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        color={"white"}
        py={2}
        px={5}
        w={"50%"}
        gap={3}
        // px={200}
        borderRadius={"full"}
        border={"1px solid white"}>
        <FaSearch
          flex={0}
          color='white'
          display={"flex"}
          py={2}
          px={5}
          gap={1}
        />
        <input
          type='text'
          
          placeholder='Search....'
          className='w-full border-none focus:outline-none '
          style={{ backgroundColor: "transparent" }}
          color='white'
          width={"100%"}
        />
      </Box>
    </>
  );
}

export default serch