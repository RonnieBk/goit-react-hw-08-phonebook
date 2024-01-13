import css from './ContactList.module.css';
import { ContactListElement } from './ContactListElement';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const ContactList = () => {
  const contactsList = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contactsList.map(contact => (
        <ContactListElement key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
