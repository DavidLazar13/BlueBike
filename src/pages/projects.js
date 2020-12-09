import React from 'react';
import { graphql } from 'gatsby';
import { Cell, Grid } from 'styled-css-grid';

export const NAV_QUERY = graphql`
query data2 {
  allContentfulProject {
    edges {
      node {
        id
        thumbnail {
          sizes {
            src
          }
        }
        title
        slug
        gallery {
          id
          sizes {
            src
          }
        }
      }
    }
  }
}
`;

function Projects(props) {
  return (
    <>
      <Grid columns={1}>
        <Cell>
          <p>Projects slideshow</p>
        </Cell>
      </Grid>
    </>
  );
}

export default Projects;
