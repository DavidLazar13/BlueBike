import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
align-items: center;
justify-content: left;
display: flex;
`;

export const NavList = styled.ul`
padding: 0px;
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
            {/* <div>
              <img src="./blue-bike.svg" />
            </div> */}
          </NavLink>
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
