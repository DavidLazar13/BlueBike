import React from 'react';
import styled, { css } from 'styled-components';
import { graphql } from 'gatsby';

const Wrapper = styled.div`
  max-height: 100vh ;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 96px 0 48px 0;
  box-sizing: border-box;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 1.2px;
  margin: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  ${({ wide }) => wide && css`
    letter-spacing: 6px;
  `}
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
      <div>
        <Paragraph>{contentfulContact.adress}</Paragraph>
        <Paragraph>{contentfulContact.eMail}</Paragraph>
        <Paragraph wide>{contentfulContact.phone}</Paragraph>
      </div>
    </Wrapper>
  );
}

export default Contact;
