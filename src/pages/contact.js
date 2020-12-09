import React from 'react';
import styled from 'styled-components';

const Adress = styled.p`
color: #555555;
font-family: 'Archivo', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 1.2px;
`;

const Phone = styled.p`
color: #555555;
font-family: 'Archivo', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 13px;
letter-spacing: 6px;
`;

function Contact({ location }) {
  return (
    <>
      <Adress>Bulevardul Elisabeta 2b, Constanta</Adress>
      <Adress>contact@bulebike.ro</Adress>
      <Phone>+40 729 xxx xxx</Phone>
    </>
  );
}

export default Contact;
