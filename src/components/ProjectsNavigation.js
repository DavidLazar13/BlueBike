import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { NavLink, NavItem } from './Navigation';

const Wrapper = styled.div`
margin-top: 129px;
`;

const ProjectNavLink = styled(Link)`
color: #C7C4C0;
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

function ProjectsNavigation({ data }) {
  return (
    <StaticQuery
      query={graphql`
    query data3 {
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
    `}
      render={data => (
        <Wrapper>
          <ul>
            {data.allContentfulProject.edges.map(data => (
              <NavItem key={data.node.id}>
                <ProjectNavLink to={`/projects/${data.node.slug}`}>{data.node.title}</ProjectNavLink>
              </NavItem>
            ))}
          </ul>
        </Wrapper>
      )}
    />
  );
}

export default ProjectsNavigation;
