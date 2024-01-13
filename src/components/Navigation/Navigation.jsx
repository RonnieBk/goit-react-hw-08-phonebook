import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 30px;
  &.active {
    font-weight: bold;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.navigation}>
      <StyledLink to="/">Home</StyledLink>

      {isLoggedIn ? (
        <>
          <StyledLink to="/contacts" className={css.link}>
            Contacts
          </StyledLink>
          <span>
            <UserMenu />
          </span>
        </>
      ) : (
        <>
          <StyledLink to="/register" className={css.link}>
            Register
          </StyledLink>
          <StyledLink to="/login" className={css.link}>
            Login
          </StyledLink>
        </>
      )}
    </nav>
  );
};
