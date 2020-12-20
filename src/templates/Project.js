import React from 'react';
import { graphql, Link } from 'gatsby';
import { Cell, Grid } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { wrap } from 'popmotion';
import { useLocation } from '@reach/router';
import Img from 'gatsby-image';

export const pageQuery = graphql`
query projectData($id: String!) {
    contentfulProject(id: {eq: $id}) {
      id
      slug
      title
      thumbnail {
        fluid {
        ...GatsbyContentfulFluid_tracedSVG
        }
      }
      gallery {
        fluid {
        ...GatsbyContentfulFluid
        }
      }
      }
}
`;

function Project({ data }) {
  const { contentfulProject } = data;
  const location = useLocation();
  return (
    <>
      <Grid columns={1}>
        <Cell>
          <Img fluid={contentfulProject.thumbnail.fluid} />

        </Cell>
      </Grid>
    </>
  );
}


export default Project;
