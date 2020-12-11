import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
query data {
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
      }
    }
  }
}
`;

function Home(props) {
  return (
    <>
      <p>Caca</p>
    </>
  );
}

export default Home;
