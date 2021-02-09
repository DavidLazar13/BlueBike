import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO() {
  return (
    <Helmet
      title="BlueBike"
      meta={[
        {
          property: 'og:title',
          content: 'BlueBike ',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          // You should ideally replace the hardcoded URL below with a value you set
          // in your gatsby-config.js file.  And import all shared site metadata into
          // this component with the useStaticQuery hook.
          content: 'thumbnail.png',
        },
      ]}
    />
  );
}
