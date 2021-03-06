import React from 'react';
import styled from 'styled-components';
import {breakpoint} from "styled-components-breakpoint";

const ContactItem = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 6px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 40px;
  margin: 0;
  ${breakpoint('desktop')`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 0;
  `};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const LabelWrapper = styled.div`
  padding-bottom: 68px;
  ${breakpoint('desktop')`
    padding-bottom: 0;
    position: unset;
    top: unset;
    z-index: unset;
    left: unset;
  `};
`;

function ContactComponent() {
  return (
    <Wrapper>
      <LabelWrapper>
        <ContactItem>ADRESA</ContactItem>
        <ContactItem>E-MAIL</ContactItem>
        <ContactItem>TELEFON</ContactItem>
      </LabelWrapper>
    </Wrapper>
  );
}

export default ContactComponent;
