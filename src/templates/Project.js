import React from 'react';
import { graphql, Link } from 'gatsby';
import { Cell, Grid } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import { wrap } from 'popmotion';
import { useLocation } from '@reach/router';
import Img from 'gatsby-image';
import Carousel from "../components/Carousel/Carousel";

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
        id
        fluid {
        ...GatsbyContentfulFluid_tracedSVG
        }
      }
      }
}
`;

const Wrapper = styled.div`
  height: 100%;
`;

function Project({ data }) {
  const { contentfulProject } = data;
  const location = useLocation();
  const isLandscape = contentfulProject.thumbnail.fluid.aspectRatio > 1;
  return (

    <Wrapper>
      <Carousel data={contentfulProject}/>
    </Wrapper>

  );
}

export default Project;
