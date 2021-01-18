import React from 'react';
import styled from "styled-components";

const ErrorCode = styled.p`
  font-size: 250px;
  color: rgba(242, 241, 238, 1);
  margin: 0;
  font-weight: 700;
  line-height: 272px;
  text-align: center;
  filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.25));
`;

const ErrorMessage = styled.p`
  font-size: 26px;
  color: rgba(85, 85, 85, 1);
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 13px;
  text-align: center;
  margin: 0;
`;

const ErrorWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Error() {
    return (
        <ErrorWrapper>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>PAGE NOT FOUND</ErrorMessage>
        </ErrorWrapper>
    )
}

export default Error;