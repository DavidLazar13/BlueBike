import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { NavList, NavItem } from './Navigation';

const Wrapper = styled.div`
`;

const ProjectNavLink = styled(Link)`
color: ${({ theme }) => theme.colors.secondary};
text-transform: uppercase;
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 6px;
text-decoration: none;
&:hover {
  text-decoration: underline;
}
`;

const NAV_QUERY = graphql`
query NAV_QUERY {
  allContentfulProject {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`;

function ProjectsNavigation() {
  const data = useStaticQuery(NAV_QUERY);
  return (
    <Wrapper>
      <NavList>
        {data.allContentfulProject.edges.map(data => (
          <NavItem key={data.node.id}>
            <ProjectNavLink to={`/projects/${data.node.slug}`}>{data.node.title}</ProjectNavLink>
          </NavItem>
        ))}
      </NavList>
    </Wrapper>
  );
}

export default ProjectsNavigation;
