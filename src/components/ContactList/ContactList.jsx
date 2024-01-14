import { ContactListElement } from './ContactListElement';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { List } from '@chakra-ui/react';

export const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <List>
      {contactsList.map(contact => (
        <ContactListElement key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
