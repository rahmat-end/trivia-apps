/** @format */

import { Link } from "react-router-dom";
import { FaCog, FaDashcube, FaHome } from "react-icons/fa";
import { Button, Text } from "@chakra-ui/react";

function RightBar() {
  return (
    <>
      <Link to={`/`}>
        <Text>
          <Button
            color='blue.600 '
            marginLeft={"8"}
            textDecoration={"none"}
            _hover={{ color: "blue.600" }}
            bg={"transparent"}>
            <FaHome />
            Home
          </Button>
        </Text>
      </Link>
      <Link to={`/dahsboard`}>
        <Text>
          <Button
            color='white'
            marginLeft={"1"}
            textDecoration={"none"}
            _hover={{ color: "blue.600" }}
            bg={"transparent"}>
            <FaDashcube />
            Dahsbboard
          </Button>
        </Text>
      </Link>
      <Link to={`/dashboard`}>
        <Text>
          <Button
            color='white'
            textDecoration={"none"}
            _hover={{ color: "blue.600" }}
            bg={"transparent"}>
            <FaCog />
            Settings
          </Button>
        </Text>
      </Link>
    </>
  );
}

export default RightBar;
