import { Container, Flex, Heading, Image } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Container>
      <Flex>
        <Heading pt="100px" textAlign="center">
          Welcome to the Phonebook App!
        </Heading>
        <Image
          width="200"
          height="200"
          src="https://img.icons8.com/clouds/500/phone-book.png"
          alt="phone-book"
        />
      </Flex>
    </Container>
  );
};
