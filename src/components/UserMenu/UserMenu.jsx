import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Text } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <>
      <Text fontStyle="italic">{user.email}</Text>
      <Button
        variant="outline"
        colorScheme="teal"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
};
