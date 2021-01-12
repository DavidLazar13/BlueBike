import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';
import { breakpoint } from 'styled-components-breakpoint';
import GoogleMap from '../components/GoogleMap';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0;
  ${breakpoint('desktop')`
  padding: 96px 0 48px 48px;
  `};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 1.2px;
  margin: 0;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  ${({ wide }) => wide && css`
    letter-spacing: 6px;
  `};
  ${breakpoint('desktop')`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 0px;
  `};
`;

export const CONTACT_QUERY = graphql`
query CONTACT_QUERY {
  contentfulContact {
    adress
    phone
    eMail
  }
}
`;

function Contact({ data }) {
  const { contentfulContact } = data;
  return (
    <Wrapper>
        <GoogleMap />
        <Paragraph>{contentfulContact.adress}</Paragraph>
        <Paragraph>{contentfulContact.eMail}</Paragraph>
        <Paragraph wide>{contentfulContact.phone}</Paragraph>
    </Wrapper>
  );
}

export default Contact;
