import React from 'react';
import styled from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { NavList } from './Navigation';

const Wrapper = styled.div`
`;

const ProjectNavItem = styled.li`
  padding-top: 8px;
  padding-bottom: 8px;
  list-style: none;
`;

const ProjectNavLink = styled(Link)`
color: ${({ theme }) => theme.colors.secondary};
text-transform: uppercase;
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 6px;
text-decoration: none;
  
  &:after {
    content: '';
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-top: 8px;
    display: block;
    position: absolute;
    width: 30%;
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
          <ProjectNavItem key={data.node.id}>
            <ProjectNavLink to={`/projects/${data.node.slug}`}>{data.node.title}</ProjectNavLink>
          </ProjectNavItem>
        ))}
      </NavList>
    </Wrapper>
  );
}

export default ProjectsNavigation;
