import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { NavLink, NavItem } from './Navigation';

const Wrapper = styled.div`
margin-top: 138px;
`;

function ProjectsNavigation({ data }) {
  return (
    <Wrapper>
      <ul>
        {data.allContentfulProject.edges.map(data => (
          <NavItem key={data.node.id}>
            <NavLink to={`/projects/${data.node.slug}`}>{data.node.title}</NavLink>
          </NavItem>
        ))}
      </ul>
    </Wrapper>
  );
}

export default ProjectsNavigation;
