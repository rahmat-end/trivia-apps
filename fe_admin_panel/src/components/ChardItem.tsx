import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

interface CardItemProps {
  name: string;
  value: number;
  bgColor: string;
}

const CardItem: React.FC<CardItemProps> = ({ name, value, bgColor }) => {
  const textColor = useColorModeValue('gray.800', 'white');
  const boxShadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(255, 255, 255, 0.1)');

  return (
    <Box
      bg={bgColor}
      borderRadius="xl"
      boxShadow={`0 4px 8px 0 ${boxShadowColor}`}
      p={6}
      textAlign="center"
      color={textColor}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'scale(1.05)',
        boxShadow: `0 8px 16px 0 ${boxShadowColor}`,
      }}
    >
      <Heading as="h2" size="md" mb={2}>
        {name}
      </Heading>
      <Text fontSize="lg">Value: {value}</Text>
    </Box>
  );
};

export default CardItem;
