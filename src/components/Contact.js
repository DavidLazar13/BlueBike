import React from 'react';
import styled from "styled-components";

const ContactItem = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  line-height: 13px;
  letter-spacing: 6px;
`;

function ContactComponent() {
    return (
        <div>
            <ContactItem>ADRESA</ContactItem>
            <ContactItem>E-MAIL</ContactItem>
            <ContactItem>TELEFON</ContactItem>
        </div>
    )
}

export default ContactComponent;