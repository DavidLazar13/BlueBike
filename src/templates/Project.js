import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { useLocation } from '@reach/router';
import Carousel from "../components/Carousel/Carousel";
import {breakpoint} from "styled-components-breakpoint";

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
  ${breakpoint('desktop')`
  height: 100vh;
  `};
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
