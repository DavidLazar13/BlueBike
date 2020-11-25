import React from 'react';
import Layout from '../components/Layout';

export const pageQuery = graphql`
query projectData($id: String!) {
    contentfulProject(id: {eq: $id}) {
        id
        slug
        title
      }
}
`

function Project(props) {
    const { contentfulProject } = props.data;
    return (
        <Layout>
            <div>
                {contentfulProject.title}
            </div>
        </Layout>
    )
}

export default Project;

