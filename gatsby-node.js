const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectsQuery = await graphql(`
  query data {
    allContentfulProject {
      edges {
        node {
          id
          slug
        }
      }
    }
  }
  `);

  if (projectsQuery.errors) {
    throw new Error(projectsQuery.errors);
  }

  const { allContentfulProject } = projectsQuery.data;

  allContentfulProject.edges.forEach(project => {
    createPage({
      path: `/projects/${project.node.slug}`,
      component: path.resolve('./src/templates/Project.js'),
      context: {
        id: project.node.id,
        slug: project.node.slug,
      },
    });
  });
};
