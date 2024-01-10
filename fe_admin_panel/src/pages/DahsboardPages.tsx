import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import  { useEffect, useState } from 'react';
import CardItem from '../components/ChardItem';

const Dashboard = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Ambil data dari server atau API
    // Contoh pengisian data secara statis
    const sampleData = [
      { id: 1, name: 'Item 1', value: 20 },
      { id: 2, name: 'Item 2', value: 30 },
      { id: 3, name: 'Item 3', value: 15 },
      // ...Tambahkan data lain jika diperlukan
    ];
    setData(sampleData);
  }, []);

  const cardBgColor = useColorModeValue('white', 'gray.700');

  return (
    <Box p={4}>
      <SimpleGrid columns={[1, null, 2]} spacing={4}>
        {data.map((item) => (
          <CardItem
            key={item.id}
            name={item.name}
            value={item.value}
            bgColor={cardBgColor}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Dashboard;
