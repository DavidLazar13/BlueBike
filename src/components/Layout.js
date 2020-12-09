import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import ProjectsNavigation from './ProjectsNavigation';

const theme = {
  color: 'black',
  pula: 'este',
};

const animateVariant1 = {
  in: {
    x: '100vw',
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
    x: '100vw',
  },
};

const animateVariant2 = {
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
  /* align-items: center;
  justify-content: center;
  display: flex; */
`;

function Layout(props) {
  const {
    children, location, data,
  } = props;
  const projectsNavigationActive = location.pathname.indexOf('projects') !== -1;

  return (
    <Wrapper>
      <Grid columns={projectsNavigationActive ? 15 : 15}>
        <NavigationCell left={2} width={2}>
          <Navigation />
        </NavigationCell>

        {/* Asta e cam tiganeala da nu prea vad cum sa facem altfel. */}
        {projectsNavigationActive ? (
          <Cell width={2}>
            <AnimatePresence exitBeforeEnter>
              <AnimatedCol
                key="projects"
                initial="in"
                animate="animate"
                exit="exit"
                variants={animateVariant2}
              >
                <ProjectsNavigation data={data} />
              </AnimatedCol>
            </AnimatePresence>
          </Cell>
        ) : (
          <Cell width={2}>
          </Cell>
        )}

        <Cell width={10}>
          <AnimatePresence exitBeforeEnter>
            <AnimatedCol
              key={location.pathname}
              initial="in"
              animate="animate"
              exit="exit"
              variants={animateVariant2}
            >
              {children}
            </AnimatedCol>
          </AnimatePresence>
        </Cell>
      </Grid>
    </Wrapper>
  );
}

export default Layout;
