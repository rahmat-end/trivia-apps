/** @format */

// Clock.tsx
import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [alarm, setAlarm] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);

      // Check if it's 17:00 , 12:00 and 16:00
      if (
        (currentTime.getHours() === 17,
        12,
        16 && currentTime.getMinutes() === 0)
      ) {
        setAlarm(true);
      } else {
        setAlarm(false);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Check if the alarm is triggered
    if (alarm) {
      // Add your alarm sound URL
      const alarmSound = new Audio(
        "https://www.freesoundeffects.com/free-track/giggle-boy-428529/"
      );
      alarmSound.play();

      // Optionally, you can add a timeout to stop the alarm after a specific duration
      setTimeout(() => {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        setAlarm(false);
      }, 5000); // Stop the alarm after 5 seconds (adjust as needed)
    }
  }, [alarm]);

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
