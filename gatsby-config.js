/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config({
  path: '.env.development',
});

module.exports = {
/* Your site config here */
  siteMetadata: {
    title: 'BlueBike',
    titleTemplate: 'BlueBike · Modern Buildings',
    description:
      'Modern Buildings for modern life',
    url: 'BlueBike', // No trailing slash allowed!
    image: '/thumbnail.png', // Path to your image you placed in the 'static' folder
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
  ],
};
