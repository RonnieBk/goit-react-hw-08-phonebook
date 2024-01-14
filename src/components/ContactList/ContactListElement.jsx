import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Button, ListItem } from '@chakra-ui/react';

export const ContactListElement = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem id={id}>
      {name}: {number}{' '}
      <Button
        variant="outline"
        colorScheme="teal"
        size="xs"
        type="button"
        onClick={handleDelete}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactListElement.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
