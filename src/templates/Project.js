import React from 'react';
import { graphql, Link } from 'gatsby';
import { Cell, Grid } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import ProjectsNavigation from '../components/ProjectsNavigation';
import { useLocation } from '@reach/router';

export const pageQuery = graphql`
query projectData($id: String!) {
    contentfulProject(id: {eq: $id}) {
        id
        slug
        title
      }
}
`;

function Project({ data }) {
  const { contentfulProject } = data;
  const location = useLocation();
  return (
    <>
      <Grid columns={1}>
        {/*<Cell>*/}
        {/*  /!*<ProjectsNavigation location={location} />*!/*/}
        {/*</Cell>*/}
        <Cell>
          <p>{contentfulProject.title}</p>
        </Cell>
      </Grid>
    </>
  );
}

export default Project;
