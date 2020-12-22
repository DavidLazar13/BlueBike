import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import Navigation from './Navigation';
import ProjectsNavigation from './ProjectsNavigation';
import '../style.css';
import {theme, animations} from '../theme';
import ContactComponent from "./Contact";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const GridWrapper = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  height: 100%;
  display: grid;
  grid-template-columns: 165px 150px auto;
`;

const Col = styled.div`

`;

const AnimatedCol = styled(motion.div)`
  position: relative;
`;

const ContentCol = styled(motion.div)`
  height: 100%;
`;

const NavigationCell = styled(Col)`
  padding: 96px 0 56px 0;

`;

const Image = styled.img`

`;

const Div = styled.div`
align-items: center;
justify-content: left;
display: flex;
`;

function Layout(props) {
  const {
    children, location, data,
  } = props;
  const projectsNavigationActive = location.pathname.indexOf('projects') === 1;
  const contactNavigationActive = location.pathname.indexOf('contact') === 1;
  const isSecondColumnActive = projectsNavigationActive || contactNavigationActive;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GridWrapper>
          {/* Main Nav Column */}
          <NavigationCell>
            <Navigation />
          </NavigationCell>
          {isSecondColumnActive || (
              <NavigationCell/>
          )}
          {/* Projects Column */}
          {projectsNavigationActive && (
            <NavigationCell>
              <AnimatePresence exitBeforeEnter>
                <AnimatedCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={animations.slideAnimation}
                >
                  <Div>
                    <Image src="/&.svg" />
                  </Div>
                </AnimatedCol>
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                <AnimatedCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={animations.fadeAnimation}
                >
                  <ProjectsNavigation />
                </AnimatedCol>
              </AnimatePresence>
            </NavigationCell>
          )}
          {/* Contact Column */}
          {contactNavigationActive && (
            <NavigationCell>
              <AnimatePresence exitBeforeEnter>
                <ContentCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={animations.fadeAnimation}
                >
                  <ContactComponent/>
                </ContentCol>
              </AnimatePresence>
            </NavigationCell>
          )}
          {/* Content Column */}
          <Col>
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
          </Col>
        </GridWrapper>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
