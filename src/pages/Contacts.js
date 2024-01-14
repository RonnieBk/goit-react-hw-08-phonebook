import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import { Helmet } from 'react-helmet-async';

import { Box, Flex, Heading, Spinner } from '@chakra-ui/react';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>

      <Box p="20px">
        <Heading>Add New Contact</Heading>
        <ContactForm />
      </Box>

      <Box p="20px" w="100%" h="100%" bg="lightgreen">
        <Heading>Your Contacts</Heading>
        <Filter />
        {isLoading && !error && (
          <Flex alignItems="center">
            <b>Request in progress... </b>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
              size="xl"
            />
          </Flex>
        )}
        <ContactList />
      </Box>
    </div>
  );
}
