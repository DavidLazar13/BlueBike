import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
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
  background-color: ${({theme, isTransparent}) => isTransparent ? 'white' : theme.colors.background};
  transition: 0.3s ease background-color;
  display: flex;
  padding: 96px 0 48px 0;
  flex-direction: column;
`;

const ProjectsCell = styled(Col)`
  background-color: ${({theme}) => theme.colors.background};
  display: flex;
  flex-direction: column;
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
          <NavigationCell isTransparent={isSecondColumnActive}>
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
          {!isSecondColumnActive && (
            <NavigationCell isTransparent={isSecondColumnActive}/>
          )}
          {/* Projects Column */}
          {projectsNavigationActive && (
            <NavigationCell isTransparent={isSecondColumnActive}>
              <AnimatePresence exitBeforeEnter={false}>
                <AnimatedCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={animations.slideAnimation}
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
                  variants={animations.fadeAnimation}
                >
                  <ProjectsNavigation />
                </AnimatedCol>
              </AnimatePresence>
            </NavigationCell>
          )}
          {/* Contact Column */}
          {contactNavigationActive && (
            <NavigationCell isTransparent={isSecondColumnActive}>
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
          <ProjectsCell>
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
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
