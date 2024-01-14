import { Navigation } from 'components/Navigation/Navigation';
import { Box } from '@chakra-ui/react';

export const AppBar = () => {
  return (
    <Box w="100%" borderBottom="2px solid teal" p="10px" mb="20px">
      <Navigation />
    </Box>
  );
};
