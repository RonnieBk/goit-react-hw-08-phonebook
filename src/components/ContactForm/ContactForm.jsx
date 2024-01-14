import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    const foundContact = contacts.find(
      contact => contact.name === newContact.name
    );

    if (foundContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`);
    } else dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <FormControl>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          name="name"
          id="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          mb="12px"
          focusBorderColor="teal.400"
        />
        <FormLabel htmlFor="phone">Number</FormLabel>
        <Input
          type="tel"
          name="number"
          id="phone"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          mb="20px"
          focusBorderColor="teal.400"
        />
        <Button variant="outline" colorScheme="gray" type="submit">
          Add contact
        </Button>
      </form>
    </FormControl>
  );
};
