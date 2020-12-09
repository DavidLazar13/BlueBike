import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { NavLink, NavItem } from './Navigation';

export const pageQuery = graphql`
query projectData($id: String!) {
    contentfulProject(id: {eq: $id}) {
        id
        slug
        title
      }
}
`;

const Wrapper = styled.div`
margin-top: 138px;
`;

function ProjectsNavigation({ data }) {
  const { contentfulProject } = data;
  return (
    <Wrapper>
      <ul>
        <NavItem>
          <NavLink to="/projects/bluebike">GARDEN</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects/ciupiicii">KUDOS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects/bluebike">POARTA 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects/ciupiicii">PRIMO</NavLink>
        </NavItem>
      </ul>
    </Wrapper>
  );
}

export default ProjectsNavigation;
