import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Adress = styled.p`
color: ${({ theme }) => theme.colors.primary};
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 1.2px;
`;

const Phone = styled.p`
color: ${({ theme }) => theme.colors.primary};
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 6px;
`;

export const CONTACT_QUERY = graphql`
query CONTACT_QUERY {
  contentfulContact {
    adress
    phone
    eMail
  }
}
`

function Contact({data} ) {
    const {contentfulContact} = data;
  return (
    <>
      <Adress>{contentfulContact.adress}</Adress>
      <Adress>{contentfulContact.eMail}</Adress>
      <Phone>{contentfulContact.phone}</Phone>
    </>
  );
}

export default Contact;
