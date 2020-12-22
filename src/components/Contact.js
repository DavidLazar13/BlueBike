import React from 'react';
import styled from 'styled-components';

const ContactItem = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
`;

const LabelWrapper = styled.div`
//height: 100%;
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
