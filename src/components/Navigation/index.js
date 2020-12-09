import React from 'react';
import styled from 'styled-components';
// import Link from '../CustomLink';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
margin-top: 96px;
align-items: center;
justify-content: center;
display: flex;
`;

const NavList = styled.ul`
padding: 0px;
`;

export const NavItem = styled.li`
list-style: none;
`;

export const NavLink = styled(Link)`
color: 555555;
font-family: 'Archivo', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 6px;
text-decoration: none;
&:hover, :active, :visited {
  text-decoration: none;
}
`;

function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink to="/">BLUE BIKE</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">PROJECTS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">CONTACT</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default Navigation;
