import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import Navigation from './Navigation';
import ProjectsNavigation from './ProjectsNavigation';
import '../style.css';
import { theme, animations } from '../theme';
import ContactComponent from "./Contact";
import breakpoint from 'styled-components-breakpoint';
import { useMatch } from "@reach/router";
import BackgroundComponent from "./Background";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const GridWrapper = styled.div`
  height: 100vh;
  padding-left: 40px;
  display: grid;
  grid: 
      'col1 col2'
      'col1 col3';
  ${breakpoint('desktop')`
    padding-left: 80px;
    grid: unset;
    grid-template-columns: 165px 150px auto;
  `}
`;

const Col = styled.div`

`;

const AnimatedCol = styled(motion.div)`
  position: relative;
`;

const ContentCol = styled(motion.div)`
  height: 100%;
  max-height: 100vh;
`;

const NavigationCell = styled(Col)`
  display: flex;
  padding: 48px 0 42px 0;
  flex-direction: column;
  grid-area: col1;
  min-width: 165px;
  &:nth-of-type(2){
    grid-area: col2;
    min-width: 115px;
    padding-left: 0;
    ${breakpoint('desktop')`
      width: 150px;
      grid-area: unset;
    `};
  }
  ${breakpoint('desktop')`
    padding: 96px 0 48px 0;
    grid-area: unset;
    height: unset;
  `};
`;

const ProjectsCell = styled(Col)`
  display: none;
  margin-left: -40px;
  grid-area: col3;
  position: absolute;
  top: 24%;
  width: 100%;
  height: 60%;
  ${({isActive}) => isActive && css`
    display: block;
  `};
  ${breakpoint('desktop')`
    margin-left: unset;
    display: flex;
    flex-direction: column;
    grid-area: unset;
    position: unset;
    height: unset;
  `};
`;


const Image = styled.img`

`;

const Div = styled.div`
align-items: center;
justify-content: left;
display: flex;
`;

const SecondLogoWrapper = styled.div`
`;

function Layout(props) {
  const { children, location } = props;
  const isProjectsActive = useMatch('/projects/') || useMatch('/projects/:var');
  const isContactActive = useMatch('/contact');
  const isContentActive = useMatch('/projects/:var') || useMatch('/contact/');
  const isBackgroundCollapsed = useMatch('/projects/') || useMatch('/contact/') || useMatch('/projects/:var');

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <BackgroundComponent isBackgroundCollapsed={isBackgroundCollapsed}>
          <GridWrapper>
            {/* Main Nav Column */}
            <NavigationCell>
              <AnimatePresence exitBeforeEnter={false}>
                <AnimatedCol
                  key="index"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={animations.fadeAnimation}
                >
                  <Div>
                    <Link to="/">
                      <Image src="/blue-bike.svg" />
                    </Link>
                  </Div>
                </AnimatedCol>
                <Navigation />
              </AnimatePresence>
            </NavigationCell>
            <NavigationCell>
              {isProjectsActive && (
                <>
                  <AnimatePresence exitBeforeEnter={false}>
                    <AnimatedCol
                      key="projects"
                      initial="in"
                      animate="animate"
                      exit="exit"
                      variants={animations.fadeAnimation}
                    >
                      <SecondLogoWrapper>
                        <Image src="/&.svg" />
                      </SecondLogoWrapper>
                    </AnimatedCol>
                  </AnimatePresence>
                  <AnimatePresence exitBeforeEnter={false}>
                    <AnimatedCol
                      key="projects"
                      initial="in"
                      animate="animate"
                      exit="exit"
                      variants={animations.slideAnimation}
                    >
                      <ProjectsNavigation />
                    </AnimatedCol>
                  </AnimatePresence>
                </>
              )}
              {isContactActive && (
                <AnimatePresence exitBeforeEnter>
                  <ContentCol
                    key="projects"
                    initial="in"
                    animate="animate"
                    exit="exit"
                    variants={animations.slideAnimation}
                  >
                    <ContactComponent />
                  </ContentCol>
                </AnimatePresence>
              )}
            </NavigationCell>
            <ProjectsCell isActive={isContentActive} >
              <AnimatePresence exitBeforeEnter>
                <ContentCol
                  key={location.pathname}
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={animations.fadeAnimation}
                >
                  {children}
                </ContentCol>
              </AnimatePresence>
            </ProjectsCell>
          </GridWrapper>
        </BackgroundComponent>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
