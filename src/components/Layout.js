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

const animatedColVariants = {
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

function Layout(props) {
  const {
    children, location,
  } = props;

  const projectsNavigationActive = location.pathname.indexOf('projects') !== -1;

  return (
    <Wrapper>
      <Grid columns={projectsNavigationActive ? 3 : 2}>
        <Cell>
          <Navigation />
        </Cell>

        {/* Asta e cam tiganeala da nu prea vad cum sa facem altfel. */}
        {projectsNavigationActive && (
          <Cell>
            <AnimatePresence exitBeforeEnter>
              <AnimatedCol
                key="projects"
                initial="in"
                animate="animate"
                exit="exit"
                variants={animatedColVariants}
              >
                <ProjectsNavigation />
              </AnimatedCol>
            </AnimatePresence>
          </Cell>
        )}

        <Cell>
          <AnimatePresence exitBeforeEnter>
            <AnimatedCol
              key={location.pathname}
              initial="in"
              animate="animate"
              exit="exit"
              variants={animatedColVariants}
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
