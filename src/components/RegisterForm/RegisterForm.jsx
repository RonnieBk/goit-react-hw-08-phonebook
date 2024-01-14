import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl isRequired>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="text"
          name="username"
          focusBorderColor="teal.400"
        />
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
          focusBorderColor="teal.300"
        />
        <Button mt="10px" variant="outline" colorScheme="gray" type="submit">
          Register
        </Button>
      </form>
    </FormControl>
  );
};
