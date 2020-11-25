import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

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

const Text = styled.div`
  font-size: 40px;
  color: black;
`;
const Grid = styled.div`
  display: grid;


`;

function Home(props) {
  const { data } = props;
  return (
    <Layout>
      <Grid>
        <Text>
          {data.allContentfulProject.edges.map(
            project => (
              <div>
                <Link to={`/projects/${project.node.slug}`}>
                  {project.node.title}
                </Link>
              </div>
            ),
          )}
        </Text>
      </Grid>
    </Layout>
  );
}

export default Home;
