import React from 'react';
import styled, { css } from 'styled-components';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { breakpoint } from 'styled-components-breakpoint';
import { useMatch } from '@reach/router';
import { NavList } from './Navigation';

const Wrapper = styled.div`

`;

const ProjectNavItem = styled.li`
  list-style: none;
  padding-top: 8px;
  padding-bottom: 8px;
  ${({ projectPageActive }) => projectPageActive && css`
    ${({ isActive }) => !isActive && css`
    display: none;
      ${breakpoint('desktop')`
      display: block;
      `};
    `};
  `};
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
    pointer-events: none;
    margin-top: 8px;
    display: block;
    position: absolute;
    width: 0;
    height: 1px;
    opacity: 0;
    transition: 0.7s ease all;
  }

  &.active:after {
    display: block;
    width: 50px;
    opacity: 1;
  }

  &:hover {
    text-decoration: none;
    cursor: pointer;

    &:after {
      display: block;
      opacity: 1;
      width: 50px;
      opacity: 1;
      transition: 0.7s ease all;
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
  const projectPageActive = useMatch('/projects/:var');
  return (
    <Wrapper>
      <NavList>
        {data.allContentfulProject.edges.map(data => (
          <ProjectNavItem
            projectPageActive={projectPageActive}
            isActive={projectPageActive && projectPageActive.var === data.node.slug}

            key={data.node.id}
          >
            <ProjectNavLink activeClassName="active" to={`/projects/${data.node.slug}/`}>
              {data.node.title}
            </ProjectNavLink>
          </ProjectNavItem>
        ))}
      </NavList>
    </Wrapper>
  );
}

export default ProjectsNavigation;
