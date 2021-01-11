import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import { useMatch } from "@reach/router";
import '../style.css';

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, white 315px, ${({theme}) => theme.colors.background} 315px);
  //transition: ;
  
`;



function BackgroundComponent(props) {
    const { children } = props;
    return (
        <>
            <BackgroundDiv>
                {children}
            </BackgroundDiv>
        </>
        )
}

export default BackgroundComponent;