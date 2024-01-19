/** @format */

import { FaSearch } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import useSearch from "../hooks/useSerch";

function Search() {
  const { searchValue, updateSearchValue, resetSearchValue } = useSearch();
  // Use the values and functions as needed in your component
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
  };

  const handleSearchReset = () => {
    resetSearchValue();
  };
  return (
    <>
      <Box>
        <Box
          bgColor='transparent'
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          color={"white"}
          px={5}
          w={"80%"}
          borderRadius={"full"}
          border={"1px solid white"}>
          <FaSearch
            flex={0}
            color='white'
            display={"flex"}
          />
          <Input
            type='text'
            value={searchValue}
            onChange={(e) => handleSearchChange(e)}
            border={"none"}
            outline={"none"}
            focusBorderColor='transparent'
            placeholder='Search....'
            color='white'
            width={"100%"}
          />
          <Button
            onClick={handleSearchReset}
            bgColor='transparent'
            border={"none"}
            color={"white"}
            _hover={{ bgColor: "transparent", color: "red.500" }}>
            <Text
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}>
              <AiOutlineDelete
                flex={0}
                size={25}
                color='red'
              />
              Reset
            </Text>
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Search;
