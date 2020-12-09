import React from 'react';
import { graphql, Link } from 'gatsby';
import { Cell, Grid } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import ProjectsNavigation from '../components/ProjectsNavigation';

export const pageQuery = graphql`
query projectData($id: String!) {
    contentfulProject(id: {eq: $id}) {
      id
      slug
      title
      thumbnail {
        sizes {
          src
        }
      }
      }
}
`;

const Image = styled.img`
width: 100%;
height: 100%;
overflow: auto;
`;

function Project({ data }) {
  const { contentfulProject } = data;
  const location = useLocation();
  return (
    <>
      <Grid columns={1}>
        {/* <Cell> */}
        {/*  /!*<ProjectsNavigation location={location} />*!/ */}
        {/* </Cell> */}
        <Cell>
          <Image src={contentfulProject.thumbnail.sizes.src} />
        </Cell>
      </Grid>
    </>
  );
}

export default Project;
