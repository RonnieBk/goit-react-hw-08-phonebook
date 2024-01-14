import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

import styled from 'styled-components';
import { Flex } from '@chakra-ui/react';

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    font-weight: bold;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex gap="20px">
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </Flex>

      {isLoggedIn ? (
        <Flex alignItems="center" gap="10px">
          <UserMenu />
        </Flex>
      ) : (
        <Flex gap="30">
          <StyledLink to="/register">Register</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </Flex>
      )}
    </Flex>
  );
};
