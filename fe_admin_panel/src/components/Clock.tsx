/** @format */

// Clock.tsx
import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  return (
    <>
      <Box display={"flex"}>
        <Box
          bg={"white"}
          brightness={1000}
          bgColor={"gray.800"}
          color={"white"}
          p={"2"}
          borderRadius={"10px"}
          alignItems={"center"}
          textAlign={"center"}
          display={"flex"}>
          <Text
            fontSize='2xl'
            display={["none", "none", "flex", "flex"]}
            justifyContent={"center"}>{`${hours}`}</Text>
        </Box>
        <Text color={"black"}>:</Text>
        <Box
          bg={"white"}
          brightness={1000}
          bgColor={"gray.800"}
          color={"white"}
          p={"2"}
          borderRadius={"10px"}
          alignItems={"center"}
          textAlign={"center"}
          display={"flex"}>
          <Text
            fontSize='2xl'
            display={["none", "none", "flex", "flex"]}
            justifyContent={"center"}>{`${minutes}`}</Text>
        </Box>
        <Text color={"black"}>:</Text>
        <Box
          w='50px'
          bg={"white"}
          brightness={1000}
          bgColor={"gray.800"}
          color={"white"}
          p={"2"}
          borderRadius={"10px"}
          alignItems={"center"}
          textAlign={"center"}
          display={"flex"}>
          <Text
            fontSize='2xl'
            display={["none", "none", "flex", "flex"]}
            justifyContent={"center"}>{`${seconds}`}</Text>
        </Box>
      </Box>
    </>
  );
};

export default Clock;
