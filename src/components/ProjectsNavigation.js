import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  background: azure;
`;
function ProjectsNavigation({ location }) {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/projects/bluebike">Project 1</Link>
        </li>
        <li>
          <Link to="/projects/ciupiicii">Project 2</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

export default ProjectsNavigation;
