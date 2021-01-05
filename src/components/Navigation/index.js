import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavWrapper = styled.div`
height: 100%;
align-items: flex-start;
justify-content: space-between;
display: flex;
flex-direction: column;
`;

export const NavList = styled.ul`
padding: 12px 0 0 0;
margin: 0;
`;

const NavItem = styled.li`
  list-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary}; 
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 6px;
  text-decoration: none;
    &:after {
      content: '';
      background-color: ${({ theme }) => theme.colors.primary};
      pointer-events: none;
      margin-top: 8px;
      display: block;
      position: absolute;
      width: 5%;
      height: 1px;
      opacity: 0;
      transition: 0.5s;
      }
    
  
    
    &.active:after {
      display: block;
      opacity: 1;
      }
    
    &:hover {
      text-decoration: none;
      cursor: pointer;
   
      &:after {
        display: block;
        opacity: 1;
        }
      }
`;

function Navigation() {
  return (
    <NavWrapper>
      <NavList>
        <NavItem>
          <NavLink activeClassName="active" to="/projects">PROJECTS</NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem>
          <NavLink activeClassName="active" to="/contact">CONTACT</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
}

export default Navigation;
