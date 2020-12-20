import React from 'react';
import styled from 'styled-components';

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

function Contact({ location }) {
  return (
    <Wraper>
      <div>
        <Adress>Bulevardul Elisabeta 2b, Constanta</Adress>
        <Adress>contact@bulebike.ro</Adress>
        <Phone>+40 729 xxx xxx</Phone>
      </div>
    </Wraper>
  );
}

export default Contact;
