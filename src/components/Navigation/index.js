import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
height: 100%;
align-items: left;
justify-content: space-between;
display: flex;
flex-direction: column;
`;

export const NavList = styled.ul`
padding: 0px;
margin: 0px;
`;

export const NavItem = styled.li`
list-style: none;
`;

const NavLink = styled(Link)`
text-transform: capitalize;
color: ${({ theme }) => theme.colors.primary};
font-family: 'Archivo', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 6px;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;

function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <img src="/blue-bike.svg" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">PROJECTS</NavLink>
        </NavItem>

      </NavList>
      <NavList>
        <NavItem>
          <NavLink to="/contact">CONTACT</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default Navigation;
