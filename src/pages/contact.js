import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Wraper = styled.div`
  max-height: 100vh ;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 96px 0 56px 0;
  box-sizing: border-box;
`;

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

function Contact({ data }) {
    const {contentfulContact} = data;
  return (
    <Wraper>
      <div>
        <Adress>{contentfulContact.adress}</Adress>
        <Adress>{contentfulContact.eMail}</Adress>
        <Phone>{contentfulContact.phone}</Phone>
      </div>
    </Wraper>
  );
}

export default Contact;
