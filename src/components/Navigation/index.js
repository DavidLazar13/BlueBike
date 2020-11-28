import React from 'react';
import styled from 'styled-components';
// import Link from '../CustomLink';
import { Link } from 'gatsby';
const NavWrapper = styled.div`

`;

const NavList = styled.ul``;

const NavItem = styled.li``;

function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/projects">Projects</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default Navigation;
