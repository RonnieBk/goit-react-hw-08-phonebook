import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl isRequired>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          focusBorderColor="teal.400"
        />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          focusBorderColor="teal.400"
        />
        <Button variant="outline" colorScheme="gray" type="submit" mt="10px">
          Log In
        </Button>
      </form>
    </FormControl>
  );
};
