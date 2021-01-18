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
  height: 100%;
  padding-left: 40px;
  display: grid;
  grid-template-columns: 165px auto;
  grid-template-areas: 
      'col1 col2';
  ${breakpoint('desktop')`
    padding-left: 80px;
    grid-template-areas: unset;
  `}
`;

const SecondGridWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-area: col2;
  grid-template-areas: 
      'col3 col4';
  grid-template-columns: 150px auto;
  ${breakpoint('desktop')`
    grid-area: unset;
    grid-template-area: unset;
    position: unset;
  `}
`;

const Col = styled.div`
    
`;

const NavigationCell = styled(Col)`
  display: flex;
  padding: 48px 0 42px 0;
  flex-direction: column;
  grid-area: col1;
  width: 165px;
  ${breakpoint('desktop')`
    padding: 96px 0 48px 0;
    grid-area: unset;
    height: unset;
  `};
`;

const SecondNavigationCell = styled(Col)`
  padding: 48px 0 42px 0;
  grid-area: col3;
  min-width: 115px;
  ${({isMobile}) => isMobile && css`
    display: block;
    position: absolute;
    top: 24%;
    right: 0%;
    width: 100%;
    height: 60%;
    ${breakpoint('desktop')`
      display: unset;
      position: unset;
      top: unset;
      right: unset;
      width: unset;
      height: unset;
    `};
  `};
  ${breakpoint('desktop')`
      padding: 96px 0 48px 0;
      height: unset;
      width: 150px;
      grid-area: unset;
  `};
`;

const ProjectsCell = styled(Col)`
  display: none;
  grid-area: col4;
  overflow: hidden;
  position: absolute;
  top: 24%;
  right: 0%;
  width: 100%;
  height: 60%;
  ${({isActive}) => isActive && css`
    display: block;
  `};
  ${breakpoint('desktop')`
    display: flex;
    flex-direction: column;
    grid-area: unset;
    position: unset;
    top: 0%;
    height: 100%;
  `};
`;


const AnimatedCol = styled(motion.div)`
  position: relative;
  padding: 0;
  margin: 0;
`;

const ContentCol = styled(motion.div)`
  height: 100%;
`;

const Image = styled.img`
`;

const Div = styled.div`
  display: block;
  position: fixed;
`;

function Layout(props) {
  const { children, location } = props;
  const isProjectsActive = useMatch('/projects/') || useMatch('/projects/:var');
  const isContactActive = useMatch('/contact');
  const isContentActive = useMatch('/projects/:var') || useMatch('/contact/');
  const isBackgroundCollapsed =
      useMatch('/projects/') || useMatch('/contact/') || useMatch('/projects/:var');
  const isMobile = useMatch('/contact/');

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
              </AnimatePresence>
              <Navigation />
            </NavigationCell>
            <SecondGridWrapper>
              <SecondNavigationCell isMobile={isMobile}>
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
                        <Div>
                          <Image src="/&.svg" />
                        </Div>
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
              </SecondNavigationCell>
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
            </SecondGridWrapper>
          </GridWrapper>
        </BackgroundComponent>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
