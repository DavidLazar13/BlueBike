import React from "react";
import styled from "styled-components";
import breakpoint from 'styled-components-breakpoint';
import { useMatch } from "@reach/router";
import '../style.css';

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
          90deg,
          white -1%,
          ${({theme}) => theme.colors.background} 0%)
;
  background-repeat: no-repeat;
  background-position-x: ${({currentAnimationState}) => currentAnimationState.mobile};
  transition: 0.5s ease background-position-x;
  ${breakpoint('desktop')`
    background-position-x: ${({currentAnimationState}) => currentAnimationState.desktop};
  `};
`;
const animationStates = {
    initial: {
        mobile: '40px',
        desktop: '80px',
    },
    collapsed: {
        mobile: '205px',
        desktop: '395px',
    }
};

function BackgroundComponent(props) {
    const { children, isBackgroundCollapsed } = props;
    const currentAnimationState = isBackgroundCollapsed ? animationStates.collapsed : animationStates.initial;
    return (
        <>
            <BackgroundDiv currentAnimationState={currentAnimationState}>
                {children}
            </BackgroundDiv>
        </>
        )
}

export default BackgroundComponent;