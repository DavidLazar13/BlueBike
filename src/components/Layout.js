import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import Navigation from './Navigation';
import ProjectsNavigation from './ProjectsNavigation';
import '../style.css';

const theme = {
  colors: {
    primary: '#555555',
    secondary: '#C7C4C0',
  },
  assets: {
    mainLogo: './blue-bike.svg',
    secondaryLogo: './&.svg',
  },
};

const slideAnimation = {
  in: {
    x: '-100vw',
  },
  animate: {
    x: '0vw',
    transition: {
      when: 'beforeChildren',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  exit: {
    x: '-100vw',
  },
};

const fadeAnimation = {
  in: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      ease: 'easeIn',
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

const AnimatedCol = styled(motion.div)`
  position: relative;
`;

const NavigationCell = styled(Cell)`
margin-top: 96px;
`;

const Image = styled.img`

`;

const Div = styled.div`
margin-top: 96px;
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
        <Grid columns={12}>
          <NavigationCell width={isSecondColumnActive ? 2 : 4}>
            {/* <AnimatePresence exitBeforeEnter="true">
              <AnimatedCol
                key="index"
                initial="in"
                animate="animate"
                exit="exit"
                variants={slideAnimation}
              >
                <Div>
                  <Link to="/">
                    <Image src="./blue-bike.svg" />
                  </Link>
                </Div>
              </AnimatedCol>
            </AnimatePresence> */}
            <Navigation />
          </NavigationCell>

          {projectsNavigationActive && (
            <Cell width={2}>
              <AnimatePresence exitBeforeEnter>
                <AnimatedCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={slideAnimation}
                >
                  <Div>
                    <Image src="./&.svg" />
                  </Div>
                </AnimatedCol>
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                <AnimatedCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={fadeAnimation}
                >
                  <ProjectsNavigation />
                </AnimatedCol>
              </AnimatePresence>
            </Cell>
          )}

          {contactNavigationActive && (
            <Cell width={2}>
              <AnimatePresence exitBeforeEnter>
                <AnimatedCol
                  key="projects"
                  initial="in"
                  animate="animate"
                  exit="exit"
                  variants={fadeAnimation}
                >
                  <p></p>
                </AnimatedCol>
              </AnimatePresence>
            </Cell>
          )}

          <Cell width={8}>
            <AnimatePresence exitBeforeEnter>
              <AnimatedCol
                key={location.pathname}
                initial="in"
                animate="animate"
                exit="exit"
                variants={fadeAnimation}
              >
                {children}
              </AnimatedCol>
            </AnimatePresence>
          </Cell>
        </Grid>
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
