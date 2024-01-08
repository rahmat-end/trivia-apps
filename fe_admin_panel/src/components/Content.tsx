/** @format */

// src/components/ContentManagement.tsx
import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const ContentManagement: React.FC = () => {
  const handleAddContent = () => {
    // Logika untuk menambah konten
    console.log("Menambah konten...");
  };

  return (
    <Box
      p='4'
      borderWidth='1px'
      borderRadius='lg'>
      <Text
        fontSize='lg'
        fontWeight='bold'
        mb='4'>
        Manajemen Konten
      </Text>
      <Button
        colorScheme='green'
        onClick={handleAddContent}>
        Tambah Konten
      </Button>
    </Box>
  );
};

export default ContentManagement;
