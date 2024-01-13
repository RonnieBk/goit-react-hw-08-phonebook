import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactListElement = ({ contact }) => {
  const { name, phone, id } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id} className={css.listItem}>
      {name}: {phone}{' '}
      <button type="button" className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListElement.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
