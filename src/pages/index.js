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

function Home(props) {
  return (
    <>
      <p>home</p>
    </>
  );
}

export default Home;
