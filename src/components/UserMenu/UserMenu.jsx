import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from 'hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <span>
      <span className={css.text}>{user.email}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </span>
  );
};
